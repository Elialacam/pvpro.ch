import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText, Clock } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Processo installazione fotovoltaico Svizzera 2026 – Fasi, durata & costi | PVPro.ch',
  description: "Come funziona l'installazione di un impianto fotovoltaico in Svizzera? Fasi, durata, costi e cosa bisogna sapere — tutto spiegato da PVPro.ch.",
  alternates: {
    canonical: 'https://www.pvpro.ch/it/processo-installazione-fotovoltaico-svizzera',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installation-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-process-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/processo-installazione-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
    },
  },
  openGraph: {
    title: "Processo installazione fotovoltaico Svizzera 2026 – Fasi, durata & costi",
    description: "Fasi, durata e costi dell'installazione fotovoltaica in Svizzera — spiegato passo dopo passo.",
    url: 'https://www.pvpro.ch/it/processo-installazione-fotovoltaico-svizzera',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quanto dura il montaggio di un impianto solare su una casa unifamiliare?",
    answer: "Il montaggio vero e proprio di una casa unifamiliare da 8-12 kWp dura tipicamente 1-3 giorni. La durata totale del progetto dall'ordine è di 4-12 settimane.",
  },
  {
    question: "Devo essere presente durante l'installazione?",
    answer: "Non necessariamente per tutta la durata. È tuttavia consigliabile essere presenti il primo giorno e durante la messa in servizio.",
  },
  {
    question: "Chi si occupa dell'autorizzazione?",
    answer: "In genere l'installatore si occupa della comunicazione al comune o — per gli impianti soggetti ad autorizzazione — della richiesta di permesso edilizio.",
  },
  {
    question: "Quando inizia a produrre elettricità l'impianto?",
    answer: "Subito dopo la messa in servizio — cioè nell'ultimo giorno del montaggio. Dal primo giorno l'impianto produce elettricità se c'è il sole.",
  },
  {
    question: "Cosa succede dopo l'installazione?",
    answer: "L'installatore registra l'impianto presso il gestore di rete e presenta la domanda per la rimunerazione unica (SRE) a Pronovo. Il pagamento avviene alcuni mesi dopo.",
  },
  {
    question: "Posso seguire l'avanzamento dell'installazione?",
    answer: "La maggior parte degli inverter moderni dispone di un monitoraggio integrato che puoi seguire tramite un'app. L'installatore lo configura durante la messa in servizio.",
  },
];

const fasi = [
  {
    n: '1',
    titolo: 'Pianificazione e preventivo',
    durata: '1–2 settimane',
    testo: "Tutto inizia con un'analisi dei bisogni. Un installatore certificato visita il tuo edificio, analizza la superficie del tetto, l'orientamento, l'inclinazione e le ombre. Su questa base elabora un preventivo su misura con dimensione dell'impianto, componenti e costi.",
  },
  {
    n: '2',
    titolo: 'Autorizzazione e comunicazione',
    durata: '1–4 settimane',
    testo: "Nella maggior parte dei casi un impianto solare sul tetto è esente da autorizzazione — è sufficiente una semplice comunicazione al comune. In casi eccezionali (edifici storici, impianti non integrati) è necessaria una richiesta di permesso edilizio. L'installatore gestisce questo passaggio per te.",
  },
  {
    n: '3',
    titolo: 'Approvvigionamento materiali',
    durata: '2–6 settimane',
    testo: "Dopo l'ordine vengono ordinati moduli, inverter, sistema di montaggio ed eventualmente un sistema di accumulo a batteria. I tempi di consegna variano a seconda del produttore e della stagione.",
  },
  {
    n: '4',
    titolo: 'Montaggio',
    durata: '1–3 giorni',
    testo: "Il team di montaggio installa la sottostruttura sul tetto, fissa i moduli, posa i cavi DC e installa l'inverter nell'edificio. Per impianti più grandi il montaggio dura più a lungo.",
  },
  {
    n: '5',
    titolo: 'Allacciamento elettrico e messa in servizio',
    durata: '1 giorno',
    testo: "Un elettricista certificato allaccia l'impianto alla rete domestica e lo mette in servizio. L'impianto viene configurato e testato.",
  },
  {
    n: '6',
    titolo: 'Registrazione e incentivi',
    durata: '2–4 settimane',
    testo: "L'installatore registra l'impianto presso il gestore di rete locale e presenta la domanda per la rimunerazione unica (SRE) a Pronovo. Il pagamento avviene alcuni mesi dopo.",
  },
];

