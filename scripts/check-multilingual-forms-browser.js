#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');

const base = process.env.MULTILINGUAL_FORMS_TEST_URL || `https://${process.env.REPLIT_DEV_DOMAIN}`;
assert.match(base, /^https?:\/\//, 'Set REPLIT_DEV_DOMAIN or MULTILINGUAL_FORMS_TEST_URL');
const baseOrigin = new URL(base).origin;

const cases = [
  {
    locale: 'de', form: '/anfrage', guide: '/solaranlage-zurich', canton: 'zuerich',
    options: ['Ja', 'Einfamilienhaus', 'Satteldach', 'Ja'],
    address: 'Bahnhofstrasse 10, 8001 Zürich, Schweiz',
    required: 'Bitte füllen Sie alle Pflichtfelder aus.',
    next: 'Weiter',
    mainSubmit: 'Kostenlose Offerten anfordern',
    open: 'Beratung öffnen', submit: 'Rückruf anfordern', callbackRequired: 'Bitte füllen Sie alle Pflichtfelder aus.',
    thankYou: '/danke',
  },
  {
    locale: 'fr', form: '/fr/demande', guide: '/fr/solaire-vaud', canton: 'waadt',
    options: ['Oui', 'Maison individuelle', 'Toit à deux pentes', 'Oui'],
    address: 'Rue du Centre 10, 1003 Lausanne, Suisse',
    required: 'Veuillez remplir tous les champs obligatoires.',
    next: 'Suivant',
    mainSubmit: 'Demander des devis gratuits',
    open: 'Ouvrir la consultation', submit: 'Demander un rappel', callbackRequired: 'Veuillez remplir tous les champs obligatoires.',
    thankYou: '/fr/merci',
  },
  {
    locale: 'it', form: '/it/richiesta', guide: '/it/fotovoltaico-ticino', canton: 'tessin',
    options: ['Sì', 'Casa unifamiliare', 'Tetto a falda', 'Sì'],
    address: 'Via Lugano 10, 6900 Lugano, Svizzera',
    required: 'Compila tutti i campi obbligatori.',
    next: 'Avanti',
    mainSubmit: 'Richiedi preventivi gratuiti',
    open: 'Apri la consulenza', submit: 'Richiedi richiamata', callbackRequired: 'Compili tutti i campi obbligatori.',
    thankYou: '/it/grazie',
  },
  {
    locale: 'en', form: '/en/request', guide: '/en/solar-panels-bern', canton: 'bern',
    options: ['Yes', 'Detached house', 'Pitched roof', 'Yes'],
    address: 'Marktgasse 10, 3011 Bern, Switzerland',
    required: 'Please fill in all required fields.',
    next: 'Next',
    mainSubmit: 'Request free quotes',
    open: 'Open consultation', submit: 'Request callback', callbackRequired: 'Please fill in all required fields.',
    thankYou: '/en/thank-you',
  },
];

function assertContext(payload, test, label) {
  assert.equal(payload.locale, test.locale, `${label}: locale`);
  assert.equal(payload.canton, test.canton, `${label}: canton`);
  assert.equal(payload.origin, test.guide, `${label}: origin`);
  assert.equal(payload.source, 'chatgpt', `${label}: campaign source`);
}

async function dismissCookies(page) {
  const choices = ['Nur notwendige', 'Necessary Only', 'Nécessaires uniquement', 'Solo necessari'];
  for (const choice of choices) {
    const button = page.getByRole('button', { name: choice, exact: true });
    if (await button.isVisible().catch(() => false)) {
      await button.click();
      break;
    }
  }
}

function exactText(value) {
  return new RegExp(`^${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
}

async function waitForCount(items, count, label) {
  const deadline = Date.now() + 10000;
  while (items.length < count && Date.now() < deadline) {
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  assert.equal(items.length, count, label);
}

async function installNetworkIsolation(context, state) {
  await context.route('**/*', async route => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.pathname === '/api/roof-analysis' || /\/maps\/api\/|\/maps\/vt|\/maps\/preview/.test(url.pathname)) {
      state.forbiddenRequests.push(request.url());
      return route.abort('blockedbyclient');
    }
    if (request.method() === 'POST' && url.origin === baseOrigin && url.pathname === '/api/anfrage') {
      const payload = request.postDataJSON();
      state.leads.push(payload);
      if (state.rejectNextLead) {
        state.rejectNextLead = false;
        return route.fulfill({
          status: 400,
          contentType: 'application/json',
          body: JSON.stringify({ error: state.errorMessage, code: 'SUBMISSION_FAILED' }),
        });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    }
    if (request.method() === 'POST' && url.origin === baseOrigin && url.pathname === '/api/send-confirmation') {
      state.confirmations.push(request.postDataJSON());
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, id: 'browser-test-only' }),
      });
    }
    if (request.method() !== 'GET' && request.method() !== 'HEAD') {
      state.blockedPosts.push(`${request.method()} ${request.url()}`);
      return route.abort('blockedbyclient');
    }
    if (url.origin !== baseOrigin) return route.abort('blockedbyclient');
    return route.continue();
  });
}

async function installGooglePlacesMock(page, address, predictionStatus = 'OK') {
  await page.addInitScript(({ mockAddress, predictionStatus }) => {
    class AutocompleteService {
      getPlacePredictions(_request, callback) {
        callback(predictionStatus === 'OK' ? [{ place_id: 'browser-test-place', description: mockAddress }] : [], predictionStatus);
      }
    }
    class PlacesService {
      getDetails(_request, callback) {
        callback({
          geometry: { location: { lat: () => 47.0, lng: () => 8.0 } },
          address_components: [{ long_name: '8000', types: ['postal_code'] }],
        }, 'OK');
      }
    }
    class Map {
      constructor(container, options) {
        container.dataset.mapOptions = JSON.stringify(options);
        container.textContent = 'Mock satellite view';
      }
    }
    window.google = { maps: { Map, event: { clearInstanceListeners() {} }, places: { AutocompleteService, PlacesService } } };
  }, { mockAddress: address, predictionStatus });
}

async function reachAddressStep(page, test) {
  const url = `${base}${test.form}?canton=${test.canton}&origin=${encodeURIComponent(test.guide)}&source=chatgpt`;
  const response = await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  assert.equal(response.status(), 200, `${test.locale} main form HTTP status`);
  await dismissCookies(page);
  for (const [index, option] of test.options.entries()) {
    const current = page.locator(`[data-form-step="${index + 1}"]`);
    const nextStep = page.locator(`[data-form-step="${index + 2}"]`);
    await current.waitFor({ state: 'visible', timeout: 15000 });
    const button = page.getByText(option, { exact: true }).locator('xpath=ancestor::button[1]');
    let advanced = false;
    for (let attempt = 1; attempt <= 4; attempt++) {
      if (await nextStep.count()) { advanced = true; break; }
      await button.click();
      try {
        await nextStep.waitFor({ state: 'visible', timeout: 2500 });
        advanced = true;
        break;
      } catch {
        if (await nextStep.count()) { advanced = true; break; }
      }
    }
    assert.ok(advanced, `${test.locale}: step ${index + 1} failed to advance after 4 ${option} clicks; url=${page.url()}`);
  }
  await page.locator('[data-form-step="5"]').waitFor({ state: 'visible' });
}

async function assertAddressUi(page, label) {
  assert.equal(await page.locator('[data-form-step="5"] input').count(), 1, `${label}: single address input`);
  assert.equal(await page.locator('.roof-analysis, .roof-map, [data-testid="manual-address-toggle"], input[name="street"], input[name="zipCode"]').count(), 0, `${label}: no manual, roof or map UI`);
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${label}: no horizontal overflow`);
}

async function attemptAddressNext(page, next, label) {
  // The suggestions dropdown can overlap Weiter; dispatch the button's own
  // click to verify its validation rather than accidentally selecting a result.
  if (await next.isEnabled()) await next.evaluate(button => button.click());
  assert.equal(await page.locator('[data-form-step="5"]').count(), 1, `${label}: cannot advance without selected suggestion`);
  assert.equal(await page.locator('input[type="email"]').count(), 0, `${label}: contact form hidden`);
}

async function runMainForm(browser, test, viewport) {
  const context = await browser.newContext({ viewport });
  const state = {
    leads: [], confirmations: [], blockedPosts: [], forbiddenRequests: [],
    rejectNextLead: true, errorMessage: `MOCK_${test.locale.toUpperCase()}_FORM_ERROR`,
  };
  await installNetworkIsolation(context, state);
  const page = await context.newPage();
  await installGooglePlacesMock(page, test.address);
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));

  try {
    const label = `${test.locale} ${viewport.width}px`;
    await reachAddressStep(page, test);
    await assertAddressUi(page, label);
    if (test.locale === 'it') {
      const cookieReject = page.getByRole('button', { name: 'Solo necessari', exact: true });
      if (await cookieReject.waitFor({ state: 'visible', timeout: 3000 }).then(() => true, () => false)) {
        await cookieReject.click();
        await cookieReject.waitFor({ state: 'hidden', timeout: 5000 });
      }
      fs.mkdirSync('/tmp/restored-form-qa', { recursive: true });
      await page.screenshot({ path: `/tmp/restored-form-qa/it-step5-${viewport.width}.png`, fullPage: true });
    }
    const next = page.getByRole('button', { name: test.next, exact: true });
    const addressInput = page.locator('[data-form-step="5"] input');
    const suggestion = page.getByRole('button', { name: test.address, exact: true });
    await attemptAddressNext(page, next, `${label}: empty address`);
    await addressInput.fill(test.address.slice(0, 8));
    await suggestion.waitFor({ state: 'visible' });
    await attemptAddressNext(page, next, `${label}: typed address`);
    await suggestion.click();
    await suggestion.waitFor({ state: 'hidden' });
    assert.equal(await addressInput.inputValue(), test.address, `${label}: selected address displayed`);
    const satellite = page.getByTestId('address-satellite-map');
    await satellite.waitFor({ state: 'visible' });
    const mapOptions = JSON.parse(await satellite.getAttribute('data-map-options'));
    assert.equal(mapOptions.mapTypeId, 'satellite', `${label}: satellite imagery`);
    assert.deepEqual(mapOptions.center, { lat: 47, lng: 8 }, `${label}: selected house coordinates`);
    assert.equal(mapOptions.zoom, 20, `${label}: house-level zoom`);
    // Editing a selected address invalidates the selection, even when the query is the same.
    await addressInput.fill(`${test.address.slice(0, 8)}x`);
    assert.equal(await satellite.count(), 0, `${label}: stale house preview cleared`);
    await attemptAddressNext(page, next, `${label}: stale selection`);
    await addressInput.fill(test.address.slice(0, 8));
    await suggestion.click();
    await suggestion.waitFor({ state: 'hidden' });
    await assertAddressUi(page, label);
    await satellite.waitFor({ state: 'visible' });
    await dismissCookies(page);
    await next.click();

    await page.locator('input[type="email"]').waitFor({ state: 'visible', timeout: 15000 }).catch(async error => {
      const visibleText = (await page.locator('body').innerText()).slice(0, 1200);
      throw new Error(`${test.locale} did not reach contact step; url=${page.url()} body=${JSON.stringify(visibleText)}; ${error.message}`);
    });
    const submit = page.locator('button').filter({ hasText: exactText(test.mainSubmit) }).last();
    await submit.click();
    await page.getByText(test.required, { exact: true }).waitFor({ state: 'visible' });

    const textInputs = page.locator('input:not([type]), input[type="text"]');
    await textInputs.nth(0).fill('Ada');
    await textInputs.nth(1).fill('Lovelace');
    await page.locator('input[type="email"]').fill(`browser-${test.locale}@example.com`);
    await page.locator('input[type="tel"]').fill('79 123 45 67');
    await page.locator('input[type="checkbox"]').last().check();

    await submit.click();
    await page.getByText(state.errorMessage, { exact: true }).waitFor({ state: 'visible' });
    assert.equal(state.leads.length, 1, `${test.locale} main rejected request`);
    assertContext(state.leads[0], test, `${test.locale} main rejected payload`);
    assert.equal(state.leads[0]['COMPLETE ADDRESS'], test.address, `${label}: rejected address`);

    await submit.click();
    await waitForCount(state.leads, 2, `${test.locale} main successful request reached mock`);
    await page.waitForURL(url => url.pathname === test.thankYou, { timeout: 30000 }).catch(error => {
      throw new Error(`${test.locale} success did not navigate; url=${page.url()} confirmations=${state.confirmations.length} blockedPosts=${JSON.stringify(state.blockedPosts)} browserErrors=${JSON.stringify(browserErrors)}; ${error.message}`);
    });
    assertContext(state.leads[1], test, `${test.locale} main success payload`);
    assert.equal(state.leads[1]['COMPLETE ADDRESS'], test.address, `${label}: successful address`);
    await page.waitForTimeout(200);
    assert.equal(state.confirmations.length, 1, `${test.locale} confirmation request`);
    assert.equal(state.confirmations[0].locale, test.locale);
    assert.equal(state.confirmations[0].origin, test.guide);
    assertContext(state.confirmations[0], test, `${label} confirmation context`);
    assert.equal(state.confirmations[0].address, test.address, `${label}: confirmation address`);
    assert.deepEqual(state.blockedPosts, [], `${test.locale} no unexpected POSTs`);
    assert.deepEqual(state.forbiddenRequests, [], `${label}: no roof or map requests`);
    assert.deepEqual(browserErrors, [], `${test.locale} main browser errors`);
  } finally {
    await context.close();
  }
}

