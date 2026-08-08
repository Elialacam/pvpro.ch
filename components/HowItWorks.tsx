'use client';

import Link from 'next/link';
import { ArrowRight, Check, FileText, ShieldCheck, SlidersHorizontal, SunMedium, UsersRound } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import { Locale } from '@/lib/i18n';

type Step = {
  number: string;
  title: string;
  description: string;
  signal: string;
  icon: typeof FileText;
};

type Content = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  steps: Step[];
  ctaLabel: string;
  ctaHref: string;
  ctaBanner: string;
  ctaBannerSub: string;
  dataPrivacy: string;
};

const content: Record<Locale, Content> = {
  de: {
    eyebrow: 'Solar. Einfach. Vergleichen.',
    title: 'So ',
    titleHighlight: "funktioniert's.",
    subtitle: 'In drei einfachen Schritten von der Anfrage bis zur passenden Solar-Offerte.',
    steps: [
      { number: '01', title: 'Formular ausfüllen',   description: 'In 2 Minuten, kostenlos und unverbindlich.',                                               signal: '2 Minuten',                  icon: FileText },
      { number: '02', title: 'Offerten erhalten',    description: 'Bis zu 3 Offerten von geprüften Installateuren aus Ihrem Kanton.',                          signal: 'Bis zu 3 Offerten',          icon: SlidersHorizontal },
      { number: '03', title: 'Vergleichen & wählen', description: 'Sie vergleichen die Preise und wählen das beste Angebot — ohne Verpflichtung.',             signal: 'Zertifizierte Installateure', icon: ShieldCheck },
    ],
    ctaLabel: 'Jetzt starten',
    ctaHref: '/anfrage',
    ctaBanner: 'Bereit für deinen nächsten Schritt?',
    ctaBannerSub: 'Finde heraus, was deine Dachfläche möglich macht.',
    dataPrivacy: 'Was passiert mit meinen Daten?',
  },
  fr: {
    eyebrow: 'Solaire. Simple. Comparer.',
    title: 'Comment ',
    titleHighlight: 'ça marche.',
    subtitle: "En trois étapes simples, de la demande à l'offre solaire idéale.",
    steps: [
      { number: '01', title: 'Remplir le formulaire', description: 'En 2 minutes, gratuitement et sans engagement.',                                              signal: '2 minutes',                     icon: FileText },
      { number: '02', title: 'Recevoir des offres',   description: "Jusqu'à 3 offres d'installateurs certifiés dans votre canton.",                               signal: "Jusqu'à 3 offres",              icon: SlidersHorizontal },
      { number: '03', title: 'Comparer & choisir',    description: 'Vous comparez les prix et choisissez la meilleure offre — sans obligation.',                  signal: 'Installateurs certifiés',       icon: ShieldCheck },
    ],
    ctaLabel: 'Commencer maintenant',
    ctaHref: '/fr/demande',
    ctaBanner: 'Prêt pour la prochaine étape?',
    ctaBannerSub: 'Découvrez ce que votre toit peut produire.',
    dataPrivacy: 'Que se passe-t-il avec mes données?',
  },
  en: {
    eyebrow: 'Solar. Simple. Compare.',
    title: 'How It ',
    titleHighlight: 'Works.',
    subtitle: 'Three simple steps from your request to the right solar quote.',
    steps: [
      { number: '01', title: 'Fill Out the Form',   description: 'Takes 2 minutes — free and no obligation.',                                                   signal: '2 minutes',                    icon: FileText },
      { number: '02', title: 'Receive Quotes',       description: 'Get up to 3 tailored quotes from certified installers in your canton.',                       signal: 'Up to 3 quotes',               icon: SlidersHorizontal },
      { number: '03', title: 'Compare & Choose',     description: 'Compare real prices and choose the best offer — no strings attached.',                        signal: 'Certified installers',         icon: ShieldCheck },
    ],
    ctaLabel: 'Get Started',
    ctaHref: '/en/request',
    ctaBanner: 'Ready for your next step?',
    ctaBannerSub: 'Find out what your roof can produce.',
    dataPrivacy: 'What happens with my data?',
  },
  it: {
    eyebrow: 'Solare. Semplice. Confronta.',
    title: 'Come ',
    titleHighlight: 'funziona.',
    subtitle: 'In tre semplici passi dalla richiesta al preventivo solare più adatto a te.',
    steps: [
      { number: '01', title: 'Compila il modulo',       description: 'In 2 minuti, gratuitamente e senza impegno.',                                              signal: '2 minuti',                     icon: FileText },
      { number: '02', title: 'Ricevi i preventivi',     description: 'Fino a 3 preventivi da installatori certificati nel tuo Cantone.',                         signal: 'Fino a 3 preventivi',          icon: SlidersHorizontal },
      { number: '03', title: 'Confronta e scegli',      description: 'Confronti i prezzi e scegli l\'offerta migliore — senza alcun obbligo.',                   signal: 'Installatori certificati',     icon: ShieldCheck },
    ],
    ctaLabel: 'Inizia ora',
    ctaHref: '/it/richiesta',
    ctaBanner: 'Pronto per il prossimo passo?',
    ctaBannerSub: 'Scopri cosa può produrre il tuo tetto.',
    dataPrivacy: 'Cosa succede con i miei dati?',
  },
};

