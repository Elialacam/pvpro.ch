#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Compare the pre-restoration Next output with a final build, without counting
 * React flight payloads. The authoritative inventory is 330 indexable routes
 * from seo-metadata-report.md plus the twelve explicitly non-indexable pages.
 *
 * Usage:
 *   node scripts/audit-restored-claims.js --template
 *   node scripts/audit-restored-claims.js \
 *     --baseline /tmp/pvpro-restored-claims-baseline-f61dc7b \
 *     --final .next --report seo-restored-claims-audit.md
 */
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index < 0 ? fallback : args[index + 1];
};
const templateOnly = args.includes('--template');
const allowSameBuild = args.includes('--allow-same-build');
const devDomain = option('--dev-domain', process.env.REPLIT_DEV_DOMAIN || '');
const baselineRoot = path.resolve(option('--baseline', '/tmp/pvpro-restored-claims-baseline-f61dc7b'));
const finalRoot = path.resolve(option('--final', path.join(root, '.next')));
const reportFile = path.resolve(option('--report', path.join(root, 'seo-restored-claims-audit.md')));
const originalCommit = option('--original', 'a0dbab8');
const preCommit = option('--pre', 'f61dc7b');

const nonIndexableRoutes = [
  { path: '/anfrage', reason: 'form' },
  { path: '/fr/demande', reason: 'form' },
  { path: '/en/request', reason: 'form' },
  { path: '/it/richiesta', reason: 'form' },
  { path: '/danke', reason: 'conversion' },
  { path: '/fr/merci', reason: 'conversion' },
  { path: '/en/thank-you', reason: 'conversion' },
  { path: '/it/grazie', reason: 'conversion' },
  { path: '/pv-kosten', reason: 'non-SEO compatibility page' },
  { path: '/fr/pv-kosten', reason: 'non-SEO compatibility page' },
  { path: '/en/pv-kosten', reason: 'non-SEO compatibility page' },
  { path: '/it/pv-kosten', reason: 'non-SEO compatibility page' },
];

function readIndexableRoutes() {
  const candidates = [
    path.join(baselineRoot, 'seo-metadata-report.md'),
    path.join(root, 'seo-metadata-report.md'),
  ];
  const file = candidates.find(candidate => fs.existsSync(candidate));
  if (!file) throw new Error('seo-metadata-report.md is required to establish the indexable inventory');
  const markdown = fs.readFileSync(file, 'utf8');
  const routes = [...markdown.matchAll(/^\| `(\/[^`]*)` \|/gm)].map(match => match[1]);
  if (routes.length !== 330 || new Set(routes).size !== 330) {
    throw new Error(`Expected 330 unique indexable routes in ${file}; found ${routes.length} rows and ${new Set(routes).size} unique paths`);
  }
  return routes;
}

const indexableRoutes = readIndexableRoutes();
const indexableSet = new Set(indexableRoutes);
const inventory = [
  ...indexableRoutes.map(route => ({ path: route, indexable: true, reason: 'SEO inventory' })),
  ...nonIndexableRoutes.map(route => ({ ...route, indexable: false })),
];
if (inventory.length !== 342 || new Set(inventory.map(route => route.path)).size !== 342) {
  throw new Error('The route inventory must be exactly 330 indexable + 12 non-indexable unique routes');
}
if (nonIndexableRoutes.some(route => indexableSet.has(route.path))) {
  throw new Error('A non-indexable route also appears in the indexable inventory');
}

function decodeHtml(value) {
  const named = {
    amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '"',
    laquo: '«', raquo: '»', ndash: '–', mdash: '—', hellip: '…',
  };
  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    if (code[0] === '#') {
      const hex = code[1].toLowerCase() === 'x';
      const point = Number.parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(point) ? String.fromCodePoint(point) : entity;
    }
    return named[code.toLowerCase()] ?? entity;
  });
}

function semanticText(html) {
  return decodeHtml(
    html
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<(script|style|noscript|template|svg)\b[\s\S]*?<\/\1\s*>/gi, ' ')
      .replace(/<\/?(?:address|article|aside|blockquote|br|button|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|hr|li|main|nav|ol|p|section|table|td|th|tr|ul)\b[^>]*>/gi, ' | ')
      .replace(/<[^>]+>/g, ' '),
  ).replace(/\s+/g, ' ').trim();
}

function metadataText(html) {
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const values = [];
  for (const match of head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)) values.push(semanticText(match[1]));
  for (const match of head.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    const key = tag.match(/\b(?:name|property)\s*=\s*(["'])(.*?)\1/i)?.[2]?.toLowerCase();
    const content = tag.match(/\bcontent\s*=\s*(["'])([\s\S]*?)\1/i)?.[2];
    if (content && key && /^(?:description|og:|twitter:)/.test(key)) values.push(decodeHtml(content));
  }
  return [...new Set(values.map(value => value.replace(/\s+/g, ' ').trim()).filter(Boolean))].join(' ');
}

function walkJson(value, visit) {
  if (!value || typeof value !== 'object') return;
  visit(value);
  if (Array.isArray(value)) value.forEach(child => walkJson(child, visit));
  else Object.values(value).forEach(child => walkJson(child, visit));
}

function faqText(html) {
  const values = [];
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (!/type\s*=\s*(["'])application\/ld\+json\1/i.test(match[1])) continue;
    try {
      const json = JSON.parse(decodeHtml(match[2]).trim());
      walkJson(json, object => {
        const type = object['@type'];
        if (type === 'Question') {
          const answer = object.acceptedAnswer;
          const question = typeof object.name === 'string' ? object.name : '';
          const answerText = answer && typeof answer.text === 'string' ? answer.text : '';
          if (question || answerText) values.push(`${question} ${answerText}`.trim());
        }
      });
    } catch {
      // Invalid JSON-LD is recorded by the route's FAQ parse marker below.
      values.push('[INVALID FAQ JSON-LD]');
    }
  }
  return [...new Set(values.map(value => semanticText(String(value))).filter(Boolean))].join(' | ');
}

function htmlFile(buildRoot, route) {
  const relative = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  return path.join(buildRoot, 'server', 'app', relative);
}

function readRoute(buildRoot, route) {
  const file = htmlFile(buildRoot, route);
  if (!fs.existsSync(file)) return { available: false, file };
  const html = fs.readFileSync(file, 'utf8');
  return {
    available: true,
    file,
    body: semanticText(html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? ''),
    metadata: metadataText(html),
    faq: faqText(html),
    origin: 'generated',
  };
}

function readLiveRoute(route) {
  if (!devDomain) return { available: false, origin: 'live-unavailable' };
  const url = `https://${devDomain}${route}`;
  try {
    const html = execFileSync('curl', ['-fLsS', '--max-time', '30', url], {
      encoding: 'utf8',
      maxBuffer: 8 * 1024 * 1024,
    });
    return {
      available: true,
      file: url,
      body: semanticText(html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? ''),
      metadata: metadataText(html),
      faq: faqText(html),
      origin: 'live',
    };
  } catch {
    return { available: false, file: url, origin: 'live-failed' };
  }
}

