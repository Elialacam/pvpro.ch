import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Impianto solare casa unifamiliare Svizzera: costi, dimensioni e vantaggi | PVPro.ch',
  description: 'Quanto costa un impianto solare per una casa unifamiliare in Svizzera? Prezzi, dimensioni, incentivi e consigli spiegati semplicemente. Confronta le offerte ora.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/solare-casa-unifamiliare',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-maison-individuelle',
      'en-CH': 'https://www.pvpro.ch/en/solar-detached-house',
      'it-CH': 'https://www.pvpro.ch/it/solare-casa-unifamiliare',
      'x-default': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Impianto piccolo (6–8 kWp)',  price: "ca. 20'000 – 25'000 CHF", highlight: false },
  { size: 'Standard (8–10 kWp)',         price: "ca. 25'000 – 30'000 CHF", highlight: true },
  { size: 'Impianto grande (10–15 kWp)', price: "ca. 30'000 – 35'000 CHF", highlight: false },
];

const exampleRows = [
  { label: 'Superficie tetto',   value: '60 m²',                       highlight: false },
  { label: 'Potenza',            value: '10 kWp',                      highlight: false },
  { label: 'Costi',              value: "ca. 25'000 – 30'000 CHF",    highlight: false },
  { label: 'Incentivo RU',       value: "ca. 3'600 CHF",              highlight: false },
  { label: 'Costi effettivi',    value: "ca. 20'000 – 26'000 CHF",    highlight: true },
];

const factors = [
  { icon: Home,   title: 'Dimensione e orientamento tetto', text: 'I tetti esposti a sud offrono le migliori prestazioni. Anche quelli est/ovest sono adatti.' },
  { icon: Ruler,  title: "Dimensione dell'impianto",       text: "Gli impianti più grandi costano meno per kWp — le economie di scala influiscono sul prezzo." },
  { icon: Cpu,    title: 'Tecnologia e componenti',        text: "I moduli, gli inverter e l'accumulo opzionale influiscono su costi e prestazioni." },
  { icon: Wrench, title: 'Sforzo di installazione',        text: 'I tetti complessi o difficili da raggiungere aumentano lo sforzo di montaggio.' },
];

const benefits = [
  "Ridurre significativamente i costi dell'energia",
  "Aumentare l'indipendenza energetica",
  'Aumentare il valore immobiliare',
  "Utilizzare energia sostenibile direttamente dal tetto",
];

