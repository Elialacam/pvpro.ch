'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

const heroContent: Record<Locale, {
  title: string;
  subtitle: string;
  description: string;
  checkmarks: string[];
  cta: string;
}> = {
  de: {
    title: 'Solaranlagen in der Schweiz vergleichen:',
    subtitle: 'geprüfte Anbieter & Förder-Check',
    description: 'Wir analysieren Ihr Dach, prüfen verfügbare Förderungen und vermitteln geprüfte Solarteure aus Ihrer Region.',
    checkmarks: ['Geprüfte Schweizer Solarteure', 'Kantonale Angebote vergleichen', 'Kostenlos & unverbindlich', 'Keine Werbeanrufe'],
    cta: 'Jetzt Angebote vergleichen',
  },
  fr: {
    title: 'Comparer les installations solaires en Suisse :',
    subtitle: 'fournisseurs certifiés & vérification des subventions',
    description: 'Nous analysons votre toit, vérifions les subventions disponibles et vous mettons en relation avec des installateurs certifiés de votre région.',
    checkmarks: ['Installateurs suisses certifiés', 'Comparer les offres cantonales', 'Gratuit et sans engagement', 'Pas d\'appels publicitaires'],
    cta: 'Comparer les offres maintenant',
  },
  en: {
    title: 'Compare solar panels in Switzerland:',
    subtitle: 'certified providers & subsidy check',
    description: 'We analyze your roof, check available subsidies and connect you with certified solar installers from your region.',
    checkmarks: ['Certified Swiss installers', 'Compare cantonal offers', 'Free & no obligation', 'No sales calls'],
    cta: 'Compare quotes now',
  },
  it: {
    title: 'Confronta impianti solari in Svizzera:',
    subtitle: 'fornitori certificati & verifica incentivi',
    description: 'Analizziamo il tuo tetto, verifichiamo i sussidi disponibili e ti mettiamo in contatto con installatori certificati della tua regione.',
    checkmarks: ['Installatori svizzeri certificati', 'Confronta offerte cantonali', 'Gratuito e senza impegno', 'Nessuna chiamata pubblicitaria'],
    cta: 'Confronta le offerte ora',
  },
};

const ctaHref: Record<Locale, string> = {
  de: '/anfrage', fr: '/anfrage', en: '/anfrage', it: '/anfrage',
};

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;
  const href = ctaHref[locale] || '/anfrage';

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '88vh' }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-solar-panels.webp"
          alt="Solaranlage auf Schweizer Einfamilienhaus"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.20) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container-custom flex flex-col justify-center" style={{ minHeight: '88vh', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest"
              style={{ background: 'rgba(22,163,74,0.25)', color: '#86efac', border: '1px solid rgba(22,163,74,0.4)', backdropFilter: 'blur(8px)' }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              Nr. 1 Solarvergleich der Schweiz
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-extrabold text-white leading-tight tracking-tight mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#86efac' }}
          >
            {content.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-lg leading-relaxed mb-7"
            style={{ color: 'rgba(255,255,255,0.82)' }}
          >
            {content.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-9"
          >
            {content.checkmarks.map((c, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.42 + i * 0.09 }}
              >
                <CheckCircle className="w-5 h-5 shrink-0 text-green-400" />
                <span className="text-white font-medium text-sm sm:text-base">{c}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href={href}
              className="inline-flex items-center gap-3 font-bold text-base text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: '#16A34A',
                padding: '16px 32px',
                boxShadow: '0 4px 20px rgba(22,163,74,0.45)',
              }}
            >
              {content.cta}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Kostenlos · Unverbindlich · 2 Minuten
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10"
          >
            <Image
              src="/badges/logos-row.png"
              alt="Premium Solar Quality - Swiss Made - Trustpilot"
              width={280} height={56}
              className="object-contain"
              style={{ width: '230px', height: 'auto', filter: 'brightness(0.9) contrast(0.85)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
