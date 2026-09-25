#!/usr/bin/env node
// Isolated step-5 browser contract test: no lead, confirmation, or third-party request is sent.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');

assert.ok(process.env.REPLIT_DEV_DOMAIN, 'REPLIT_DEV_DOMAIN is required');
const origin = `https://${process.env.REPLIT_DEV_DOMAIN}`;
const screenshotDir = '/tmp/roof-browser-qa';
fs.mkdirSync(screenshotDir, { recursive: true });

const locales = {
  de: { path: '/anfrage', steps: ['Ja', 'Einfamilienhaus', 'Satteldach', 'Ja'], title: 'Dachanalyse', analyze: 'Dach analysieren', next: 'Weiter', back: 'Zurück', area: 'Dachfläche', yield: 'Jahresertrag', orientation: 'Ausrichtung', mixed: 'Gemischt', multiple: 'Mehrere', unavailable: 'Die Dachdaten sind derzeit nicht verfügbar.', notFound: 'Für diese Adresse wurden keine Dachflächen gefunden.' },
  fr: { path: '/fr/demande', steps: ['Oui', 'Maison individuelle', 'Toit à deux pentes', 'Oui'], title: 'Analyse du toit', analyze: 'Analyser le toit', next: 'Suivant', back: 'Retour', area: 'Surface du toit', yield: 'Production annuelle', orientation: 'Orientation', mixed: 'Mixte', multiple: 'Plusieurs', unavailable: 'Les données du toit sont indisponibles', notFound: 'Aucun pan de toit trouvé' },
  it: { path: '/it/richiesta', steps: ['Sì', 'Casa unifamiliare', 'Tetto a falda', 'Sì'], title: 'Analisi del tetto', analyze: 'Analizza il tetto', next: 'Avanti', back: 'Indietro', area: 'Superficie del tetto', yield: 'Produzione annua', orientation: 'Orientamento', mixed: 'Mista', multiple: 'Multipli', unavailable: 'I dati del tetto non sono attualmente disponibili.', notFound: 'Nessuna falda trovata' },
  en: { path: '/en/request', steps: ['Yes', 'Detached house', 'Pitched roof', 'Yes'], title: 'Roof analysis', analyze: 'Analyze roof', next: 'Next', back: 'Back', area: 'Roof area', yield: 'Annual output', orientation: 'Orientation', mixed: 'Mixed', multiple: 'Multiple', unavailable: 'Roof data is currently unavailable.', notFound: 'No roof faces were found' },
};
const coords = [8.5401, 47.3769];
const summaryLabels = { de: 'Sehr gut', fr: 'Très bonne', it: 'Molto buona', en: 'Very good' };
const orientationLabels = { de: 'SW / NO', fr: 'SO / NE', it: 'SO / NE', en: 'SW / NE' };
const selectionInstructions = {
  de: 'Wählen Sie auf der Karte die Dachflächen aus, die berücksichtigt werden sollen.',
  it: 'Seleziona sulla mappa le falde che vuoi includere.',
  fr: 'Sélectionnez sur la carte les surfaces de toit à prendre en compte.',
  en: 'Select the roof areas you want to include on the map.',
};
const compareLabels = { de: 'Offerten vergleichen', fr: 'Comparer les offres', it: 'Confronta le offerte', en: 'Compare offers' };
const notes = {
  de: 'Richtwerte basierend auf Daten des Bundesamts für Energie (BFE) und geo.admin.ch.',
  it: 'Valori indicativi basati sui dati dell’Ufficio federale dell’energia (UFE) e di geo.admin.ch.',
  fr: 'Valeurs indicatives basées sur les données de l’Office fédéral de l’énergie (OFEN) et de geo.admin.ch.',
  en: 'Indicative values based on data from the Swiss Federal Office of Energy (SFOE) and geo.admin.ch.',
};
const face = (id, buildingId, area, annualKwh, orientation, suitability) => ({
  id, buildingId, area, annualKwh, orientation, suitability, slope: 30,
  geometry: { type: 'Polygon', coordinates: [[[coords[0], coords[1]], [coords[0] + .0001, coords[1]], [coords[0] + .0001, coords[1] + .0001], [coords[0], coords[1]]]] },
});
// Swiss federal GeoJSON response shape, with two opposite diagonal octants.
const roofs = [face('101', '9001', 42, 5100, 45, 3), face('102', '9001', 28, 3200, 225, 5)];
const other = face('201', '9002', 35, 4200, 90, 4);
const ok = { status: 'ok', roofs, center: { lat: coords[1], lng: coords[0] } };
const ambiguous = { status: 'ambiguous', roofs: [...roofs, other], center: ok.center };
const mapsStub = `(() => {
  class AutocompleteService {
    getPlacePredictions(_query, callback) {
      callback([{place_id:'test-address', description:'Bahnhofstrasse 10, 8001 Zürich, Schweiz'}], 'OK');
    }
  }
  class PlacesService {
    getDetails(_query, callback) {
      callback({geometry:{location:{lat:()=>47.3769,lng:()=>8.5401}},address_components:[{types:['postal_code'],long_name:'8001'}]},'OK');
    }
  }
  class Data {
    constructor(element) { this.element=element; this.features=[]; this.handler=null; }
    forEach(fn) { [...this.features].forEach(fn); }
    remove(feature) { this.features=this.features.filter(f=>f!==feature); feature.button?.remove(); }
    addGeoJson(collection) {
      this.features=collection.features.map((raw,index)=>{
        const feature={getProperty:key=>raw.properties[key]};
        const button=document.createElement('button');
        button.type='button'; button.textContent='Map roof '+(index+1);
        button.setAttribute('aria-label','Map roof '+(index+1));
        button.style.cssText='position:absolute;z-index:2;top:'+(10+index*34)+'px;left:10px;background:#fff;padding:3px;';
        button.onclick=()=>this.handler?.({feature});
        this.element.appendChild(button); feature.button=button; return feature;
      });
    }
    setStyle(style) { this.features.forEach(f=>{f.button.dataset.fill=style(f).fillColor;}); }
    addListener(name,handler) { this.handler=handler; return {remove:()=>{if(this.handler===handler)this.handler=null;}}; }
    setMap() { this.features.forEach(f=>f.button.remove()); }
  }
  class Map {
    constructor(element) {
      element.style.position='relative'; this.data=new Data(element);
      setTimeout(()=>this.tileHandler?.(), 30);
    }
    addListener(name, handler) { if(name==='tilesloaded') this.tileHandler=handler; return {remove:()=>{this.tileHandler=null;}}; }
    setCenter() {}
    fitBounds() {}
    getZoom() { return 19; }
    setZoom() {}
  }
  class LatLngBounds { constructor(){this.points=[];} extend(point){this.points.push(point);} isEmpty(){return !this.points.length;} }
  window.google={maps:{Map,LatLngBounds,event:{addListenerOnce(_map,_event,handler){setTimeout(handler,0);}},places:{AutocompleteService,PlacesService}}};
  window.__pvproMapsReady?.();
})();`;

