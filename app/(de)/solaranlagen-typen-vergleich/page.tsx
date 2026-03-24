import Link from 'next/link';
import { ChevronRight, ArrowRight, Zap, CheckCircle, XCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solaranlagen Typen Vergleich Schweiz 2026 – Welche passt zu mir? | PVPro.ch',
  description: 'Vergleich der verschiedenen Solaranlagen Typen in der Schweiz: monokristallin, polykristallin, Dünnschicht, bifazial. Was sind die Unterschiede und welche lohnt sich?',
  alternates: {
    canonical: 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
      'fr-CH': 'https://www.pvpro.ch/fr/comparaison-types-panneaux-solaires',
      'en': 'https://www.pvpro.ch/en/solar-panel-types-comparison',
      'it-CH': 'https://www.pvpro.ch/it/confronto-tipi-impianti-solari',
      'x-default': 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
    },
  },
  openGraph: {
    title: 'Solaranlagen Typen Vergleich Schweiz 2026 – Welche passt zu mir?',
    description: 'Monokristallin, polykristallin, Dünnschicht, bifazial — alle Typen im direkten Vergleich für die Schweiz.',
    url: 'https://www.pvpro.ch/solaranlagen-typen-vergleich',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Welche Solarmodule sind in der Schweiz am beliebtesten?',
    answer: 'Monokristalline Module sind in der Schweiz mit Abstand am häufigsten verbaut. Sie bieten den besten Wirkungsgrad auch bei bewölktem Himmel und sind ideal für das Schweizer Klima.',
  },
  {
    question: 'Was ist der Unterschied zwischen monokristallin und polykristallin?',
    answer: 'Monokristalline Module haben einen höheren Wirkungsgrad und sind kompakter, kosten aber etwas mehr. Polykristalline Module sind günstiger, benötigen aber mehr Fläche für die gleiche Leistung.',
  },
  {
    question: 'Lohnen sich bifaziale Module für ein normales Einfamilienhaus?',
    answer: 'Auf einem normalen Steildach ist der Mehrertrag durch die Rückseite gering. Bifaziale Module lohnen sich vor allem auf Flachdächern oder in Schneeregionen.',
  },
  {
    question: 'Welche Module halten am längsten?',
    answer: 'Alle hochwertigen kristallinen Module haben eine Leistungsgarantie von 25–30 Jahren. Die Wahl des Herstellers ist oft wichtiger als die Technologie.',
  },
  {
    question: 'Kann ich verschiedene Modultypen auf demselben Dach kombinieren?',
    answer: 'Technisch ist das möglich, aber in der Praxis nicht empfehlenswert. Unterschiedliche Module haben unterschiedliche elektrische Eigenschaften, was die Systemleistung reduzieren kann.',
  },
  {
    question: 'Welcher Modultyp passt am besten zum Schweizer Klima?',
    answer: 'Monokristalline Module sind die beste Wahl für das Schweizer Klima — sie liefern auch bei Bewölkung und diffusem Licht gute Leistung und sind robust gegenüber Schnee und Kälte.',
  },
];

const vergleichTabelle = [
  { typ: 'Monokristallin', wirkungsgrad: '18–22%', kosten: 'Mittel–Hoch', ideal: 'Kleine Dachflächen, hohe Effizienz', color: 'bg-orange-50 border-orange-200' },
  { typ: 'Polykristallin', wirkungsgrad: '15–17%', kosten: 'Günstig', ideal: 'Grosse Dachflächen, Budget-Option', color: 'bg-blue-50 border-blue-200' },
  { typ: 'Dünnschicht', wirkungsgrad: '10–13%', kosten: 'Günstig', ideal: 'Flachdächer, spezielle Anwendungen', color: 'bg-gray-50 border-gray-200' },
  { typ: 'Bifazial', wirkungsgrad: '20–24%', kosten: 'Hoch', ideal: 'Schneeregionen, Flachdächer', color: 'bg-green-50 border-green-200' },
];

const situationsTabelle = [
  { situation: 'Kleines Dach, maximale Leistung', empfehlung: 'Monokristallin' },
  { situation: 'Grosses Dach, kleines Budget', empfehlung: 'Polykristallin' },
  { situation: 'Flachdach, Schneeregion', empfehlung: 'Bifazial' },
  { situation: 'Fassade oder unkonventionelles Dach', empfehlung: 'Dünnschicht' },
  { situation: 'Standard Einfamilienhaus Schweiz', empfehlung: 'Monokristallin', highlight: true },
];

type ModulTyp = {
  name: string;
  badge: string;
  badgeColor: string;
  intro: string;
  vorteile: string[];
  nachteile: string[];
  fazit: string;
};

