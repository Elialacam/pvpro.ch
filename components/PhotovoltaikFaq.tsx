'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'Was kostet eine Solaranlage pro m² in der Schweiz?',
    a: 'Die Kosten liegen in der Schweiz in der Regel zwischen 200 und 400 CHF pro m². Der genaue Preis hängt von der Grösse der Anlage, der Qualität der Module und dem Installationsaufwand ab. Für eine genaue Berechnung ist eine individuelle Offerte empfehlenswert.',
  },
  {
    q: 'Was kostet 1 m² Photovoltaik?',
    a: 'Ein einzelner Quadratmeter Photovoltaik kostet durchschnittlich 200 bis 350 CHF. Dabei sind jedoch nicht immer alle Komponenten enthalten. Für eine komplette Anlage inklusive Installation sind die Gesamtkosten pro m² oft etwas höher.',
  },
  {
    q: 'Wie viel kostet 1 Quadratmeter Photovoltaik komplett?',
    a: 'Für eine komplette Photovoltaikanlage inklusive Installation liegen die Kosten meist zwischen 250 und 400 CHF pro m². Der Preis hängt von der Anlagengrösse, dem Dachtyp und den verwendeten Komponenten ab.',
  },
  {
    q: 'Was kostet eine 10 kW Photovoltaikanlage komplett?',
    a: "Eine Photovoltaikanlage mit etwa 10 kWp Leistung kostet in der Schweiz häufig zwischen 20'000 und 30'000 CHF. Der Preis variiert je nach Installateur, Dach und Qualität der Anlage.",
  },
  {
    q: 'Wie viel Quadratmeter braucht man für 20 kWp?',
    a: 'Für eine Anlage mit 20 kWp Leistung werden in der Regel etwa 100 bis 120 m² Dachfläche benötigt. Die genaue Fläche hängt von der Leistung der einzelnen Solarmodule ab.',
  },
  {
    q: 'Wann lohnt sich Photovoltaik nicht?',
    a: 'Photovoltaik lohnt sich weniger, wenn das Dach stark verschattet ist, eine ungünstige Ausrichtung hat oder der Stromverbrauch sehr niedrig ist. Auch bei sehr kleinen Dachflächen kann die Wirtschaftlichkeit eingeschränkt sein.',
  },
  {
    q: 'Was kostet eine 30 kW Photovoltaikanlage?',
    a: "Eine grössere Anlage mit etwa 30 kWp Leistung kostet in der Schweiz häufig zwischen 45'000 und 70'000 CHF. Pro kWp sinkt der Preis bei grösseren Anlagen meist etwas.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-bold text-gray-900 text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#F97316] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function PhotovoltaikFaq() {
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((faq) => (
        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
