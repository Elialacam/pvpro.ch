'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { getFormUrl } from '@/lib/i18n/formUrls';

const defaultsByLocale = {
  de: {
    title: 'Jetzt kostenlose Offerten erhalten',
    subtitle: 'Vergleichen Sie bis zu 3 Angebote von geprüften Schweizer Solarteuren. 100% kostenlos, unverbindlich und ohne Werbeanrufe.',
    ctaText: 'Kostenlose Offerte anfordern',
    badges: ['100% Kostenlos', 'Unverbindlich', 'Keine Werbeanrufe'],
  },
  fr: {
    title: 'Obtenez des devis gratuits maintenant',
    subtitle: "Comparez jusqu'à 3 offres d'installateurs solaires suisses certifiés. 100% gratuit, sans engagement et sans démarchage.",
    ctaText: 'Demander un devis gratuit',
    badges: ['100% Gratuit', 'Sans engagement', 'Pas de démarchage'],
  },
  en: {
    title: 'Get free quotes now',
    subtitle: 'Compare up to 3 offers from certified Swiss solar installers. 100% free, no obligation and no cold calls.',
    ctaText: 'Request a free quote',
    badges: ['100% Free', 'No obligation', 'No cold calls'],
  },
  it: {
    title: 'Ottieni preventivi gratuiti ora',
    subtitle: 'Confronta fino a 3 offerte di installatori solari svizzeri certificati. 100% gratuito, senza impegno e senza chiamate commerciali.',
    ctaText: 'Richiedi preventivo gratuito',
    badges: ['100% Gratuito', 'Senza impegno', 'Nessuna chiamata'],
  },
} as const;

function getLocale(pathname: string): keyof typeof defaultsByLocale {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

interface CtaAnfrageProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badges?: string[];
  variant?: 'default' | 'light' | 'dark';
}

export default function CtaAnfrage({
  title,
  subtitle,
  ctaText,
  badges,
  variant = 'default',
}: CtaAnfrageProps) {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const defaults = defaultsByLocale[locale];
  const formUrl = getFormUrl(pathname);

  const resolvedTitle = title ?? defaults.title;
  const resolvedSubtitle = subtitle ?? defaults.subtitle;
  const resolvedCtaText = ctaText ?? defaults.ctaText;
  const resolvedBadges = badges ?? [...defaults.badges];

  const bg = variant === 'light' ? 'bg-primary-50' : variant === 'dark' ? 'bg-gray-900' : 'bg-primary-50';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const subColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const badgeColor = variant === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700';

  return (
    <div className={`rounded-3xl p-8 sm:p-12 text-center ${bg}`}>
      <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColor}`}>{resolvedTitle}</h2>
      <p className={`text-base mb-8 max-w-lg mx-auto ${subColor}`}>{resolvedSubtitle}</p>

      <Link
        href={formUrl}
        className="inline-flex items-center gap-3 btn-primary py-4 px-8 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
      >
        {resolvedCtaText}
        <ChevronRight className="w-5 h-5" />
      </Link>

      {resolvedBadges.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {resolvedBadges.map(b => (
            <div key={b} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${badgeColor}`}>
              <CheckCircle className="w-4 h-4 text-primary" />
              {b}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
