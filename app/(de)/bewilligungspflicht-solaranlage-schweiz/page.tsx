import Link from 'next/link';
import { ChevronRight, CheckCircle, AlertCircle, FileText, ArrowRight, Shield, Home, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Bewilligungspflicht Solaranlage Schweiz 2026 – Was Sie wissen müssen | PVPro.ch',
  description: 'Braucht eine Solaranlage in der Schweiz eine Baubewilligung? Wir erklären die Regeln für alle Kantone, wann eine Bewilligung nötig ist und wie PVPro hilft.',
  alternates: {
    canonical: 'https://pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
    languages: {
      'de-CH': 'https://pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
      'fr-CH': 'https://pvpro.ch/fr/autorisation-installation-solaire-suisse',
      'en-CH': 'https://pvpro.ch/en/solar-panel-permit-switzerland',
      'it-CH': 'https://pvpro.ch/it/autorizzazione-impianto-solare-svizzera',
      'x-default': 'https://pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
    },
  },
  openGraph: {
    title: 'Bewilligungspflicht Solaranlage Schweiz 2026 – Was Sie wissen müssen',
    description: 'Braucht eine Solaranlage in der Schweiz eine Baubewilligung? Alle Regeln für Kantone, Meldepflicht und Ausnahmen.',
    url: 'https://pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Brauche ich eine Bewilligung für eine Solaranlage auf dem Dach?',
    answer: 'In den meisten Fällen nein. Dachanlagen, die parallel zum Dach montiert sind und den Dachfirst nicht überragen, sind in der Schweiz generell bewilligungsfrei und unterliegen nur der Meldepflicht.',
  },
  {
    question: 'Was kostet ein Baugesuch für eine Solaranlage?',
    answer: 'Die Kosten variieren je nach Gemeinde und Kanton, liegen aber üblicherweise zwischen 200 und 800 CHF. Für bewilligungsfreie Anlagen fallen keine Kosten an.',
  },
  {
    question: 'Wer meldet die Solaranlage bei der Gemeinde?',
    answer: 'In der Regel übernimmt der zertifizierte Installateur die Meldung. PVPro vermittelt ausschliesslich zertifizierte Unternehmen, die diesen Prozess kennen und routiniert abwickeln.',
  },
  {
    question: 'Gilt die Bewilligungsfreiheit auch für Balkonkraftwerke?',
    answer: 'Balkonkraftwerke (Stecker-Solargeräte) sind in der Schweiz ebenfalls grundsätzlich bewilligungsfrei, unterliegen aber eigenen Regeln bezüglich Leistung und Netzeinspeisung.',
  },
  {
    question: 'Was passiert, wenn ich die Solaranlage ohne Meldung installiere?',
    answer: 'Das kann zu Problemen bei der Förderbeantragung führen und im schlimmsten Fall eine nachträgliche Bewilligungspflicht auslösen. Es empfiehlt sich daher, immer das korrekte Verfahren einzuhalten — Ihr Installateur kümmert sich darum.',
  },
];

const keineBewilligung = [
  'Die Anlage ist gebäudeintegriert oder parallel zum Dach montiert',
  'Sie überragt den Dachfirst nicht',
  'Sie beeinträchtigt das Ortsbild nicht erheblich',
  'Das Gebäude liegt nicht in einer Schutzzone',
];

const mitBewilligung = [
  'Das Gebäude steht unter Denkmalschutz',
  'Das Gebäude liegt in einem ISOS-Ortsbildschutzgebiet',
  'Die Anlage ist eine Freiflächenanlage (z.B. im Garten)',
  'Die Anlage überragt den Dachfirst',
  'Der Kanton hat strengere Regelungen erlassen',
];

const steps = [
  {
    n: '1',
    title: 'Installateur kontaktieren',
    text: 'Ein zertifizierter Installateur prüft Ihre Situation und klärt ab, ob eine Bewilligung erforderlich ist. PVPro vermittelt Sie kostenlos.',
  },
  {
    n: '2',
    title: 'Meldung oder Baugesuch',
    text: 'Je nach Situation reicht der Installateur eine Meldung oder ein Baugesuch bei der Gemeinde ein. Er kennt die lokalen Vorschriften genau.',
  },
  {
    n: '3',
    title: 'Installation',
    text: 'Nach der Freigabe wird die Anlage montiert. Bei bewilligungsfreien Anlagen geschieht dies oft innerhalb weniger Wochen.',
  },
  {
    n: '4',
    title: 'Förderung beantragen',
    text: 'Nach der Installation wird die Einmalvergütung (EIV) bei Pronovo angemeldet — ebenfalls oft durch den Installateur.',
  },
];

