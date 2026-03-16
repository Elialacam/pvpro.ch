'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';

const MIN = 500;
const MAX = 1500;

const labels: Record<string, { question: string; cta: string; savings: string; per: string }> = {
  de: { question: 'Wie hoch ist Ihre Stromrechnung?', cta: 'Jetzt sparen', savings: 'Mögliche Ersparnis', per: '/Jahr' },
  fr: { question: 'Quel est votre facture d\'énergie?', cta: 'Réduire maintenant', savings: 'Économies possibles', per: '/an' },
  en: { question: 'How much is your energy bill?', cta: "Let's cut it", savings: 'Possible savings', per: '/year' },
  it: { question: 'Qual è la sua bolletta energetica?', cta: 'Riduciamo ora', savings: 'Risparmio possibile', per: '/anno' },
};

export default function HeroWidget() {
  const locale = useLocale();
  const t = labels[locale] || labels.de;
  const [value, setValue] = useState(900);

  const pct = ((value - MIN) / (MAX - MIN)) * 100;
  // Estimated annual savings: ~60% of yearly bill (monthly × 12)
  const annualBill = value * 12;
  const saving = Math.round(annualBill * 0.6 / 100) * 100;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  }, []);

  return (
    <div
      className="w-[320px] rounded-3xl p-6 flex flex-col gap-5 select-none"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.10)',
        border: '1px solid rgba(255,255,255,0.7)',
      }}
    >
      {/* Question + amount */}
      <div className="flex items-start justify-between gap-3">
        <p className="text-gray-700 text-sm font-semibold leading-snug max-w-[160px]">
          {t.question}
        </p>
        <div className="flex-shrink-0 text-right">
          <span className="text-3xl font-black text-[#F97316] leading-none tabular-nums">
            CHF {value}
          </span>
          <span className="block text-xs text-gray-400 font-medium mt-0.5">/Monat</span>
        </div>
      </div>

      {/* Slider track */}
      <div className="relative">
        {/* Filled track */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, #fdba74, #F97316)',
            }}
          />
        </div>
        {/* Range input */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10}
          value={value}
          onChange={handleChange}
          className="energy-slider absolute inset-0 w-full opacity-0 cursor-pointer"
          style={{ height: '24px', top: '-9px' }}
        />
        {/* Thumb visual */}
        <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: `calc(${pct}% - 12px)` }}
        >
          <div className="w-6 h-6 rounded-full bg-white border-[3px] border-[#F97316] shadow-[0_2px_8px_rgba(249,115,22,0.4)]" />
        </div>
        {/* Min / Max labels */}
        <div className="flex justify-between mt-3 px-0.5">
          <span className="text-xs text-gray-400">CHF {MIN}</span>
          <span className="text-xs text-gray-400">CHF {MAX}</span>
        </div>
      </div>

      {/* Savings estimate */}
      <div
        className="rounded-2xl px-4 py-3 flex items-center justify-between"
        style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}
      >
        <div>
          <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">{t.savings}</p>
          <p className="text-2xl font-black text-[#F97316] tabular-nums mt-0.5">
            CHF {saving.toLocaleString()}
            <span className="text-sm font-semibold text-orange-400 ml-1">{t.per}</span>
          </p>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-100">
          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/anfrage"
        className="w-full text-center font-bold text-base py-3.5 rounded-2xl text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
      >
        {t.cta} →
      </Link>
    </div>
  );
}
