'use client';

import { useState } from 'react';
import { Building2, ChevronDown, Zap } from 'lucide-react';

const STEPS = [
  { wohnungen: 4,  label: '4 Wohnungen',  kwpMin: 15, kwpMax: 25 },
  { wohnungen: 8,  label: '8 Wohnungen',  kwpMin: 25, kwpMax: 40 },
  { wohnungen: 12, label: '12 Wohnungen', kwpMin: 40, kwpMax: 55 },
  { wohnungen: 20, label: '20 Wohnungen', kwpMin: 55, kwpMax: 80 },
  { wohnungen: 30, label: '30+ Wohnungen', kwpMin: 80, kwpMax: 120 },
];

function priceRange(kwpMin: number, kwpMax: number) {
  const lo = Math.round((kwpMin * 2000) / 1000) * 1000;
  const hi = Math.round((kwpMax * 2500) / 1000) * 1000;
  return { lo, hi };
}

function fmt(n: number) {
  return n.toLocaleString('de-CH');
}

const faqs = [
  { q: 'Was kostet eine Solaranlage für ein Mehrfamilienhaus?', a: "Die Kosten liegen je nach Grösse meist zwischen 40'000 und über 150'000 CHF. Entscheidend sind die Anzahl der Wohnungen, die Dachfläche und die Leistung der Anlage. Pro kWp sinken die Kosten bei grösseren Anlagen deutlich." },
  { q: 'Wie wird Solarstrom im Mehrfamilienhaus berechnet?', a: 'Der Strom wird über ein internes System (ZEV) verteilt. Jede Wohnung erhält einen eigenen Zähler und zahlt nur für den tatsächlich genutzten Strom. Die Abrechnung erfolgt meist digital und transparent.' },
  { q: 'Ist ein Mehrfamilienhaus eine gute Kapitalanlage mit Photovoltaik?', a: 'Ja, da Solarstrom direkt verkauft werden kann. Eigentümer profitieren von zusätzlichen Einnahmen, niedrigeren Betriebskosten und einer Wertsteigerung der Immobilie.' },
  { q: 'Welche Grösse sollte eine Photovoltaikanlage haben?', a: 'Die Grösse hängt vom Stromverbrauch ab. Typische Anlagen liegen zwischen 20 und 80 kWp, je nach Anzahl der Wohnungen und verfügbarer Dachfläche.' },
  { q: 'Was bedeutet die 70%-Regel bei Photovoltaik?', a: 'Die 70%-Regel bedeutet, dass die Einspeiseleistung begrenzt wird. In modernen Anlagen wird dies meist durch intelligente Steuerung optimiert, sodass möglichst wenig Energie verloren geht.' },
  { q: 'Wann lohnt sich Photovoltaik nicht?', a: 'Photovoltaik lohnt sich weniger bei stark verschatteten Dächern, sehr kleinen Dachflächen oder extrem niedrigem Stromverbrauch im Gebäude.' },
  { q: 'Wie lange reicht ein 10 kWh Speicher mit Wärmepumpe?', a: 'Ein 10-kWh-Speicher kann je nach Verbrauch mehrere Stunden Energie liefern. In Mehrfamilienhäusern wird jedoch häufig auf grössere Systeme oder direkten Verbrauch ohne Speicher gesetzt.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-bold text-gray-900 text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#F97316] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export function MehrfamilienhausFaq() {
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
    </div>
  );
}

export default function MehrfamilienhausRechner() {
  const [step, setStep] = useState(1);
  const s = STEPS[step];
  const { lo, hi } = priceRange(s.kwpMin, s.kwpMax);
  const m2Min = s.kwpMin * 5;
  const m2Max = s.kwpMax * 6;
  const foerderung = Math.round(((s.kwpMin + s.kwpMax) / 2) * 360 / 500) * 500;
  const prodMin = s.kwpMin * 900;
  const prodMax = s.kwpMax * 1100;

  return (
    <div className="rounded-3xl border border-gray-100 shadow-md bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#0f1f3d] px-6 sm:px-8 py-6">
        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">ZEV-Rechner</p>
        <h3 className="text-white text-xl font-bold">Wie gross sollte die Anlage sein?</h3>
        <p className="text-white/60 text-sm mt-1">Wählen Sie die Anzahl Wohnungen im Gebäude.</p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Apartment selector */}
        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Anzahl Wohnungen</p>
          <div className="grid grid-cols-5 gap-2">
            {STEPS.map((st, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`rounded-xl border-2 p-3 text-center transition-all ${step === i ? 'border-[#F97316] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                <Building2 className={`w-5 h-5 mx-auto mb-1 ${step === i ? 'text-[#F97316]' : 'text-gray-400'}`} />
                <p className={`font-bold text-xs ${step === i ? 'text-[#F97316]' : 'text-gray-700'}`}>{st.wohnungen}</p>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center font-medium">{s.label}</p>
        </div>

        {/* Visual size bar */}
        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Anlagengrösse (kWp)</p>
          <div className="relative h-6 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-amber-400 transition-all duration-500"
              style={{ width: `${Math.min(100, (s.kwpMax / 120) * 100)}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-end pr-3">
              <span className="text-xs font-bold text-white drop-shadow">{s.kwpMin}–{s.kwpMax} kWp</span>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>15 kWp</span><span>120 kWp</span>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-5 h-5 text-[#F97316]" />
            <p className="font-bold text-gray-900">Empfehlung für {s.wohnungen} Wohnungen</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Anlagengrösse', value: `${s.kwpMin}–${s.kwpMax} kWp`, accent: true },
              { label: 'Dachfläche', value: `${m2Min}–${m2Max} m²` },
              { label: 'Investition', value: `${fmt(lo)}–${fmt(hi)} CHF` },
              { label: 'Jahresproduktion', value: `${fmt(prodMin)}–${fmt(prodMax)} kWh` },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-3 text-center ${item.accent ? 'bg-[#F97316] text-white' : 'bg-white border border-orange-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${item.accent ? 'text-orange-100' : 'text-gray-400'}`}>{item.label}</p>
                <p className={`font-bold text-sm ${item.accent ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
            <span>Richtwerte. Individuelle Offerte empfohlen.</span>
            <span className="font-semibold text-green-600">EIV-Förderung: ca. {fmt(foerderung)} CHF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
