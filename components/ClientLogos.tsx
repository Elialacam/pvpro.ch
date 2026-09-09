'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const LOGOS: { src: string; alt: string; href?: string }[] = [
  { src: '/clients/client-01.webp', alt: 'Solion', href: 'https://solion.ch/' },
  { src: '/clients/client-02.webp', alt: 'SolGal Sagl', href: 'https://solgal.ch/' },
  { src: '/clients/client-03.webp', alt: 'Elektrobedarf', href: 'https://www.elektrobedarf.ch/' },
  { src: '/clients/client-04.webp', alt: 'Ecosol Swiss', href: 'https://ecosolswiss.ch/' },
  { src: '/clients/client-05.webp', alt: 'Smart Solar Systems GmbH', href: 'https://www.smart-solar-systems.ch/' },
  { src: '/clients/client-06.webp', alt: 'AlpenEnergie', href: 'https://alpen-energie.ch/' },
  { src: '/clients/client-07.webp', alt: 'Megawatt Solar', href: 'https://www.megawattsolar.ch/' },
  { src: '/clients/client-08.webp', alt: 'SP Smart Electronics GmbH', href: 'https://spsmart.ch/' },
  { src: '/clients/client-09.webp', alt: 'PuraSol', href: 'https://purasol.ch/' },
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
    let halfWidth = 0;

    const measure = () => {
      halfWidth = track.scrollWidth / 2;
    };
    measure();

    const step = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      // ease current speed toward target for a smooth slow-down
      speed += (targetSpeed.current - speed) * Math.min(1, dt * 6);
      offset += speed * dt;
      if (halfWidth > 0 && offset >= halfWidth) offset -= halfWidth;
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
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    document.addEventListener('visibilitychange', sync);

    return () => {
      io.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      className="bg-white py-6 sm:py-8 border-y border-gray-100"
      aria-label={label || 'Partner'}
    >
      {label && (
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400 mb-6 px-4">
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
              {LOGOS.map((logo) => {
                const img = (
                  <Image
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ''}
                    width={320}
                    height={80}
                    sizes="112px"
                    className="h-full w-full object-contain grayscale opacity-55 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                );
                return (
                  <div
                    key={`${copy}-${logo.src}`}
                    className="mx-8 sm:mx-11 flex h-11 sm:h-14 w-24 sm:w-28 shrink-0 items-center justify-center"
                  >
                    {logo.href ? (
                      <a
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={logo.alt}
                        tabIndex={copy === 0 ? 0 : -1}
                        className="flex h-full w-full items-center justify-center"
                      >
                        {img}
                      </a>
                    ) : (
                      img
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
