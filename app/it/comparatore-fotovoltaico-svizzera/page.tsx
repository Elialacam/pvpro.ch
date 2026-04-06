import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Star, BarChart2, Users } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Comparatore Fotovoltaico Svizzera 2026 – Confronta i fornitori e risparmia | PVPro.ch',
  description: 'Confronta i fornitori fotovoltaici in Svizzera gratuitamente. PVPro.ch è il principale comparatore svizzero per impianti solari – fino a 3 preventivi da installatori certificati.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/comparatore-fotovoltaico-svizzera',
    languages: {
      'de-CH': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/comparateur-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-comparison-portal-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/comparatore-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
    },
  },
  openGraph: {
    title: 'Comparatore Fotovoltaico Svizzera 2026 – Confronta i fornitori e risparmia',
    description: 'Confronta i fornitori fotovoltaici in Svizzera gratuitamente. Fino a 3 preventivi da installatori certificati.',
    url: 'https://www.pvpro.ch/it/comparatore-fotovoltaico-svizzera',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'PVPro.ch è davvero gratuito?',
    answer: 'Sì, per i proprietari il servizio è completamente gratuito e senza impegno. Ci finanziamo tramite una commissione pagata dagli installatori — non da voi.',
  },
  {
    question: 'Quanti preventivi riceverò?',
    answer: "Ricevete fino a 3 preventivi personalizzati da installatori locali verificati. Avete così immediatamente una base di confronto.",
  },
  {
    question: 'Chi sono gli installatori nella rete PVPro?',
    answer: 'Collaboriamo con oltre 500 aziende svizzere certificate. Ogni installatore viene verificato prima di essere ammesso nella nostra rete.',
  },
  {
    question: 'Posso usare PVPro.ch anche per un condominio?',
    answer: 'Sì, forniamo preventivi per case unifamiliari, condomini ed edifici commerciali in tutta la Svizzera.',
  },
  {
    question: 'Quanto tempo ci vuole per ricevere i preventivi?',
    answer: 'Nella maggior parte dei casi ricevete i primi preventivi entro 24–48 ore dalla vostra richiesta.',
  },
  {
    question: 'Devo impegnarmi in qualcosa?',
    answer: 'No. Potete confrontare i preventivi e decidere liberamente — senza alcun impegno.',
  },
];

const reasons = [
  {
    title: 'Trasparenza dei prezzi',
    text: 'Vedete subito quanto costa davvero un impianto nella vostra regione',
  },
  {
    title: 'Confronto qualitativo',
    text: 'Solo installatori certificati con esperienza comprovata',
  },
  {
    title: 'Risparmio di tempo',
    text: 'Invece di cercare da soli, ottenete tutto in un colpo d\'occhio',
  },
];

const criteria = [
  { title: 'Certificazione', text: 'Verificate che l\'azienda abbia qualifiche riconosciute (es. electrosuisse, Swissolar)' },
  { title: 'Esperienza locale', text: 'Un installatore della vostra regione conosce gli incentivi cantonali e le procedure di autorizzazione' },
  { title: 'Referenze', text: 'Chiedete progetti completati nel vostro comune' },
  { title: 'Garanzie', text: 'I fornitori seri offrono garanzie chiare su moduli, inverter e installazione' },
  { title: 'Prezzi trasparenti', text: 'Nessun costo nascosto — tutto scritto nell\'offerta' },
];

const tableRows = [
  { label: 'Costo per il cliente', pvpro: 'Gratuito', others: 'Spesso costi nascosti' },
  { label: 'Installatori verificati', pvpro: 'Sì, certificati', others: 'Non sempre' },
  { label: 'Aziende locali', pvpro: 'Sì, della vostra regione', others: 'Spesso non locali' },
  { label: 'Nessuna chiamata pubblicitaria', pvpro: 'Garantito', others: 'Non garantito' },
  { label: 'Piattaforma svizzera', pvpro: 'Sì', others: 'Spesso straniera' },
];

