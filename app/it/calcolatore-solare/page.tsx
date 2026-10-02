import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import { ECONOMIC_FACTS, SOURCE_NOTES, SYSTEM_PRICE_NOTES, STORAGE_PRICE_NOTES, formatChf, formatRangeForLocale } from '@/lib/facts';

const itRange = (range: { readonly min: number; readonly max: number }, unit: string) =>
  formatRangeForLocale(range, unit, 'it');

export const metadata: Metadata = pageMetadata({
  title: 'Calcolatore solare Svizzera 2026 – Calcola costi e rendimento | PvPro.ch',
  description: 'Calcolatore solare gratuito per la Svizzera. Calcola in 30 secondi i costi, il rendimento e l\'ammortamento del tuo impianto fotovoltaico. Con incentivi e valori di riferimento 2026.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/calcolatore-solare',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solarrechner',
      'fr-CH': 'https://www.pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-calculator',
      'it-CH': 'https://www.pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://www.pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Calcolatore solare Svizzera 2026 – Calcola costi e rendimento',
    description: 'Calcolatore solare gratuito per la Svizzera. Costi, rendimento e ammortamento del tuo impianto fotovoltaico.',
    url: 'https://www.pvpro.ch/it/calcolatore-solare',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PvPro.ch',
  },
}, { path: '/it/calcolatore-solare', locale: 'it' });

const faqs = [
  {
    question: "Quanto è preciso il calcolatore solare?",
    answer: `Il nostro calcolatore ti offre una prima stima. Usa ${ECONOMIC_FACTS.roofAreaM2PerKwp} m² per kWp, ${itRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh per kWp')} e costi di ${itRange(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF per kWp')}.`,
  },
  {
    question: 'Di quanta superficie del tetto ho bisogno per kWp?',
    answer: `Si calcolano ${ECONOMIC_FACTS.roofAreaM2PerKwp} m² per kWp. Per 10 kWp servono circa ${10 * ECONOMIC_FACTS.roofAreaM2PerKwp} m² di superficie utilizzabile.`,
  },
  {
    question: "Cos'è la rimunerazione unica (RU)?",
    answer: `La RU Pronovo è di ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} per kWp fino a 30 kWp e ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpOver30)} oltre, più il contributo base.`,
  },
  {
    question: 'Qual è il periodo di ammortamento tipico in Svizzera?',
    answer: `Sull'Altopiano il periodo indicativo è ${itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni')}; in Ticino e Vallese è ${itRange(ECONOMIC_FACTS.systemPaybackYears.ticinoValais, 'anni')}.`,
  },
  {
    question: 'Un impianto solare conviene anche con un tetto esposto a nord?',
    answer: "Un tetto completamente esposto a nord non è ideale. Per i tetti est, ovest e nord raccomandiamo un'analisi professionale che consideri inclinazione e ombre.",
  },
  {
    question: 'Devo aggiungere un sistema di accumulo a batteria?',
    answer: `Un accumulo aumenta l'autoconsumo da ${itRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%')} a ${itRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%')}. Un accumulo da 10 kWh costa ${itRange(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF')}.`,
  },
  {
    question: "Come influisce un'auto elettrica sul calcolo solare?",
    answer: "Caricare l'auto durante il giorno con l'energia solare aumenta l'autoconsumo. Il dimensionamento aggiuntivo dipende dai chilometri percorsi e dal consumo del veicolo.",
  },
];

