'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { loadGoogleMaps } from '@/lib/googleMapsLoader';
import type { RoofFace, RoofAnalysisResponse } from '@/lib/roofAnalysis';
import { roofCopy } from '@/lib/roofCopy';

declare global {
  interface Window {
    gm_authFailure?: () => void;
  }
}

type Locale = keyof typeof roofCopy;
type Coords = { lat: number; lng: number };
type Props = { address: string | null; coords?: Coords | null; manual: boolean; locale: Locale };
type Result = { status: RoofAnalysisResponse['status']; roofs: RoofFace[]; center?: Coords };

function roofCenter(roof?: RoofFace): Coords | undefined {
  const point = roof?.geometry?.type === 'Polygon'
    ? roof.geometry.coordinates?.[0]?.[0]
    : roof?.geometry?.coordinates?.[0]?.[0]?.[0];
  return Array.isArray(point) && Number.isFinite(point[0]) && Number.isFinite(point[1])
    ? { lat: point[1], lng: point[0] } : undefined;
}

function direction(angle: number, t: typeof roofCopy[Locale]) {
  const sectors = [t.south, t.southWest, t.west, t.northWest, t.north, t.northEast, t.east, t.southEast];
  return sectors[Math.floor((((angle % 360) + 360 + 22.5) % 360) / 45)];
}

function extendBounds(bounds: google.maps.LatLngBounds, coordinates: any): void {
  if (!Array.isArray(coordinates)) return;
  if (coordinates.length >= 2 && typeof coordinates[0] === 'number' && typeof coordinates[1] === 'number') {
    if (Number.isFinite(coordinates[0]) && Number.isFinite(coordinates[1])) {
      bounds.extend({ lat: coordinates[1], lng: coordinates[0] });
    }
  } else {
    coordinates.forEach((part: any) => extendBounds(bounds, part));
  }
}

