#!/usr/bin/env node
require('./audit-canton-guides');
const assert = require('node:assert/strict');
const { cantonGuides } = require('../lib/canton-guides');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const GuideHero = require('../components/canton-guides/GuideHero').default;
const GuidePage = require('../components/CantonGuidePage').default;
const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
const required = {
  freiburg: ['10 W/m²', '30 kW', '30 Tage', '50 m²', '20 %', '1’000 m²', 'FRIAC'],
  genf: ['0,2 GWh', '2030', '14 Tage', '80 Mio.', 'OCEN', 'OAC'],
  glarus: ['250/kWp', '15’000', '75°', '10 W/m²', '30 kWp', '2’000', '2 kWp', 'GL-31', 'M-08'],
  graubunden: ['300/kWp', '150/kWp', '900', '450', '200’000', '50’000', '60–90°', '1250', '20 W/m²', '10 W/m²', '50 %', '3 kWp', 'Minergie'],
  jura: ['15. September 2026', 'Warteliste', 'M-01', '3,893', '1,18', '2,713', '10 W/m²', '30 kW', 'JURAC'],
};
for (const guide of cantonGuides.filter(guide => required[guide.id])) {
  assert.equal(guide.intro.length, 2, `${guide.id}: two hero paragraphs`);
  assert.ok(guide.faqs.length >= 7, `${guide.id}: local FAQs`);
  assert.equal(guide.sections.find(section => section.id === 'kosten').bullets.length, 8);
  const html = renderToStaticMarkup(React.createElement(GuidePage, { guide, mapSection: null }));
  const body = html.replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/g, '');
  for (const fact of required[guide.id]) assert.ok(body.includes(escape(fact)), `${guide.id}: required fact missing in HTML: ${fact}`);
  const hero = renderToStaticMarkup(React.createElement(GuideHero, { guide }));
  for (const fact of guide.quickFacts) {
    assert.ok(hero.includes(escape(fact.value)), `${guide.id}: hero value`);
    assert.ok(hero.includes(escape(fact.label)), `${guide.id}: hero qualification`);
    for (const id of fact.sourceIds) assert.ok(hero.includes(`href="#quelle-${id}"`), `${guide.id}: hero citation`);
  }
  for (const section of guide.sections) {
    for (const text of [...section.paragraphs, ...(section.bullets || [])]) {
      assert.ok(body.includes(escape(text)), `${guide.id}: section text not rendered: ${text}`);
    }
    for (const row of section.module?.rows || []) {
      for (const text of [row.label, row.left, row.right]) {
        assert.ok(body.includes(escape(text)), `${guide.id}: programme metric lost: ${text}`);
      }
    }
  }
  for (const source of guide.sources) assert.ok(!source.url.includes('utm_'), 'No tracking URLs');
}
console.log('PASS: dossier numbers in HTML, two hero paragraphs, sourced hero qualifications, full section text and both programme columns.');