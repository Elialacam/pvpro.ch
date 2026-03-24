import Link from 'next/link';
import { ChevronRight, CheckCircle, AlertCircle, FileText, ArrowRight, Shield, Home, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Autorizzazione impianto solare Svizzera 2026 – Tutto quello che devi sapere | PVPro.ch',
  description: 'Un impianto solare in Svizzera necessita di un permesso edilizio? Regole per tutti i cantoni, quando è necessaria un\'autorizzazione e come PVPro aiuta.',
  alternates: {
    canonical: 'https://www.pvpro.ch/it/autorizzazione-impianto-solare-svizzera',
    languages: {
      'de-CH': 'https://www.pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/autorisation-installation-solaire-suisse',
      'en-CH': 'https://www.pvpro.ch/en/solar-panel-permit-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/autorizzazione-impianto-solare-svizzera',
      'x-default': 'https://www.pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
    },
  },
  openGraph: {
    title: 'Autorizzazione impianto solare Svizzera 2026 – Tutto quello che devi sapere',
    description: "Un impianto solare in Svizzera necessita di un permesso edilizio? Tutte le regole cantonali, obbligo di annuncio ed eccezioni.",
    url: 'https://www.pvpro.ch/it/autorizzazione-impianto-solare-svizzera',
    type: 'website',
    locale: 'it_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Ho bisogno di un\'autorizzazione per un impianto solare sul tetto?',
    answer: 'Nella maggior parte dei casi, no. Gli impianti in copertura montati parallelamente al tetto che non superano il colmo sono in linea di principio esenti da autorizzazione in Svizzera e soggetti unicamente all\'obbligo di annuncio.',
  },
  {
    question: 'Quanto costa una domanda di permesso edilizio per un impianto solare?',
    answer: 'I costi variano a seconda del comune e del cantone, ma si aggirano generalmente tra i 200 e gli 800 CHF. Per gli impianti esenti da autorizzazione non vi sono costi.',
  },
  {
    question: 'Chi effettua l\'annuncio dell\'impianto solare al comune?',
    answer: 'Di norma è l\'installatore certificato a occuparsi dell\'annuncio. PVPro mette in contatto esclusivamente con aziende certificate che conoscono bene questo processo.',
  },
  {
    question: 'L\'esenzione dall\'autorizzazione vale anche per i mini impianti da balcone?',
    answer: 'I mini impianti da balcone (dispositivi solari a spina) sono anch\'essi in linea di principio esenti da autorizzazione in Svizzera, ma soggetti a regole proprie riguardo alla potenza e all\'immissione in rete.',
  },
  {
    question: 'Cosa succede se installo l\'impianto solare senza effettuare l\'annuncio?',
    answer: 'Ciò può causare problemi in fase di richiesta del sussidio e, nel peggiore dei casi, far scattare un obbligo di autorizzazione retroattivo. È quindi sempre consigliabile seguire la procedura corretta — il vostro installatore se ne occupa.',
  },
];

const senzaAutorizzazione = [
  "L'impianto è integrato nell'edificio o montato parallelamente al tetto",
  "Non supera il colmo del tetto",
  "Non pregiudica significativamente l'immagine del luogo",
  "L'edificio non si trova in una zona protetta",
];

const conAutorizzazione = [
  "L'edificio è sottoposto a tutela dei beni culturali",
  "L'edificio si trova in una zona di protezione del paesaggio urbano ISOS",
  "L'impianto è a terra (es. in giardino)",
  "L'impianto supera il colmo del tetto",
  "Il cantone ha emanato normative più severe",
];

const steps = [
  {
    n: '1',
    title: 'Contattare un installatore',
    text: 'Un installatore certificato esamina la vostra situazione e verifica se è necessaria un\'autorizzazione. PVPro vi mette in contatto gratuitamente.',
  },
  {
    n: '2',
    title: 'Annuncio o domanda di permesso',
    text: "A seconda della situazione, l'installatore presenta un annuncio o una domanda di permesso al comune. Conosce perfettamente le normative locali.",
  },
  {
    n: '3',
    title: 'Installazione',
    text: "Dopo l'approvazione, l'impianto viene montato. Per gli impianti esenti da autorizzazione, ciò avviene spesso nell'arco di poche settimane.",
  },
  {
    n: '4',
    title: 'Richiedere il sussidio',
    text: "Dopo l'installazione, la remunerazione unica (RU) viene registrata presso Pronovo — spesso dall'installatore stesso.",
  },
];

export default function AutorizzazioneImpiantoSolarePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/it" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Autorizzazione impianto solare</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Shield className="w-3.5 h-3.5" /> Diritto &amp; Autorizzazione
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Autorizzazione per impianti solari in Svizzera
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              In Svizzera, gli impianti solari nella maggior parte dei casi non necessitano di un permesso edilizio — ma non sempre. Se è necessaria un&apos;autorizzazione dipende dal cantone, dall&apos;ubicazione dell&apos;edificio e dal tipo di impianto. Questa pagina spiega le regole vigenti in modo chiaro e comprensibile.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Di solito', sub: 'senza autorizzazione', note: 'per impianti standard in copertura' },
              { val: '26', sub: 'cantoni', note: 'ognuno con le proprie normative' },
              { val: 'Obbligo', sub: 'di annuncio', note: 'sufficiente nella maggior parte dei casi' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-2xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Senza autorizzazione ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Nessuna autorizzazione richiesta</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quando un impianto solare in Svizzera non necessita di autorizzazione?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Dalla revisione della <strong>legge sulla pianificazione del territorio (LPT)</strong>, in Svizzera gli impianti solari in copertura sono in linea di principio esenti da autorizzazione se soddisfano le seguenti condizioni:
            </p>
            <ul className="space-y-3 mb-6">
              {senzaAutorizzazione.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>Conclusione:</strong> Se tutti questi punti sono soddisfatti, non è necessario un permesso edilizio — è sufficiente un semplice <strong>annuncio al comune</strong>.
              </p>
            </div>
          </div>

          {/* Visual side */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-3.png"
              alt="Tecnico sul tetto con pannelli solari – autorizzazione Svizzera"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Lo sapevate?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                In Svizzera nel 2024 sono stati installati oltre 50&apos;000 nuovi impianti solari — la grande maggioranza senza autorizzazione. Con una buona pianificazione e un installatore esperto, il percorso verso il proprio impianto solare è semplice.
              </p>
            </div>
          </div>
        </section>

        {/* ── Con autorizzazione ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Eccezioni</p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quando è comunque necessaria un&apos;autorizzazione?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                In determinate situazioni è comunque richiesta una domanda di permesso edilizio — in questi casi è necessario presentare una domanda <strong>prima dell&apos;installazione</strong>:
              </p>
              <ul className="space-y-3">
                {conAutorizzazione.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-amber-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  In questi casi deve essere presentata una domanda di permesso edilizio prima dell&apos;installazione. Il vostro installatore conosce le normative locali e vi assiste in questa procedura.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Differenze cantonali</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Differenze tra i cantoni
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sebbene il diritto federale costituisca la base, i cantoni dispongono di un certo margine di manovra. Alcuni cantoni come il <Link href="/it/incentivi-solari-cantone-zurigo" className="text-[#F97316] hover:underline font-medium">cantone di Zurigo</Link> hanno introdotto un <strong>obbligo solare per i nuovi edifici</strong>. Altri cantoni hanno procedure di annuncio semplificate.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { kanton: 'Zurigo', regel: 'Obbligo solare per nuovi edifici dal 2025; impianti in copertura altrimenti soggetti ad annuncio', badge: 'Obbligo' },
                  { kanton: 'Berna', regel: 'Procedura di annuncio semplificata per impianti standard', badge: 'Annuncio' },
                  { kanton: 'Ginevra', regel: 'Obbligo solare per ristrutturazioni di edifici di grandi dimensioni', badge: 'Obbligo' },
                  { kanton: 'Ticino', regel: 'Regole severe nelle zone di protezione del paesaggio urbano', badge: 'Paesaggio' },
                  { kanton: 'Tutti gli altri', regel: 'LPT federale si applica: esente da autorizzazione per impianti standard', badge: 'Standard' },
                ].map(r => (
                  <div key={r.kanton} className="flex items-start justify-between bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{r.kanton}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{r.regel}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-500 flex-shrink-0 ml-2">{r.badge}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Importante:</strong> Informatevi sempre anche presso il vostro <strong>comune</strong>, poiché le normative possono variare ulteriormente a livello comunale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Obbligo di annuncio ── */}
        <section className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Procedura semplificata</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Cos&apos;è l&apos;obbligo di annuncio?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;obbligo di annuncio <strong>non è una procedura di autorizzazione</strong> — è molto più semplice. Informate il comune prima dell&apos;installazione che intendete realizzare un impianto solare. Il comune dispone quindi di un breve termine per reagire.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Se non ricevete <strong>alcuna risposta</strong>, l&apos;impianto si considera approvato. In pratica, nella maggior parte dei casi è l&apos;installatore a effettuare l&apos;annuncio per voi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La procedura è semplice e dura generalmente solo pochi giorni o al massimo due settimane. A differenza della domanda di permesso edilizio, di norma non comporta <strong>alcun costo</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { step: '1', title: "Presentare l'annuncio", text: "L'installatore presenta l'annuncio al comune — spesso in modo digitale.", color: 'bg-[#F97316]' },
                { step: '2', title: "Periodo di attesa (10–30 giorni)", text: "Il comune esamina l'annuncio. Nessuna risposta = Approvato.", color: 'bg-blue-500' },
                { step: '3', title: "Montare l'impianto", text: "Dopo il termine o l'approvazione espressa, inizia l'installazione.", color: 'bg-green-500' },
                { step: '4', title: "Richiedere la RU", text: "La remunerazione unica viene registrata presso Pronovo — spesso dall'installatore.", color: 'bg-purple-500' },
              ].map(s => (
                <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                  <div className={`w-8 h-8 rounded-full ${s.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Passo dopo passo</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Passo dopo passo: cosa dovete fare?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Dalla prima richiesta al sussidio — in quattro passi verso il proprio impianto solare. Il vostro installatore vi accompagna durante l&apos;intero processo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div
                  className="w-12 h-12 rounded-full text-white text-lg font-bold flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {s.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-start gap-4">
            <FileText className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-1">
                Tutto sulla remunerazione unica (RU)
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                La <Link href="/it/incentivi-solari" className="text-[#F97316] hover:underline font-medium">remunerazione unica (RU)</Link> della Confederazione copre una parte significativa dei costi di investimento. Scoprite a quanto avete diritto e come richiedere il sussidio.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mini impianti da balcone ── */}
        <section className="bg-[#0f1f3d] rounded-3xl p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Caso speciale</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                Mini impianti da balcone: regole speciali
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                <Link href="/it/blog/balkonkraftwerk-schweiz" className="text-[#F97316] hover:underline font-medium">I mini impianti da balcone</Link> (dispositivi solari a spina) sono anch&apos;essi in linea di principio esenti da autorizzazione in Svizzera. Valgono però regole specifiche:
              </p>
              <ul className="space-y-2">
                {[
                  'Potenza di immissione massima: 600 watt nella rete domestica',
                  'Nessuna installazione elettrica professionale necessaria',
                  'Annuncio al gestore di rete raccomandato',
                  "In proprietà per piani: necessario il consenso della comunità dei proprietari",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-white/60 text-sm mb-4">Maggiori informazioni sui mini impianti da balcone in Svizzera</p>
              <Link
                href="/it/blog/balkonkraftwerk-schweiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity border border-white/20"
              >
                Guida mini impianti da balcone <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Home className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Richiedi subito un preventivo — verifica autorizzazione inclusa
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            I nostri <Link href="/it/richiesta" className="text-[#F97316] hover:underline font-medium">installatori certificati</Link> conoscono le normative di autorizzazione nel vostro cantone e si occupano di tutto — dall&apos;annuncio al sussidio.
          </p>
          <Link
            href="/it/richiesta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Richiedere un preventivo gratuito →
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Domande frequenti</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Domande sull&apos;autorizzazione
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
            <p className="text-gray-500 text-sm mb-4">Ulteriori informazioni sugli impianti solari:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/it/costi-impianto-solare"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Costi impianto solare
              </Link>
              <Link
                href="/it/incentivi-solari"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Incentivi &amp; RU
              </Link>
              <Link
                href="/it/come-funziona-solare"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Come funziona il solare
              </Link>
              <Link
                href="/it/richiesta"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Richiedere preventivo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