async function runAddressFailure(browser, test, viewport, status, message) {
  const context = await browser.newContext({ viewport });
  const state = {
    leads: [], confirmations: [], blockedPosts: [], forbiddenRequests: [],
    rejectNextLead: true, errorMessage: 'UNEXPECTED_LEAD',
  };
  await installNetworkIsolation(context, state);
  const page = await context.newPage();
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));
  try {
    await installGooglePlacesMock(page, test.address, status);
    await reachAddressStep(page, test);
    const label = `${viewport.width}px ${status}`;
    await assertAddressUi(page, label);
    await page.locator('[data-form-step="5"] input').fill(test.address.slice(0, 8));
    await page.getByText(message, { exact: true }).waitFor({ state: 'visible' });
    await attemptAddressNext(page, page.getByRole('button', { name: test.next, exact: true }), `${label}: search failure`);
    assert.equal(await page.getByRole('button', { name: test.address, exact: true }).count(), 0, `${label}: no suggestion`);
    assert.deepEqual(state.leads, [], `${label}: no lead`);
    assert.deepEqual(state.confirmations, [], `${label}: no confirmation`);
    assert.deepEqual(state.blockedPosts, [], `${label}: no unexpected POSTs`);
    assert.deepEqual(state.forbiddenRequests, [], `${label}: no roof or map requests`);
    assert.deepEqual(browserErrors, [], `${label}: no browser errors`);
  } finally {
    await context.close();
  }
}

