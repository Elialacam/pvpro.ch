'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Car, Thermometer, ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import {
  ECONOMIC_FACTS,
  SOURCE_NOTES,
  SYSTEM_PRICE_NOTES,
  calculatePronovoVariableContribution,
  formatSwissNumber,
  getSystemCostRange,
} from '@/lib/facts';

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
  const kwp = Math.round((total / ECONOMIC_FACTS.production.plateauKwhPerKwp.max) * 10) / 10;
  const kwpMin = Math.max(4, Math.round((kwp * 0.85) * 10) / 10);
  const kwpMax = Math.round((kwp * 1.15) * 10) / 10;
  const m2Min = Math.round(kwpMin * ECONOMIC_FACTS.roofAreaM2PerKwp);
  const m2Max = Math.round(kwpMax * ECONOMIC_FACTS.roofAreaM2PerKwp);
  const priceMin = getSystemCostRange(kwpMin).min;
  const priceMax = getSystemCostRange(kwpMax).max;
  const foerderung = calculatePronovoVariableContribution((kwpMin + kwpMax) / 2);
  return { kwpMin, kwpMax, m2Min, m2Max, priceMin, priceMax, foerderung, total };
}

function fmt(n: number) {
  return formatSwissNumber(n, 0);
}

const faqsDE = [
  { q: 'Was kostet eine Photovoltaikanlage für ein Einfamilienhaus?', a: `Eine schlüsselfertige Anlage mit 8 kWp kostet ohne Speicher ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[8].min, 0)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[8].max, 0)} CHF. Bei 10 kWp sind es ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min, 0)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max, 0)} CHF.` },
  { q: 'Wie viel Strom produziert eine Solaranlage auf einem Einfamilienhaus?', a: `Im Schweizer Mittelland sind es ${formatSwissNumber(ECONOMIC_FACTS.production.plateauKwhPerKwp.min, 0)} bis ${formatSwissNumber(ECONOMIC_FACTS.production.plateauKwhPerKwp.max, 0)} kWh pro installiertem kWp und Jahr.` },
  { q: 'Lohnt sich eine Solaranlage für ein Einfamilienhaus?', a: 'Ja, besonders bei hohem Eigenverbrauch lohnt sich eine Solaranlage. Sie senkt langfristig die Stromkosten und macht unabhängiger vom Energieversorger.' },
  { q: 'Braucht man einen Batteriespeicher?', a: 'Ein Batteriespeicher ist nicht zwingend notwendig, kann aber sinnvoll sein. Er erhöht den Eigenverbrauch deutlich und ermöglicht die Nutzung von Solarstrom auch am Abend.' },
  { q: 'Wie lange hält eine Solaranlage?', a: `Moderne Photovoltaikmodule haben eine Lebensdauer von ${ECONOMIC_FACTS.moduleLifetimeYears.min} bis ${ECONOMIC_FACTS.moduleLifetimeYears.max} Jahren.` },
];

const faqsIT = [
  { q: 'Quanto costa un impianto fotovoltaico per una casa unifamiliare?', a: `Un impianto chiavi in mano da 8 kWp costa da ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[8].min, 0)} a ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[8].max, 0)} CHF senza accumulo. Per 10 kWp il costo va da ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min, 0)} a ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max, 0)} CHF.` },
  { q: 'Quanta energia produce un impianto solare su una casa unifamiliare?', a: `Sull'Altopiano svizzero produce da ${formatSwissNumber(ECONOMIC_FACTS.production.plateauKwhPerKwp.min, 0)} a ${formatSwissNumber(ECONOMIC_FACTS.production.plateauKwhPerKwp.max, 0)} kWh per kWp installato all'anno.` },
  { q: 'Conviene un impianto solare per una casa unifamiliare?', a: 'Sì, soprattutto con un alto autoconsumo l\'impianto solare conviene. Riduce i costi dell\'energia nel lungo periodo e rende più indipendenti dal fornitore energetico.' },
  { q: 'Serve una batteria di accumulo?', a: 'La batteria di accumulo non è indispensabile ma può essere utile. Aumenta significativamente l\'autoconsumo e consente di utilizzare l\'energia solare anche la sera.' },
  { q: 'Quanto dura un impianto solare?', a: `I moduli fotovoltaici moderni hanno una durata da ${ECONOMIC_FACTS.moduleLifetimeYears.min} a ${ECONOMIC_FACTS.moduleLifetimeYears.max} anni.` },
];

const faqsFR = [
  { q: 'Combien coûte une installation photovoltaïque pour une maison individuelle ?', a: `Une installation clés en main de 8 kWc coûte entre ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[8].min, 0)} et ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[8].max, 0)} CHF sans stockage. Pour 10 kWc, le prix va de ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min, 0)} à ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max, 0)} CHF.` },
  { q: 'Combien d\'électricité produit une installation sur une maison individuelle ?', a: `Sur le Plateau suisse, elle produit entre ${formatSwissNumber(ECONOMIC_FACTS.production.plateauKwhPerKwp.min, 0)} et ${formatSwissNumber(ECONOMIC_FACTS.production.plateauKwhPerKwp.max, 0)} kWh par kWc installé et par an.` },
  { q: 'Est-ce rentable ?', a: 'Oui, surtout avec un taux d\'autoconsommation élevé. L\'installation réduit les coûts d\'énergie à long terme.' },
  { q: 'Faut-il une batterie de stockage ?', a: 'Ce n\'est pas indispensable, mais utile. Elle augmente significativement l\'autoconsommation.' },
  { q: 'Quelle est la durée de vie d\'une installation solaire ?', a: `Les modules photovoltaïques modernes ont une durée de vie de ${ECONOMIC_FACTS.moduleLifetimeYears.min} à ${ECONOMIC_FACTS.moduleLifetimeYears.max} ans.` },
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
          <Link href={p.link} className="text-[#fcb210] hover:underline">{p.linkLabel}</Link>.
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
                className={`rounded-xl border-2 p-3 text-center transition-all ${preset === i ? 'border-[#fcb210] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                <p className={`font-bold text-sm ${preset === i ? 'text-[#fcb210]' : 'text-gray-800'}`}>{p.label}</p>
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
                  className={`flex-1 flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-all ${item.value ? 'border-[#fcb210] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.value ? 'bg-[#fcb210]' : 'bg-gray-100'}`}>
                    <Icon className={`w-4.5 h-4.5 ${item.value ? 'text-white' : 'text-gray-500'}`} style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${item.value ? 'text-[#fcb210]' : 'text-gray-800'}`}>{item.label}</p>
                    <p className="text-xs text-gray-400">{item.sublabel}</p>
                  </div>
                  <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${item.value ? 'border-[#fcb210] bg-[#fcb210]' : 'border-gray-300'}`}>
                    {item.value && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-5 h-5 text-[#fcb210]" />
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
              <div key={item.label} className={`rounded-xl p-3 text-center ${item.accent ? 'bg-[#fcb210] text-white' : 'bg-white border border-orange-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${item.accent ? 'text-orange-100' : 'text-gray-400'}`}>{item.label}</p>
                <p className={`font-bold text-sm sm:text-base ${item.accent ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">{L.richtwerte}</p>
          <p className="text-xs text-gray-400 mt-2">{SOURCE_NOTES[locale as 'de' | 'it' | 'fr'] || SOURCE_NOTES.de}</p>
          <p className="text-xs text-gray-400 mt-2">{SYSTEM_PRICE_NOTES[locale as 'de' | 'it' | 'fr'] || SYSTEM_PRICE_NOTES.de}</p>
        </div>
      </div>
    </div>
  );
}
