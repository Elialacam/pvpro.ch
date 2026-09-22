#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return resolve.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText, filename);
const { cantonAreas } = require('../lib/cantons');
const { getCantonGuideByPath } = require('../lib/canton-guides');
const base = process.env.GUIDE_TEST_URL || `https://${process.env.REPLIT_DEV_DOMAIN}`;
const locales = ['de', 'it', 'fr', 'en'];

(async () => {
  const browser = await chromium.launch({ executablePath: '/repl/tools/bin/chromium', args: ['--no-sandbox'], headless: true });
  const context = await browser.newContext();
  const parser = await context.newPage();
  const results = [];
  try {
    const sitemap = await (await context.request.get(`${base}/sitemap.xml`, { timeout: 120000 })).text();
    for (const area of process.env.SKIP_HTTP === '1' ? [] : cantonAreas) {
      for (const locale of locales) {
        const route = area.paths[locale];
        const guide = getCantonGuideByPath(route, locale);
        const response = await context.request.get(`${base}${route}`, { timeout: 120000 });
        assert.equal(response.status(), 200, `${route}: HTTP response`);
        assert.equal(new URL(response.url()).pathname, route, `${route}: unexpected redirect`);
        const html = await response.text();
        const page = await parser.evaluate(html => {
          const doc = new DOMParser().parseFromString(html, 'text/html');
          const article = doc.querySelector('[data-canton-guide]');
          const meta = name => doc.querySelector(`meta[name="${name}"],meta[property="${name}"]`)?.content;
          const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].map(s => JSON.parse(s.textContent));
          return {
            lang: doc.documentElement.lang,
            title: doc.querySelector('title')?.textContent,
            description: meta('description'),
            ogTitle: meta('og:title'), ogDescription: meta('og:description'),
            twitterTitle: meta('twitter:title'),
            robots: meta('robots') || '',
            canonical: doc.querySelector('link[rel="canonical"]')?.href,
            alternates: Object.fromEntries([...doc.querySelectorAll('link[hreflang]')].map(el => [el.hreflang, el.href])),
            guideId: article?.getAttribute('data-canton-guide'),
            h1: [...(article?.querySelectorAll('h1') || [])].map(el => el.textContent),
            h2: [...(article?.querySelectorAll('h2') || [])].map(el => el.textContent),
            faqQuestions: [...(article?.querySelectorAll('[data-faq-question]') || [])].map(el => el.textContent),
            faqAnswers: [...(article?.querySelectorAll('[data-faq-answer]') || [])].map(el => el.textContent),
            links: [...(article?.querySelectorAll('a[href]') || [])].map(el => el.getAttribute('href')),
            schemas,
          };
        }, html);
        assert.equal(page.lang, `${locale}-CH`, `${route}: server HTML language`);
        assert.equal(page.guideId, guide.id);
        assert.deepEqual(page.h1, [guide.h1]);
        assert.equal(page.description, guide.description);
        assert.equal(page.ogDescription, page.description);
        assert.equal(page.ogTitle, page.title);
        assert.equal(page.twitterTitle, page.title);
        assert.ok(page.canonical.endsWith(route));
        for (const target of locales) assert.ok(page.alternates[`${target}-CH`].endsWith(area.paths[target]));
        assert.ok(page.alternates['x-default'].endsWith(area.paths.de));
        assert.ok(!page.robots.includes('noindex'), route);
        assert.ok(sitemap.includes(`>${page.canonical}</loc>`), `${route}: missing from sitemap`);
        const sectionOrder = guide.sections.map(section => page.h2.indexOf(section.title));
        assert.ok(sectionOrder.every((position, i) => position >= 0 && (!i || position > sectionOrder[i - 1])), `${route}: section order`);
        assert.deepEqual(page.faqQuestions, guide.faqs.map(faq => faq.question));
        assert.deepEqual(page.faqAnswers, guide.faqs.map(faq => faq.answer));
        const faqSchemas = page.schemas.filter(schema => schema['@type'] === 'FAQPage');
        assert.equal(faqSchemas.length, 1);
        assert.deepEqual(faqSchemas[0].mainEntity.map(entry => entry.name), page.faqQuestions);
        assert.deepEqual(faqSchemas[0].mainEntity.map(entry => entry.acceptedAnswer.text), page.faqAnswers);
        for (const link of page.links.filter(href => href.startsWith('/') && !href.startsWith('//'))) {
          const linkLocale = link.match(/^\/(it|fr|en)(?:\/|$)/)?.[1] || 'de';
          assert.equal(linkLocale, locale, `${route}: cross-language internal link ${link}`);
        }
        results.push({ route, status: 200, language: page.lang, sections: sectionOrder.length, seo: 'passed' });
      }
      console.log(`HTTP/SEO/structure: ${area.id} (4 languages)`);
    }
    const visual = await context.newPage();
    // Block external services; these checks must never create leads or analytics events.
    await visual.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin !== new URL(base).origin || /\/api\/(anfrage|send-confirmation)/.test(url.pathname)) return route.abort();
      return route.continue();
    });
    const errors = [];
    visual.on('pageerror', error => errors.push(error.message));
    fs.mkdirSync('/tmp/canton-multilingual-qa', { recursive: true });
    for (const id of ['aargau', 'uri']) {
      const area = cantonAreas.find(area => area.id === id);
      for (const locale of locales) {
        for (const width of [390, 1440]) {
          await visual.setViewportSize({ width, height: 1000 });
          await visual.goto(`${base}${area.paths[locale]}`, { waitUntil: 'networkidle', timeout: 120000 });
          await visual.locator(`[data-canton-guide="${id}"]`).waitFor();
          assert.equal(await visual.locator('html').getAttribute('lang'), `${locale}-CH`);
          assert.ok(await visual.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${id}/${locale}/${width}: horizontal overflow`);
          await visual.screenshot({ path: `/tmp/canton-multilingual-qa/${id}-${locale}-${width}.png`, fullPage: true });
          if (width === 1440) {
            const languageButton = visual.getByRole('button', { name: /Sprache wechseln|Cambia lingua|Changer de langue|Change language/ }).first();
            await languageButton.click();
            const menu = languageButton.locator('..');
            for (const target of locales) {
              assert.equal(await menu.locator(`a[href="${area.paths[target]}"]`).count(), 1, `${id}/${locale}: language target ${target}`);
            }
            const target = locales[(locales.indexOf(locale) + 1) % locales.length];
            await menu.locator(`a[href="${area.paths[target]}"]`).click();
            await visual.waitForURL(`${base}${area.paths[target]}`, { timeout: 120000 });
            await visual.locator(`[data-canton-guide="${id}"]`).waitFor();
            assert.equal(await visual.locator('html').getAttribute('lang'), `${target}-CH`);
          }
        }
      }
    }
    assert.deepEqual(errors, [], 'Browser runtime errors');
    fs.writeFileSync('/tmp/canton-multilingual-qa/results.json', JSON.stringify({ pages: results, screenshots: 16, browserErrors: errors }, null, 2));
    console.log(`PASS: ${results.length} HTTP pages checked in this run; 16 desktop/mobile screenshots; language-switch navigation; no browser runtime errors.`);
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });