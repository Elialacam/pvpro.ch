#!/usr/bin/env node
/*
 * Focused acceptance audit for the five dossier (16–20) guides.
 * This intentionally does not import or run the broader canton audit.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const resolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...args) {
  return resolveFilename.call(this, request.startsWith('@/') ? path.join(root, request.slice(2)) : request, parent, ...args);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (mod, filename) => mod._compile(ts.transpileModule(
    fs.readFileSync(filename, 'utf8'),
    {
      fileName: filename,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    },
  ).outputText, filename);
}

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { cantonGuides } = require('../lib/canton-guides');
const GuidePage = require('../components/CantonGuidePage').default;

const expected = {
  schwyz: {
    h1: 'Solaranlage im Kanton Schwyz: Eigenstrompflicht, Solarkataster und Förderung 2026',
    module: 'solar-cadastre-check',
    facts: ['10 W/m²', '30 kW', '1’120 kWh/m²', 'keine Ersatzabgabe', '20 Tage'],
    faq: [
      ['Muss jeder Neubau in Schwyz eine PV-Anlage haben?', 'Nein. Entscheidend sind unter anderem Standort im Solarkataster, Globalstrahlung und Ausnahmen nach §24d kEnV.'],
      ['Wie gross muss die Anlage sein?', 'Mindestens 10 W pro m² EBF, wobei nicht mehr als 30 kW verlangt werden.'],
      ['Kann ich stattdessen eine Ersatzabgabe bezahlen?', 'Nein.'],
      ['Wie früh muss ich eine Solaranlage melden?', 'In der Regel mindestens 20 Tage vor Baubeginn, wenn das Meldeverfahren anwendbar ist.'],
      ['Fördert der Kanton Schwyz Photovoltaik?', 'Normale PV-Anlagen werden kantonal nicht direkt gefördert; dafür gibt es die Bundesförderung über Pronovo.'],
    ],
  },
  solothurn: {
    h1: 'Solaranlage im Kanton Solothurn: Was 2026 wirklich gilt',
    module: 'current-law-comparison',
    facts: ['9. Februar 2025', '30 Tage', 'eBauSO', 'Pronovo', 'geplante Förderboni'],
    faq: [
      ['Gibt es 2026 eine allgemeine PV-Pflicht für Neubauten in Solothurn?', 'Nein, nicht aufgrund der 2025 abgelehnten Totalrevision.'],
      ['Wie früh muss ich meine Solaranlage melden?', 'Mindestens 30 Tage vor Baubeginn.'],
      ['Wo erfolgt die Meldung?', 'Bei der zuständigen Baubehörde; eBauSO unterstützt eine eigene Meldung Solaranlage.'],
      ['Gibt es kantonale PV-Fördergelder?', 'Für normale PV-Anlagen ist die Bundesförderung über Pronovo zentral; kantonale Gebäudeförderprogramme betreffen andere Massnahmen.'],
      ['Wird eine Hausbatterie gefördert?', 'Ein allgemeiner kantonaler Direktbeitrag konnte für 2026 nicht bestätigt werden; steuerliche Abzüge können bei bestehenden Gebäuden relevant sein.'],
    ],
  },
  'st-gallen': {
    h1: 'Solaranlage im Kanton St. Gallen: Eigenstrompflicht und Ersatzabgabe 2026',
    module: 'compliance-options',
    facts: ['10 W/m²', '30 kW', 'CHF 2’700/kWp', '5 kWh/m²', '30 Tage'],
    faq: [
      ['Wie gross muss die Eigenstromanlage bei einem Neubau sein?', '10 W/m² EBF, maximal 30 kW Pflicht.'],
      ['Kann ich statt PV eine Abgabe bezahlen?', 'Ja, CHF 2’700 pro erforderlichem kWp.'],
      ['Kann ich die Pflicht über höhere Energieeffizienz erfüllen?', 'Ja, mit einer zusätzlichen Reduktion des gewichteten Energiebedarfs um 5 kWh/m²/Jahr.'],
      ['Wie lange dauert das Meldeverfahren?', '30 Tage.'],
      ['Fördert der Kanton meine normale PV-Anlage direkt?', 'Die reguläre PV-Förderung läuft primär über Pronovo; kommunale Programme sind separat zu prüfen.'],
    ],
  },
  tessin: {
    h1: 'Solaranlage im Tessin: Förderung, Eigenstrompflicht und FER 2026',
    module: 'fer-procedure',
    facts: ['10 W/m²', 'CU-FV', '50%', 'Rmin FER 2026', '12 Monate'],
    faq: [
      ['Gibt es im Tessin eine Eigenstrompflicht für Neubauten?', 'Ja, grundsätzlich 10 W/m² neuer Energiebezugsfläche.'],
      ['Gilt die frühere 300-m²-Regel noch?', 'Nein, Art. 36 war ausdrücklich bis zum 31.12.2025 befristet.'],
      ['Fördert der Kanton Tessin PV zusätzlich zu Pronovo?', 'Ja, über den CU-FV des FER unter den gesetzlichen Bedingungen.'],
      ['Wie hoch ist der kantonale Beitrag?', 'Bis 30 kW grundsätzlich 50% der massgebenden RU-CH; für grössere Anlagen gilt eine gestaffelte Formel.'],
      ['Bis wann muss die Inbetriebnahme beim FER gemeldet werden?', 'Spätestens zwölf Monate nach dem Netzanschluss.'],
      ['Kann eine CU-FER-Anlage an einer CLE teilnehmen?', 'Ja, seit 1. Januar 2026.'],
    ],
  },
  thurgau: {
    h1: 'Solaranlage im Thurgau: Eigenstrompflicht und Regeln für Neubauten 2026',
    module: 'efficiency-decision',
    facts: ['30 W/m²', '15 W/m²', '10 kWh pro m²', '5 kWh/m² pro Jahr', '20 Tage'],
    faq: [
      ['Wie viel Eigenstrom muss ein Neubau im Thurgau erzeugen?', '30 W/m² Energiebezugsfläche.'],
      ['Kann ich weniger PV installieren?', 'Ja, wenn der Energiebedarf gemäss Ersatzlösung zusätzlich reduziert wird.'],
      ['Gilt die 85%-Globalstrahlungs-Regel automatisch für jedes private Dach?', 'Nicht als allgemeine Aussage aus der aktuell geltenden §4c-Regel; diese steht in der Vorbildfunktion der öffentlichen Hand.'],
      ['Wie früh muss eine bewilligungsfreie Solaranlage gemeldet werden?', 'Bei den von §50b erfassten Anlagen 20 Tage vor Baubeginn.'],
      ['Ist die Energiegesetzrevision vom September 2026 schon verbindlich?', 'Der Grosse Rat hat die Beratung abgeschlossen; für ein konkretes Projekt ist die tatsächlich in Kraft stehende Gesetzesfassung massgebend.'],
    ],
  },
};

const guides = cantonGuides.filter(guide => expected[guide.id]);
assert.equal(guides.length, 5, 'exactly the five final guides must be registered');
assert.equal(Object.values(expected).reduce((n, guide) => n + guide.faq.length, 0), 26);
const unescape = value => value
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x3D;/g, '=')
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
  .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)));
const bodyText = html => html
  .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&(?:amp|lt|gt|quot|#x27|#x3D);/g, entity => unescape(entity))
  .replace(/\s+/g, ' ');

const report = [];
for (const guide of guides) {
  const spec = expected[guide.id];
  assert.equal(guide.h1, spec.h1, `${guide.id}: exact dossier H1`);
  assert.equal(guide.faqs.length, spec.faq.length, `${guide.id}: FAQ count`);
  assert.equal(new Set(guide.faqs.map(faq => faq.question)).size, guide.faqs.length, `${guide.id}: duplicate FAQ`);
  assert.equal(guide.sections.filter(section => section.module).length, 1, `${guide.id}: exactly one distinctive module`);
  assert.equal(guide.sections.find(section => section.module)?.module.kind, spec.module, `${guide.id}: module type`);

  const sourceIds = new Set(guide.sources.map(source => source.id));
  assert.equal(sourceIds.size, guide.sources.length, `${guide.id}: duplicate source IDs`);
  for (const source of guide.sources) {
    assert.match(source.url, /^https:\/\//, `${guide.id}: source is not HTTPS: ${source.id}`);
    assert.ok(!source.url.includes('PENDING'), `${guide.id}: unresolved source: ${source.id}`);
  }
  const checkSourceIds = value => {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value.sourceIds)) for (const id of value.sourceIds) assert.ok(sourceIds.has(id), `${guide.id}: unknown source ${id}`);
    for (const child of Object.values(value)) checkSourceIds(child);
  };
  checkSourceIds(guide);

  const html = renderToStaticMarkup(React.createElement(GuidePage, { guide, mapSection: null }));
  const h1s = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/g) || [];
  assert.equal(h1s.length, 1, `${guide.id}: one H1`);
  assert.equal(unescape(h1s[0].replace(/<[^>]+>/g, '')), spec.h1, `${guide.id}: rendered H1`);
  assert.equal((html.match(/href="\/anfrage\?canton=/g) || []).length, 3, `${guide.id}: three context-aware /anfrage CTAs`);
  assert.equal((html.match(/>Bis zu 3 Solarofferten vergleichen<\/a>/g) || []).length, 3, `${guide.id}: CTA label`);
  assert.equal((html.match(/"@type":"FAQPage"/g) || []).length, 1, `${guide.id}: one FAQPage schema`);

  const visibleFaq = [...html.matchAll(/<dt data-faq-question(?:="[^"]*")?>([\s\S]*?)<\/dt>\s*<dd><span data-faq-answer(?:="[^"]*")?>([\s\S]*?)<\/span>/g)]
    .map(match => [unescape(match[1]), unescape(match[2])]);
  assert.deepEqual(visibleFaq, spec.faq, `${guide.id}: visible FAQ differs from dossier`);
  const schemaScript = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(schemaScript, `${guide.id}: missing FAQ schema`);
  const schema = JSON.parse(schemaScript);
  assert.deepEqual(schema.mainEntity.map(item => [item.name, item.acceptedAnswer.text]), spec.faq, `${guide.id}: FAQ schema differs from visible FAQ`);

  const text = bodyText(html);
  const normalizedText = text.toLocaleLowerCase('de-CH');
  for (const fact of spec.facts) {
    assert.ok(normalizedText.includes(fact.toLocaleLowerCase('de-CH')), `${guide.id}: critical fact missing from rendered HTML: ${fact}`);
  }
  assert.ok(!text.includes('ß'), `${guide.id}: Swiss spelling must use ss`);
  assert.ok(!/30% Förderung garantiert|führende Vergleichsplattform|geprüfte Fachbetriebe|ROI/i.test(text), `${guide.id}: unsupported claim`);
  report.push({ canton: guide.id, h1: 'OK', module: spec.module, faq: visibleFaq.length, sources: guide.sources.length, cta: 3 });
}

console.table(report);
console.log('PASS: five final dossier guides; exact H1/FAQ pairs; 26 visible/schema FAQs; five unique modules; sourced HTML; qualified critical facts; three /anfrage CTAs.');