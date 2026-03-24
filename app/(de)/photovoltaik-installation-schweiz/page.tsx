import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText, Clock } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Photovoltaik Installation Schweiz 2026 – Ablauf, Dauer & Kosten | PVPro.ch',
  description: 'Wie funktioniert die Installation einer Photovoltaik Anlage in der Schweiz? Ablauf, Dauer, Kosten und was Sie beachten müssen — alles erklärt von PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installation-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-process-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/processo-installazione-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
    },
  },
  openGraph: {
    title: 'Photovoltaik Installation Schweiz 2026 – Ablauf, Dauer & Kosten',
    description: 'Ablauf, Dauer und Kosten der Photovoltaik Installation in der Schweiz — Schritt für Schritt erklärt.',
    url: 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Wie lange dauert die Montage einer Solaranlage auf einem Einfamilienhaus?',
    answer: 'Die eigentliche Montage dauert bei einem Einfamilienhaus mit 8–12 kWp typischerweise 1 bis 3 Tage. Die gesamte Projektdauer ab Auftragserteilung beträgt 4 bis 12 Wochen.',
  },
  {
    question: 'Muss ich während der Installation zu Hause sein?',
    answer: 'Nicht zwingend für die gesamte Dauer. Es empfiehlt sich jedoch, am ersten Tag und bei der Inbetriebnahme dabei zu sein.',
  },
  {
    question: 'Wer kümmert sich um die Bewilligung?',
    answer: 'In der Regel übernimmt der Installateur die Meldung bei der Gemeinde oder — bei bewilligungspflichtigen Anlagen — das Baugesuch.',
  },
  {
    question: 'Wann fängt die Anlage an, Strom zu produzieren?',
    answer: 'Direkt nach der Inbetriebnahme — also am letzten Tag der Montage. Vom ersten Tag an produziert die Anlage Strom, sofern die Sonne scheint.',
  },
  {
    question: 'Was passiert nach der Installation?',
    answer: 'Der Installateur meldet die Anlage beim Netzbetreiber an und stellt den EIV-Antrag bei Pronovo. Sie erhalten eine Einweisung und können die Produktion über eine App oder ein Monitoringsystem verfolgen.',
  },
  {
    question: 'Kann ich den Fortschritt der Installation verfolgen?',
    answer: 'Die meisten modernen Wechselrichter haben ein integriertes Monitoring, das Sie per App verfolgen können. Der Installateur richtet dies bei der Inbetriebnahme ein.',
  },
];

const phases = [
  {
    n: '1',
    title: 'Planung und Offerte',
    duration: '1–2 Wochen',
    text: (
      <>
        Alles beginnt mit einer Bedarfsanalyse. Ein zertifizierter Installateur besucht Ihr Gebäude, analysiert Dachfläche, Ausrichtung, Neigung und Verschattung. Auf dieser Basis erstellt er eine massgeschneiderte Offerte mit Anlagengrösse, Komponenten und{' '}
        <Link href="/solaranlage-kosten" className="text-[#F97316] hover:underline font-medium">Kosten</Link>.
      </>
    ),
  },
  {
    n: '2',
    title: 'Bewilligung und Meldung',
    duration: '1–4 Wochen',
    text: (
      <>
        In den meisten Fällen ist eine Solaranlage auf dem Dach{' '}
        <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">bewilligungsfrei</Link>{' '}
        — es genügt eine einfache Meldung bei der Gemeinde. In Ausnahmefällen (Denkmalschutz, freistehende Anlagen) ist ein Baugesuch nötig. Der Installateur übernimmt diesen Schritt für Sie.
      </>
    ),
  },
  {
    n: '3',
    title: 'Materialbeschaffung',
    duration: '2–6 Wochen',
    text: (
      <>
        Nach Auftragserteilung werden Module, Wechselrichter, Montagesystem und allfälliger{' '}
        <Link href="/solaranlage-mit-speicher" className="text-[#F97316] hover:underline font-medium">Batteriespeicher</Link>{' '}
        bestellt. Die Lieferzeiten variieren je nach Hersteller und Saison.
      </>
    ),
  },
  {
    n: '4',
    title: 'Montage',
    duration: '1–3 Tage',
    text: 'Das Montageteam installiert die Unterkonstruktion auf dem Dach, befestigt die Module, verlegt die DC-Kabel und installiert den Wechselrichter im Gebäude. Bei grösseren Anlagen dauert die Montage länger.',
  },
  {
    n: '5',
    title: 'Elektrischer Anschluss und Inbetriebnahme',
    duration: '1 Tag',
    text: 'Ein zertifizierter Elektriker schliesst die Anlage ans Hausnetz an und nimmt sie in Betrieb. Die Anlage wird konfiguriert und getestet.',
  },
  {
    n: '6',
    title: 'Anmeldung und Förderung',
    duration: '2–4 Wochen',
    text: (
      <>
        Der Installateur meldet die Anlage beim lokalen Netzbetreiber an und stellt den Antrag für die{' '}
        <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Einmalvergütung (EIV)</Link>{' '}
        bei Pronovo. Die Auszahlung erfolgt einige Monate später.
      </>
    ),
  },
];

