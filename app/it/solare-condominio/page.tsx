import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, TrendingUp, Users, Building2, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Impianto solare condominio Svizzera: costi, CEL e redditività | PVPro.ch',
  description: 'Quanto costa un impianto solare per un condominio? Costi, CEL, dimensioni e redditività per più unità abitative in Svizzera.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/solare-condominio',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mehrfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-immeuble',
      'en-CH': 'https://www.pvpro.ch/en/solar-apartment-building',
      'it-CH': 'https://www.pvpro.ch/it/solare-condominio',
      'x-default': 'https://www.pvpro.ch/solaranlage-mehrfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Impianto piccolo (15–30 kWp)', price: "ca. 40'000 – 80'000 CHF", highlight: false },
  { size: 'Impianto medio (30–60 kWp)',   price: "ca. 80'000 – 150'000 CHF", highlight: true },
  { size: 'Impianto grande (60+ kWp)',    price: "150'000 CHF +",             highlight: false },
];

const sizeGuide = [
  { label: '5–10 appartamenti',  kwp: 'ca. 20–40 kWp', m2: 'ca. 100–240 m²' },
  { label: '10–20 appartamenti', kwp: 'ca. 40–80 kWp', m2: 'ca. 200–480 m²' },
  { label: 'Edifici più grandi', kwp: '80 kWp +',       m2: '480 m² +' },
];

const exampleRows = [
  { label: 'Appartamenti',         value: '10',              highlight: false },
  { label: 'Potenza',              value: '50 kWp',          highlight: false },
  { label: 'Costi',                value: "ca. 100'000 CHF", highlight: false },
  { label: 'Modello di utilizzo',  value: 'CEL',             highlight: false },
  { label: 'Quota di autoconsumo', value: '60–75 %',         highlight: true },
];

const benefits = [
  { icon: TrendingUp, title: 'Autoconsumo elevato',            text: "Con molti utenti, l'energia solare viene consumata regolarmente durante tutto il giorno — ideale per i condomini." },
  { icon: Users,      title: 'Costi inferiori per tutti',      text: "L'energia solare è più economica dell'energia di rete. Tutti i condòmini ne beneficiano direttamente." },
  { icon: Building2,  title: 'Valore immobiliare in aumento',  text: "Gli edifici con impianti solari sono più attrattivi per inquilini e acquirenti." },
  { icon: BarChart3,  title: 'Prezzi energetici stabili',      text: "L'indipendenza dagli aumenti dei prezzi dell'energia protegge proprietari e inquilini a lungo termine." },
];

const wirtschaftFaktoren = [
  { title: 'Autoconsumo',              text: "Più alto è l'autoconsumo, migliore è il rendimento. In un condominio, una grande parte viene consumata direttamente." },
  { title: "Dimensione dell'impianto", text: "Gli impianti più grandi sono più efficienti e meno costosi per kWp — economie di scala." },
  { title: 'Comportamento di consumo', text: "Un consumo elettrico regolare nel corso della giornata aumenta l'utilizzo dell'energia solare." },
  { title: 'Struttura CEL',            text: "Una buona organizzazione e infrastruttura di contatori nell'edificio è determinante." },
];

