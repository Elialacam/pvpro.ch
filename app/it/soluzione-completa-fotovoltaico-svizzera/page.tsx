import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, Zap, Battery, Thermometer, Car, Settings } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Soluzione completa fotovoltaico Svizzera 2026 – Tutto da un fornitore | PVPro.ch',
  description: "Quali aziende svizzere offrono soluzioni complete per impianti fotovoltaici? Moduli, accumulo, pompa di calore e installazione da un unico fornitore. Confronta con PVPro.ch.",
  alternates: {
    canonical: 'https://pvpro.ch/it/soluzione-completa-fotovoltaico-svizzera',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-komplettloesung-schweiz',
      'fr-CH': 'https://pvpro.ch/fr/solution-complete-photovoltaique-suisse',
      'en': 'https://pvpro.ch/en/complete-solar-solution-switzerland',
      'it-CH': 'https://pvpro.ch/it/soluzione-completa-fotovoltaico-svizzera',
      'x-default': 'https://pvpro.ch/photovoltaik-komplettloesung-schweiz',
    },
  },
  openGraph: {
    title: 'Soluzione completa fotovoltaico Svizzera 2026 – Tutto da un fornitore',
    description: "Moduli, accumulo, pompa di calore e installazione da un unico fornitore — soluzioni complete fotovoltaiche in Svizzera.",
    url: 'https://pvpro.ch/it/soluzione-completa-fotovoltaico-svizzera',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Vale la pena una soluzione completa con pompa di calore e impianto solare?",
    answer: "Sì, nella maggior parte dei casi. Chi fa funzionare la pompa di calore con l'energia solare autoprodotta riduce notevolmente i costi di riscaldamento e massimizza l'autoconsumo. Il tempo di ammortamento si accorcia notevolmente.",
  },
  {
    question: "Posso costruire una soluzione completa per gradi?",
    answer: "Sì. Molti proprietari iniziano con l'impianto solare e aggiungono in seguito accumulo a batteria, wallbox o pompa di calore. L'importante è che l'impianto sia dimensionato di conseguenza fin dall'inizio.",
  },
  {
    question: "Quali incentivi esistono per le soluzioni complete?",
    answer: "Per ogni componente esistono incentivi separati — la rimunerazione unica (SRE) per l'impianto solare, contributi cantonali per la pompa di calore e altri programmi a seconda del cantone. Un installatore esperto conosce tutte le possibilità di finanziamento rilevanti.",
  },
  {
    question: "Come trovo un fornitore di soluzioni complete nella mia regione?",
    answer: "PVPro.ch mette gratuitamente in contatto con installatori certificati che offrono soluzioni complete. Basta compilare il modulo e ricevere fino a 3 preventivi.",
  },
  {
    question: "Posso ampliare il mio impianto solare esistente con un accumulo o una wallbox?",
    answer: "Sì, nella maggior parte dei casi un ampliamento è possibile. Un installatore certificato verifica la compatibilità e redige un preventivo per l'ampliamento.",
  },
];

const componenti = [
  {
    icon: <Sun className="w-6 h-6 text-[#F97316]" />,
    titolo: 'Impianto fotovoltaico',
    testo: "La base di ogni soluzione completa. Produce elettricità dall'energia solare per l'autoconsumo e l'immissione in rete.",
  },
  {
    icon: <Battery className="w-6 h-6 text-[#F97316]" />,
    titolo: 'Accumulo a batteria',
    testo: "Accumula l'eccesso di energia solare per l'uso serale e notturno. Aumenta l'autoconsumo da circa il 30% fino al 70%.",
  },
  {
    icon: <Thermometer className="w-6 h-6 text-[#F97316]" />,
    titolo: 'Pompa di calore',
    testo: "Utilizza l'energia solare autoprodotta per il riscaldamento e l'acqua calda. Uno dei modi più efficaci per massimizzare l'autoconsumo.",
  },
  {
    icon: <Car className="w-6 h-6 text-[#F97316]" />,
    titolo: 'Stazione di ricarica veicoli elettrici (Wallbox)',
    testo: "Ricarica il veicolo elettrico direttamente con energia solare — particolarmente economico e sostenibile.",
  },
  {
    icon: <Settings className="w-6 h-6 text-[#F97316]" />,
    titolo: 'Sistema di gestione energetica',
    testo: "Controlla automaticamente quando quale energia va dove — per la massima efficienza senza sforzo manuale.",
  },
];

