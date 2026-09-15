#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { chromium } = require('playwright');

const ids = process.env.GUIDE_TEST_IDS?.split(',') || ['aargau', 'appenzell-ausserrhoden', 'appenzell-innerrhoden', 'basel', 'bern'];
const widths = [390, 768, 1024, 1440];
const base = process.env.GUIDE_TEST_URL || `https://${process.env.REPLIT_DEV_DOMAIN}`;

(async () => {
  const browser = await chromium.launch({ executablePath: '/repl/tools/bin/chromium', headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const results = [];
    for (const id of ids) {
      const response = await page.goto(`${base}/solaranlage-${id}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
      assert.equal(response.status(), 200, id);
      const article = page.locator(`[data-canton-guide="${id}"]`);
      await article.waitFor({ state: 'visible' });
      await article.locator('iframe[title^="Karte"]').waitFor({ state: 'attached' });
      await page.evaluate(() => document.fonts.ready);
      const necessaryCookies = page.getByRole('button', { name: 'Nur notwendige', exact: true });
      if (await necessaryCookies.isVisible()) await necessaryCookies.click();
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
      const modules = await article.locator('[data-guide-module]').evaluateAll(elements => elements.map(el => el.dataset.guideModule));
      for (const width of widths) {
        await page.setViewportSize({ width, height: 1000 });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${id}: ${width}px horizontal overflow`);
        if (width === 1440 && !process.env.GUIDE_TEST_IDS) {
          assert.ok(await article.locator('.guide-hero-lead').evaluate(el => el.getBoundingClientRect().height <= parseFloat(getComputedStyle(el).lineHeight) * 4.1), `${id}: compact desktop hero lead`);
        }
        const navigation = article.locator('nav');
        assert.ok(await navigation.evaluate(el => el.scrollWidth <= el.clientWidth + 1 && [...el.querySelectorAll('*')].every(child => child.scrollWidth <= child.clientWidth + 1)), `${id}: ${width}px navigation overflow`);
        for (const anchor of await navigation.locator('a').all()) {
          const href = await anchor.getAttribute('href');
          assert.ok(href?.startsWith('#') && await page.locator(href).count() === 1, `${id}: anchor target ${href}`);
        }
        for (const link of await article.getByRole('link', { name: 'Bis zu 3 Solarofferten vergleichen', exact: true }).all()) {
          assert.equal(await link.getAttribute('href'), '/anfrage');
          assert.ok(await link.isVisible());
        }
        if (id === 'graubunden') {
          const radios = article.getByRole('radio');
          assert.equal(await radios.count(), 3, 'Three programme choices');
          const outcomes = new Set();
          for (const radio of await radios.all()) {
            await radio.focus();
            await page.keyboard.press('Space');
            assert.ok(await radio.isChecked(), 'Keyboard programme selection');
            outcomes.add(await article.locator('[aria-live="polite"]').innerText());
            assert.equal(await article.locator('.next-programme').count(), 2, 'Both programme cards remain present');
          }
          assert.equal(outcomes.size, 3, 'Each selection updates the guidance');
          await radios.first().focus();
          await page.keyboard.press('Space');
        }
        for (const module of await article.locator('[data-guide-module]').all()) {
          assert.ok(await module.evaluate(el => el.scrollWidth <= el.clientWidth + 1), `${id}: ${width}px module overflow`);
          await module.screenshot({ path: `/tmp/module-${id}-${width}-${await module.getAttribute('data-guide-module')}.png` });
        }
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({ path: `/tmp/editorial-${id}-${width}.png` });
      }
      results.push({ id, status: response.status(), words, modules, faq: faq.questions.length, viewports: widths.join(' / ') + ': OK' });
      await page.setViewportSize({ width: 1440, height: 1000 });
    }
    assert.equal((await page.request.get(`${base}/anfrage`)).status(), 200, 'CTA destination');
    assert.deepEqual(errors, [], 'Browser exceptions');
    fs.writeFileSync(process.env.GUIDE_TEST_IDS ? '/tmp/next-five-browser-results.json' : '/tmp/five-guides-browser-results.json', JSON.stringify(results, null, 2));
    console.table(results);
    console.log('PASS: five HTTP 200 routes, four viewport sizes, no page/navigation overflow, retained maps, three working CTAs, visible FAQs matching one schema, no browser exceptions.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });