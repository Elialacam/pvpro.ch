import Link from 'next/link';
import { ChevronRight, ArrowRight, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Confronto tipi impianti solari Svizzera 2026 – Quale fa per me? | PVPro.ch',
  description: "Confronto dei diversi tipi di impianti fotovoltaici in Svizzera: monocristallino, policristallino, film sottile, bifacciale. Quali sono le differenze e quale conviene?",
  alternates: {
    canonical: 'https://www.pvpro.ch/it/confronto-tipi-impianti-solari',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
      'fr-CH': 'https://www.pvpro.ch/fr/comparaison-types-panneaux-solaires',
      'en': 'https://www.pvpro.ch/en/solar-panel-types-comparison',
      'it-CH': 'https://www.pvpro.ch/it/confronto-tipi-impianti-solari',
      'x-default': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
    },
  },
  openGraph: {
    title: 'Confronto tipi impianti solari Svizzera 2026 – Quale fa per me?',
    description: "Monocristallino, policristallino, film sottile, bifacciale — tutti i tipi in confronto diretto per la Svizzera.",
    url: 'https://www.pvpro.ch/it/confronto-tipi-impianti-solari',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quali pannelli solari sono più diffusi in Svizzera?",
    answer: "I pannelli monocristallini sono di gran lunga i più installati in Svizzera. Offrono il miglior rendimento anche in condizioni di cielo coperto e sono ideali per il clima svizzero.",
  },
  {
    question: "Qual è la differenza tra monocristallino e policristallino?",
    answer: "I pannelli monocristallini hanno un rendimento più elevato e sono più compatti, ma costano un po' di più. I pannelli policristallini sono più economici, ma richiedono più superficie per la stessa potenza.",
  },
  {
    question: "I pannelli bifacciali convengono per una normale casa unifamiliare?",
    answer: "Su un normale tetto a falda il guadagno di produzione dal lato posteriore è ridotto. I pannelli bifacciali convengono soprattutto su tetti piani o in regioni con molta neve.",
  },
  {
    question: "Quali pannelli durano più a lungo?",
    answer: "Tutti i pannelli cristallini di alta qualità hanno una garanzia di prestazione di 25–30 anni. La scelta del produttore è spesso più importante della tecnologia.",
  },
  {
    question: "Posso combinare diversi tipi di pannelli sullo stesso tetto?",
    answer: "Tecnicamente è possibile, ma in pratica non è raccomandato. Pannelli diversi hanno caratteristiche elettriche diverse, il che può ridurre le prestazioni del sistema.",
  },
  {
    question: "Quale tipo di pannello si adatta meglio al clima svizzero?",
    answer: "I pannelli monocristallini sono la scelta migliore per il clima svizzero — forniscono buone prestazioni anche con cielo coperto e luce diffusa, e sono robusti contro neve e freddo.",
  },
];

const tabella = [
  { tipo: 'Monocristallino', rendimento: '18–22%', costi: 'Medio–Alto', ideale: 'Piccole superfici, alta efficienza' },
  { tipo: 'Policristallino', rendimento: '15–17%', costi: 'Basso', ideale: 'Grandi superfici, opzione economica' },
  { tipo: 'Film sottile', rendimento: '10–13%', costi: 'Basso', ideale: 'Tetti piani, applicazioni speciali' },
  { tipo: 'Bifacciale', rendimento: '20–24%', costi: 'Alto', ideale: 'Regioni nevose, tetti piani' },
];

const situazioniTabella = [
  { situazione: 'Tetto piccolo, potenza massima', raccomandazione: 'Monocristallino' },
  { situazione: 'Tetto grande, budget ridotto', raccomandazione: 'Policristallino' },
  { situazione: 'Tetto piano, regione nevada', raccomandazione: 'Bifacciale' },
  { situazione: 'Facciata o tetto non convenzionale', raccomandazione: 'Film sottile' },
  { situazione: 'Casa unifamiliare standard Svizzera', raccomandazione: 'Monocristallino', highlight: true },
];

export default function ConfrontoTipiImpiantiSolariPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/it/installare-impianto-solare-svizzera" className="hover:text-white/70 transition-colors">Solare</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Tipi di impianti</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Tecnica &amp; Confronto
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Confronto tipi di impianti solari — quale si adatta alla tua situazione?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Non tutti gli impianti solari sono uguali. A seconda del tipo di tetto, del budget e degli obiettivi esistono diverse tecnologie e configurazioni. Questa pagina spiega i principali tipi in modo comprensibile — senza gergo tecnico — per permetterti di prendere una decisione informata.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '22%', sub: 'rendimento max. monocristallino', note: 'miglior valore in condizioni standard' },
              { val: '4 tipi', sub: 'in confronto diretto', note: 'mono, poli, film sottile, bifacciale' },
              { val: '25–30 anni', sub: 'durata di vita di tutti i tipi', note: 'con garanzia di prestazione' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Panoramica</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">I principali tipi di pannelli solari in sintesi</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Tipo</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Rendimento</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Costi</th>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Ideale per</th>
                </tr>
              </thead>
              <tbody>
                {tabella.map((row, i) => (
                  <tr key={row.tipo} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-bold text-gray-900 text-sm">{row.tipo}</td>
                    <td className="px-5 py-4 text-center font-bold text-[#F97316] text-sm">{row.rendimento}</td>
                    <td className="px-5 py-4 text-center text-gray-700 text-sm">{row.costi}</td>
                    <td className="px-5 py-4 text-gray-600 text-sm hidden sm:table-cell">{row.ideale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Guida alla decisione</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quale tipo è giusto per me?</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm max-w-2xl">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Situazione</th>
                  <th className="text-right px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Raccomandazione</th>
                </tr>
              </thead>
              <tbody>
                {situazioniTabella.map((row, i) => (
                  <tr key={row.situazione} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.situazione}</td>
                    <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.raccomandazione}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Quale tipo si adatta al tuo tetto?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Un installatore certificato della tua regione analizza il tuo tetto e consiglia il tipo di modulo ottimale per la tua situazione — gratuitamente e senza impegno.
          </p>
          <Link href="/it/richiesta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Domande frequenti</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Domande frequenti</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
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
        </section>
      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
