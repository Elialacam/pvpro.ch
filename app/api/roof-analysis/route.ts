import { NextRequest, NextResponse } from 'next/server';
import { analyzeRoof, validSwissPoint, type RoofAnalysisResponse } from '@/lib/roofAnalysis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const requests = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  // Memory bounded and ephemeral; do not store address or other lead data.
  if (requests.size > 500) {
    for (const [key, times] of requests) {
      if (times[times.length - 1] < now - 60_000) requests.delete(key);
    }
    if (requests.size > 500) requests.clear();
  }
  const times = (requests.get(ip) ?? []).filter(time => time > now - 60_000);
  requests.set(ip, times);
  if (times.length >= 10) return true;
  times.push(now);
  return false;
}

function reply(body: RoofAnalysisResponse, httpStatus = 200) {
  return NextResponse.json(body, {
    status: httpStatus,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return reply({ status: 'unavailable', roofs: [] }, 429);
  const params = request.nextUrl.searchParams;
  const address = params.get('address')?.trim();
  const buildingId = params.get('buildingId')?.trim();
  const latText = params.get('lat');
  const lngText = params.get('lng');
  if (
    (address !== undefined && address.length > 180) ||
    (buildingId !== undefined && !/^\d{1,20}$/.test(buildingId)) ||
    ((latText === null) !== (lngText === null)) ||
    (latText !== null && (
      !/^-?\d{1,3}(?:\.\d{1,10})?$/.test(latText) ||
      !/^-?\d{1,3}(?:\.\d{1,10})?$/.test(lngText!) ||
      !validSwissPoint(Number(latText), Number(lngText))
    )) ||
    (!address && !buildingId && latText === null)
  ) {
    return NextResponse.json({ error: 'Provide a valid Swiss address, coordinate pair or buildingId.' }, { status: 400 });
  }
  return reply(await analyzeRoof({
    address: address ?? undefined,
    buildingId: buildingId ?? undefined,
    lat: latText !== null ? Number(latText) : undefined,
    lng: lngText !== null ? Number(lngText) : undefined,
  }));
}