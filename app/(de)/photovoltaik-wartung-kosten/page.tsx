import Link from 'next/link';
import { ChevronRight, ArrowRight, Shield, Wrench, CheckCircle, AlertCircle } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Photovoltaik Wartung Kosten Schweiz 2026 – Was kostet die Wartung? | PVPro.ch',
  description: 'Was kostet die Wartung einer Photovoltaikanlage in der Schweiz? Reinigung, Inspektion, Reparatur — alle Kosten im Überblick. Jetzt informieren auf PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/entretien-photovoltaique-couts',
      'en': 'https://www.pvpro.ch/en/solar-panel-maintenance-costs',
      'it-CH': 'https://www.pvpro.ch/it/manutenzione-fotovoltaico-costi',
      'x-default': 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
    },
  },
  openGraph: {
    title: 'Photovoltaik Wartung Kosten Schweiz 2026 – Was kostet die Wartung?',
    description: 'Reinigung, Inspektion, Reparatur — alle Wartungskosten für Photovoltaik in der Schweiz im Überblick.',
    url: 'https://www.pvpro.ch/photovoltaik-wartung-kosten',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Muss ich meine Solaranlage regelmässig reinigen?',
    answer: 'In der Schweiz reicht in den meisten Fällen der Regen. Bei starker Vogelbelastung oder in staubigen Regionen empfiehlt sich eine manuelle Reinigung einmal pro Jahr.',
  },
  {
    question: 'Was kostet ein Wartungsvertrag für eine Solaranlage?',
    answer: 'Viele Installateure bieten Wartungsverträge für 150–300 CHF pro Jahr an, die eine jährliche Inspektion und kleinere Reparaturen umfassen.',
  },
  {
    question: 'Wie lange hält ein Wechselrichter?',
    answer: 'Wechselrichter halten typischerweise 10–15 Jahre. Ein Austausch kostet je nach Modell zwischen 1\'500 und 3\'000 CHF.',
  },
  {
    question: 'Verliere ich die Garantie, wenn ich die Wartung selbst mache?',
    answer: 'Die Sichtprüfung und Reinigung der Module können Sie selbst übernehmen, ohne die Garantie zu verlieren. Elektrische Arbeiten müssen jedoch von einem zertifizierten Fachbetrieb durchgeführt werden.',
  },
  {
    question: 'Wie erkenne ich, ob meine Anlage nicht optimal produziert?',
    answer: 'Über das digitale Monitoring des Wechselrichters können Sie die tägliche Produktion verfolgen. Weicht die Produktion ohne ersichtlichen Grund deutlich vom Vorjahr ab, sollten Sie eine Inspektion anfordern.',
  },
  {
    question: 'Wer kann die Wartung meiner Solaranlage übernehmen?',
    answer: 'Zertifizierte Schweizer Installateure bieten Wartungsservices an. PVPro.ch vermittelt auf Anfrage auch Servicepartner für bestehende Anlagen.',
  },
];

const wartungsLeistungen = [
  {
    title: 'Sichtprüfung der Module',
    text: 'Einmal pro Jahr sollten die Module auf Verschmutzung, Risse, Verfärbungen oder Schäden geprüft werden. Vogelkot, Laub und Moos können die Produktion merklich reduzieren.',
  },
  {
    title: 'Reinigung der Module',
    text: 'In der Schweiz reicht meist der Regen, um die Module sauber zu halten. In staubigen Regionen oder bei starker Vogelbelastung kann eine manuelle Reinigung sinnvoll sein.',
  },
  {
    title: 'Inspektion des Wechselrichters',
    text: (
      <>
        Der{' '}
        <Link href="/wie-funktioniert" className="text-[#F97316] hover:underline font-medium">Wechselrichter</Link>{' '}
        ist das Herzstück der Anlage. Er sollte jährlich auf Fehler, Überhitzung und korrekte Funktion geprüft werden.
      </>
    ),
  },
  {
    title: 'Kontrolle der elektrischen Verbindungen',
    text: 'Kabelverbindungen, Stecker und Anschlüsse können sich mit der Zeit lockern. Eine regelmässige Prüfung verhindert Ausfälle und Brandrisiken.',
  },
  {
    title: 'Monitoring der Produktion',
    text: 'Moderne Anlagen haben ein digitales Monitoring. Wer die Produktionsdaten regelmässig verfolgt, erkennt Abweichungen sofort.',
  },
  {
    title: 'Dachkontrolle',
    text: 'Bei der Jahresinspektion sollte auch das Dach rund um die Montage geprüft werden — auf Dichtigkeit und Stabilität der Unterkonstruktion.',
  },
];