const durate = [
  { fase: 'Pianificazione e preventivo', durata: '1–2 sett.' },
  { fase: 'Autorizzazione / comunicazione', durata: '1–4 sett.' },
  { fase: 'Approvvigionamento materiali', durata: '2–6 sett.' },
  { fase: 'Montaggio', durata: '1–3 giorni' },
  { fase: 'Allacciamento e messa in servizio', durata: '1 giorno' },
  { fase: 'Registrazione SRE', durata: '2–4 sett.' },
  { fase: "Durata totale dall'ordine", durata: '4–12 sett.', highlight: true },
];

export default function ProcessoInstallazionePhotovoltaicoPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/it/installare-impianto-solare-svizzera" className="hover:text-white/70 transition-colors">Installazione</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Processo di installazione</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Installazione &amp; Processo
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Come funziona l&apos;installazione di un impianto fotovoltaico in Svizzera?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dalla prima richiesta fino alla prima elettricità autoprodotta — l&apos;installazione di un impianto fotovoltaico in Svizzera segue fasi chiaramente definite. Sapere cosa aspettarsi permette di pianificare meglio e prendere le decisioni giuste. Questa pagina spiega l&apos;intero processo passo dopo passo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 giorni', sub: 'Durata montaggio casa unifamiliare', note: 'per una tipica casa unifamiliare' },
              { val: '4–12 settimane', sub: "Tempo di attesa dall'ordine", note: 'incl. pianificazione e approvvigionamento' },
              { val: 'Chiavi in mano', sub: "L'installatore gestisce tutto", note: 'dalla pianificazione alla domanda SRE' },
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

        {/* ── Processo ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Passo dopo passo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Il processo completo di installazione fotovoltaica
            </h2>
          </div>
          <div className="space-y-4">
            {fasi.map(fase => (
              <div key={fase.n} className="rounded-2xl p-7" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {fase.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-base">Fase {fase.n} — {fase.titolo}</h3>
                      <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> {fase.durata}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{fase.testo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Durata ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calendario</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quanto dura l&apos;intero processo?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Il fattore di tempo principale è spesso il carico di lavoro dell&apos;installatore e i tempi di consegna dei componenti — soprattutto in alta stagione (primavera ed estate). Ordinare in anticipo conviene.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Pronto a iniziare?{' '}
              <Link href="/it/richiedere-preventivo-solare" className="text-[#F97316] hover:underline font-medium">Confronta gratuitamente i preventivi</Link>{' '}
              di installatori certificati nella tua regione.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Fase</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  {durate.map((row, i) => (
                    <tr key={row.fase} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.fase}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.durata}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Installatore & Proprietario ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Prestazioni dell&apos;installatore</p>
            <h2 className="text-xl font-bold text-white mb-5">Cosa fa un buon installatore?</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Un installatore professionale gestisce l&apos;intero processo per te. PVPro.ch mette in contatto solo con installatori che svolgono tutti questi passaggi in modo affidabile.
            </p>
            <ul className="space-y-3">
              {[
                "Analisi del tetto e dimensionamento dell'impianto",
                "Comunicazione o richiesta di permesso edilizio al comune",
                "Approvvigionamento di tutti i componenti",
                "Montaggio professionale e allacciamento elettrico",
                "Messa in servizio e formazione",
                "Registrazione presso il gestore di rete",
                "Domanda di rimunerazione unica (SRE) a Pronovo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">I tuoi compiti</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Cosa devo fare come proprietario?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              In realtà molto poco. I tuoi compiti si limitano a:
            </p>
            <ul className="space-y-3">
              {[
                "Richiedere un preventivo e confrontare le offerte",
                "Incaricare l'installatore",
                "Essere presenti durante il montaggio (consigliato, non obbligatorio)",
                "Ricevere la formazione durante la messa in servizio",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">Da sapere:</strong> Il resto lo gestisce l&apos;installatore — dall&apos;autorizzazione alla domanda SRE.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trova ora un installatore e inizia
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Compila il nostro modulo in 2 minuti — ti mettiamo in contatto con fino a 3 installatori certificati nella tua regione, che gestiscono l&apos;intero processo per te.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/it/richiesta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Richiedi preventivo gratuito <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            Prima confronta{' '}
            <Link href="/it/richiedere-preventivo-solare" className="text-[#F97316] hover:underline font-medium">i preventivi</Link>{' '}
            o{' '}
            <Link href="/it/comparatore-fotovoltaico-svizzera" className="text-[#F97316] hover:underline font-medium">i fornitori</Link>?
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
              <Link href="/it/installare-impianto-solare-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Trovare installatore
              </Link>
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Incentivi SRE
              </Link>
              <Link href="/it/costi-impianto-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Costi impianto
              </Link>
              <Link href="/it/richiesta" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
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
