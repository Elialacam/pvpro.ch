'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/LocaleContext';

const translations: Record<string, { noSpam: string; lastRequest: string; today: string; at: string; requestsCount: string }> = {
  de: {
    noSpam: 'Keine Verkaufsanrufe',
    lastRequest: 'Letzte Anfrage',
    today: 'heute',
    at: 'um',
    requestsCount: 'Anfragen gestellt',
  },
  fr: {
    noSpam: "Pas d'appels commerciaux",
    lastRequest: 'Dernière demande',
    today: "aujourd'hui",
    at: 'à',
    requestsCount: 'demandes envoyées',
  },
  en: {
    noSpam: 'No spam calls',
    lastRequest: 'Last request',
    today: 'today',
    at: 'at',
    requestsCount: 'requests submitted',
  },
  it: {
    noSpam: 'Nessuna chiamata di vendita',
    lastRequest: 'Ultima richiesta',
    today: 'oggi',
    at: 'alle',
    requestsCount: 'richieste inviate',
  },
};

function formatDate(locale: string): string {
  const now = new Date();
  const minutes = now.getMinutes();
  const jitter = Math.floor(Math.random() * 4) + 1;
  const fakeMinutes = Math.max(0, minutes - jitter);
  const hours = now.getHours();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const t = translations[locale] || translations.de;
  return `${t.today} ${day}.${month}.${year} ${t.at} ${String(hours).padStart(2, '0')}:${String(fakeMinutes).padStart(2, '0')}`;
}

function getCount(): string {
  const base = 4832;
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
  const total = base + dayOfYear * 7 + now.getHours();
  return total.toLocaleString('de-CH');
}

export default function LiveBar() {
  const locale = useLocale();
  const t = translations[locale] || translations.de;
  const [dateStr, setDateStr] = useState('');
  const [count, setCount] = useState('');

  useEffect(() => {
    setDateStr(formatDate(locale));
    setCount(getCount());
    const interval = setInterval(() => {
      setDateStr(formatDate(locale));
      setCount(getCount());
    }, 60000);
    return () => clearInterval(interval);
  }, [locale]);

  if (!dateStr) return null;

  return (
    <div className="bg-[#1a5c3a] text-white text-xs sm:text-sm py-1.5 overflow-hidden">
      <div className="container-custom flex items-center justify-center gap-4 sm:gap-8 whitespace-nowrap">
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2"><path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
          {t.noSpam}
        </span>

        <span className="hidden sm:flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="wa-online-ping absolute h-full w-full rounded-full bg-green-400" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          {t.lastRequest} {dateStr}
        </span>

        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {count} {t.requestsCount}
        </span>
      </div>
    </div>
  );
}
