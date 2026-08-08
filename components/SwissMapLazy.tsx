'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Load the map section lazily to keep it out of the main bundle.
// Headings and CTA remain in the initial HTML (SEO + no layout shift).
const SwissMap = dynamic(() => import('./SwissMap'), {
  loading: () => <MapSkeleton />,
});

// Stable skeleton matching SwissMap's layout to avoid layout shift.
function MapSkeleton() {
  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="min-h-[420px] rounded-2xl bg-gray-100 animate-pulse" />
          <div className="space-y-4">
            <div className="h-9 w-3/4 rounded bg-gray-100 animate-pulse" />
            <div className="h-24 rounded bg-gray-100 animate-pulse" />
            <div className="h-12 w-56 rounded-xl bg-gray-100 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Defers mounting the map section (and thus the Google Maps script +
 * satellite tiles) until the user scrolls near it. An IntersectionObserver
 * with a generous rootMargin starts loading before the section enters the
 * viewport, so a normally-scrolling user sees no difference.
 */
export default function SwissMapLazy() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    // Fallback for very old browsers: load immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Start loading ~600px before the section reaches the viewport.
      { rootMargin: '600px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  if (visible) return <SwissMap />;

  return (
    <div ref={ref}>
      <MapSkeleton />
    </div>
  );
}
