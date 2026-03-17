'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Sind Balkonkraftwerke in der Schweiz erlaubt?', a: 'Ja, sie sind grundsätzlich erlaubt, müssen jedoch beim Netzbetreiber gemeldet werden und bestimmte Leistungsgrenzen einhalten.' },
  { q: 'Welche Strafe droht bei nicht gemeldeten Anlagen?', a: 'Bei Verstössen können Massnahmen durch den Netzbetreiber erfolgen. In einigen Fällen kann die Anlage abgeschaltet oder entfernt werden. Zudem können Haftungsfragen entstehen.' },
  { q: 'Sind Balkonkraftwerke mit 2000 Watt erlaubt?', a: 'In der Regel nicht als einfache Steckdosenlösung. Solche Anlagen benötigen spezielle Anmeldung, technische Anpassungen und ggf. Genehmigungen.' },
  { q: 'Was passiert, wenn ich mein Balkonkraftwerk nicht anmelde?', a: 'Sie verstossen gegen Vorschriften und riskieren, dass die Anlage entfernt oder eingeschränkt wird. Der Netzbetreiber kann Massnahmen ergreifen.' },
  { q: 'Wie viele Balkonkraftwerke darf ich betreiben?', a: 'In den meisten Fällen ist eine Anlage pro Haushalt vorgesehen, um Netzprobleme zu vermeiden. Mehrere Anlagen können zu Problemen bei der Einspeisung führen.' },
  { q: 'Ist ein Akku meldepflichtig?', a: 'Ja, auch Batteriespeicher müssen je nach System gemeldet werden, da sie Einfluss auf das Stromnetz haben können.' },
  { q: 'Kann ein Netzbetreiber mein Balkonkraftwerk erkennen?', a: 'Ja, durch Messungen und Lastprofile kann Einspeisung erkannt werden. Netzbetreiber können Veränderungen im Stromfluss messen und ungewöhnliche Lastprofile identifizieren.' },
  { q: 'Wie lange sind Balkonkraftwerke erlaubt?', a: 'Aktuell sind sie erlaubt, solange die gesetzlichen Vorgaben eingehalten werden. Änderungen sind jedoch je nach Regulierung möglich.' },
];

export default function BalkonFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((f, i) => (
        <div key={i} className="border-b border-gray-100 last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
          >
            <span className="font-bold text-gray-900 text-sm sm:text-base">{f.q}</span>
            <ChevronDown className={`w-5 h-5 text-[#F97316] flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && <p className="pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}
