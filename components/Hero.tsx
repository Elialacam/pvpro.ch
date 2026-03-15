'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, Zap, Shield, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';
import { useRef, useEffect, useState, useCallback } from 'react';

const heroContent: Record<Locale, {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  checkmarks: string[];
  cta: string;
  ctaSub: string;
}> = {
  de: {
    eyebrow: 'Nr. 1 Solarvergleich der Schweiz',
    title: 'Solaranlagen vergleichen —',
    highlight: 'geprüfte Anbieter & Förder-Check',
    description: 'Wir analysieren Ihr Dach, prüfen verfügbare Förderungen und vermitteln geprüfte Solarteure aus Ihrer Region.',
    checkmarks: ['Geprüfte Schweizer Solarteure', 'Kantonale Angebote', 'Kostenlos & unverbindlich', 'Keine Werbeanrufe'],
    cta: 'Jetzt Angebote vergleichen',
    ctaSub: 'Kostenlos · Unverbindlich · In 2 Minuten',
  },
  fr: {
    eyebrow: 'N°1 comparateur solaire en Suisse',
    title: 'Comparez les installations solaires —',
    highlight: 'fournisseurs certifiés & subventions',
    description: 'Nous analysons votre toit, vérifions les subventions disponibles et vous mettons en relation avec des installateurs certifiés.',
    checkmarks: ['Installateurs certifiés', 'Offres cantonales', 'Gratuit & sans engagement', 'Pas d\'appels pub.'],
    cta: 'Comparer maintenant',
    ctaSub: 'Gratuit · Sans engagement · En 2 minutes',
  },
  en: {
    eyebrow: 'Switzerland\'s #1 solar comparison',
    title: 'Compare solar installations —',
    highlight: 'certified providers & subsidy check',
    description: 'We analyze your roof, check available subsidies and connect you with certified solar installers from your region.',
    checkmarks: ['Certified installers', 'Cantonal offers', 'Free & no obligation', 'No sales calls'],
    cta: 'Compare quotes now',
    ctaSub: 'Free · No obligation · 2 minutes',
  },
  it: {
    eyebrow: 'Il comparatore solare Nr. 1 in Svizzera',
    title: 'Confronta impianti solari —',
    highlight: 'fornitori certificati & incentivi',
    description: 'Analizziamo il tuo tetto, verifichiamo i sussidi e ti mettiamo in contatto con installatori certificati della tua regione.',
    checkmarks: ['Installatori certificati', 'Offerte cantonali', 'Gratuito & senza impegno', 'Nessuna pubblicità'],
    cta: 'Confronta ora',
    ctaSub: 'Gratuito · Senza impegno · 2 minuti',
  },
};

const ctaHref: Record<Locale, string> = {
  de: '/anfrage', fr: '/anfrage', en: '/anfrage', it: '/anfrage',
};

function SolarOrb() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 340, height: 340 }}>
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border"
          style={{
            width: ring * 110,
            height: ring * 110,
            borderColor: `rgba(249,115,22,${0.18 - ring * 0.04})`,
          }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 12 + ring * 6, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 120;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: 'radial-gradient(circle, #fb923c, #F97316)',
              left: '50%',
              top: '50%',
              x: x - 6,
              y: y - 6,
              boxShadow: '0 0 10px 3px rgba(249,115,22,0.5)',
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
          />
        );
      })}

      <motion.div
        className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #fbbf24, #F97316, #ea580c)',
          boxShadow: '0 0 60px 20px rgba(249,115,22,0.4)',
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-5xl select-none">☀️</span>
      </motion.div>

      {[28, 22, 35, 20, 32, 26, 38, 24, 30, 22, 34, 28].map((length, i) => {
        const angle = (i / 12) * 360;
        return (
          <motion.div
            key={`ray-${i}`}
            className="absolute origin-center"
            style={{
              width: 1.5,
              height: length,
              background: 'linear-gradient(to bottom, rgba(249,115,22,0.6), transparent)',
              left: '50%',
              top: '50%',
              rotate: angle,
              transformOrigin: 'top center',
              marginLeft: -0.75,
            }}
            animate={{ opacity: [0.3, 0.9, 0.3], scaleY: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2 + (i % 3) * 0.5, delay: i * 0.15, repeat: Infinity }}
          />
        );
      })}
    </div>
  );
}

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString('de-CH')}{suffix}</span>;
}

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;
  const href = ctaHref[locale] || '/anfrage';

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #03080F 0%, #071525 50%, #0A1B30 100%)',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(249,115,22,0.10) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(249,115,22,0.06) 0%, transparent 70%)
          `,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            background: `rgba(249,115,22,${0.2 + (i % 5) * 0.08})`,
            left: `${5 + (i * 17 + i * i * 3) % 90}%`,
            top: `${10 + (i * 23 + i * 7) % 80}%`,
          }}
          animate={{
            y: [0, -(15 + (i % 5) * 8), 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + (i % 5) * 0.7,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest"
                style={{
                  background: 'rgba(249,115,22,0.12)',
                  color: '#fb923c',
                  border: '1px solid rgba(249,115,22,0.25)',
                }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#F97316' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                {content.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black tracking-tight leading-none mb-2"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', color: '#ffffff' }}
            >
              {content.title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-black tracking-tight leading-none mb-8"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                background: 'linear-gradient(90deg, #F97316 0%, #fbbf24 60%, #F97316 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'inline-block' }}
              >
                {content.highlight}
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-8 leading-relaxed max-w-xl"
              style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem' }}
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
            >
              {content.checkmarks.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#F97316' }} />
                  <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{c}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col items-start gap-3"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'rgba(249,115,22,0.4)', filter: 'blur(16px)' }}
                  animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <Link
                  href={href}
                  className="relative inline-flex items-center gap-3 font-black text-white rounded-2xl transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #F97316, #ea580c)',
                    padding: '18px 36px',
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 24px rgba(249,115,22,0.5)',
                  }}
                >
                  {content.cta}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </div>
              <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {content.ctaSub}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-10"
            >
              <div
                className="rounded-2xl px-6 py-4 flex items-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Image
                  src="/badges/logos-row.png"
                  alt="Premium Solar Quality - Swiss Made - Trustpilot"
                  width={280} height={56}
                  className="object-contain brightness-[0.85] contrast-[0.9]"
                  style={{ width: '240px', height: 'auto' }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <SolarOrb />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-16 lg:mt-20 grid grid-cols-3 gap-px overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(249,115,22,0.15)', background: 'rgba(249,115,22,0.15)' }}
        >
          {[
            { value: 13271, suffix: '+', label: 'Anfragen gestellt', icon: '📋' },
            { value: 26, suffix: '', label: 'Kantone abgedeckt', icon: '🗺️' },
            { value: 98, suffix: '%', label: 'Kundenzufriedenheit', icon: '⭐' },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 text-center"
              style={{ background: 'rgba(7,21,37,0.95)' }}
            >
              <span className="text-2xl mb-2">{stat.icon}</span>
              <p
                className="font-black mb-1"
                style={{ color: '#F97316', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1 }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
