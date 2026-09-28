#!/usr/bin/env node
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

const origin = `https://${process.env.REPLIT_DEV_DOMAIN}`;
const routes = [
  ['/', '/anfrage'],
  ['/it', '/it/richiesta'],
  ['/fr', '/fr/demande'],
  ['/en', '/en/request'],
];

async function main() {
  assert.ok(process.env.REPLIT_DEV_DOMAIN);
  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || '/repl/tools/bin/chromium',
    args: ['--no-sandbox'],
  });
  try {
    for (const width of [390, 1280]) {
      const context = await browser.newContext({ viewport: { width, height: 844 } });
      await context.route('**/*', route => {
        const request = route.request();
        // No leads, analytics or other third-party requests in this test.
        if (new URL(request.url()).origin !== origin || !['GET', 'HEAD'].includes(request.method()))
          return route.abort();
        return route.continue();
      });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      for (const [home, form] of routes) {
        await page.goto(origin + form, { waitUntil: 'networkidle' });
        await page.waitForTimeout(1700);
        assert.equal(await page.getByTestId('callback-widget').count(), 0, `${form}: direct access`);
        await page.goto(origin + home, { waitUntil: 'networkidle' });
        const rejectCookies = page.getByRole('button', { name: 'Nur notwendige', exact: true });
        if (await rejectCookies.isVisible()) await rejectCookies.click();
        await page.getByTestId('callback-widget').waitFor();
        // Open the existing assistant before using the site's actual Next link.
        await page.getByTestId('callback-widget').locator('button').last().click();
        await page.locator(`a[href="${form}"]`).first().evaluate(el => el.click());
        await page.waitForURL(url => url.pathname === form);
        await page.locator('[data-form-step="1"]').waitFor();
        await page.waitForTimeout(1700);
        assert.equal(await page.getByTestId('callback-widget').count(), 0, `${form}: navigation with assistant open`);
        await page.reload({ waitUntil: 'networkidle' });
        assert.equal(await page.getByTestId('callback-widget').count(), 0, `${form}: reload`);
        console.log(`PASS ${width}px ${form}: direct, navigation, reload; homepage widget preserved`);
      }
      assert.deepEqual(errors, []);
      await context.close();
    }
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });