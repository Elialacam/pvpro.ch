/** Public Swiss Federal Geoportal roof-suitability data (WGS84). */
export interface RoofFace {
  id: string;
  buildingId: string;
  area: number;
  orientation: number;
  slope: number;
  suitability: number;
  annualKwh: number;
  geometry: { type: 'Polygon' | 'MultiPolygon'; coordinates: any };
}

export interface RoofAnalysisResponse {
  status: 'ok' | 'not_found' | 'ambiguous' | 'unavailable';
  roofs: RoofFace[];
  center?: { lat: number; lng: number };
}

const API = 'https://api3.geo.admin.ch/rest/services/api';
const LAYER = 'ch.bfe.solarenergie-eignung-daecher';
const EMPTY: RoofAnalysisResponse = { status: 'not_found', roofs: [] };
const TIMEOUT_MS = 4500;
const MAX_FACES = 150;
const MAX_GROUPS = 3;

type Feature = {
  id?: unknown;
  featureId?: unknown;
  properties?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
  geometry?: { type?: string; coordinates?: unknown };
};

type SearchResult = {
  attrs?: { detail?: string; label?: string; featureId?: string; lat?: number; lon?: number; x?: number; y?: number };
};

function isNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function validGeometry(type: string, coordinates: unknown): boolean {
  const polygons = type === 'Polygon' ? [coordinates] : coordinates;
  if (!Array.isArray(polygons) || !polygons.length || polygons.length > 100) return false;
  let points = 0;
  return polygons.every(polygon => Array.isArray(polygon) && polygon.length > 0 && polygon.length <= 100 &&
    polygon.every((ring: unknown) => Array.isArray(ring) && ring.length >= 4 && ring.length <= 5000 &&
      ring.every((point: unknown) => {
        points++;
        return points <= 5000 && Array.isArray(point) && point.length >= 2 &&
          isNumber(point[0]) && isNumber(point[1]) &&
          point[0] >= -180 && point[0] <= 180 && point[1] >= -90 && point[1] <= 90;
      })));
}

export function validSwissPoint(lat: number, lng: number): boolean {
  return Number.isFinite(lat) && Number.isFinite(lng) && lat >= 45.8 && lat <= 47.9 && lng >= 5.9 && lng <= 10.6;
}

function extractFace(feature: Feature): RoofFace | null {
  if (String(feature.id ?? feature.featureId) === '-99') return null; // coverage extent, not a roof
  const p = feature.properties ?? feature.attributes;
  const g = feature.geometry;
  if (!p || !g || (g.type !== 'Polygon' && g.type !== 'MultiPolygon') ||
    !validGeometry(g.type, g.coordinates)) return null;
  const buildingId = String(p.building_id ?? '');
  const id = String(feature.id ?? feature.featureId ?? '');
  if (!/^\d+$/.test(buildingId) || !/^\d+$/.test(id)) return null;
  const values = [p.flaeche, p.ausrichtung, p.neigung, p.klasse, p.stromertrag];
  if (!values.every(isNumber)) return null;
  if ((p.flaeche as number) < 0 || (p.stromertrag as number) < 0 ||
    (p.ausrichtung as number) < -360 || (p.ausrichtung as number) > 360 ||
    (p.neigung as number) < 0 || (p.neigung as number) > 90 ||
    !Number.isInteger(p.klasse) || (p.klasse as number) < 1 || (p.klasse as number) > 5) return null;
  return {
    id, buildingId, area: values[0] as number, orientation: values[1] as number,
    slope: values[2] as number, suitability: values[3] as number,
    annualKwh: values[4] as number,
    geometry: { type: g.type, coordinates: g.coordinates },
  };
}

// Fair-use guard across requests within this server instance. Distributed deployments
// need an upstream/shared rate limiter for a strict cross-instance quota.
const upstreamCalls: number[] = [];
async function official(path: string, params: URLSearchParams): Promise<any> {
  const now = Date.now();
  while (upstreamCalls.length && upstreamCalls[0] <= now - 60_000) upstreamCalls.shift();
  if (upstreamCalls.length >= 36) throw new Error('Geoportal rate limit reached');
  upstreamCalls.push(now);
  const response = await fetch(`${API}${path}?${params}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Geoportal HTTP ${response.status}`);
  const data = await response.json();
  if (!data || !Array.isArray(data.results)) throw new Error('Invalid Geoportal response');
  return data;
}

const roofCache = new Map<string, { expires: number; roofs: RoofFace[] }>();
const pendingRoofs = new Map<string, Promise<RoofFace[]>>();

async function group(buildingId: string): Promise<RoofFace[]> {
  const cached = roofCache.get(buildingId);
  if (cached && cached.expires > Date.now()) return cached.roofs;
  if (cached) roofCache.delete(buildingId);
  const pending = pendingRoofs.get(buildingId);
  if (pending) return pending;
  const task = (async () => {
    const data = await official('/MapServer/find', new URLSearchParams({
      layer: LAYER, searchField: 'building_id', searchText: buildingId, contains: 'false',
      returnGeometry: 'true', geometryFormat: 'geojson', sr: '4326',
    }));
    if (data.results.length > MAX_FACES) throw new Error('Geoportal roof group too large');
    const roofs = data.results.map(extractFace).filter((face: RoofFace | null): face is RoofFace =>
      face !== null && face.buildingId === buildingId);
    if (roofCache.size >= 100) roofCache.delete(roofCache.keys().next().value!);
    roofCache.set(buildingId, { expires: Date.now() + 10 * 60_000, roofs });
    return roofs;
  })();
  pendingRoofs.set(buildingId, task);
  try { return await task; } finally { pendingRoofs.delete(buildingId); }
}

async function identify(lat: number, lng: number, envelope = false): Promise<Feature[]> {
  // Roughly 30 m on each side. The API requires comma-separated envelope
  // coordinates; an ESRI JSON geometry is rejected by this endpoint.
  const longitudeRadius = 30 / (111_320 * Math.cos(lat * Math.PI / 180));
  const latitudeRadius = 30 / 111_320;
  const data = await official('/MapServer/identify', new URLSearchParams({
    geometry: envelope
      ? `${lng - longitudeRadius},${lat - latitudeRadius},${lng + longitudeRadius},${lat + latitudeRadius}`
      : `${lng},${lat}`,
    geometryType: envelope ? 'esriGeometryEnvelope' : 'esriGeometryPoint', tolerance: '0',
    layers: `all:${LAYER}`, geometryFormat: 'geojson', sr: '4326',
    returnGeometry: 'true',
  }));
  return data.results;
}

function normal(text: string): string {
  return text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

// Require an exact street + house number and, when supplied, exact postal code.
// SearchServer is fuzzy: result ordering/weight must never decide the property.
function matchesAddress(query: string, result: SearchResult): boolean {
  const input = normal(query);
  const detail = normal(result.attrs?.detail ?? '');
  const streetAndNumber = input.match(/^(.*?)\s+(\d+[a-z]?)\b/);
  if (!streetAndNumber || !detail) return false;
  const prefix = `${streetAndNumber[1]} ${streetAndNumber[2]}`;
  if (!detail.startsWith(`${prefix} `)) return false;
  const zip = input.match(/\b([1-9]\d{3})\b/);
  if (zip && !detail.slice(prefix.length).split(' ').includes(zip[1])) return false;
  // Compare supplied town even when the input has no postal code (Google's
  // common "Street 12, Town, Switzerland" format).
  const location = input.slice(zip ? input.indexOf(zip[1]) + 4 : prefix.length).trim()
    .replace(/\s+(ch|switzerland|schweiz|suisse|svizzera)$/, '').trim();
  if (location && !(zip
    ? detail.includes(`${zip[1]} ${location} `) || detail.endsWith(`${zip[1]} ${location}`)
    : new RegExp(`\\b\\d{4} ${location}(?: |$)`).test(detail))) return false;
  return true;
}

function candidateEgid(result: SearchResult): string | undefined {
  // SearchServer address featureId is typically EGID_entrance (not roof building_id).
  const id = result.attrs?.featureId?.match(/^(\d+)_\d+$/);
  return id?.[1];
}

async function atPoint(lat: number, lng: number, expectedEgid?: string): Promise<RoofAnalysisResponse> {
  const center = { lat, lng };
  const toHits = (features: Feature[]) => features.map(feature => ({ feature, face: extractFace(feature) }))
    .filter((hit): hit is { feature: Feature; face: RoofFace } => !!hit.face);
  const pointHits = toHits(await identify(lat, lng));
  const egid = (hit: { feature: Feature }) =>
    String((hit.feature.properties ?? hit.feature.attributes)?.gwr_egid ?? '');
  const pointMatch = expectedEgid && pointHits.some(hit => egid(hit) === expectedEgid);
  // Entrances can be outside their building's polygon or on a neighbour's.
  // Only the official address EGID is evidence sufficient for auto-selection.
  const nearby = !pointHits.length || (expectedEgid && !pointMatch);
  const hits = nearby ? [...pointHits, ...toHits(await identify(lat, lng, true))] : pointHits;
  const matched = expectedEgid ? hits.filter(hit => egid(hit) === expectedEgid) : [];
  const matchedIds = [...new Set(matched.map(hit => hit.face.buildingId))];
  const allIds = [...new Set(hits.map(hit => hit.face.buildingId))];
  if (!allIds.length) return { ...EMPTY, center };
  // Multiple roofs with the same matching EGID and building_id form one
  // property; multiple building IDs still require an explicit choice.
  const confirmed = !!expectedEgid && matchedIds.length === 1;
  const ids = (matchedIds.length ? matchedIds : allIds).slice(0, MAX_GROUPS);
  const roofs = (await Promise.all(ids.map(group))).flat();
  return { status: confirmed ? 'ok' : 'ambiguous', roofs, center };
}

export async function analyzeRoof(input: {
  address?: string; lat?: number; lng?: number; buildingId?: string;
}): Promise<RoofAnalysisResponse> {
  try {
    if (input.buildingId) {
      const roofs = await group(input.buildingId);
      const center = input.lat !== undefined && input.lng !== undefined ? { lat: input.lat, lng: input.lng } : undefined;
      return { status: roofs.length ? 'ok' : 'not_found', roofs, ...(center && { center }) };
    }
    // A map pin is not proof of address ownership. When an address is present
    // use its official entrance/EGID instead of trusting displaced map coords.
    if (!input.address && input.lat !== undefined && input.lng !== undefined)
      return await atPoint(input.lat, input.lng);
    if (!input.address) return EMPTY;
    const data = await official('/SearchServer', new URLSearchParams({
      type: 'locations', origins: 'address', sr: '4326', searchText: input.address,
    }));
    const matches = (data.results as SearchResult[]).filter(result => matchesAddress(input.address!, result))
      .filter(result => {
        const a = result.attrs;
        return a && validSwissPoint(a.lat ?? a.y ?? NaN, a.lon ?? a.x ?? NaN);
      });
    if (!matches.length) {
      // Google and official address spelling can differ. A coordinate search
      // can still offer candidates, but never auto-confirm an unverified pin.
      if (input.lat !== undefined && input.lng !== undefined)
        return await atPoint(input.lat, input.lng);
      return EMPTY;
    }
    // No automatic choice between distinct official address/entrance candidates.
    const unique = [...new Map(matches.map(result => [
      `${result.attrs?.featureId ?? ''}:${result.attrs?.lat ?? result.attrs?.y}:${result.attrs?.lon ?? result.attrs?.x}`, result,
    ])).values()];
    if (unique.length > 1) {
      // Bound lookups; return clickable roof groups from identifiable candidate points.
      const candidates = await Promise.all(unique.slice(0, MAX_GROUPS).map(async result => {
        const a = result.attrs!;
        return atPoint(a.lat ?? a.y!, a.lon ?? a.x!, candidateEgid(result));
      }));
      return {
        status: 'ambiguous', roofs: [...new Map(candidates.flatMap(c => c.roofs).map(r => [r.id, r])).values()],
        center: { lat: unique[0].attrs!.lat ?? unique[0].attrs!.y!, lng: unique[0].attrs!.lon ?? unique[0].attrs!.x! },
      };
    }
    const result = unique[0];
    return await atPoint(result.attrs!.lat ?? result.attrs!.y!, result.attrs!.lon ?? result.attrs!.x!, candidateEgid(result));
  } catch {
    // Upstream timeout, invalid data, or fair-use limit: never misreport as "no roof".
    return { status: 'unavailable', roofs: [] };
  }
}