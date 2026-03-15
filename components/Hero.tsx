'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, Star, Zap, Shield, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';
import { useRef, useEffect, useState, useCallback } from 'react';

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

const offerCards = [
  { name: 'SolarSwiss AG', location: 'Zürich', rating: 4.9, reviews: 127, price: 'CHF 11\'400', badge: 'Bestes Angebot', badgeColor: '#F97316' },
  { name: 'Helvetia Solar', location: 'Bern', rating: 4.7, reviews: 89, price: 'CHF 12\'800', badge: null, badgeColor: null },
  { name: 'Alpine PV GmbH', location: 'Luzern', rating: 4.8, reviews: 203, price: 'CHF 13\'100', badge: null, badgeColor: null },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className="w-3.5 h-3.5"
          fill={s <= Math.round(rating) ? '#F97316' : 'none'}
          stroke={s <= Math.round(rating) ? '#F97316' : '#d1d5db'}
        />
      ))}
    </div>
  );
}

function OfferWidget() {
  const [phase, setPhase] = useState<'loading' | 'cards' | 'done'>('loading');
  const [visibleCards, setVisibleCards] = useState(0);

  const runSequence = useCallback(() => {
    setPhase('loading');
    setVisibleCards(0);
    const t1 = setTimeout(() => setPhase('cards'), 1200);
    const t2 = setTimeout(() => setVisibleCards(1), 1800);
    const t3 = setTimeout(() => setVisibleCards(2), 2600);
    const t4 = setTimeout(() => setVisibleCards(3), 3400);
    const t5 = setTimeout(() => setPhase('done'), 4200);
    const t6 = setTimeout(() => runSequence(), 7500);
    return () => [t1, t2, t3, t4, t5, t6].forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const cleanup = runSequence();
    return cleanup;
  }, [runSequence]);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div
        className="rounded-3xl overflow-hidden shadow-2xl border border-white/60"
        style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Ihre Offerten</p>
            <p className="text-sm font-bold text-gray-800 mt-0.5">3 Angebote verfügbar</p>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#FFF7ED' }}>
            <Zap className="w-4 h-4" style={{ color: '#F97316' }} />
          </div>
        </div>

        <div className="px-4 py-3 space-y-2 min-h-[200px]">
          <AnimatePresence>
            {phase === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 gap-3"
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#F97316' }}
                      animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.8, delay: i * 0.18, repeat: Infinity }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-medium">Installateure werden gesucht…</p>
              </motion.div>
            )}
          </AnimatePresence>

          {phase !== 'loading' && offerCards.slice(0, visibleCards).map((card, i) => (
            <motion.div
              key={i}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 p-3 rounded-2xl border"
              style={{
                borderColor: i === 0 ? '#F97316' : '#f0f0f0',
                background: i === 0 ? '#FFF7ED' : 'white',
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                style={{ background: i === 0 ? '#F97316' : '#e5e7eb', color: i === 0 ? 'white' : '#9ca3af' }}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-sm font-bold text-gray-900 truncate">{card.name}</p>
                  {card.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#F97316', color: 'white' }}>
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <StarRow rating={card.rating} />
                  <span className="text-[11px] text-gray-400">{card.rating} ({card.reviews})</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-[11px] text-gray-400">{card.location}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-black" style={{ color: i === 0 ? '#F97316' : '#374151' }}>{card.price}</p>
                <p className="text-[10px] text-gray-400">inkl. MwSt.</p>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {phase === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'backOut' }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl mt-1"
                style={{ background: 'linear-gradient(135deg, #dcfce7, #f0fdf4)', border: '1px solid #86efac' }}
              >
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                <p className="text-sm font-semibold text-green-800">3 Offerten erhalten — kostenlos & unverbindlich</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="px-5 py-3 border-t border-gray-100 flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-gray-400" />
          <p className="text-[11px] text-gray-400">Nur geprüfte Schweizer Installateure</p>
        </div>
      </div>

      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
        style={{ background: 'linear-gradient(135deg, #F97316, #ea580c)' }}
        animate={{ rotate: [0, -8, 8, -4, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-2xl">☀️</span>
      </motion.div>
    </div>
  );
}

function CountUp({ end, suffix = '', duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString('de-CH')}{suffix}</span>;
}

export default function Hero() {
  const locale = useLocale();
  const content = heroContent[locale] || heroContent.de;
  const href = ctaHref[locale] || '/anfrage';

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fffbf0 0%, #fff8e8 40%, #ffffff 100%)' }}>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 50%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
          transform: 'translate(-40%, 40%)',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + i * 2,
              height: 4 + i * 2,
              background: `rgba(249,115,22,${0.15 - i * 0.02})`,
              top: `${15 + i * 12}%`,
              right: `${8 + i * 3}%`,
            }}
            animate={{ y: [0, -12 - i * 4, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3 + i * 0.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-custom py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
                style={{ background: '#FFF0E0', color: '#C2400C', border: '1px solid rgba(249,115,22,0.25)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Nr. 1 Solarvergleich Schweiz
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-gray-900 leading-tight mb-4"
            >
              {content.title}{' '}
              <span
                className="relative inline-block"
                style={{ color: '#F97316' }}
              >
                {content.subtitle}
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #F97316, #fb923c)' }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-7 leading-relaxed">
              {content.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 mb-8">
              {content.checkmarks.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#FFF0E0' }}
                  >
                    <CheckCircle className="w-5 h-5" style={{ color: '#F97316' }} />
                  </div>
                  <span className="text-gray-700 font-medium">{c}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href={href}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white font-bold text-base transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)',
                  boxShadow: '0 8px 30px rgba(249,115,22,0.35)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(249,115,22,0.50)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(249,115,22,0.35)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {content.cta}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-7">
              <Image
                src="/badges/logos-row.png"
                alt="Premium Solar Quality - Swiss Made - Trustpilot"
                width={320} height={60}
                className="object-contain"
                style={{ width: '260px', height: 'auto' }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <OfferWidget />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {[
            { icon: <Zap className="w-5 h-5" />, value: 13271, suffix: '+', label: 'Anfragen gestellt' },
            { icon: <MapPin className="w-5 h-5" />, value: 26, suffix: '', label: 'Kantone abgedeckt' },
            { icon: <Shield className="w-5 h-5" />, value: 98, suffix: '%', label: 'Kundenzufriedenheit' },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-4 px-3 rounded-2xl"
              style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.12)' }}
            >
              <div className="flex justify-center mb-2" style={{ color: '#F97316' }}>{stat.icon}</div>
              <p className="text-2xl sm:text-3xl font-black text-gray-900">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
