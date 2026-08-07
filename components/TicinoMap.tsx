'use client';

import { useEffect, useRef } from 'react';
import { loadGoogleMaps } from '@/lib/googleMapsLoader';
import { ticinoBoundary } from '@/lib/ticinoBoundary';

const cities = [
  { name: 'Bellinzona', lat: 46.1947, lng: 9.0244, tagline: 'La capitale del Cantone' },
  { name: 'Locarno', lat: 46.167, lng: 8.7943, tagline: 'Sul Lago Maggiore' },
  { name: 'Lugano', lat: 46.0037, lng: 8.9511, tagline: 'Il cuore economico' },
  { name: 'Mendrisio', lat: 45.8704, lng: 8.9831, tagline: 'Il Mendrisiotto' },
];

const mapStyles = [
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', stylers: [{ visibility: 'off' }] },
  { featureType: 'administrative', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#d1d5db' }] },
  { featureType: 'administrative.province', stylers: [{ visibility: 'off' }] },
  { featureType: 'landscape', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry.fill', stylers: [{ color: '#a5cdf5' }] },
  { featureType: 'landscape.natural', elementType: 'geometry.fill', stylers: [{ saturation: -35 }, { lightness: 12 }] },
];

function markerIcon(g: any) {
  return {
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    fillColor: '#F97316',
    fillOpacity: 1,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    scale: 1.05,
    labelOrigin: new g.maps.Point(0, -52),
  };
}

export default function TicinoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const init = () => {
      if (initialized.current || !mapRef.current || !(window as any).google?.maps) return;
      initialized.current = true;
      const g = window.google as any;

      const bounds = new g.maps.LatLngBounds();
      ticinoBoundary.forEach((p) => bounds.extend(p));

      const map = new g.maps.Map(mapRef.current, {
        mapTypeId: 'satellite',
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
        restriction: {
          latLngBounds: {
            north: bounds.getNorthEast().lat() + 0.35,
            south: bounds.getSouthWest().lat() - 0.35,
            east: bounds.getNorthEast().lng() + 0.5,
            west: bounds.getSouthWest().lng() - 0.5,
          },
          strictBounds: true,
        },
        backgroundColor: '#f9fafb',
      });
      map.fitBounds(bounds, { top: 20, bottom: 20, left: 20, right: 20 });

      // Dim everything outside Ticino: world ring + Ticino hole
      const worldRing = [
        { lat: 85, lng: -180 },
        { lat: 85, lng: 0 },
        { lat: 85, lng: 179.9 },
        { lat: -85, lng: 179.9 },
        { lat: -85, lng: 0 },
        { lat: -85, lng: -180 },
      ];
      new g.maps.Polygon({
        paths: [worldRing, [...ticinoBoundary].reverse()],
        strokeOpacity: 0,
        fillColor: '#0b1220',
        fillOpacity: 0.78,
        clickable: false,
        map,
      });

      // Soft outer glow around the boundary
      new g.maps.Polyline({
        path: [...ticinoBoundary, ticinoBoundary[0]],
        strokeColor: '#FB923C',
        strokeOpacity: 0.35,
        strokeWeight: 11,
        clickable: false,
        map,
      });

      // Ticino highlight
      new g.maps.Polygon({
        paths: ticinoBoundary,
        strokeColor: '#F97316',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillOpacity: 0,
        clickable: false,
        map,
      });

      const infoWindow = new g.maps.InfoWindow();

      cities.forEach((city, i) => {
        const marker = new g.maps.Marker({
          position: { lat: city.lat, lng: city.lng },
          map,
          title: city.name,
          icon: markerIcon(g),
          label: {
            text: city.name,
            className: 'ticino-map-label',
            color: '#111827',
            fontWeight: '700',
            fontSize: '12px',
          },
          animation: g.maps.Animation.DROP,
          zIndex: 10 + i,
        });

        marker.addListener('mouseover', () => marker.setAnimation(g.maps.Animation.BOUNCE));
        marker.addListener('mouseout', () => marker.setAnimation(null));
        marker.addListener('click', () => {
          infoWindow.setContent(
            `<div style="font-family:inherit;padding:4px 2px;min-width:190px">
               <div style="font-weight:700;font-size:15px;color:#1F2937;margin-bottom:2px">${city.name}</div>
               <div style="color:#6B7280;font-size:12px;margin-bottom:10px">${city.tagline}</div>
               <a href="/it/richiesta" style="display:inline-block;background:#F97316;color:#fff;font-weight:600;font-size:13px;padding:8px 14px;border-radius:8px;text-decoration:none">Richiedi preventivo →</a>
             </div>`
          );
          infoWindow.open({ map, anchor: marker });
        });
      });
    };

    let cancelled = false;
    loadGoogleMaps()
      .then(() => { if (!cancelled) init(); })
      .catch(() => { /* map stays hidden; loader allows retry on next mount */ });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        style={{ height: '480px' }}
        aria-label="Mappa interattiva del Ticino con le principali città"
      />
      <div className="absolute top-4 left-4 bg-gray-900/85 backdrop-blur rounded-xl shadow-lg px-4 py-2.5 pointer-events-none">
        <div className="text-sm font-bold text-white">Canton Ticino</div>
        <div className="text-xs text-gray-300">Clicca su una città per il tuo preventivo</div>
      </div>
    </div>
  );
}
