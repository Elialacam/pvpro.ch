'use client';

import { useState } from 'react';
import { Building2, ChevronDown, Zap } from 'lucide-react';
import { useLocale } from '@/lib/LocaleContext';
import {
  ECONOMIC_FACTS,
  SOURCE_NOTES,
  SYSTEM_PRICE_NOTES,
  calculatePronovoVariableContribution,
  formatSwissNumber,
  getSystemCostRange,
} from '@/lib/facts';

const STEPS_DE = [
  { wohnungen: 4,  label: '4 Wohnungen',   kwpMin: 15, kwpMax: 25 },
  { wohnungen: 8,  label: '8 Wohnungen',   kwpMin: 25, kwpMax: 40 },
  { wohnungen: 12, label: '12 Wohnungen',  kwpMin: 40, kwpMax: 55 },
  { wohnungen: 20, label: '20 Wohnungen',  kwpMin: 55, kwpMax: 80 },
  { wohnungen: 30, label: '30+ Wohnungen', kwpMin: 80, kwpMax: 120 },
];

const STEPS_IT = [
  { wohnungen: 4,  label: '4 appartamenti',   kwpMin: 15, kwpMax: 25 },
  { wohnungen: 8,  label: '8 appartamenti',   kwpMin: 25, kwpMax: 40 },
  { wohnungen: 12, label: '12 appartamenti',  kwpMin: 40, kwpMax: 55 },
  { wohnungen: 20, label: '20 appartamenti',  kwpMin: 55, kwpMax: 80 },
  { wohnungen: 30, label: '30+ appartamenti', kwpMin: 80, kwpMax: 120 },
];

const STEPS_FR = [
  { wohnungen: 4,  label: '4 appartements',   kwpMin: 15, kwpMax: 25 },
  { wohnungen: 8,  label: '8 appartements',   kwpMin: 25, kwpMax: 40 },
  { wohnungen: 12, label: '12 appartements',  kwpMin: 40, kwpMax: 55 },
  { wohnungen: 20, label: '20 appartements',  kwpMin: 55, kwpMax: 80 },
  { wohnungen: 30, label: '30+ appartements', kwpMin: 80, kwpMax: 120 },
];

function priceRange(kwpMin: number, kwpMax: number) {
  const lo = getSystemCostRange(kwpMin).min;
  const hi = getSystemCostRange(kwpMax).max;
  return { lo, hi };
}

function fmt(n: number) {
  return formatSwissNumber(n, 0);
}

const faqsDE = [
  { q: 'Was kostet eine Solaranlage für ein Mehrfamilienhaus?', a: `Als Richtwert gelten ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.min, 0)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.max, 0)} CHF pro kWp, schlüsselfertig und ohne Speicher. Der Gesamtpreis hängt von der Anlagengrösse ab.` },
  { q: 'Wie wird Solarstrom im Mehrfamilienhaus berechnet?', a: 'Der Strom wird über ein internes System (ZEV) verteilt. Jede Wohnung erhält einen eigenen Zähler und zahlt nur für den tatsächlich genutzten Strom. Die Abrechnung erfolgt meist digital und transparent.' },
  { q: 'Ist ein Mehrfamilienhaus eine gute Kapitalanlage mit Photovoltaik?', a: 'Ja, da Solarstrom direkt verkauft werden kann. Eigentümer profitieren von zusätzlichen Einnahmen, niedrigeren Betriebskosten und einer Wertsteigerung der Immobilie.' },
  { q: 'Welche Grösse sollte eine Photovoltaikanlage haben?', a: 'Die passende Grösse hängt vom Stromverbrauch, der Anzahl Wohnungen und der verfügbaren Dachfläche ab.' },
  { q: 'Wann lohnt sich Photovoltaik nicht?', a: 'Photovoltaik lohnt sich weniger bei stark verschatteten Dächern, sehr kleinen Dachflächen oder extrem niedrigem Stromverbrauch im Gebäude.' },
  { q: 'Wie lange reicht ein 10 kWh Speicher mit Wärmepumpe?', a: 'Ein 10-kWh-Speicher kann je nach Verbrauch mehrere Stunden Energie liefern. In Mehrfamilienhäusern wird jedoch häufig auf grössere Systeme oder direkten Verbrauch ohne Speicher gesetzt.' },
];