export default function BewilligungspflichtPage() {
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
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Bewilligungspflicht Solaranlage</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Shield className="w-3.5 h-3.5" /> Recht &amp; Bewilligung
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Bewilligungspflicht für Solaranlagen in der Schweiz
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              In der Schweiz benötigen Solaranlagen in den meisten Fällen keine Baugenehmigung — aber nicht immer. Ob Sie eine Baubewilligung brauchen, hängt vom Kanton, der Lage des Gebäudes und der Art der Anlage ab. Diese Seite erklärt die aktuellen Regeln klar und verständlich.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Meistens', sub: 'ohne Bewilligung', note: 'für Standardanlagen auf dem Dach' },
              { val: '26', sub: 'Kantone', note: 'mit jeweils eigenen Regelungen' },
              { val: 'Meldepflicht', sub: 'statt Bewilligung', note: 'in den meisten Fällen ausreichend' },
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

        {/* ── Wann keine Bewilligung ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Keine Bewilligung nötig</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Wann braucht eine Solaranlage in der Schweiz keine Bewilligung?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Seit der Revision des <strong>Raumplanungsgesetzes (RPG)</strong> gilt in der Schweiz: Solaranlagen auf Dächern sind grundsätzlich bewilligungsfrei, wenn sie folgende Bedingungen erfüllen:
            </p>
            <ul className="space-y-3 mb-6">
              {keineBewilligung.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>Fazit:</strong> Sind alle diese Punkte erfüllt, benötigen Sie keine Baubewilligung — es genügt eine einfache <strong>Meldung bei der Gemeinde</strong>.
              </p>
            </div>
          </div>

          {/* Visual side */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-3.png"
              alt="Techniker auf Dach mit Solarpanelen – Bewilligungspflicht Schweiz"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Wussten Sie?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                In der Schweiz wurden 2024 über 50'000 neue Solaranlagen installiert — der Grossteil davon bewilligungsfrei. Mit der richtigen Planung und einem erfahrenen Installateur ist der Weg zur eigenen Solaranlage unkompliziert.
              </p>
            </div>
          </div>
        </section>

        {/* ── Wann Bewilligung nötig ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Ausnahmen</p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wann ist dennoch eine Bewilligung nötig?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                In bestimmten Situationen ist trotzdem ein Baugesuch erforderlich — in diesen Fällen müssen Sie <strong>vor der Installation</strong> einen Antrag stellen:
              </p>
              <ul className="space-y-3">
                {mitBewilligung.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-amber-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  In diesen Fällen muss vor der Installation ein Baugesuch eingereicht werden. Ihr Installateur kennt die lokalen Regeln und hilft Ihnen dabei.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Kantonale Unterschiede</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Unterschiede zwischen den Kantonen
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Obwohl das Bundesrecht die Grundlage bildet, haben die Kantone einen gewissen Spielraum. Einige Kantone wie <Link href="/solaranlage-zurich" className="text-[#F97316] hover:underline font-medium">Kanton Zürich</Link> haben eine <strong>Solarpflicht für Neubauten</strong> eingeführt. Andere Kantone haben vereinfachte Meldeverfahren.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { kanton: 'Zürich', regel: 'Solarpflicht für Neubauten ab 2025; Dachanlagen sonst meldepflichtig', badge: 'Solarpflicht' },
                  { kanton: 'Bern', regel: 'Vereinfachtes Meldeverfahren für Standardanlagen', badge: 'Meldepflicht' },
                  { kanton: 'Genf', regel: 'Solarpflicht bei Renovationen grösserer Gebäude', badge: 'Solarpflicht' },
                  { kanton: 'Tessin', regel: 'Strenge Regeln in ortsbildgeschützten Gebieten', badge: 'Ortsbild' },
                  { kanton: 'Alle übrigen', regel: 'Bundes-RPG gilt: bewilligungsfrei bei Standardanlagen', badge: 'Standard' },
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
                  <strong>Wichtig:</strong> Informieren Sie sich immer auch bei Ihrer <strong>Gemeinde</strong>, da die Regeln kommunal weiter variieren können.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Was ist Meldepflicht ── */}
        <section className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Einfacheres Verfahren</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Was ist die Meldepflicht?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Die Meldepflicht ist <strong>kein Bewilligungsverfahren</strong> — sie ist deutlich einfacher. Sie informieren die Gemeinde vor der Installation, dass Sie eine Solaranlage errichten möchten. Die Gemeinde hat dann eine kurze Frist, um zu reagieren.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Erhalten Sie <strong>keine Antwort</strong>, gilt die Anlage als genehmigt. In der Praxis übernimmt in den meisten Fällen der Installateur die Meldung für Sie.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Das Verfahren ist unkompliziert und dauert in der Regel nur wenige Tage bis zwei Wochen. Im Gegensatz zum Baugesuch entstehen dabei meist <strong>keine Kosten</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { step: '1', title: 'Meldung einreichen', text: 'Installateur reicht die Meldung bei der Gemeinde ein — oft digital.', color: 'bg-[#F97316]' },
                { step: '2', title: 'Wartefrist (10–30 Tage)', text: 'Die Gemeinde prüft die Meldung. Keine Antwort = Genehmigt.', color: 'bg-blue-500' },
                { step: '3', title: 'Anlage montieren', text: 'Nach der Frist oder ausdrücklicher Genehmigung beginnt die Installation.', color: 'bg-green-500' },
                { step: '4', title: 'EIV beantragen', text: 'Die Einmalvergütung wird bei Pronovo registriert — oft durch den Installateur.', color: 'bg-purple-500' },
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">So läuft es ab</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Schritt für Schritt: Was müssen Sie tun?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Von der ersten Anfrage bis zur Förderung — in vier Schritten zur eigenen Solaranlage. Ihr Installateur begleitet Sie durch den gesamten Prozess.
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

          {/* Foerderung link */}
          <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-start gap-4">
            <FileText className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-1">
                Alles zur Einmalvergütung (EIV)
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Die <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Einmalvergütung (EIV)</Link> des Bundes deckt einen erheblichen Teil Ihrer Investitionskosten. Erfahren Sie, wie viel Sie erhalten und wie Sie die Förderung beantragen.
              </p>
            </div>
          </div>
        </section>

        {/* ── Balkonkraftwerk note ── */}
        <section className="bg-[#0f1f3d] rounded-3xl p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Sonderfall</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                Balkonkraftwerke: eigene Regeln
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                <Link href="/blog/balkonkraftwerk-schweiz" className="text-[#F97316] hover:underline font-medium">Balkonkraftwerke</Link> (Stecker-Solargeräte) unterliegen in der Schweiz ebenfalls grundsätzlich der Bewilligungsfreiheit. Es gelten aber eigene Regeln:
              </p>
              <ul className="space-y-2">
                {[
                  'Maximale Einspeiseleistung: 600 Watt ins Hausnetz',
                  'Keine professionelle Elektroinstallation nötig',
                  'Meldung beim Netzbetreiber empfohlen',
                  'In Eigentumswohnungen: Zustimmung der Stockwerkeigentümergemeinschaft',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-white/60 text-sm mb-4">Mehr zu Balkonkraftwerken in der Schweiz</p>
              <Link
                href="/blog/balkonkraftwerk-schweiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity border border-white/20"
              >
                Balkonkraftwerk Ratgeber <ArrowRight className="w-4 h-4" />
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
            Jetzt Offerte anfragen — inkl. Bewilligungsprüfung
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Unsere <Link href="/anfrage" className="text-[#F97316] hover:underline font-medium">zertifizierten Installateure</Link> kennen die Bewilligungsregeln in Ihrem Kanton und kümmern sich um alles — von der Meldung bis zur Förderung.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern →
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Fragen zur Bewilligungspflicht
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
            <p className="text-gray-500 text-sm mb-4">Weitere Informationen rund um Solaranlagen:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/solaranlage-kosten"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Kosten Solaranlage
              </Link>
              <Link
                href="/foerderungen"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Förderungen &amp; EIV
              </Link>
              <Link
                href="/wie-funktioniert"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Wie funktioniert Solar
              </Link>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
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
