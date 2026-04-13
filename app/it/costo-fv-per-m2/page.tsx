import Link from 'next/link';
import { ChevronRight, Sun, Zap, TrendingDown, CheckCircle2, Home, Ruler, Award, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import PhotovoltaikFaq from '@/components/PhotovoltaikFaq';

export const metadata: Metadata = {
  title: 'Costo fotovoltaico per m² Svizzera: prezzi, esempi e calcolo | PVPro.ch',
  description: 'Quanto costa il fotovoltaico per m² in Svizzera? Prezzi, esempi e costi per kWp spiegati semplicemente. Confronta le offerte ora.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/costo-fv-per-m2',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-pv-par-m2',
      'en-CH': 'https://www.pvpro.ch/en/solar-cost-per-m2',
      'it-CH': 'https://www.pvpro.ch/it/costo-fv-per-m2',
      'x-default': 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
    },
  },
};

const priceRows = [
  { label: 'Impianto base',    range: 'ca. 200 – 250 CHF',  color: '#6b7280', highlight: false },
  { label: 'Impianto standard', range: 'ca. 250 – 350 CHF', color: '#F97316', highlight: true },
  { label: 'Impianto premium', range: 'ca. 350 – 400+ CHF', color: '#1e3a5f', highlight: false },
];

const comparisonRows = [
  { unit: 'per m²',  price: "200 – 400 CHF",      note: 'Prima stima approssimativa' },
  { unit: 'per kWp', price: "1'000 – 1'500 CHF",  note: 'Pianificazione precisa & offerta' },
];

const exampleRows = [
  { position: 'Superficie del tetto',               value: '60 m²',              last: false },
  { position: 'Prezzo per m²',                      value: '250 CHF',            last: false },
  { position: 'Prezzo totale (valore orientativo)',  value: "ca. 15'000 CHF",    last: true },
];

const factors = [
  { icon: Home,   title: 'Tipo di tetto',        text: 'Un tetto piano è spesso meno costoso da installare rispetto a un tetto a falde complesso.' },
  { icon: Ruler,  title: 'Dimensione impianto',  text: 'Gli impianti più grandi sono generalmente meno cari per m² grazie alle economie di scala.' },
  { icon: Award,  title: 'Qualità dei moduli',   text: 'I moduli premium costano di più ma spesso producono più potenza per m².' },
  { icon: Wrench, title: 'Sforzo di montaggio',  text: 'I tetti difficili o i lavori aggiuntivi aumentano significativamente il prezzo.' },
];