const hundred = String.raw`100\s*(?:%|percent|prozent|pour\s+cent|per\s+cento)`;
const hundredFree = new RegExp(
  String.raw`\b${hundred}(?:\s+(?:zu|à|al))?\s*(?:kostenlos(?:e[rsnm]?)?|gratuit(?:e?s?|ement|amente|[oai])?|free|gratis)\b`,
  'giu',
);
const freeWord = /\b(?:kostenlos(?:e[rsnm]?)?|gratis|gratuit(?:e?s?|ement|amente|[oai])?|free)\b/giu;
const taxWord = /\b(?:steuer\w*|absetz\w*|abzieh\w*|tax(?:es|ation|able)?|fiscal(?:e|i|ly)?|dédu\w*|imp[oô]t\w*|detra\w*|dedu\w*|dedott\w*|fiscalmente)\b/iu;
const serviceContext = /\b(?:service|servizio|plattform|platform|nutzung|utilisation|using|utilizzo|vergleich|vergleichen|vergleichsofferte|compare\w*|confront\w*|offert\w*|offr\w*|angebot\w*|quote\w*|devis|preventiv\w*|installateur\w*|installer\w*|installator\w*|vermittlung|interm[ée]diation|met\s+en\s+contact|in\s+contatto)\b/iu;
const existingBuilding = /\b(?:bestehend\w*\s+gebäude\w*|existing\s+buildings?|bâtiments?\s+existants?|edifici\s+esistenti)\b/iu;
const noNewBuild = /\b(?:nicht\s+(?:bei|für)\s+neubauten|gilt\s+nicht\s+für\s+neubauten|not\s+(?:for|applicable\s+to)\s+new\s+builds?|does\s+not\s+apply\s+to\s+new\s+builds?|(?:pas\s+(?:pour\s+)?les|non\s+les)\s+constructions?\s+neuves?|ne\s+s['’]applique\s+pas\s+aux\s+constructions?\s+neuves?|non\s+(?:vale|si\s+applica)\s+per\s+le\s+nuove\s+costruzioni|non\s+per\s+(?:le\s+)?nuove\s+costruzioni)\b/iu;
const taxableIncome = /\b(?:steuerbar\w*\s+einkommen|taxable\s+income|revenu\s+imposable|reddito\s+imponibile)\b/iu;

function snippets(text) {
  return text
    .split(/(?<=[.!?])\s+|\s*[|•]\s*|\n+/u)
    .map(value => value.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function blocks(text) {
  return text.split(/\s*\|\s*/u).map(value => value.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

function normalized(value) {
  return value.normalize('NFKC').toLocaleLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/[^\p{L}\p{N}%]+/gu, ' ')
    .replace(/\s+/g, ' ').trim();
}

function claimsForSurface(text, surface) {
  const claims = [];
  const parts = snippets(text);
  for (let index = 0; index < parts.length; index += 1) {
    const snippet = parts[index];
    hundredFree.lastIndex = 0;
    freeWord.lastIndex = 0;
    const hasHundredFree = hundredFree.test(snippet);
    const hasFree = freeWord.test(snippet);
    const hasHundred = new RegExp(String.raw`\b${hundred}`, 'iu').test(snippet);
    const isStandalone = new RegExp(
      String.raw`^[✓✔]?\s*(?:${hundred}\s*)?(?:kostenlos|gratis|gratuit(?:e?s?|ement|amente|[oai])?|free)(?:\s*(?:&|und|et|and|e)\s*(?:unverbindlich|sans\s+engagement|no\s+obligation|senza\s+impegno))?$`,
      'iu',
    ).test(snippet.trim());
    const isServiceClaim = serviceContext.test(snippet) || isStandalone;
    if (hasHundredFree && isServiceClaim) claims.push({ category: '100-free', surface, snippet, key: normalized(snippet) });
    else if (hasFree && isServiceClaim) claims.push({ category: 'plain-free', surface, snippet, key: normalized(snippet) });
    // Some FAQs put "free?" in the question and "Yes, 100%." in the answer.
    // Treat that adjacent question/answer pair as one semantic claim while
    // retaining one claim key for the pair.
    if (index > 0 && hasHundred && !hasFree) {
      freeWord.lastIndex = 0;
      if (freeWord.test(parts[index - 1]) && serviceContext.test(parts[index - 1])) {
        const pair = `${parts[index - 1]} ${snippet}`;
        claims.push({ category: '100-free', surface, snippet: pair, key: normalized(pair) });
      }
    }
  }
  for (const snippet of blocks(text)) {
    const hasHundred = new RegExp(String.raw`\b${hundred}`, 'iu').test(snippet);
    if (!hasHundred || !taxWord.test(snippet)) continue;
    const fullyQualified = (
      existingBuilding.test(snippet)
      && noNewBuild.test(snippet)
      && taxableIncome.test(snippet)
    );
    claims.push({
      category: fullyQualified ? 'qualified-tax' : 'unqualified-tax',
      surface,
      snippet,
      key: normalized(snippet),
    });
  }
  return claims;
}

const classifierRegressions = [
  {
    name: 'free electricity is not a free service',
    ok: !claimsForSurface('After payback, the panels produce free electricity.', 'body')
      .some(claim => claim.category.endsWith('free')),
  },
  {
    name: 'free product is not a free service',
    ok: !claimsForSurface('Buy the inverter and receive a free battery.', 'body')
      .some(claim => claim.category.endsWith('free')),
  },
  {
    name: 'tax claim missing no-new-build qualification is rejected',
    ok: claimsForSurface('For existing buildings, 100% of eligible costs can be deducted from taxable income.', 'body')
      .some(claim => claim.category === 'unqualified-tax'),
  },
  {
    name: 'tax claim missing taxable-income qualification is rejected',
    ok: claimsForSurface('For existing buildings, 100% of costs are tax deductible; not for new builds.', 'body')
      .some(claim => claim.category === 'unqualified-tax'),
  },
  {
    name: 'fully qualified tax claim is accepted',
    ok: claimsForSurface('For existing buildings, 100% of eligible costs can be deducted from taxable income; not for new builds.', 'body')
      .some(claim => claim.category === 'qualified-tax'),
  },
];
classifierRegressions.forEach(regression => {
  if (!regression.ok) throw new Error(`Restored-claims classifier regression failed: ${regression.name}`);
});

function claimsForRoute(routeData) {
  if (!routeData.available) return [];
  return ['body', 'metadata', 'faq'].flatMap(surface => claimsForSurface(routeData[surface], surface));
}

function ledgerRecords() {
  const files = ['app', 'shared', 'blog']
    .map(name => `/tmp/restore-${name}-ledger.json`)
    .filter(file => fs.existsSync(file));
  const records = [];
  const localePrefix = { de: '', fr: '/fr', en: '/en', it: '/it' };
  const appRoute = file => {
    if (!file.startsWith('app/') || !file.endsWith('/page.tsx')) return [];
    const relative = file.slice(4, -'/page.tsx'.length)
      .replace(/^\(de\)(?:\/|$)/, '')
      .replace(/^\(form\)(?:\/|$)/, '');
    if (/[\[\]]/.test(relative)) return [];
    return [relative ? `/${relative}` : '/'];
  };
  const jsonArticleRoutes = (file, location) => {
    if (!file.startsWith('content/autoblog/') || !fs.existsSync(path.join(root, file))) return [];
    const content = JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
    const locationLocale = String(location).match(/^articles\.(de|fr|en|it)\./)?.[1];
    return Object.entries(content.articles ?? {}).flatMap(([locale, article]) => (
      (!locationLocale || locale === locationLocale)
      &&
      article && typeof article.slug === 'string'
        ? [`${localePrefix[locale] ?? `/${locale}`}/blog/${article.slug}`]
        : []
    ));
  };
  const cityRoutes = location => {
    const city = String(location).match(/cityContents(?:FR|IT)?\.([^.]+)/)?.[1];
    if (!city) return [];
    const known = {
      zurich: ['/solaranlage-zurich'], bern: ['/solaranlage-bern'],
      basel: ['/solaranlage-basel'], luzern: ['/solaranlage-luzern'],
      stgallen: ['/solaranlage-st-gallen'], schwyz: ['/solaranlage-schwyz'],
      uri: ['/solaranlage-uri'], schaffhausen: ['/solaranlage-schaffhausen'],
      appenzell: ['/solaranlage-appenzell'], graubuenden: ['/solaranlage-graubunden'],
      glarus: ['/solaranlage-glarus'], zug: ['/solaranlage-zug'],
      'obwalden-nidwalden': ['/solaranlage-unterwalden'],
      solothurn: ['/solaranlage-solothurn'], aargau: ['/solaranlage-aargau'],
      geneve: ['/fr/solaire-geneve'], vaud: ['/fr/solaire-vaud'],
      valais: ['/fr/solaire-valais'], ticino: ['/it/fotovoltaico-ticino'],
      freiburg: ['/solaranlage-freiburg'], wallis: ['/solaranlage-wallis'],
      fribourg: ['/fr/solaire-fribourg'],
    };
    return known[city] ?? [];
  };
  const sharedRoutes = (file, location) => {
    if (file === 'components/CtaAnfrage.tsx') {
      return [
        '/', '/fr', '/en', '/it',
        '/solarrechner', '/fr/calculateur-solaire', '/en/solar-calculator', '/it/calcolatore-solare',
        '/solaranlage-kosten', '/fr/cout-installation-solaire', '/en/solar-panel-costs', '/it/costi-impianto-solare',
      ];
    }
    if (file === 'components/PlzWidget.tsx') return ['/blog', '/fr/blog', '/en/blog', '/it/blog'];
    if (file === 'lib/faqData.ts') return ['/', '/en', '/it', '/faq', '/fr/faq', '/en/faq', '/it/faq'];
    const i18n = file.match(/^lib\/i18n\/(de|fr|en|it)\.ts$/)?.[1];
    if (i18n) return [localePrefix[i18n] || '/'];
    return [];
  };
  const blogArticleRoutes = location => {
    const match = String(location).match(/^([^.]+)\.(de|fr|en|it)\./);
    if (!match) return [];
    const routeSlugs = {
      'foerderungen-photovoltaik-2026': {
        de: 'foerderungen-photovoltaik-2026', fr: 'subventions-photovoltaiques-2026',
        en: 'solar-subsidies-switzerland-2026', it: 'incentivi-fotovoltaici-svizzera-2026',
      },
      'solaranlage-steuerabzug-schweiz-2026': {
        de: 'solaranlage-steuerabzug-schweiz-2026', fr: 'deduction-fiscale-panneau-solaire-suisse-2026',
        en: 'solar-panel-tax-deduction-switzerland-2026', it: 'detrazione-fiscale-impianto-solare-svizzera-2026',
      },
      // The restoration ledger uses this editorial alias for the manual route
      // family keyed as solaranlage-waermepumpe-kombinieren-schweiz.
      'photovoltaik-mit-waermepumpe': {
        de: 'solaranlage-waermepumpe-kombinieren-schweiz', fr: 'panneaux-solaires-pompe-chaleur-suisse',
        en: 'solar-panels-heat-pump-combination-switzerland', it: 'impianto-solare-pompa-calore-svizzera',
      },
    };
    const slug = routeSlugs[match[1]]?.[match[2]] ?? match[1];
    const inferred = `${localePrefix[match[2]]}/blog/${slug}`;
    return inventory.some(route => route.path === inferred) ? [inferred] : [];
  };
  const traverse = (value, source) => {
    if (!value || typeof value !== 'object') return;
    if (!Array.isArray(value)) {
      const inferredRoutes = [
        ...appRoute(String(value.file ?? '')),
        ...jsonArticleRoutes(String(value.file ?? ''), value.location),
        ...(value.file === 'lib/city-content.ts' ? cityRoutes(value.location) : []),
        ...(value.file === 'lib/blogArticles.ts' ? blogArticleRoutes(value.location) : []),
      ];
      const routes = [
        ...(typeof value.route === 'string' ? [value.route] : []),
        ...(typeof value.path === 'string' && value.path.startsWith('/') ? [value.path] : []),
        ...(Array.isArray(value.routes) ? value.routes : []),
        ...(Array.isArray(value.renderedRoutes) ? value.renderedRoutes : []),
        ...sharedRoutes(String(value.file ?? ''), value.location),
        ...inferredRoutes,
      ].filter(route => typeof route === 'string' && route.startsWith('/'));
      const categoryText = String(value.category ?? value.claimType ?? value.kind ?? value.claim ?? '');
      const restoredText = String(value.restoredText ?? value.after ?? value.newText ?? '');
      const category = /tax|steuer|fiscal|detra|déduct/i.test(categoryText)
        ? 'qualified-tax'
        : /100\s*(?:%|percent|prozent|pour\s+cent|per\s+cento)/i.test(restoredText) ? '100-free'
          : /free|kostenlos|gratuit|gratuito/i.test(categoryText) ? 'plain-free' : '';
      const renderedMapping = (
        (
          String(value.file ?? '').startsWith('app/')
          && !/overridden|not rendered/i.test(String(value.location ?? ''))
        )
        || String(value.file ?? '').startsWith('content/autoblog/')
        || value.file === 'lib/blogArticles.ts'
        || (
          /^lib\/city-content(?:-fr|-it)?\.ts$/.test(String(value.file ?? ''))
          && /\.(?:heroDescription|faqs)\b/.test(String(value.location ?? ''))
        )
      );
      if (routes.length || category) records.push({
        source, routes: [...new Set(routes)], category, renderedMapping, raw: value,
      });
    }
    Object.values(value).forEach(child => traverse(child, source));
  };
  for (const file of files) {
    try {
      traverse(JSON.parse(fs.readFileSync(file, 'utf8')), file);
    } catch (error) {
      throw new Error(`Cannot parse restoration ledger ${file}: ${error.message}`);
    }
  }
  return { files, records };
}

function historicalEvidence() {
  let diff = '';
  try {
    diff = execFileSync('git', [
      'diff', '--unified=0', preCommit, originalCommit, '--', 'app', 'components', 'lib', 'content',
    ], { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  } catch (error) {
    throw new Error(`Unable to read historical original-slot diff: ${error.message}`);
  }
  let file = '';
  let line = 0;
  const evidence = [];
  for (const row of diff.split('\n')) {
    if (row.startsWith('+++ b/')) file = row.slice(6);
    const hunk = row.match(/^@@ -\d+(?:,\d+)? \+(\d+)/);
    if (hunk) line = Number(hunk[1]);
    else if (row.startsWith('+') && !row.startsWith('+++')) {
      const text = row.slice(1).trim();
      const detected = claimsForSurface(text, 'source');
      for (const claim of detected) evidence.push({ file, line, category: claim.category, text });
      line += 1;
    } else if (!row.startsWith('-')) line += 1;
  }
  return evidence;
}

function buildId(buildRoot) {
  const file = path.join(buildRoot, 'BUILD_ID');
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8').trim() : 'missing';
}

function countFiles(directory, suffix) {
  if (!fs.existsSync(directory)) return 0;
  return fs.readdirSync(directory, { withFileTypes: true }).reduce((total, entry) => {
    const file = path.join(directory, entry.name);
    return total + (entry.isDirectory() ? countFiles(file, suffix) : entry.name.endsWith(suffix) ? 1 : 0);
  }, 0);
}

function markdownCell(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function evidenceLabel(record) {
  const raw = record.raw;
  if (raw.file && raw.location) return markdownCell(`${raw.file}:${raw.location}`);
  return markdownCell(raw.file ?? raw.source ?? raw.slot ?? raw.location
    ?? `${path.basename(record.source)} (explicit route mapping)`);
}

function evidenceMatchesClaim(record, claim) {
  const evidenceText = String(
    record.raw.restoredText ?? record.raw.after ?? record.raw.newText ?? record.raw.originalText ?? '',
  );
  const left = normalized(evidenceText);
  const right = normalized(claim.snippet);
  if (!left || !right) return false;
  if (left.length >= 5 && right.includes(left)) return true;
  if (right.length >= 5 && left.includes(right)) return true;
  const leftTokens = new Set(left.split(' ').filter(token => token.length > 2 || token === '100%'));
  const rightTokens = new Set(right.split(' ').filter(token => token.length > 2 || token === '100%'));
  const shared = [...leftTokens].filter(token => rightTokens.has(token)).length;
  return shared >= 2 && shared / Math.min(leftTokens.size, rightTokens.size) >= 0.6;
}

function routeLocale(route) {
  if (route === '/fr' || route.startsWith('/fr/')) return 'fr';
  if (route === '/en' || route.startsWith('/en/')) return 'en';
  if (route === '/it' || route.startsWith('/it/')) return 'it';
  return 'de';
}

function reportTemplate() {
  const rows = inventory.map(route =>
    `| \`${route.path}\` | ${route.indexable ? 'indexable' : `non-indexable (${route.reason})`} | pending final build | pending | pending | pending |`,
  ).join('\n');
  return `# Restored claims route audit

> **Status: awaiting final production build and restoration ledgers.**

## Inventory controls

- Authoritative total: **342 routes**.
- Indexable inventory: **330 unique routes**, read from the captured \`seo-metadata-report.md\`.
- Explicit non-indexable inventory: **12 unique pages** (four forms, four conversion pages, four compatibility pages).
- Build counters, prerender-manifest entries, HTML file counts, API endpoints, catch-alls, and framework error pages are not substituted for this inventory.

## Comparison method

The final audit compares the preserved pre-restoration build at \`${baselineRoot}\` (commit \`${preCommit}\`) with the requested final \`.next\` build. Body text is extracted only from rendered HTML after removing scripts, styles, templates, SVG, and tags. Thus Next flight/RSC payloads cannot duplicate claims. Metadata (title, description, Open Graph, and Twitter values) is tracked separately. FAQ \`Question\` and \`acceptedAnswer.text\` values are extracted separately from JSON-LD; other scripts are ignored.

A route is counted at most once in each category. A restoration requires a final-vs-pre semantic delta and original-slot evidence from commit \`${originalCommit}\` and/or a restoration ledger. “100% tax deduction” must occur in tax context and in the same semantic snippet as a qualifying expression (for example “up to”, “depending on the canton”, or “subject to conditions”); unrelated percentages are excluded. Shared-component fanout is accepted only on routes where final rendered HTML contains the claim. Routes without build HTML remain unverified unless a ledger explicitly maps the source/render dependency.

## Route-by-route matrix

| Route | Inventory class | Render evidence | 100% free service | Plain free service | Qualified 100% tax deduction |
| --- | --- | --- | --- | --- | --- |
${rows}
`;
}

function finalReport() {
  if (!fs.existsSync(path.join(baselineRoot, '.next', 'server', 'app'))) {
    throw new Error(`Baseline app output is missing: ${baselineRoot}`);
  }
  if (!fs.existsSync(path.join(finalRoot, 'server', 'app'))) {
    throw new Error(`Final app output is missing: ${finalRoot}`);
  }
  const baselineBuild = path.join(baselineRoot, '.next');
  const baselineId = buildId(baselineBuild);
  const finalId = buildId(finalRoot);
  if (!allowSameBuild && baselineId === finalId) {
    throw new Error(`Final BUILD_ID still equals baseline (${baselineId}); run only after the main agent requests and completes the final build`);
  }

  const ledgers = ledgerRecords();
  const history = historicalEvidence();
  const results = [];
  const counts = { '100-free': 0, 'plain-free': 0, 'qualified-tax': 0 };
  const countsByLocale = Object.fromEntries(
    ['de', 'fr', 'en', 'it'].map(locale => [
      locale,
      { '100-free': 0, 'plain-free': 0, 'qualified-tax': 0 },
    ]),
  );
  const unqualified = [];

  for (const route of inventory) {
    const before = readRoute(baselineBuild, route.path);
    const generatedAfter = readRoute(finalRoot, route.path);
    const after = generatedAfter.available ? generatedAfter : readLiveRoute(route.path);
    const beforeClaims = claimsForRoute(before);
    const afterClaims = claimsForRoute(after);
    const beforeKeys = new Set(beforeClaims.map(claim => `${claim.category}:${claim.surface}:${claim.key}`));
    const additions = afterClaims.filter(claim => !beforeKeys.has(`${claim.category}:${claim.surface}:${claim.key}`));
    const mapped = ledgers.records.filter(record => record.routes.includes(route.path));
    const categories = {};
    for (const category of ['100-free', 'plain-free', 'qualified-tax']) {
      const deltas = additions.filter(claim => claim.category === category);
      const mappedEvidence = mapped.filter(record => record.category === category);
      const matchingEvidence = ledgers.records.filter(record =>
        record.category === category
        && (!record.routes.length || record.routes.includes(route.path))
        && deltas.some(claim => evidenceMatchesClaim(record, claim)),
      );
      const verifiedDeltas = deltas.filter(claim => matchingEvidence.some(record =>
        evidenceMatchesClaim(record, claim),
      ));
      const renderedDelta = after.available && verifiedDeltas.length > 0;
      const sourceMappedDelta = (
        !after.available
        && mappedEvidence.some(record => record.renderedMapping)
      );
      const restored = renderedDelta || sourceMappedDelta;
      categories[category] = {
        restored,
        deltas: renderedDelta ? verifiedDeltas : deltas,
        evidence: renderedDelta ? matchingEvidence : mappedEvidence.filter(record => record.renderedMapping),
        method: renderedDelta
          ? after.origin === 'live' && !before.available
            ? 'live-rendered claim + source/ledger baseline'
            : 'rendered HTML delta'
          : sourceMappedDelta ? 'explicit ledger/source mapping (HTML unavailable)' : '',
      };
      if (restored) {
        counts[category] += 1;
        countsByLocale[routeLocale(route.path)][category] += 1;
      }
    }
    additions.filter(claim => claim.category === 'unqualified-tax')
      .forEach(claim => unqualified.push({ route: route.path, ...claim }));
    results.push({ route, before, generatedAfter, after, categories });
  }

  const missingBefore = results.filter(result => !result.before.available).map(result => result.route.path);
  const missingGeneratedAfter = results.filter(result => !result.generatedAfter.available).map(result => result.route.path);
  const uncheckedAfter = results.filter(result => !result.after.available).map(result => result.route.path);
  const checkedAfter = results.filter(result => result.after.available).length;
  const generatedInventoryAfter = results.filter(result => result.generatedAfter.available).length;
  const liveAfter = results.filter(result => result.after.origin === 'live').length;
  const baselineHtmlFiles = countFiles(path.join(baselineBuild, 'server', 'app'), '.html');
  const finalHtmlFiles = countFiles(path.join(finalRoot, 'server', 'app'), '.html');
  const combinedFreeRoutes = results.filter(result =>
    result.categories['100-free'].restored || result.categories['plain-free'].restored,
  );
  const combinedFreeByLocale = Object.fromEntries(
    ['de', 'fr', 'en', 'it'].map(locale => [
      locale,
      combinedFreeRoutes.filter(result => routeLocale(result.route.path) === locale).length,
    ]),
  );
  const supportOnlyTaxSlots = ledgers.records.filter(record =>
    record.category === 'qualified-tax' && !record.renderedMapping,
  );
  const overriddenMetadataSlots = ledgers.records.filter(record =>
    /metadata/i.test(String(record.raw.location ?? ''))
    && /overridden|not rendered/i.test(String(record.raw.location ?? '')),
  );
  const rowText = results.map(result => {
    const render = result.after.available
      ? `${result.after.origin === 'live' ? 'live HTML; source/ledger historical baseline' : 'generated HTML'} (${['body', 'metadata', 'faq'].filter(surface => claimsForSurface(result.after[surface], surface).length).join(', ') || 'no target claim'})`
      : result.categories['100-free'].method || result.categories['plain-free'].method || result.categories['qualified-tax'].method || 'no HTML; unverified';
    const categoryCell = category => {
      const item = result.categories[category];
      if (!item.restored) return '—';
      const surfaces = [...new Set(item.deltas.map(delta => delta.surface))];
      const evidence = item.evidence.map(evidenceLabel);
      return `restored (${item.method}${surfaces.length ? `; ${surfaces.join(', ')}` : ''}${evidence.length ? `; ${evidence.join('; ')}` : ''})`;
    };
    return `| \`${result.route.path}\` | ${result.route.indexable ? 'indexable' : `non-indexable (${result.route.reason})`} | ${markdownCell(render)} | ${categoryCell('100-free')} | ${categoryCell('plain-free')} | ${categoryCell('qualified-tax')} |`;
  }).join('\n');

  const relevantHistory = history.filter(item => ['100-free', 'plain-free', 'qualified-tax', 'unqualified-tax'].includes(item.category));
  const historyRows = relevantHistory.map(item =>
    `| \`${item.file}:${item.line}\` | ${item.category} | ${markdownCell(item.text.slice(0, 240))} |`,
  ).join('\n') || '| — | — | No matching historical source lines parsed. |';
  const ledgerRows = ledgers.records.map(record =>
    `| \`${path.basename(record.source)}\` | ${record.category || 'unspecified'} | ${record.routes.map(route => `\`${route}\``).join(', ') || 'none'} | ${record.renderedMapping ? 'rendered source slot' : 'data/support only'}; ${evidenceLabel(record)} |`,
  ).join('\n') || '| — | — | — | No ledgers present. |';
  const languageRows = ['de', 'fr', 'en', 'it'].map(locale =>
    `| ${locale.toUpperCase()} | ${inventory.filter(route => routeLocale(route.path) === locale).length} | ${countsByLocale[locale]['100-free']} | ${countsByLocale[locale]['plain-free']} | ${combinedFreeByLocale[locale]} | ${countsByLocale[locale]['qualified-tax']} |`,
  ).join('\n');

  return `# Restored claims route audit

## Result

- Authoritative route inventory: **342** (**330 indexable + 12 non-indexable**).
- Routes checked: **${checkedAfter}/342** (${generatedInventoryAfter} generated HTML + ${liveAfter} live-rendered dynamic HTML).
- Routes where **100% free service** was restored: **${counts['100-free']}**.
- Routes where a **plain free service claim** was restored: **${counts['plain-free']}**.
- **Unique routes with either restored free-service category:** **${combinedFreeRoutes.length}**.
- Routes where a **qualified 100% tax deduction** was restored: **${counts['qualified-tax']}**.
- Unqualified 100% tax snippets introduced: **${unqualified.length}**.
- Source/support-only historical tax slots, not counted as page claims: **${supportOnlyTaxSlots.length}**.
- Raw metadata restoration slots overridden by \`pageMetadata\`, tracked but not counted without visible output: **${overriddenMetadataSlots.length}**.
- **Coverage status:** ${uncheckedAfter.length ? `${uncheckedAfter.length} routes could not be rendered and remain unverified: ${uncheckedAfter.map(route => `\`${route}\``).join(', ')}` : 'all 342 routes were checked.'}

Counts are route counts, not occurrence counts. A route can appear once in each applicable category.

### Counts by language

| Language | Inventory routes | 100% free service | Plain free service | Unique free-service routes | Qualified 100% tax deduction |
| --- | ---: | ---: | ---: | ---: | ---: |
${languageRows}
| **Total** | **342** | **${counts['100-free']}** | **${counts['plain-free']}** | **${combinedFreeRoutes.length}** | **${counts['qualified-tax']}** |

## Controls and method

- Pre-restoration rendered baseline: commit \`${preCommit}\`, BUILD_ID \`${baselineId}\`.
- Final rendered build: BUILD_ID \`${finalId}\`.
- Historical original-slot source: commit \`${originalCommit}\`.
- Ledgers read: ${ledgers.files.length ? ledgers.files.map(file => `\`${file}\``).join(', ') : 'none'}.
- Indexable paths come only from the captured SEO report. The 12 non-indexable pages are explicitly enumerated by this script. Framework errors, API endpoints, catch-all patterns, manifest totals, the build counter, and raw HTML counts do not change the denominator.
- Body semantic text excludes all script, style, template, SVG, and tag content, preventing React flight duplication. Metadata and structured FAQ JSON-LD are compared as separate surfaces.
- Free matching requires comparison/referral/service context (or an exact trust badge); free electricity and free products are excluded.
- Tax matching requires \`100%\`, tax/deduction context, and all three safeguards in the same semantic block: existing building, explicit exclusion of new builds, and taxable income. Partial qualifications, other tax percentages, and unrelated uses of 100% are not counted.
- Built-in negative regression fixtures reject free electricity, free products, and tax claims missing either the no-new-build or taxable-income clause.
- Shared-component fanout is counted only when the claim is present as a final rendered semantic delta. If HTML is unavailable, a route is counted only with an explicit ledger route mapping.
- The five force-dynamic FR city pages have no baseline or final generated HTML. Their current body/metadata/FAQ surfaces are fetched from \`REPLIT_DEV_DOMAIN\`; restoration status additionally requires an exact historical source/ledger slot. Raw metadata text documented as overridden by \`pageMetadata\` is not counted without a visible metadata delta.

### Artifact availability

- Missing pre-restoration inventory HTML (${missingBefore.length}): ${missingBefore.map(route => `\`${route}\``).join(', ') || 'none'}.
- Missing final generated inventory HTML (${missingGeneratedAfter.length}): ${missingGeneratedAfter.map(route => `\`${route}\``).join(', ') || 'none'}.
- Live-rendered dynamic replacements (${liveAfter}): ${results.filter(result => result.after.origin === 'live').map(result => `\`${result.route.path}\``).join(', ') || 'none'}.
- Still unverified (${uncheckedAfter.length}): ${uncheckedAfter.map(route => `\`${route}\``).join(', ') || 'none'}.
- Baseline app output contains ${baselineHtmlFiles} HTML files, of which ${342 - missingBefore.length} correspond to inventory routes.
- Final app output contains ${finalHtmlFiles} HTML files, of which ${generatedInventoryAfter} correspond to inventory routes. The other ${finalHtmlFiles - generatedInventoryAfter} are framework support/error outputs, not additional routes in the 342-route denominator.

## Route-by-route matrix

| Route | Inventory class | Render evidence | 100% free service | Plain free service | Qualified 100% tax deduction |
| --- | --- | --- | --- | --- | --- |
${rowText}

## Historical original-slot evidence

Parsed from lines added when comparing pre-restoration \`${preCommit}\` to original \`${originalCommit}\`. Ledger evidence below supplies route/dependency mapping; this source table alone never creates route fanout.

| Original source slot | Detected category | Original line |
| --- | --- | --- |
${historyRows}

## Restoration ledger mapping

| Ledger | Category | Explicit routes | Source/slot |
| --- | --- | --- | --- |
${ledgerRows}

## Unqualified tax guard

${unqualified.length
    ? unqualified.map(item => `- \`${item.route}\` (${item.surface}): ${markdownCell(item.snippet)}`).join('\n')
    : 'No newly introduced unqualified 100% tax-deduction snippets were detected.'}
`;
}

try {
  const output = templateOnly ? reportTemplate() : finalReport();
  fs.writeFileSync(reportFile, output);
  console.log(`${templateOnly ? 'Wrote audit template' : 'Wrote final restored-claims audit'} for 342 routes to ${path.relative(root, reportFile)}`);
} catch (error) {
  console.error(error.stack || error);
  process.exitCode = 1;
}