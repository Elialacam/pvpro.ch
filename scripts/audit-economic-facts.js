#!/usr/bin/env node
/**
 * Find economic figures written directly in application source files.
 *
 * This deliberately only reports figures next to an economic unit/keyword.
 * Plain dates, icon step numbers, CSS values and unrelated IDs are ignored.
 * lib/facts.ts is excluded because it is the canonical source.
 */
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const ignored = /(?:^|[/\\])lib[/\\](?:facts|imageFocus)\.ts$/i;
const source = /\.(?:tsx?|jsx?|json|html)$/i;
const directFactUse = /(?:ECONOMIC_FACTS|getSystemCostRange|calculate(?:PronovoVariableContribution|AnnualSolarValueRange)|format(?:SwissNumber|Chf|ChfForLocale|Range|RangeForLocale)|SOURCE_NOTES|SYSTEM_PRICE_NOTES|STORAGE_PRICE_NOTES|ELECTRICITY_TARIFF_NOTES|getSourceNote|factRange|factNumber|itRange\(|cost10)/;
const moneyOrTariff = /(?:\b(?:CHF|Franken|francs?)\s*[~≈]?\s*\d|\d[\d'’.,\s–-]*\s*(?:CHF|Franken|francs?|Rp\.?\s*\/\s*kWh|ct\.?\s*\/\s*kWh))/i;
const production = /(?:\d[\d'’.,\s–-]*\s*(?:kWh\s*\/\s*kWp|kWh\b).*(?:produ|ertrag|rendement|rendimento|yield)|(?:produ|ertrag|rendement|rendimento|yield).*\d[\d'’.,\s–-]*\s*(?:kWh\s*\/\s*kWp|kWh\b))/i;
const percentageKeyword = /(?:Investition|investment|investimento|investissement|Förder|subsid|incentiv|autocons|Eigenverbrauch|self-consum|garant|warrant|prestazione|performance|Rendite|return|rendement\s+(?:annuel|du capital|de l'investissement)|rendimento\s+(?:annuo|del capitale|dell'investimento)|Erspar|saving|économ|risparm|kostenlos|gratuit|free|Winter|hivern|invern|cold|Kälte|froid|fredd)/i;
const percentage = new RegExp(
  `(?:\\d[\\d.,\\s–-]*\\s*%.*${percentageKeyword.source}|${percentageKeyword.source}.*\\d[\\d.,\\s–-]*\\s*%)`,
  'i',
);
const yearUnit = /(?:Jahre?|J\.|ans?|anni|years?|yrs?)/i;
const durationKeyword = /(?:amm?ort|payback|durata|Lebensdauer|lifetime|lifespan|durée(?:\s+de\s+vie)?|garant|warrant)/i;
const years = new RegExp(
  `(?:\\d[\\d.,\\s–-]*\\s*${yearUnit.source}.*${durationKeyword.source}|${durationKeyword.source}.*\\d[\\d.,\\s–-]*\\s*${yearUnit.source})`,
  'i',
);
const roofArea = /(?:\d[\d.,\s–-]*\s*m(?:²|2).*(?:kWp|toit|Dach|tetto|roof)|(?:kWp|toit|Dach|tetto|roof).*\d[\d.,\s–-]*\s*m(?:²|2))/i;
const economic = new RegExp(
  [moneyOrTariff, production, percentage, years, roofArea]
    .map(pattern => pattern.source)
    .join('|'),
  'i',
);
const sensitiveUnsupported = new RegExp(
  `(?:Winter|hivern|invern|cold|Kälte|froid|fredd).*\\d[\\d.,\\s–-]*\\s*%|\\d[\\d.,\\s–-]*\\s*%.*(?:Winter|hivern|invern|cold|Kälte|froid|fredd)|(?:garant|warrant).*\\d[\\d.,\\s–-]*\\s*${yearUnit.source}`,
  'i',
);
const orphanBrandFragment = /(?:^|[.!?]\s+)ch\b/i;
const technicalEfficiency = /(?:rendement|rendimento|efficien|Wirkungsgrad)[^%\n]*\d[\d.,\s–-]*\s*%|\d[\d.,\s–-]*\s*%[^.\n]*(?:rendement|rendimento|efficien|Wirkungsgrad)/i;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(file);
    return source.test(file) ? [file] : [];
  });
}

// Keep the scan to application/shared source. In particular, do not scan this
// report or attached requirement files, which would create self-referential
// and editorial false positives.
const scanRoots = ['app', 'components', 'lib', 'content']
  .map(dir => path.join(root, dir))
  .filter(dir => fs.existsSync(dir));
const files = scanRoots.flatMap(walk).filter(file => !ignored.test(file));
const violations = [];
const violationKeys = new Set();

function addViolation(file, line, text) {
  const key = `${file}:${line}:${text}`;
  if (violationKeys.has(key)) return;
  violationKeys.add(key);
  violations.push({ file, line, text });
}

