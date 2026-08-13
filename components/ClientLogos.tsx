'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LOGOS = [
  { src: '/clients/client-01.webp', alt: 'Solion' },
  { src: '/clients/client-02.webp', alt: 'SolGal Sagl' },
  { src: '/clients/client-03.webp', alt: 'EB' },
  { src: '/clients/client-04.webp', alt: 'Ecosol Swiss' },
  { src: '/clients/client-05.webp', alt: 'Smart Solar Systems GmbH' },
  { src: '/clients/client-06.webp', alt: 'AlpenEnergie' },
  { src: '/clients/client-07.webp', alt: 'Megawatt Solar' },
  { src: '/clients/client-08.webp', alt: 'SP Smart Electronics GmbH' },
  { src: '/clients/client-09.webp', alt: 'PuraSol' },
];

const NORMAL_SPEED = 40; // px per second
const SLOW_SPEED = 8;

export default function ClientLogos({ label }: { label?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const targetSpeed = useRef(NORMAL_SPEED);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Respect users who prefer reduced motion: keep a static row.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let offset = 0;
    let speed = NORMAL_SPEED;
    let last = performance.now();
    let raf = 0;
    let running = false;
    let visible = false;

    const step = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      // ease current speed toward target for a smooth slow-down
      speed += (targetSpeed.current - speed) * Math.min(1, dt * 6);
      offset += speed * dt;
      const half = track.scrollWidth / 2;
      if (half > 0 && offset >= half) offset -= half;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      raf = requestAnimationFrame(step);
    };

    const sync = () => {
      const shouldRun = visible && !document.hidden;
      if (shouldRun && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(step);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(track);
    document.addEventListener('visibilitychange', sync);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', sync);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="bg-white py-10 sm:py-12 border-y border-gray-100"
      aria-label={label || 'Partner'}
    >
      {label && (
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400 mb-8 px-4">
          {label}
        </p>
      )}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => { targetSpeed.current = SLOW_SPEED; }}
        onMouseLeave={() => { targetSpeed.current = NORMAL_SPEED; }}
      >
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white to-transparent" />

        <div ref={trackRef} className="flex w-max items-center will-change-transform">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {LOGOS.map((logo) => (
                <div
                  key={`${copy}-${logo.src}`}
                  className="mx-7 sm:mx-10 flex h-16 sm:h-20 w-32 sm:w-40 shrink-0 items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ''}
                    width={320}
                    height={80}
                    style={{ width: 'auto', height: 'auto' }}
                    className="max-h-full max-w-full object-contain grayscale opacity-55 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
