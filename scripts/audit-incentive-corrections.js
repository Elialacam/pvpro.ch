#!/usr/bin/env node
// Regression checks for the sourced incentive audit, not a subsidy calculator.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return resolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => module._compile(ts.transpileModule(
    fs.readFileSync(filename, 'utf8'), { fileName: filename, compilerOptions: {
      module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
    } },
  ).outputText, filename);
}
const facts = require('../lib/facts.ts');
assert.equal(facts.ECONOMIC_FACTS.incentives, undefined, 'Do not restore unverified universal subsidy figures');
assert.equal(facts.calculatePronovoVariableContribution, undefined);
assert.equal(facts.getPronovoRate, undefined);
const { cantonAreas } = require('../lib/cantons.ts');
const { getCantonAuditPage } = require('../lib/canton-audit.ts');
const { ZURICH_INCENTIVES: zh } = require('../lib/zurich-incentives.ts');
const locales = ['de', 'fr', 'it', 'en'];
const ids = ['aargau', 'appenzell-ausserrhoden', 'appenzell-innerrhoden', 'basel', 'bern'];
for (const id of ids) {
  assert.ok(cantonAreas.find(a => a.id === id));
  for (const locale of locales) {
    const page = getCantonAuditPage(id, locale);
    assert.ok(page?.content.heroHeadline && page.content.faqs.length, `${id}/${locale}`);
    assert.ok(page.records.length >= 2, `Missing sources for ${id}`);
    for (const record of page.records) {
      assert.ok(['federal', 'canton', 'municipality', 'utility'].includes(record.jurisdiction));
      assert.ok(record.jurisdiction_name && record.name && record.amount_type && record.federal_relation);
      assert.match(record.source_url, /^https:\/\//);
      assert.match(record.source_checked_at, /^\d{4}-\d{2}-\d{2}$/);
      assert.match(record.effective_from, /^\d{4}-\d{2}-\d{2}$/);
      for (const language of locales) {
        assert.ok(record.eligibility[language] && record.timing[language] && record.amount_label[language]);
      }
      if (record.effective_from >= '2027-01-01') assert.equal(record.future, true);
    }
  }
}
const ar = getCantonAuditPage('appenzell-ausserrhoden', 'de').records.find(r => r.amount_type === 'percentage');
assert.equal(ar.amount, 50);
assert.equal(ar.federal_relation, 'additive');
assert.equal(ar.effective_from, '2025-09-01');
assert.match(ar.amount_label.de, /EIV/);
assert.match(ar.timing.de, /nach/);
const ai = getCantonAuditPage('appenzell-innerrhoden', 'de');
assert.ok(!ai.records.some(r => r.amount_type === 'percentage' && r.amount === 50));
const basel = getCantonAuditPage('basel', 'de');
assert.ok(basel.records.some(r => r.jurisdiction_name === 'Basel-Stadt'));
assert.ok(basel.records.some(r => r.jurisdiction_name === 'Basel-Landschaft'));
assert.equal(zh.cityPv.jurisdiction, 'municipality');
assert.equal(zh.cityPv.federal_relation, 'inclusive');
assert.equal(zh.cityPv.effective_from, '2026-08-01');
assert.deepEqual(zh.cityPv.amount, {
  baseChf: 5000, upTo30KwpChfPerKwp: 450,
  from30To100KwpChfPerAdditionalKwp: 350, above100KwpChfPerAdditionalKwp: 310,
  permittedExistingBuildingAdditionalChf: 3000,
});
assert.equal(zh.cityBattery.jurisdiction, 'municipality');
assert.deepEqual(zh.cityBattery.amount, {
  baseChf: 1000, chfPerKwh: 100, secondLifeChfPerKwh: 100,
  minimumKwh: 3, maximumKwh: 100, maximumKwhPerInstalledKw: 1.5,
});
assert.equal(zh.cantonAgriculturalBattery.status, 'exhausted');
assert.equal(zh.ewzFeedIn.jurisdiction, 'utility');
assert.equal(zh.ewzFeedIn.status, 'announced_not_final');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const Guide = require('../components/ZurichIncentivesGuide.tsx').default;
const quoteRoutes = { de: '/anfrage', fr: '/fr/demande', it: '/it/richiesta', en: '/en/request' };
for (const locale of locales) {
  const html = renderToStaticMarkup(React.createElement(Guide, { locale }));
  assert.ok(html.includes(`href="${quoteRoutes[locale]}"`), `Incorrect ${locale} quote link`);
  assert.ok(!html.includes('href="/en/quote"') && !html.includes('href="/it/preventivo"'));
  if (locale !== 'de') assert.ok(!html.includes('Keine Doppelzählung'));
}
console.log('PASS: 20 localized canton audit pages, jurisdiction/source/eligibility records, AR versus AI, BS versus BL, Zurich city caps and inclusive funding, ewz uncertainty, no universal Pronovo formula.');