const faqsIT = [
  { q: 'Quanto costa un impianto solare per un condominio?', a: `Come valore indicativo si calcolano da ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.min, 0)} a ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.max, 0)} CHF per kWp, chiavi in mano e senza accumulo. Il prezzo totale dipende dalle dimensioni dell'impianto.` },
  { q: 'Come viene calcolata l\'energia solare in un condominio?', a: 'L\'energia viene distribuita tramite un sistema interno (CEL – Comunità Elettrica Locale). Ogni appartamento ha un proprio contatore e paga solo per l\'energia effettivamente consumata. La fatturazione è solitamente digitale e trasparente.' },
  { q: 'Un condominio con fotovoltaico è un buon investimento?', a: 'Sì, poiché l\'energia solare può essere venduta direttamente. I proprietari beneficiano di entrate aggiuntive, costi operativi ridotti e un aumento del valore dell\'immobile.' },
  { q: 'Quale dimensione deve avere un impianto fotovoltaico per un condominio?', a: 'Le dimensioni dipendono dal consumo di elettricità, dal numero di appartamenti e dalla superficie del tetto disponibile.' },
  { q: 'Quando il fotovoltaico non conviene?', a: 'Il fotovoltaico conviene meno con tetti molto ombreggiati, superfici del tetto molto ridotte o consumi di elettricità estremamente bassi nell\'edificio.' },
  { q: 'Come funziona la Comunità Elettrica Locale (CEL) in Svizzera?', a: 'La CEL consente ai condòmini di condividere l\'energia solare prodotta sul tetto. Dal 2023 è possibile distribuire l\'energia tra più utenti nello stesso edificio o nella stessa area, riducendo i costi di rete.' },
  { q: 'Quanto dura un accumulo da 10 kWh con pompa di calore?', a: 'Un accumulo da 10 kWh può fornire energia per diverse ore a seconda dei consumi. Nei condomini si predilige spesso l\'uso diretto senza accumulo o sistemi di accumulo più grandi.' },
];

