'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/LocaleContext';

const MIN = 500;
const MAX = 1500;

const labels: Record<string, { question: string; cta: string; savings: string; per: string; month: string }> = {
  de: { question: 'Wie hoch ist Ihre monatliche Stromrechnung?', cta: 'Jetzt sparen', savings: 'Geschätzte Ersparnis', per: '/Jahr', month: '/Monat' },
  fr: { question: 'Quel est votre facture mensuelle d\'énergie?', cta: 'Réduire maintenant', savings: 'Économies estimées', per: '/an', month: '/mois' },
  en: { question: 'What is your monthly energy bill?', cta: "Let's cut it", savings: 'Estimated savings', per: '/year', month: '/month' },
  it: { question: 'Qual è la sua bolletta mensile?', cta: 'Riduciamo ora', savings: 'Risparmio stimato', per: '/anno', month: '/mese' },
};

export default function HeroWidget() {
  const locale = useLocale();
  const t = labels[locale] || labels.de;
  const [value, setValue] = useState(900);

  const pct = ((value - MIN) / (MAX - MIN)) * 100;
  const saving = Math.round((value * 12 * 0.6) / 100) * 100;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  }, []);

  return (
    <div
      className="w-[370px] rounded-[28px] p-8 flex flex-col gap-7 select-none"
      style={{
        background: 'rgba(255,255,255,0.93)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.20), 0 2px 12px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,255,255,0.8)',
      }}
    >
      {/* Question */}
      <p className="text-gray-500 text-[13px] font-semibold tracking-wide uppercase leading-none">
        {t.question}
      </p>

      {/* Amount */}
      <div className="flex items-baseline gap-2">
        <span className="text-[52px] font-black text-gray-900 leading-none tabular-nums tracking-tight">
          {value}
        </span>
        <span className="text-base font-semibold text-gray-400 mb-1">CHF{t.month}</span>
      </div>

      {/* Slider */}
      <div className="flex flex-col gap-3">
        <div className="relative h-[6px]">
          {/* Track background */}
          <div className="absolute inset-0 rounded-full bg-gray-150" style={{ background: '#ebebeb' }} />
          {/* Filled track */}
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, #fdba74, #F97316)',
            }}
          />
          {/* Native input (invisible, for interaction) */}
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={10}
            value={value}
            onChange={handleChange}
            className="energy-slider absolute w-full opacity-0 cursor-pointer"
            style={{ top: '-9px', height: '24px' }}
          />
          {/* Custom thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-white pointer-events-none"
            style={{
              left: `calc(${pct}% - 11px)`,
              border: '2.5px solid #F97316',
              boxShadow: '0 2px 10px rgba(249,115,22,0.30)',
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-400">CHF {MIN}</span>
          <span className="text-xs text-gray-400">CHF {MAX}</span>
        </div>
      </div>

      {/* Savings row */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
        <div>
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">{t.savings}</p>
          <p className="text-2xl font-black text-[#F97316] tabular-nums leading-none">
            CHF {saving.toLocaleString()}
            <span className="text-sm font-semibold text-orange-300 ml-1">{t.per}</span>
          </p>
        </div>
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: '#fff7ed' }}
        >
          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/anfrage"
        className="w-full text-center font-bold text-[15px] py-4 rounded-2xl text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] tracking-wide"
        style={{ background: '#F97316' }}
      >
        {t.cta} →
      </Link>
    </div>
  );
}
