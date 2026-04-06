import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, FileText, Clock, Coins } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Richiedere preventivo solare Svizzera 2026 – Gratuito & senza impegno | PVPro.ch',
  description: 'Richiedete preventivi gratuiti per il vostro impianto solare in Svizzera. Fino a 3 preventivi da installatori certificati nella vostra regione. Confrontate e risparmiate.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/richiedere-preventivo-solare',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
      'fr-CH': 'https://www.pvpro.ch/fr/demander-offre-panneau-solaire',
      'en': 'https://www.pvpro.ch/en/get-solar-panel-quotes',
      'it-CH': 'https://www.pvpro.ch/it/richiedere-preventivo-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
    },
  },
  openGraph: {
    title: 'Richiedere preventivo solare Svizzera 2026 – Gratuito & senza impegno',
    description: 'Preventivi gratuiti per il vostro impianto solare in Svizzera. Fino a 3 preventivi da installatori certificati.',
    url: 'https://www.pvpro.ch/it/richiedere-preventivo-solare',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Quanti preventivi riceverò tramite PVPro.ch?',
    answer: "Ricevete fino a 3 preventivi personalizzati da installatori certificati della vostra regione. Avete così immediatamente una base di confronto.",
  },
  {
    question: 'Quanto tempo ci vuole per ricevere i preventivi?',
    answer: "Nella maggior parte dei casi ricevete i primi preventivi entro 24–48 ore dalla vostra richiesta.",
  },
  {
    question: 'Sono obbligato a qualcosa dopo aver inviato la richiesta?',
    answer: "No. La richiesta è completamente gratuita e senza impegno. Decidete liberamente se e quale preventivo accettare.",
  },
  {
    question: 'Riceverò chiamate pubblicitarie indesiderate dopo la richiesta?',
    answer: "No. PVPro.ch garantisce che non riceverete chiamate pubblicitarie indesiderate. Solo gli installatori che vi inviano un preventivo vi contatteranno.",
  },
  {
    question: 'Posso richiedere preventivi anche per un condominio?',
    answer: "Sì. PVPro.ch gestisce preventivi per tutti i tipi di edifici — case unifamiliari, condomini ed edifici commerciali.",
  },
  {
    question: 'Cosa succede se nessun preventivo mi convince?',
    answer: "Non siete obbligati a nulla. Potete rifiutare tutti i preventivi senza sostenere alcun costo.",
  },
];

const quoteContents = [
  "Dimensioni dell'impianto in kWp e numero di moduli",
  "Tipo di modulo e produttore con dati tecnici",
  "Inverter — marca e potenza",
  "Sistema di montaggio — adatto al vostro tipo di tetto",
  "Costi di installazione indicati separatamente",
  "Produzione annua stimata in kWh",
  "Sussidio (RU) già detratto o indicato separatamente",
  "Garanzie su moduli, inverter e montaggio",
  "Periodo di ammortamento indicativo",
];

const steps = [
  { n: '1', title: 'Compilare il modulo (2 minuti)', text: "Descrivete la vostra situazione: superficie del tetto, consumo elettrico, cantone, opzioni desiderate come accumulo a batteria o pompa di calore." },
  { n: '2', title: 'Ricevere i preventivi (24–48 ore)', text: "Fino a 3 installatori certificati della vostra regione vi inviano offerte personalizzate direttamente." },
  { n: '3', title: 'Confrontare e decidere', text: "Confrontate prezzi, componenti e referenze — e scegliete liberamente. Senza impegno, senza pressione." },
];

const buildingTypes = [
  { title: 'Casa unifamiliare', desc: "la richiesta più frequente, tipicamente 8–12 kWp", href: '/it/solare-casa-unifamiliare' },
  { title: 'Condominio', desc: "impianti più grandi con autoconsumo collettivo", href: '/it/solare-condominio' },
  { title: 'Edificio commerciale', desc: "anche per aziende e agricoltura", href: '/it/preventivo' },
];

export default function RichiederePrevenitivoSolarePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Richiedere preventivo solare</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <FileText className="w-3.5 h-3.5" /> Preventivi &amp; Prezzi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Richiedere preventivi per impianti fotovoltaici in Svizzera
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chi vuole acquistare un impianto solare non dovrebbe mai firmare il primo preventivo. In Svizzera i{' '}
              <Link href="/it/costi-impianto-solare" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">costi</Link>{' '}
              per lo stesso impianto possono variare di diversi migliaia di franchi tra diversi installatori. PVPro.ch vi permette di ottenere gratuitamente fino a 3 preventivi da installatori locali certificati — in meno di 2 minuti.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Gratuito', sub: 'nessun rischio, nessun costo nascosto', note: 'completamente gratuito per i proprietari' },
              { val: '24–48 ore', sub: 'fino al primo preventivo', note: 'risposta rapida dagli installatori locali' },
              { val: 'Fino a CHF 4.000', sub: 'risparmio possibile confrontando', note: 'a seconda delle dimensioni dell\'impianto' },
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

        {/* ── Perché più preventivi ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Il vantaggio decisivo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Perché richiedere più preventivi?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Molti proprietari svizzeri fanno lo stesso errore: contattano un solo installatore e accettano la prima offerta. Ciò che la maggior parte non sa è che per esattamente lo stesso impianto — stessi moduli, stesso inverter, stessa potenza — i prezzi tra diversi installatori possono variare fino a CHF 4.000.
            </p>
            <p className="text-gray-600 leading-relaxed">Il motivo è semplice: gli installatori calcolano diversamente e hanno condizioni di acquisto e margini variabili. Chi confronta, vince.</p>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">Esempio — impianto 10 kWp</p>
              <div className="space-y-4">
                {[
                  { label: 'Installatore A', price: "CHF 29'500", highlight: false },
                  { label: 'Installatore B', price: "CHF 26'800", highlight: false },
                  { label: 'Installatore C (più economico)', price: "CHF 25'600", highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.price}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-white/60 text-sm">Risparmio confrontando</span>
                  <span className="text-green-400 font-bold">fino a CHF 3.900</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fasi ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">In 3 passi</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quanto è semplice richiedere preventivi?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Un tempo richiedere preventivi significava: cercare da soli, telefonare, fissare appuntamenti, aspettare. Con PVPro.ch si fa in 3 passi:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">Passo {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.n === '1' ? (
                    <>
                      Descrivete la vostra situazione: superficie del tetto, consumo elettrico, cantone, opzioni desiderate come{' '}
                      <Link href="/it/solare-con-batteria" className="text-[#F97316] hover:underline font-medium">accumulo a batteria</Link>{' '}
                      o pompa di calore.
                    </>
                  ) : step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contenuto di un buon preventivo ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/images/asset-beratung-indoor-2.png" alt="Preventivo solare Svizzera" className="w-full h-72 object-cover rounded-3xl" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Lista di controllo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Cosa deve contenere un buon preventivo?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Un preventivo serio per un impianto solare contiene sempre i seguenti punti:</p>
            <ul className="space-y-3 mb-6">
              {quoteContents.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i === 6 ? (
                      <>Sussidio (<Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline font-medium">RU</Link>) già detratto o indicato separatamente</>
                    ) : item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>Consiglio:</strong> Se un preventivo non contiene questi punti, fate domande — o richiedete un preventivo tramite PVPro.ch da uno dei nostri partner certificati.
              </p>
            </div>
          </div>
        </section>

        {/* ── Costo della richiesta ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Trasparenza</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quanto costa richiedere preventivi?</h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Coins className="w-6 h-6 text-[#F97316]" />, title: 'Gratuito', text: "Per i proprietari, la richiesta di preventivi è completamente gratuita — nessun costo nascosto." },
              { icon: <FileText className="w-6 h-6 text-[#F97316]" />, title: 'Nessun abbonamento', text: "Nessun abbonamento e nessun obbligo di ordinare." },
              { icon: <Clock className="w-6 h-6 text-[#F97316]" />, title: 'Ci finanziamo diversamente', text: "Riceviamo una commissione dall'installatore selezionato — non da voi." },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tipi di edifici ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Tutti i tipi di edifici</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Per quali tipi di edifici posso richiedere preventivi?</h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">Tramite PVPro.ch potete richiedere preventivi per tutti i tipi di edifici:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {buildingTypes.map(b => (
              <Link key={b.title} href={b.href} className="group rounded-2xl p-8 text-center border border-gray-200 hover:border-orange-300 bg-white hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#F97316] transition-colors">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
                <p className="text-[#F97316] text-sm font-medium mt-3">Richiedere un preventivo →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Richiedete ora gratuitamente fino a 3 preventivi</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Compilate il modulo in 2 minuti — e ricevete fino a 3 preventivi da{' '}
            <Link href="/it/preventivo" className="text-[#F97316] hover:underline font-medium">installatori certificati</Link>{' '}
            della vostra regione. Gratuito, senza impegno, senza chiamate pubblicitarie.
          </p>
          <Link href="/it/preventivo" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
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
              <Link href="/it/costi-impianto-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Costi impianto solare</Link>
              <Link href="/it/comparatore-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Confrontare i fornitori</Link>
              <Link href="/it/installare-impianto-solare-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Installazione Svizzera</Link>
              <Link href="/it/incentivi-solari-cantone-zurigo" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Incentivi Cantone Zurigo</Link>
              <Link href="/it/soluzione-completa-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Preventivo soluzione completa</Link>
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