const modulTypen: ModulTyp[] = [
  {
    name: 'Monokristalline Module — der Standard in der Schweiz',
    badge: 'Empfohlen für die Schweiz',
    badgeColor: 'bg-orange-100 text-orange-700',
    intro: 'Monokristalline Module sind heute die mit Abstand häufigste Wahl für Schweizer Einfamilienhäuser. Sie bestehen aus einem einzigen Siliziumkristall und haben den höchsten Wirkungsgrad aller gängigen Technologien.',
    vorteile: [
      'Höchster Wirkungsgrad (18–22%)',
      'Beste Leistung bei diffusem Licht und Bewölkung',
      'Kompakt — ideal für kleinere Dachflächen',
      'Lange Lebensdauer und hohe Zuverlässigkeit',
      'Ästhetisch ansprechend (einheitlich schwarz)',
    ],
    nachteile: [
      'Höhere Kosten als polykristalline Module',
      'Leichte Leistungsminderung bei sehr hohen Temperaturen',
    ],
    fazit: 'Für die meisten Schweizer Haushalte die beste Wahl — besonders im bewölkten Mittelland.',
  },
  {
    name: 'Polykristalline Module — die Budget-Option',
    badge: 'Budget & grosse Flächen',
    badgeColor: 'bg-blue-100 text-blue-700',
    intro: 'Polykristalline Module bestehen aus mehreren Siliziumkristallen und haben einen etwas niedrigeren Wirkungsgrad als monokristalline. Sie werden zunehmend durch leistungsstärkere Alternativen verdrängt.',
    vorteile: [
      'Günstiger in der Anschaffung',
      'Bewährt und zuverlässig',
      'Gut für grosse Dachflächen geeignet',
    ],
    nachteile: [
      'Niedrigerer Wirkungsgrad (15–17%)',
      'Grössere Fläche für gleiche Leistung nötig',
      'Erkennbar an blau-schimmernder Optik',
    ],
    fazit: 'Interessant für grosse Dachflächen mit kleinem Budget. In der Schweiz immer weniger verbreitet.',
  },
  {
    name: 'Dünnschichtmodule — für spezielle Anwendungen',
    badge: 'Spezialanwendungen',
    badgeColor: 'bg-gray-100 text-gray-700',
    intro: 'Dünnschichtmodule werden auf eine dünne Trägerschicht aufgedampft und sind flexibler als kristalline Module. Sie eignen sich besonders für Flachdächer und unkonventionelle Anwendungen.',
    vorteile: [
      'Leicht und flexibel',
      'Günstig in der Herstellung',
      'Funktionieren gut bei hohen Temperaturen',
    ],
    nachteile: [
      'Niedrigster Wirkungsgrad (10–13%)',
      'Benötigen deutlich mehr Fläche',
      'Kürzere Lebensdauer als kristalline Module',
    ],
    fazit: 'Für Standardanlagen in der Schweiz kaum empfehlenswert. Interessant für spezielle Anwendungen wie Fassadenintegration.',
  },
  {
    name: 'Bifaziale Module — mehr Strom durch Rückseite',
    badge: 'Schnee & Flachdächer',
    badgeColor: 'bg-green-100 text-green-700',
    intro: 'Bifaziale Module produzieren Strom von beiden Seiten — vorne durch direktes Sonnenlicht, hinten durch reflektiertes Licht. Bei Schnee oder hellen Dachbelägen ist der Mehrertrag besonders hoch.',
    vorteile: [
      'Höchster Ertrag unter den richtigen Bedingungen',
      'Besonders effektiv bei Schnee (reflektiert Licht)',
      'Ideal für Flachdächer mit Abstand zur Dachfläche',
    ],
    nachteile: [
      'Teurer als monokristalline Module',
      'Mehrertrag hängt stark von der Aufstellung ab',
      'Nicht immer sinnvoll auf normalen Steildächern',
    ],
    fazit: 'Interessant für Regionen mit viel Schnee und für Flachdächer. Für normale Steildächer in der Schweiz meist kein signifikanter Vorteil.',
  },
];

export default function SolaranlagenTypenVergleichPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/solaranlage-installieren-schweiz" className="hover:text-white/70 transition-colors">Solaranlage</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Typen Vergleich</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Technik &amp; Vergleich
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solaranlagen Typen im Vergleich — welche passt zu Ihrer Situation?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nicht alle Solaranlagen sind gleich. Je nach Dachtyp, Budget und Ziel gibt es verschiedene Technologien und Konfigurationen. Diese Seite erklärt die wichtigsten Typen verständlich — ohne technischen Fachjargon — damit Sie eine informierte Entscheidung treffen können.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '22%', sub: 'maximaler Wirkungsgrad monokristallin', note: 'bester Wert unter Standardbedingungen' },
              { val: '4 Typen', sub: 'im direkten Vergleich', note: 'mono, poly, Dünnschicht, bifazial' },
              { val: '25–30 Jahre', sub: 'Lebensdauer aller Typen', note: 'mit Leistungsgarantie der Hersteller' },
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

        {/* ── Vergleichstabelle ── */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Überblick</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Die wichtigsten Solaranlagen Typen im Überblick
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Typ</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Wirkungsgrad</th>
                  <th className="text-center px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Kosten</th>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider hidden sm:table-cell">Ideal für</th>
                </tr>
              </thead>
              <tbody>
                {vergleichTabelle.map((row, i) => (
                  <tr key={row.typ} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-bold text-gray-900 text-sm">{row.typ}</td>
                    <td className="px-5 py-4 text-center font-bold text-[#F97316] text-sm">{row.wirkungsgrad}</td>
                    <td className="px-5 py-4 text-center text-gray-700 text-sm">{row.kosten}</td>
                    <td className="px-5 py-4 text-gray-600 text-sm hidden sm:table-cell">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Modul-Typen Detailkarten ── */}
        <section>
          <div className="mb-8">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Detailvergleich</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Die vier Typen im Detail</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modulTypen.map((m, i) => (
              <div key={i} className="rounded-3xl p-8 border border-gray-200 bg-white shadow-sm">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${m.badgeColor}`}>{m.badge}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{m.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {i === 2
                    ? <>Dünnschichtmodule werden auf eine dünne Trägerschicht aufgedampft und sind flexibler als kristalline Module. Sie eignen sich besonders für{' '}
                      <Link href="/solaranlage-mehrfamilienhaus" className="text-[#F97316] hover:underline font-medium">Flachdächer</Link>{' '}
                      und unkonventionelle Anwendungen.</>
                    : i === 3
                    ? <>Bifaziale Module produzieren Strom von beiden Seiten — vorne durch direktes Sonnenlicht, hinten durch reflektiertes Licht. Bei Schnee oder hellen Dachbelägen ist der Mehrertrag besonders hoch. Ideal für{' '}
                      <Link href="/solaranlage-mehrfamilienhaus" className="text-[#F97316] hover:underline font-medium">Flachdächer</Link>.</>
                    : m.intro}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div>
                    <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-2">Vorteile</p>
                    <ul className="space-y-1.5">
                      {m.vorteile.map((v, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Nachteile</p>
                    <ul className="space-y-1.5">
                      {m.nachteile.map((n, j) => (
                        <li key={j} className="flex items-start gap-1.5 text-sm text-gray-700">
                          <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                  <p className="text-sm text-gray-700"><span className="font-bold text-orange-700">Fazit: </span>{m.fazit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Situations-Tabelle ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Entscheidungshilfe</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Welcher Typ ist der richtige für mich?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Wahl hängt von Ihrer konkreten Situation ab. Für ein{' '}
              <Link href="/solaranlage-einfamilienhaus" className="text-[#F97316] hover:underline font-medium">Einfamilienhaus</Link>{' '}
              in der Schweiz ist monokristallin fast immer die beste Wahl — besonders im{' '}
              <Link href="/photovoltaik-schweizer-klima" className="text-[#F97316] hover:underline font-medium">Schweizer Klima</Link>{' '}
              mit viel diffusem Licht.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In der Praxis empfiehlt ein zertifizierter{' '}
              <Link href="/solaranlage-installieren-schweiz" className="text-[#F97316] hover:underline font-medium">Installateur</Link>{' '}
              den richtigen Modultyp nach Besichtigung Ihres Dachs. PVPro.ch vermittelt{' '}
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Anbieter</Link>,
              die alle Technologien kennen und neutral beraten.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Situation</th>
                  <th className="text-right px-5 py-4 text-white/80 font-semibold text-xs uppercase tracking-wider">Empfehlung</th>
                </tr>
              </thead>
              <tbody>
                {situationsTabelle.map((row, i) => (
                  <tr key={row.situation} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className={`px-5 py-3.5 text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.situation}</td>
                    <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.empfehlung}</td>
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
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Welcher Typ passt zu Ihrem Dach?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Ein zertifizierter Installateur aus Ihrer Region analysiert Ihr Dach und empfiehlt den optimalen Modultyp für Ihre Situation — kostenlos und unverbindlich.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            Zuerst{' '}
            <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">Offerten vergleichen</Link>?{' '}
            Mehr zu den{' '}
            <Link href="/solaranlage-kosten" className="text-[#F97316] hover:underline font-medium">Kosten einer Solaranlage</Link>.
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
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
              </Link>
              <Link href="/photovoltaik-schweizer-klima" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Photovoltaik im Schweizer Klima
              </Link>
              <Link href="/solaranlage-einfamilienhaus" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage Einfamilienhaus
              </Link>
              <Link href="/solaranlage-mehrfamilienhaus" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage Mehrfamilienhaus
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
