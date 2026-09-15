#!/usr/bin/env node
// Editorial safety checks complement the shared guide and browser audits.
require('./audit-canton-guides');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');
const { cantonGuides } = require('../lib/canton-guides');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const GuideHero = require('../components/canton-guides/GuideHero').default;
const escapeHtml = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

const headings = {
  aargau: 'Solaranlage im Aargau: Was 2026 für Eigentümer gilt',
  'appenzell-ausserrhoden': 'Solaranlage in Appenzell Ausserrhoden: Förderung 2026 und Änderungen ab 2027',
  'appenzell-innerrhoden': 'Solaranlage in Appenzell Innerrhoden: Förderung, Beratung und Bewilligung',
  basel: 'Solaranlage in Basel: Basel-Stadt oder Basel-Landschaft?',
  bern: 'Solaranlage im Kanton Bern: Die neuen Regeln seit 2026',
};
for (const guide of cantonGuides.filter(guide => headings[guide.id])) {
  const original = execFileSync('git', ['show', `HEAD:lib/canton-guides/${guide.id}.ts`], { encoding: 'utf8' });
  const compiled = ts.transpileModule(original, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const baselineModule = { exports: {} };
  new Function('exports', 'module', compiled)(baselineModule.exports, baselineModule);
  const baseline = baselineModule.exports.guide;
  assert.equal(guide.path, baseline.path);
  assert.equal(guide.title, baseline.title, `${guide.id}: SEO title unchanged`);
  assert.equal(guide.description, baseline.description, `${guide.id}: description unchanged`);
  assert.deepEqual(guide.sources, baseline.sources, `${guide.id}: all official sources unchanged`);
  assert.equal(guide.faqs.length, baseline.faqs.length, `${guide.id}: retain FAQs`);
  assert.equal(guide.h1, headings[guide.id], `${guide.id}: new H1`);
  const hero = renderToStaticMarkup(React.createElement(GuideHero, { guide }));
  for (const fact of guide.quickFacts) {
    assert.ok(hero.includes(escapeHtml(fact.value)), `${guide.id}: visible hero value ${fact.value}`);
    assert.ok(hero.includes(escapeHtml(fact.label)), `${guide.id}: visible hero qualification`);
    for (const source of fact.sourceIds) assert.ok(hero.includes(`href="#quelle-${source}"`), `${guide.id}: hero citation`);
  }
  assert.ok(guide.sections.filter(section => section.notice).length <= 3, `${guide.id}: avoid excessive notices`);
  const costs = guide.sections.find(section => section.id === 'kosten');
  assert.equal(costs.title, 'Was kostet eine Solaranlage hier?');
  assert.ok(costs.bullets?.length >= 6 && costs.bullets.length <= 8, `${guide.id}: compact cost factors`);
}
console.log('PASS: exact new H1s, unchanged SEO metadata and sources, retained FAQs, compact cost factors, limited summary notices.');