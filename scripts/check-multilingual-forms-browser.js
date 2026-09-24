#!/usr/bin/env node
const assert = require('node:assert/strict');
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
    mainSubmit: 'Kostenlose Offerten anfordern',
    open: 'Beratung öffnen', submit: 'Rückruf anfordern', callbackRequired: 'Bitte füllen Sie alle Pflichtfelder aus.',
    thankYou: '/danke',
  },
  {
    locale: 'fr', form: '/fr/demande', guide: '/fr/solaire-vaud', canton: 'waadt',
    options: ['Oui', 'Maison individuelle', 'Toit à deux pentes', 'Oui'],
    address: 'Rue du Centre 10, 1003 Lausanne, Suisse',
    required: 'Veuillez remplir tous les champs obligatoires.',
    mainSubmit: 'Demander des devis gratuits',
    open: 'Ouvrir la consultation', submit: 'Demander un rappel', callbackRequired: 'Veuillez remplir tous les champs obligatoires.',
    thankYou: '/fr/merci',
  },
  {
    locale: 'it', form: '/it/richiesta', guide: '/it/fotovoltaico-ticino', canton: 'tessin',
    options: ['Sì', 'Casa unifamiliare', 'Tetto a falda', 'Sì'],
    address: 'Via Lugano 10, 6900 Lugano, Svizzera',
    required: 'Compila tutti i campi obbligatori.',
    mainSubmit: 'Richiedi preventivi gratuiti',
    open: 'Apri la consulenza', submit: 'Richiedi richiamata', callbackRequired: 'Compili tutti i campi obbligatori.',
    thankYou: '/it/grazie',
  },
  {
    locale: 'en', form: '/en/request', guide: '/en/solar-panels-bern', canton: 'bern',
    options: ['Yes', 'Detached house', 'Pitched roof', 'Yes'],
    address: 'Marktgasse 10, 3011 Bern, Switzerland',
    required: 'Please fill in all required fields.',
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
  const choices = ['Nur notwendige', 'Only necessary', 'Uniquement nécessaires', 'Solo necessari'];
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

async function installGooglePlacesMock(page, address, noResults = false) {
  await page.addInitScript(({ mockAddress, noResults }) => {
    class AutocompleteService {
      getPlacePredictions(_request, callback) {
        callback(noResults ? [] : [{ place_id: 'browser-test-place', description: mockAddress }], noResults ? 'ZERO_RESULTS' : 'OK');
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
    window.google = { maps: { places: { AutocompleteService, PlacesService } } };
  }, { mockAddress: address, noResults });
}

async function runMainForm(browser, test, manualMode = false) {
  const context = await browser.newContext();
  const state = {
    leads: [], confirmations: [], blockedPosts: [],
    rejectNextLead: true, errorMessage: `MOCK_${test.locale.toUpperCase()}_FORM_ERROR`,
  };
  await installNetworkIsolation(context, state);
  const page = await context.newPage();
  if (manualMode !== 'blocked') await installGooglePlacesMock(page, test.address, manualMode === 'no-results');
  const browserErrors = [];
  page.on('pageerror', error => browserErrors.push(error.message));

  try {
    const url = `${base}${test.form}?canton=${test.canton}&origin=${encodeURIComponent(test.guide)}&source=chatgpt`;
    const response = await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    assert.equal(response.status(), 200, `${test.locale} main form HTTP status`);
    await page.waitForTimeout(1500);
    await dismissCookies(page);

    for (const option of test.options) {
      const button = page.getByText(option, { exact: true }).locator('xpath=ancestor::button[1]');
      await button.click();
      await page.waitForTimeout(250);
    }
    const next = page.getByRole('button', { name: /^(Weiter|Suivant|Avanti|Next)$/ });
    if (manualMode) {
      await page.locator('input[placeholder]').first().fill('Via Esempio');
      if (manualMode === 'no-results') {
        await page.getByText('No addresses found. Try another search or enter your address manually.', { exact: true }).waitFor();
      }
      await page.getByTestId('manual-address-toggle').click();
      await next.click();
      assert.equal(await page.locator('input[type="email"]').count(), 0, 'Empty manual address cannot advance');
      for (const [name, value] of Object.entries({ street: 'Via Esempio', houseNumber: '16a', zipCode: '123', city: 'Lugano' })) {
        await page.locator(`input[name="${name}"]`).fill(value);
      }
      await next.click();
      assert.equal(await page.locator('input[type="email"]').count(), 0, 'Invalid postcode cannot advance');
      await page.locator('input[name="zipCode"]').fill('6900');
      // Switching modes must keep the draft, but must not trust an old Google selection.
      await page.getByTestId('manual-address-toggle').click();
      await next.click();
      assert.equal(await page.locator('input[type="email"]').count(), 0, 'Switching to autocomplete requires a new selection');
      await page.getByTestId('manual-address-toggle').click();
      assert.equal(await page.locator('input[name="zipCode"]').inputValue(), '6900');
      if (test.locale === 'it') {
        const fs = require('node:fs');
        fs.mkdirSync('/tmp/manual-address-qa', { recursive: true });
        for (const width of [390, 1440]) {
          await page.setViewportSize({ width, height: 1000 });
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Manual fields must not overflow');
          await page.screenshot({ path: `/tmp/manual-address-qa/it-${width}.png`, fullPage: true });
        }
      }
    } else {
      const addressInput = page.locator('input[placeholder]').first();
      await addressInput.fill(test.address.slice(0, 8));
      await page.getByRole('button', { name: test.address, exact: true }).click();
    }
    await next.click();

    await page.locator('input[type="email"]').waitFor({ state: 'visible', timeout: 15000 }).catch(async error => {
      const visibleText = (await page.locator('body').innerText()).slice(0, 1200);
      throw new Error(`${test.locale} did not reach contact step; url=${page.url()} body=${JSON.stringify(visibleText)}; ${error.message}`);
    });
    if (manualMode) {
      await page.getByRole('button', { name: /^(Zurück|Retour|Indietro|Back)$/ }).click();
      await page.locator('input[name="street"]').waitFor();
      assert.equal(await page.locator('input[name="street"]').inputValue(), 'Via Esempio');
      await next.click();
      await page.locator('input[type="email"]').waitFor();
    }
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

    await submit.click();
    await waitForCount(state.leads, 2, `${test.locale} main successful request reached mock`);
    await page.waitForURL(url => url.pathname === test.thankYou, { timeout: 30000 }).catch(error => {
      throw new Error(`${test.locale} success did not navigate; url=${page.url()} confirmations=${state.confirmations.length} blockedPosts=${JSON.stringify(state.blockedPosts)} browserErrors=${JSON.stringify(browserErrors)}; ${error.message}`);
    });
    assertContext(state.leads[1], test, `${test.locale} main success payload`);
    if (manualMode) {
      assert.ok(state.leads[1]['COMPLETE ADDRESS'].includes('Via Esempio 16a'));
      assert.ok(state.leads[1]['COMPLETE ADDRESS'].includes('6900 Lugano'));
      assert.equal(state.leads[1].zip_code, '6900');
    }
    await page.waitForTimeout(200);
    assert.equal(state.confirmations.length, 1, `${test.locale} confirmation request`);
    assert.equal(state.confirmations[0].locale, test.locale);
    assert.equal(state.confirmations[0].origin, test.guide);
    assert.deepEqual(state.blockedPosts, [], `${test.locale} no unexpected POSTs`);
    assert.deepEqual(browserErrors, [], `${test.locale} main browser errors`);
  } finally {
    await context.close();
  }
}

async function runCallback(browser, test) {
  const context = await browser.newContext();
  const state = {
    leads: [], confirmations: [], blockedPosts: [],
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
    await openButton.click();
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
    for (const test of process.env.ADDRESS_EXTRA_ONLY === '1' ? [] : cases) {
      await runMainForm(browser, test);
      await runCallback(browser, test);
      await runMainForm(browser, test, 'blocked');
      console.log(`PASS ${test.locale.toUpperCase()}: main form and callback validation, mocked rejection, mocked success, localized context`);
    }
    await runMainForm(browser, cases[3], 'no-results');
    console.log(process.env.ADDRESS_EXTRA_ONLY === '1'
      ? 'PASS: zero suggestions, mode switching and back navigation; manual address and postcode preserved in payload.'
      : 'PASS: manual address works with Google blocked in all four languages and with zero suggestions; invalid fields blocked; mode switching and back navigation; manual address and postcode preserved in payload.');
    console.log('PASS: all POSTs were intercepted locally; no real lead or confirmation services were contacted.');
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});