export default function SolareCasaUnifamiliarePage() {
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
            <span className="text-white/70">Solare casa unifamiliare</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Per i proprietari
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Impianto solare per casa unifamiliare: costi, dimensioni e vantaggi
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Un impianto solare riduce i vostri costi energetici e vi rende più indipendenti. Tipicamente una casa unifamiliare viene equipaggiata con <strong className="text-white">8–12 kWp</strong> — ovvero circa <strong className="text-white">50–70 m²</strong> di superficie del tetto.
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
                { value: '8–12 kWp',           label: "Dimensione tipica dell'impianto" },
                { value: "25'000–30'000",       label: 'CHF investimento' },
                { value: "9'000–11'000",        label: 'kWh produzione/anno' },
                { value: '25–30 anni',          label: 'Durata di vita' },
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

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calcolatore di dimensioni</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quanto deve essere grande il vostro impianto solare?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                La dimensione ottimale dipende dal consumo elettrico. Come regola generale:{' '}
                <strong className="text-gray-800">1'000 kWh di consumo → ca. 1–2 kWp di impianto.</strong>
              </p>
              <p className="text-gray-500 leading-relaxed">
                Se avete una pompa di calore o un'auto elettrica, un impianto più grande è spesso redditizio. Utilizzate il calcolatore per ottenere una prima raccomandazione.
              </p>
            </div>
            <div className="lg:col-span-3">
              <EinfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Costi</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quanto costa un impianto solare per una casa unifamiliare?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Per un impianto tipico da 10 kWp con circa 50 m² di superficie del tetto, sono realistici investimenti di circa{' '}
              <strong className="text-gray-800">25'000 – 30'000 CHF</strong>.
              Dopo gli incentivi e le deduzioni fiscali, il prezzo effettivo può essere notevolmente inferiore.
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Dimensione impianto</span><span>Valore orientativo</span>
              </div>
              {costRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                  <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img loading="lazy" src="/images/asset-installateur-dach-1.webp" alt="Impianto solare casa unifamiliare Svizzera" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Produzione di elettricità</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quanta elettricità produce un impianto solare?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Un impianto tipico su una casa unifamiliare produce{' '}
                <strong className="text-white">ca. 9'000 – 11'000 kWh all'anno</strong> — ovvero la maggior parte del fabbisogno elettrico di un nucleo familiare.
              </p>
              {[
                { label: 'Impianto 8 kWp',  value: "7'200 – 8'800 kWh/anno",   pct: 65 },
                { label: 'Impianto 10 kWp', value: "9'000 – 11'000 kWh/anno",  pct: 80 },
                { label: 'Impianto 12 kWp', value: "10'800 – 13'200 kWh/anno", pct: 95 },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img loading="lazy" src="/images/asset-haus-luftbild-1.webp" alt="Casa unifamiliare con impianto solare" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Conviene? ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img loading="lazy" src="/images/asset-beratung-indoor-2.webp" alt="Consulenza impianto solare" className="w-full h-80 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Redditività</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Un impianto solare per una casa unifamiliare conviene?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Sì, nella maggior parte dei casi un impianto fotovoltaico è redditizio a lungo termine. Grazie all'autoconsumo e agli incentivi, l'impianto si ammortizza nel corso degli anni.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Incentivi ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Incentivi</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Incentivi per impianti solari in Svizzera
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Per un impianto da 10 kWp, il contributo federale corrisponde a circa <strong className="text-gray-800">3'600 CHF</strong>. Si aggiungono incentivi cantonali e deduzioni fiscali.
              </p>
              <div className="space-y-3">
                {[
                  "Rimborso unico (RU) federale: ca. 360 CHF/kWp",
                  "Ulteriori programmi di incentivi cantonali",
                  "Deduzioni fiscali a livello federale",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#F97316] hover:underline">
                Vedi tutti gli incentivi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Investimento (10 kWp)',  value: "25'000 – 30'000 CHF",    color: 'text-gray-800',   highlight: false },
                { label: 'Incentivo federale RU',  value: "– 3'600 CHF",            color: 'text-green-600',  highlight: false },
                { label: 'Incentivo cantonale',    value: 'variabile',              color: 'text-green-600',  highlight: false },
                { label: 'Deduzioni fiscali',      value: 'variabile',              color: 'text-green-600',  highlight: false },
                { label: 'Costi effettivi',        value: "ca. 20'000 – 26'000 CHF", color: 'text-[#F97316]', highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between items-center px-5 py-3.5 rounded-xl ${row.highlight ? 'bg-orange-50 border border-orange-100' : 'bg-white border border-gray-100'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold text-sm ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Accumulo ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Accumulo a batteria</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Con o senza accumulo a batteria?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <p className="font-bold text-gray-900 text-lg mb-1">Senza accumulo</p>
              <p className="text-sm text-gray-400 mb-4">Opzione economica</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Investimento iniziale inferiore</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Ammortamento più rapido</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Autoconsumo ca. 25–40%</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#F97316]/30 p-6 shadow-sm bg-orange-50">
              <p className="font-bold text-gray-900 text-lg mb-1">Con accumulo a batteria</p>
              <p className="text-sm text-[#F97316] font-semibold mb-4">Raccomandato per consumi elevati</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Autoconsumo fino al 50–65%</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Elettricità anche di sera</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Maggiore indipendenza</span></div>
              </div>
            </div>
          </div>
          <Link href="/it/solare-con-accumulo" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#F97316] hover:underline">
            Scopri di più sull'accumulo a batteria <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fattori di influenza</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Quali fattori influenzano i costi?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Esempio di calcolo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Esempio: impianto solare per una casa unifamiliare</h2>
          <div className="max-w-lg">
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Domande frequenti sull'impianto solare per casa unifamiliare
          </h2>
          <EinfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Sun className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Confronta le offerte e ottimizza i costi
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            I prezzi degli impianti solari variano notevolmente a seconda del fornitore. Tramite PVPro ricevete gratuitamente fino a 3 preventivi da installatori certificati nella vostra regione.
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
