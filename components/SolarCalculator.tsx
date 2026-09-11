'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Calculator, Zap, TrendingUp, PiggyBank, Sun } from 'lucide-react';
import {
  ECONOMIC_FACTS,
  SOURCE_NOTES,
  SYSTEM_PRICE_NOTES,
  calculateAnnualSolarValueRange,
  formatSwissNumber,
  getSystemCostRange,
} from '@/lib/facts';

// Functional control bounds, not economic content claims.
const ROOF_MIN = 20;
const ROOF_MAX = 200;

const translations = {
  de: {
    title: 'Solarrechner',
    subtitle: 'Berechnen Sie in wenigen Sekunden das Potenzial Ihrer Solaranlage',
    roofLabel: 'Verfügbare Dachfläche (m²)',
    consumptionLabel: 'Jährlicher Stromverbrauch (kWh)',
    calculateBtn: 'Berechnen',
    resultsTitle: 'Ihre Ergebnisse',
    systemSizeLabel: 'Anlagengrösse',
    annualProdLabel: 'Jährliche Produktion',
    costBeforeLabel: 'Bruttokosten vor Förderung',
    pronovoLink: 'Förderbetrag durch Pronovo berechnen →',
    annualSavingsLabel: 'Jährliche Einsparung',
    paybackLabel: 'Richtwert Amortisation (Mittelland)',
    paybackUnit: 'Jahre',
    disclaimer: 'Die Berechnung verwendet die Richtwerte für das Schweizer Mittelland.',
    ctaBtn: 'Jetzt individuelle Offerte einholen',
    ctaUrl: '/anfrage',
    roofMin: `${ROOF_MIN} m²`,
    roofMax: `${ROOF_MAX} m²`,
    consMin: "1'000 kWh",
    consMax: "10'000 kWh",
  },
  fr: {
    title: 'Calculateur solaire',
    subtitle: 'Calculez en quelques secondes le potentiel de votre installation solaire',
    roofLabel: 'Surface de toit disponible (m²)',
    consumptionLabel: "Consommation annuelle d'électricité (kWh)",
    calculateBtn: 'Calculer',
    resultsTitle: 'Vos résultats',
    systemSizeLabel: "Taille de l'installation",
    annualProdLabel: 'Production annuelle',
    costBeforeLabel: 'Coûts bruts avant subvention',
    pronovoLink: 'Calculer l’aide avec Pronovo →',
    annualSavingsLabel: 'Économies annuelles',
    paybackLabel: "Repère d'amortissement (Plateau)",
    paybackUnit: 'ans',
    disclaimer: 'Le calcul utilise les valeurs indicatives du Plateau suisse.',
    ctaBtn: 'Obtenir un devis personnalisé',
    ctaUrl: '/fr/demande',
    roofMin: `${ROOF_MIN} m²`,
    roofMax: `${ROOF_MAX} m²`,
    consMin: "1'000 kWh",
    consMax: "10'000 kWh",
  },
  en: {
    title: 'Solar Calculator',
    subtitle: 'Calculate the potential of your solar installation in seconds',
    roofLabel: 'Available roof area (m²)',
    consumptionLabel: 'Annual electricity consumption (kWh)',
    calculateBtn: 'Calculate',
    resultsTitle: 'Your results',
    systemSizeLabel: 'System size',
    annualProdLabel: 'Annual production',
    costBeforeLabel: 'Gross costs before subsidy',
    pronovoLink: 'Calculate the incentive with Pronovo →',
    annualSavingsLabel: 'Annual savings',
    paybackLabel: 'Payback benchmark (Plateau)',
    paybackUnit: 'years',
    disclaimer: 'The calculation uses the indicative values for the Swiss Plateau.',
    ctaBtn: 'Get a personalised quote',
    ctaUrl: '/en/request',
    roofMin: `${ROOF_MIN} m²`,
    roofMax: `${ROOF_MAX} m²`,
    consMin: "1'000 kWh",
    consMax: "10'000 kWh",
  },
  it: {
    title: 'Calcolatore solare',
    subtitle: 'Calcola in pochi secondi il potenziale del tuo impianto solare',
    roofLabel: 'Superficie del tetto disponibile (m²)',
    consumptionLabel: 'Consumo annuo di elettricità (kWh)',
    calculateBtn: 'Calcola',
    resultsTitle: 'I tuoi risultati',
    systemSizeLabel: 'Dimensione impianto',
    annualProdLabel: 'Produzione annua',
    costBeforeLabel: "Costi lordi prima dell'incentivo",
    pronovoLink: 'Calcola l’incentivo con Pronovo →',
    annualSavingsLabel: 'Risparmio annuo',
    paybackLabel: 'Riferimento ammortamento (Altopiano)',
    paybackUnit: 'anni',
    disclaimer: "Il calcolo usa i valori indicativi per l'Altopiano svizzero.",
    ctaBtn: 'Richiedi un preventivo personalizzato',
    ctaUrl: '/it/richiesta',
    roofMin: `${ROOF_MIN} m²`,
    roofMax: `${ROOF_MAX} m²`,
    consMin: "1'000 kWh",
    consMax: "10'000 kWh",
  },
} as const;

