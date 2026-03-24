'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';

const formatChf = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");

const translations = {
  de: {
    title: 'Förderrechner',
    subtitle: 'Berechnen Sie Ihre geschätzte Einmalvergütung',
    systemSizeLabel: 'Anlagengrösse',
    estimatedLabel: 'Geschätzte Förderung',
    totalCostsLabel: 'Gesamtkosten',
    subsidyLabel: 'Förderung',
    effectiveLabel: 'Effektiv',
    coveragePrefix: 'Förderung deckt',
    coverageSuffix: '% der Kosten',
    disclaimer: "* Schätzwerte basierend auf ca. 350 CHF/kWp EIV und 2'600 CHF/kWp Installationskosten",
  },
  fr: {
    title: 'Calculateur de subvention',
    subtitle: 'Calculez votre rétribution unique estimée',
    systemSizeLabel: "Taille de l'installation",
    estimatedLabel: 'Subvention estimée',
    totalCostsLabel: 'Coûts totaux',
    subsidyLabel: 'Subvention',
    effectiveLabel: 'Net',
    coveragePrefix: 'La subvention couvre',
    coverageSuffix: '% des coûts',
    disclaimer: "* Estimations basées sur env. 350 CHF/kWp RU et 2'600 CHF/kWp de coûts d'installation",
  },
  en: {
    title: 'Subsidy Calculator',
    subtitle: 'Calculate your estimated one-time payment',
    systemSizeLabel: 'System size',
    estimatedLabel: 'Estimated subsidy',
    totalCostsLabel: 'Total costs',
    subsidyLabel: 'Subsidy',
    effectiveLabel: 'Net',
    coveragePrefix: 'Subsidy covers',
    coverageSuffix: '% of costs',
    disclaimer: '* Estimated values based on approx. CHF 350/kWp OTP and CHF 2,600/kWp installation costs',
  },
  it: {
    title: 'Calcolatore incentivi',
    subtitle: 'Calcola la tua remunerazione unica stimata',
    systemSizeLabel: 'Dimensione impianto',
    estimatedLabel: 'Incentivo stimato',
    totalCostsLabel: 'Costi totali',
    subsidyLabel: 'Incentivo',
    effectiveLabel: 'Netto',
    coveragePrefix: "L'incentivo copre il",
    coverageSuffix: '% dei costi',
    disclaimer: "* Stime basate su ca. 350 CHF/kWp RU e 2'600 CHF/kWp di costi di installazione",
  },
} as const;

function getLocale(pathname: string): keyof typeof translations {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

export default function FoerderRechner() {
  const pathname = usePathname();
  const tx = translations[getLocale(pathname)];

  const [kwp, setKwp] = useState(8);

  const foerderung = Math.round(kwp * 350);
  const gesamtkosten = Math.round(kwp * 2600);
  const nachFoerderung = gesamtkosten - foerderung;
  const prozent = Math.round((foerderung / gesamtkosten) * 100);

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
      <div className="px-8 py-6" style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-orange-400" />
          </div>
          <p className="text-white font-bold text-lg">{tx.title}</p>
        </div>
        <p className="text-gray-400 text-sm">{tx.subtitle}</p>
      </div>

      <div className="bg-white px-8 py-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{tx.systemSizeLabel}</p>
            <p className="text-5xl font-bold text-gray-900">{kwp} <span className="text-2xl font-bold text-gray-400">kWp</span></p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{tx.estimatedLabel}</p>
            <p className="text-3xl font-bold text-[#F97316]">CHF {formatChf(foerderung)}</p>
          </div>
        </div>

        <div className="relative mb-8">
          <input
            type="range" min={3} max={30} step={1} value={kwp}
            onChange={e => setKwp(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #F97316 0%, #F97316 ${((kwp - 3) / 27) * 100}%, #e5e7eb ${((kwp - 3) / 27) * 100}%, #e5e7eb 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>3 kWp</span>
            <span>30 kWp</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl p-4 text-center" style={{ background: '#f9fafb' }}>
            <p className="text-xs text-gray-400 mb-1">{tx.totalCostsLabel}</p>
            <p className="font-bold text-gray-800 text-lg">CHF {formatChf(gesamtkosten)}</p>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-xs text-orange-400 font-semibold mb-1">{tx.subsidyLabel}</p>
            <p className="font-bold text-[#F97316] text-lg">− CHF {formatChf(foerderung)}</p>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)' }}>
            <p className="text-xs text-green-500 font-semibold mb-1">{tx.effectiveLabel}</p>
            <p className="font-bold text-green-700 text-lg">CHF {formatChf(nachFoerderung)}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>{tx.coveragePrefix} {prozent}{tx.coverageSuffix}</span>
            <span>{prozent}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${prozent}%`, background: 'linear-gradient(to right, #fb923c, #F97316)' }}
            />
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">{tx.disclaimer}</p>
      </div>
    </div>
  );
}
