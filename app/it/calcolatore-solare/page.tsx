import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Calcolatore solare Svizzera 2026 – Calcola costi e rendimento | PVPro',
  description: 'Calcolatore solare gratuito per la Svizzera. Calcola in 30 secondi i costi, il rendimento e l\'ammortamento del tuo impianto fotovoltaico. Con incentivi e valori di riferimento 2026.',
  alternates: {
    canonical: 'https://pvpro.ch/it/calcolatore-solare',
    languages: {
      'de-CH': 'https://pvpro.ch/solarrechner',
      'fr-CH': 'https://pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://pvpro.ch/en/solar-calculator',
      'it-CH': 'https://pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Calcolatore solare Svizzera 2026 – Calcola costi e rendimento',
    description: 'Calcolatore solare gratuito per la Svizzera. Costi, rendimento e ammortamento del tuo impianto fotovoltaico.',
    url: 'https://pvpro.ch/it/calcolatore-solare',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quanto è preciso il calcolatore solare?",
    answer: "Il nostro calcolatore ti offre una buona prima stima. Si basa su valori medi svizzeri: 6,5 m² per kWp, 950 kWh di produzione per kWp e 2'200 CHF di costi di installazione per kWp. Per un calcolo esatto, raccomandiamo una consulenza professionale in loco, che tenga conto dell'orientamento del tetto, delle ombre e delle condizioni locali.",
  },
  {
    question: 'Di quanta superficie del tetto ho bisogno per kWp?',
    answer: "Con moduli moderni, in Svizzera si calcolano circa 6,5 m² di superficie del tetto per kWp. Per un impianto tipico da 10 kWp servono circa 65 m² di superficie utilizzabile. Non tutta la superficie del tetto è sfruttabile — abbaini, camini e ombre riducono lo spazio disponibile.",
  },
  {
    question: "Cos'è la rimunerazione unica (RU)?",
    answer: "La rimunerazione unica (RU) della Confederazione ammonta attualmente a circa 350 CHF per kWp installato. Viene detratta direttamente dal prezzo di installazione, riducendo sensibilmente i costi effettivi. Sono possibili ulteriori incentivi cantonali a seconda del cantone. Complessivamente, gli incentivi possono coprire il 20–30% dei costi di investimento.",
  },
  {
    question: 'Qual è il periodo di ammortamento tipico in Svizzera?',
    answer: "Il periodo di ammortamento medio in Svizzera è di 8–12 anni, in base al prezzo dell'elettricità, alla quota di autoconsumo e agli incentivi ricevuti. Dopo l'ammortamento, si produce elettricità sostanzialmente gratuita per altri 15–20 anni. Con l'aumento dei prezzi dell'elettricità, il periodo di ammortamento si accorcia ulteriormente.",
  },
  {
    question: 'Un impianto solare conviene anche con un tetto esposto a nord?',
    answer: "Un tetto completamente esposto a nord non è ideale. I tetti est e ovest forniscono ancora il 70–80% del rendimento di un tetto sud e sono generalmente convenienti. Per i tetti nord raccomandiamo un'analisi professionale caso per caso. I moderni moduli fotovoltaici bifacciali possono dare ottimi risultati anche su tetti meno ottimali.",
  },
  {
    question: 'Devo aggiungere un sistema di accumulo a batteria?',
    answer: "Un sistema di accumulo a batteria aumenta il tuo tasso di autoconsumo dal 30% al 60–80%. Costa circa 8'000–15'000 CHF aggiuntivi, ma si ammortizza sempre più rapidamente con l'aumento dei prezzi dell'elettricità. L'accumulo è particolarmente utile se sei raramente a casa durante il giorno o possiedi un'auto elettrica.",
  },
  {
    question: "Come influisce un'auto elettrica sul calcolo solare?",
    answer: "Un'auto elettrica con circa 15'000 km/anno consuma circa 2'500 kWh. Con un impianto fotovoltaico circa 3 kWp più grande puoi coprire ampiamente questo consumo aggiuntivo. Caricare l'auto durante il giorno con l'energia solare aumenta notevolmente l'autoconsumo e migliora sensibilmente la redditività.",
  },
  {
    question: 'Quale cantone ha più ore di sole in Svizzera?',
    answer: "Il Ticino e il Vallese sono tra i cantoni più soleggiati della Svizzera con oltre 2'000 ore di sole all'anno. La Svizzera tedesca si situa tra 1'600 e 1'900 ore. Anche nelle regioni meno soleggiate gli impianti solari sono convenienti — la differenza di rendimento annuo tra il Ticino e Zurigo è solo del 15–20%.",
  },
];

