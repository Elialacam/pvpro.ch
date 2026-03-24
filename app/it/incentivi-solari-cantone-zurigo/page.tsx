import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Incentivi solari cantone di Zurigo 2026 – CU, obbligo solare & contributi | PVPro.ch",
  description: "Quali incentivi esistono per gli impianti solari nel cantone di Zurigo 2026? CU, contributi cantonali, obbligo solare e come fare domanda. Informati ora.",
  alternates: {
    canonical: 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: "Incentivi solari cantone di Zurigo 2026 – CU, obbligo solare & contributi",
    description: "Tutti gli incentivi per impianti solari nel cantone di Zurigo 2026.",
    url: 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Qual è l'importo dell'incentivo per un impianto solare nel cantone di Zurigo?",
    answer: "Il contributo federale (CU) è di circa 300–400 CHF per kWp. Per un impianto da 10 kWp ciò corrisponde a circa 3'500 CHF. Si aggiungono programmi cantonali e deduzioni fiscali.",
  },
  {
    question: "L'obbligo solare si applica anche alle case esistenti nel cantone di Zurigo?",
    answer: "L'obbligo solare si applica attualmente principalmente alle nuove costruzioni e alle grandi ristrutturazioni del tetto. Le case esistenti non sono direttamente interessate, ma possono beneficiare volontariamente di tutti gli incentivi.",
  },
  {
    question: "Chi si occupa della domanda di incentivo?",
    answer: "Di norma l'installatore certificato si occupa dell'iscrizione al CU presso Pronovo. Aiuta anche con le domande di contributi cantonali.",
  },
  {
    question: "Posso dedurre fiscalmente l'impianto solare nel cantone di Zurigo?",
    answer: "Sì. Gli investimenti in impianti solari possono essere dedotti come misure di risparmio energetico — sia a livello federale che nel cantone di Zurigo.",
  },
  {
    question: "Quanto tempo ci vuole prima che l'incentivo venga erogato?",
    answer: "Il CU viene solitamente erogato alcuni mesi dopo l'iscrizione presso Pronovo. I contributi cantonali possono richiedere più tempo a seconda del programma.",
  },
];

export default function IncentiviSolariCantonZurigoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/it/incentivi-solari" className="hover:text-white/70 transition-colors">Incentivi</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Cantone di Zurigo</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Incentivi &amp; Contributi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Incentivi impianti solari cantone di Zurigo 2026
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Il cantone di Zurigo è uno dei cantoni più attivi della Svizzera nell'espansione dell'energia solare. Oltre all'incentivo federale, gli abitanti del cantone di Zurigo beneficiano di programmi cantonali aggiuntivi e di un obbligo legale di pannelli solari per le nuove costruzioni. Questa pagina spiega chiaramente tutte le possibilità di incentivo attuali.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '300–400 CHF/kWp', sub: 'Incentivo federale CU', note: 'pagamento unico dopo l\'installazione' },
              { val: 'Obbligo solare', sub: 'dal 2023 per le nuove costruzioni', note: 'valido in tutto il cantone di Zurigo' },
              { val: '7–9 anni', sub: 'Ammortamento nel cantone di Zurigo', note: 'grazie agli incentivi e ai bassi costi energetici' },
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

        {/* Incentivo federale */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Livello federale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Incentivo federale: il contributo unico (CU)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Il principale incentivo per gli impianti solari in Svizzera è il contributo unico (CU) della Confederazione. È valido anche nel cantone di Zurigo e viene gestito da Pronovo.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Importo: ca. 300–400 CHF per kWp di potenza installata",
                "Pagato una volta sola dopo l'installazione",
                "Non è necessaria alcuna domanda annuale",
                "L'installatore si occupa generalmente dell'iscrizione per voi",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">Per un tipico impianto da 10 kWp ciò corrisponde a un incentivo di ca. <strong>3'500 CHF</strong>.</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">CU — Esempio di calcolo 10 kWp</p>
              <div className="space-y-4">
                {[
                  { label: "Costi di installazione", value: "28'000 CHF" },
                  { label: 'CU Incentivo federale', value: "− 3'500 CHF" },
                  { label: 'Deduzione fiscale (ca.)', value: "− 2'800 CHF" },
                  { label: 'Costi effettivi', value: "ca. 21'700 CHF", highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Incentivi cantonali */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Livello cantonale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Incentivi cantonali nel cantone di Zurigo</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">Oltre al CU, i proprietari zurighesi possono beneficiare delle seguenti misure cantonali:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Programma di promozione energetica', text: 'Contributi per impianti fotovoltaici in combinazione con pompe di calore o isolamento degli edifici.', badge: 'Cantone di Zurigo' },
              { title: 'Comunità elettriche locali (CEL)', text: 'Dal 2026 potete vendere l\'elettricità solare direttamente al quartiere — riducendo le tariffe di rete fino al 40%.', badge: 'Dal 2026' },
              { title: 'Deduzioni fiscali', text: 'Gli investimenti in impianti solari possono essere dedotti come misure di risparmio energetico — a livello federale e nel cantone di Zurigo.', badge: 'Confederazione & Cantone' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Obbligo solare */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Obbligo legale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Obbligo solare nel cantone di Zurigo</h2>
            <p className="text-gray-400 leading-relaxed mb-6">Dal 2023 è in vigore nel cantone di Zurigo un obbligo legale di pannelli solari per:</p>
            <ul className="space-y-3 mb-8">
              {['Nuove costruzioni di una certa dimensione', 'Grandi ristrutturazioni del tetto'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed"><strong className="text-orange-400">Consiglio:</strong> Chi deve comunque costruire o ristrutturare dovrebbe vedere l'obbligo solare come un'opportunità — l'incentivo è completamente garantito per il 2026.</p>
            </div>
          </div>
        </section>

        {/* Come fare domanda */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Passo dopo passo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Come richiedere l'incentivo nel cantone di Zurigo?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', title: "Incaricare l'installatore", text: "Un installatore certificato nella tua regione esamina il tuo impianto e chiarisce tutte le possibilità di incentivo." },
              { n: '2', title: "Installare l'impianto", text: "Dopo l'installazione, l'installatore registra l'impianto presso Pronovo per il CU." },
              { n: '3', title: 'Richiedere il contributo cantonale', text: "Per i contributi cantonali viene presentata una domanda separata all'Ufficio cantonale per i rifiuti, le acque, l'energia e l'aria (AWEL)." },
              { n: '4', title: 'Erogazione', text: "Il CU viene solitamente erogato alcuni mesi dopo l'iscrizione. I contributi cantonali seguono a seconda del programma." },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">Passo {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Sfrutta ora al meglio gli incentivi nel cantone di Zurigo</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">I nostri installatori certificati nel cantone di Zurigo conoscono tutti i programmi di incentivazione attuali e si occupano della domanda — tu non devi preoccuparti di nulla.</p>
          <Link href="/it/richiesta" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Richiedi un preventivo gratuito <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Domande frequenti</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Domande frequentemente poste</h2>
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