const systemSizes = [
  {
    label: 'Piccolo',
    kwp: 5,
    flaeche: `${5 * ECONOMIC_FACTS.roofAreaM2PerKwp} m²`,
    jahresertrag: itRange({ min: 5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh'),
    kosten: itRange(ECONOMIC_FACTS.systemCosts.bySize[5], 'CHF'),
    foerderung: formatChf(5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30),
    nettokosten: itRange({ min: ECONOMIC_FACTS.systemCosts.bySize[5].min - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, max: ECONOMIC_FACTS.systemCosts.bySize[5].max - 5 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30 }, 'CHF'),
    amort: itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni'),
    haushalt: '2 persone / appartamento',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Medio',
    kwp: 10,
    flaeche: `${10 * ECONOMIC_FACTS.roofAreaM2PerKwp} m²`,
    jahresertrag: itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh'),
    kosten: itRange(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF'),
    foerderung: formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox),
    nettokosten: itRange({ min: ECONOMIC_FACTS.systemCosts.bySize[10].min - ECONOMIC_FACTS.incentives.tenKwpApprox, max: ECONOMIC_FACTS.systemCosts.bySize[10].max - ECONOMIC_FACTS.incentives.tenKwpApprox }, 'CHF'),
    amort: itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni'),
    haushalt: '3–4 persone / casa unifamiliare',
    color: 'border-[#fcb210]/30 bg-orange-50',
    badge: 'bg-[#fcb210]/10 text-[#fcb210]',
    highlight: true,
  },
  {
    label: 'Grande',
    kwp: 15,
    flaeche: `${15 * ECONOMIC_FACTS.roofAreaM2PerKwp} m²`,
    jahresertrag: itRange({ min: 15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh'),
    kosten: itRange(ECONOMIC_FACTS.systemCosts.bySize[15], 'CHF'),
    foerderung: formatChf(15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30),
    nettokosten: itRange({ min: ECONOMIC_FACTS.systemCosts.bySize[15].min - 15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, max: ECONOMIC_FACTS.systemCosts.bySize[15].max - 15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30 }, 'CHF'),
    amort: itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni'),
    haushalt: 'Grande famiglia / condominio',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Orientamento del tetto',
    body: "Orientamento e inclinazione incidono sulla produzione. L'installatore deve verificare il tetto sul posto.",
    tip: 'Sud, Est o Ovest sono ideali',
  },
  {
    icon: Home,
    title: 'Condizioni del tetto',
    body: 'I tetti in tegole, cemento e lamiera non pongono problemi. I tetti in amianto o bitume devono essere risanati prima — il che aumenta il costo totale.',
    tip: 'Pianificare un risanamento se necessario',
  },
  {
    icon: AlertCircle,
    title: 'Ombreggiatura',
    body: 'Alberi, camini o edifici vicini possono ridurre il rendimento. La verifica delle ombre va fatta sul posto.',
    tip: 'Far verificare le ombreggiature',
  },
  {
    icon: Battery,
    title: 'Autoconsumo',
    body: `Senza accumulo si autoconsuma ${itRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%')}. Con accumulo si arriva a ${itRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%')}.`,
    tip: "L'accumulo aumenta l'autoconsumo",
  },
  {
    icon: Zap,
    title: "Prezzo dell'elettricità",
    body: `La mediana svizzera è ${ECONOMIC_FACTS.electricityMedianCtPerKwh} ct/kWh. Ogni kilowattora prodotto e consumato autonomamente è un risparmio diretto.`,
    tip: `${ECONOMIC_FACTS.electricityMedianCtPerKwh} ct/kWh`,
  },
  {
    icon: TrendingUp,
    title: 'Immissione in rete',
    body: `L'elettricità non consumata viene immessa in rete. La rimunerazione varia ${itRange(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh')} secondo il gestore.`,
    tip: itRange(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh'),
  },
];

const richtigValues = [
  { label: 'Rendimento annuo per kWp (Altopiano)', value: itRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh') },
  { label: 'Superficie tetto per kWp', value: `${ECONOMIC_FACTS.roofAreaM2PerKwp} m²` },
  { label: 'Costi di installazione per kWp', value: itRange(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF') },
  { label: 'RU per kWp fino a 30 kWp', value: formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30) },
  { label: 'Autoconsumo senza accumulo', value: itRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%') },
  { label: 'Autoconsumo con accumulo', value: itRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%') },
  { label: 'Durata dei moduli', value: itRange(ECONOMIC_FACTS.moduleLifetimeYears, 'anni') },
  { label: 'Garanzia di prestazione', value: `${ECONOMIC_FACTS.performanceWarranty.percent}% dopo ${ECONOMIC_FACTS.performanceWarranty.afterYears} anni` },
  { label: 'Ammortamento Altopiano', value: itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni') },
];

export default function CalcolatoreSolarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'PvPro.ch Calcolatore Solare',
            description: 'Calcolatore solare gratuito per la Svizzera',
            url: 'https://www.pvpro.ch/it/calcolatore-solare',
            applicationCategory: 'Calculator',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Calcolatore solare</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-4">Strumento gratuito</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Calcolatore solare Svizzera 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Inserisci la superficie del tuo tetto e il consumo di elettricità — ricevi immediatamente una stima realistica dei costi, del rendimento annuo e dell'ammortamento del tuo impianto fotovoltaico in Svizzera.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">100% gratuito</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Risultati istantanei</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Dati del mercato svizzero</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: itRange(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh/kWp/anno'), unit: '', label: 'Valore indicativo Altopiano' },
                { val: itRange(ECONOMIC_FACTS.systemPaybackYears.plateau, 'anni'), unit: '', label: 'Ammortamento Altopiano' },
                { val: formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30), unit: '/kWp', label: 'RU fino a 30 kWp' },
                { val: itRange(ECONOMIC_FACTS.moduleLifetimeYears, 'anni'), unit: '', label: 'Durata moduli' },
              ].map(s => (
                <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[#fcb210] text-xs font-semibold mt-0.5">{s.unit}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-14 bg-white" id="calcolatore">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Il tuo potenziale solare personale</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Inserisci la superficie del tetto disponibile (circa) e il tuo consumo annuo di elettricità. Il calcolatore si basa su valori medi svizzeri e l'incentivo RU.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <SolarCalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            {SOURCE_NOTES.it} Nessun&apos;offerta vincolante.
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Valori di riferimento</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Dimensioni tipiche degli impianti in Svizzera</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Secondo le dimensioni del nucleo familiare e la superficie disponibile, si raccomandano diverse potenze. Tutti i prezzi sono lordi, prima degli incentivi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemSizes.map(s => (
              <div
                key={s.kwp}
                className={`rounded-2xl border-2 p-6 relative ${s.color} ${s.highlight ? 'ring-2 ring-[#fcb210]/30' : ''}`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fcb210] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Dimensione più popolare
                  </div>
                )}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded ${s.badge}`}>{s.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{s.kwp} kWp</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Superficie tetto</p>
                    <p className="font-bold text-gray-700">{s.flaeche}</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rendimento annuo</span>
                    <span className="font-semibold text-gray-800">{s.jahresertrag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Costo lordo</span>
                    <span className="font-semibold text-gray-800">{s.kosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Incentivo RU</span>
                    <span className="font-semibold text-green-600">− {s.foerderung}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2.5 mt-1">
                    <span className="text-gray-700 font-semibold">Costo netto</span>
                    <span className="font-bold text-gray-900">{s.nettokosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ammortamento</span>
                    <span className="font-semibold text-gray-800">{s.amort}</span>
                  </div>
                  <div className="pt-2 text-xs text-gray-400 border-t border-gray-200">
                    Adatto per: {s.haushalt}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Valori indicativi 2026. I costi effettivi possono variare in base all'installatore, al cantone e all'impianto.
            <Link href="/it/costi-impianto-solare" className="text-[#fcb210] ml-1 hover:underline">Panoramica dettagliata dei costi →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Fattori di influenza</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cosa influenza il tuo rendimento solare?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Il calcolatore utilizza valori medi. In pratica, sei fattori giocano un ruolo decisivo — capiscili per interpretare correttamente il risultato.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fcb210]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#fcb210]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-xs text-[#fcb210] font-medium">{f.tip}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Swiss benchmark values ── */}
      <section className="py-16 bg-[#0f1f3d] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #fcb210 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Valori di riferimento svizzeri</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                I numeri dietro il calcolatore
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Il nostro calcolatore solare si basa su dati di mercato svizzeri validati. Questi valori di riferimento ti aiutano a interpretare il risultato e a capire le ipotesi utilizzate.
              </p>
              <Link
                href="/it/richiesta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
              >
                Richiedi preventivi concreti ora <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {richtigValues.map(rv => (
                <div key={rv.label} className="flex items-center justify-between bg-white/8 border border-white/10 rounded-xl px-5 py-3">
                  <span className="text-white/60 text-sm">{rv.label}</span>
                  <span className="text-white font-semibold text-sm">{rv.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">È semplice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Dal calcolo al preventivo</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Il calcolatore è il primo passo. In altri tre semplici passaggi ottieni preventivi vincolanti da installatori svizzeri certificati.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Inserire la superficie del tetto', desc: "Stima la superficie del tetto utilizzabile in m²." },
              { step: '2', title: 'Indicare il consumo', desc: "Il consumo annuo è indicato sulla bolletta elettrica." },
              { step: '3', title: 'Capire il potenziale', desc: "Vedi immediatamente: dimensione dell'impianto, rendimento annuo, costi e periodo di ammortamento stimato." },
              { step: '4', title: 'Confrontare i preventivi', desc: 'Richiedi gratuitamente 3 preventivi da installatori certificati — senza impegno e velocemente.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-center text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nota cantonale ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Differenze cantonali</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Rendimento solare per Cantone in Svizzera
              </h2>
              <Link href="/it/richiesta" className="inline-flex items-center gap-2 text-sm font-bold text-[#fcb210] hover:underline">
                Richiedi preventivi per la mia posizione <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Pronto per preventivi concreti?"
              subtitle="Il nostro calcolatore fornisce un primo orientamento. Per offerte vincolanti, ti mettiamo gratuitamente in contatto con installatori solari svizzeri certificati."
              ctaText="Richiedi preventivi gratuiti"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Perché usare questo calcolatore solare?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: 'Calcolo istantaneo', desc: "Ottieni in pochi secondi una prima stima per il tuo impianto fotovoltaico — senza registrazione." },
              { icon: Zap, title: 'Calcolare il rendimento', desc: "Scopri quanta elettricità il tuo tetto può produrre annualmente — in base al tuo Cantone." },
              { icon: PiggyBank, title: 'Capire i costi', desc: 'Stima realistica con incentivo RU basata sui prezzi attuali del mercato svizzero.' },
              { icon: TrendingUp, title: "Pianificare l'ammortamento", desc: "Scopri quando il tuo investimento viene ripagato." },
            ].map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#fcb210]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-[#fcb210]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Domande frequenti</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Domande sul calcolatore e la redditività</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                    {faq.question}
                    <span className="ml-4 text-[#fcb210] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
