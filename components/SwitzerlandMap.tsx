'use client';

import { useEffect, useRef } from 'react';
import { loadGoogleMaps } from '@/lib/googleMapsLoader';
import { swissBoundary } from '@/lib/swissBoundary';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const cities = [
  { canton: 'ZH', name: { de: 'Zürich', fr: 'Zurich', en: 'Zurich' }, lat: 47.3769, lng: 8.5417 },
  { canton: 'BE', name: { de: 'Bern', fr: 'Berne', en: 'Bern' }, lat: 46.948, lng: 7.4474 },
  { canton: 'BS', name: { de: 'Basel', fr: 'Bâle', en: 'Basel' }, lat: 47.5596, lng: 7.5886 },
  { canton: 'GE', name: { de: 'Genf', fr: 'Genève', en: 'Geneva' }, lat: 46.2044, lng: 6.1432 },
  { canton: 'VD', name: { de: 'Lausanne', fr: 'Lausanne', en: 'Lausanne' }, lat: 46.5197, lng: 6.6323 },
  { canton: 'LU', name: { de: 'Luzern', fr: 'Lucerne', en: 'Lucerne' }, lat: 47.0502, lng: 8.3093 },
  { canton: 'SG', name: { de: 'St. Gallen', fr: 'Saint-Gall', en: 'St. Gallen' }, lat: 47.4245, lng: 9.3767 },
  { canton: 'TI', name: { de: 'Lugano', fr: 'Lugano', en: 'Lugano' }, lat: 46.0037, lng: 8.9511 },
  { canton: 'VS', name: { de: 'Sitten', fr: 'Sion', en: 'Sion' }, lat: 46.2331, lng: 7.3606 },
  { canton: 'UR', name: { de: 'Uri', fr: 'Uri', en: 'Uri' }, lat: 46.77, lng: 8.6444 },
  { canton: 'GR', name: { de: 'Chur', fr: 'Coire', en: 'Chur' }, lat: 46.8508, lng: 9.5311 },
];

const uiText: Record<string, { badge: string; hint: string; popup: string; cta: string; formHref: string }> = {
  de: { badge: 'Schweiz', hint: 'Klicken Sie auf eine Stadt für Ihre Offerte', popup: 'Vergleichen Sie kostenlos bis zu 3 Offerten von geprüften Solarteuren in Ihrer Nähe.', cta: 'Offerte anfordern →', formHref: '/anfrage' },
  fr: { badge: 'Suisse', hint: 'Cliquez sur une ville pour votre devis', popup: 'Comparez gratuitement jusqu\u2019à 3 devis d\u2019installateurs certifiés près de chez vous.', cta: 'Demander un devis →', formHref: '/fr/demande' },
  en: { badge: 'Switzerland', hint: 'Click on a city for your quote', popup: 'Compare up to 3 free quotes from certified installers near you.', cta: 'Request a quote →', formHref: '/en/request' },
};

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

function markerIcon(g: any, labelBelow?: boolean) {
  return {
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    fillColor: '#F97316',
    fillOpacity: 1,
    strokeColor: '#FFFFFF',
    strokeWeight: 2,
    scale: 1.05,
    labelOrigin: new g.maps.Point(0, labelBelow ? 12 : -52),
  };
}

export default function SwitzerlandMap() {
  const locale = useLocale() as Locale;
  const t = uiText[locale] || uiText.de;
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    const init = () => {
      if (initialized.current || !mapRef.current || !(window as any).google?.maps) return;
      initialized.current = true;
      const g = window.google as any;

      const bounds = new g.maps.LatLngBounds();
      swissBoundary.forEach((p) => bounds.extend(p));

      const map = new g.maps.Map(mapRef.current, {
        mapTypeId: 'satellite',
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
        restriction: {
          latLngBounds: {
            north: bounds.getNorthEast().lat() + 1.5,
            south: bounds.getSouthWest().lat() - 1.5,
            east: bounds.getNorthEast().lng() + 2.0,
            west: bounds.getSouthWest().lng() - 2.0,
          },
          strictBounds: true,
        },
        backgroundColor: '#f9fafb',
      });
      map.fitBounds(bounds, { top: 20, bottom: 20, left: 20, right: 20 });
      g.maps.event.addListenerOnce(map, 'idle', () => {
        map.setZoom(map.getZoom() - 1);
      });

      // Dim everything outside Switzerland: world ring + Switzerland hole
      const worldRing = [
        { lat: 85, lng: -180 },
        { lat: 85, lng: 0 },
        { lat: 85, lng: 179.9 },
        { lat: -85, lng: 179.9 },
        { lat: -85, lng: 0 },
        { lat: -85, lng: -180 },
      ];
      new g.maps.Polygon({
        paths: [worldRing, [...swissBoundary].reverse()],
        strokeOpacity: 0,
        fillColor: '#0b1220',
        fillOpacity: 0.78,
        clickable: false,
        map,
      });

      // Soft outer glow around the boundary
      new g.maps.Polyline({
        path: [...swissBoundary, swissBoundary[0]],
        strokeColor: '#FB923C',
        strokeOpacity: 0.35,
        strokeWeight: 11,
        clickable: false,
        map,
      });

      // Switzerland highlight
      new g.maps.Polygon({
        paths: swissBoundary,
        strokeColor: '#F97316',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillOpacity: 0,
        clickable: false,
        map,
      });

      const infoWindow = new g.maps.InfoWindow();

      cities.forEach((city, i) => {
        const name = city.name[locale as 'de' | 'fr' | 'en'] || city.name.de;
        const marker = new g.maps.Marker({
          position: { lat: city.lat, lng: city.lng },
          map,
          title: name,
          icon: markerIcon(g, (city as any).labelBelow),
          label: {
            text: name,
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
            `<div style="font-family:inherit;padding:2px 0;max-width:180px">
               <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
                 <span style="font-weight:700;font-size:14px;color:#1F2937">${name}</span>
                 <img src="/images/cantons/${(city as any).canton.toLowerCase()}.png" alt="${(city as any).canton}" style="height:18px;width:auto" />
               </div>
               <div style="color:#374151;font-size:12px;line-height:1.4;margin-bottom:8px">${t.popup}</div>
               <a href="${t.formHref}" style="display:inline-block;background:#F97316;color:#fff;font-weight:600;font-size:13px;padding:6px 12px;border-radius:8px;text-decoration:none">${t.cta}</a>
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
  }, [locale, t.cta, t.formHref]);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        style={{ height: '480px' }}
        aria-label={t.badge}
      />
      <div className="absolute top-4 left-4 bg-gray-900/85 backdrop-blur rounded-xl shadow-lg px-4 py-2.5 pointer-events-none">
        <div className="text-sm font-bold text-white">{t.badge}</div>
        <div className="text-xs text-gray-300">{t.hint}</div>
      </div>
    </div>
  );
}
