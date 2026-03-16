'use client';

import { useState } from 'react';

type HouseholdKey = 'klein' | 'mittel' | 'gross';

const households: Record<HouseholdKey, { label: string; kwh: string; speicher: string; personen: string }> = {
  klein:  { label: 'Kleiner Haushalt',            kwh: 'ca. 5 kWh',    speicher: '≈ 5 kWh',   personen: '1–2 Personen' },
  mittel: { label: 'Einfamilienhaus',              kwh: '8–10 kWh',     speicher: '8–10 kWh',  personen: '3–4 Personen' },
  gross:  { label: 'Grosser Haushalt / E-Auto',   kwh: 'ca. 15 kWh',   speicher: '10–15 kWh', personen: '4+ Personen' },
};

export function SpeicherGroesse() {
  const [active, setActive] = useState<HouseholdKey>('mittel');
  const h = households[active];

  return (
    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
      {/* Tab switcher */}
      <div className="flex border-b border-gray-100 bg-gray-50">
        {(Object.keys(households) as HouseholdKey[]).map(k => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={`flex-1 py-4 text-sm font-bold transition-all duration-200 ${
              active === k
                ? 'bg-white text-gray-900 border-b-2 border-orange-500'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {households[k].label.split(' ')[0]}
          </button>
        ))}
      </div>

      <div className="bg-white p-8">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{h.personen}</p>
        <h3 className="text-2xl font-black text-gray-900 mb-6">{h.label}</h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-xs text-orange-500 font-semibold uppercase tracking-wide mb-2">Empfohlener Speicher</p>
            <p className="text-3xl font-black text-[#F97316]">{h.speicher}</p>
          </div>
          <div className="rounded-2xl p-5 text-center" style={{ background: '#f9fafb' }}>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Tageskapazität</p>
            <p className="text-3xl font-black text-gray-800">{h.kwh}</p>
          </div>
        </div>

        {/* Eigenverbrauch bars */}
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>Eigenverbrauch ohne Speicher</span><span className="font-bold text-gray-600">~30%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-gray-300" style={{ width: '30%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>Eigenverbrauch mit Speicher</span>
              <span className="font-bold text-[#F97316]">{active === 'klein' ? '~60%' : active === 'mittel' ? '~70%' : '~80%'}</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: active === 'klein' ? '60%' : active === 'mittel' ? '70%' : '80%', background: 'linear-gradient(to right, #fb923c, #F97316)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  { q: 'Was kostet eine 10 kW Solaranlage mit Speicher und Montage?', a: "Eine Photovoltaikanlage mit etwa 10 kWp und Batteriespeicher kostet in der Schweiz häufig zwischen 30'000 und 40'000 CHF inklusive Installation. Förderprogramme und ein hoher Eigenverbrauch können die tatsächlichen Kosten langfristig reduzieren." },
  { q: 'Wie lange reicht ein 5 kWh Speicher?', a: 'Ein 5-kWh-Speicher kann je nach Stromverbrauch mehrere Stunden liefern. In vielen Haushalten reicht diese Kapazität aus, um den Strombedarf am Abend zu decken. Für Haushalte mit höherem Verbrauch wird ein grösserer Speicher empfohlen.' },
  { q: 'Was kostet eine komplette Solaranlage mit Speicher für ein Einfamilienhaus?', a: "Für ein Einfamilienhaus liegen die Gesamtkosten häufig zwischen 25'000 und 40'000 CHF. Der Preis hängt von Anlagengrösse, Speicherkapazität und Installationskosten ab." },
  { q: 'Wie gross muss ein Batteriespeicher für ein Einfamilienhaus sein?', a: 'Für die meisten Einfamilienhäuser liegt die optimale Speichergrösse zwischen 8 und 12 kWh. Diese Kapazität reicht in vielen Fällen aus, um einen grossen Teil des Solarstroms abends oder nachts zu nutzen.' },
  { q: 'Kann eine 10-kW-Solaranlage ein ganzes Haus versorgen?', a: 'Eine 10-kWp-Anlage kann einen grossen Teil des Strombedarfs decken. Mit Speicher ist der Eigenverbrauch noch höher, doch in Wintermonaten oder bei sehr hohem Verbrauch bleibt oft ein Netzbezug notwendig.' },
  { q: 'Wie viele Solarmodule braucht man für eine 10-kW-Anlage?', a: 'Für eine 10-kWp-Anlage werden normalerweise 25–30 Module benötigt. Die genaue Anzahl hängt von der Leistung der einzelnen Module ab — moderne Module haben oft 400–450 Watt.' },
];

export function SpeicherFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => (
        <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-bold text-gray-900 pr-6 text-sm leading-snug">{f.q}</span>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-200 ${open === i ? 'rotate-45' : ''}`}
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
