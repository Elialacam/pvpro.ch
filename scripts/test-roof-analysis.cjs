const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const Module = require('node:module');
const ts = require('typescript');

const source = fs.readFileSync(require.resolve('../lib/roofAnalysis.ts'), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: {
  module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017,
} }).outputText;
const mod = new Module(require.resolve('../lib/roofAnalysis.ts'), module);
mod.filename = require.resolve('../lib/roofAnalysis.ts');
mod.paths = module.paths;
mod._compile(compiled, mod.filename);
const { analyzeRoof } = mod.exports;
const originalFetch = global.fetch;
after(() => { global.fetch = originalFetch; });

const roof = (id, buildingId, egid) => ({
  id, properties: { building_id: buildingId, gwr_egid: egid, flaeche: 42,
    ausrichtung: -20, neigung: 30, klasse: 4, stromertrag: 7000 },
  geometry: { type: 'Polygon', coordinates: [[[7.4, 46.9], [7.5, 46.9], [7.5, 47], [7.4, 46.9]]] },
});
const address = (featureId, street = 'teststrasse 12 8000 zurich 261 zurich ch zh') => ({
  attrs: { detail: street, featureId, lat: 47.375, lon: 8.54 },
});

function stub({ search = [], identify = [], envelope = identify, found = [], failure = false }) {
  const paths = [];
  global.fetch = async url => {
    const u = new URL(url);
    paths.push(u);
    if (failure) return { ok: false, status: 503 };
    const results = u.pathname.endsWith('/SearchServer') ? search :
      u.pathname.endsWith('/identify') ?
        (u.searchParams.get('geometryType') === 'esriGeometryEnvelope' ? envelope : identify) : found;
    return { ok: true, json: async () => ({ results }) };
  };
  return paths;
}

test('exact official address resolves roof group, maps real property names and ignores coverage', async () => {
  const hits = [roof(91001, 80001, 1234567), { id: -99, geometry: { type: 'MultiPolygon', coordinates: [] } }];
  const paths = stub({ search: [address('9999999_0', 'teststrasse 13 8000 zurich'), address('1234567_0')],
    identify: hits, found: [hits[0], roof(91002, 80001, 1234567)] });
  const result = await analyzeRoof({ address: 'Teststrasse 12, 8000 Zürich' });
  assert.equal(result.status, 'ok');
  assert.equal(result.roofs.length, 2);
  assert.deepEqual(result.roofs[0], {
    id: '91001', buildingId: '80001', area: 42, orientation: -20,
    slope: 30, suitability: 4, annualKwh: 7000, geometry: hits[0].geometry,
  });
  assert.equal(paths[1].searchParams.get('geometry'), '8.54,47.375');
  assert.equal(paths[2].searchParams.get('searchField'), 'building_id');
  assert.equal(paths[2].searchParams.get('contains'), 'false');
});

test('wrong entrance EGID must require explicit selection', async () => {
  stub({ search: [address('999000_0')], identify: [roof(91003, 80002, 777000)],
    found: [roof(91003, 80002, 777000)] });
  const result = await analyzeRoof({ address: 'Teststrasse 12, 8000 Zürich' });
  assert.equal(result.status, 'ambiguous');
  assert.equal(result.roofs[0].buildingId, '80002');
});

test('fuzzy results and coverage alone cannot become selected roofs', async () => {
  stub({ search: [address('12345_0', 'teststrasse 13 8000 zurich')] });
  assert.equal((await analyzeRoof({ address: 'Teststrasse 12, 8000 Zürich' })).status, 'not_found');
  stub({ identify: [{ id: -99, geometry: { type: 'MultiPolygon', coordinates: [] } }] });
  assert.equal((await analyzeRoof({ lat: 47.375, lng: 8.54 })).status, 'not_found');
});

test('coordinate hit containing two buildings is ambiguous with both candidate IDs', async () => {
  stub({ identify: [roof(91004, 80003, 11), roof(91005, 80004, 22)],
    found: [roof(91004, 80003, 11), roof(91005, 80004, 22)] });
  const result = await analyzeRoof({ lat: 47.375, lng: 8.54 });
  assert.equal(result.status, 'ambiguous');
  assert.deepEqual(result.roofs.map(r => r.buildingId).sort(), ['80003', '80004']);
});