function getLocale(pathname: string): keyof typeof translations {
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/it')) return 'it';
  return 'de';
}

export default function SolarCalculator() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const tx = translations[locale];

  const [roofSize, setRoofSize] = useState<number>(50);
  const [consumption, setConsumption] = useState<number>(4500);
  const [results, setResults] = useState<{
    systemSize: number;
    annualProduction: number;
    costBeforeMin: number;
    costBeforeMax: number;
    savingsMin: number;
    savingsMax: number;
    paybackMin: number;
    paybackMax: number;
  } | null>(null);

  const calculateResults = () => {
    const systemSize = Math.round((roofSize / ECONOMIC_FACTS.roofAreaM2PerKwp) * 10) / 10;
    const annualProduction = Math.round(systemSize * ECONOMIC_FACTS.production.plateauKwhPerKwp.min);
    const costs = getSystemCostRange(systemSize);
    const savings = calculateAnnualSolarValueRange(annualProduction, consumption);
    const paybackMin = ECONOMIC_FACTS.systemPaybackYears.plateau.min;
    const paybackMax = ECONOMIC_FACTS.systemPaybackYears.plateau.max;
    setResults({
      systemSize,
      annualProduction,
      costBeforeMin: costs.min,
      costBeforeMax: costs.max,
      savingsMin: savings.min,
      savingsMax: savings.max,
      paybackMin,
      paybackMax,
    });
  };

  const fmt = (n: number) => formatSwissNumber(n);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-sans font-semibold tracking-tight text-gray-900">{tx.title}</h2>
      </div>

      <p className="text-gray-600 mb-8">{tx.subtitle}</p>

      <div className="space-y-6 mb-8">
        <div>
          <label className="label">{tx.roofLabel}</label>
          <input
            type="range" min={ROOF_MIN} max={ROOF_MAX} step="5" value={roofSize}
            onChange={(e) => setRoofSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{tx.roofMin}</span>
            <span className="font-sans font-semibold tracking-tight text-primary">{roofSize} m²</span>
            <span>{tx.roofMax}</span>
          </div>
        </div>

        <div>
          <label className="label">{tx.consumptionLabel}</label>
          <input
            type="range" min="1000" max="10000" step="500" value={consumption}
            onChange={(e) => setConsumption(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{tx.consMin}</span>
            <span className="font-sans font-semibold tracking-tight text-primary">{fmt(consumption)} kWh</span>
            <span>{tx.consMax}</span>
          </div>
        </div>

        <button onClick={calculateResults} className="btn-primary w-full">{tx.calculateBtn}</button>
      </div>

      {results && (
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-sans font-semibold tracking-tight text-gray-900 mb-6">{tx.resultsTitle}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">{tx.systemSizeLabel}</span>
              </div>
              <div className="text-2xl font-sans font-semibold tracking-tight text-primary">{results.systemSize} kWp</div>
            </div>
            <div className="bg-trust-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Sun className="w-4 h-4 text-trust" />
                <span className="text-sm text-gray-600">{tx.annualProdLabel}</span>
              </div>
              <div className="text-2xl font-sans font-semibold tracking-tight text-trust">{fmt(results.annualProduction)} kWh</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">{tx.costBeforeLabel}</span>
              <span className="font-sans font-semibold tracking-tight text-gray-900">{fmt(results.costBeforeMin)}–{fmt(results.costBeforeMax)} CHF</span>
            </div>
             <div className="pt-2 border-t border-gray-200">
               <a
                 href="https://pronovo.ch/"
                 target="_blank"
                 rel="noreferrer"
                 className="text-sm font-semibold text-primary hover:underline"
               >
                 {tx.pronovoLink}
               </a>
               <p className="text-xs text-gray-500 mt-1">{tx.disclaimer}</p>
             </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <PiggyBank className="w-4 h-4 text-primary" />
                <span className="text-gray-700">{tx.annualSavingsLabel}</span>
              </div>
              <span className="font-sans font-semibold tracking-tight text-primary">{fmt(results.savingsMin)}–{fmt(results.savingsMax)} CHF</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{tx.paybackLabel}</span>
              </div>
              <span className="font-sans font-semibold tracking-tight text-gray-900">
                 {results.paybackMin}–{results.paybackMax} {tx.paybackUnit}
              </span>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">{tx.disclaimer}</p>
            <p className="text-xs text-yellow-800 mt-2">{SOURCE_NOTES[locale]}</p>
            <p className="text-xs text-yellow-800 mt-2">{SYSTEM_PRICE_NOTES[locale]}</p>
          </div>

          <button
            onClick={() => { window.location.href = tx.ctaUrl; }}
            className="btn-primary w-full mt-6"
          >
            {tx.ctaBtn}
          </button>
        </div>
      )}
    </div>
  );
}