const durations = [
  { phase: 'Planung und Offerte', duration: '1–2 Wochen' },
  { phase: 'Bewilligung / Meldung', duration: '1–4 Wochen' },
  { phase: 'Materialbeschaffung', duration: '2–6 Wochen' },
  { phase: 'Montage', duration: '1–3 Tage' },
  { phase: 'Anschluss und Inbetriebnahme', duration: '1 Tag' },
  { phase: 'Anmeldung EIV', duration: '2–4 Wochen' },
  { phase: 'Gesamtdauer ab Auftrag', duration: '4–12 Wochen', highlight: true },
];

const installateurLeistungen = [
  'Analyse des Dachs und Dimensionierung der Anlage',
  'Meldung oder Baugesuch bei der Gemeinde',
  'Beschaffung aller Komponenten',
  'Fachgerechte Montage und elektrischer Anschluss',
  'Inbetriebnahme und Einweisung',
  'Anmeldung beim Netzbetreiber',
  'Antrag für die Einmalvergütung (EIV) bei Pronovo',
];

const hausbesitzerAufgaben = [
  <>Anfrage stellen und <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten vergleichen</Link></>,
  <><Link href="/solaranlage-installieren-schweiz" className="text-[#F97316] hover:underline font-medium">Installateur beauftragen</Link></>,
  'Bei der Montage anwesend sein (empfohlen, aber nicht zwingend)',
  'Anlage in Betrieb nehmen lassen und Einweisung erhalten',
];

export default function PhotovoltaikInstallationSchweizPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solaranlage-installieren-schweiz" className="hover:text-white/70 transition-colors">Installation</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Ablauf der Installation</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Installation &amp; Ablauf
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Wie funktioniert die Installation einer Photovoltaik Anlage in der Schweiz?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Von der ersten Anfrage bis zum ersten selbst produzierten Strom — die Installation einer Photovoltaikanlage in der Schweiz läuft in klar definierten Schritten ab. Wer weiss, was ihn erwartet, kann besser planen und die richtigen Entscheidungen treffen. Diese Seite erklärt den gesamten Prozess Schritt für Schritt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 Tage', sub: 'Montagedauer EFH', note: 'für ein typisches Einfamilienhaus' },
              { val: '4–12 Wochen', sub: 'Vorlaufzeit ab Auftrag', note: 'inkl. Planung und Materialbeschaffung' },
              { val: 'Schlüsselfertig', sub: 'Installateur übernimmt alles', note: 'von Planung bis EIV-Antrag' },
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

        {/* ── Ablauf ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Schritt für Schritt</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Der komplette Ablauf einer Photovoltaik Installation
            </h2>
          </div>
          <div className="space-y-4">
            {phases.map(phase => (
              <div key={phase.n} className="rounded-2xl p-7" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {phase.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-base">Phase {phase.n} — {phase.title}</h3>
                      <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{phase.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dauer Tabelle ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Zeitplan</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wie lange dauert der gesamte Prozess?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Der grösste Zeitfaktor ist oft die Auslastung des Installateurs und die Lieferzeit der Komponenten — besonders in der Hochsaison (Frühling und Sommer). Ein frühzeitiger Auftrag lohnt sich.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Möchten Sie sofort loslegen? Vergleichen Sie jetzt kostenlos{' '}
              <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten von zertifizierten Installateuren</Link>{' '}
              in Ihrer Region.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Phase</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Dauer</th>
                  </tr>
                </thead>
                <tbody>
                  {durations.map((row, i) => (
                    <tr key={row.phase} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.phase}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Installateur & Hausbesitzer ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Leistungen des Installateurs</p>
            <h2 className="text-xl font-bold text-white mb-5">Was macht ein guter Installateur?</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Ein professioneller{' '}
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Anbieter</Link>{' '}
              übernimmt den gesamten Prozess für Sie. PVPro.ch vermittelt nur Installateure, die all diese Schritte zuverlässig übernehmen.
            </p>
            <ul className="space-y-3">
              {installateurLeistungen.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Ihre Aufgaben</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Was muss ich als Hausbesitzer tun?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Eigentlich sehr wenig. Ihre Aufgaben beschränken sich auf:
            </p>
            <ul className="space-y-3">
              {hausbesitzerAufgaben.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">Gut zu wissen:</strong> Den Rest übernimmt der Installateur — von der Bewilligung bis zum EIV-Antrag.
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
            Jetzt Installateur finden und loslegen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Füllen Sie unser Formular in 2 Minuten aus — wir vermitteln Ihnen bis zu 3 zertifizierte Installateure aus Ihrer Region, die den gesamten Prozess für Sie übernehmen.
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
            Zuerst{' '}
            <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten vergleichen</Link>?{' '}
            Oder alle{' '}
            <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Anbieter im Überblick</Link>?
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
              <Link href="/solaranlage-installieren-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Installateur beauftragen
              </Link>
              <Link href="/bewilligungspflicht-solaranlage-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Bewilligung Solaranlage
              </Link>
              <Link href="/foerderungen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderungen EIV
              </Link>
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
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
