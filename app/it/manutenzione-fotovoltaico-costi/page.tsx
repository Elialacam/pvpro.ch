import Link from 'next/link';
import { ChevronRight, ArrowRight, Wrench, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Manutenzione fotovoltaico costi Svizzera 2026 – Quanto costa la manutenzione? | PVPro.ch',
  description: "Quanto costa la manutenzione di un impianto fotovoltaico in Svizzera? Pulizia, ispezione, riparazione — tutti i costi in una panoramica. Informati su PVPro.ch.",
  alternates: {
    canonical: 'https://www.pvpro.ch/it/manutenzione-fotovoltaico-costi',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/entretien-photovoltaique-couts',
      'en': 'https://www.pvpro.ch/en/solar-panel-maintenance-costs',
      'it-CH': 'https://www.pvpro.ch/it/manutenzione-fotovoltaico-costi',
      'x-default': 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
    },
  },
  openGraph: {
    title: 'Manutenzione fotovoltaico costi Svizzera 2026 – Quanto costa la manutenzione?',
    description: "Pulizia, ispezione, riparazione — tutti i costi di manutenzione per il fotovoltaico in Svizzera in una panoramica.",
    url: 'https://www.pvpro.ch/it/manutenzione-fotovoltaico-costi',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Devo pulire regolarmente il mio impianto solare?",
    answer: "In Svizzera la pioggia è sufficiente nella maggior parte dei casi. In caso di forte presenza di uccelli o in regioni polverose, si consiglia una pulizia manuale una volta all'anno.",
  },
  {
    question: "Quanto costa un contratto di manutenzione per un impianto solare?",
    answer: "Molti installatori offrono contratti di manutenzione per CHF 150–300 all'anno, che comprendono un'ispezione annuale e piccole riparazioni.",
  },
  {
    question: "Quanto dura un inverter?",
    answer: "Gli inverter durano tipicamente 10–15 anni. Una sostituzione costa tra CHF 1'500 e 3'000 a seconda del modello.",
  },
  {
    question: "Perdo la garanzia se faccio la manutenzione da solo?",
    answer: "L'ispezione visiva e la pulizia dei moduli possono essere effettuate senza perdere la garanzia. I lavori elettrici devono tuttavia essere eseguiti da un'azienda specializzata certificata.",
  },
  {
    question: "Come riconosco se il mio impianto non produce in modo ottimale?",
    answer: "Tramite il monitoraggio digitale dell'inverter puoi seguire la produzione giornaliera. Se la produzione si discosta significativamente dall'anno precedente senza una ragione evidente, dovresti richiedere un'ispezione.",
  },
  {
    question: "Chi può eseguire la manutenzione del mio impianto solare?",
    answer: "Installatori svizzeri certificati offrono servizi di manutenzione. PVPro.ch mette in contatto anche con partner di servizio per impianti esistenti su richiesta.",
  },
];

const prestazioni = [
  { titolo: "Ispezione visiva dei moduli", testo: "Una volta all'anno i moduli devono essere controllati per rilevare sporco, crepe, scolorimenti o danni. Le deiezioni di uccelli, le foglie e il muschio possono ridurre notevolmente la produzione." },
  { titolo: "Pulizia dei moduli", testo: "In Svizzera la pioggia è di solito sufficiente a mantenere i moduli puliti. In regioni polverose o con forte presenza di uccelli, una pulizia manuale può essere utile." },
  { titolo: "Ispezione dell'inverter", testo: "L'inverter è il cuore dell'impianto. Deve essere controllato annualmente per errori, surriscaldamento e corretto funzionamento." },
  { titolo: "Controllo delle connessioni elettriche", testo: "Le connessioni dei cavi, i connettori e i raccordi possono allentarsi nel tempo. Un controllo regolare previene guasti e rischi di incendio." },
  { titolo: "Monitoraggio della produzione", testo: "Gli impianti moderni dispongono di un monitoraggio digitale. Chi segue regolarmente i dati di produzione rileva immediatamente le deviazioni." },
  { titolo: "Controllo del tetto", testo: "Durante l'ispezione annuale anche il tetto intorno al montaggio deve essere controllato — per la tenuta stagna e la stabilità della sottostruttura." },
];

const costi = [
  { prestazione: "Ispezione annuale (senza pulizia)", costo: "CHF 100–200" },
  { prestazione: "Pulizia moduli", costo: "CHF 100–300 a seconda delle dimensioni" },
  { prestazione: "Sostituzione inverter (dopo 10–15 anni)", costo: "CHF 1'500–3'000" },
  { prestazione: "Riparazione piccoli danni", costo: "CHF 200–500" },
  { prestazione: "Costi annuali totali (media)", costo: "CHF 150–300/anno", highlight: true },
];

const frequenze = [
  { misura: "Controllo visivo", frequenza: "2x all'anno (raccomandato)" },
  { misura: "Ispezione professionale", frequenza: "1x all'anno" },
  { misura: "Pulizia moduli", frequenza: "Secondo necessità, min. 1x all'anno" },
  { misura: "Controllo inverter", frequenza: "1x all'anno" },
  { misura: "Controllo elettrico", frequenza: "Ogni 2–3 anni" },
  { misura: "Sostituzione inverter", frequenza: "Dopo 10–15 anni" },
];

export default function ManutenzioneFotovoltaicoCostiPage() {
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
            <span className="text-white/70">Manutenzione &amp; Costi</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Manutenzione &amp; Esercizio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Manutenzione di un impianto fotovoltaico in Svizzera — Costi e processo
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Un impianto fotovoltaico richiede poca manutenzione — ma non nessuna. Chi controlla e mantiene regolarmente il proprio impianto garantisce la piena potenza per tutta la durata di vita di 25–30 anni. Questa pagina spiega cosa comporta la manutenzione, quanto costa e con quale frequenza l&apos;impianto deve essere controllato.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "CHF 150–300", sub: "costi di manutenzione tipici all'anno", note: "incl. ispezione e piccola pulizia" },
              { val: "1x all'anno", sub: "ispezione raccomandata", note: "professionale da azienda specializzata" },
              { val: "25–30 anni", sub: "durata di vita con buona manutenzione", note: "con garanzia di prestazione dei produttori" },
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
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Panoramica prestazioni</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cosa comprende la manutenzione di un impianto solare?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {prestazioni.map((p, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{p.titolo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.testo}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Panoramica costi</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Quanto costa la manutenzione in Svizzera?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Nell&apos;arco della durata di vita di 25 anni, ciò corrisponde a costi di manutenzione di ca. CHF 4&apos;000–7&apos;500 — una piccola somma rispetto all&apos;investimento totale.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Prestazione</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Costo</th>
                  </tr>
                </thead>
                <tbody>
                  {costi.map((row, i) => (
                    <tr key={row.prestazione} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.prestazione}</td>
                      <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.costo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Intervalli di manutenzione</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">Con quale frequenza deve essere mantenuto un impianto solare?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Un buon installatore spiega tutte le garanzie e gli intervalli di manutenzione raccomandati in modo trasparente prima dell&apos;acquisto.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Misura</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Frequenza</th>
                  </tr>
                </thead>
                <tbody>
                  {frequenze.map((row, i) => (
                    <tr key={row.misura} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700 text-sm">{row.misura}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-gray-900 text-sm">{row.frequenza}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Presenta ora una richiesta di manutenzione</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Hai un impianto esistente che deve essere mantenuto? O stai pianificando un nuovo impianto e vuoi subito concludere un contratto di manutenzione? Ti mettiamo in contatto con il partner giusto.
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
