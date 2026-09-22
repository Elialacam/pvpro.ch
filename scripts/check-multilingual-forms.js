#!/usr/bin/env node

/**
 * Focused, network-free checks for multilingual lead context and confirmation
 * copy. This transpiles only the pure helpers into a temporary directory; it
 * never imports API routes and cannot contact LeadSync, Resend, or ad services.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'pvpro-form-check-'));

function compile(sourcePath, outputName, replacements = []) {
  let source = fs.readFileSync(path.join(root, sourcePath), 'utf8');
  for (const [from, to] of replacements) source = source.replaceAll(from, to);
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: sourcePath,
  }).outputText;
  fs.writeFileSync(path.join(temp, outputName), output);
}

try {
  compile('lib/cantons.ts', 'cantons.js');
  compile('lib/leadContext.ts', 'leadContext.js', [
    ["@/lib/cantons", './cantons.js'],
  ]);
  compile('lib/confirmationTranslations.ts', 'confirmationTranslations.js', [
    ["@/lib/leadContext", './leadContext.js'],
  ]);

  const {
    leadContextFromPath,
    leadContextFromValues,
  } = require(path.join(temp, 'leadContext.js'));
  const { cantonAreas } = require(path.join(temp, 'cantons.js'));
  const {
    escapeConfirmationHtml,
    getConfirmationCopy,
  } = require(path.join(temp, 'confirmationTranslations.js'));

  const validCases = cantonAreas.flatMap(area =>
    ['de', 'fr', 'it', 'en'].map(locale => [locale, area.id, area.paths[locale]]),
  );
  assert.equal(validCases.length, 100, 'All 25 canton areas × 4 locales are covered');
  for (const [locale, canton, origin] of validCases) {
    assert.deepEqual(
      leadContextFromValues(locale, canton, origin, 'chatgpt'),
      { locale, canton, origin, source: 'chatgpt' },
    );
    assert.deepEqual(
      leadContextFromPath(origin, locale),
      { locale, canton, origin },
    );
  }
  for (const locale of ['de', 'fr', 'it', 'en']) {
    const zurich = cantonAreas.find(area => area.id === 'zuerich');
    assert.deepEqual(
      leadContextFromValues(locale, 'zurich', zurich.paths[locale], ''),
      { locale, canton: 'zuerich', origin: zurich.paths[locale] },
      `Zurich CTA alias is normalized for ${locale}`,
    );
  }

  assert.deepEqual(
    leadContextFromValues('de', 'zuerich', '/fr/solaire-zurich', 'newsletter'),
    { locale: 'de' },
    'A locale-mismatched origin and unsupported campaign source must be dropped',
  );
  assert.deepEqual(
    leadContextFromValues('en', 'bern', '/en/solar-panels-aargau', 'chatgpt'),
    { locale: 'en', source: 'chatgpt' },
    'A canton-mismatched origin must be dropped without losing campaign attribution',
  );
  assert.deepEqual(
    leadContextFromValues('xx', 'zuerich', '/solaranlage-zurich', 'chatgpt'),
    { locale: 'de', canton: 'zuerich', origin: '/solaranlage-zurich', source: 'chatgpt' },
    'Invalid locales must safely fall back to German',
  );
  assert.deepEqual(
    leadContextFromValues('fr', 'waadt', '', '/fr/solaire-vaud'),
    { locale: 'fr', canton: 'waadt', origin: '/fr/solaire-vaud' },
    'Legacy source guide paths must migrate to origin',
  );

  const expectedSubjects = {
    de: 'Vielen Dank',
    fr: 'Merci',
    it: 'Grazie',
    en: 'Thank you',
  };
  const unsafeName = '<img src=x onerror="alert(1)"> & O\'Neil';
  const escapedName = escapeConfirmationHtml(unsafeName);
  assert(!escapedName.includes('<img'));
  assert(!escapedName.includes('"alert'));
  assert(escapedName.includes('&lt;img'));
  assert(escapedName.includes('&amp;'));
  assert(escapedName.includes('&#39;'));

  for (const locale of ['de', 'fr', 'it', 'en']) {
    const copy = getConfirmationCopy(locale);
    assert(copy.subject.startsWith(expectedSubjects[locale]));
    assert(copy.greeting(escapedName).includes(escapedName));
    assert.equal(copy.steps.length, 3);
    assert(copy.properties.einfamilienhaus);
    assert(copy.roofs.pitched);
    assert(copy.batteries.unknown);
  }

  console.log('Multilingual form context and confirmation checks passed.');
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}