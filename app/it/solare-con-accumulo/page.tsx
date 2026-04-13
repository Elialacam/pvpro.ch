import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Battery, Sun, Home, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';
import { SpeicherGroesse, SpeicherFAQ } from '@/components/SpeicherVergleich';

export const metadata: Metadata = {
  title: 'Impianto solare con accumulo: costi, vantaggi e funzionamento | PVPro.ch',
  description: 'Come funziona un impianto solare con accumulo a batteria? Costi, vantaggi, dimensionamento e autoconsumo in Svizzera spiegati semplicemente.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/solare-con-accumulo',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mit-speicher',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-avec-batterie',
      'en-CH': 'https://www.pvpro.ch/en/solar-with-battery',
      'it-CH': 'https://www.pvpro.ch/it/solare-con-accumulo',
      'x-default': 'https://www.pvpro.ch/solaranlage-mit-speicher',
    },
  },
};

const vantaggi = [
  { icon: TrendingUp, title: 'Meno elettricità acquistata', text: 'Acquistate molto meno elettricità dal fornitore — giorno dopo giorno.' },
  { icon: Zap,        title: 'Costi elettricità ridotti',   text: 'A lungo termine, i vostri costi elettrici si riducono notevolmente, soprattutto con l\'aumento dei prezzi.' },
  { icon: Home,       title: 'Più indipendenza',            text: 'Meno dipendenza dal mercato dell\'elettricità — anche la sera e la notte.' },
  { icon: Sun,        title: 'Utilizzare l\'energia solare', text: 'L\'elettricità autoprodotta non viene più immessa inutilizzata nella rete.' },
];

const quandoUtile = [
  'Viene ricaricata un\'auto elettrica',
  'Viene azionata una pompa di calore',
  'Il consumo di elettricità serale è elevato',
  'Si vuole utilizzare quanta più elettricità solare possibile in autoconsumo',
];

export default function SolareConAccumuloPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/blog-3.webp" alt="Impianto solare con accumulo" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/it" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solare con accumulo</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Battery className="w-3.5 h-3.5" /> Accumulo a batteria
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Impianto solare con accumulo: costi, vantaggi e funzionamento
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Un accumulo a batteria permette di utilizzare l'elettricità solare autoprodotta anche la sera e la notte — invece di immetterla nella rete.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '70%',      label: 'Autoconsumo possibile' },
                  { value: '8–15 kWh', label: 'Dimensione tipica accumulo' },
                  { value: '25–40k',   label: 'CHF costo totale' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-white font-bold text-lg mb-6">Confronto autoconsumo</p>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'Senza accumulo', pct: 30, color: '#6b7280' },
                  { label: 'Con accumulo',   pct: 70, color: '#F97316' },
                ].map(item => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400 font-medium">{item.label}</span>
                      <span className="text-sm font-bold" style={{ color: item.color }}>~{item.pct}%</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden bg-white/10">
                      <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-6">Valori medi per una casa unifamiliare con impianto solare da 10 kWp</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNZIONAMENTO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Funzionamento</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Come funziona un impianto solare con accumulo?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Un impianto fotovoltaico produce elettricità dall'energia solare durante il giorno. Questa viene prima utilizzata direttamente nella casa — per gli elettrodomestici, l'illuminazione o le pompe di calore.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Se l'impianto produce più del necessario, il sistema di accumulo a batteria immagazzina automaticamente l'energia. La sera o la notte, la restituisce. Una regolazione intelligente garantisce una distribuzione ottimale.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { icon: Sun,     label: 'Impianto solare', color: '#F97316' },
                  { icon: Battery, label: 'Accumulo',        color: '#3b82f6' },
                  { icon: Home,    label: 'Casa',            color: '#10b981' },
                ].map((item, i, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex flex-col items-center gap-2 rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}18` }}>
                          <Icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <p className="text-xs font-bold text-gray-700">{item.label}</p>
                      </div>
                      {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-gray-300 flex-shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/hero-family-solar.webp" alt="Impianto solare con accumulo a batteria" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VANTAGGI ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Perché conviene?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              I vantaggi di un accumulo a batteria
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              Senza accumulo, solo il <strong className="text-gray-800">30%</strong> dell'elettricità solare prodotta viene utilizzata direttamente. Con l'accumulo, questo valore sale al <strong className="text-gray-800">60–70%</strong>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vantaggi.map(v => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COSTI ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Costi & prezzi</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Quanto costa un impianto solare con accumulo?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I costi dipendono dalla dimensione dell'impianto, dalla capacità dell'accumulo, dal tipo di tetto e dalla qualità dei componenti. Ecco i valori orientativi tipici per una casa unifamiliare:
              </p>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Impianto fotovoltaico (ca. 10 kWp)', range: "18'000 – 25'000 CHF", highlight: false },
                  { label: 'Accumulo a batteria',                  range: "8'000 – 15'000 CHF",  highlight: false },
                  { label: 'Impianto completo',                    range: "25'000 – 40'000 CHF", highlight: true  },
                ].map(row => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between rounded-2xl px-6 py-4 ${row.highlight ? 'border-2 border-orange-200' : 'border border-gray-100'}`}
                    style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : { background: '#f9fafb' }}
                  >
                    <p className={`font-medium text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.label}</p>
                    <p className={`font-bold ${row.highlight ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Grazie ai programmi di sovvenzioni e al maggiore autoconsumo, l'impianto può essere economicamente vantaggioso nel corso degli anni.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-5.webp" alt="Costi impianto solare Svizzera" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIMENSIONE ACCUMULO (INTERACTIVE) ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Dimensione dell'accumulo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Quanto deve essere grande il vostro accumulo a batteria?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                La dimensione ideale dipende dal consumo elettrico della vostra casa e dalla dimensione del vostro impianto solare. Un accumulo troppo grande può essere meno sensato economicamente.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Selezionate il vostro profilo familiare per vedere la dimensione di accumulo raccomandata e l'autoconsumo previsto.
              </p>
            </div>
            <SpeicherGroesse />
          </div>
        </div>
      </section>

      {/* ── PRODUZIONE + QUANDO CONVIENE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-1.webp" alt="Produzione elettricità solare" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Produzione di elettricità</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Quanta elettricità produce un impianto solare?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Un impianto tipico da 10 kWp in Svizzera produce annualmente circa <strong>9'000 – 11'000 kWh</strong> — ovvero circa <strong>25–40 kWh</strong> al giorno.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                La quantità esatta dipende dall'orientamento del tetto, dall'angolo di inclinazione e dall'irraggiamento solare regionale.
              </p>

              <p className="font-bold text-gray-900 mb-4">Un accumulo è particolarmente utile se…</p>
              <div className="flex flex-col gap-2.5">
                {quandoUtile.map(w => (
                  <div key={w} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <p className="text-sm text-gray-700">{w}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Domande frequenti sull'accumulo a batteria
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <SpeicherFAQ />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Confronta le offerte</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Confronta ora il tuo impianto solare con accumulo
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              I costi possono variare notevolmente a seconda dell'installatore e dei componenti. Richiedi gratuitamente fino a 3 preventivi e confrontali.
            </p>
            <Link
              href="/it/richiesta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Richiedi preventivi gratuiti
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