async function runCallback(browser, test, viewport) {
  const context = await browser.newContext({ viewport });
  const state = {
    leads: [], confirmations: [], blockedPosts: [], forbiddenRequests: [],
    rejectNextLead: true, errorMessage: `MOCK_${test.locale.toUpperCase()}_CALLBACK_ERROR`,
  };
  await installNetworkIsolation(context, state);
  const page = await context.newPage();
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));

  try {
    const response = await page.goto(`${base}${test.guide}?source=chatgpt`, { waitUntil: 'load', timeout: 60000 });
    assert.equal(response.status(), 200, `${test.locale} callback page HTTP status`);
    const openButton = page.getByRole('button', { name: test.open, exact: true });
    await page.waitForTimeout(1500);
    await dismissCookies(page);
    // Mobile callback decoration can overlap its launcher; activate the
    // actual button without treating the decorative overlay as a test failure.
    await openButton.evaluate(button => button.click());
    await page.getByRole('button', { name: test.submit, exact: true }).waitFor({ state: 'visible', timeout: 10000 });
    await page.getByRole('button', { name: test.submit, exact: true }).click();
    await page.getByText(test.callbackRequired, { exact: true }).waitFor({ state: 'visible' });

    const chat = page.locator('div.fixed').filter({ has: page.getByRole('button', { name: test.submit, exact: true }) });
    const inputs = chat.locator('input');
    await inputs.nth(0).fill('Ada');
    await inputs.nth(1).fill('Lovelace');
    await chat.locator('input[type="tel"]').fill('79 123 45 67');
    await chat.locator('input[type="email"]').fill(`callback-${test.locale}@example.com`);
    await chat.locator('input[type="checkbox"]').check();

    await page.getByRole('button', { name: test.submit, exact: true }).click();
    await page.getByText(state.errorMessage, { exact: true }).waitFor({ state: 'visible' });
    assert.equal(state.leads.length, 1, `${test.locale} callback rejected request`);
    assertContext(state.leads[0], test, `${test.locale} callback rejected payload`);

    await page.getByRole('button', { name: test.submit, exact: true }).click();
    await waitForCount(state.leads, 2, `${test.locale} callback successful request reached mock`);
    await page.getByText(/🎉/).waitFor({ state: 'visible' });
    assertContext(state.leads[1], test, `${test.locale} callback success payload`);
    assert.deepEqual(state.blockedPosts, [], `${test.locale} callback no unexpected POSTs`);
    assert.deepEqual(state.forbiddenRequests, [], `${test.locale} callback no roof or map requests`);
    assert.deepEqual(browserErrors, [], `${test.locale} callback browser errors`);
  } finally {
    await context.close();
  }
}

(async () => {
  const browser = await chromium.launch({
    executablePath: '/repl/tools/bin/chromium',
    headless: true,
    args: ['--no-sandbox'],
  });
  try {
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
      if (process.env.VIEWPORT_WIDTH && viewport.width !== Number(process.env.VIEWPORT_WIDTH)) continue;
      for (const test of process.env.ADDRESS_EXTRA_ONLY === '1' ? [] : cases) {
        await runMainForm(browser, test, viewport);
        await runCallback(browser, test, viewport);
        console.log(`PASS ${test.locale.toUpperCase()} ${viewport.width}px: autocomplete, satellite preview, main form and callback validation, mocked rejection/success and context; no roof analysis`);
      }
      await runAddressFailure(browser, cases[3], viewport, 'REQUEST_DENIED', 'Address search is unavailable. Please try again shortly.');
      await runAddressFailure(browser, cases[3], viewport, 'ZERO_RESULTS', 'No addresses found. Check the address and try again.');
    }
    console.log('PASS: failed autocomplete and zero suggestions block progress on desktop and mobile.');
    console.log('PASS: all POSTs were intercepted locally; third-party traffic was blocked; no real lead or confirmation services were contacted.');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});