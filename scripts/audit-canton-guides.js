#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return originalResolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => module._compile(ts.transpileModule(
    fs.readFileSync(filename, 'utf8'), {
      fileName: filename,
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
    },
  ).outputText, filename);
}
const { cantonGuides, getCantonGuide, getCantonGuideByPath } = require('../lib/canton-guides');
const { cantonAreas } = require('../lib/cantons');
const { pageMetadata } = require('../lib/pageMetadata');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const GuidePage = require('../components/CantonGuidePage').default;
const expected = {
  aargau: ['decision-tree', 'process-flow'],
  'appenzell-ausserrhoden': ['timeline', 'statistics'],
  'appenzell-innerrhoden': ['pillars'],
  basel: ['comparison', 'jurisdiction-steps'],
  bern: ['regulatory-checklist', 'roof-explainer'],
};
assert.equal(cantonGuides.length, 5);
const report = [];
for (const guide of cantonGuides) {
  assert.equal(getCantonGuide(guide.id, 'de'), guide);
  assert.equal(getCantonGuideByPath(guide.path, 'de'), guide);
  assert.ok(guide.sources.length >= 3 && guide.sources.length <= 6, `${guide.id}: 3–6 official sources`);
  const sources = new Set(guide.sources.map(s => s.id));
  assert.equal(sources.size, guide.sources.length);
  const ids = new Set(guide.sections.map(s => s.id));
  assert.equal(ids.size, guide.sections.length);
  assert.ok(ids.has('kosten'), `${guide.id}: cost/planning section required`);
  const modules = guide.sections.flatMap(s => s.module ? [s.module.kind] : []);
  for (const kind of expected[guide.id]) assert.ok(modules.includes(kind), `${guide.id}: missing ${kind}`);
  function checkSources(value) {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value.sourceIds)) for (const id of value.sourceIds) assert.ok(sources.has(id), `${guide.id}: unknown source ${id}`);
    for (const child of Object.values(value)) {
      if (Array.isArray(child)) child.forEach(checkSources);
      else if (child && typeof child === 'object') checkSources(child);
    }
  }
  checkSources(guide);
  for (const source of guide.sources) assert.match(source.url, /^https:\/\//);
  const html = renderToStaticMarkup(React.createElement(GuidePage, { guide, mapSection: null }));
  const text = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ');
  assert.ok(!/ß|führende Vergleichsplattform|garantierte Bundesförderung|Bundesförderung garantiert|\bregion(?:en)?\b/i.test(text), `${guide.id}: forbidden wording`);
  assert.equal((html.match(/"@type":"FAQPage"/g) || []).length, 1, `${guide.id}: duplicate FAQ schema`);
  assert.equal((html.match(/>Bis zu 3 Solarofferten vergleichen<\/a>/g) || []).length, 3, `${guide.id}: three main CTA links`);
  assert.ok(html.includes('data-canton-guide='), 'Scoped article marker required');
  for (const kind of expected[guide.id]) assert.ok(html.includes(`data-guide-module="${kind}"`));
  const metadata = pageMetadata({}, { path: guide.path, locale: 'de' });
  assert.equal(metadata.title.absolute, guide.title, `${guide.id}: exact requested title`);
  assert.equal(metadata.description, guide.description);
  assert.equal(metadata.alternates.canonical, `https://www.pvpro.ch${guide.path}`);
  assert.ok(Object.keys(metadata.alternates.languages).length >= 4);
  report.push({ canton: guide.id, wordsApprox: text.trim().split(/\s+/).length, modules, sources: guide.sources.length, faq: guide.faqs.length });
}
for (const area of cantonAreas) {
  for (const locale of ['de', 'fr', 'it', 'en']) {
    if (locale !== 'de' || !expected[area.id]) {
      assert.equal(getCantonGuide(area.id, locale), undefined);
      assert.equal(getCantonGuideByPath(area.paths[locale], locale), undefined);
    }
  }
}
console.table(report);
console.log('PASS: only five DE routes; exact metadata; sourced content; distinct modules; three main CTAs; one FAQ schema per guide.');