const kostenTabelle = [
  { leistung: 'Jährliche Inspektion (ohne Reinigung)', kosten: '100–200 CHF' },
  { leistung: 'Modulreinigung', kosten: '100–300 CHF je nach Grösse' },
  { leistung: 'Wechselrichter-Austausch (nach 10–15 Jahren)', kosten: "1'500–3'000 CHF" },
  { leistung: 'Reparatur Kleinschäden', kosten: '200–500 CHF' },
  { leistung: 'Jährliche Gesamtkosten (Durchschnitt)', kosten: '150–300 CHF/Jahr', highlight: true },
];

const haeufigkeitenTabelle = [
  { massnahme: 'Visuelle Kontrolle', haeufigkeit: '2x pro Jahr (empfohlen)' },
  { massnahme: 'Professionelle Inspektion', haeufigkeit: '1x pro Jahr' },
  { massnahme: 'Modulreinigung', haeufigkeit: 'Nach Bedarf, mind. 1x pro Jahr' },
  { massnahme: 'Wechselrichter prüfen', haeufigkeit: '1x pro Jahr' },
  { massnahme: 'Elektrische Kontrolle', haeufigkeit: 'Alle 2–3 Jahre' },
  { massnahme: 'Wechselrichter ersetzen', haeufigkeit: 'Nach 10–15 Jahren' },
];

const garantien = [
  { komp: 'Module', text: '25–30 Jahre Leistungsgarantie (mind. 80% der Nennleistung)' },
  { komp: 'Wechselrichter', text: '5–12 Jahre Herstellergarantie, verlängerbar' },
  { komp: 'Montage', text: 'Abhängig vom Installateur, typisch 5–10 Jahre' },
];

