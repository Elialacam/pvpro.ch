// Offline contract test: executes actual frontend payload expressions and the
// API handler with ALL fetch calls intercepted and synthetic credentials only.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const { createHash } = require('node:crypto');

const read = path => fs.readFileSync(path, 'utf8');
const quoteSource = read('components/AnfrageForm.tsx');
const widgetSource = read('components/CallbackWidget.tsx');
const routeSource = read('app/api/anfrage/route.ts');
const parse = source => ts.createSourceFile('test.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function find(source, predicate) {
  let result;
  function visit(node) {
    if (!result && predicate(node)) result = node;
    if (!result) ts.forEachChild(node, visit);
  }
  visit(parse(source));
  assert.ok(result, 'Expected source node');
  return result;
}
function clientPayload(source, locale) {
  const call = find(source, n => ts.isCallExpression(n) &&
    n.expression.getText() === 'fetch' && n.arguments[0]?.text === '/api/anfrage');
  const body = call.arguments[1].properties.find(p => p.name?.getText() === 'body').initializer;
  return JSON.parse(vm.runInNewContext(body.getText(), {
    locale, fullName: 'Test Example', formatPhone: value => value,
    formData: {
      phone: '+41 79 000 00 00', email: 'test@example.invalid',
      address: 'Teststrasse 1', zipCode: '8000', installerSharingConsent: true,
    },
    utm_source: 'test-campaign', source: 'chatgpt', fbclid: 'synthetic-click',
    eventId: 'synthetic-event', marketingConsent: true, openAiBrowserRef: '',
    params: new URLSearchParams('utm_source=test-campaign&fbclid=synthetic-click'),
  }));
}
const localeFunction = find(widgetSource, n => ts.isFunctionDeclaration(n) && n.name?.text === 'getLocale');
const getLocale = vm.runInNewContext(ts.transpileModule(
  `${localeFunction.getText()}\ngetLocale;`, { compilerOptions: { target: ts.ScriptTarget.ES2020 } }
).outputText);
const requests = [];
const moduleObject = { exports: {} };
vm.runInNewContext(ts.transpileModule(routeSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText, {
  exports: moduleObject.exports,
  require: name => {
    if (name === 'crypto') return { createHash };
    if (name === 'next/server') return {
      NextResponse: { json: (data, options) => ({ data, status: options.status }) },
    };
    throw new Error(`Unexpected module: ${name}`);
  },
  process: { env: { META_CAPI_TOKEN: 'synthetic', OPENAI_CONVERSIONS_API_KEY: 'synthetic' } },
  URL, console: { log() {}, error() {} },
  fetch: async (url, options) => {
    // Never call real fetch; do not retain or print authentication headers.
    requests.push({ url, body: JSON.parse(options.body) });
    return { ok: true, json: async () => ({ events_received: 1 }) };
  },
});
async function submit(body) {
  requests.length = 0;
  return moduleObject.exports.POST({
    json: async () => body,
    headers: new Headers({ referer: 'https://www.pvpro.ch/fr/test?utm_source=other', 'accept-language': 'fr' }),
    cookies: { get: () => undefined },
  });
}
async function main() {
  for (const [locale, path] of Object.entries({
    de: 'app/(form)/anfrage/page.tsx',
    it: 'app/(form)/it/richiesta/page.tsx',
    en: 'app/(form)/en/request/page.tsx',
    fr: 'app/(form)/fr/demande/page.tsx',
  })) {
    assert.ok(read(path).includes(locale === 'de' ? '<AnfrageForm />' : `<AnfrageForm locale="${locale}" />`));
    for (const suffix of ['', '/', '/nested/page']) {
      assert.equal(getLocale(locale === 'de' ? `/example${suffix}` : `/${locale}${suffix}`), locale);
    }
    const quote = clientPayload(quoteSource, locale);
    assert.equal(quote.form_language, locale);
    const response = await submit(quote);
    assert.equal(response.status, 200);
    const crm = requests.filter(r => r.url.endsWith('/api/webhook/form'));
    assert.equal(crm.length, 1);
    const { installer_sharing_consent_at, ...payload } = crm[0].body;
    assert.ok(!Number.isNaN(Date.parse(installer_sharing_consent_at)));
    assert.deepEqual(payload, {
      name: 'Test Example', form_language: locale, phone: '+41 79 000 00 00',
      email: 'test@example.invalid', address: 'Teststrasse 1', zip_code: '8000',
      utm_source: 'test-campaign', source: 'chatgpt', fbclid: 'synthetic-click',
      installer_sharing_consent: true,
    });
    assert.equal(requests.length, 3, 'CRM + both conversion calls are intercepted');
    const callback = clientPayload(widgetSource, locale);
    assert.equal(callback.form_language, locale);
    assert.equal((await submit(callback)).status, 400, 'Existing widget consent issue remains unchanged');
    assert.equal(requests.length, 0);
    // Backend compatibility for a consented callback, without changing the UI.
    assert.equal((await submit({ ...callback, installer_sharing_consent: true })).status, 200);
    assert.equal(requests[0].body.form_language, locale);
    console.log(`PASS ${locale}: form, widget, nested paths, webhook payload and attribution`);
  }
  assert.equal(getLocale('/italia'), 'de');
  assert.equal(getLocale('/english'), 'de');
  const legacy = clientPayload(quoteSource, 'de');
  delete legacy.form_language;
  assert.equal((await submit(legacy)).status, 200);
  assert.equal(requests[0].body.form_language, 'de');
  for (const value of ['es', '🇩🇪', 'DE', '', 12, {}, ['it']]) {
    assert.equal((await submit({ ...legacy, form_language: value })).status, 400);
    assert.equal(requests.length, 0);
  }
  console.log('PASS legacy default, invalid values rejected before external calls');
  console.log('No network requests, CRM contacts, notifications or emails sent.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
