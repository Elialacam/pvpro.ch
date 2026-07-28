'use client';

import dynamic from 'next/dynamic';

// react-simple-maps + topojson are heavy; split them into their own chunk so
// the main page bundle stays small. SSR stays enabled so the section's text,
// headings and CTA remain in the initial HTML (SEO + no layout shift).
const SwissMap = dynamic(() => import('./SwissMap'), {
  loading: () => (
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
  ),
});

export default SwissMap;
