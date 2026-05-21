'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Car, Thermometer, ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';

const PRESETS_DE = [
  { label: "3'500 kWh", value: 3500, desc: 'Kleiner Haushalt (2 Personen)' },
  { label: "4'500 kWh", value: 4500, desc: 'Mittlerer Haushalt (3–4 Personen)' },
  { label: "6'500 kWh", value: 6500, desc: 'Grosser Haushalt (5+ Personen)' },
];

const PRESETS_IT = [
  { label: "3'500 kWh", value: 3500, desc: 'Piccolo nucleo (2 persone)' },
  { label: "4'500 kWh", value: 4500, desc: 'Nucleo medio (3–4 persone)' },
  { label: "6'500 kWh", value: 6500, desc: 'Grande nucleo (5+ persone)' },
];

const PRESETS_FR = [
  { label: "3'500 kWh", value: 3500, desc: 'Petit ménage (2 personnes)' },
  { label: "4'500 kWh", value: 4500, desc: 'Ménage moyen (3–4 personnes)' },
  { label: "6'500 kWh", value: 6500, desc: 'Grand ménage (5+ personnes)' },
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

const faqsDE = [
  { q: 'Was kostet eine Photovoltaikanlage für ein Einfamilienhaus?', a: "Die Kosten liegen in der Schweiz meist zwischen 20'000 und 35'000 CHF, abhängig von Grösse, Technik und Installation. Nach Förderungen und Steuerabzügen sinken die effektiven Kosten oft deutlich." },
  { q: 'Wie gross sollte eine Solaranlage für ein Einfamilienhaus sein?', a: 'Für ein durchschnittliches Einfamilienhaus wird eine Anlage mit etwa 8 bis 10 kWp empfohlen. Diese Grösse deckt einen grossen Teil des Strombedarfs ab und ist wirtschaftlich sinnvoll.' },
  { q: 'Wie viel Strom produziert eine Solaranlage auf einem Einfamilienhaus?', a: "Eine typische Anlage produziert etwa 9'000 bis 11'000 kWh pro Jahr. Das reicht oft aus, um den Grossteil des Stromverbrauchs eines Haushalts zu decken." },
  { q: 'Lohnt sich eine Solaranlage für ein Einfamilienhaus?', a: 'Ja, besonders bei hohem Eigenverbrauch lohnt sich eine Solaranlage. Sie senkt langfristig die Stromkosten und macht unabhängiger vom Energieversorger.' },
  { q: 'Braucht man einen Batteriespeicher?', a: 'Ein Batteriespeicher ist nicht zwingend notwendig, kann aber sinnvoll sein. Er erhöht den Eigenverbrauch deutlich und ermöglicht die Nutzung von Solarstrom auch am Abend.' },
  { q: 'Wie lange hält eine Solaranlage?', a: 'Moderne Photovoltaikanlagen haben eine Lebensdauer von 25 bis 30 Jahren. Viele Hersteller geben entsprechende Leistungsgarantien.' },
];

const faqsIT = [
  { q: 'Quanto costa un impianto fotovoltaico per una casa unifamiliare?', a: "In Svizzera i costi si aggirano solitamente tra 20'000 e 35'000 CHF, a seconda delle dimensioni, della tecnologia e dell'installazione. Dopo incentivi e deduzioni fiscali i costi effettivi si riducono spesso sensibilmente." },
  { q: 'Quanto deve essere grande un impianto solare per una casa unifamiliare?', a: 'Per una casa unifamiliare media è consigliato un impianto da circa 8–10 kWp. Questa dimensione copre gran parte del fabbisogno elettrico ed è economicamente conveniente.' },
  { q: 'Quanta energia produce un impianto solare su una casa unifamiliare?', a: "Un impianto tipico produce circa 9'000–11'000 kWh all'anno. Spesso è sufficiente per coprire la maggior parte del consumo elettrico della famiglia." },
  { q: 'Conviene un impianto solare per una casa unifamiliare?', a: 'Sì, soprattutto con un alto autoconsumo l\'impianto solare conviene. Riduce i costi dell\'energia nel lungo periodo e rende più indipendenti dal fornitore energetico.' },
  { q: 'Serve una batteria di accumulo?', a: 'La batteria di accumulo non è indispensabile ma può essere utile. Aumenta significativamente l\'autoconsumo e consente di utilizzare l\'energia solare anche la sera.' },
  { q: 'Quanto dura un impianto solare?', a: 'I moderni impianti fotovoltaici hanno una durata di 25–30 anni. Molti produttori offrono garanzie di prestazione corrispondenti.' },
];

const faqsFR = [
  { q: 'Combien coûte une installation photovoltaïque pour une maison individuelle ?', a: "En Suisse, les coûts se situent généralement entre 20'000 et 35'000 CHF. Après subventions et déductions fiscales, les coûts effectifs diminuent souvent sensiblement." },
  { q: 'Quelle taille pour une installation solaire dans une maison individuelle ?', a: 'Pour une maison individuelle moyenne, une installation d\'environ 8 à 10 kWc est recommandée.' },
  { q: 'Combien d\'électricité produit une installation sur une maison individuelle ?', a: "Une installation typique produit environ 9'000 à 11'000 kWh par an." },
  { q: 'Est-ce rentable ?', a: 'Oui, surtout avec un taux d\'autoconsommation élevé. L\'installation réduit les coûts d\'énergie à long terme.' },
  { q: 'Faut-il une batterie de stockage ?', a: 'Ce n\'est pas indispensable, mais utile. Elle augmente significativement l\'autoconsommation.' },
  { q: 'Quelle est la durée de vie d\'une installation solaire ?', a: 'Les installations photovoltaïques modernes ont une durée de vie de 25 à 30 ans.' },
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
  const locale = useLocale();
  const faqs = locale === 'it' ? faqsIT : locale === 'fr' ? faqsFR : faqsDE;

  const permissionQ = {
    de: { q: 'Brauche ich eine Bewilligung für die Solaranlage?', body: 'In den meisten Fällen nicht. Erfahren Sie alles zu den aktuellen Regeln auf unserer Seite zur', link: '/bewilligungspflicht-solaranlage-schweiz', linkLabel: 'Bewilligungspflicht für Solaranlagen in der Schweiz' },
    it: { q: 'Ho bisogno di un permesso per l\'impianto solare?', body: 'Nella maggior parte dei casi no. Per conoscere le regole attuali visita la nostra pagina su', link: '/it/come-funziona', linkLabel: 'come funziona il processo di installazione' },
    fr: { q: 'Ai-je besoin d\'un permis pour l\'installation solaire ?', body: 'Dans la plupart des cas, non. Consultez notre page sur', link: '/fr/comment-ca-marche', linkLabel: 'le processus d\'installation solaire' },
  };
  const p = permissionQ[locale as 'de' | 'it' | 'fr'] || permissionQ.de;

  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      <div className="border-t border-gray-100 py-5">
        <p className="font-bold text-gray-900 text-sm sm:text-base mb-2">{p.q}</p>
        <p className="text-gray-500 text-sm leading-relaxed">
          {p.body}{' '}
          <Link href={p.link} className="text-[#F97316] hover:underline">{p.linkLabel}</Link>.
        </p>
      </div>
    </div>
  );
}

