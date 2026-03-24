import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Incentivi solari Cantone di Zurigo 2026 – RU, obbligo solare & contributi | PVPro.ch',
  description: 'Quali incentivi esistono per gli impianti solari nel Cantone di Zurigo 2026? RU, contributi cantonali, obbligo solare e come richiederli. Informatevi ora.',
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
    title: 'Incentivi solari Cantone di Zurigo 2026 – RU, obbligo solare & contributi',
    description: 'Tutti gli incentivi per gli impianti solari nel Cantone di Zurigo 2026: RU, contributi cantonali, obbligo solare.',
    url: 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Quanto è l'incentivo per un impianto solare nel Cantone di Zurigo?",
    answer: "L'incentivo federale (RU) è di circa CHF 300–400 per kWp. Per un impianto da 10 kWp sono circa CHF 3.500. Inoltre esistono programmi cantonali e deduzioni fiscali.",
  },
  {
    question: "L'obbligo solare si applica anche alle case esistenti nel Cantone di Zurigo?",
    answer: "L'obbligo solare si applica attualmente principalmente alle nuove costruzioni e alle grandi ristrutturazioni del tetto. Le case esistenti non sono direttamente interessate, ma possono volontariamente beneficiare di tutti gli incentivi.",
  },
  {
    question: "Chi si occupa della domanda di incentivo?",
    answer: "Di norma l'installatore certificato si occupa della registrazione della RU presso Pronovo. Per i contributi cantonali aiuta anche nella domanda.",
  },
  {
    question: "Posso detrarre fiscalmente l'impianto solare nel Cantone di Zurigo?",
    answer: "Sì. Gli investimenti in impianti solari possono essere dedotti come misure di risparmio energetico — sia a livello federale che nel Cantone di Zurigo.",
  },
  {
    question: "Quanto tempo ci vuole per ricevere il pagamento dell'incentivo?",
    answer: "La RU viene tipicamente versata alcuni mesi dopo la registrazione presso Pronovo. I contributi cantonali possono richiedere più tempo a seconda del programma.",
  },
];

const steps = [
  { n: '1', title: 'Incarico all\'installatore', text: "Un installatore certificato della vostra regione verifica il vostro impianto e chiarisce tutte le possibilità di incentivo." },
  { n: '2', title: "Installare l'impianto", text: '', link: true },
  { n: '3', title: 'Richiedere il contributo cantonale', text: "Per i contributi cantonali viene presentata una domanda separata presso l'Ufficio cantonale per i rifiuti, le acque, l'energia e l'aria (AWEL)." },
  { n: '4', title: 'Versamento', text: "La RU viene tipicamente versata alcuni mesi dopo la registrazione. I contributi cantonali seguono a seconda del programma." },
];

export default function IncentiviSolariCantoneZurigoPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
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
              Incentivi impianto solare Cantone di Zurigo 2026
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Il Cantone di Zurigo è uno dei cantoni più attivi della Svizzera nello sviluppo dell&apos;energia solare. Oltre all&apos;incentivo federale, gli abitanti di Zurigo beneficiano di programmi cantonali aggiuntivi e di un{' '}
              <Link href="/solaranlage-zurich" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">obbligo solare</Link>{' '}
              legale per le nuove costruzioni. Questa pagina spiega in modo chiaro tutte le possibilità di incentivo attuali.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'CHF 300–400/kWp', sub: 'Incentivo federale RU', note: 'pagamento unico dopo l\'installazione' },
              { val: 'Obbligo solare', sub: 'dal 2023 per le nuove costruzioni', note: 'vale in tutto il Cantone di Zurigo' },
              { val: '7–9 anni', sub: 'Ammortamento nel Cantone ZH', note: 'grazie a incentivi e bassi costi elettrici' },
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

        {/* ── RU federale ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Livello federale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Incentivo federale: la{' '}
              <Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline">Rimunerazione Unica (RU)</Link>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Il principale incentivo per gli impianti solari in Svizzera è la{' '}
              <Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline font-medium">Rimunerazione Unica (RU)</Link>{' '}
              della Confederazione. Si applica anche nel Cantone di Zurigo ed è gestita da Pronovo.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Importo: circa CHF 300–400 per kWp di potenza installata",
                "Versata una sola volta dopo l'installazione",
                "Nessuna domanda annuale necessaria",
                "L'installatore si occupa solitamente della registrazione per voi",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                Per un tipico impianto da 10 kWp ciò rappresenta un incentivo di circa <strong>CHF 3.500</strong>.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">RU — Esempio di calcolo 10 kWp</p>
              <div className="space-y-4">
                {[
                  { label: "Costi di installazione", value: "CHF 28'000" },
                  { label: 'Incentivo federale RU', value: "− CHF 3'500" },
                  { label: 'Deduzione fiscale (ca.)', value: "− CHF 2'800" },
                  { label: 'Costo effettivo', value: "ca. CHF 21'700", highlight: true },
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

        {/* ── Incentivi cantonali ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Livello cantonale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Incentivi cantonali nel Cantone di Zurigo
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Il Cantone di Zurigo sostiene gli impianti solari tramite il programma cantonale di promozione energetica. I contributi disponibili dipendono dalle dimensioni dell&apos;impianto e dal tipo di edificio. Oltre alla RU, i proprietari zurighesi possono beneficiare delle seguenti misure cantonali:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Programma di promozione energetica', text: 'Contributi per impianti fotovoltaici in combinazione con pompe di calore o isolamento degli edifici.', badge: 'Cantone di Zurigo' },
              { title: 'Comunità elettriche locali (CEL)', text: 'Dal 2026 potete vendere elettricità solare direttamente al quartiere — riducendo le tariffe di rete fino al 40%.', badge: 'Dal 2026' },
              { title: 'Deduzioni fiscali', text: 'Gli investimenti in impianti solari possono essere dedotti a livello federale e nel Cantone di Zurigo.', badge: 'Confederazione & Cantone' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Obbligo solare ── */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Obbligo legale</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              <Link href="/solaranlage-zurich" className="hover:text-orange-400 transition-colors">Obbligo solare</Link>{' '}
              nel Cantone di Zurigo
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Dal 2023 nel Cantone di Zurigo vige un{' '}
              <Link href="/solaranlage-zurich" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">obbligo solare</Link>{' '}
              legale per:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Nuove costruzioni a partire da una certa dimensione',
                'Grandi ristrutturazioni del tetto',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed">
                <strong className="text-orange-400">Consiglio:</strong> Chi deve comunque costruire o ristrutturare dovrebbe vedere l&apos;obbligo solare come un&apos;opportunità — perché l&apos;incentivo è garantito per intero nel 2026.
              </p>
            </div>
          </div>
        </section>

        {/* ── Come richiedere ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Passo dopo passo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Come richiedere l&apos;incentivo nel Cantone di Zurigo?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <div key={step.n} className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">Passo {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {step.link ? (
                    <>
                      Dopo l&apos;{' '}
                      <Link href="/it/installare-impianto-solare-svizzera" className="text-[#F97316] hover:underline font-medium">installazione</Link>,
                      l&apos;installatore registra l&apos;impianto presso Pronovo per la RU.
                    </>
                  ) : step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Sfruttate ora tutti gli incentivi nel Cantone di Zurigo
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            I nostri installatori certificati nel Cantone di Zurigo conoscono tutti i programmi di incentivo attuali e si occupano della domanda — voi non dovete preoccuparvi di nulla.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/it/preventivo" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Richiedere un preventivo gratuito <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            Volete prima{' '}
            <Link href="/it/richiedere-preventivo-solare" className="text-[#F97316] hover:underline font-medium">confrontare preventivi</Link>?{' '}
            O tutti gli{' '}
            <Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline font-medium">incentivi svizzeri</Link>{' '}
            in sintesi?
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
              <Link href="/it/incentivi-solari" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Tutti gli incentivi svizzeri</Link>
              <Link href="/it/comparatore-fotovoltaico-svizzera" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Confrontare i fornitori</Link>
              <Link href="/it/richiedere-preventivo-solare" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Richiedere preventivi</Link>
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