const systemSizes = [
  {
    label: 'Piccolo',
    kwp: 6,
    flaeche: '39 m²',
    jahresertrag: "5'700 kWh",
    kosten: "13'200 CHF",
    foerderung: "2'100 CHF",
    nettokosten: "11'100 CHF",
    amort: '9–12 anni',
    haushalt: '2 persone / appartamento',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Medio',
    kwp: 10,
    flaeche: '65 m²',
    jahresertrag: "9'500 kWh",
    kosten: "22'000 CHF",
    foerderung: "3'500 CHF",
    nettokosten: "18'500 CHF",
    amort: '8–11 anni',
    haushalt: '3–4 persone / casa unifamiliare',
    color: 'border-[#F97316]/30 bg-orange-50',
    badge: 'bg-[#F97316]/10 text-[#F97316]',
    highlight: true,
  },
  {
    label: 'Grande',
    kwp: 15,
    flaeche: '98 m²',
    jahresertrag: "14'250 kWh",
    kosten: "33'000 CHF",
    foerderung: "5'250 CHF",
    nettokosten: "27'750 CHF",
    amort: '8–10 anni',
    haushalt: 'Grande famiglia / condominio',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Orientamento del tetto',
    body: 'Un tetto esposto a sud raggiunge il 100% di rendimento. Est/Ovest forniscono ognuno il 70–80%, i tetti nord solo il 50–60%. L\'inclinazione ideale è di 25–35°.',
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
    body: 'Alberi, camini o edifici vicini possono ridurre il rendimento del 10–30%. I micro-inverter o ottimizzatori moderni minimizzano le perdite.',
    tip: 'Far verificare le ombreggiature',
  },
  {
    icon: Battery,
    title: 'Autoconsumo',
    body: 'Senza accumulo si autoconsuma circa il 25–35% dell\'elettricità prodotta. Con un accumulo, l\'autoconsumo sale al 60–80% — migliorando considerevolmente la redditività.',
    tip: "L'accumulo aumenta l'autoconsumo",
  },
  {
    icon: Zap,
    title: "Prezzo dell'elettricità",
    body: "Il nucleo familiare svizzero medio paga attualmente circa 25–30 ct/kWh. Ogni kilowatt prodotto autonomamente è un risparmio diretto. Con l'aumento dei prezzi, l'impianto si ammortizza più velocemente.",
    tip: '~25–30 ct/kWh in Svizzera',
  },
  {
    icon: TrendingUp,
    title: 'Immissione in rete',
    body: "L'elettricità che non si consuma direttamente viene immessa nella rete. La remunerazione varia da 6 a 15 ct/kWh a seconda del gestore di rete — nettamente inferiore al prezzo di acquisto.",
    tip: '6–15 ct/kWh di immissione',
  },
];

