#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');

const ids = ['aargau', 'appenzell-ausserrhoden', 'appenzell-innerrhoden', 'basel', 'bern'];
const ranges = { aargau: [1000, 1300], 'appenzell-ausserrhoden': [1050, 1350], 'appenzell-innerrhoden': [900, 1150], basel: [1300, 1650], bern: [1100, 1400] };
const base = process.env.GUIDE_TEST_URL || `https://${process.env.REPLIT_DEV_DOMAIN}`;

(async () => {
  const browser = await chromium.launch({ executablePath: '/repl/tools/bin/chromium', headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const results = [];
    for (const id of ids) {
      const response = await page.goto(`${base}/solaranlage-${id}`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, id);
      const article = page.locator(`[data-canton-guide="${id}"]`);
      assert.equal(await article.count(), 1);
      assert.equal(await article.locator('h1').count(), 1);
      assert.equal(await article.getByRole('link', { name: 'Bis zu 3 Solarofferten vergleichen', exact: true }).count(), 3);
      assert.equal(await article.locator('iframe[title^="Karte"]').count(), 1, `${id}: retained map`);
      const content = await article.innerText();
      assert.ok(!/ß|führende Vergleichsplattform|garantierte Bundesförderung|Bundesförderung garantiert|\bregion\w*/i.test(content), `${id}: banned wording`);
      const faq = await article.evaluate(element => ({
        questions: [...element.querySelectorAll('[data-faq-question]')].map(el => el.textContent),
        answers: [...element.querySelectorAll('[data-faq-answer]')].map(el => el.textContent),
        schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(el => JSON.parse(el.textContent)).filter(item => item['@type'] === 'FAQPage'),
      }));
      assert.equal(faq.schema.length, 1, `${id}: one FAQPage schema`);
      assert.deepEqual(faq.schema[0].mainEntity.map(item => item.name), faq.questions);
      assert.deepEqual(faq.schema[0].mainEntity.map(item => item.acceptedAnswer.text), faq.answers);
      for (const answer of await article.locator('[data-faq-answer]').all()) assert.ok(await answer.isVisible());
      const words = await article.evaluate(element => {
        const copy = element.cloneNode(true);
        copy.style.cssText = `position:absolute;left:-100000px;width:${element.getBoundingClientRect().width}px`;
        copy.querySelectorAll('nav,small,script').forEach(el => el.remove());
        copy.querySelectorAll('h2').forEach(el => {
          if (el.textContent === 'Quellen & Stand') el.closest('section').remove();
        });
        copy.querySelectorAll('iframe').forEach(el => el.closest('section').remove());
        document.body.appendChild(copy);
        const count = copy.innerText.split(/\s+/).filter(word => /[\p{L}\p{N}]/u.test(word)).length;
        copy.remove();
        return count;
      });
      // The brief specifies approximate editorial targets, not exact token limits.
      const roundedWords = Math.round(words / 10) * 10;
      assert.ok(roundedWords >= ranges[id][0] && roundedWords <= ranges[id][1], `${id}: about ${roundedWords} editorial words outside ${ranges[id].join('–')}`);
      const modules = await article.locator('[data-guide-module]').evaluateAll(elements => elements.map(el => el.dataset.guideModule));
      await article.locator('[data-guide-module]').first().screenshot({ path: `/tmp/guide-${id}-desktop.png` });
      await page.setViewportSize({ width: 390, height: 844 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${id}: mobile horizontal overflow`);
      await article.locator('[data-guide-module]').first().screenshot({ path: `/tmp/guide-${id}-mobile.png` });
      results.push({ id, status: response.status(), words, modules, faq: faq.questions.length, mobile: 'OK' });
      await page.setViewportSize({ width: 1440, height: 1000 });
    }
    assert.equal((await page.request.get(`${base}/anfrage`)).status(), 200, 'CTA destination');
    assert.deepEqual(errors, [], 'Browser exceptions');
    fs.writeFileSync('/tmp/five-guides-browser-results.json', JSON.stringify(results, null, 2));
    console.table(results);
    console.log('PASS: five HTTP 200 routes, word targets, desktop/mobile, retained maps, three working CTAs, visible FAQs matching one schema, no browser exceptions.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });