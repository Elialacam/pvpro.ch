'use client';

import { useEffect, useRef, useState } from 'react';

const copy = {
  de: { label: 'Satellitenansicht Ihrer Liegenschaft', error: 'Die Satellitenansicht ist nicht verfügbar. Sie können trotzdem fortfahren.' },
  fr: { label: 'Vue satellite de votre maison', error: 'La vue satellite est indisponible. Vous pouvez continuer.' },
  it: { label: 'Vista satellitare della tua casa', error: 'La vista satellitare non è disponibile. Puoi comunque continuare.' },
  en: { label: 'Satellite view of your home', error: 'The satellite view is unavailable. You can still continue.' },
};

export default function AddressSatelliteMap({ location, locale }: {
  location: { lat: number; lng: number } | null;
  locale: keyof typeof copy;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const t = copy[locale];

  useEffect(() => {
    setFailed(false);
    if (!location || !container.current) return;
    let map: google.maps.Map | undefined;
    let marker: google.maps.Marker | undefined;
    try {
      if (!window.google?.maps?.Map) throw new Error('Maps unavailable');
      map = new window.google.maps.Map(container.current, {
        center: location,
        zoom: 20,
        mapTypeId: 'satellite',
        tilt: 0,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',
        keyboardShortcuts: false,
      });
      marker = new window.google.maps.Marker({
        map,
        position: location,
        draggable: true,
      });
      map.addListener('click', (event: google.maps.MapMouseEvent) => {
        if (event.latLng) marker?.setPosition(event.latLng);
      });
    } catch {
      setFailed(true);
    }
    return () => {
      if (marker) {
        window.google?.maps.event.clearInstanceListeners(marker);
        marker.setMap(null);
      }
      if (map) window.google?.maps.event.clearInstanceListeners(map);
    };
  }, [location]);

  if (!location || failed) return <p role="status" className="mt-3 text-sm text-gray-500">{t.error}</p>;

  return (
    <div className="mt-4">
      <div ref={container} data-testid="address-satellite-map" aria-label={t.label}
        className="h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-gray-200" />
    </div>
  );
}