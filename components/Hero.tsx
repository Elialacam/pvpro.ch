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
  '/images/hero-family-solar.png',
  '/images/hero-2.png',
  '/images/hero-3.png',
  '/images/hero-4.png',
  '/images/hero-5.png',
  '/images/hero-6.png',
  '/images/hero-7.png',
  '/images/hero-8.png',
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
    subtitle: 'Kostenlos bis zu 3 geprüfte Offerten vergleichen — von zertifizierten Schweizer Solarteuren aus Ihrer Region.',
    cta: 'Kostenlose Offerten erhalten',
    trustBadge: '✓ Keine Werbeanrufe · ✓ Kostenlos & unverbindlich · ✓ Geprüfte Installateure',
  },
  fr: {
    titleLine1: 'ÉNERGIE SOLAIRE.',
    titleLine2: 'POUR VOTRE MAISON.',
    subtitle: 'Comparez gratuitement jusqu\'à 3 offres d\'installateurs solaires certifiés de votre région.',
    cta: 'Obtenir des offres gratuites',
    trustBadge: '✓ Pas d\'appels · ✓ Gratuit & sans engagement · ✓ Installateurs certifiés',
  },
  en: {
    titleLine1: 'SOLAR ENERGY.',
    titleLine2: 'FOR YOUR HOME.',
    subtitle: 'Compare up to 3 certified solar installer quotes for free — from certified Swiss professionals in your region.',
    cta: 'Get free quotes',
    trustBadge: '✓ No sales calls · ✓ Free & no obligation · ✓ Certified installers',
  },
  it: {
    titleLine1: 'ENERGIA SOLARE.',
    titleLine2: 'PER LA TUA CASA.',
    subtitle: 'Confronta gratuitamente fino a 3 preventivi da installatori solari certificati della tua regione.',
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

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % slides.length;
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
          <Image
            src={src}
            alt="PVPro Solaranlage"
            fill
            priority={i <= 1}
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
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
      <div className="absolute bottom-0 left-0 z-20 w-full pb-14 px-5 sm:px-10 lg:px-16 max-w-4xl">
        <h1
          className="text-white font-black leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.0 }}
        >
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </h1>

        <p className="text-white/85 text-lg sm:text-xl font-normal mb-8 max-w-xl leading-relaxed">
          {content.subtitle}
        </p>

        <Link
          href={formUrl}
          className="inline-block font-bold text-base sm:text-lg px-7 py-4 rounded-2xl transition-all shadow-lg"
          style={{ background: '#F97316', color: '#fff' }}
        >
          {content.cta} →
        </Link>

        <p className="text-white/60 text-sm mt-5 font-medium">
          {content.trustBadge}
        </p>
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
