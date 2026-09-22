#!/usr/bin/env node
/*
 * Focused acceptance audit for the five closing dossier guides (21–25).
 * The verified September 2026 dossier is the source of the assertions below.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const resolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return resolveFilename.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (mod, filename) => mod._compile(ts.transpileModule(
    fs.readFileSync(filename, 'utf8'),
    {
      fileName: filename,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    },
  ).outputText, filename);
}

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { cantonGuides } = require('../lib/canton-guides');
const { closingGuideIds } = require('../lib/canton-guides/types');
const GuidePage = require('../components/CantonGuidePage').default;

const expected = {
  uri: {
    h1: 'Solaranlage im Kanton Uri: Neue Solarregeln ab 1. Oktober 2026',
    modules: ['uri-transition'],
    headings: [/2026|Oktober/i, /Förder|Winterstrom|Solarfassade/i, /Gemeinde|Baubeginn|Meld|Bewillig/i],
    facts: ['31. Dezember 2025', '1. Oktober 2026', '40 W/m²', '20 W/m²', '300 m²', '5 kWh', 'CHF 1’000', 'CHF 250', '60 bis 90 Grad', 'CHF 400/m²'],
  },
  waadt: {
    h1: 'Solaranlage im Kanton Waadt: Was 2026 gilt – und was sich 2027 ändert',
    modules: ['vaud-transition'],
    headings: [/2026|2027/i, /Förder|Beitrag|Dämmung|Crowdfunding/i, /Gemeinde|Meld|Bewillig/i],
    facts: ['20%', '31. Dezember 2026', '1. Januar 2027', '30 Tage', 'CHF 100/m²', '50%', 'CHF 3’000', 'CHF 70/kWc', '30 kWc', 'CHF 40’000'],
  },
  wallis: {
    h1: 'Solaranlage im Wallis: PV-Pflicht bei Neubau und Dachsanierung 2026',
    modules: ['valais-roof-check', 'valais-large-roofs'],
    headings: [/Neubau|Solarpflicht/i, /Dachsanierung/i, /500 m²|Grossd/i, /Meld|Bewillig/i],
    facts: ['1. Januar 2025', '20 W/m²', '30 kW', '50 m²', '20%', '1’000 m²', '80%', '500 m²', '25 Jahren', '1’200 kWh/m²', '40%', '30 Tage'],
  },
  zug: {
    h1: 'Solaranlage im Kanton Zug: Eigenstrompflicht, Ersatzabgabe und Förderung 2026',
    modules: ['zug-power-choice', 'zug-renovation-bonus'],
    headings: [/Eigenstrom|Ersatzabgabe/i, /Förder/i, /Bauanzeige|Bewillig/i],
    facts: ['10 W/m²', '30 kW', 'CHF 1’000', '20 Tage', 'CHF 60/m²', '20%', '50%'],
  },
  zurich: {
    h1: 'Solaranlage im Kanton Zürich: Pflicht, Meldeverfahren und Förderung 2026',
    modules: ['zurich-jurisdictions', 'zurich-law-status'],
    headings: [/Kanton|Stadt/i, /geltend|geplant|Vorlage/i, /Meldeverfahren|Bewillig/i, /Förder|Beiträg/i],
    facts: ['10 W/m²', '70%', 'acht Jahre', '50 m²', '20%', '1’000 m²', '30 W/m²', '300 m²', '30 Tage', '1. August 2026', 'CHF 5’000', 'CHF 450/kWp', 'CHF 1’000', 'CHF 100/kWh', '100 kWh'],
  },
};

assert.deepEqual([...closingGuideIds], Object.keys(expected), 'closingGuideIds order and membership');
const guides = cantonGuides.filter(guide => closingGuideIds.includes(guide.id));
assert.equal(guides.length, 5, 'exactly five closing guides must be registered');

const unescape = value => value
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x3D;/g, '=')
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)));
const plain = value => unescape(value.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const bodyText = html => plain(html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' '));

const report = [];
for (const guide of guides) {
  const spec = expected[guide.id];
  assert.equal(guide.h1, spec.h1, `${guide.id}: exact dossier H1`);
  assert.ok(guide.faqs.length >= 4 && guide.faqs.length <= 6, `${guide.id}: 4–6 FAQs`);
  assert.equal(new Set(guide.faqs.map(faq => faq.question)).size, guide.faqs.length, `${guide.id}: unique FAQ questions`);
  assert.ok(!guide.sections.some(section => section.id === 'kosten'), `${guide.id}: no invented costs section`);
  const moduleKinds = guide.sections.flatMap(section => section.module ? [section.module.kind] : []);
  assert.deepEqual(moduleKinds, spec.modules, `${guide.id}: required distinctive modules in editorial order`);
  for (const heading of spec.headings) {
    assert.ok(guide.sections.some(section => heading.test(section.title)), `${guide.id}: missing contextual heading ${heading}`);
  }

  const sourceIds = new Set(guide.sources.map(source => source.id));
  const maxSources = guide.id === 'zurich' ? 16 : 10;
  assert.ok(guide.sources.length >= 3 && guide.sources.length <= maxSources, `${guide.id}: 3–${maxSources} official sources`);
  assert.equal(sourceIds.size, guide.sources.length, `${guide.id}: duplicate source IDs`);
  for (const source of guide.sources) {
    assert.match(source.url, /^https:\/\//, `${guide.id}: source is not HTTPS: ${source.id}`);
    assert.ok(!/PENDING|example\.com/i.test(source.url), `${guide.id}: unresolved source: ${source.id}`);
  }
  const checkSourceIds = value => {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value.sourceIds)) {
      for (const id of value.sourceIds) assert.ok(sourceIds.has(id), `${guide.id}: unknown source ${id}`);
    }
    for (const child of Object.values(value)) checkSourceIds(child);
  };
  checkSourceIds(guide);

  const html = renderToStaticMarkup(React.createElement(GuidePage, { guide, mapSection: null }));
  const h1s = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/g) || [];
  assert.equal(h1s.length, 1, `${guide.id}: one H1`);
  assert.equal(plain(h1s[0]), spec.h1, `${guide.id}: rendered H1`);
  assert.equal((html.match(/href="\/anfrage\?canton=/g) || []).length, 3, `${guide.id}: three context-aware /anfrage CTAs`);
  assert.equal((html.match(/>Bis zu 3 Solarofferten vergleichen<\/a>/g) || []).length, 3, `${guide.id}: exact CTA label`);
  assert.equal((html.match(/"@type":"FAQPage"/g) || []).length, 1, `${guide.id}: one FAQPage schema`);
  for (const kind of spec.modules) assert.ok(html.includes(`data-guide-module="${kind}"`), `${guide.id}: rendered ${kind}`);

  const visibleFaq = [...html.matchAll(/<dt data-faq-question(?:="[^"]*")?>([\s\S]*?)<\/dt>\s*<dd><span data-faq-answer(?:="[^"]*")?>([\s\S]*?)<\/span>/g)]
    .map(match => [plain(match[1]), plain(match[2])]);
  assert.deepEqual(visibleFaq, guide.faqs.map(faq => [faq.question, faq.answer]), `${guide.id}: every configured FAQ is visible`);
  const schemaScripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(match => JSON.parse(match[1]));
  const faqSchemas = schemaScripts.filter(schema => schema['@type'] === 'FAQPage');
  assert.equal(faqSchemas.length, 1, `${guide.id}: exactly one parseable FAQ schema`);
  assert.deepEqual(
    faqSchemas[0].mainEntity.map(item => [item.name, item.acceptedAnswer.text]),
    visibleFaq,
    `${guide.id}: FAQ schema exactly matches visible FAQs`,
  );

  const text = bodyText(html);
  for (const fact of spec.facts) assert.ok(text.includes(fact), `${guide.id}: critical contextual fact missing: ${fact}`);
  assert.ok(!text.includes('ß'), `${guide.id}: Swiss spelling must use ss`);
  assert.ok(!/führende Vergleichsplattform|garantierte Förderung|geprüfte Fachbetriebe|ROI|Rendite|Amortisationszeit/i.test(text), `${guide.id}: unsupported claim`);
  report.push({ canton: guide.id, modules: moduleKinds.join(', '), faq: visibleFaq.length, sources: guide.sources.length, cta: 3 });
}

console.table(report);
console.log('PASS: closing five dossier guides; exact H1s; normative facts in context; eight required modules; 4–6 unique visible/schema-identical FAQs; official sources; no invented costs sections; three CTAs.');