async function setup(browser, { locale = 'en', mobile = false, maps = true, resolver = () => ok } = {}) {
  const context = await browser.newContext({ viewport: { width: mobile ? 390 : 1440, height: 950 } });
  const state = { leads: [], confirmations: [], queries: [], thirdParty: [] };
  await context.route('**/*', async route => {
    const request = route.request(), url = new URL(request.url());
    if (url.origin !== origin) {
      if (maps && url.hostname === 'maps.googleapis.com' && url.pathname === '/maps/api/js') {
        return route.fulfill({ status: 200, contentType: 'application/javascript', body: mapsStub });
      }
      state.thirdParty.push(url.hostname);
      return route.abort('blockedbyclient');
    }
    if (url.pathname === '/api/anfrage' || url.pathname === '/api/send-confirmation') {
      const bucket = url.pathname === '/api/anfrage' ? state.leads : state.confirmations;
      bucket.push({ method: request.method(), body: request.postDataJSON() });
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) });
    }
    if (url.pathname === '/api/roof-analysis') {
      state.queries.push(url);
      const response = await resolver(url, state.queries.length);
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(response) });
    }
    if (!['GET', 'HEAD'].includes(request.method())) throw new Error(`Unexpected outbound request: ${request.method()} ${url.pathname}`);
    return route.continue();
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const config = { ...locales[locale], next: compareLabels[locale] };
  const response = await page.goto(origin + config.path, { waitUntil: 'domcontentloaded', timeout: 60000 });
  assert.equal(response.status(), 200, `${locale} form HTTP status`);
  // Next's streamed HTML can show controls well before hydration attaches event handlers.
  await page.waitForTimeout(1600);
  for (const [index, label] of config.steps.entries()) {
    // A streamed Next document can render buttons before handlers hydrate. Verify
    // each actual transition rather than trusting a click on pre-hydration markup.
    const counter = page.getByText(`${index + 2} / 6`, { exact: true });
    for (let attempt = 0; attempt < 4; attempt++) {
      if (await counter.isVisible()) break;
      try {
        await page.getByText(label, { exact: true }).locator('xpath=ancestor::button[1]').click({ timeout: 4000 });
      } catch (error) {
        // Framer Motion can detach an option while its step transition finishes.
        if (!await counter.isVisible()) throw error;
      }
      if (await counter.waitFor({ state: 'visible', timeout: 2500 }).then(() => true, () => false)) break;
      if (attempt === 3) throw new Error(`Step ${index + 1} did not advance after clicking ${label}`);
    }
  }
  await page.getByRole('heading', { name: /property located|Liegenschaft|bien immobilier|immobile/ }).waitFor();
  const panel = page.getByRole('region', { name: config.title });
  return { page, context, state, config, panel, errors };
}
async function manual(test, values = { street: 'Bahnhofstrasse', houseNumber: '10', zipCode: '8001', city: 'Zürich' }) {
  await test.page.getByTestId('manual-address-toggle').click();
  assert.equal(await test.panel.count(), 0, 'no empty manual analysis card');
  for (const [name, value] of Object.entries(values)) {
    await test.page.locator(`input[name="${name}"]`).fill(value);
    if (name !== 'city') {
      assert.equal(await test.panel.count(), 0, 'incomplete address has no analysis card');
      assert.equal(test.state.queries.length, 0, 'incomplete address does not trigger analysis');
    }
  }
  assert.equal(await test.page.getByRole('button', { name: test.config.analyze }).count(), 0);
}
async function selectAddress(test, text = 'Bahnhof') {
  await test.page.locator('input[placeholder]').first().fill(text);
  await test.page.getByRole('button', { name: 'Bahnhofstrasse 10, 8001 Zürich, Schweiz' }).click();
}
async function step6(test) {
  await test.page.getByRole('button', { name: test.config.next, exact: true }).click();
  await test.page.locator('input[type="email"]').waitFor({ timeout: 12000 });
}
async function run(name, fn) {
  try { await fn(); console.log(`PASS ${name}`); }
  catch (error) { console.error(`FAIL ${name}: ${error.stack || error}`); process.exitCode = 1; }
}
async function main() {
  const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || '/repl/tools/bin/chromium', args: ['--no-sandbox'], headless: true });
  try {
    await run('manual fields, octants, map-only selection, totals, safe submission', async () => {
      const t = await setup(browser);
      try {
        await manual(t);
        await t.panel.getByText('70 m²').waitFor();
        assert.match(await t.panel.innerText(), /8[,.']?300 kWh/);
        // Orientations remain distinct; classes 3 and 5 average to class 4.
        assert.ok((await t.panel.innerText()).includes(orientationLabels.en));
        assert.ok((await t.panel.innerText()).includes(summaryLabels.en));
        assert.ok(!(await t.panel.innerText()).includes(t.config.mixed));
        assert.equal(await t.panel.locator('input[type=checkbox]').count(), 0);
        await t.panel.locator('button[aria-label="Map roof 1"][data-fill="#fcb210"]').waitFor();
        await t.panel.locator('button[aria-label="Map roof 2"][data-fill="#fcb210"]').waitFor();
        await t.panel.getByRole('button', { name: 'Map roof 1' }).click();
        await t.panel.getByText('28 m²', { exact: true }).waitFor();
        await t.panel.locator('button[aria-label="Map roof 1"][data-fill="#ffffff"]').waitFor();
        await t.panel.getByRole('button', { name: 'Map roof 2' }).click();
        assert.equal(await t.panel.getByText('—', { exact: true }).count(), 4);
        await t.panel.getByRole('button', { name: 'Map roof 1' }).click();
        await t.panel.getByText('42 m²', { exact: true }).waitFor();
        await t.panel.getByRole('button', { name: 'Map roof 2' }).click();
        await t.panel.getByText('70 m²').waitFor();
        await t.panel.locator('button[aria-label="Map roof 1"][data-fill="#fcb210"]').waitFor();
        await t.panel.locator('button[aria-label="Map roof 2"][data-fill="#fcb210"]').waitFor();
        await t.page.screenshot({ path: `${screenshotDir}/step5-desktop.png`, fullPage: true });
        assert.equal(t.state.queries.length, 1, 'complete manual address triggers one debounced lookup');
        assert.equal(t.state.queries[0].searchParams.get('address'), 'Bahnhofstrasse 10, 8001 Zürich');
        await step6(t);
        await t.page.locator('input[placeholder]').nth(0).fill('Browser');
        await t.page.locator('input[placeholder]').nth(1).fill('Tester');
        await t.page.locator('input[type=email]').fill('browser-test@example.com');
        await t.page.locator('input[type=tel]').fill('79 123 45 67');
        await t.page.locator('input[type=checkbox]').last().check();
        await t.page.getByRole('button', { name: 'Request free quotes' }).click();
        await t.page.waitForTimeout(700);
        assert.equal(t.state.leads.length, 1);
        assert.equal(t.state.confirmations.length, 1);
        for (const record of [...t.state.leads, ...t.state.confirmations]) {
          assert.equal(record.method, 'POST');
          assert.deepEqual(Object.keys(record.body).filter(k => /roof|building|orientation|suitability|annual|yield|selected|area/i.test(k) && k !== 'roofType'), [], 'roof analysis details never leave the browser (roofType is the pre-existing form choice)');
          assert.ok(!JSON.stringify(record.body).includes('9001'), 'building ID must not be sent');
          assert.ok(!JSON.stringify(record.body).includes('5100'), 'roof output must not be sent');
        }
        assert.deepEqual(t.errors, []);
      } finally { await t.context.close(); }
    });
    await run('ambiguous buildings require explicit buildingId confirmation', async () => {
      const t = await setup(browser, { resolver: url => url.searchParams.get('buildingId') === '9002'
        ? { status: 'ok', roofs: [other], center: ok.center } : ambiguous });
      try {
        await selectAddress(t);
        await t.panel.getByText('Choose a building').waitFor();
        assert.equal(await t.panel.locator('input[type=checkbox]').count(), 0);
        await t.panel.getByRole('button', { name: 'Building 2' }).click();
        await t.panel.getByText('35 m²', { exact: true }).waitFor();
        assert.equal(t.state.queries.at(-1).searchParams.get('buildingId'), '9002');
        assert.equal(await t.panel.locator('input[type=checkbox]').count(), 0);
        await t.panel.locator('button[aria-label="Map roof 1"][data-fill="#fcb210"]').waitFor();
        assert.equal(Number(t.state.queries[0].searchParams.get('lat')), 47.3769);
        assert.deepEqual(t.errors, []);
      } finally { await t.context.close(); }
    });
    await run('not_found, unavailable and pending requests do not block next', async () => {
      for (const status of ['not_found', 'unavailable', 'pending']) {
        const t = await setup(browser, { maps: false, resolver: status === 'pending'
          ? () => new Promise(() => {}) : () => ({ status, roofs: [] }) });
        try {
          if (status === 'pending') {
            await t.page.getByTestId('manual-address-toggle').click();
            for (const [key, value] of Object.entries({ street: 'Bahnhofstrasse', houseNumber: '10', zipCode: '8001', city: 'Zürich' }))
              await t.page.locator(`input[name=${key}]`).fill(value);
            await t.page.getByRole('status', { name: t.config.title }).waitFor();
            assert.equal(await t.panel.count(), 0, 'loading is a compact status, not an empty card');
          } else {
            const response = t.page.waitForResponse(url => url.url().includes('/api/roof-analysis'));
            await manual(t);
            await response;
            await t.page.getByRole('status', { name: t.config.title }).waitFor({ state: 'hidden' });
            assert.equal(await t.panel.count(), 0, 'failed analysis stays out of the way');
            assert.equal(await t.page.getByText(t.config.unavailable, { exact: false }).count(), 0);
            assert.equal(await t.page.getByText(t.config.notFound, { exact: false }).count(), 0);
          }
          await step6(t);
          assert.deepEqual(t.errors, []);
        } finally { await t.context.close(); }
      }
    });
    await run('edit, mode switch and back reset stale analysis', async () => {
      const t = await setup(browser);
      try {
        await selectAddress(t);
        await t.panel.getByText('70 m²').waitFor();
        assert.equal(await t.panel.locator('input[type=checkbox]').count(), 0);
        await t.page.locator('input[placeholder]').first().fill('Other address');
        await t.panel.waitFor({ state: 'detached' });
        await t.page.getByTestId('manual-address-toggle').click();
        await manualFields(t);
        await t.panel.getByText('70 m²').waitFor();
        await t.page.locator('input[name=houseNumber]').fill('11');
        assert.equal(await t.panel.getByText('70 m²').count(), 0, 'editing manual address invalidates prior analysis');
        await t.panel.getByText('70 m²').waitFor();
        await step6(t);
        const requestsBeforeBack = t.state.queries.length;
        await t.page.getByRole('button', { name: t.config.back }).click();
        await t.panel.getByText('70 m²').waitFor();
        assert.equal(t.state.queries.length, requestsBeforeBack + 1, 'back remounts step 5 and refreshes analysis automatically');
        assert.deepEqual(t.errors, []);
      } finally { await t.context.close(); }
    });
    await run('blocked Google Maps remains nonblocking without a checkbox list', async () => {
      const t = await setup(browser, { maps: false });
      try {
        await manual(t);
        await t.panel.getByText('70 m²').waitFor();
        await t.panel.getByText('The satellite map is unavailable.', { exact: false }).waitFor({ timeout: 20000 });
        assert.equal(await t.panel.locator('input[type=checkbox]').count(), 0);
        await t.panel.getByText('70 m²', { exact: true }).waitFor();
        await step6(t);
        assert.deepEqual(t.errors, []);
      } finally { await t.context.close(); }
    });
    for (const locale of Object.keys(locales)) {
      await run(`${locale} copy, manual analysis and mobile overflow`, async () => {
        const t = await setup(browser, { locale, mobile: true });
        try {
          await manual(t);
          await t.panel.getByText('70 m²').waitFor();
          const text = await t.panel.innerText();
          assert.equal(await t.panel.locator('input[type=checkbox]').count(), 0);
          const instruction = t.panel.getByText(selectionInstructions[locale], { exact: true });
          await instruction.waitFor();
          assert.equal(await instruction.evaluate(el => el.nextElementSibling.children.length), 4);
          for (const expected of [t.config.title, t.config.area, t.config.yield, t.config.orientation, orientationLabels[locale], summaryLabels[locale]])
            assert.ok(text.includes(expected), `${locale}: expected "${expected}" in panel`);
          assert.ok(!text.includes(t.config.multiple), `${locale}: show actual orientations`);
          assert.equal(await t.panel.locator('a').count(), 0, 'no external source link');
          await t.page.getByText(notes[locale], { exact: true }).waitFor();
          assert.equal(await t.page.locator('a[href*="geo.admin.ch"]').count(), 0);
          await t.page.getByRole('button', { name: compareLabels[locale], exact: true }).waitFor();
          assert.ok(!text.includes(t.config.mixed), `${locale}: mixed suitability must not appear`);
          assert.ok(await t.page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${locale}: horizontal overflow`);
          for (const height of [650, 844]) {
            await t.page.setViewportSize({ width: 390, height });
            await t.page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
            const clearance = await t.page.getByRole('button', { name: compareLabels[locale], exact: true })
              .evaluate(el => window.innerHeight - el.getBoundingClientRect().bottom);
            assert.ok(clearance >= 79, `${locale}: button must clear the mobile bottom edge (${clearance}px)`);
            const mapHeight = await t.panel.locator('div[aria-label]').evaluate(el => el.getBoundingClientRect().height);
            assert.ok(mapHeight >= 200 && mapHeight <= 240, 'compact map retains a usable height');
            assert.ok(await t.page.evaluate(() => document.documentElement.scrollHeight > innerHeight), 'long address step remains scrollable');
          }
          if (locale === 'en') await t.page.screenshot({ path: `${screenshotDir}/step5-mobile.png`, fullPage: true });
          assert.deepEqual(t.errors, []);
        } finally { await t.context.close(); }
      });
    }
  } finally { await browser.close(); }
  console.log(`Step-5 screenshots: ${screenshotDir}/step5-{desktop,mobile}.png`);
}
async function manualFields(t) {
  for (const [key, value] of Object.entries({ street: 'Bahnhofstrasse', houseNumber: '10', zipCode: '8001', city: 'Zürich' }))
    await t.page.locator(`input[name=${key}]`).fill(value);
}
main().catch(error => { console.error(error); process.exitCode = 1; });