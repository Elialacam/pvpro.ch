import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, Zap, Battery, Thermometer, Car, Settings } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Photovoltaik Komplettlösung Schweiz 2026 – Alles aus einer Hand | PVPro.ch',
  description: 'Welche Schweizer Firmen bieten Komplettlösungen für Photovoltaik Anlagen an? Module, Speicher, Wärmepumpe und Installation aus einer Hand. Jetzt vergleichen mit PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/photovoltaik-komplettloesung-schweiz',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-komplettloesung-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/solution-complete-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/complete-solar-solution-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/soluzione-completa-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/photovoltaik-komplettloesung-schweiz',
    },
  },
  openGraph: {
    title: 'Photovoltaik Komplettlösung Schweiz 2026 – Alles aus einer Hand',
    description: 'Module, Speicher, Wärmepumpe und Installation aus einer Hand — Komplettlösungen für Photovoltaik in der Schweiz.',
    url: 'https://www.pvpro.ch/photovoltaik-komplettloesung-schweiz',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Lohnt sich eine Komplettlösung mit Wärmepumpe und Solaranlage?',
    answer: 'Ja, in den meisten Fällen. Wer seine Wärmepumpe mit selbst produziertem Solarstrom betreibt, reduziert die Heizkosten erheblich und maximiert den Eigenverbrauch. Die Amortisationszeit verkürzt sich deutlich.',
  },
  {
    question: 'Kann ich eine Komplettlösung auch schrittweise aufbauen?',
    answer: 'Ja. Viele Hausbesitzer starten mit der Solaranlage und fügen später Batteriespeicher, Wallbox oder Wärmepumpe hinzu. Wichtig ist, dass die Anlage von Anfang an entsprechend dimensioniert wird.',
  },
  {
    question: 'Welche Förderungen gibt es für Komplettlösungen?',
    answer: 'Für jede Komponente gibt es separate Förderungen — EIV für die Solaranlage, kantonale Beiträge für die Wärmepumpe, und weitere Programme je nach Kanton. Ein erfahrener Installateur kennt alle relevanten Fördermöglichkeiten.',
  },
  {
    question: 'Wie finde ich einen Anbieter für Komplettlösungen in meiner Region?',
    answer: 'PVPro.ch vermittelt kostenlos zertifizierte Installateure, die Komplettlösungen anbieten. Einfach Formular ausfüllen und bis zu 3 Offerten erhalten.',
  },
  {
    question: 'Kann ich meine bestehende Solaranlage um einen Speicher oder eine Wallbox erweitern?',
    answer: 'Ja, in den meisten Fällen ist eine Erweiterung möglich. Ein zertifizierter Installateur prüft die Kompatibilität und erstellt eine Offerte für die Erweiterung.',
  },
];

const komponenten = [
  {
    icon: <Sun className="w-6 h-6 text-[#F97316]" />,
    title: 'Photovoltaikanlage',
    text: 'Die Basis jeder Komplettlösung. Produziert Strom aus Sonnenenergie für den Eigenverbrauch und die Einspeisung ins Netz.',
  },
  {
    icon: <Battery className="w-6 h-6 text-[#F97316]" />,
    title: 'Batteriespeicher',
    text: (
      <>
        Speichert überschüssigen Solarstrom für die Nutzung abends und nachts. Erhöht den{' '}
        <Link href="/blog/eigenverbrauch-optimieren-solar" className="text-[#F97316] hover:underline font-medium">Eigenverbrauch</Link>{' '}
        von ca. 30% auf bis zu 70%.{' '}
        <Link href="/solaranlage-mit-speicher" className="text-[#F97316] hover:underline font-medium">Mehr zum Batteriespeicher</Link>.
      </>
    ),
  },
  {
    icon: <Thermometer className="w-6 h-6 text-[#F97316]" />,
    title: 'Wärmepumpe',
    text: 'Nutzt den selbst produzierten Solarstrom für Heizung und Warmwasser. Eine der effektivsten Möglichkeiten, den Eigenverbrauch zu maximieren.',
  },
  {
    icon: <Car className="w-6 h-6 text-[#F97316]" />,
    title: 'Elektroauto-Ladestation (Wallbox)',
    text: 'Lädt das Elektroauto direkt mit Solarstrom — besonders wirtschaftlich und nachhaltig.',
  },
  {
    icon: <Settings className="w-6 h-6 text-[#F97316]" />,
    title: 'Energiemanagementsystem',
    text: 'Steuert automatisch, wann welche Energie wohin fliesst — für maximale Effizienz ohne manuellen Aufwand.',
  },
];

const kostenTabelle = [
  { komponente: 'Photovoltaikanlage 10 kWp', kosten: "22'000 – 30'000 CHF" },
  { komponente: 'Batteriespeicher 10 kWh', kosten: "7'000 – 10'000 CHF" },
  { komponente: 'Wärmepumpe', kosten: "15'000 – 25'000 CHF" },
  { komponente: 'Wallbox (Ladestation)', kosten: "1'500 – 3'000 CHF" },
  { komponente: 'Energiemanagementsystem', kosten: "1'000 – 3'000 CHF" },
  { komponente: 'Gesamtpaket', kosten: "ca. 40'000 – 70'000 CHF", highlight: true },
];

