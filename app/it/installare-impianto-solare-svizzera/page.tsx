import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Wrench, Clock, Sun } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Installare impianto solare Svizzera 2026 – Fornitori & Costi | PVPro.ch',
  description: 'Installare un impianto solare in Svizzera: trova installatori certificati nella tua regione. Confronta preventivi gratuiti e risparmia fino al 30% con PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/installare-impianto-solare-svizzera',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installer-panneau-solaire-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/installare-impianto-solare-svizzera',
      'x-default': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
    },
  },
  openGraph: {
    title: 'Installare impianto solare Svizzera 2026 – Fornitori & Costi',
    description: 'Installare un impianto solare in Svizzera: installatori certificati, costi e preventivi gratuiti.',
    url: 'https://www.pvpro.ch/it/installare-impianto-solare-svizzera',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quanto dura l'installazione di un impianto solare per una casa unifamiliare?",
    answer: "Il montaggio vero e proprio dura in genere 1–3 giorni per una casa unifamiliare. Il tempo totale dall'ordine è di 4–12 settimane.",
  },
  {
    question: "Devo essere presente durante l'installazione?",
    answer: "Non è obbligatorio. È però consigliabile essere presenti il primo giorno e alla messa in servizio, per capire il funzionamento e fare domande.",
  },
  {
    question: "Chi si occupa della notifica al comune?",
    answer: "Di norma l'installatore si occupa della notifica o della richiesta di permesso al comune, nonché della domanda per la rimunerazione unica presso Pronovo.",
  },
  {
    question: "Posso installare un impianto solare da solo?",
    answer: "In Svizzera l'installazione elettrica deve essere obbligatoriamente effettuata da un elettricista certificato. Il montaggio dei moduli potrebbe tecnicamente essere fatto autonomamente, ma non è raccomandato per ragioni di sicurezza.",
  },
  {
    question: "Cosa succede dopo l'installazione?",
    answer: "Dopo la messa in servizio, l'impianto viene notificato al gestore di rete locale. L'installatore verifica che tutto funzioni correttamente e vi spiega il funzionamento.",
  },
  {
    question: "Come trovo il miglior installatore nella mia regione?",
    answer: "PVPro.ch vi mette gratuitamente in contatto con fino a 3 installatori certificati della vostra regione — per confrontare direttamente prezzi e prestazioni.",
  },
];

const steps = [
  {
    n: '1',
    title: 'Consulenza e preventivo',
    text: "Un installatore certificato visita il vostro tetto, valuta orientamento, inclinazione e superficie e prepara un preventivo personalizzato.",
  },
  {
    n: '2',
    title: 'Pianificazione e autorizzazione',
    text: "L'installatore si occupa della notifica al comune o — per gli impianti soggetti ad autorizzazione — della domanda di permesso di costruzione.",
  },
  {
    n: '3',
    title: 'Approvvigionamento materiale',
    text: "Moduli, inverter, sistema di montaggio e un eventuale accumulo a batteria vengono ordinati e consegnati.",
  },
  {
    n: '4',
    title: 'Montaggio',
    text: "L'installazione vera e propria dura in genere 1–3 giorni per una casa unifamiliare. Il team fissa i moduli, posa i cavi e installa l'inverter.",
  },
  {
    n: '5',
    title: 'Messa in servizio e notifica',
    text: "Dopo l'installazione, l'impianto viene messo in servizio e notificato al gestore di rete locale. L'installatore si occupa solitamente anche della domanda di rimunerazione unica (RU) presso Pronovo.",
  },
];

const durationRows = [
  { size: '5–8 kWp (casa piccola)', duration: '1–2 giorni' },
  { size: '8–12 kWp (casa standard)', duration: '2–3 giorni' },
  { size: '12–30 kWp (condominio)', duration: '3–5 giorni' },
  { size: '30+ kWp (commerciale)', duration: '1–2 settimane' },
];

const costRows = [
  { size: '5 kWp', cost: "CHF 13'000 – 18'000" },
  { size: '8 kWp', cost: "CHF 18'000 – 25'000" },
  { size: '10 kWp', cost: "CHF 22'000 – 30'000" },
];

const criteria = [
  { title: 'Certificazione', text: "L'azienda è riconosciuta e dispone di esperienza comprovata?" },
  { title: 'Presenza locale', text: "Un installatore locale conosce le normative e gli incentivi cantonali" },
  { title: 'Referenze', text: "Ha completato progetti analoghi nella vostra regione?" },
  { title: 'Garanzie', text: "Quali garanzie offre su montaggio, moduli e inverter?" },
  { title: 'Rapporto qualità-prezzo', text: "Solo confrontando più offerte si vede se un prezzo è equo" },
];