export default function EinfamilienhausRechner() {
  const locale = useLocale();
  const [preset, setPreset] = useState(1);
  const [waerme, setWaerme] = useState(false);
  const [ev, setEv] = useState(false);

  const PRESETS = locale === 'it' ? PRESETS_IT : locale === 'fr' ? PRESETS_FR : PRESETS_DE;
  const base = PRESETS[preset].value;
  const r = calcResult(base, waerme, ev);

  const labels = {
    de: { header: 'Wie gross sollte Ihre Anlage sein?', sub: 'Wählen Sie Ihren Jahresverbrauch und Optionen.', verbrauch: 'Jahresverbrauch', zusatz: 'Zusätzliche Verbraucher', waerme: 'Wärmepumpe', wSub: "+2'500 kWh/Jahr", evLabel: 'Elektroauto', evSub: "+2'000 kWh/Jahr", empfehlung: 'Empfehlung für Ihren Haushalt', gesamtverbrauch: 'Gesamtverbrauch', groesse: 'Anlagengrösse', flaeche: 'Dachfläche', investition: 'Investition', foerderung: 'Förderung EIV', richtwerte: 'Richtwerte. Für eine genaue Berechnung empfehlen wir eine kostenlose Offerte.' },
    it: { header: 'Quanto deve essere grande il tuo impianto?', sub: 'Scegli il tuo consumo annuo e le opzioni.', verbrauch: 'Consumo annuo', zusatz: 'Consumi aggiuntivi', waerme: 'Pompa di calore', wSub: "+2'500 kWh/anno", evLabel: 'Auto elettrica', evSub: "+2'000 kWh/anno", empfehlung: 'Raccomandazione per la tua casa', gesamtverbrauch: 'Consumo totale', groesse: 'Dimensione impianto', flaeche: 'Superficie tetto', investition: 'Investimento', foerderung: 'Incentivo EIV', richtwerte: 'Valori indicativi. Per un calcolo preciso ti consigliamo un preventivo gratuito.' },
    fr: { header: 'Quelle taille pour votre installation ?', sub: 'Choisissez votre consommation annuelle et les options.', verbrauch: 'Consommation annuelle', zusatz: 'Consommateurs supplémentaires', waerme: 'Pompe à chaleur', wSub: "+2'500 kWh/an", evLabel: 'Voiture électrique', evSub: "+2'000 kWh/an", empfehlung: 'Recommandation pour votre ménage', gesamtverbrauch: 'Consommation totale', groesse: 'Taille installation', flaeche: 'Surface toiture', investition: 'Investissement', foerderung: 'Subvention EIV', richtwerte: 'Valeurs indicatives. Pour un calcul précis, nous recommandons un devis gratuit.' },
  };
  const L = labels[locale as 'de' | 'it' | 'fr'] || labels.de;

  return (
    <div className="rounded-3xl border border-gray-100 shadow-md bg-white overflow-hidden">
      <div className="bg-[#0f1f3d] px-6 sm:px-8 py-6">
        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">Interaktiv</p>
        <h3 className="text-white text-xl font-bold">{L.header}</h3>
        <p className="text-white/60 text-sm mt-1">{L.sub}</p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{L.verbrauch}</p>
          <div className="grid grid-cols-3 gap-2">
            {PRESETS.map((p, i) => (
              <button key={i} onClick={() => setPreset(i)}
                className={`rounded-xl border-2 p-3 text-center transition-all ${preset === i ? 'border-[#F97316] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                <p className={`font-bold text-sm ${preset === i ? 'text-[#F97316]' : 'text-gray-800'}`}>{p.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-tight hidden sm:block">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{L.zusatz}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { label: L.waerme, sublabel: L.wSub, icon: Thermometer, value: waerme, set: setWaerme },
              { label: L.evLabel, sublabel: L.evSub, icon: Car, value: ev, set: setEv },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button key={item.label} onClick={() => item.set(!item.value)}
                  className={`flex-1 flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${item.value ? 'border-[#F97316] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.value ? 'bg-[#F97316]' : 'bg-gray-100'}`}>
                    <Icon className={`w-4.5 h-4.5 ${item.value ? 'text-white' : 'text-gray-500'}`} style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${item.value ? 'text-[#F97316]' : 'text-gray-800'}`}>{item.label}</p>
                    <p className="text-xs text-gray-400">{item.sublabel}</p>
                  </div>
                  <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${item.value ? 'border-[#F97316] bg-[#F97316]' : 'border-gray-300'}`}>
                    {item.value && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-5 h-5 text-[#F97316]" />
            <p className="font-bold text-gray-900">{L.empfehlung}</p>
            <span className="ml-auto text-xs text-gray-400 bg-white rounded-full px-2 py-0.5 border border-gray-100">
              {L.gesamtverbrauch}: {fmt(r.total)} kWh
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: L.groesse, value: `${r.kwpMin}–${r.kwpMax} kWp`, accent: true },
              { label: L.flaeche, value: `${r.m2Min}–${r.m2Max} m²`, accent: false },
              { label: L.investition, value: `${fmt(r.priceMin)}–${fmt(r.priceMax)} CHF`, accent: false },
              { label: L.foerderung, value: `ca. ${fmt(r.foerderung)} CHF`, accent: false },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-3 text-center ${item.accent ? 'bg-[#F97316] text-white' : 'bg-white border border-orange-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${item.accent ? 'text-orange-100' : 'text-gray-400'}`}>{item.label}</p>
                <p className={`font-bold text-sm sm:text-base ${item.accent ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">{L.richtwerte}</p>
        </div>
      </div>
    </div>
  );
}