const costi = [
  { componente: 'Impianto fotovoltaico 10 kWp', costo: "CHF 22'000 – 30'000" },
  { componente: 'Accumulo a batteria 10 kWh', costo: "CHF 7'000 – 10'000" },
  { componente: 'Pompa di calore', costo: "CHF 15'000 – 25'000" },
  { componente: 'Wallbox (stazione di ricarica)', costo: "CHF 1'500 – 3'000" },
  { componente: 'Sistema di gestione energetica', costo: "CHF 1'000 – 3'000" },
  { componente: 'Pacchetto totale', costo: "ca. CHF 40'000 – 70'000", highlight: true },
];

const vantaggi = [
  "Coordinazione ottimale — tutti i componenti sono accordati tra loro e comunicano",
  "Un unico interlocutore — in caso di domande o problemi c'è un solo punto di contatto",
  "Prezzi migliori — i prezzi a pacchetto sono spesso più convenienti degli acquisti singoli",
  "Domande di incentivi semplificate — un installatore si occupa di tutte le domande",
  "Garanzie da un'unica fonte — nessuna discussione tra diversi fornitori",
];

const criteri = [
  "Il fornitore ha esperienza con tutti i componenti — non solo con i moduli?",
  "Offre un sistema di gestione energetica integrato?",
  "Può installare lui stesso la pompa di calore e la wallbox, o solo procurarle?",
  "Esistono progetti di riferimento con soluzioni complete comparabili?",
  "Tutte le domande di incentivi sono incluse nel servizio?",
];

export default function SoluzioneCompletaFotovoltaicoSvizzeraPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/it/installare-impianto-solare-svizzera" className="hover:text-white/70 transition-colors">Solare</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Soluzione completa</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Soluzioni complete &amp; Fornitori
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Soluzione completa fotovoltaica in Svizzera — tutto da un fornitore
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sempre più proprietari svizzeri non vogliono solo un impianto solare — vogliono una soluzione energetica completa: fotovoltaico, accumulo a batteria, pompa di calore e stazione di ricarica per auto elettrica, tutto coordinato da un unico fornitore. Questa pagina spiega cosa comprende una soluzione completa, quanto costa e come trovare il fornitore giusto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "Fino all'80%", sub: "Autoconsumo con soluzione completa", note: "grazie alla gestione energetica ottimizzata" },
              { val: '1 fornitore', sub: "responsabile di tutto", note: "dalla pianificazione alla messa in servizio" },
              { val: '500+', sub: "partner certificati in Svizzera", note: "installatori certificati su PVPro.ch" },
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

        {/* ── Componenti ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Panoramica</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Cos&apos;è una soluzione fotovoltaica completa?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Una soluzione completa combina diverse tecnologie energetiche in un sistema integrato. PVPro.ch mette in contatto con fornitori che consegnano e installano tutti questi componenti da un&apos;unica fonte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {componenti.map((c, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{c.titolo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.testo}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Costi ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Panoramica prezzi</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quanto costa una soluzione completa in Svizzera?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I costi dipendono dai componenti inclusi. Dopo la detrazione di tutti gli incentivi — rimunerazione unica, contributi cantonali per la pompa di calore — i costi si riducono notevolmente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              L&apos;autoconsumo può salire fino all&apos;80%, il che riduce notevolmente il tempo di ammortamento. Ricevi ora{' '}
              <Link href="/it/richiedere-preventivo-solare" className="text-[#F97316] hover:underline font-medium">preventivi gratuiti</Link>.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Componente</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Costo (indicativo)</th>
                  </tr>
                </thead>
                <tbody>
                  {costi.map((row, i) => (
                    <tr key={row.componente} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.componente}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.costo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Prima degli incentivi. Richiedere un preventivo individuale da un installatore certificato.
            </p>
          </div>
        </section>

        {/* ── Vantaggi & Criteri ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Vantaggi</p>
            <h2 className="text-xl font-bold text-white mb-5">
              Vantaggi di una soluzione completa rispetto ai componenti singoli
            </h2>
            <ul className="space-y-3">
              {vantaggi.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checklist</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              A cosa prestare attenzione nella scelta di un fornitore di soluzioni complete?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Non tutti gli installatori offrono vere soluzioni complete. Verificate questi punti:
            </p>
            <ul className="space-y-3">
              {criteri.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Richiedi ora una soluzione completa
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Compila il nostro modulo e ricevi fino a 3 preventivi da installatori certificati che offrono soluzioni complete da un&apos;unica fonte — gratuitamente e senza impegno.
          </p>
          <Link href="/it/richiesta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            Prima{' '}
            <Link href="/it/richiedere-preventivo-solare" className="text-[#F97316] hover:underline font-medium">confronta i preventivi</Link>
            {' '}o{' '}
            <Link href="/it/comparatore-fotovoltaico-svizzera" className="text-[#F97316] hover:underline font-medium">confronta i fornitori</Link>?
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
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
