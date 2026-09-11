#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const assert = require('node:assert/strict');
const { execFileSync } = require('child_process');
const Module = require('module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return originalResolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
function compile(source, filename) {
  return ts.transpileModule(source, { fileName: filename, compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
}
for (const ext of ['.ts', '.tsx']) require.extensions[ext] = (module, filename) =>
  module._compile(compile(fs.readFileSync(filename, 'utf8'), filename), filename);
const { cantonAreas } = require('../lib/cantons.ts');
const { staticSeoRouteGroups } = require('../lib/seoRoutes.ts');
const locales = ['de', 'fr', 'it', 'en'];
const base = 'https://www.pvpro.ch';
const oldPaths = ['/solaranlage-appenzell', '/solaranlage-unterwalden'];
const built = route => {
  const filename = path.join(root, '.next/server/app', route === '/' ? 'index.html' : `${route.slice(1)}.html`);
  if (fs.existsSync(filename)) return fs.readFileSync(filename, 'utf8');
  assert.ok(process.env.REPLIT_DEV_DOMAIN, 'Start the app to audit existing force-dynamic pages');
  return execFileSync('curl', ['--fail', '--silent', '--show-error', '--max-time', '120', `https://${process.env.REPLIT_DEV_DOMAIN}${route}`], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
};
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), m[2].replaceAll('&amp;', '&')]));
function links(html) {
  return [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0]));
}
assert.equal(cantonAreas.length, 25);
assert.equal(new Set(cantonAreas.flatMap(a => Object.values(a.paths))).size, 100);
assert.equal(new Set(cantonAreas.flatMap(a => a.code.split('/'))).size, 26);
const groups = cantonAreas.map(a => ({ paths: a.paths }));
groups.push(...staticSeoRouteGroups.filter(g => g.paths.de === '/solaranlage-biel' || g.paths.de === '/foerderungen-kanton-zuerich'));
assert.equal(groups.length, 27);
for (const group of groups) {
  const expected = Object.fromEntries(Object.entries(group.paths).map(([lang, route]) => [`${lang}-CH`, base + route]));
  expected['x-default'] = base + group.paths.de;
  for (const route of Object.values(group.paths)) {
    const pageLinks = links(built(route));
    assert.equal(pageLinks.find(l => l.rel === 'canonical')?.href, base + route, route);
    assert.deepEqual(Object.fromEntries(pageLinks.filter(l => l.hreflang).map(l => [l.hreflang, l.href])), expected, route);
  }
}
for (const locale of locales) {
  const html = built(locale === 'de' ? '/' : '/' + locale);
  const start = html.indexOf(`data-canton-grid="${locale}"`);
  assert.ok(start >= 0, `Missing grid ${locale}`);
  const grid = html.slice(start, html.indexOf('</section>', start));
  const hrefs = [...grid.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(hrefs, cantonAreas.map(a => a.paths[locale]));
}
const config = require('../next.config.js');
async function finish() {
  const redirects = await config.redirects();
  for (const [source, destination] of [[oldPaths[0], '/solaranlage-appenzell-ausserrhoden'], [oldPaths[1], '/solaranlage-obwalden']]) {
    const rule = redirects.find(r => r.source === source);
    assert.equal(rule?.destination, destination);
    assert.equal(rule?.statusCode, 301);
  }
  const { canonicalTarget } = require('../middleware.ts');
  for (const area of cantonAreas) for (const route of Object.values(area.paths)) {
    assert.equal(canonicalTarget({ url: base + route, hostname: 'www.pvpro.ch', protocol: 'https' }), null, `Unexpected redirect ${route}`);
  }
  const { GET } = require('../app/api/sitemap/route.ts');
  const sitemap = await (await GET()).text();
  for (const group of groups) for (const route of Object.values(group.paths)) {
    assert.ok(sitemap.includes(`<loc>${base}${route}</loc>`), `Missing sitemap URL ${route}`);
  }
  for (const route of oldPaths) assert.ok(!sitemap.includes(`<loc>${base}${route}</loc>`), `Redirect in sitemap ${route}`);
  // Existing source pages must remain untouched; only the four homepages may change.
  const changed = execFileSync('git', ['diff', '--name-only', '--', 'app'], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  assert.ok(changed.every(f => ['app/(de)/page.tsx', 'app/fr/page.tsx', 'app/it/page.tsx', 'app/en/page.tsx'].includes(f)), changed.join(', '));
  // Compare legacy template rendering to the pre-change version, including all visible text.
  const filename = path.join(root, 'components/UniqueCityPage.tsx');
  const previous = execFileSync('git', ['show', 'HEAD:components/UniqueCityPage.tsx'], { cwd: root, encoding: 'utf8' });
  const baseline = new Module(filename, module);
  baseline.filename = filename;
  baseline.paths = module.paths;
  baseline._compile(compile(previous, filename), filename);
  const current = require(filename).default;
  const React = require('react');
  const { renderToStaticMarkup } = require('react-dom/server');
  const { cities } = require('../lib/cities.ts');
  const { cityContents } = require('../lib/city-content.ts');
  let preserved = 0;
  for (const city of cities) {
    const content = cityContents[city.slug];
    if (!content) continue;
    const props = { city, content, accentColor: 'blue' };
    assert.equal(renderToStaticMarkup(React.createElement(current, props)), renderToStaticMarkup(React.createElement(baseline.exports.default, props)), `Legacy rendering changed: ${city.slug}`);
    preserved++;
  }
  console.log(`PASS: 100 canton URLs, 106 canonical/hreflang checks, four grids, redirects, sitemap, ${preserved} unchanged legacy template renderings.`);
}
finish().catch(error => { console.error(error); process.exitCode = 1; });