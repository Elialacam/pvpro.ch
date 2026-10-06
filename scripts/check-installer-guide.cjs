#!/usr/bin/env node
// Browser regression checks; blocks external traffic and submissions.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const base = `https://${process.env.REPLIT_DEV_DOMAIN}`;
const locales = [
  { locale: 'de', path: '/besten-solar-anbieter-waehlen', process: '/wie-es-funktioniert', form: '/anfrage' },
  { locale: 'fr', path: '/fr/choisir-installateur-solaire', process: '/fr/comment-ca-marche', form: '/fr/demande' },
  { locale: 'en', path: '/en/choose-solar-installer', process: '/en/how-it-works', form: '/en/request' },
  { locale: 'it', path: '/it/scegliere-installatore-solare', process: '/it/come-funziona', form: '/it/richiesta' },
];

(async () => {
  const browser = await chromium.launch({ executablePath: '/repl/tools/bin/chromium', args: ['--no-sandbox'] });
  try {
    const context = await browser.newContext();
    await context.addInitScript(() => localStorage.setItem('pvpro_cookie_consent', JSON.stringify({
      necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString(),
    })));
    await context.route('**/*', route => {
      const request = route.request();
      return ['GET', 'HEAD'].includes(request.method()) && new URL(request.url()).origin === new URL(base).origin
        ? route.continue() : route.abort();
    });
    const errors = [];
    const sitemapResponse = await context.request.get(`${base}/api/sitemap`, { timeout: 90000 });
    assert.equal(sitemapResponse.status(), 200);
    const sitemap = await sitemapResponse.text();
    for (const width of [1440, 390]) {
      for (const current of locales) {
        const page = await context.newPage();
        page.on('pageerror', error => errors.push(error.message));
        await page.setViewportSize({ width, height: 960 });
        await page.goto(`${base}${current.process}`, { waitUntil: 'networkidle', timeout: 90000 });
        const navigation = width >= 1280 ? '#desktop-nav-0' : '#mobile-navigation';
        await page.locator(`button[aria-controls="${navigation.slice(1)}"]`).click();
        await page.locator(`${navigation} a[href="${current.path}"]`).click();
        await page.waitForURL(`${base}${current.path}`, { timeout: 90000 });
        await page.locator('table').waitFor();
        assert.equal(await page.locator('h1').count(), 1, 'One page heading');
        assert.equal(await page.locator('main').count(), 1, 'One main landmark');
        const main = page.locator('main');
        const text = await main.innerText();
        assert.ok(text.length > 3500, 'Detailed standalone guide');
        assert.ok(!/\b(r[eé]gions?|regional\w*|region[ei])\b/i.test(text), 'Prohibited wording absent');
        assert.ok(await main.locator('table tbody tr').count() >= 5, 'Substantive comparison table');
        assert.ok(await main.locator(`a[href="${current.form}"]`).count(), 'Existing quote form linked');
        assert.ok(await main.locator(`a[href="${current.process}"]`).count(), 'Process overview linked');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No page overflow');
        for (const href of await main.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')))) {
          assert.equal(await page.locator(href).count(), 1, `${href} exists`);
        }
        assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `https://www.pvpro.ch${current.path}`);
        assert.equal(((await page.title()).match(/\| PvPro\.ch/g) || []).length, 1);
        assert.ok(sitemap.includes(`<loc>https://www.pvpro.ch${current.path}</loc>`));
        for (const target of locales) {
          assert.equal(await page.locator(`link[rel="alternate"][hreflang="${target.locale}-CH"]`).getAttribute('href'), `https://www.pvpro.ch${target.path}`);
        }
        await page.getByRole('button', { name: 'Change language', exact: true }).click();
        for (const target of locales) {
          assert.ok(await page.locator(`header a[href="${target.path}"]`).count(), 'Exact language equivalent');
        }
        await page.getByRole('button', { name: 'Change language', exact: true }).click();
        // Exercise native checklist controls, when present.
        for (const checkbox of await main.locator('input[type="checkbox"]').all()) {
          await checkbox.check();
          assert.ok(await checkbox.isChecked());
          await checkbox.uncheck();
        }
        console.log(`PASS ${current.locale} ${width}px: actual menu navigation, guide, table, links, SEO, responsive layout`);
        await page.close();
      }
    }
    assert.deepEqual(errors, [], 'No browser runtime errors');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
