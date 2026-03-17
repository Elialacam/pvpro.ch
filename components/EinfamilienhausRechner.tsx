'use client';

import { useState } from 'react';
import { Zap, Car, Thermometer, ChevronDown } from 'lucide-react';

const PRESETS = [
  { label: "3'500 kWh", value: 3500, desc: 'Kleiner Haushalt (2 Personen)' },
  { label: "4'500 kWh", value: 4500, desc: 'Mittlerer Haushalt (3–4 Personen)' },
  { label: "6'500 kWh", value: 6500, desc: 'Grosser Haushalt (5+ Personen)' },
];

function calcResult(base: number, waerme: boolean, ev: boolean) {
  const total = base + (waerme ? 2500 : 0) + (ev ? 2000 : 0);
  const kwp = Math.round((total / 1100) * 10) / 10;
  const kwpMin = Math.max(4, Math.round((kwp * 0.85) * 10) / 10);
  const kwpMax = Math.round((kwp * 1.15) * 10) / 10;
  const m2Min = Math.round(kwpMin * 5);
  const m2Max = Math.round(kwpMax * 6);
  const priceMin = Math.round(kwpMin * 2200 / 500) * 500;
  const priceMax = Math.round(kwpMax * 2800 / 500) * 500;
  const prodMin = Math.round(kwpMin * 900);
  const prodMax = Math.round(kwpMax * 1100);
  const foerderung = Math.round(((kwpMin + kwpMax) / 2) * 360 / 100) * 100;
  return { kwpMin, kwpMax, m2Min, m2Max, priceMin, priceMax, prodMin, prodMax, foerderung, total };
}

function fmt(n: number) {
  return n.toLocaleString('de-CH');
}

const faqs = [
  { q: 'Was kostet eine Photovoltaikanlage für ein Einfamilienhaus?', a: "Die Kosten liegen in der Schweiz meist zwischen 20'000 und 35'000 CHF, abhängig von Grösse, Technik und Installation. Nach Förderungen und Steuerabzügen sinken die effektiven Kosten oft deutlich." },
  { q: 'Wie gross sollte eine Solaranlage für ein Einfamilienhaus sein?', a: 'Für ein durchschnittliches Einfamilienhaus wird eine Anlage mit etwa 8 bis 10 kWp empfohlen. Diese Grösse deckt einen grossen Teil des Strombedarfs ab und ist wirtschaftlich sinnvoll.' },
  { q: 'Wie viel Strom produziert eine Solaranlage auf einem Einfamilienhaus?', a: "Eine typische Anlage produziert etwa 9'000 bis 11'000 kWh pro Jahr. Das reicht oft aus, um den Grossteil des Stromverbrauchs eines Haushalts zu decken." },
  { q: 'Lohnt sich eine Solaranlage für ein Einfamilienhaus?', a: 'Ja, besonders bei hohem Eigenverbrauch lohnt sich eine Solaranlage. Sie senkt langfristig die Stromkosten und macht unabhängiger vom Energieversorger.' },
  { q: 'Braucht man einen Batteriespeicher?', a: 'Ein Batteriespeicher ist nicht zwingend notwendig, kann aber sinnvoll sein. Er erhöht den Eigenverbrauch deutlich und ermöglicht die Nutzung von Solarstrom auch am Abend.' },
  { q: 'Wie lange hält eine Solaranlage?', a: 'Moderne Photovoltaikanlagen haben eine Lebensdauer von 25 bis 30 Jahren. Viele Hersteller geben entsprechende Leistungsgarantien.' },
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

export function EinfamilienhausFaq() {
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
    </div>
  );
}

export default function EinfamilienhausRechner() {
  const [preset, setPreset] = useState(1);
  const [waerme, setWaerme] = useState(false);
  const [ev, setEv] = useState(false);

  const base = PRESETS[preset].value;
  const r = calcResult(base, waerme, ev);

  return (
    <div className="rounded-3xl border border-gray-100 shadow-md bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#0f1f3d] px-6 sm:px-8 py-6">
        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Interaktiv</p>
        <h3 className="text-white text-xl font-bold">Wie gross sollte Ihre Anlage sein?</h3>
        <p className="text-white/60 text-sm mt-1">Wählen Sie Ihren Jahresverbrauch und Optionen.</p>
      </div>

      <div className="p-6 sm:p-8">
        {/* Preset selector */}
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Jahresverbrauch</p>
          <div className="grid grid-cols-3 gap-2">
            {PRESETS.map((p, i) => (
              <button
                key={i}
                onClick={() => setPreset(i)}
                className={`rounded-xl border-2 p-3 text-center transition-all ${preset === i ? 'border-[#F97316] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}
              >
                <p className={`font-bold text-sm ${preset === i ? 'text-[#F97316]' : 'text-gray-800'}`}>{p.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-tight hidden sm:block">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Zusätzliche Verbraucher</p>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { label: 'Wärmepumpe', sublabel: '+2\'500 kWh/Jahr', icon: Thermometer, value: waerme, set: setWaerme },
              { label: 'Elektroauto', sublabel: '+2\'000 kWh/Jahr', icon: Car, value: ev, set: setEv },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.label}
                  onClick={() => t.set(!t.value)}
                  className={`flex-1 flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${t.value ? 'border-[#F97316] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${t.value ? 'bg-[#F97316]' : 'bg-gray-100'}`}>
                    <Icon className={`w-4.5 h-4.5 ${t.value ? 'text-white' : 'text-gray-500'}`} style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${t.value ? 'text-[#F97316]' : 'text-gray-800'}`}>{t.label}</p>
                    <p className="text-xs text-gray-400">{t.sublabel}</p>
                  </div>
                  <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t.value ? 'border-[#F97316] bg-[#F97316]' : 'border-gray-300'}`}>
                    {t.value && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Result */}
        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-5 h-5 text-[#F97316]" />
            <p className="font-bold text-gray-900">Empfehlung für Ihren Haushalt</p>
            <span className="ml-auto text-xs text-gray-400 bg-white rounded-full px-2 py-0.5 border border-gray-100">
              Gesamtverbrauch: {fmt(r.total)} kWh/Jahr
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Anlagengrösse', value: `${r.kwpMin}–${r.kwpMax} kWp`, accent: true },
              { label: 'Dachfläche', value: `${r.m2Min}–${r.m2Max} m²`, accent: false },
              { label: 'Investition', value: `${fmt(r.priceMin)}–${fmt(r.priceMax)} CHF`, accent: false },
              { label: 'Förderung EIV', value: `ca. ${fmt(r.foerderung)} CHF`, accent: false },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-3 text-center ${item.accent ? 'bg-[#F97316] text-white' : 'bg-white border border-orange-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${item.accent ? 'text-orange-100' : 'text-gray-400'}`}>{item.label}</p>
                <p className={`font-bold text-sm sm:text-base ${item.accent ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Richtwerte. Für eine genaue Berechnung empfehlen wir eine kostenlose Offerte.</p>
        </div>
      </div>
    </div>
  );
}