const faqsFR = [
  { q: 'Combien coûte une installation solaire pour un immeuble résidentiel ?', a: `La valeur indicative est de ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.min, 0)} à ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.perKwp.max, 0)} CHF par kWc, clés en main et sans stockage. Le prix total dépend de la taille de l'installation.` },
  { q: 'Comment l\'énergie solaire est-elle calculée dans un immeuble ?', a: 'L\'énergie est distribuée via un système interne (RCP). Chaque appartement dispose de son propre compteur et paie uniquement l\'énergie consommée.' },
  { q: 'Un immeuble avec photovoltaïque est-il un bon investissement ?', a: 'Oui, car l\'énergie solaire peut être vendue directement. Les propriétaires bénéficient de revenus supplémentaires et d\'une valorisation immobilière.' },
  { q: 'Quelle taille pour une installation photovoltaïque dans un immeuble ?', a: "La taille dépend de la consommation, du nombre d'appartements et de la surface disponible." },
  { q: 'Quand le photovoltaïque n\'est-il pas rentable ?', a: 'Le photovoltaïque est moins rentable avec des toits fortement ombragés ou une très faible consommation électrique dans le bâtiment.' },
  { q: 'Comment fonctionne le RCP (Regroupement dans le Cadre du Consommateur Propre) ?', a: 'Le RCP permet aux résidents de partager l\'énergie solaire produite sur le toit. Chaque appartement a son propre compteur et profite du courant solaire.' },
  { q: 'Combien de temps dure un stockage de 10 kWh avec une pompe à chaleur ?', a: 'Un stockage de 10 kWh peut fournir de l\'énergie pendant plusieurs heures selon la consommation.' },
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

export function MehrfamilienhausFaq() {
  const locale = useLocale();
  const faqs = locale === 'it' ? faqsIT : locale === 'fr' ? faqsFR : faqsDE;
  return (
    <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
      {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
    </div>
  );
}

export default function MehrfamilienhausRechner() {
  const locale = useLocale();
  const [step, setStep] = useState(1);

  const STEPS = locale === 'it' ? STEPS_IT : locale === 'fr' ? STEPS_FR : STEPS_DE;
  const s = STEPS[step];
  const { lo, hi } = priceRange(s.kwpMin, s.kwpMax);
  const m2Min = Math.round(s.kwpMin * ECONOMIC_FACTS.roofAreaM2PerKwp);
  const m2Max = Math.round(s.kwpMax * ECONOMIC_FACTS.roofAreaM2PerKwp);
  const averageSize = (s.kwpMin + s.kwpMax) / 2;
  const foerderung = calculatePronovoVariableContribution(averageSize);
  const prodMin = s.kwpMin * ECONOMIC_FACTS.production.plateauKwhPerKwp.min;
  const prodMax = s.kwpMax * ECONOMIC_FACTS.production.plateauKwhPerKwp.max;

  const L = {
    de: { title: 'ZEV-Rechner', header: 'Wie gross sollte die Anlage sein?', sub: 'Wählen Sie die Anzahl Wohnungen im Gebäude.', anzahl: 'Anzahl Wohnungen', groesse: 'Anlagengrösse (kWp)', empfehlung: (w: number) => `Empfehlung für ${w} Wohnungen`, size: 'Anlagengrösse', flaeche: 'Dachfläche', investition: 'Investition', produktion: 'Jahresproduktion', richtwerte: 'Richtwerte. Individuelle Offerte empfohlen.', foerderung: `EIV-Förderung: ca. ${fmt(foerderung)} CHF` },
    it: { title: 'CEL-Calcolatore', header: 'Quanto deve essere grande l\'impianto?', sub: 'Seleziona il numero di appartamenti nell\'edificio.', anzahl: 'Numero appartamenti', groesse: 'Dimensione impianto (kWp)', empfehlung: (w: number) => `Raccomandazione per ${w} appartamenti`, size: 'Dimensione impianto', flaeche: 'Superficie tetto', investition: 'Investimento', produktion: 'Produzione annua', richtwerte: 'Valori indicativi. Preventivo individuale consigliato.', foerderung: `Incentivo EIV: ca. ${fmt(foerderung)} CHF` },
    fr: { title: 'Calculateur RCP', header: 'Quelle taille pour l\'installation ?', sub: 'Sélectionnez le nombre d\'appartements dans l\'immeuble.', anzahl: 'Nombre d\'appartements', groesse: 'Taille installation (kWc)', empfehlung: (w: number) => `Recommandation pour ${w} appartements`, size: 'Taille installation', flaeche: 'Surface toiture', investition: 'Investissement', produktion: 'Production annuelle', richtwerte: 'Valeurs indicatives. Devis individuel recommandé.', foerderung: `Subvention EIV: env. ${fmt(foerderung)} CHF` },
  };
  const lab = L[locale as 'de' | 'it' | 'fr'] || L.de;

  return (
    <div className="rounded-3xl border border-gray-100 shadow-md bg-white overflow-hidden">
      <div className="bg-[#0f1f3d] px-6 sm:px-8 py-6">
        <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-1">{lab.title}</p>
        <h3 className="text-white text-xl font-bold">{lab.header}</h3>
        <p className="text-white/60 text-sm mt-1">{lab.sub}</p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{lab.anzahl}</p>
          <div className="grid grid-cols-5 gap-2">
            {STEPS.map((st, i) => (
              <button key={i} onClick={() => setStep(i)}
                className={`rounded-xl border-2 p-3 text-center transition-all ${step === i ? 'border-[#fcb210] bg-orange-50' : 'border-gray-100 bg-white hover:border-gray-200'}`}>
                <Building2 className={`w-5 h-5 mx-auto mb-1 ${step === i ? 'text-[#fcb210]' : 'text-gray-400'}`} />
                <p className={`font-bold text-xs ${step === i ? 'text-[#fcb210]' : 'text-gray-700'}`}>{st.wohnungen}</p>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center font-medium">{s.label}</p>
        </div>

        <div className="mb-8">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">{lab.groesse}</p>
          <div className="relative h-6 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-[#fcb210] to-amber-400 transition-all duration-500"
              style={{ width: `${Math.min(100, (s.kwpMax / 120) * 100)}%` }} />
            <div className="absolute inset-0 flex items-center justify-end pr-3">
              <span className="text-xs font-bold text-white drop-shadow">{s.kwpMin}–{s.kwpMax} kWp</span>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>15 kWp</span><span>120 kWp</span></div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="w-5 h-5 text-[#fcb210]" />
            <p className="font-bold text-gray-900">{lab.empfehlung(s.wohnungen)}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: lab.size, value: `${s.kwpMin}–${s.kwpMax} kWp`, accent: true },
              { label: lab.flaeche, value: `${m2Min}–${m2Max} m²` },
              { label: lab.investition, value: `${fmt(lo)}–${fmt(hi)} CHF` },
              { label: lab.produktion, value: `${fmt(prodMin)}–${fmt(prodMax)} kWh` },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-3 text-center ${item.accent ? 'bg-[#fcb210] text-white' : 'bg-white border border-orange-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${item.accent ? 'text-orange-100' : 'text-gray-400'}`}>{item.label}</p>
                <p className={`font-bold text-sm ${item.accent ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
            <span>{lab.richtwerte}</span>
            <span className="font-semibold text-green-600">{lab.foerderung}</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">{SOURCE_NOTES[locale as 'de' | 'it' | 'fr'] || SOURCE_NOTES.de}</p>
          <p className="text-xs text-gray-400 mt-2">{SYSTEM_PRICE_NOTES[locale as 'de' | 'it' | 'fr'] || SYSTEM_PRICE_NOTES.de}</p>
        </div>
      </div>
    </div>
  );
}