const vorteile = [
  'Optimale Abstimmung — alle Komponenten sind aufeinander abgestimmt und kommunizieren miteinander',
  'Ein Ansprechpartner — bei Fragen oder Problemen gibt es nur eine Anlaufstelle',
  'Bessere Preise — Paketpreise sind oft günstiger als Einzelkäufe',
  'Einfachere Förderbeantragung — ein Installateur kümmert sich um alle Förderanträge',
  'Garantien aus einer Hand — keine Diskussion zwischen verschiedenen Anbietern',
];

const pruefpunkte = [
  'Hat der Anbieter Erfahrung mit allen Komponenten — nicht nur mit Modulen?',
  'Bietet er ein integriertes Energiemanagementsystem an?',
  'Kann er die Wärmepumpe und die Wallbox selbst installieren oder nur vermitteln?',
  'Gibt es Referenzprojekte mit vergleichbaren Komplettlösungen?',
  'Sind alle Förderanträge im Service inbegriffen?',
];

export default function PhotovoltaikKomplettloesungSchweizPage() {
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
            <span className="text-white/70">Komplettlösung</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Komplettlösungen &amp; Anbieter
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Photovoltaik Komplettlösung in der Schweiz — alles aus einer Hand
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Immer mehr Schweizer Hausbesitzer wollen nicht nur eine Solaranlage — sie wollen eine vollständige Energielösung: Photovoltaik,{' '}
              <Link href="/solaranlage-mit-speicher" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Batteriespeicher</Link>,
              Wärmepumpe und Elektroauto-Ladestation, alles koordiniert von einem einzigen Anbieter. Diese Seite erklärt, was eine Komplettlösung umfasst, was sie{' '}
              <Link href="/solaranlage-kosten" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">kostet</Link>{' '}
              und wie Sie den richtigen Anbieter finden.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Bis zu 80%', sub: 'Eigenverbrauch mit Komplettlösung', note: 'dank optimiertem Energiemanagement' },
              { val: '1 Anbieter', sub: 'für alles zuständig', note: 'von Planung bis Inbetriebnahme' },
              { val: '500+', sub: 'geprüfte Partner in der Schweiz', note: 'zertifizierte Installateure auf PVPro.ch' },
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

        {/* ── Was ist eine Komplettlösung ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Überblick</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Was ist eine Photovoltaik Komplettlösung?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Eine Komplettlösung kombiniert mehrere Energietechnologien zu einem integrierten System. PVPro.ch vermittelt{' '}
              <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Anbieter</Link>,
              die all diese Komponenten aus einer Hand liefern und installieren.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {komponenten.map((k, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  {k.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{k.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{k.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Kosten ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Preisübersicht</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Was kostet eine Komplettlösung in der Schweiz?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die Kosten hängen davon ab, welche Komponenten enthalten sind. Nach Abzug aller{' '}
              <Link href="/foerderungen" className="text-[#F97316] hover:underline font-medium">Förderungen</Link>{' '}
              — Einmalvergütung (EIV), Wärmepumpenförderung, kantonale Beiträge — reduzieren sich die Kosten erheblich.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Der{' '}
              <Link href="/blog/eigenverbrauch-optimieren-solar" className="text-[#F97316] hover:underline font-medium">Eigenverbrauch</Link>{' '}
              kann auf bis zu 80% steigen, was die Amortisationszeit deutlich verkürzt. Möchten Sie Ihre persönlichen Kosten berechnen? Holen Sie jetzt{' '}
              <Link href="/solaranlage-offerte-einholen" className="text-[#F97316] hover:underline font-medium">kostenlose Offerten</Link>{' '}
              ein.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Komponente</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Kosten (Richtwert)</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabelle.map((row, i) => (
                    <tr key={row.komponente} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.komponente}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.kosten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Vor Förderungen. Individuelle Offerte von einem zertifizierten Installateur einholen.
            </p>
          </div>
        </section>

        {/* ── Vorteile & Worauf achten ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Vorteile</p>
            <h2 className="text-xl font-bold text-white mb-5">
              Vorteile einer Komplettlösung gegenüber Einzelkomponenten
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Wer alles beim gleichen Anbieter kauft, profitiert von mehreren Vorteilen:
            </p>
            <ul className="space-y-3">
              {vorteile.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checkliste</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              Worauf achten bei der Wahl eines Komplettlösungs-Anbieters?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Nicht jeder{' '}
              <Link href="/solaranlage-installieren-schweiz" className="text-[#F97316] hover:underline font-medium">Installateur</Link>{' '}
              bietet echte Komplettlösungen an. Das sollten Sie prüfen:
            </p>
            <ul className="space-y-3">
              {pruefpunkte.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">PVPro.ch</strong> vermittelt Installateure, die Komplettlösungen aus einer Hand anbieten — geprüft und zertifiziert.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Jetzt Komplettlösung anfragen
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Füllen Sie unser Formular aus und erhalten Sie bis zu 3 Offerten von zertifizierten Installateuren, die Komplettlösungen aus einer Hand anbieten — kostenlos und unverbindlich.
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
            <Link href="/vergleichsportal-photovoltaik-schweiz" className="text-[#F97316] hover:underline font-medium">Anbieter vergleichen</Link>?
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
              <Link href="/solaranlage-mit-speicher" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaranlage mit Speicher
              </Link>
              <Link href="/foerderungen" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Förderungen &amp; EIV
              </Link>
              <Link href="/solaranlage-kosten" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Kosten Solaranlage
              </Link>
              <Link href="/photovoltaik-installation-schweiz" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Ablauf der Installation
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