export default function InstallareImpiantoSolareSvizzeraPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Installare impianto solare</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Installazione &amp; Fornitori
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Far installare un impianto solare in Svizzera
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Un impianto solare è un investimento a lungo termine. Chi lo fa installare deve scegliere l&apos;azienda giusta — perché qualità, prezzo e servizio variano molto. PVPro.ch vi mette gratuitamente in contatto con installatori svizzeri certificati della vostra regione.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 giorni', sub: 'fino al primo preventivo', note: 'mediazione rapida e semplice' },
              { val: '500+', sub: 'installatori certificati', note: 'aziende certificate in tutta la Svizzera' },
              { val: '25–30 anni', sub: 'durata di vita di un impianto', note: 'rendimento a lungo termine per la vostra casa' },
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

        {/* ── Fasi ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Passo dopo passo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Cosa succede durante l&apos;installazione di un impianto solare?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              L&apos;installazione di un impianto fotovoltaico in Svizzera si svolge di norma nelle seguenti fasi:
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg z-10"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {step.n}
                  </div>
                  <div className="rounded-2xl p-6 flex-1" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                    <h3 className="font-bold text-gray-900 mb-2">Passo {step.n} — {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.n === '2' ? (
                        <>
                          L&apos;installatore si occupa della notifica al comune o — per gli impianti soggetti ad autorizzazione — della domanda di permesso di costruzione. Nella maggior parte dei casi un impianto solare sul tetto è{' '}
                          <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">esente da autorizzazione</Link>.
                        </>
                      ) : step.n === '5' ? (
                        <>
                          Dopo l&apos;installazione, l&apos;impianto viene messo in servizio e notificato al gestore di rete locale. L&apos;installatore si occupa solitamente anche della domanda di{' '}
                          <Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline font-medium">rimunerazione unica (RU)</Link> presso Pronovo.
                        </>
                      ) : step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Durata ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Pianificazione</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quanto dura l&apos;installazione?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La durata dipende dalle dimensioni dell&apos;impianto. Il tempo di preparazione — dall&apos;offerta al montaggio — è attualmente di 4–12 settimane in Svizzera, a seconda della disponibilità dell&apos;installatore e dei tempi di consegna dei componenti.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3 text-white/60 font-semibold">Dimensioni impianto</th>
                    <th className="px-5 py-3 text-white font-bold text-center">Durata installazione</th>
                  </tr>
                </thead>
                <tbody>
                  {durationRows.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3 text-gray-700 font-medium">{row.size}</td>
                      <td className="px-5 py-3 text-center">
                        <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold">
                          <Clock className="w-3.5 h-3.5" /> {row.duration}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <img src="/images/asset-installateur-dach-2.png" alt="Installazione solare Svizzera" className="w-full h-72 object-cover rounded-3xl object-top" />
          </div>
        </section>

        {/* ── Costi ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Costi</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Quanto costa installare un impianto solare?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              I costi di installazione sono inclusi nel prezzo totale. Valori indicativi tipici per una{' '}
              <Link href="/it/solare-casa-unifamiliare" className="text-[#F97316] hover:underline font-medium">casa unifamiliare</Link>:
            </p>
          </div>
          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold">Dimensioni impianto</th>
                  <th className="px-6 py-4 text-white font-bold text-center">Costo totale installazione inclusa</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.size}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-orange-800 text-sm leading-relaxed">
              Dopo la detrazione del sussidio federale (<Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline font-medium">rimunerazione unica RU</Link>), i{' '}
              <Link href="/it/costi-impianto-solare" className="text-[#F97316] hover:underline font-medium">costi</Link>{' '}
              si riducono di CHF 300–400 per kWp. Confrontando{' '}
              <Link href="/it/comparatore-fotovoltaico-svizzera" className="text-[#F97316] hover:underline font-medium">più preventivi</Link>{' '}
              potete risparmiare ulteriormente migliaia di franchi.
            </p>
          </div>
        </section>

        {/* ── Cosa verificare ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Lista di controllo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Cosa verificare nella scelta dell&apos;installatore?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Non tutti gli installatori offrono la stessa qualità. Verificate questi punti:
            </p>
            <ul className="space-y-4 mb-6">
              {criteria.map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{c.title}</strong> — {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>PVPro.ch verifica tutti questi criteri in anticipo</strong> — ricevete solo preventivi da aziende che soddisfano i nostri standard.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/asset-beratung-indoor-2.png" alt="Scegliere installatore Svizzera" className="w-full h-72 object-cover rounded-3xl" />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Consiglio</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Chiedete sempre almeno 3 progetti di riferimento nella vostra regione e fate confermare per iscritto le condizioni di garanzia — prima di firmare.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Sun className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trova ora un installatore nella tua regione
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Compilate il nostro modulo in 2 minuti e ricevete fino a 3 preventivi da{' '}
            <Link href="/it/preventivo" className="text-[#F97316] hover:underline font-medium">installatori certificati</Link>{' '}
            della vostra regione — gratuitamente e senza impegno.
          </p>
          <Link
            href="/it/preventivo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Richiedere un preventivo gratuito <ArrowRight className="w-4 h-4" />
          </Link>
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
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Incentivi &amp; RU
              </Link>
              <Link href="/it/comparatore-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Confrontare i fornitori
              </Link>
              <Link href="/it/richiedere-preventivo-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Preventivi gratuiti da confrontare
              </Link>
              <Link href="/it/processo-installazione-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Come si svolge il processo di installazione?
              </Link>
              <Link href="/it/preventivo" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Richiedere un preventivo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
