'use client';

import Link from 'next/link';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface CtaAnfrageProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badges?: string[];
  variant?: 'default' | 'light' | 'dark';
}

export default function CtaAnfrage({
  title = 'Jetzt kostenlose Offerten erhalten',
  subtitle = 'Vergleichen Sie bis zu 3 Angebote von geprüften Schweizer Solarteuren. 100% kostenlos, unverbindlich und ohne Werbeanrufe.',
  ctaText = 'Kostenlose Offerte anfordern',
  badges = ['100% Kostenlos', 'Unverbindlich', 'Keine Werbeanrufe'],
  variant = 'default',
}: CtaAnfrageProps) {
  const bg = variant === 'light' ? 'bg-primary-50' : variant === 'dark' ? 'bg-gray-900' : 'bg-primary-50';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-gray-900';
  const subColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const badgeColor = variant === 'dark' ? 'bg-white/10 text-white' : 'bg-white text-gray-700';

  return (
    <div className={`rounded-3xl p-8 sm:p-12 text-center ${bg}`}>
      <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColor}`}>{title}</h2>
      <p className={`text-base mb-8 max-w-lg mx-auto ${subColor}`}>{subtitle}</p>

      <Link
        href="/anfrage"
        className="inline-flex items-center gap-3 btn-primary py-4 px-8 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
      >
        {ctaText}
        <ChevronRight className="w-5 h-5" />
      </Link>

      {badges.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {badges.map(b => (
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
