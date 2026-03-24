'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Calculator, Zap, TrendingUp, PiggyBank, Sun, Gift } from 'lucide-react';

const M2_PER_KWP = 6.5;
const KWH_PER_KWP = 950;
const CHF_PER_KWP = 2200;
const INCENTIVE_PER_KWP = 350;
const CHF_PER_KWH = 0.32;

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
    costBeforeLabel: 'Kosten vor Förderung',
    incentiveLabel: 'Bundesförderung (EIV)',
    costAfterLabel: 'Endkosten nach Förderung',
    annualSavingsLabel: 'Jährliche Einsparung',
    paybackLabel: 'Amortisationszeit',
    paybackUnit: 'Jahre',
    disclaimer: "Schätzung auf Basis von Schweizer Durchschnittswerten (950 kWh/kWp, 2'200 CHF/kWp). Für eine genaue Berechnung empfehlen wir eine professionelle Beratung vor Ort.",
    ctaBtn: 'Jetzt individuelle Offerte einholen',
    ctaUrl: '/anfrage',
    roofMin: '20 m²',
    roofMax: '200 m²',
    consMin: '1.000 kWh',
    consMax: '10.000 kWh',
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
    costBeforeLabel: 'Coûts avant subvention',
    incentiveLabel: 'Subvention fédérale (RU)',
    costAfterLabel: 'Coûts nets après subvention',
    annualSavingsLabel: 'Économies annuelles',
    paybackLabel: "Durée d'amortissement",
    paybackUnit: 'ans',
    disclaimer: "Estimation basée sur des valeurs moyennes suisses (950 kWh/kWp, 2'200 CHF/kWp). Pour un calcul exact, nous recommandons une consultation professionnelle sur place.",
    ctaBtn: 'Obtenir un devis personnalisé',
    ctaUrl: '/fr/demande',
    roofMin: '20 m²',
    roofMax: '200 m²',
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
    costBeforeLabel: 'Costs before subsidy',
    incentiveLabel: 'Federal subsidy (OTP)',
    costAfterLabel: 'Net costs after subsidy',
    annualSavingsLabel: 'Annual savings',
    paybackLabel: 'Payback period',
    paybackUnit: 'years',
    disclaimer: 'Estimate based on Swiss average values (950 kWh/kWp, CHF 2,200/kWp). For an exact calculation, we recommend a professional on-site consultation.',
    ctaBtn: 'Get a personalised quote',
    ctaUrl: '/en/request',
    roofMin: '20 m²',
    roofMax: '200 m²',
    consMin: '1,000 kWh',
    consMax: '10,000 kWh',
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
    costBeforeLabel: "Costi prima dell'incentivo",
    incentiveLabel: 'Incentivo federale (RU)',
    costAfterLabel: 'Costi netti dopo incentivo',
    annualSavingsLabel: 'Risparmio annuo',
    paybackLabel: 'Periodo di ammortamento',
    paybackUnit: 'anni',
    disclaimer: "Stima basata su valori medi svizzeri (950 kWh/kWp, 2'200 CHF/kWp). Per un calcolo esatto raccomandiamo una consulenza professionale in loco.",
    ctaBtn: 'Richiedi un preventivo personalizzato',
    ctaUrl: '/it/richiesta',
    roofMin: '20 m²',
    roofMax: '200 m²',
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
  const tx = translations[getLocale(pathname)];

  const [roofSize, setRoofSize] = useState<number>(50);
  const [consumption, setConsumption] = useState<number>(4500);
  const [results, setResults] = useState<{
    systemSize: number;
    annualProduction: number;
    costBefore: number;
    incentive: number;
    costAfter: number;
    savings: number;
    paybackYears: number;
  } | null>(null);

  const calculateResults = () => {
    const systemSize = Math.round((roofSize / M2_PER_KWP) * 10) / 10;
    const annualProduction = Math.round(systemSize * KWH_PER_KWP);
    const costBefore = Math.round(systemSize * CHF_PER_KWP);
    const incentive = Math.round(systemSize * INCENTIVE_PER_KWP);
    const costAfter = costBefore - incentive;
    const savings = Math.round(Math.min(annualProduction, consumption) * CHF_PER_KWH);
    const paybackYears = Math.round((costAfter / savings) * 10) / 10;
    setResults({ systemSize, annualProduction, costBefore, incentive, costAfter, savings, paybackYears });
  };

  const fmt = (n: number) => n.toLocaleString('de-CH');

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
            type="range" min="20" max="200" step="5" value={roofSize}
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
              <span className="font-sans font-semibold tracking-tight text-gray-900">{fmt(results.costBefore)} CHF</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">{tx.incentiveLabel}</span>
              </div>
              <span className="font-sans font-semibold tracking-tight text-green-600">− {fmt(results.incentive)} CHF</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="font-sans font-semibold tracking-tight text-gray-900">{tx.costAfterLabel}</span>
              <span className="font-sans font-semibold tracking-tight text-primary text-lg">{fmt(results.costAfter)} CHF</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <PiggyBank className="w-4 h-4 text-primary" />
                <span className="text-gray-700">{tx.annualSavingsLabel}</span>
              </div>
              <span className="font-sans font-semibold tracking-tight text-primary">{fmt(results.savings)} CHF</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{tx.paybackLabel}</span>
              </div>
              <span className="font-sans font-semibold tracking-tight text-gray-900">
                ca. {results.paybackYears} {tx.paybackUnit}
              </span>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">{tx.disclaimer}</p>
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