function quotedEconomicLiteral(line) {
  const quoted = /(["'`])((?:\\.|(?!\1).)*)\1/g;
  return [...line.matchAll(quoted)].some(match => {
    const withoutFactExpressions = match[2].replace(/\$\{[^{}]*\}/g, ' ');
    return economic.test(withoutFactExpressions) && /\b\d+(?:[.,]\d+)?\b/.test(withoutFactExpressions);
  });
}

function scanJsonObjects(value, file, lines) {
  if (typeof value === 'string') {
    if (orphanBrandFragment.test(value)) {
      const marker = value.slice(0, 80);
      const lineIndex = lines.findIndex(line => line.includes(marker));
      addViolation(file, lineIndex >= 0 ? lineIndex + 1 : 1, `orphan brand fragment: ${value}`);
    }
    return;
  }
  if (!value || typeof value !== 'object') return;
  if (!Array.isArray(value)) {
    const keys = Object.keys(value);
    const isPairedDisplayObject = (
      (keys.includes('label') && keys.includes('value'))
      || (keys.includes('question') && keys.includes('answer'))
      || (keys.includes('q') && keys.includes('a'))
      || (keys.includes('fattore') && (keys.includes('balkon') || keys.includes('solar')))
    );
    if (isPairedDisplayObject) {
      const immediateParts = Object.values(value)
        .filter(part => typeof part === 'string' || typeof part === 'number')
        .map(String);
      const combined = immediateParts.join(' ');
      if (economic.test(combined) && /\b\d+(?:[.,]\d+)?\b/.test(combined)) {
        const numericPart = immediateParts.find(part => /\b\d+(?:[.,]\d+)?\b/.test(part)) ?? immediateParts[0] ?? '';
        const lineIndex = lines.findIndex(line => numericPart && line.includes(numericPart));
        addViolation(file, lineIndex >= 0 ? lineIndex + 1 : 1, combined.trim());
      }
    }
  }
  Object.values(value).forEach(child => scanJsonObjects(child, file, lines));
}

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const relativeFile = path.relative(root, file);
  lines.forEach((line, index) => {
    // A facts import/use is intentionally not a violation; the value must be
    // rendered from the imported object, not copied into a string.
    // Ignore numeric values in JSX attributes (for example Tailwind colours).
    const visible = line.replace(/<[^>]*>/g, ' ');
    const numbers = [...visible.matchAll(/\b\d+(?:[.,]\d+)?\b/g)];
    const hasDirectNumber = numbers.length > 0;
    const isSensitiveUnsupportedClaim = sensitiveUnsupported.test(visible);
    const isTechnicalEfficiencyOnly = (
      technicalEfficiency.test(visible)
      && !moneyOrTariff.test(visible)
      && !production.test(visible)
      && !years.test(visible)
      && !roofArea.test(visible)
    );
    const isProtectedHomepageHeading = (
      relativeFile === path.join('components', 'Hero.tsx')
      && /titleLine[12]:/.test(line)
    );
    const hasDirectFactUse = directFactUse.test(line);
    const hasQuotedEconomicLiteral = quotedEconomicLiteral(line);
    const jsxTextWithoutFactExpression = line.replace(/\{[^{}]*(?:ECONOMIC_FACTS|getSystemCostRange|calculate(?:PronovoVariableContribution|AnnualSolarValueRange)|format(?:SwissNumber|Chf|ChfForLocale|Range|RangeForLocale)|factRange|factNumber|itRange\()[^{}]*\}/g, ' ');
    const hasJsxEconomicLiteral = (
      line.includes('<')
      &&
      jsxTextWithoutFactExpression !== line
      && economic.test(jsxTextWithoutFactExpression.replace(/<[^>]*>/g, ' '))
      && /\b\d+(?:[.,]\d+)?\b/.test(jsxTextWithoutFactExpression)
    );
    if (
      economic.test(visible)
      && hasDirectNumber
      && !isTechnicalEfficiencyOnly
      && !isProtectedHomepageHeading
      && (!hasDirectFactUse || isSensitiveUnsupportedClaim || hasQuotedEconomicLiteral || hasJsxEconomicLiteral)
      && !/from ['"]@\/lib\/facts|lib\/facts/.test(line)
    ) {
      addViolation(relativeFile, index + 1, line.trim());
    }
  });
  if (file.endsWith('.json')) {
    try {
      scanJsonObjects(JSON.parse(lines.join('\n')), relativeFile, lines);
    } catch {
      addViolation(relativeFile, 1, 'invalid JSON');
    }
  }
}

function jsonTraversalDetectsOrphan(fixture) {
  const fixtureFile = '__economic-audit-regression__.json';
  const beforeLength = violations.length;
  scanJsonObjects(fixture, fixtureFile, [JSON.stringify(fixture)]);
  const detected = violations.slice(beforeLength).some(violation => violation.file === fixtureFile);
  violations.splice(beforeLength);
  [...violationKeys]
    .filter(key => key.startsWith(`${fixtureFile}:`))
    .forEach(key => violationKeys.delete(key));
  return detected;
}

const regressionChecks = [
  {
    ok: orphanBrandFragment.test('Valid sentence. ch offers a service.'),
    name: 'sentence-internal orphan brand fragment',
  },
  {
    ok: orphanBrandFragment.test('ch offers a service.'),
    name: 'array-item orphan brand fragment',
  },
  {
    ok: years.test('Module lifespan: 12–15 yrs'),
    name: 'abbreviated lifespan claim',
  },
  {
    ok: quotedEconomicLiteral("text: `${formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF', 'en')} plus 9'999 CHF`"),
    name: 'literal economic claim beside facts expression',
  },
  {
    ok: jsonTraversalDetectsOrphan({ sections: [{ content: ['ch offers a service.'] }] }),
    name: 'nested paragraph-array orphan traversal',
  },
  {
    ok: jsonTraversalDetectsOrphan({ article: { intro: 'Valid sentence. ch offers a service.' } }),
    name: 'nested introductory-text orphan traversal',
  },
];
regressionChecks.forEach(check => {
  if (!check.ok) throw new Error(`Economic facts audit regression check failed: ${check.name}`);
});

if (violations.length) {
  console.error(`Economic facts audit: ${violations.length} possible hardcoded claim(s)`);
  violations.forEach(v => console.error(`${v.file}:${v.line}: ${v.text}`));
  process.exitCode = 1;
} else {
  console.log('Economic facts audit: no covered hardcoded claims found.');
}