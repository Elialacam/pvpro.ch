'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/lib/LocaleContext';

const faqsDe = [
  { q: 'Was kostet eine Solaranlage pro m² in der Schweiz?', a: 'Die Kosten liegen in der Schweiz in der Regel zwischen 200 und 400 CHF pro m². Der genaue Preis hängt von der Grösse der Anlage, der Qualität der Module und dem Installationsaufwand ab. Für eine genaue Berechnung ist eine individuelle Offerte empfehlenswert.' },
  { q: 'Was kostet 1 m² Photovoltaik?', a: 'Ein einzelner Quadratmeter Photovoltaik kostet durchschnittlich 200 bis 350 CHF. Dabei sind jedoch nicht immer alle Komponenten enthalten. Für eine komplette Anlage inklusive Installation sind die Gesamtkosten pro m² oft etwas höher.' },
  { q: 'Wie viel kostet 1 Quadratmeter Photovoltaik komplett?', a: 'Für eine komplette Photovoltaikanlage inklusive Installation liegen die Kosten meist zwischen 250 und 400 CHF pro m². Der Preis hängt von der Anlagengrösse, dem Dachtyp und den verwendeten Komponenten ab.' },
  { q: 'Was kostet eine 10 kW Photovoltaikanlage komplett?', a: "Eine Photovoltaikanlage mit etwa 10 kWp Leistung kostet in der Schweiz häufig zwischen 20'000 und 30'000 CHF. Der Preis variiert je nach Installateur, Dach und Qualität der Anlage." },
  { q: 'Wie viel Quadratmeter braucht man für 20 kWp?', a: 'Für eine Anlage mit 20 kWp Leistung werden in der Regel etwa 100 bis 120 m² Dachfläche benötigt. Die genaue Fläche hängt von der Leistung der einzelnen Solarmodule ab.' },
  { q: 'Wann lohnt sich Photovoltaik nicht?', a: 'Photovoltaik lohnt sich weniger, wenn das Dach stark verschattet ist, eine ungünstige Ausrichtung hat oder der Stromverbrauch sehr niedrig ist. Auch bei sehr kleinen Dachflächen kann die Wirtschaftlichkeit eingeschränkt sein.' },
  { q: 'Was kostet eine 30 kW Photovoltaikanlage?', a: "Eine grössere Anlage mit etwa 30 kWp Leistung kostet in der Schweiz häufig zwischen 45'000 und 70'000 CHF. Pro kWp sinkt der Preis bei grösseren Anlagen meist etwas." },
];

const faqsIt = [
  { q: 'Quanto costa un impianto solare per m² in Svizzera?', a: 'In Svizzera i costi si aggirano generalmente tra 200 e 400 CHF per m². Il prezzo esatto dipende dalle dimensioni dell\'impianto, dalla qualità dei moduli e dalla complessità dell\'installazione. Per un calcolo preciso è consigliabile richiedere un preventivo personalizzato.' },
  { q: 'Quanto costa 1 m² di fotovoltaico?', a: 'Un singolo metro quadro di fotovoltaico costa in media tra 200 e 350 CHF. Non sempre tutti i componenti sono inclusi. Per un impianto completo con installazione, il costo totale per m² è spesso leggermente superiore.' },
  { q: 'Quanto costa 1 m² di fotovoltaico completo?', a: 'Per un impianto fotovoltaico completo inclusa l\'installazione, i costi si situano solitamente tra 250 e 400 CHF per m². Il prezzo dipende dalle dimensioni dell\'impianto, dal tipo di tetto e dai componenti utilizzati.' },
  { q: 'Quanto costa un impianto fotovoltaico da 10 kW completo?', a: "Un impianto fotovoltaico da circa 10 kWp in Svizzera costa frequentemente tra 20'000 e 30'000 CHF. Il prezzo varia in base all'installatore, al tetto e alla qualità dell'impianto." },
  { q: 'Quanti metri quadri servono per 20 kWp?', a: 'Per un impianto da 20 kWp sono generalmente necessari circa 100–120 m² di superficie del tetto. La superficie esatta dipende dalla potenza dei singoli moduli solari.' },
  { q: 'Quando non conviene il fotovoltaico?', a: 'Il fotovoltaico conviene meno quando il tetto è molto ombreggiato, ha un orientamento sfavorevole o il consumo di elettricità è molto basso. Anche con superfici del tetto molto ridotte la convenienza economica può essere limitata.' },
  { q: 'Quanto costa un impianto fotovoltaico da 30 kW?', a: "Un impianto da circa 30 kWp in Svizzera costa frequentemente tra 45'000 e 70'000 CHF. Il costo per kWp tende a diminuire con impianti più grandi." },
];

const faqsFr = [
  { q: 'Quel est le coût d\'une installation solaire par m² en Suisse ?', a: 'En Suisse, les coûts se situent généralement entre 200 et 400 CHF par m². Le prix exact dépend de la taille de l\'installation, de la qualité des modules et de la complexité de la pose. Un devis personnalisé est recommandé.' },
  { q: 'Combien coûte 1 m² de photovoltaïque ?', a: 'Un seul mètre carré de photovoltaïque coûte en moyenne entre 200 et 350 CHF. Tous les composants ne sont pas toujours inclus. Pour une installation complète, le coût total par m² est souvent un peu plus élevé.' },
  { q: 'Combien coûte 1 m² de photovoltaïque complet ?', a: 'Pour une installation photovoltaïque complète installation incluse, les coûts se situent généralement entre 250 et 400 CHF par m².' },
  { q: 'Combien coûte une installation de 10 kW complète ?', a: "Une installation photovoltaïque d'environ 10 kWc coûte fréquemment entre 20'000 et 30'000 CHF en Suisse." },
  { q: 'Combien de mètres carrés faut-il pour 20 kWc ?', a: 'Pour une installation de 20 kWc, il faut en général environ 100 à 120 m² de surface de toiture.' },
  { q: 'Quand le photovoltaïque n\'est-il pas rentable ?', a: 'Le photovoltaïque est moins rentable lorsque le toit est fortement ombragé, mal orienté ou que la consommation d\'électricité est très faible.' },
  { q: 'Combien coûte une installation de 30 kW ?', a: "Une installation d'environ 30 kWc coûte fréquemment entre 45'000 et 70'000 CHF en Suisse." },
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

export default function PhotovoltaikFaq() {
  const locale = useLocale();
  const faqs = locale === 'it' ? faqsIt : locale === 'fr' ? faqsFr : faqsDe;
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
    </div>
  );
}
