const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const base = `https://${process.env.REPLIT_DEV_DOMAIN}`;
const languages = ['de', 'fr', 'en', 'it'];
const pages = [
  ['/einmalverguetung', '/kantonale-foerderung', '/foerderungen', '/anfrage'],
  ['/fr/retribution-unique', '/fr/subventions-cantonales', '/fr/subventions-solaires', '/fr/demande'],
  ['/en/federal-solar-subsidy', '/en/cantonal-solar-subsidies', '/en/solar-subsidies', '/en/request'],
  ['/it/remunerazione-unica', '/it/incentivi-cantonali', '/it/incentivi-solari', '/it/richiesta'],
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
      return ['GET', 'HEAD'].includes(request.method()) && new URL(request.url()).origin === base
        ? route.continue() : route.abort();
    });
    const sitemap = await context.request.get(`${base}/api/sitemap`, { timeout: 90000 });
    assert.equal(sitemap.status(), 200);
    const xml = await sitemap.text();
    const errors = [];
    for (const width of [1440, 390]) {
      for (let language = 0; language < languages.length; language++) {
        for (const kind of [0, 1]) {
          const page = await context.newPage();
          page.on('pageerror', error => errors.push(error.message));
          await page.setViewportSize({ width, height: 960 });
          const paths = pages[language];
          const response = await page.goto(base + paths[2], { waitUntil: 'networkidle', timeout: 90000 });
          assert.equal(response.status(), 200);
          const menu = width > 1280 ? 'desktop-nav-2' : 'mobile-navigation';
          await page.locator(`button[aria-controls="${menu}"]`).click();
          await page.locator(`#${menu} a[href="${paths[kind]}"]`).click();
          await page.waitForURL(base + paths[kind], { timeout: 90000 });
          await page.locator('main article').first().waitFor();
          const main = page.locator('main');
          assert.equal(await main.count(), 1);
          assert.equal(await page.locator('h1').count(), 1);
          const copy = await main.innerText();
          assert.ok(copy.length > 5000, 'Substantive dedicated guide');
          assert.ok(!/\b(r[eé]gions?|regional\w*|region[ei])\b/i.test(copy));
          assert.ok(await main.locator(`a[href="${paths[3]}"]`).count(), 'Localized quote link');
          assert.ok(await main.locator(`a[href="${paths[1 - kind]}"]`).count(), 'Crosslink to other guide');
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No page overflow');
          for (const href of await main.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')))) {
            assert.equal(await page.locator(href).count(), 1, `Section ${href}`);
          }
          const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
          assert.equal(canonical, 'https://www.pvpro.ch' + paths[kind]);
          assert.ok(xml.includes(`<loc>${canonical}</loc>`));
          await page.getByRole('button', { name: 'Change language', exact: true }).click();
          for (let target = 0; target < languages.length; target++) {
            await page.locator(`header a[href="${pages[target][kind]}"]`).first().waitFor({ state: 'visible' });
            assert.equal(await page.locator(`link[rel="alternate"][hreflang="${languages[target]}-CH"]`).getAttribute('href'), 'https://www.pvpro.ch' + pages[target][kind]);
          }
          await page.getByRole('button', { name: 'Change language', exact: true }).click();
          const faq = main.locator('details').first();
          await faq.locator('summary').click();
          assert.notEqual(await faq.getAttribute('open'), null);
          if (kind === 0) {
            assert.equal(await main.locator('table tbody tr').count(), 4);
            assert.ok((await main.locator('table').innerText()).includes("3'600"));
            const slider = main.locator('input[type="range"]');
            const initial = await slider.inputValue();
            await slider.focus();
            await page.keyboard.press('ArrowRight');
            assert.notEqual(await slider.inputValue(), initial, 'Calculator responds');
          } else {
            assert.ok(await main.locator('a[href*="solaranlage-"],a[href*="/fr/solaire-"],a[href*="/en/solar-panels-"],a[href*="/it/fotovoltaico-"]').count() >= 24, 'Existing canton directory');
          }
          console.log(`PASS ${languages[language]} ${kind ? 'cantonal' : 'federal'} ${width}px: menu destination, content, controls, metadata, layout`);
          await page.close();
        }
      }
    }
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
