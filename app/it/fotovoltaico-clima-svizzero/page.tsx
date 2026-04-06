import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Fotovoltaico e clima svizzero 2026 – Quale impianto scegliere? | PVPro.ch',
  description: 'Quali impianti fotovoltaici sono adatti al clima svizzero? Neve, freddo, nebbia — spieghiamo cosa conta davvero e quali moduli funzionano meglio in Svizzera.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/fotovoltaico-clima-svizzero',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
      'fr-CH': 'https://www.pvpro.ch/fr/photovoltaique-climat-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panels-swiss-climate',
      'it-CH': 'https://www.pvpro.ch/it/fotovoltaico-clima-svizzero',
      'x-default': 'https://www.pvpro.ch/photovoltaik-schweizer-klima',
    },
  },
  openGraph: {
    title: 'Fotovoltaico e clima svizzero 2026 – Quale impianto scegliere?',
    description: 'Neve, freddo, nebbia — quali pannelli solari funzionano meglio nel clima svizzero?',
    url: 'https://www.pvpro.ch/it/fotovoltaico-clima-svizzero',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "I pannelli solari funzionano anche con il cielo nuvoloso?",
    answer: "Sì. I moduli moderni producono elettricità anche con cielo coperto, seppur con potenza ridotta. La luce diffusa viene parzialmente convertita in energia.",
  },
  {
    question: "Devo rimuovere la neve dai moduli?",
    answer: "In genere no. Sui tetti inclinati la neve scivola rapidamente. La rimozione manuale è solitamente inutile e può danneggiare i moduli.",
  },
  {
    question: "I pannelli producono elettricità in inverno?",
    answer: "Sì, ma meno che in estate. In inverno le ore di sole sono più brevi e l'angolo è più basso. Un impianto ben dimensionato contribuisce comunque in modo utile anche in inverno.",
  },
  {
    question: "I moduli solari resistono all'inverno?",
    answer: "Sì. I moduli di qualità sono progettati per temperature fino a -40°C e reggono carichi di neve di centinaia di chilogrammi per metro quadrato.",
  },
  {
    question: "Quali cantoni sono i più adatti al fotovoltaico?",
    answer: "Il Ticino, con oltre 2'100 ore di sole, offre le condizioni migliori. Ma anche nell'Altopiano e nella Svizzera orientale un impianto solare è conveniente — il tempo di ammortamento è leggermente più lungo, ma comunque attrattivo.",
  },
];

const moduli = [
  {
    title: 'Moduli monocristallini',
    badge: "Consigliati Altopiano",
    testo: "La scelta più comune per la Svizzera. Alta efficienza anche con luce diffusa, robusti e duraturi. Ideali per l'Altopiano e le Prealpi.",
  },
  {
    title: 'Moduli bifacciali',
    badge: 'Ideali con la neve',
    testo: "Producono energia anche dalla parte posteriore — particolarmente utile quando la neve riflette la luce. Interessanti per le regioni con molta neve.",
  },
  {
    title: 'Basso coefficiente di temperatura',
    badge: 'Zone di montagna',
    testo: "Più basso è il coefficiente di temperatura, migliori sono le prestazioni al freddo. Particolarmente rilevante per le zone ad alta quota in Svizzera.",
  },
];

const oreSole = [
  { regione: 'Ticino (Lugano)', ore: "ca. 2'157" },
  { regione: 'Vallese (Sion)', ore: "ca. 2'000" },
  { regione: 'Regione del Lemano', ore: "ca. 1'800" },
  { regione: 'Altopiano (Zurigo, Berna)', ore: "ca. 1'500–1'600" },
  { regione: 'Svizzera orientale (San Gallo)', ore: "ca. 1'500" },
];

