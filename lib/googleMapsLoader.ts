let mapsPromise: Promise<void> | null = null;

/**
 * Loads the Google Maps JS API (with Places) exactly once, using the
 * recommended async loading pattern (loading=async + callback) instead of
 * polling. Returns a promise that resolves when window.google.maps is ready.
 * On script error or timeout the cached promise is reset so a later call
 * can retry.
 */
export function loadGoogleMaps(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  const w = window as any;
  if (w.google?.maps?.places) return Promise.resolve();
  if (mapsPromise) return mapsPromise;

  mapsPromise = new Promise<void>((resolve, reject) => {
    const cbName = '__pvproMapsReady';
    let settled = false;
    const timeout = setTimeout(() => fail(new Error('Google Maps load timeout')), 15000);
    const done = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      delete w[cbName];
      resolve();
    };
    const fail = (err: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      delete w[cbName];
      mapsPromise = null; // allow retry on a later call
      reject(err);
    };
    w[cbName] = done;

    const existing = document.getElementById('google-maps-places') as HTMLScriptElement | null;
    if (existing) {
      // A script tag was injected elsewhere: settle via its load/error events.
      if (w.google?.maps?.places) { done(); return; }
      existing.addEventListener('load', () => {
        if (w.google?.maps?.places) done();
        else fail(new Error('Google Maps script loaded without Places'));
      });
      existing.addEventListener('error', () => fail(new Error('Google Maps script failed to load')));
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-places';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async&callback=${cbName}`;
    script.async = true;
    script.onerror = () => fail(new Error('Google Maps script failed to load'));
    document.head.appendChild(script);
  });
  return mapsPromise;
}
