'use client';

import { useState } from 'react';
import { Calculator, Zap, TrendingUp } from 'lucide-react';

export default function SolarCalculator() {
  const [roofSize, setRoofSize] = useState<number>(50);
  const [consumption, setConsumption] = useState<number>(4500);
  const [results, setResults] = useState<{
    systemSize: number;
    annualProduction: number;
    costs: { min: number; max: number };
    savings: number;
    paybackYears: number;
  } | null>(null);

  const calculateResults = () => {
    // Simple calculation logic
    const systemSize = Math.round((roofSize / 7) * 10) / 10; // ~7m² per kWp
    const annualProduction = Math.round(systemSize * 1100); // ~1100 kWh per kWp in Switzerland
    const costsMin = Math.round(systemSize * 1900); // 1900 CHF per kWp
    const costsMax = Math.round(systemSize * 2500); // 2500 CHF per kWp
    const savings = Math.round(Math.min(annualProduction, consumption) * 0.32); // 0.32 CHF per kWh
    const averageCost = (costsMin + costsMax) / 2;
    const paybackYears = Math.round((averageCost / savings) * 10) / 10;

    setResults({
      systemSize,
      annualProduction,
      costs: { min: costsMin, max: costsMax },
      savings,
      paybackYears,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Solarrechner</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Berechnen Sie in wenigen Sekunden das Potenzial Ihrer Solaranlage
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <label className="label">
            Verfügbare Dachfläche (m²)
          </label>
          <input
            type="range"
            min="20"
            max="200"
            step="5"
            value={roofSize}
            onChange={(e) => setRoofSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>20 m²</span>
            <span className="font-bold text-primary">{roofSize} m²</span>
            <span>200 m²</span>
          </div>
        </div>

        <div>
          <label className="label">
            Jährlicher Stromverbrauch (kWh)
          </label>
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={consumption}
            onChange={(e) => setConsumption(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>1.000 kWh</span>
            <span className="font-bold text-primary">{consumption.toLocaleString('de-CH')} kWh</span>
            <span>10.000 kWh</span>
          </div>
        </div>

        <button onClick={calculateResults} className="btn-primary w-full">
          Berechnen
        </button>
      </div>

      {results && (
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Ihre Ergebnisse</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">Anlagengrösse</span>
              </div>
              <div className="text-2xl font-bold text-primary">{results.systemSize} kWp</div>
            </div>

            <div className="bg-trust-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-trust" />
                <span className="text-sm text-gray-600">Jährliche Produktion</span>
              </div>
              <div className="text-2xl font-bold text-trust">{results.annualProduction.toLocaleString('de-CH')} kWh</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Geschätzte Kosten</span>
              <span className="font-bold text-gray-900">
                {results.costs.min.toLocaleString('de-CH')} - {results.costs.max.toLocaleString('de-CH')} CHF
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Jährliche Einsparung</span>
              <span className="font-bold text-primary">{results.savings.toLocaleString('de-CH')} CHF</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Amortisationszeit</span>
              <span className="font-bold text-gray-900">ca. {results.paybackYears} Jahre</span>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              Dies ist eine Schätzung. Für eine genaue Berechnung empfehlen wir eine professionelle Beratung.
            </p>
          </div>

          <a href="#formular" className="btn-primary w-full mt-6">
            Jetzt individuelle Offerte einholen
          </a>
        </div>
      )}
    </div>
  );
}