export default function CostoFVPerM2Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Costo fotovoltaico per m²</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Costi & prezzi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Costo del fotovoltaico per m² in Svizzera
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Molti proprietari vogliono capire rapidamente quanto costa un impianto solare per il loro tetto — senza dettagli tecnici. In Svizzera, il costo medio del fotovoltaico è tra{' '}
              <strong className="text-white">200 e 400 CHF per m²</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '200 – 400 CHF', label: 'per m² (valore orientativo)' },
                { value: '1 kWp ≈ 5–6 m²', label: 'superficie necessaria' },
                { value: '150 – 200 kWh', label: 'energia per m²/anno' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Price table ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Panoramica prezzi</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quanto costa il fotovoltaico per m²?</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl">
            Il costo per m² dipende dalla potenza dei moduli, dalla qualità dei componenti, dal tipo di tetto e dalla dimensione dell'impianto.
          </p>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>Categoria</span><span>Prezzo per m²</span>
            </div>
            {priceRows.map((row) => (
              <div key={row.label} className={`grid grid-cols-2 px-6 py-5 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                <span className="font-bold text-gray-800 text-sm sm:text-base">{row.label}</span>
                <span className="font-bold text-base sm:text-lg" style={{ color: row.color }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">Questi valori servono come orientamento. Il prezzo esatto dipende sempre dal progetto concreto.</p>
        </section>

        {/* ── Why kWp ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Capire le unità</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Perché spesso non si calcola in m²?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In pratica, il fotovoltaico viene solitamente calcolato in <strong className="text-gray-800">kWp (kilowatt di picco)</strong>, perché i moduli hanno potenze diverse, le superfici del tetto sono utilizzabili in modo diverso e l'efficienza varia a seconda della tecnologia.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6">
              <p className="text-sm font-bold text-[#F97316] mb-3">Conversione approssimativa</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">1 kWp ≈ 5–6 m²</p>
              <div className="space-y-2 text-sm text-gray-600">
                {["Impianto da 10 kWp → ca. 50–60 m² di superficie del tetto", "Impianto da 20 kWp → ca. 100–120 m² di superficie del tetto"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-panel-closeup-1.png" alt="Pannelli solari Svizzera" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── m² vs kWp ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Confronto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Costo per m² vs. costo per kWp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comparisonRows.map((row) => (
              <div key={row.unit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{row.unit}</p>
                <p className="text-3xl font-bold text-[#F97316] mb-2">{row.price}</p>
                <p className="text-sm text-gray-500">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-xl">
            Il prezzo per m² è più adatto per una prima stima grossolana. Per una pianificazione realistica, il prezzo per kWp è generalmente più preciso.
          </p>
        </section>

        {/* ── Example ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-2.png" alt="Casa unifamiliare con impianto solare" className="w-full h-72 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Esempio di calcolo</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Esempio: impianto solare per una casa unifamiliare</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Una tipica casa unifamiliare svizzera con 60 m² di superficie del tetto e ca. 10 kWp di potenza:
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-5 shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.position} className={`flex justify-between items-center px-5 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.last ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.last ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.position}</span>
                  <span className={`font-bold ${row.last ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800 leading-relaxed">
              <strong>Nota:</strong> Nella realtà, i costi totali sono spesso più elevati (20'000–30'000 CHF), poiché l'inverter, l'installazione, la pianificazione e il montaggio si aggiungono.
            </div>
          </div>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fattori di influenza</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Quali fattori influenzano i costi per m²?</h2>
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

        {/* ── Energy production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 60%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Produzione di elettricità</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Quanta elettricità produce 1 m² di fotovoltaico?</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Un metro quadro di fotovoltaico produce in Svizzera circa{' '}
                <strong className="text-white">150 – 200 kWh di elettricità all'anno</strong>. La produzione esatta dipende dall'orientamento, dall'inclinazione e dalla posizione.
              </p>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <Zap className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                <p className="text-sm text-white/80">
                  <strong className="text-white">50 m²</strong> → ca. <strong className="text-white">7'500 – 10'000 kWh</strong> all'anno
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: '20 m²', kwh: "3'000 – 4'000 kWh/anno", pct: 30 },
                { label: '40 m²', kwh: "6'000 – 8'000 kWh/anno", pct: 60 },
                { label: '60 m²', kwh: "9'000 – 12'000 kWh/anno", pct: 90 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.kwh}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quando conviene ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Redditività</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Quando conviene il fotovoltaico per m²?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Più elettricità si consuma autonomamente, maggiore è la redditività dell'impianto.
            </p>
            <div className="space-y-3">
              {[
                'Il tetto è ben orientato (sud, est/ovest)',
                'Si consuma autonomamente quanta più elettricità possibile',
                'Il consumo di elettricità è elevato',
                'Il tetto non è ombreggiato',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-beratung-indoor-1.png" alt="Consulenza solare Svizzera" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Domande frequenti sui costi del fotovoltaico per m²
          </h2>
          <PhotovoltaikFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <TrendingDown className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Confronta le offerte e calcola i costi con precisione
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Il costo per m² è solo un'orientamento approssimativo. Tramite PVPro ottenete gratuitamente preventivi da installatori certificati — calcolati con precisione per la vostra casa.
          </p>
          <Link
            href="/it/richiesta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Ottieni preventivi gratuiti →
          </Link>
        </section>

      </div>
    </main>
  );
}