export default function RoofAnalysis({ address, coords, manual, locale }: Props) {
  const t = roofCopy[locale];
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [mapError, setMapError] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const mapElement = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const mapFailed = useRef(false);
  const mapClick = useRef<google.maps.MapsEventListener | null>(null);
  const tileListener = useRef<google.maps.MapsEventListener | null>(null);
  const request = useRef<AbortController | null>(null);
  const currentAddress = useRef(address);
  const coordsRef = useRef(coords);
  coordsRef.current = coords;
  currentAddress.current = address;

  const fetchRoofs = async (buildingId?: string) => {
    if (!address) return;
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setLoading(true);
    let timedOut = false;
    const timeout = setTimeout(() => { timedOut = true; controller.abort(); }, 12000);
    try {
      const params = new URLSearchParams({ address });
      const point = coordsRef.current;
      if (point && Number.isFinite(point.lat) && Number.isFinite(point.lng)) {
        params.set('lat', point.lat.toFixed(7));
        params.set('lng', point.lng.toFixed(7));
      }
      if (buildingId) params.set('buildingId', buildingId);
      const response = await fetch(`/api/roof-analysis?${params}`, { signal: controller.signal });
      if (!response.ok) throw new Error(`Roof analysis HTTP ${response.status}`);
      const data: RoofAnalysisResponse = await response.json();
      if (!['ok', 'not_found', 'ambiguous', 'unavailable'].includes(data.status) || !Array.isArray(data.roofs)) {
        throw new Error('Invalid roof analysis response');
      }
      if (controller.signal.aborted || request.current !== controller || currentAddress.current !== address) return;
      setResult(data);
      if (data.status === 'ok') {
        setSelected(data.roofs.map(roof => roof.id));
      } else {
        setSelected([]);
      }
    } catch {
      if (request.current !== controller || currentAddress.current !== address || (controller.signal.aborted && !timedOut)) return;
      setResult({ status: 'unavailable', roofs: [] });
      setSelected([]);
    } finally {
      clearTimeout(timeout);
      if (request.current === controller && currentAddress.current === address && (!controller.signal.aborted || timedOut)) setLoading(false);
    }
  };

  useEffect(() => {
    request.current?.abort();
    setResult(null);
    setSelected([]);
    setLoading(false);
    setMapError(false);
    mapFailed.current = false;
    // Wait briefly for manual typing to settle; edits cancel stale lookups.
    const timer = address && manual ? setTimeout(() => { void fetchRoofs(); }, 700) : undefined;
    if (address && !manual) void fetchRoofs();
    return () => { clearTimeout(timer); request.current?.abort(); };
    // Address changes invalidate the entire analysis.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, manual]);

  const roofs = result?.roofs ?? [];
  const buildings = useMemo(() => [...new Set(roofs.map(roof => roof.buildingId))], [roofs]);
  const isAmbiguous = result?.status === 'ambiguous';
  const activeRoofs = result?.status === 'ok' ? roofs : [];
  const chosen = activeRoofs.filter(roof => selected.includes(roof.id));
  const center = result?.center ?? coords ?? roofCenter(roofs[0]);
  const showMap = roofs.length > 0 && !!center;

  // The Google key can be restricted to the production host. Never imply a map
  // is available until the Maps API actually loads.
  useEffect(() => {
    if (!showMap || !mapElement.current) return;
    let cancelled = false;
    let authFailed = false;
    mapFailed.current = false;
    let tilesTimedOut: ReturnType<typeof setTimeout> | undefined;
    const previousAuthFailure = window.gm_authFailure;
    const authFailure = () => {
      authFailed = true;
      mapFailed.current = true;
      if (!cancelled) { setMapError(true); setMapReady(false); }
      previousAuthFailure?.();
    };
    window.gm_authFailure = authFailure;
    setMapReady(false);
    setMapError(false);
    loadGoogleMaps().then(() => {
      if (cancelled || authFailed || !mapElement.current || !center) return;
      if (!window.google?.maps?.Map) throw new Error('Maps API unavailable');
      map.current = new google.maps.Map(mapElement.current, {
        center, zoom: 19, tilt: 0, heading: 0, mapTypeId: 'satellite', mapTypeControl: false,
        streetViewControl: false, fullscreenControl: false, zoomControl: true,
        gestureHandling: 'cooperative',
      });
      tileListener.current = map.current.addListener('tilesloaded', () => {
        if (cancelled || authFailed || mapFailed.current) return;
        if (tilesTimedOut) clearTimeout(tilesTimedOut);
        setMapReady(true);
      });
      tilesTimedOut = setTimeout(() => {
        authFailed = true;
        mapFailed.current = true;
        if (!cancelled) { setMapError(true); setMapReady(false); }
      }, 10000);
    }).catch(() => { if (!cancelled) { mapFailed.current = true; setMapError(true); setMapReady(false); } });
    return () => {
      cancelled = true;
      if (tilesTimedOut) clearTimeout(tilesTimedOut);
      if (window.gm_authFailure === authFailure) window.gm_authFailure = previousAuthFailure;
      tileListener.current?.remove();
      tileListener.current = null;
      mapClick.current?.remove();
      mapClick.current = null;
      map.current?.data.setMap(null);
      map.current = null;
    };
    // Recreate only for a different analysis, not on every checkbox click.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, showMap, result]);

  useEffect(() => {
    if (!mapReady || !map.current || !center || mapError) return;
    const layer = map.current.data;
    layer.forEach(feature => layer.remove(feature));
    mapClick.current?.remove();
    try {
      layer.addGeoJson({
        type: 'FeatureCollection',
        features: roofs.map(roof => ({
          type: 'Feature', id: roof.id, properties: { roofId: roof.id },
          geometry: roof.geometry,
        })),
      });
      const bounds = new google.maps.LatLngBounds();
      roofs.forEach(roof => extendBounds(bounds, roof.geometry.coordinates));
      if (!bounds.isEmpty()) {
        map.current.fitBounds(bounds, 24);
        const fittedMap = map.current;
        google.maps.event.addListenerOnce(fittedMap, 'idle', () => {
          if (map.current === fittedMap && (fittedMap.getZoom() ?? 20) > 20) fittedMap.setZoom(20);
        });
      }
      mapClick.current = layer.addListener('click', (event: google.maps.Data.MouseEvent) => {
        const id = String(event.feature.getProperty('roofId'));
        const roof = roofs.find(item => item.id === id);
        if (isAmbiguous) {
          if (roof) void fetchRoofs(roof.buildingId);
        } else {
          setSelected(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);
        }
      });
    } catch {
      mapFailed.current = true;
      setMapError(true);
      setMapReady(false);
    }
    return () => { mapClick.current?.remove(); mapClick.current = null; };
    // Geometry and bounds change only when analysis data changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapReady, mapError, result, isAmbiguous]);

  useEffect(() => {
    if (!mapReady || !map.current || mapError) return;
    map.current.data.setStyle(feature => {
      const id = String(feature.getProperty('roofId'));
      const isChosen = !isAmbiguous && selected.includes(id);
      return {
        fillColor: isChosen ? '#fcb210' : '#ffffff',
        fillOpacity: isChosen ? 0.55 : 0.16,
        strokeColor: isChosen ? '#e88a00' : '#ffffff',
        strokeWeight: isChosen ? 3 : 2,
        clickable: true,
      };
    });
  }, [mapReady, mapError, result, isAmbiguous, selected]);

  const area = chosen.reduce((total, roof) => total + roof.area, 0);
  const annual = chosen.reduce((total, roof) => total + roof.annualKwh, 0);
  const orientations = [...new Set(chosen.map(roof => roof.slope === 0 ? t.flat : direction(roof.orientation, t)))];
  const suitabilityClass = chosen.length
    ? Math.ceil(chosen.reduce((total, roof) => total + roof.suitability, 0) / chosen.length)
    : null;
  const number = (value: number) => new Intl.NumberFormat(locale === 'en' ? 'en-CH' : `${locale}-CH`, { maximumFractionDigits: 0 }).format(value);
  const stats = [
    [t.area, chosen.length ? `${number(area)} m²` : '—'],
    [t.orientation, chosen.length ? orientations.join(' / ') : '—'],
    [t.suitability, suitabilityClass !== null ? t.classes[suitabilityClass - 1] : '—'],
    [t.yield, chosen.length ? `${number(annual)} kWh` : '—'],
  ];

  if (!address) return null;
  if (manual && roofs.length === 0) {
    return loading
      ? <p role="status" aria-label={t.title} className="mt-3 text-sm text-gray-600">{t.loading}</p>
      : null;
  }
  return (
    <>
    <section className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5" aria-label={t.title}>
      <h2 className="text-base font-bold text-gray-900 mb-3">{t.title}</h2>
      {loading && <p role="status" className="mb-3 text-sm text-gray-600">{t.loading}</p>}
      {result?.status === 'unavailable' && <p role="status" className="mb-3 text-sm text-amber-800">{t.unavailable}</p>}
      {result?.status === 'not_found' && <p role="status" className="mb-3 text-sm text-gray-600">{t.notFound}</p>}
      {isAmbiguous && buildings.length === 0 && <p role="status" className="mb-3 text-sm text-amber-800">{t.unavailable}</p>}
      {isAmbiguous && buildings.length > 0 && (!showMap || mapError) && (
        <p role="status" className="mb-3 text-sm text-amber-800">{t.ambiguousNoMap}</p>
      )}
      {isAmbiguous && buildings.length > 0 && mapReady && !mapError && (
        <div className="mb-3">
          <p role="status" className="text-sm text-amber-800">{t.ambiguous}</p>
          <fieldset className="mt-2">
            <legend className="text-sm font-semibold text-gray-800">{t.chooseBuilding}</legend>
            <div className="flex flex-wrap gap-2 mt-2">
              {buildings.map((id, index) => (
                <button key={id} type="button" disabled={loading} onClick={() => void fetchRoofs(id)}
                  className="rounded-lg border border-amber-400 bg-amber-50 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-amber-500">
                  {t.building} {index + 1}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      )}
      {showMap && (
        <div className="relative mb-3 overflow-hidden rounded-xl border border-gray-200">
          <div ref={mapElement} className="h-[260px] w-full sm:h-[300px]" aria-label={t.title} />
          {!mapReady && (
            <p role="status" className="absolute inset-0 flex items-center justify-center bg-gray-100 px-4 text-center text-sm text-gray-700">
              {mapError ? t.mapUnavailable : t.mapLoading}
            </p>
          )}
        </div>
      )}
      {result?.status === 'ok' && activeRoofs.length > 0 && (
        <p className="mb-3 text-xs leading-relaxed text-gray-500">{t.selectRoofsInstruction}</p>
      )}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-[#fff8e8] p-3">
            <div className="text-xs text-gray-600">{label}</div>
            <div className="mt-1 text-sm font-bold text-gray-900">{value}</div>
          </div>
        ))}
      </div>
    </section>
    {roofs.length > 0 && (result?.status === 'ok' || isAmbiguous) && (
      <p className="mt-3 text-xs leading-relaxed text-gray-500">{t.disclaimer}</p>
    )}
    </>
  );
}