export default function FotovoltaicoClimaPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/it/come-funziona-solare" className="hover:text-white/70 transition-colors">Energia solare</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Fotovoltaico e clima svizzero</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Tecnologia &amp; Clima
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Quali impianti fotovoltaici sono adatti al clima svizzero?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Molti proprietari di casa in Svizzera si chiedono: vale davvero la pena installare un impianto solare quando il tempo è spesso nuvoloso, freddo o nevoso? La risposta sorprende: i moderni impianti fotovoltaici funzionano in modo affidabile anche con neve, nebbia e temperature basse — e in alcuni casi sono addirittura più efficienti che nelle regioni più calde.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "1'300–2'100", sub: 'Ore di sole per cantone', note: 'in base ad altitudine e regione' },
              { val: '+5–10%', sub: 'Maggiore resa al freddo', note: "grazie all'effetto della temperatura" },
              { val: '25–30 anni', sub: 'Durata di vita in clima svizzero', note: 'con garanzia del produttore' },
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

        {/* ── Ore di sole ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Produzione per regione</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Come influisce il clima svizzero sulla produzione solare?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La Svizzera ha un clima molto variegato — dall&apos;Altopiano nebbioso al soleggiato{' '}
              <Link href="/it/fotovoltaico-ticino" className="text-[#F97316] hover:underline font-medium">Ticino</Link>.
              Quello che molti ignorano: i moduli fotovoltaici hanno bisogno di luce, non di calore. E in Svizzera la luce non manca, nemmeno in inverno.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Anche sull&apos;Altopiano, con una media di 1&apos;500 ore di sole, un impianto da 10 kWp produce circa 9&apos;000–10&apos;000 kWh all&apos;anno. Scopri i{' '}
              <Link href="/it/costi-impianto-solare" className="text-[#F97316] hover:underline font-medium">costi di un impianto solare</Link>{' '}
              in Svizzera.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Regione</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Ore di sole/anno</th>
                  </tr>
                </thead>
                <tbody>
                  {oreSole.map((row, i) => (
                    <tr key={row.regione} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700">{row.regione}</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-gray-900">{row.ore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Neve e freddo ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Funzionamento invernale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Cosa succede ai moduli solari con la neve e il freddo?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                titolo: 'Neve',
                badge: 'Nessun problema',
                testo: "La neve sui moduli riduce brevemente la produzione. Tuttavia, sui tetti inclinati la neve scivola rapidamente — e i moduli stessi aiutano cedendo un po' di calore. Dopo una nevicata, l'impianto è solitamente di nuovo a piena produzione entro poche ore.",
              },
              {
                titolo: 'Freddo',
                badge: 'Addirittura vantaggioso',
                testo: "I moduli fotovoltaici lavorano in modo più efficiente al freddo che al caldo. Oltre circa 25°C il rendimento cala leggermente. Nella fresca primavera e nell'autunno svizzero i moduli producono spesso al massimo.",
              },
              {
                titolo: 'Nebbia',
                badge: 'Ridotto, non zero',
                testo: "Con la nebbia la produzione è ridotta ma non nulla. La luce diffusa viene ancora parzialmente convertita in elettricità dai moduli moderni. I moduli monocristallini ad alte prestazioni hanno qui un vantaggio particolare.",
              },
            ].map(c => (
              <div key={c.titolo} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.titolo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.testo}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-orange-800 text-sm leading-relaxed">
              <strong className="text-orange-600">Suggerimento:</strong> Leggi il nostro articolo dettagliato sul{' '}
              <Link href="/it/blog/solaranlage-winter-schweiz" className="text-[#F97316] hover:underline font-medium">fotovoltaico in inverno</Link>{' '}
              con dati di produzione concreti e il bonus invernale 2026.
            </p>
          </div>
        </section>

        {/* ── Quali moduli ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Scelta dei moduli</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Quali moduli sono particolarmente adatti alla Svizzera?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Non tutti i moduli sono ugualmente adatti al clima svizzero. Queste caratteristiche sono importanti:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moduli.map(m => (
              <div key={m.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{m.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{m.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{m.testo}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tutti i cantoni ── */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Solare conviene ovunque?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Vale la pena il fotovoltaico in tutti i cantoni svizzeri?
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sì — anche nei cantoni meno soleggiati un impianto solare è conveniente. Ecco perché:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "I prezzi dell'elettricità in Svizzera sono elevati",
                <>L&apos;incentivo federale (<Link href="/it/incentivi-solari" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">rimunerazione unica SRE</Link>) vale in tutta la Svizzera</>,
                "I moduli moderni producono in modo efficiente anche con luce diffusa",
                "Il tempo di ammortamento è di 8–10 anni anche sull'Altopiano",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed">
                In{' '}
                <Link href="/it/fotovoltaico-ticino" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Ticino</Link>{' '}
                un impianto si ammortizza in soli 4–6 anni — il miglior risultato di tutta la Svizzera. Nel cantone di Zurigo il tempo è di 7–9 anni.
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
            Verifica ora se il tuo tetto è adatto al solare
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-anchor leading-relaxed">
            Indipendentemente dal cantone e dal clima — i nostri installatori certificati calcolano il potenziale del tuo tetto e ti preparano un preventivo gratuito e personalizzato.
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
            Vuoi prima confrontare{' '}
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
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Incentivi solari
              </Link>
              <Link href="/it/costi-impianto-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Costi impianto
              </Link>
              <Link href="/it/comparatore-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Confrontare installatori
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