export default function PhotovoltaikWartungKostenPage() {
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
            <span className="text-white/70">Wartung &amp; Kosten</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Wartung &amp; Betrieb
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Wartung einer Photovoltaikanlage in der Schweiz — Kosten und Ablauf
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Eine Photovoltaikanlage ist wartungsarm — aber nicht wartungsfrei. Wer seine Anlage regelmässig kontrolliert und pflegt, sichert die volle Leistung über die gesamte Lebensdauer von 25–30 Jahren. Diese Seite erklärt, was bei der Wartung anfällt, was es kostet und wie oft man die Anlage kontrollieren sollte.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '150–300 CHF', sub: 'typische Wartungskosten pro Jahr', note: 'inkl. Inspektion und kleinere Reinigung' },
              { val: '1x pro Jahr', sub: 'empfohlene Inspektion', note: 'professionell durch Fachbetrieb' },
              { val: '25–30 Jahre', sub: 'Lebensdauer bei guter Pflege', note: 'mit Leistungsgarantie der Hersteller' },
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

        {/* ── Warum Wartung ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Warum es sich lohnt</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Warum ist Wartung wichtig?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Eine vernachlässigte Anlage produziert weniger Strom — oft ohne dass der Besitzer es merkt. Verschmutzte Module, lockere Verbindungen oder ein alternder{' '}
              <Link href="/wie-funktioniert" className="text-[#F97316] hover:underline font-medium">Wechselrichter</Link>{' '}
              können die Produktion um 10–20% reduzieren.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Regelmässige Wartung schützt Ihre Investition und stellt sicher, dass die Anlage immer auf dem optimalen Niveau läuft — über die gesamte Lebensdauer von 25–30 Jahren.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <AlertCircle className="w-5 h-5" />, label: 'Ungewartete Anlage', val: '−10–20% Ertrag', color: 'bg-red-50 border-red-200 text-red-700' },
              { icon: <CheckCircle className="w-5 h-5" />, label: 'Gewartete Anlage', val: '100% Leistung', color: 'bg-green-50 border-green-200 text-green-700' },
              { icon: <Shield className="w-5 h-5" />, label: 'Garantieschutz', val: '25–30 Jahre', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { icon: <Wrench className="w-5 h-5" />, label: 'Wartungskosten', val: 'ab 150 CHF/Jahr', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            ].map(item => (
              <div key={item.label} className={`rounded-2xl p-5 border ${item.color} flex flex-col items-center text-center gap-2`}>
                {item.icon}
                <p className="text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                <p className="font-bold text-sm">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Was umfasst die Wartung ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Leistungsübersicht</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Was umfasst die Wartung einer Solaranlage?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {wartungsLeistungen.map((w, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{w.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Kosten & Häufigkeiten Tabellen ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Preisübersicht</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
              Was kostet die Wartung in der Schweiz?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Über die gesamte Lebensdauer von 25 Jahren entspricht das Wartungskosten von ca. 4'000–7'500 CHF — ein kleiner Betrag im Vergleich zur Gesamtinvestition. Mehr zu den{' '}
              <Link href="/solaranlage-kosten" className="text-[#F97316] hover:underline font-medium">Gesamtkosten einer Solaranlage</Link>.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Leistung</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Kosten</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabelle.map((row, i) => (
                    <tr key={row.leistung} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'} text-sm`}>{row.leistung}</td>
                      <td className={`px-5 py-3.5 text-right font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.kosten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Wartungsintervalle</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
              Wie oft sollte eine Solaranlage gewartet werden?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Für eine vollständige{' '}
              <Link href="/photovoltaik-komplettloesung-schweiz" className="text-[#F97316] hover:underline font-medium">Komplettlösung</Link>{' '}
              mit Speicher und Wärmepumpe gelten dieselben Intervalle — der Installateur übernimmt die Koordination.
            </p>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Massnahme</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Häufigkeit</th>
                  </tr>
                </thead>
                <tbody>
                  {haeufigkeitenTabelle.map((row, i) => (
                    <tr key={row.massnahme} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3.5 text-gray-700 text-sm">{row.massnahme}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-gray-900 text-sm">{row.haeufigkeit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Selbst & Garantien ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Eigenleistung</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Kann ich die Wartung selbst machen?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Die Sichtprüfung und einfache Reinigung kann der Hausbesitzer selbst übernehmen. Für alles Elektrische — Verbindungen,{' '}
              <Link href="/wie-funktioniert" className="text-[#F97316] hover:underline font-medium">Wechselrichter</Link>,
              Anschlüsse — muss zwingend ein zertifizierter{' '}
              <Link href="/solaranlage-installieren-schweiz" className="text-[#F97316] hover:underline font-medium">Fachbetrieb</Link>{' '}
              beauftragt werden.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">Wichtig:</strong> Arbeiten auf dem Dach sollten aus Sicherheitsgründen immer von Profis durchgeführt werden.
              </p>
            </div>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Garantien</p>
            <h2 className="text-xl font-bold text-white mb-5">
              Welche{' '}
              <Link href="/solaranlage-kosten" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Garantien</Link>{' '}
              gibt es auf eine Solaranlage?
            </h2>
            <ul className="space-y-4">
              {garantien.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{g.komp}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{g.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-5">
              Ein guter{' '}
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Anbieter</Link>{' '}
              erklärt Ihnen alle Garantien transparent vor dem Kauf.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jetzt Wartungsanfrage stellen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Haben Sie eine bestehende Anlage, die gewartet werden muss? Oder planen Sie eine neue Anlage und möchten gleich einen Wartungsvertrag abschliessen? Wir vermitteln Ihnen den richtigen Partner.
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
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
              </Link>
              <Link href="/wie-funktioniert" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Wie funktioniert eine Solaranlage?
              </Link>
              <Link href="/solaranlage-mit-speicher" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage mit Speicher
              </Link>
              <Link href="/photovoltaik-komplettloesung-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Komplettlösung
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
