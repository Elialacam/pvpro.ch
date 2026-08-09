'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/lib/LocaleContext';
import { getFormUrl } from '@/lib/i18n/formUrls';
import { Locale } from '@/lib/i18n';
import HeroWidget from './HeroWidget';

const slides = [
  '/images/hero-family-solar.webp',
  '/images/hero-2.webp',
  '/images/hero-3.webp',
  '/images/hero-4.webp',
  '/images/hero-5.webp',
  '/images/hero-6.webp',
  '/images/hero-7.webp',
  '/images/hero-8.webp',
];

const heroContent: Record<Locale, {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  cta: string;
  trustBadge: string;
}> = {
  de: {
    titleLine1: 'SOLAR-OFFERTEN.',
    titleLine2: 'BIS 30% SPAREN.',
    subtitle: 'Kostenlos bis zu 3 geprüfte Offerten vergleichen — von zertifizierten Schweizer Solarteuren aus Ihrem Kanton.',
    cta: 'Kostenlose Offerten erhalten',
    trustBadge: '✓ Keine Werbeanrufe · ✓ Kostenlos & unverbindlich · ✓ Geprüfte Installateure',
  },
  fr: {
    titleLine1: 'OFFRES SOLAIRES.',
    titleLine2: 'ÉCONOMISEZ 30%.',
    subtitle: 'Comparez gratuitement jusqu\'à 3 offres d\'installateurs solaires certifiés de votre canton.',
    cta: 'Obtenir des offres gratuites',
    trustBadge: '✓ Pas d\'appels · ✓ Gratuit & sans engagement · ✓ Installateurs certifiés',
  },
  en: {
    titleLine1: 'SOLAR QUOTES.',
    titleLine2: 'SAVE UP TO 30%.',
    subtitle: 'Compare up to 3 certified solar installer quotes for free — from certified Swiss professionals in your canton.',
    cta: 'Get free quotes',
    trustBadge: '✓ No sales calls · ✓ Free & no obligation · ✓ Certified installers',
  },
  it: {
    titleLine1: 'PREVENTIVI FOTOVOLTAICO.',
    titleLine2: 'RISPARMIA FINO AL 30%.',
    subtitle: 'Confronta gratuitamente fino a 3 preventivi da installatori solari certificati del Canton Ticino.',
    cta: 'Ottieni preventivi gratuiti',
    trustBadge: '✓ Nessuna chiamata · ✓ Gratuito e senza impegno · ✓ Installatori certificati',
  },
};

const SLIDE_DURATION = 6000;

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;
  const pathname = usePathname();
  const formUrl = getFormUrl(pathname);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  // Only mount slides that have been (or are about to be) shown, so the
  // browser doesn't download all hero images upfront.
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0, 1]));
  const [loadedImgs, setLoadedImgs] = useState<Set<number>>(() => new Set());
  const [pending, setPending] = useState<number | null>(null);

  const markLoaded = useCallback((index: number) => {
    setLoadedImgs(prev => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const mountSlide = useCallback((index: number) => {
    setMounted(prev => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    mountSlide(index);
    setPending(index);
  }, [current, mountSlide]);

  // Switch to a pending slide only once its image is loaded (with a safety
  // timeout), so manual navigation never shows a blank frame.
  useEffect(() => {
    if (pending === null) return;
    let cancelled = false;
    const doSwitch = () => {
      if (cancelled) return;
      cancelled = true;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(pending);
        setAnimating(false);
        setPending(null);
      }, 400);
    };
    if (loadedImgs.has(pending)) {
      doSwitch();
      return;
    }
    const fallback = setTimeout(doSwitch, 1500);
    return () => {
      clearTimeout(fallback);
      cancelled = true;
    };
  }, [pending, loadedImgs]);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % slides.length;
      mountSlide((next + 1) % slides.length); // preload the slide after next
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 400);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden -mt-20" style={{ background: '#111' }}>

      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? (animating ? 0 : 1) : 0 }}
        >
          {mounted.has(i) && (
            <Image
              src={src}
              alt="PVPro Solaranlage"
              fill
              priority={i === 0}
              quality={i === 0 ? 90 : 75}
              className="object-cover object-center"
              sizes="100vw"
              onLoad={() => markLoaded(i)}
            />
          )}
        </div>
      ))}

      {/* Gradient overlay — uniform base + top + bottom */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'rgba(0,0,0,0.18)' }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: [
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 25%)',
            'linear-gradient(to top,    rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 38%, transparent 68%)',
          ].join(', '),
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-20 w-full pb-32 sm:pb-20 lg:pb-14 px-5 sm:px-10 lg:px-16 max-w-4xl">
        <h1
          className="text-white font-black leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </h1>

        <p className="text-white/85 text-lg sm:text-xl font-normal mb-8 max-w-xl leading-relaxed">
          {content.subtitle}
        </p>

        <Link href={formUrl} className="btn-primary text-base sm:text-lg px-8 py-4">
          {content.cta} →
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-5 gap-1">
          {content.trustBadge.split(' · ').map((item, i) => (
            <span key={i} className="text-white/60 text-sm font-medium">{item}</span>
          ))}
        </div>

        {/* Trustpilot badge */}
        <a
          href="https://it.trustpilot.com/review/pvpro.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-xl px-2.5 py-1.5"
          style={{ background: 'rgba(255,255,255,1)', backdropFilter: 'blur(8px)' }}
        >
          <img
            src="/images/trustpilot-badge.png"
            alt="Trustpilot 5 Sterne"
            width={120}
            height={65}
            loading="eager"
            decoding="async"
            className="w-20 sm:w-28"
          />
        </a>
      </div>

      {/* Premium widget — bottom right */}
      <div className="hidden lg:flex absolute right-12 xl:right-20 bottom-16 z-20 items-end">
        <HeroWidget />
      </div>

      {/* Otovo-style dots — bottom center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === current ? '20px' : '6px',
              height: '6px',
              background: i === current ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </div>

    </section>
  );
}
