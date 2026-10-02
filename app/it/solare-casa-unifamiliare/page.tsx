import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';
import { ECONOMIC_FACTS, SOURCE_NOTES, SYSTEM_PRICE_NOTES, formatChf, formatRangeForLocale, formatSwissNumber } from '@/lib/facts';

const itRange = (range: { readonly min: number; readonly max: number }, unit: string) =>
  formatRangeForLocale(range, unit, 'it');

export const metadata: Metadata = pageMetadata({
  title: 'Impianto solare casa unifamiliare Svizzera: costi, dimensioni e vantaggi | PvPro.ch',
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
}, { path: '/it/solare-casa-unifamiliare', locale: 'it' });

const costRows = [
  { size: 'Impianto da 5 kWp', price: itRange(ECONOMIC_FACTS.systemCosts.bySize[5], 'CHF'), highlight: false },
  { size: 'Impianto da 10 kWp', price: itRange(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF'), highlight: true },
  { size: 'Impianto da 15 kWp', price: itRange(ECONOMIC_FACTS.systemCosts.bySize[15], 'CHF'), highlight: false },
];

const exampleRows = [
  { label: 'Superficie tetto', value: `${formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`, highlight: false },
  { label: 'Potenza', value: `${Object.keys(ECONOMIC_FACTS.systemCosts.bySize)[2]} kWp`, highlight: false },
  { label: 'Costi lordi', value: itRange(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF'), highlight: false },
  { label: 'Incentivo RU', value: formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox), highlight: false },
  { label: 'Costi netti dopo la RU', value: itRange({ min: ECONOMIC_FACTS.systemCosts.bySize[10].min - ECONOMIC_FACTS.incentives.tenKwpApprox, max: ECONOMIC_FACTS.systemCosts.bySize[10].max - ECONOMIC_FACTS.incentives.tenKwpApprox }, 'CHF'), highlight: true },
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
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }} />
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
                Un impianto solare riduce i vostri costi energetici e vi rende più indipendenti. Il dimensionamento dipende dal consumo e dalla superficie utilizzabile.
              </p>
              <Link
                href="/it/richiesta"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
              >
                Richiedi un preventivo gratuito <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: itRange(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF'), label: 'Costo lordo 10 kWp' },
                { value: itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh/anno'), label: 'Produzione 10 kWp Altopiano' },
                { value: itRange(ECONOMIC_FACTS.moduleLifetimeYears, 'anni'), label: 'Durata moduli' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
             <p className="text-xs text-gray-400 mt-3">{SYSTEM_PRICE_NOTES.it} {SOURCE_NOTES.it}</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Calcolatore di dimensioni</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quanto deve essere grande il vostro impianto solare?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                La dimensione ottimale dipende dal consumo elettrico e dalla superficie del tetto.
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Costi</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quanto costa un impianto solare per una casa unifamiliare?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Per un impianto da 10 kWp il costo lordo nazionale è <strong className="text-gray-800">{itRange(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF')}</strong>.
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Dimensione impianto</span><span>Valore orientativo</span>
              </div>
              {costRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                  <span className={`font-bold text-sm ${row.highlight ? 'text-[#fcb210]' : 'text-gray-700'}`}>{row.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/asset-installateur-dach-1.webp" alt="Impianto solare casa unifamiliare Svizzera" width={1600} height={1600} sizes="(max-width: 1024px) 100vw, 640px" className="w-full h-80 object-cover" loading="lazy"/>
          </div>
        </section>

        {/* ── Production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #fcb210 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Produzione di elettricità</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quanta elettricità produce un impianto solare?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                 Un impianto da 10 kWp produce <strong className="text-white">{itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh all’anno')}</strong> sull'Altopiano.
              </p>
              {[
                { label: 'Impianto 5 kWp', value: itRange({ min: 5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 5 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh/anno'), pct: 35 },
                { label: 'Impianto 10 kWp', value: itRange({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh/anno'), pct: 70 },
                { label: 'Impianto 15 kWp', value: itRange({ min: 15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh/anno'), pct: 100 },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#fcb210]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/asset-haus-luftbild-1.webp" alt="Casa unifamiliare con impianto solare" width={1600} height={1600} sizes="(max-width: 1024px) 100vw, 640px" className="w-full h-72 object-cover" loading="lazy"/>
            </div>
          </div>
        </section>

        {/* ── Conviene? ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/asset-beratung-indoor-2.webp" alt="Consulenza impianto solare" width={2048} height={2048} sizes="(max-width: 1024px) 100vw, 640px" className="w-full h-80 object-cover" loading="lazy"/>
          </div>
          <div>
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Redditività</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Un impianto solare per una casa unifamiliare conviene?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Sì, nella maggior parte dei casi un impianto fotovoltaico è redditizio a lungo termine. Grazie all'autoconsumo e agli incentivi, l'impianto si ammortizza nel corso degli anni.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcb210] flex-shrink-0 mt-0.5" />
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
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Incentivi</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Incentivi per impianti solari in Svizzera
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Per un impianto da 10 kWp, la RU è di circa <strong className="text-gray-800">{formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox)}</strong>.
              </p>
              <div className="space-y-3">
                {[
                  `RU federale: ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)}/kWp fino a 30 kWp`,
                  "Ulteriori programmi di incentivi cantonali",
                  "Deduzioni fiscali a livello federale",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#fcb210] hover:underline">
                Vedi tutti gli incentivi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Investimento lordo (10 kWp)', value: itRange(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF'), color: 'text-gray-800', highlight: false },
                { label: 'Incentivo federale RU', value: `– ${formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox)}`, color: 'text-green-600', highlight: false },
                { label: 'Incentivo cantonale',    value: 'variabile',              color: 'text-green-600',  highlight: false },
                { label: 'Deduzioni fiscali',      value: 'variabile',              color: 'text-green-600',  highlight: false },
                { label: 'Costi netti dopo la RU', value: itRange({ min: ECONOMIC_FACTS.systemCosts.bySize[10].min - ECONOMIC_FACTS.incentives.tenKwpApprox, max: ECONOMIC_FACTS.systemCosts.bySize[10].max - ECONOMIC_FACTS.incentives.tenKwpApprox }, 'CHF'), color: 'text-[#fcb210]', highlight: true },
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
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Accumulo a batteria</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Con o senza accumulo a batteria?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <p className="font-bold text-gray-900 text-lg mb-1">Senza accumulo</p>
              <p className="text-sm text-gray-400 mb-4">Opzione economica</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Investimento iniziale inferiore</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Ammortamento più rapido</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Autoconsumo {itRange(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%')}</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#fcb210]/30 p-6 shadow-sm bg-orange-50">
              <p className="font-bold text-gray-900 text-lg mb-1">Con accumulo a batteria</p>
              <p className="text-sm text-[#fcb210] font-semibold mb-4">Raccomandato per consumi elevati</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0" /><span>Autoconsumo {itRange(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%')}</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0" /><span>Elettricità anche di sera</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0" /><span>Maggiore indipendenza</span></div>
              </div>
            </div>
          </div>
          <Link href="/it/solare-con-accumulo" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#fcb210] hover:underline">
            Scopri di più sull'accumulo a batteria <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Fattori di influenza</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Quali fattori influenzano i costi?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#fcb210]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#fcb210]" />
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
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Esempio di calcolo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Esempio: impianto solare per una casa unifamiliare</h2>
          <div className="max-w-lg">
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? 'text-[#fcb210] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Domande frequenti sull'impianto solare per casa unifamiliare
          </h2>
          <EinfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Sun className="w-10 h-10 text-[#fcb210] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Confronta le offerte e ottimizza i costi
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            I prezzi degli impianti solari variano notevolmente a seconda del fornitore. Tramite PvPro.ch ricevete gratuitamente fino a 3 preventivi da installatori certificati nel vostro Cantone.
          </p>
          <Link
            href="/it/richiesta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
          >
            Richiedi preventivo gratuito →
          </Link>
        </section>

      </div>
    </main>
  );
}
