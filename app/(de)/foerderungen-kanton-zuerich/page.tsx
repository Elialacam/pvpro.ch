import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Förderung Solaranlage Kanton Zürich 2026 – EIV, Solarpflicht & Beiträge | PVPro.ch',
  description: 'Welche Förderungen gibt es für Solaranlagen im Kanton Zürich 2026? EIV, kantonale Beiträge, Solarpflicht und wie Sie die Förderung beantragen. Jetzt informieren.',
  alternates: {
    canonical: 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: 'Förderung Solaranlage Kanton Zürich 2026 – EIV, Solarpflicht & Beiträge',
    description: 'Alle Förderungen für Solaranlagen im Kanton Zürich 2026: EIV, kantonale Beiträge, Solarpflicht.',
    url: 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Wie hoch ist die Förderung für eine Solaranlage im Kanton Zürich?',
    answer: "Die Bundesförderung (EIV) beträgt ca. 300–400 CHF pro kWp. Für eine 10-kWp-Anlage sind das rund 3'500 CHF. Zusätzlich gibt es kantonale Programme und steuerliche Abzüge.",
  },
  {
    question: 'Gilt die Solarpflicht auch für bestehende Häuser im Kanton Zürich?',
    answer: 'Die Solarpflicht gilt aktuell primär für Neubauten und grosse Dachsanierungen. Bestehende Häuser sind nicht direkt betroffen, können aber freiwillig von allen Förderungen profitieren.',
  },
  {
    question: 'Wer kümmert sich um die Beantragung der Förderung?',
    answer: 'In der Regel übernimmt der zertifizierte Installateur die Anmeldung der EIV bei Pronovo. Für kantonale Beiträge hilft er ebenfalls beim Antrag.',
  },
  {
    question: 'Kann ich die Solaranlage steuerlich abziehen im Kanton Zürich?',
    answer: 'Ja. Investitionen in Solaranlagen können als energiesparende Massnahmen steuerlich abgezogen werden — sowohl auf Bundesebene als auch im Kanton Zürich.',
  },
  {
    question: 'Wie lange dauert es, bis die Förderung ausbezahlt wird?',
    answer: 'Die EIV wird typischerweise einige Monate nach der Anmeldung bei Pronovo ausbezahlt. Kantonale Beiträge können je nach Programm länger dauern.',
  },
];

const steps = [
  {
    n: '1',
    title: 'Installateur beauftragen',
    text: 'Ein zertifizierter Installateur aus Ihrer Region prüft Ihre Anlage und klärt alle Fördermöglichkeiten ab.',
  },
  {
    n: '2',
    title: 'Anlage installieren',
    text: 'Nach der Installation meldet der Installateur die Anlage bei Pronovo für die EIV an.',
    link: true,
  },
  {
    n: '3',
    title: 'Kantonale Förderung beantragen',
    text: 'Für kantonale Beiträge wird ein separater Antrag beim kantonalen Amt für Abfall, Wasser, Energie und Luft (AWEL) gestellt.',
  },
  {
    n: '4',
    title: 'Auszahlung',
    text: 'Die EIV wird typischerweise einige Monate nach der Anmeldung ausbezahlt. Kantonale Beiträge folgen je nach Programm.',
  },
];

export default function FoerderungenKantonZuerichPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/foerderungen" className="hover:text-white/70 transition-colors">Förderungen</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Kanton Zürich</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Förderungen &amp; Subventionen
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Förderung Solaranlage Kanton Zürich 2026
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Der Kanton Zürich gehört zu den aktivsten Kantonen der Schweiz beim Ausbau der Solarenergie. Neben der Bundesförderung profitieren Zürcherinnen und Zürcher von zusätzlichen kantonalen Programmen und einer gesetzlichen{' '}
              <Link href="/solaranlage-zurich" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Solarpflicht</Link>{' '}
              für Neubauten. Diese Seite erklärt alle aktuellen Fördermöglichkeiten klar und verständlich.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '300–400 CHF/kWp', sub: 'Bundesförderung EIV', note: 'einmalige Zahlung nach Installation' },
              { val: 'Solarpflicht', sub: 'seit 2023 für Neubauten', note: 'gilt im ganzen Kanton Zürich' },
              { val: '7–9 Jahre', sub: 'Amortisation im Kanton ZH', note: 'dank Förderung und tiefen Stromkosten' },
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

        {/* ── Bundesförderung EIV ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Bundesebene</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Bundesförderung: Die{' '}
              <Link href="/foerderungen" className="text-[#F97316] hover:underline">Einmalvergütung (EIV)</Link>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die wichtigste Förderung für Solaranlagen in der Schweiz ist die{' '}
              <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Einmalvergütung (EIV)</Link>{' '}
              des Bundes. Sie gilt auch im Kanton Zürich und wird von Pronovo verwaltet.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Betrag: ca. 300–400 CHF pro kWp installierter Leistung",
                "Wird einmalig nach der Installation ausbezahlt",
                "Kein jährlicher Antrag nötig",
                "Der Installateur übernimmt die Anmeldung in der Regel für Sie",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                Für eine typische 10-kWp-Anlage entspricht das einer Förderung von ca. <strong>3'500 CHF</strong>.
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">EIV — Beispielrechnung 10 kWp</p>
              <div className="space-y-4">
                {[
                  { label: 'Installationskosten', value: "28'000 CHF" },
                  { label: 'EIV Bundesförderung', value: "− 3'500 CHF" },
                  { label: 'Steuerlicher Abzug (ca.)', value: "− 2'800 CHF" },
                  { label: 'Effektive Kosten', value: "ca. 21'700 CHF", highlight: true },
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

        {/* ── Kantonale Förderung ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kantonsebene</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Kantonale Förderung im Kanton Zürich
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Der Kanton Zürich fördert Solaranlagen über das kantonale Energieförderprogramm. Die verfügbaren Beiträge hängen von der Anlagengrösse und dem Gebäudetyp ab. Zusätzlich zur EIV können Zürcher Hausbesitzer von folgenden kantonalen Massnahmen profitieren:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Energieförderprogramm',
                text: 'Beiträge für Photovoltaikanlagen in Kombination mit Wärmepumpen oder Gebäudedämmung.',
                badge: 'Kanton Zürich',
              },
              {
                title: 'Lokale Elektrizitätsgemeinschaften (LEG)',
                text: 'Ab 2026 können Sie Solarstrom direkt ans Quartier verkaufen — das senkt die Netzgebühren um bis zu 40%.',
                badge: 'Ab 2026',
              },
              {
                title: 'Steuerliche Abzüge',
                text: 'Investitionen in Solaranlagen können auf Bundesebene und im Kanton Zürich steuerlich abgezogen werden.',
                badge: 'Bund & Kanton',
              },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Solarpflicht ── */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Gesetzliche Pflicht</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              <Link href="/solaranlage-zurich" className="hover:text-orange-400 transition-colors">Solarpflicht</Link>{' '}
              im Kanton Zürich
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Seit 2023 gilt im Kanton Zürich eine gesetzliche{' '}
              <Link href="/solaranlage-zurich" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Solarpflicht</Link>{' '}
              für:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Neubauten ab einer bestimmten Grösse',
                'Grosse Dachsanierungen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed">
                <strong className="text-orange-400">Tipp:</strong> Wer ohnehin bauen oder renovieren muss, sollte die Solarpflicht als Chance sehen — denn die Förderung ist für 2026 vollumfänglich garantiert.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wie beantrage ich ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Schritt für Schritt</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Wie beantrage ich die Förderung im Kanton Zürich?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <div key={step.n} className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">Schritt {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {step.link ? (
                    <>
                      Nach der{' '}
                      <Link href="/solaranlage-installieren-schweiz" className="text-[#F97316] hover:underline font-medium">Installation</Link>{' '}
                      meldet der Installateur die Anlage bei Pronovo für die EIV an.
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
            Jetzt Förderung im Kanton Zürich optimal nutzen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Unsere zertifizierten Installateure im Kanton Zürich kennen alle aktuellen Förderprogramme und kümmern sich um die Beantragung — Sie müssen sich um nichts kümmern.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/anfrage"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            Möchten Sie zuerst{' '}
            <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten vergleichen</Link>?{' '}
            Oder alle{' '}
            <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Förderungen Schweiz</Link>{' '}
            im Überblick?
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Häufig gestellte Fragen</h2>
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
            <p className="text-gray-500 text-sm mb-4">Weitere Informationen:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/foerderungen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Alle Förderungen Schweiz
              </Link>
              <Link href="/solaranlage-zurich" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage Kanton Zürich
              </Link>
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Anbieter vergleichen
              </Link>
              <Link href="/anfrage" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Offerte anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
