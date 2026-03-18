import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import FoerderRechner from '@/components/FoerderRechner';

export const metadata: Metadata = {
  title: 'Incentivi solari in Svizzera 2026 | PVPro.ch',
  description: 'Remunerazione unica (RU), programmi cantonali e deduzioni fiscali per impianti fotovoltaici in Svizzera. Calcola il tuo incentivo ora.',
  alternates: { canonical: 'https://www.pvpro.ch/it/incentivi-solari' },
};

const tableRows = [
  { size: '5 kWp',  incentivo: "ca. CHF 1'800", totale: "ca. CHF 13'000", netto: "ca. CHF 11'200" },
  { size: '8 kWp',  incentivo: "ca. CHF 2'800", totale: "ca. CHF 20'800", netto: "ca. CHF 18'000", highlight: true },
  { size: '10 kWp', incentivo: "ca. CHF 3'500", totale: "ca. CHF 25'000", netto: "ca. CHF 21'500" },
];

const processSteps = [
  { n: '1', title: 'Installazione', text: 'Far installare l\'impianto fotovoltaico da un installatore certificato.' },
  { n: '2', title: 'Registrazione', text: 'Registrare l\'impianto presso Pronovo (pronovo.ch) — l\'installatore spesso lo fa per te.' },
  { n: '3', title: 'Verifica', text: 'Le autorità competenti verificano l\'impianto e i documenti.' },
  { n: '4', title: 'Versamento della RU', text: 'La remunerazione unica viene normalmente versata alcuni mesi dopo la registrazione.' },
];

export default function IncentiviSolariPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero-solar-panels.webp" alt="Impianto solare Svizzera" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/it" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Incentivi solari</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Aiuti statali 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Incentivi per<br />impianti solari<br />in Svizzera
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                La Confederazione sostiene lo sviluppo del fotovoltaico con la <strong className="text-white">remunerazione unica (RU)</strong>. Essa riduce direttamente i costi di investimento e rende l'energia solare economicamente attrattiva.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '300–400', unit: 'CHF/kWp', label: 'Incentivo' },
                  { value: '10–15',   unit: 'anni',    label: 'Ammortamento' },
                  { value: '30%',     unit: 'sconto',  label: 'Investimento' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div><FoerderRechner /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Remunerazione unica (RU)</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">Cos'è la remunerazione unica?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                La remunerazione unica è il principale incentivo federale per gli impianti fotovoltaici in Svizzera. È fornita dalla Confederazione e gestita da <strong>Pronovo</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ricevi il pagamento <strong>una sola volta</strong> dopo l'installazione e la registrazione del tuo impianto — nessuna richiesta annuale, nessun onere burocratico.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 border-2 border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">KLEIV</p>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">Piccola remunerazione unica</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Per impianti più piccoli — utilizzato soprattutto per case unifamiliari private.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />Ideale per privati
                  </div>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ background: '#f9fafb' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">GREIV</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Grande remunerazione unica</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Per impianti più grandi — es. condomini o attività commerciali.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <CheckCircle className="w-4 h-4" />Per impianti più grandi
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-2.png" alt="Incentivi solari Svizzera" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Panoramica incentivi</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">A quanto ammonta l'incentivo?</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              L'incentivo è tipicamente di <strong className="text-gray-800">300–400 CHF per kWp</strong> installato. Più grande è l'impianto, più alto è l'importo.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-4 gap-0" style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                {['Dimensione impianto', 'Incentivo (RU)', 'Costo totale', 'Costo netto'].map(h => (
                  <div key={h} className="px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</div>
                ))}
              </div>
              {tableRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-4 gap-0 border-t ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                  style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : { background: '#fff' }}>
                  <div className="px-5 py-5 font-bold text-gray-900 flex items-center gap-2">
                    {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Popolare</span>}
                    {row.size}
                  </div>
                  <div className="px-5 py-5 font-bold text-[#F97316]">{row.incentivo}</div>
                  <div className="px-5 py-5 text-gray-600">{row.totale}</div>
                  <div className="px-5 py-5 font-bold text-green-600">{row.netto}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5" />Valori indicativi. L'importo esatto dipende dalla struttura incentivante attuale e dalla dimensione dell'impianto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Incentivi aggiuntivi</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Programmi cantonali</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Oltre all'aiuto federale, molti cantoni offrono programmi aggiuntivi. Gli incentivi disponibili variano da cantone a cantone.
              </p>
              <div className="flex flex-col gap-3">
                {['Accumulatori per impianti solari', 'Sistemi per aumentare l\'autoconsumo', 'Tecnologia edile a risparmio energetico'].map(m => (
                  <div key={m} className="flex items-center gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{m}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Procedura</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Come ottengo l'incentivo?</h2>
              <div className="flex flex-col gap-0">
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-5 pb-8 relative">
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 w-0.5 h-full" style={{ background: 'rgba(249,115,22,0.2)' }} />
                    )}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm relative z-10" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                    <div className="pt-1">
                      <p className="font-bold text-white mb-1">{step.title}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Approfitta ora</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ottimizzare i tuoi incentivi?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              I nostri installatori partner conoscono tutti i programmi incentivanti attuali e si occupano delle pratiche — tu non devi preoccuparti di nulla.
            </p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