export default function SolareCondominioPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solare condominio</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Per i proprietari immobiliari
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solare per condomini: costi, CEL e vantaggi
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                I condomini offrono condizioni ideali per il fotovoltaico: grandi superfici del tetto, numerosi utenti e alto autoconsumo grazie al modello CEL. Questo li rende particolarmente{' '}
                <strong className="text-white">efficienti ed economici</strong>.
              </p>
              <Link
                href="/it/richiesta"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Richiedi un preventivo gratuito <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '20–120 kWp',          label: "Dimensione tipica dell'impianto" },
                { value: "40'000–150'000+",      label: 'CHF investimento' },
                { value: 'CEL',                  label: 'Modello di utilizzo comune' },
                { value: '60–75 %',              label: 'Quota di autoconsumo' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── CEL explainer ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Funzionamento</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Come funziona un impianto solare in un condominio?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In un condominio, l'energia solare viene prodotta centralmente e poi distribuita ai residenti. La soluzione più diffusa in Svizzera è la{' '}
              <strong className="text-gray-800">comunità di energia locale (CEL)</strong>.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6 space-y-3">
              <p className="font-bold text-gray-900 mb-2">Con la CEL:</p>
              {[
                "L'elettricità viene utilizzata direttamente nell'edificio",
                "Ogni appartamento ha il proprio contatore",
                "La fatturazione è interna — spesso più economica della rete",
                "L'energia in eccesso viene immessa nella rete",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-3.png" alt="Condominio con impianto solare" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calcolatore di impianto</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quanto deve essere grande l'impianto?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                La dimensione ottimale dipende dal consumo elettrico totale dell'edificio. Selezionate il numero di appartamenti per ottenere una prima orientazione.
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-3">
                {sizeGuide.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-700">{row.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#F97316]">{row.kwp}</span>
                      <span className="text-xs text-gray-400 ml-2">/ {row.m2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <MehrfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Costi</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quanto costa un impianto solare per un condominio?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Più grande è l'impianto, meno costa <strong className="text-gray-800">per kWp</strong> — le economie di scala sono particolarmente pronunciate per gli edifici di grandi dimensioni.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-gray-100 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Impianto</span><span>Valore orientativo</span>
                </div>
                {costRows.map((row) => (
                  <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-200 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                    <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-installateur-dach-5.png" alt="Montaggio impianto solare condominio" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Billing steps ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fatturazione</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Come viene calcolata l'energia solare in un condominio?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '1', title: 'Produrre energia solare',       text: "L'impianto fotovoltaico sul tetto produce energia durante il giorno per l'intero edificio." },
              { step: '2', title: 'Distribuire internamente (CEL)', text: "L'energia viene distribuita direttamente a tutti gli appartamenti tramite la rete interna dell'edificio." },
              { step: '3', title: 'Fatturare in modo trasparente', text: "Ogni appartamento paga solo l'energia solare effettivamente consumata, tramite il proprio sub-contatore." },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Redditività</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Perché un impianto solare in un condominio è redditizio?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Capital investment ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Investimento in capitale</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Un condominio con fotovoltaico è un buon investimento?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Sì, in molti casi. Un impianto solare può generare entrate aggiuntive, ridurre i costi operativi e aumentare l'attrattività per gli inquilini.
              </p>
              <div className="space-y-3">
                {[
                  "Vendere l'elettricità agli inquilini a un prezzo inferiore rispetto alla rete",
                  "Ridurre permanentemente i costi operativi",
                  "Aumentare l'attrattività per inquilini e acquirenti",
                  "Aumentare il valore immobiliare nel lungo termine",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/asset-haus-solar-ev-1.png" alt="Condominio solare investimento" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Economic factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fattori di redditività</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Quali fattori influenzano la redditività?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {wirtschaftFaktoren.map((f, i) => (
              <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F97316] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Esempio di calcolo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Esempio: impianto solare per un condominio
              </h2>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                {exampleRows.map((row, i) => (
                  <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-200' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                Grazie al consumo condiviso, una grande parte dell'energia può essere utilizzata direttamente nell'edificio.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-beratung-indoor-3.png" alt="Pianificazione impianto solare condominio" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Domande frequenti sull'impianto solare per condomini
          </h2>
          <MehrfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Zap className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Confronta le offerte e pianifica l'impianto in modo ottimale
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Ogni edificio è diverso e richiede una soluzione individuale. Tramite PVPro confrontate gratuitamente più offerte e trovate la soluzione migliore per il vostro edificio.
          </p>
          <Link
            href="/it/richiesta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Richiedi preventivo gratuito →
          </Link>
        </section>

      </div>
    </main>
  );
}
