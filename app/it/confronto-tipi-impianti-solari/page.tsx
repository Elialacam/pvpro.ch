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

type TipoModulo = {
  nome: string;
  badge: string;
  badgeColor: string;
  intro: string;
  vantaggi: string[];
  svantaggi: string[];
  conclusione: string;
};

const tipiModulo: TipoModulo[] = [
  {
    nome: 'Moduli monocristallini — lo standard in Svizzera',
    badge: 'Consigliato per la Svizzera',
    badgeColor: 'bg-orange-100 text-orange-700',
    intro: 'I moduli monocristallini sono oggi di gran lunga la scelta più frequente per le case unifamiliari svizzere. Sono composti da un singolo cristallo di silicio e hanno il rendimento più elevato tra tutte le tecnologie comuni.',
    vantaggi: [
      'Rendimento più elevato (18–22%)',
      'Migliore prestazione con luce diffusa e cielo coperto',
      'Compatto — ideale per superfici di tetto più piccole',
      'Lunga durata di vita e alta affidabilità',
      'Esteticamente attraente (uniformemente nero)',
    ],
    svantaggi: [
      'Costo più elevato rispetto ai moduli policristallini',
      'Leggera riduzione di prestazione a temperature molto elevate',
    ],
    conclusione: 'Per la maggior parte delle famiglie svizzere la scelta migliore — soprattutto nel nebbiosa Altopiano.',
  },
  {
    nome: "Moduli policristallini — l'opzione economica",
    badge: 'Budget & grandi superfici',
    badgeColor: 'bg-blue-100 text-blue-700',
    intro: 'I moduli policristallini sono composti da più cristalli di silicio e hanno un rendimento leggermente inferiore ai monocristallini. Vengono sempre più sostituiti da alternative più performanti.',
    vantaggi: [
      "Più economici all'acquisto",
      'Collaudati e affidabili',
      'Ben adatti a grandi superfici di tetto',
    ],
    svantaggi: [
      'Rendimento più basso (15–17%)',
      'Superficie maggiore necessaria per la stessa potenza',
      'Riconoscibili dall\'aspetto blu scintillante',
    ],
    conclusione: 'Interessante per grandi superfici di tetto con budget ridotto. Sempre meno diffuso in Svizzera.',
  },
  {
    nome: 'Moduli a film sottile — per applicazioni speciali',
    badge: 'Applicazioni speciali',
    badgeColor: 'bg-gray-100 text-gray-700',
    intro: 'I moduli a film sottile vengono depositati su un substrato sottile e sono più flessibili dei moduli cristallini. Sono particolarmente adatti per tetti piani e applicazioni non convenzionali.',
    vantaggi: [
      'Leggeri e flessibili',
      'Economici nella produzione',
      'Funzionano bene ad alte temperature',
    ],
    svantaggi: [
      'Rendimento più basso (10–13%)',
      'Richiedono notevolmente più superficie',
      'Durata di vita più breve dei moduli cristallini',
    ],
    conclusione: 'Raramente raccomandato per impianti standard in Svizzera. Interessante per applicazioni speciali come l\'integrazione in facciata.',
  },
  {
    nome: 'Moduli bifacciali — più energia dal lato posteriore',
    badge: 'Neve & tetti piani',
    badgeColor: 'bg-green-100 text-green-700',
    intro: 'I moduli bifacciali producono elettricità da entrambi i lati — davanti dalla luce solare diretta, dietro dalla luce riflessa. Con neve o rivestimenti di tetto chiari, il guadagno aggiuntivo è particolarmente elevato.',
    vantaggi: [
      'Resa più elevata nelle giuste condizioni',
      'Particolarmente efficace con la neve (riflette la luce)',
      'Ideale per tetti piani con spazio dalla superficie del tetto',
    ],
    svantaggi: [
      'Più costoso dei moduli monocristallini',
      'Il guadagno aggiuntivo dipende fortemente dall\'installazione',
      'Non sempre vantaggioso sui normali tetti a falda',
    ],
    conclusione: 'Interessante per regioni con molta neve e per tetti piani. Per i normali tetti a falda in Svizzera solitamente nessun vantaggio significativo.',
  },
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

        {/* ── Tabella panoramica ── */}
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

        {/* ── I quattro tipi in dettaglio ── */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Confronto dettagliato</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">I quattro tipi in dettaglio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tipiModulo.map((m, i) => (
              <div key={i} className="rounded-3xl p-8 border border-gray-200 bg-white shadow-sm">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${m.badgeColor}`}>{m.badge}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.nome}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {i === 2
                    ? <>I moduli a film sottile vengono depositati su un substrato sottile e sono più flessibili dei moduli cristallini. Sono particolarmente adatti per{' '}
                      <Link href="/it/solare-condominio" className="text-[#F97316] hover:underline font-medium">tetti piani</Link>{' '}
                      e applicazioni non convenzionali.</>
                    : i === 3
                    ? <>I moduli bifacciali producono elettricità da entrambi i lati — davanti dalla luce solare diretta, dietro dalla luce riflessa. Con neve o rivestimenti di tetto chiari, il guadagno aggiuntivo è particolarmente elevato. Ideale per{' '}
                      <Link href="/it/solare-condominio" className="text-[#F97316] hover:underline font-medium">tetti piani</Link>.</>
                    : m.intro}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">Vantaggi</p>
                    <ul className="space-y-1.5">
                      {m.vantaggi.map((v, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Svantaggi</p>
                    <ul className="space-y-1.5">
                      {m.svantaggi.map((n, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                  <p className="text-sm text-gray-700"><span className="font-bold text-orange-700">Conclusione: </span>{m.conclusione}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Guida alla decisione ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Guida alla decisione</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quale tipo è giusto per me?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La scelta dipende dalla tua situazione concreta. Per una{' '}
              <Link href="/it/solare-casa-unifamiliare" className="text-[#F97316] hover:underline font-medium">casa unifamiliare</Link>{' '}
              in Svizzera il monocristallino è quasi sempre la scelta migliore — soprattutto nel{' '}
              <Link href="/it/fotovoltaico-clima-svizzero" className="text-[#F97316] hover:underline font-medium">clima svizzero</Link>{' '}
              con molta luce diffusa.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In pratica un{' '}
              <Link href="/it/installare-impianto-solare-svizzera" className="text-[#F97316] hover:underline font-medium">installatore certificato</Link>{' '}
              consiglia il tipo di modulo giusto dopo aver ispezionato il tuo tetto. PVPro.ch mette in contatto con{' '}
              <Link href="/it/comparatore-fotovoltaico-svizzera" className="text-[#F97316] hover:underline font-medium">fornitori</Link>{' '}
              che conoscono tutte le tecnologie e danno consulenza neutrale.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
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

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Quale tipo si adatta al tuo tetto?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Un installatore certificato della tua regione analizza il tuo tetto e consiglia il tipo di modulo ottimale per la tua situazione — gratuitamente e senza impegno.
          </p>
          <Link href="/it/richiedere-preventivo-solare" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            Prima{' '}
            <Link href="/it/richiedere-preventivo-solare" className="text-[#F97316] hover:underline font-medium">confrontare preventivi</Link>?{' '}
            Di più sui{' '}
            <Link href="/it/costi-impianto-solare" className="text-[#F97316] hover:underline font-medium">costi di un impianto solare</Link>.
          </p>
        </section>

        {/* ── FAQ ── */}
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
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Ulteriori informazioni:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/it/costi-impianto-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Costi impianto solare
              </Link>
              <Link href="/it/fotovoltaico-clima-svizzero" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Fotovoltaico e clima svizzero
              </Link>
              <Link href="/it/solare-casa-unifamiliare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solare casa unifamiliare
              </Link>
              <Link href="/it/solare-condominio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solare condominio
              </Link>
              <Link href="/it/richiedere-preventivo-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Richiedi preventivo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