test('entrance outside polygon uses bounded envelope, matching EGID selects only its group', async () => {
  const paths = stub({ search: [address('456789_0')], identify: [roof(91007, 80007, 999999)],
    envelope: [roof(91007, 80007, 999999), roof(91008, 80008, 456789)],
    found: [roof(91008, 80008, 456789)] });
  const result = await analyzeRoof({ address: 'Teststrasse 12, 8000 Zürich' });
  assert.equal(result.status, 'ok');
  assert.deepEqual(result.roofs.map(r => r.buildingId), ['80008']);
  assert.equal(paths.length, 4);
  assert.equal(paths[2].searchParams.get('geometryType'), 'esriGeometryEnvelope');
  const box = paths[2].searchParams.get('geometry').split(',').map(Number);
  assert.ok(box[2] - box[0] < 0.001 && box[3] - box[1] < 0.001);
});

test('unmatched nearby roofs require confirmation, no automatic nearest choice and max 3 groups', async () => {
  const hits = Array.from({ length: 6 }, (_, index) => roof(92000 + index, 81000 + index, 70000 + index));
  const paths = stub({ identify: [], envelope: hits, found: hits });
  const result = await analyzeRoof({ lat: 47.375, lng: 8.54 });
  assert.equal(result.status, 'ambiguous');
  assert.equal(new Set(result.roofs.map(r => r.buildingId)).size, 3);
  assert.equal(paths.length, 5); // point, envelope, and only three group queries
});

test('map coordinates with address are not blindly trusted over official address', async () => {
  const paths = stub({ search: [address('456790_0')], identify: [roof(93001, 82001, 456790)],
    found: [roof(93001, 82001, 456790)] });
  const result = await analyzeRoof({ address: 'Teststrasse 12, 8000 Zürich', lat: 47.7, lng: 9.3 });
  assert.equal(result.status, 'ok');
  assert.equal(paths[1].searchParams.get('geometry'), '8.54,47.375');
});

test('different address spelling can offer coordinate candidates but never auto-confirm', async () => {
  stub({ search: [], identify: [roof(95001, 84001, 123456)],
    found: [roof(95001, 84001, 123456)] });
  const result = await analyzeRoof({ address: 'Different spelling 12, Zürich', lat: 47.375, lng: 8.54 });
  assert.equal(result.status, 'ambiguous');
  assert.equal(result.roofs[0].buildingId, '84001');
});

test('without postal code supplied town must match, invalid geometry/roof values rejected', async () => {
  stub({ search: [address('123456_0', 'teststrasse 12 9000 st gallen')], identify: [roof(94001, 83001, 123456)] });
  assert.equal((await analyzeRoof({ address: 'Teststrasse 12, Zürich, Switzerland' })).status, 'not_found');
  const invalid = [
    { ...roof(94002, 83002, 12), geometry: { type: 'Polygon', coordinates: [[[7.4, 'bad'], [7.5, 47], [7.6, 47], [7.4, 'bad']]] } },
    { ...roof(94003, 83003, 12), properties: { ...roof(94003, 83003, 12).properties, klasse: 7 } },
    { ...roof(94004, 83004, 12), properties: { ...roof(94004, 83004, 12).properties, stromertrag: -1 } },
  ];
  stub({ identify: invalid, envelope: invalid });
  assert.equal((await analyzeRoof({ lat: 47.375, lng: 8.54 })).status, 'not_found');
});

test('explicit building selection fetches official group and upstream errors are unavailable', async () => {
  const paths = stub({ found: [roof(91006, 80005, 33)] });
  assert.equal((await analyzeRoof({ buildingId: '80005' })).status, 'ok');
  assert.equal(paths.length, 1);
  stub({ failure: true });
  assert.equal((await analyzeRoof({ buildingId: '80006' })).status, 'unavailable');
});