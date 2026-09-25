const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const origin = `https://${process.env.REPLIT_DEV_DOMAIN}`;
const locales = {
  de: ['/anfrage', ['Ja', 'Einfamilienhaus', 'Satteldach', 'Ja'], 'Zurück', 'Nein'],
  it: ['/it/richiesta', ['Sì', 'Casa unifamiliare', 'Tetto a falda', 'Sì'], 'Indietro', 'No'],
  fr: ['/fr/demande', ['Oui', 'Maison individuelle', 'Toit à deux pentes', 'Oui'], 'Retour', 'Non'],
  en: ['/en/request', ['Yes', 'Detached house', 'Pitched roof', 'Yes'], 'Back', 'No'],
};

async function main() {
  const browser = await chromium.launch({ executablePath: '/repl/tools/bin/chromium', args: ['--no-sandbox'] });
  try {
    for (const reducedMotion of ['no-preference', 'reduce']) {
      for (const [locale, [path, choices, back, no]] of Object.entries(locales)) {
        const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion });
        await context.route('**/*', route => {
          const req = route.request();
          if (new URL(req.url()).origin !== origin || !['GET', 'HEAD'].includes(req.method())) return route.abort();
          return route.continue();
        });
        try {
          const page = await context.newPage();
          const errors = [];
          page.on('pageerror', error => errors.push(error.message));
          await page.goto(origin + path, { waitUntil: 'networkidle', timeout: 60000 });
          await page.waitForFunction(() => {
            const button = document.querySelector('[data-form-step] button');
            return button && Object.keys(button).some(key => key.startsWith('__reactProps'));
          });
          const card = label => page.locator('[data-form-step] button').filter({ has: page.getByText(label, { exact: true }) });
          await card(no).click();
          assert.equal(await page.locator('[data-form-step]').getAttribute('data-form-step'), '1', 'renter stays on first step');
          const timings = [];
          for (const [i, choice] of choices.entries()) {
            // Finish the incoming animation before testing the next distinct answer.
            await page.waitForTimeout(200);
            const elapsed = await card(choice).evaluate((button, nextStep) => new Promise((resolve, reject) => {
              const start = performance.now();
              const timeout = setTimeout(() => { observer.disconnect(); reject(new Error(`No transition to ${nextStep}; current ${document.querySelector('[data-form-step]')?.getAttribute('data-form-step')}`)); }, 5000);
              const observer = new MutationObserver(() => {
                if (document.querySelector(`[data-form-step="${nextStep}"]`)) {
                  clearTimeout(timeout);
                  observer.disconnect();
                  resolve(performance.now() - start);
                }
              });
              observer.observe(document.body, { childList: true, subtree: true });
              // Two events on the same option must not schedule two advances.
              button.click();
              button.click();
            }), i + 2);
            timings.push(Math.round(elapsed));
            assert.equal(await page.locator('[data-form-step]').count(), 1, 'no overlapping old/new steps');
            await page.waitForTimeout(230);
            assert.equal(await page.locator('[data-form-step]').getAttribute('data-form-step'), String(i + 2));
          }
          await page.getByRole('button', { name: back, exact: true }).click();
          await page.waitForTimeout(230);
          assert.equal(await page.locator('[data-form-step]').getAttribute('data-form-step'), '4');
          const selected = await card(choices[3]).evaluate(el => el.style.background);
          assert.equal(selected, 'rgb(255, 247, 237)', 'answer survives back navigation');
          assert.ok(await page.locator('[data-form-step] img').evaluateAll(imgs => imgs.every(img => img.complete && img.naturalWidth === 256)));
          await card(choices[3]).focus();
          await page.keyboard.press('Enter');
          await page.waitForTimeout(230);
          assert.equal(await page.locator('[data-form-step]').getAttribute('data-form-step'), '5', 'keyboard selection advances');
          assert.deepEqual(errors, []);
          console.log(`PASS ${locale} ${reducedMotion}: click-to-next-DOM ${timings.join('/')} ms; double-click, back, keyboard, icons`);
          if (locale === 'it' && reducedMotion === 'no-preference') {
            await page.getByRole('button', { name: back, exact: true }).click();
            await page.waitForTimeout(230);
            await page.screenshot({ path: '/tmp/form-transition-mobile.png', fullPage: true });
          }
        } finally { await context.close(); }
      }
    }
  } finally { await browser.close(); }
}

main().catch(error => { console.error(error); process.exitCode = 1; });