const richtigValues = [
  { label: 'Ore di sole medie/anno (CH)', value: "1'600–2'100 h" },
  { label: 'Rendimento annuo per kWp (media CH)', value: "950–1'000 kWh" },
  { label: 'Superficie tetto per kWp (moduli moderni)', value: '6,5 m²' },
  { label: 'Costi di installazione per kWp', value: "2'000–2'500 CHF" },
  { label: 'Incentivo federale RU per kWp', value: '~350 CHF' },
  { label: 'Autoconsumo medio senza accumulo', value: '25–35%' },
  { label: 'Autoconsumo medio con accumulo', value: '60–80%' },
  { label: 'Durata di vita dei moduli solari', value: '25–30 anni' },
  { label: 'Garanzia di prestazione (tipica)', value: '80% dopo 25 anni' },
  { label: 'Periodo di ammortamento (Svizzera)', value: '8–12 anni' },
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
            name: 'PVPro Calcolatore Solare',
            description: 'Calcolatore solare gratuito per la Svizzera',
            url: 'https://pvpro.ch/it/calcolatore-solare',
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
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Calcolatore solare</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Strumento gratuito</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Calcolatore solare Svizzera 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Inserisci la superficie del tuo tetto e il consumo di elettricità — ricevi immediatamente una stima realistica dei costi, del rendimento annuo e dell'ammortamento del tuo impianto fotovoltaico in Svizzera.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">100% gratuito</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Risultati istantanei</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Dati del mercato svizzero</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: "950–1'000", unit: 'kWh/kWp/anno', label: 'Media svizzera' },
                { val: '8–12', unit: 'anni', label: 'Ammortamento tipico' },
                { val: '~350', unit: 'CHF/kWp', label: 'Incentivo federale RU' },
                { val: '25–30', unit: 'anni', label: 'Durata di vita moduli' },
              ].map(s => (
                <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[#F97316] text-xs font-semibold mt-0.5">{s.unit}</p>
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
            Valori indicativi: 6,5 m²/kWp · 950 kWh/kWp/anno · 2'200 CHF/kWp · RU ~350 CHF/kWp. Nessun'offerta vincolante.
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Valori di riferimento</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Dimensioni tipiche degli impianti in Svizzera</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Secondo le dimensioni del nucleo familiare e la superficie disponibile, si raccomandano diverse potenze. Tutti i prezzi prima degli incentivi cantonali — questi possono ridurre i costi di un ulteriore 10–15%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemSizes.map(s => (
              <div
                key={s.kwp}
                className={`rounded-2xl border-2 p-6 relative ${s.color} ${s.highlight ? 'ring-2 ring-[#F97316]/30' : ''}`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-4 py-1 rounded-full">
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
            <Link href="/it/costi-impianto-solare" className="text-[#F97316] ml-1 hover:underline">Panoramica dettagliata dei costi →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fattori di influenza</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cosa influenza il tuo rendimento solare?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Il calcolatore utilizza valori medi. In pratica, sei fattori giocano un ruolo decisivo — capiscili per interpretare correttamente il risultato.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-xs text-[#F97316] font-medium">{f.tip}</span>
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
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Valori di riferimento svizzeri</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                I numeri dietro il calcolatore
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Il nostro calcolatore solare si basa su dati di mercato svizzeri validati. Questi valori di riferimento ti aiutano a interpretare il risultato e a capire le ipotesi utilizzate.
              </p>
              <Link
                href="/it/richiesta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">È semplice</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Dal calcolo al preventivo</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Il calcolatore è il primo passo. In altri tre semplici passaggi ottieni preventivi vincolanti da installatori svizzeri certificati.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Inserire la superficie del tetto', desc: "Stima la tua superficie del tetto utilizzabile in m² (lunghezza × larghezza). Tipicamente: 40–100 m²." },
              { step: '2', title: 'Indicare il consumo', desc: "Il tuo consumo annuo è sulla bolletta elettrica — tipicamente 3'500–7'000 kWh per una casa." },
              { step: '3', title: 'Capire il potenziale', desc: "Vedi immediatamente: dimensione dell'impianto, rendimento annuo, costi e periodo di ammortamento stimato." },
              { step: '4', title: 'Confrontare i preventivi', desc: 'Richiedi gratuitamente 3 preventivi da installatori certificati — senza impegno e velocemente.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
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

      {/* ── Regional note ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Differenze regionali</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Rendimento solare per regione in Svizzera
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L'irraggiamento solare varia regionalmente in Svizzera. Il Ticino e il Vallese sono tra le regioni più soleggiate con oltre 2'000 ore di sole all'anno e un rendimento annuo fino a 1'100 kWh/kWp.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                La Svizzera tedesca e l'Altopiano si situano a 1'600–1'900 ore — condizioni eccellenti per l'energia solare. La differenza di rendimento annuo tra Ginevra e Zurigo è inferiore al 15%. Gli impianti solari sono convenienti in tutta la Svizzera.
              </p>
              <Link href="/it/richiesta" className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:underline">
                Richiedi preventivi per la mia posizione <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { region: 'Ticino (Lugano)', stunden: "2'080", ertrag: "1'080–1'100 kWh/kWp", bar: 100 },
                { region: 'Vallese (Sion)', stunden: "2'130", ertrag: "1'050–1'100 kWh/kWp", bar: 99 },
                { region: 'Regione del Lemano', stunden: "1'870", ertrag: "970–1'000 kWh/kWp", bar: 87 },
                { region: 'Berna / Altopiano', stunden: "1'720", ertrag: "900–950 kWh/kWp", bar: 80 },
                { region: 'Zurigo', stunden: "1'700", ertrag: "880–920 kWh/kWp", bar: 78 },
                { region: 'Basilea / Svizzera del Nord', stunden: "1'660", ertrag: "860–900 kWh/kWp", bar: 76 },
              ].map(r => (
                <div key={r.region} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{r.region}</span>
                    <span className="text-xs text-gray-500">{r.stunden} h/anno</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full mb-2">
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${r.bar}%`, background: 'linear-gradient(90deg, #fb923c, #F97316)' }}
                    />
                  </div>
                  <p className="text-xs text-gray-400">{r.ertrag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Savings narrative ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Redditività</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cosa ti porta concretamente un impianto solare?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Con un impianto tipico da 10 kWp in Svizzera — calcolato con 25 ct/kWh di prezzo dell'elettricità e 35% di autoconsumo senza accumulo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: "Risparmio annuo di elettricità",
                value: 'CHF 950',
                sub: "≈ 3'325 kWh autoconsumati × 25 ct",
                color: 'text-[#F97316]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Remunerazione immissione / anno',
                value: 'CHF 617',
                sub: "≈ 6'175 kWh immessi × 10 ct",
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Beneficio totale / anno',
                value: "CHF 1'567",
                sub: 'Risparmio + remunerazione immissione',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: 'Beneficio totale in 25 anni',
                value: "CHF 39'000+",
                sub: "I prezzi dell'elettricità continueranno ad aumentare",
                color: 'text-purple-600',
                bg: 'bg-purple-50',
              },
            ].map(c => (
              <div key={c.label} className={`rounded-2xl p-6 border border-gray-100 ${c.bg}`}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <p className="text-gray-500 text-xs mb-1">{c.label}</p>
                <p className={`text-2xl font-bold ${c.color} mb-1`}>{c.value}</p>
                <p className="text-gray-400 text-xs">{c.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-800">Nota:</strong> I valori si basano su un impianto da 10 kWp con costi netti di circa 18'500 CHF, 35% di autoconsumo, 25 ct/kWh di prezzo d'acquisto e 10 ct/kWh di tariffa di immissione. Con accumulo a batteria, auto elettrica o aumento dei prezzi dell'elettricità, la redditività migliora notevolmente.
            </p>
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
              { icon: Zap, title: 'Calcolare il rendimento', desc: "Scopri quanta elettricità il tuo tetto può produrre annualmente — in base alla tua regione." },
              { icon: PiggyBank, title: 'Capire i costi', desc: 'Stima realistica con incentivo RU basata sui prezzi attuali del mercato svizzero.' },
              { icon: TrendingUp, title: "Pianificare l'ammortamento", desc: "Scopri quando il tuo investimento viene ripagato e quanto risparmierai in 25 anni." },
            ].map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-[#F97316]" />
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Domande frequenti</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Domande sul calcolatore e la redditività</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                    {faq.question}
                    <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
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
