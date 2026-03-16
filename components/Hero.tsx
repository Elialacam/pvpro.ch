'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const heroContent: Record<Locale, {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  cta: string;
  trustBadge: string;
}> = {
  de: {
    titleLine1: 'SOLARENERGIE.',
    titleLine2: 'FÜR IHR ZUHAUSE.',
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

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;

  return (
    <section className="relative w-full min-h-[92vh] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-family-solar.png"
        alt="Familie mit Solaranlage in der Schweiz"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — darkens bottom-left for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full pb-12 pt-24 px-5 sm:px-10 lg:px-16 max-w-4xl">
        {/* Big headline */}
        <h1 className="text-white font-black leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.0 }}>
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </h1>

        {/* Subtitle */}
        <p className="text-white/85 text-lg sm:text-xl font-normal mb-8 max-w-xl leading-relaxed">
          {content.subtitle}
        </p>

        {/* CTA */}
        <Link
          href="/anfrage"
          className="inline-block font-bold text-base sm:text-lg px-7 py-4 rounded-2xl transition-all shadow-lg"
          style={{ background: '#F97316', color: '#fff' }}
        >
          {content.cta} →
        </Link>

        {/* Trust line */}
        <p className="text-white/60 text-sm mt-5 font-medium">
          {content.trustBadge}
        </p>
      </div>
    </section>
  );
}
