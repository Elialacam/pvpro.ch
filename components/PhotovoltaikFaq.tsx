'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/lib/LocaleContext';
import { ECONOMIC_FACTS, SOURCE_NOTES, SYSTEM_PRICE_NOTES, formatSwissNumber, getSystemCostRange } from '@/lib/facts';

const faqsDe = [
  { q: 'Was kostet eine 10 kW Photovoltaikanlage komplett?', a: `Eine schlüsselfertige Anlage mit 10 kWp kostet ohne Speicher ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min, 0)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max, 0)} CHF.` },
  { q: 'Wie viel Quadratmeter braucht man für 20 kWp?', a: `Als Richtwert gelten ${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m² pro kWp. Für 20 kWp sind das rund ${formatSwissNumber(20 * ECONOMIC_FACTS.roofAreaM2PerKwp, 0)} m².` },
  { q: 'Wann lohnt sich Photovoltaik nicht?', a: 'Photovoltaik lohnt sich weniger, wenn das Dach stark verschattet ist, eine ungünstige Ausrichtung hat oder der Stromverbrauch sehr niedrig ist. Auch bei sehr kleinen Dachflächen kann die Wirtschaftlichkeit eingeschränkt sein.' },
  { q: 'Was kostet eine 30 kW Photovoltaikanlage?', a: `Auf Basis von ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.min, 0)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.max, 0)} CHF pro kWp ergibt sich für 30 kWp ein Richtwert von ${formatSwissNumber(getSystemCostRange(30).min, 0)} bis ${formatSwissNumber(getSystemCostRange(30).max, 0)} CHF.` },
];

const faqsIt = [
  { q: 'Quanto costa un impianto fotovoltaico da 10 kW completo?', a: `Un impianto chiavi in mano da 10 kWp costa da ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min, 0)} a ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max, 0)} CHF senza accumulo.` },
  { q: 'Quanti metri quadri servono per 20 kWp?', a: `Il valore indicativo è ${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m² per kWp. Per 20 kWp sono circa ${formatSwissNumber(20 * ECONOMIC_FACTS.roofAreaM2PerKwp, 0)} m².` },
  { q: 'Quando non conviene il fotovoltaico?', a: 'Il fotovoltaico conviene meno quando il tetto è molto ombreggiato, ha un orientamento sfavorevole o il consumo di elettricità è molto basso. Anche con superfici del tetto molto ridotte la convenienza economica può essere limitata.' },
  { q: 'Quanto costa un impianto fotovoltaico da 30 kW?', a: `Con un valore da ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.min, 0)} a ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.max, 0)} CHF per kWp, il costo indicativo per 30 kWp va da ${formatSwissNumber(getSystemCostRange(30).min, 0)} a ${formatSwissNumber(getSystemCostRange(30).max, 0)} CHF.` },
];

const faqsFr = [
  { q: 'Combien coûte une installation de 10 kW complète ?', a: `Une installation clés en main de 10 kWc coûte entre ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min, 0)} et ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max, 0)} CHF sans stockage.` },
  { q: 'Combien de mètres carrés faut-il pour 20 kWc ?', a: `La valeur indicative est de ${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m² par kWc. Pour 20 kWc, cela représente environ ${formatSwissNumber(20 * ECONOMIC_FACTS.roofAreaM2PerKwp, 0)} m².` },
  { q: 'Quand le photovoltaïque n\'est-il pas rentable ?', a: 'Le photovoltaïque est moins rentable lorsque le toit est fortement ombragé, mal orienté ou que la consommation d\'électricité est très faible.' },
  { q: 'Combien coûte une installation de 30 kW ?', a: `Avec une valeur de ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.min, 0)} à ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.max, 0)} CHF par kWc, le coût indicatif pour 30 kWc est de ${formatSwissNumber(getSystemCostRange(30).min, 0)} à ${formatSwissNumber(getSystemCostRange(30).max, 0)} CHF.` },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-bold text-gray-900 text-sm sm:text-base">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#fcb210] flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function PhotovoltaikFaq() {
  const locale = useLocale();
  const faqs = locale === 'it' ? faqsIt : locale === 'fr' ? faqsFr : faqsDe;
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
      <p className="py-3 text-xs text-gray-400">{SOURCE_NOTES[locale as 'de' | 'it' | 'fr'] || SOURCE_NOTES.de}</p>
      <p className="pb-4 text-xs text-gray-400">{SYSTEM_PRICE_NOTES[locale as 'de' | 'it' | 'fr'] || SYSTEM_PRICE_NOTES.de}</p>
    </div>
  );
}
