#!/usr/bin/env node
// Structural/editorial checks run without making network requests or sending leads.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return resolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
const compile = (text, filename) => ts.transpileModule(text, {
  fileName: filename,
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
}).outputText;
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => module._compile(compile(fs.readFileSync(filename, 'utf8'), filename), filename);
}
const { cantonAreas } = require('../lib/cantons');
const { getCantonGuideByPath } = require('../lib/canton-guides');
const { pageMetadata } = require('../lib/pageMetadata');
const locales = ['de', 'it', 'fr', 'en'];
const textWarnings = [];
const numberWarnings = [];
const titles = new Set();
const descriptions = new Set();
let total = 0;

function checkShape(master, translated, location = '') {
  assert.equal(typeof translated, typeof master, `Type mismatch: ${location}`);
  if (Array.isArray(master)) {
    assert.ok(Array.isArray(translated), location);
    assert.equal(translated.length, master.length, `Missing or extra items: ${location}`);
    master.forEach((value, i) => checkShape(value, translated[i], `${location}[${i}]`));
  } else if (master && typeof master === 'object') {
    assert.deepEqual(Object.keys(translated).sort(), Object.keys(master).sort(), `Missing or extra fields: ${location}`);
    for (const key of Object.keys(master)) checkShape(master[key], translated[key], `${location}.${key}`);
  } else if (typeof master === 'string') {
    assert.ok(translated.trim(), `Empty translation: ${location}`);
    if (/\.(id|kind|status|url|ctaAfterSection)$|\.sourceIds\[\d+\]$/.test(location)) {
      assert.equal(translated, master, `Changed structural/source value: ${location}`);
    } else if (!/\.(path|title|description|canton|authority)$/.test(location) && !location.includes('.sources[')) {
      if (translated === master && master.length > 45 && /[a-z]/i.test(master)) textWarnings.push({ location, text: master });
      const numbers = value => (value
        .replace(/(\d)[’'](?=\d{3}\b)/g, '$1')
        .replace(/(\d)[.,](?=\d{3}\b)/g, '$1')
        .replace(/(\d)[ \u00a0\u202f](?=\d{3}\b)/g, '$1')
        .replace(/(\d),(\d)/g, '$1.$2')
        .match(/\d+(?:\.\d+)?/g) || []).sort();
      if (JSON.stringify(numbers(master)) !== JSON.stringify(numbers(translated))) {
        numberWarnings.push({ location, master, translated });
      }
    }
  }
}

assert.equal(cantonAreas.length, 25);
for (const canton of cantonAreas) {
  const master = getCantonGuideByPath(canton.paths.de, 'de');
  assert.ok(master, `Missing German guide: ${canton.id}`);
  // Compare with the version before this rollout; only SEO fields may change.
  if (process.env.CHECK_GERMAN_BASELINE === '1') {
    const filename = `lib/canton-guides/${master.id}.ts`;
    const original = new Module(path.join(root, filename));
    original.filename = path.join(root, filename);
    original.paths = module.paths;
    original._compile(compile(execFileSync('git', ['show', `HEAD:${filename}`], { encoding: 'utf8' }), filename), filename);
    const body = ({ title, description, ...rest }) => rest;
    assert.deepEqual(body(master), body(original.exports.guide), `German body changed: ${canton.id}`);
  }
  for (const locale of locales) {
    const route = canton.paths[locale];
    const guide = getCantonGuideByPath(route, locale);
    assert.ok(guide, `Missing guide ${locale}/${canton.id}`);
    assert.equal(guide.id, master.id);
    assert.equal(guide.path, route);
    if (locale !== 'de') checkShape(master, guide, `${locale}/${canton.id}`);
    const metadata = pageMetadata({}, { path: route, locale });
    const title = metadata.title.absolute;
    assert.ok(title.includes('PvPro.ch'));
    assert.equal((title.match(/PvPro\.ch/g) || []).length, 1);
    assert.ok(guide.h1.length > 8 && metadata.description.length > 30);
    assert.ok(!titles.has(`${locale}:${title}`), `Duplicate title: ${route}`);
    assert.ok(!descriptions.has(`${locale}:${metadata.description}`), `Duplicate description: ${route}`);
    titles.add(`${locale}:${title}`);
    descriptions.add(`${locale}:${metadata.description}`);
    assert.ok(metadata.alternates.canonical.endsWith(route));
    for (const target of locales) {
      assert.ok(metadata.alternates.languages[`${target}-CH`].endsWith(canton.paths[target]));
    }
    assert.ok(metadata.alternates.languages['x-default'].endsWith(canton.paths.de));
    assert.equal(metadata.openGraph.title, title);
    assert.equal(metadata.openGraph.description, metadata.description);
    assert.equal(metadata.twitter.title, title);
    const text = JSON.stringify(guide, (key, value) => ['url', 'path', 'id', 'sourceIds', 'authority'].includes(key) ? undefined : value);
    assert.ok(!/\bregion(?:e|i|s|al\w*)?\b|région\w*/i.test(text), `Banned wording: ${route}`);
    if (locale === 'de') assert.ok(!text.includes('ß'), `Non-Swiss spelling: ${route}`);
    total++;
  }
}
console.log(JSON.stringify({ pages: total, structuralParity: 'passed', seo: 'passed', unchangedLongTexts: textWarnings, numericReview: numberWarnings }, null, 2));
assert.equal(textWarnings.length, 0, 'Untranslated long text must be reviewed');