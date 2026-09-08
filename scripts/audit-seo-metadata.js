#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Resolves the site's indexable route inventory against the same metadata
 * helpers and content records used by Next, writes seo-metadata-report.md,
 * and exits non-zero when a metadata policy regression is found.
 */
const fs = require('fs');
const path = require('path');
const Module = require('module');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function resolve(request, parent, isMain, options) {
  if (request.startsWith('@/')) return originalResolve.call(this, path.join(root, request.slice(2)), parent, isMain, options);
  return originalResolve.call(this, request, parent, isMain, options);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => {
    const source = fs.readFileSync(filename, 'utf8');
    module._compile(ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
      fileName: filename,
    }).outputText, filename);
  };
}

const { staticSeoRouteGroups } = require(path.join(root, 'lib/seoRoutes.ts'));

const locales = ['de', 'fr', 'en', 'it'];
const prefix = { de: '', fr: '/fr', en: '/en', it: '/it' };
const routeLocale = (route) => route.startsWith('/fr/') || route === '/fr' ? 'fr' : route.startsWith('/en/') || route === '/en' ? 'en' : route.startsWith('/it/') || route === '/it' ? 'it' : 'de';
const titleText = title => typeof title === 'string' ? title : title && (title.absolute || title.default) || '';
const sourcePage = route => path.join(root, 'app', routeLocale(route) === 'de' ? '(de)' : routeLocale(route), ...(route.replace(/^\/(?:de|fr|en|it)?\/?/, '').split('/').filter(Boolean)), 'page.tsx');

async function staticMetadata(route) {
  const file = sourcePage(route);
  if (!fs.existsSync(file)) throw new Error(`No page source for indexable route ${route}: ${file}`);
  const page = require(file);
  if (page.metadata) return page.metadata;
  if (page.generateMetadata) return page.generateMetadata({ params: Promise.resolve({}) });
  throw new Error(`No metadata export for indexable route ${route}`);
}

async function resolvedRoutes() {
  const staticRoutes = [...new Set(staticSeoRouteGroups.flatMap(group => Object.values(group.paths).filter(Boolean)))];
  const routes = await Promise.all(staticRoutes.map(async route => {
    const metadata = await staticMetadata(route);
    return { path: route, locale: routeLocale(route), title: titleText(metadata.title), description: metadata.description || '' };
  }));
  for (const locale of locales) {
    const file = path.join(root, 'app', locale === 'de' ? '(de)' : locale, 'blog', '[slug]', 'page.tsx');
    const page = require(file);
    const params = await page.generateStaticParams();
    for (const { slug } of params) {
      const metadata = await page.generateMetadata({ params: Promise.resolve({ slug }) });
      const articlePath = `${prefix[locale]}/blog/${slug}`;
      routes.push({ path: articlePath, locale, title: titleText(metadata.title), description: metadata.description || '' });
    }
  }
  return routes.sort((a, b) => locales.indexOf(a.locale) - locales.indexOf(b.locale) || a.path.localeCompare(b.path));
}

function audit(routes) {
  const failures = [];
  const oldBrand = /\b(?:PVPro\.ch|PVPro|PV Pro|PvPRO)\b/;
  const suffix = ' | PvPro.ch';
  const titles = new Map();
  for (const route of routes) {
    if (oldBrand.test(route.title) || oldBrand.test(route.description)) failures.push(`${route.path}: contains an old brand variant`);
    if (!route.title.endsWith(suffix) || route.title.indexOf(suffix) !== route.title.length - suffix.length) failures.push(`${route.path}: title must end with the sole suffix "${suffix}"`);
    if (route.title.startsWith('PvPro.ch') || (route.title.match(/PvPro\.ch/g) || []).length !== 1) failures.push(`${route.path}: brand starts the title or appears more than once`);
    if (route.title.length > 60) failures.push(`${route.path}: title is ${route.title.length} characters (maximum 60)`);
    if (/(?:\.{3}|…)/.test(route.title) || /(?:\.{3}|…)/.test(route.description)) failures.push(`${route.path}: title or description contains a truncation ellipsis`);
    if (route.description.length > 155) failures.push(`${route.path}: description is ${route.description.length} characters (maximum 155)`);
    if (!/[.!?]$/u.test(route.description)) failures.push(`${route.path}: description is not a complete sentence`);
    if (titles.has(route.title)) failures.push(`${route.path}: duplicate title also used by ${titles.get(route.title)}`);
    else titles.set(route.title, route.path);
  }
  return failures;
}

function report(routes) {
  const grouped = locales.map(locale => {
    const cell = value => value.replace(/\|/g, '\\|');
    const rows = routes.filter(route => route.locale === locale).map(route =>
      `| \`${route.path}\` | ${cell(route.title)} | ${cell(route.description)} |`).join('\n');
    return `## ${locale.toUpperCase()}\n\n| Path | Final title | Final description |\n| --- | --- | --- |\n${rows}`;
  }).join('\n\n');
  const maxTitle = Math.max(...routes.map(route => route.title.length));
  const maxDescription = Math.max(...routes.map(route => route.description.length));
  return `# SEO metadata report\n\nGenerated by \`npm run audit:seo-metadata\` from the current route inventory and content data.\n\n- **Indexable routes:** ${routes.length}\n- **Maximum title length:** ${maxTitle}\n- **Maximum description length:** ${maxDescription}\n\n${grouped}\n`;
}

(async () => {
  const routes = await resolvedRoutes();
  const failures = audit(routes);
  fs.writeFileSync(path.join(root, 'seo-metadata-report.md'), report(routes));
  console.log(`Audited ${routes.length} indexable routes. Max title: ${Math.max(...routes.map(r => r.title.length))}; max description: ${Math.max(...routes.map(r => r.description.length))}.`);
  if (failures.length) {
    console.error(`SEO metadata audit failed (${failures.length} issue${failures.length === 1 ? '' : 's'}):\n- ${failures.join('\n- ')}`);
    process.exitCode = 1;
  }
})().catch(error => { console.error(error.stack || error); process.exitCode = 1; });