'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';
import Link from 'next/link';

const STEP_DURATION = 4000; // ms per step

const content: Record<Locale, {
  title: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  steps: { number: string; title: string; description: string; detail: string }[];
}> = {
  de: {
    title: "So funktioniert's",
    subtitle: 'In drei einfachen Schritten von der Anfrage bis zur passenden Solar-Offerte.',
    cta: 'Jetzt starten',
    ctaHref: '/anfrage',
    steps: [
      {
        number: '01',
        title: 'Formular ausfüllen',
        description: 'In 2 Minuten, kostenlos und unverbindlich.',
        detail: 'Geben Sie einfach Ihre Adresse und Ihren Stromverbrauch ein. Das dauert weniger als 2 Minuten — ohne Registrierung und völlig kostenlos.',
      },
      {
        number: '02',
        title: 'Offerten erhalten',
        description: 'Bis zu 3 Offerten von geprüften Installateuren.',
        detail: 'Wir schicken Ihre Anfrage an bis zu 3 geprüfte Installateure aus Ihrem Kanton. Sie erhalten konkrete Angebote — transparent und vergleichbar.',
      },
      {
        number: '03',
        title: 'Vergleichen & wählen',
        description: 'Sie wählen das beste Angebot — ohne Verpflichtung.',
        detail: 'Sie vergleichen die Preise und wählen den Installateur, der am besten zu Ihnen passt. Kein Druck, keine versteckten Kosten.',
      },
    ],
  },
  fr: {
    title: 'Comment ça marche',
    subtitle: 'En trois étapes simples, de la demande jusqu\'à la bonne offre solaire.',
    cta: 'Commencer',
    ctaHref: '/fr/demande',
    steps: [
      {
        number: '01',
        title: 'Remplir le formulaire',
        description: 'En 2 minutes, gratuit et sans engagement.',
        detail: 'Entrez simplement votre adresse et votre consommation électrique. Cela prend moins de 2 minutes — sans inscription et entièrement gratuit.',
      },
      {
        number: '02',
        title: 'Recevoir les offres',
        description: "Jusqu'à 3 offres d'installateurs certifiés.",
        detail: "Nous transmettons votre demande à jusqu'à 3 installateurs certifiés de votre canton. Vous recevez des offres concrètes — transparentes et comparables.",
      },
      {
        number: '03',
        title: 'Comparer & choisir',
        description: 'Vous choisissez la meilleure offre — sans obligation.',
        detail: "Vous comparez les prix et choisissez l'installateur qui vous convient le mieux. Sans pression, sans frais cachés.",
      },
    ],
  },
  en: {
    title: 'How It Works',
    subtitle: 'Three simple steps from your request to the right solar quote.',
    cta: 'Get Started',
    ctaHref: '/en/request',
    steps: [
      {
        number: '01',
        title: 'Fill Out the Form',
        description: 'In 2 minutes, free and no obligation.',
        detail: 'Just enter your address and energy consumption. It takes less than 2 minutes — no registration required and completely free.',
      },
      {
        number: '02',
        title: 'Receive Quotes',
        description: 'Up to 3 quotes from certified installers.',
        detail: 'We send your request to up to 3 certified installers in your canton. You receive concrete offers — transparent and comparable.',
      },
      {
        number: '03',
        title: 'Compare & Choose',
        description: 'You choose the best offer — no commitment.',
        detail: 'You compare prices and choose the installer that suits you best. No pressure, no hidden costs.',
      },
    ],
  },
  it: {
    title: 'Come funziona',
    subtitle: 'Tre semplici passi dalla richiesta al preventivo solare giusto.',
    cta: 'Inizia ora',
    ctaHref: '/it/richiedere-preventivo-solare',
    steps: [
      {
        number: '01',
        title: 'Compila il modulo',
        description: 'In 2 minuti, gratuito e senza impegno.',
        detail: 'Inserisci semplicemente il tuo indirizzo e il consumo energetico. Ci vogliono meno di 2 minuti — senza registrazione e completamente gratuito.',
      },
      {
        number: '02',
        title: 'Ricevi i preventivi',
        description: 'Fino a 3 preventivi da installatori certificati.',
        detail: 'Inviamo la tua richiesta a fino a 3 installatori certificati in Ticino. Ricevi offerte concrete — trasparenti e confrontabili.',
      },
      {
        number: '03',
        title: 'Confronta & scegli',
        description: "Scegli l'offerta migliore — senza impegno.",
        detail: "Confronti i prezzi e scegli l'installatore più adatto. Nessuna pressione, nessun costo nascosto.",
      },
    ],
  },
};

export default function HowItWorks() {
  const locale = useLocale();
  const c = content[locale] || content.de;
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(Date.now());

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  // Tick progress bar
  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / STEP_DURATION, 1);
      setProgress(pct);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setActive(prev => (prev + 1) % c.steps.length);
        setProgress(0);
        startRef.current = Date.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [c.steps.length]);

  const step = c.steps[active];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-gray-900 mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Step tabs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-0">
          {c.steps.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative flex-1 text-left rounded-2xl border-2 transition-all duration-300 overflow-hidden focus:outline-none"
                style={{
                  borderColor: isActive ? '#F97316' : '#E5E7EB',
                  background: isActive ? '#fff' : '#F9FAFB',
                  boxShadow: isActive ? '0 4px 24px rgba(249,115,22,0.10)' : 'none',
                }}
              >
                {/* Progress bar — only on active */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] transition-none"
                  style={{
                    width: isActive ? `${progress * 100}%` : '0%',
                    background: '#F97316',
                  }}
                />

                <div className="px-5 pt-5 pb-6">
                  {/* Number */}
                  <span
                    className="text-3xl font-black leading-none block mb-3 transition-colors duration-300"
                    style={{ color: isActive ? '#F97316' : '#D1D5DB' }}
                  >
                    {s.number}
                  </span>
                  {/* Title */}
                  <p className="font-bold text-gray-900 text-base mb-1">{s.title}</p>
                  {/* Short desc */}
                  <p className="text-sm text-gray-500">{s.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active step detail panel */}
        <div
          key={active}
          className="mt-4 rounded-2xl bg-white border border-gray-100 shadow-sm px-7 py-6 flex items-start gap-5"
          style={{ animation: 'hiw-fade 0.3s ease' }}
        >
          {/* Large number */}
          <span className="hidden sm:block text-6xl font-black text-orange-100 leading-none select-none flex-shrink-0">
            {step.number}
          </span>
          <div>
            <p className="font-bold text-gray-900 text-lg mb-2">{step.title}</p>
            <p className="text-gray-600 leading-relaxed">{step.detail}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href={c.ctaHref}
            className="btn-primary"
          >
            {c.cta}
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes hiw-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
