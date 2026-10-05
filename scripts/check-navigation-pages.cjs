#!/usr/bin/env node
// Read-only browser checks. External traffic and all submissions are blocked.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const base = process.env.NAV_TEST_URL || `https://${process.env.REPLIT_DEV_DOMAIN}`;
const locales = [
  { locale: 'de', contact: '/kontakt', team: '/team', about: '/ueber-uns', form: '/anfrage', process: '/wie-es-funktioniert', subsidies: '/foerderungen' },
  { locale: 'fr', contact: '/fr/contact', team: '/fr/equipe', about: '/fr/a-propos', form: '/fr/demande', process: '/fr/comment-ca-marche', subsidies: '/fr/subventions-solaires' },
  { locale: 'en', contact: '/en/contact', team: '/en/team', about: '/en/about-us', form: '/en/request', process: '/en/how-it-works', subsidies: '/en/solar-subsidies' },
  { locale: 'it', contact: '/it/contatti', team: '/it/team', about: '/it/chi-siamo', form: '/it/richiesta', process: '/it/come-funziona', subsidies: '/it/incentivi-solari' },
];
const origin = new URL(base).origin;
const checkedTargets = new Map();

async function checkTarget(context, href) {
  const url = new URL(href, base);
  const anchor = url.hash.slice(1);
  url.hash = '';
  if (!checkedTargets.has(url.href)) {
    const response = await context.request.get(url.href, { timeout: 60000 });
    assert.equal(response.status(), 200, `${href}: destination exists`);
    checkedTargets.set(url.href, await response.text());
  }
  if (anchor) assert.ok(checkedTargets.get(url.href).includes(`id="${anchor}"`), `${href}: anchor exists`);
}

async function checkNavigation(page, context, current, width) {
  const header = page.locator('header').first();
  let destinations = [];
  if (width >= 1280) {
    for (let index = 0; index < 4; index++) {
      const trigger = header.locator(`[aria-controls="desktop-nav-${index}"]`);
      await trigger.click();
      const panel = page.locator(`#desktop-nav-${index}`);
      await panel.waitFor({ state: 'visible' });
      destinations.push(...await panel.locator('a').evaluateAll(links => links.map(link => link.getAttribute('href'))));
      await page.keyboard.press('Escape');
      assert.equal(await trigger.getAttribute('aria-expanded'), 'false', 'Escape closes desktop menu');
    }
  } else {
    const trigger = header.locator('[aria-controls="mobile-navigation"]');
    await trigger.click();
    const panel = page.locator('#mobile-navigation');
    await panel.waitFor({ state: 'visible' });
    destinations = await panel.locator('a').evaluateAll(links => links.map(link => link.getAttribute('href')));
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Mobile menu fits viewport');
    await page.keyboard.press('Escape');
    assert.equal(await trigger.getAttribute('aria-expanded'), 'false', 'Escape closes mobile menu');
    await trigger.click();
    await panel.locator(`a[href="${current.contact}"]`).click();
    await page.waitForURL(`**${current.contact}`);
    await panel.waitFor({ state: 'hidden' });
  }
  for (const expected of [
    current.contact, current.team, current.process,
    `${current.process}#receive-quotes`, `${current.process}#compare-quotes`,
    `${current.subsidies}#federal-subsidy`, `${current.subsidies}#cantonal-subsidies`,
  ]) {
    assert.ok(destinations.includes(expected), `${current.locale}: menu contains ${expected}`);
    await checkTarget(context, expected);
  }
  const tax = destinations.find(href => href.includes('/blog/'));
  assert.ok(tax, `${current.locale}: tax article linked directly`);
  await checkTarget(context, tax);
  console.log(`PASS ${current.locale}: ${width}px navigation, keyboard dismissal, target URLs and anchors`);
}

async function checkMetadata(page, current, kind) {
  const title = await page.title();
  assert.equal((title.match(/\| PvPro\.ch/g) || []).length, 1, `${current[kind]}: single brand suffix`);
  assert.ok((await page.locator('meta[name="description"]').getAttribute('content')).length > 40);
  assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `https://www.pvpro.ch${current[kind]}`);
  for (const target of locales) {
    assert.equal(await page.locator(`link[rel="alternate"][hreflang="${target.locale}-CH"]`).getAttribute('href'), `https://www.pvpro.ch${target[kind]}`);
  }
}

(async () => {
  const browser = await chromium.launch({ executablePath: '/repl/tools/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const failures = [];
  try {
    const context = await browser.newContext();
    await context.addInitScript(() => {
      localStorage.setItem('pvpro_cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() }));
    });
    await context.route('**/*', route => {
      const request = route.request();
      if (!['GET', 'HEAD'].includes(request.method()) || new URL(request.url()).origin !== origin) return route.abort();
      return route.continue();
    });
    const page = await context.newPage();
    page.on('pageerror', error => failures.push(error.message));
    const sitemapResponse = await context.request.get(`${base}/api/sitemap`, { timeout: 60000 });
    assert.equal(sitemapResponse.status(), 200);
    const sitemap = await sitemapResponse.text();
    for (const viewport of [{ width: 1440, height: 960 }, { width: 390, height: 844 }]) {
      await page.setViewportSize(viewport);
      for (const current of locales) {
        const headings = [];
        for (const kind of ['contact', 'team']) {
          const path = current[kind];
          const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle', timeout: 60000 });
          assert.equal(response.status(), 200, path);
          assert.equal(await page.locator('h1').count(), 1, `${path}: one h1`);
          headings.push(await page.locator('h1').innerText());
          await checkMetadata(page, current, kind);
          const languageButton = page.getByRole('button', { name: 'Change language', exact: true });
          await languageButton.click();
          for (const equivalent of locales) {
            assert.ok(await page.locator('header').first().locator(`a[href="${equivalent[kind]}"]`).count(), `${path}: language selector links to exact equivalent`);
          }
          await languageButton.click();
          assert.ok(sitemap.includes(`<loc>https://www.pvpro.ch${path}</loc>`), `${path}: included in sitemap`);
          const main = page.locator('main').first();
          const copy = await main.innerText();
          assert.ok(copy.length > 600, `${path}: substantive localized content`);
          assert.ok(!/\b(r[eé]gions?|regional\w*|region[ei])\b/i.test(copy), `${path}: prohibited wording absent`);
          assert.ok(await main.locator(`a[href="${current.form}"]`).count(), `${path}: quote form remains available`);
          assert.ok(await page.locator(`footer a[href="${current.contact}"]`).count(), `${path}: contact discoverable in footer`);
          assert.ok(await page.locator(`footer a[href="${current.team}"]`).count(), `${path}: team discoverable in footer`);
          if (kind === 'contact') {
            assert.ok(await main.locator('a[href="mailto:anfrage@pvpro.ch"]').count(), `${path}: working email`);
            assert.ok(await main.locator('a[href="tel:+41762703887"]').count(), `${path}: working phone`);
          } else {
            assert.ok(await main.locator(`a[href="${current.contact}"]`).count(), `${path}: connects to contact`);
            assert.ok(await main.locator(`a[href="${current.about}"]`).count(), `${path}: connects to company page`);
          }
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path}: no horizontal overflow at ${viewport.width}`);
          console.log(`PASS ${path}: ${viewport.width}px, content, contact/quote links, SEO and sitemap`);
        }
        assert.notEqual(headings[0], headings[1], `${current.locale}: distinct contact and team pages`);
        await checkNavigation(page, context, current, viewport.width);
      }
    }
    assert.deepEqual(failures, [], 'No browser runtime errors');
    await context.close();
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
