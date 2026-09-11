'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';
import {
  SOURCE_NOTES,
  SYSTEM_PRICE_NOTES,
  formatSwissNumber,
  getSystemCostRange,
} from '@/lib/facts';

const translations = {
  de: {
    title: 'Förderrechner',
    subtitle: 'Orientierung für die Bruttokosten',
    systemSizeLabel: 'Anlagengrösse',
    estimatedLabel: 'Bruttopreis',
    pronovoLink: 'Förderbeitrag bei Pronovo berechnen →',
    disclaimer: 'Die Bruttokosten enthalten keine automatisch abgezogene Förderung.',
  },
  fr: {
    title: 'Calculateur de subvention',
    subtitle: 'Repère pour les coûts bruts',
    systemSizeLabel: "Taille de l'installation",
    estimatedLabel: 'Prix brut',
    pronovoLink: 'L’aide est calculée par Pronovo →',
    disclaimer: 'Les coûts bruts n’intègrent aucune déduction automatique de subvention.',
  },
  en: {
    title: 'Subsidy Calculator',
    subtitle: 'Gross-cost orientation',
    systemSizeLabel: 'System size',
    estimatedLabel: 'Gross price',
    pronovoLink: 'Incentive calculated by Pronovo →',
    disclaimer: 'Gross costs do not include an automatic subsidy deduction.',
  },
  it: {
    title: 'Calcolatore incentivi',
    subtitle: 'Indicazione dei costi lordi',
    systemSizeLabel: 'Dimensione impianto',
    estimatedLabel: 'Prezzo lordo',
    pronovoLink: 'L’incentivo viene calcolato da Pronovo →',
    disclaimer: 'I costi lordi non includono alcuna deduzione automatica dell’incentivo.',
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
  const locale = getLocale(pathname);
  const tx = translations[locale];

  const [kwp, setKwp] = useState(8);

  const gesamtkosten = getSystemCostRange(kwp);

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
            <p className="text-3xl font-bold text-[#fcb210]">CHF {formatSwissNumber(gesamtkosten.min, 0)}–{formatSwissNumber(gesamtkosten.max, 0)}</p>
          </div>
        </div>

        <div className="relative mb-8">
          <input
            type="range" min={3} max={30} step={1} value={kwp}
            onChange={e => setKwp(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #fcb210 0%, #fcb210 ${((kwp - 3) / 27) * 100}%, #e5e7eb ${((kwp - 3) / 27) * 100}%, #e5e7eb 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>3 kWp</span>
            <span>30 kWp</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://pronovo.ch/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#fcb210] hover:underline"
          >
            {tx.pronovoLink}
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">{tx.disclaimer}</p>
        <p className="text-xs text-gray-400 mt-2 text-center">{SOURCE_NOTES[locale]}</p>
        <p className="text-xs text-gray-400 mt-2 text-center">{SYSTEM_PRICE_NOTES[locale]}</p>
      </div>
    </div>
  );
}