export default function ComparatoreFotovoltaicoSvizzeraPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Comparatore fotovoltaico</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <BarChart2 className="w-3.5 h-3.5" /> Fornitori &amp; Confronto
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Comparatore di impianti fotovoltaici in Svizzera
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Volete installare un impianto solare in Svizzera? Quale fornitore è quello giusto? I prezzi variano enormemente, la qualità ancora di più. PVPro.ch è il comparatore svizzero indipendente che mette in contatto i proprietari con{' '}
              <Link href="/it/preventivo" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">installatori locali certificati</Link>{' '}
              — gratuitamente e senza impegno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Gratuito & senza impegno', sub: 'nessun rischio', note: 'completamente gratuito per i proprietari' },
              { val: 'Fino a 3 preventivi', sub: 'da installatori certificati', note: 'personalizzati per il vostro tetto' },
              { val: '500+ partner', sub: 'in tutta la Svizzera', note: 'aziende certificate nella vostra regione' },
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

        {/* ── Perché confrontare ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Perché confrontare?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Perché fare un confronto tra fornitori?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Molti proprietari contattano un solo installatore e firmano la prima offerta. Spesso è un errore costoso. Per lo stesso impianto i prezzi tra diversi installatori possono variare di diversi migliaia di franchi.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Il confronto conviene per tre motivi:</p>
            <ul className="space-y-4">
              {reasons.map(r => (
                <li key={r.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{r.title}:</strong> {r.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-beratung-indoor-2.png"
              alt="Confronto fornitori fotovoltaici Svizzera"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Lo sapevate?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Chi confronta almeno 3 preventivi risparmia in media il 15–25% rispetto alla prima offerta — per un impianto tipico fino a 5.000 CHF.
              </p>
            </div>
          </div>
        </section>

        {/* ── Come funziona ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Come funziona</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Come funziona PVPro.ch come comparatore?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              PVPro.ch non è un semplice elenco. Verifichiamo ogni installatore della nostra rete e mettiamo in contatto solo aziende certificate della vostra regione.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Compilare il modulo', text: 'In 2 minuti descrivete il vostro tetto, il consumo elettrico e i vostri desideri.' },
              { n: '2', title: 'Ricevere i preventivi', text: 'Fino a 3 installatori locali vi inviano offerte personalizzate direttamente.' },
              { n: '3', title: 'Confrontare e scegliere', text: 'Confrontate prezzi, componenti e referenze — e decidete liberamente.' },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Passo {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quali installatori ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-2.png"
              alt="Installatore fotovoltaico certificato Svizzera"
              className="w-full h-72 object-cover rounded-3xl object-top"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Criteri di qualità</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quali installatori sono raccomandabili in Svizzera?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In Svizzera ci sono centinaia di installatori fotovoltaici. La qualità varia molto. A cosa bisogna prestare attenzione?
            </p>
            <ul className="space-y-4 mb-6">
              {criteria.map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{c.title}:</strong> {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>PVPro.ch verifica tutti questi criteri per voi</strong> e mette in contatto solo aziende che soddisfano i nostri standard.
              </p>
            </div>
          </div>
        </section>

        {/* ── Tabella comparativa ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">La differenza</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cosa distingue PVPro.ch dagli altri comparatori?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold w-2/5"></th>
                  <th className="px-6 py-4 text-white font-bold text-center">PVPro.ch</th>
                  <th className="px-6 py-4 text-white/60 font-semibold text-center">Altri portali</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-green-700 font-semibold">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {row.pvpro}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Users className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Confronta gratuitamente i fornitori
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Domande frequenti
            </h2>
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
            <p className="text-gray-500 text-sm mb-4">Ulteriori informazioni sui pannelli solari:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/it/costi-impianto-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Costi impianto solare
              </Link>
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Incentivi &amp; CU
              </Link>
              <Link href="/it/solare-casa-unifamiliare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Casa unifamiliare
              </Link>
              <Link href="/it/solare-condominio" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Condominio
              </Link>
              <Link href="/it/installare-impianto-solare-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Installatori nella vostra regione
              </Link>
              <Link href="/it/richiedere-preventivo-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Richiedere e confrontare preventivi
              </Link>
              <Link href="/it/soluzione-completa-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Fornitori soluzioni complete
              </Link>
              <Link href="/it/incentivi-solari-cantone-zurigo" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Incentivi Cantone di Zurigo
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