export default function HowItWorks() {
  const locale = useLocale();
  const c = content[locale] ?? content.de;

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] px-5 py-20 text-[#0d1117] sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f97316]/[.07] blur-3xl" />
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-[#d4af37]">
              <span className="h-px w-9 bg-[#d4af37]" />
              {c.eyebrow}
            </div>
            <h2 className="text-balance text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl lg:text-8xl">
              {c.title}<span className="text-[#f97316]">{c.titleHighlight}</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#5c6470] sm:text-lg">
              {c.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#68717b] lg:pb-2">
            <div className="flex -space-x-2">
              {(['MK', 'LS', 'AF'] as const).map((initials, i) => (
                <span
                  key={initials}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#f7f7f5] text-[10px] font-bold"
                  style={{
                    backgroundColor: i === 1 ? '#d4af37' : '#0d1117',
                    color: i === 1 ? '#0d1117' : '#fffefa',
                  }}
                >
                  {initials}
                </span>
              ))}
            </div>
            <span><strong className="text-[#0d1117]">4.9/5</strong> von Hausbesitzern</span>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[4.1rem] hidden h-2 bg-[repeating-linear-gradient(90deg,#f97316_0,#f97316_28px,transparent_28px,transparent_42px)] opacity-70 lg:block pv-dash" />
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
            {c.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="pv-rise group relative flex min-h-[370px] flex-col rounded-[2rem] border border-[#e3e3df] bg-[#fffefa] p-7 shadow-[0_18px_50px_rgba(13,17,23,.06)] transition-transform duration-300 hover:-translate-y-2 hover:rotate-[.35deg] sm:p-9"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative z-10 mb-10 flex items-start justify-between">
                    <div className="grid h-[4.75rem] w-[4.75rem] place-items-center rounded-full bg-[#f97316] text-[#fffefa] shadow-[0_8px_20px_rgba(249,115,22,.25)]">
                      <Icon strokeWidth={1.8} size={29} />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-[.18em] text-[#c4c8c9]">{step.number}</span>
                  </div>
                  <h3 className="max-w-[250px] text-2xl font-extrabold tracking-[-.035em]">{step.title}</h3>
                  <p className="mt-4 text-[15px] leading-6 text-[#66707b]">{step.description}</p>
                  <div className="mt-auto flex items-center gap-2 border-t border-[#ecece8] pt-6 text-xs font-bold text-[#0d1117]">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#d4af37]">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {step.signal}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#0d1117] px-7 py-7 text-[#fffefa] sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#d4af37]">
              <SunMedium size={15} /> {c.ctaBanner}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-[-.02em] text-[#f5f2eb]">{c.ctaBannerSub}</p>
          </div>
          <Link
            href={c.ctaHref}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#f97316] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#ff8837] focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0d1117]"
          >
            {c.ctaLabel} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Data privacy note */}
        <Link
          href={c.ctaHref}
          className="mx-auto mt-7 flex items-center gap-2 text-xs font-semibold text-[#68717b] underline decoration-[#d4af37] underline-offset-4 hover:text-[#0d1117]"
        >
          <UsersRound size={14} /> {c.dataPrivacy}
        </Link>
      </div>
    </section>
  );
}
