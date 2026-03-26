import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solarrechner Schweiz 2026 – Kosten & Ertrag berechnen | PVPro',
  description: 'Kostenloser Solarrechner für die Schweiz. Berechnen Sie in 30 Sekunden Kosten, Ertrag und Amortisation Ihrer Solaranlage. Mit Förderungen, Eigenverbrauch und Richtwerten für 2026.',
  keywords: [
    'Solarrechner Schweiz',
    'Photovoltaik Rechner',
    'PV Rechner Schweiz',
    'Solaranlage berechnen',
    'Photovoltaik Ertrag berechnen',
    'Solarstrom Rechner',
    'Eigenverbrauch berechnen',
    'Solaranlage Kosten Rechner',
  ],
  alternates: {
    canonical: 'https://pvpro.ch/solarrechner',
    languages: {
      'de-CH': 'https://pvpro.ch/solarrechner',
      'fr-CH': 'https://pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://pvpro.ch/en/solar-calculator',
      'it-CH': 'https://pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Solarrechner Schweiz 2026 – Kosten & Ertrag berechnen',
    description: 'Kostenloser Solarrechner. Berechnen Sie Kosten, Ertrag und Amortisation Ihrer Solaranlage in der Schweiz.',
    url: 'https://pvpro.ch/solarrechner',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Wie genau ist der Solarrechner?',
    answer: "Unser Solarrechner gibt Ihnen eine gute erste Orientierung. Er basiert auf Schweizer Durchschnittswerten: 6,5 m² pro kWp, 950 kWh Produktion pro kWp und 2'200 CHF Installationskosten pro kWp. Für eine exakte Berechnung empfehlen wir eine professionelle Beratung vor Ort, die Faktoren wie Dachausrichtung, Verschattung und lokale Gegebenheiten berücksichtigt.",
  },
  {
    question: 'Wie viel m² Dachfläche brauche ich pro kWp?',
    answer: 'Mit modernen Modulen rechnet man in der Schweiz mit ca. 6,5 m² Dachfläche pro kWp. Für eine typische 10 kWp Anlage benötigen Sie also rund 65 m² nutzbare Dachfläche. Nicht die gesamte Dachfläche ist nutzbar — Dachfenster, Kamine und Verschattung reduzieren die verfügbare Fläche.',
  },
  {
    question: 'Was ist die Bundesförderung (EIV)?',
    answer: 'Die Einmalvergütung (EIV) des Bundes beträgt aktuell rund 350 CHF pro kWp installierter Leistung. Diese wird direkt vom Installationspreis abgezogen und reduziert Ihre tatsächlichen Kosten spürbar. Zusätzliche kantonale Förderungen sind je nach Kanton möglich. Gesamthaft können Förderungen 20–30% der Investitionskosten abdecken.',
  },
  {
    question: 'Was ist die typische Amortisationszeit in der Schweiz?',
    answer: 'Die durchschnittliche Amortisationszeit liegt in der Schweiz bei 8–12 Jahren, abhängig von Strompreis, Eigenverbrauchsanteil und erhaltenen Förderungen. Nach der Amortisation produzieren Sie für weitere 15–20 Jahre weitgehend kostenlosen Strom. Bei steigenden Strompreisen verkürzt sich die Amortisationszeit weiter.',
  },
  {
    question: 'Lohnt sich eine Solaranlage auch mit einem Norddach?',
    answer: 'Ein reines Norddach ist nicht ideal. Ost- und Westdächer liefern jedoch noch 70–80% des Ertrags eines Süddachs und lohnen sich meist. Für Norddächer empfehlen wir eine professionelle Einzelfallprüfung. Moderne bifaziale Solarmodule können auch auf weniger optimalen Dächern überzeugende Ergebnisse erzielen.',
  },
  {
    question: 'Soll ich einen Batteriespeicher hinzufügen?',
    answer: "Ein Batteriespeicher erhöht Ihren Eigenverbrauchsanteil von ca. 30% auf 60–80%. Er kostet zusätzlich etwa 8'000–15'000 CHF, amortisiert sich jedoch bei steigenden Strompreisen zunehmend schneller. Besonders sinnvoll ist ein Speicher, wenn Sie tagsüber wenig zu Hause sind oder ein Elektroauto besitzen.",
  },
  {
    question: 'Wie beeinflusst ein Elektroauto die Solarrechnung?',
    answer: "Ein Elektroauto mit ca. 15'000 km/Jahr verbraucht rund 2'500 kWh. Mit einer um ca. 3 kWp grösseren Solaranlage können Sie diesen Mehrverbrauch weitgehend abdecken. Das Laden des Autos tagsüber mit Solarstrom steigert den Eigenverbrauch erheblich und verbessert die Wirtschaftlichkeit deutlich.",
  },
  {
    question: 'Welcher Kanton hat die meisten Sonnenstunden in der Schweiz?',
    answer: "Das Tessin und das Wallis gehören zu den sonnenreichsten Kantonen der Schweiz mit über 2'000 Sonnenstunden pro Jahr. Die Deutschschweiz liegt zwischen 1'600 und 1'900 Stunden. Selbst in weniger sonnigen Regionen lohnen sich Solaranlagen — der Unterschied im Ertrag zwischen dem Tessin und Zürich beträgt nur etwa 15–20%.",
  },
];

const systemSizes = [
  {
    label: 'Klein',
    kwp: 6,
    flaeche: '39 m²',
    jahresertrag: "5'700 kWh",
    kosten: "13'200 CHF",
    foerderung: "2'100 CHF",
    nettokosten: "11'100 CHF",
    amort: '9–12 Jahre',
    haushalt: '2 Personen / Wohnung',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Mittel',
    kwp: 10,
    flaeche: '65 m²',
    jahresertrag: "9'500 kWh",
    kosten: "22'000 CHF",
    foerderung: "3'500 CHF",
    nettokosten: "18'500 CHF",
    amort: '8–11 Jahre',
    haushalt: '3–4 Personen / EFH',
    color: 'border-[#F97316]/30 bg-orange-50',
    badge: 'bg-[#F97316]/10 text-[#F97316]',
    highlight: true,
  },
  {
    label: 'Gross',
    kwp: 15,
    flaeche: '98 m²',
    jahresertrag: "14'250 kWh",
    kosten: "33'000 CHF",
    foerderung: "5'250 CHF",
    nettokosten: "27'750 CHF",
    amort: '8–10 Jahre',
    haushalt: 'Grossfamilie / MFH',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Dachausrichtung',
    body: 'Ein Süddach erzielt 100% Ertrag. Ost/West liefern je 70–80%, Norddächer nur 50–60%. Die ideale Neigung liegt bei 25–35°.',
    tip: 'Süd, Ost oder West sind ideal',
  },
  {
    icon: Home,
    title: 'Dachbeschaffenheit',
    body: 'Ziegel, Beton und Blechdächer sind problemlos. Asbest- oder Bitumendächer müssen vorab saniert werden — das erhöht den Gesamtaufwand.',
    tip: 'Sanierung ggf. einplanen',
  },
  {
    icon: AlertCircle,
    title: 'Verschattung',
    body: 'Bäume, Kamine oder Nachbarhäuser können den Ertrag um 10–30% reduzieren. Moderne Mikrowechselrichter oder Optimierer minimieren Verluste.',
    tip: 'Verschattung prüfen lassen',
  },
  {
    icon: Battery,
    title: 'Eigenverbrauch',
    body: 'Ohne Speicher verbrauchen Sie ca. 25–35% des produzierten Stroms selbst. Mit Speicher steigt der Eigenverbrauch auf 60–80% — das erhöht die Rentabilität massgeblich.',
    tip: 'Speicher erhöht Eigenverbrauch',
  },
  {
    icon: Zap,
    title: 'Strompreis',
    body: 'Der durchschnittliche Schweizer Haushalt zahlt aktuell rund 25–30 Rp/kWh. Jedes selbst produzierte Kilowatt ist direkt gespart. Bei steigenden Preisen amortisiert sich die Anlage schneller.',
    tip: '~25–30 Rp/kWh in der Schweiz',
  },
  {
    icon: TrendingUp,
    title: 'Einspeisung',
    body: 'Strom, den Sie nicht selbst verbrauchen, speisen Sie ins Netz ein. Die Vergütung liegt je nach Netzbetreiber zwischen 6 und 15 Rp/kWh — deutlich unter dem Einkaufspreis.',
    tip: '6–15 Rp/kWh Einspeisung',
  },
];

const richtigValues = [
  { label: 'Durchschn. Sonnenstunden/Jahr (CH)', value: "1'600–2'100 h" },
  { label: 'Jahresertrag pro kWp (CH-Mittel)', value: '950–1\'000 kWh' },
  { label: 'Dachfläche pro kWp (moderne Module)', value: '6,5 m²' },
  { label: 'Installationskosten pro kWp', value: "2'000–2'500 CHF" },
  { label: 'Bundesförderung EIV pro kWp', value: '~350 CHF' },
  { label: 'Durchschn. Eigenverbrauch ohne Speicher', value: '25–35%' },
  { label: 'Durchschn. Eigenverbrauch mit Speicher', value: '60–80%' },
  { label: 'Lebensdauer Solarmodule', value: '25–30 Jahre' },
  { label: 'Leistungsgarantie (typisch)', value: '80% nach 25 Jahren' },
  { label: 'Amortisationszeit (Schweiz)', value: '8–12 Jahre' },
];

export default function SolarrechnerPage() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'PVPro Solarrechner',
            description: 'Kostenloser Solarrechner für die Schweiz',
            url: 'https://pvpro.ch/solarrechner',
            applicationCategory: 'Calculator',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solarrechner</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Kostenloses Tool</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solarrechner Schweiz 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Geben Sie Ihre Dachfläche und Ihren Stromverbrauch ein — und erhalten Sie sofort eine realistische Schätzung für Kosten, Jahresertrag und Amortisation Ihrer Solaranlage in der Schweiz.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">100% kostenlos</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Sofortige Ergebnisse</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Schweizer Marktdaten</span>
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: '950–1\'000', unit: 'kWh/kWp/Jahr', label: 'Schweizer Durchschnitt' },
                { val: '8–12', unit: 'Jahre', label: 'Typische Amortisation' },
                { val: '~350', unit: 'CHF/kWp', label: 'Bundesförderung EIV' },
                { val: '25–30', unit: 'Jahre', label: 'Lebensdauer Module' },
              ].map(s => (
                <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[#F97316] text-xs font-semibold mt-0.5">{s.unit}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-14 bg-white" id="rechner">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Ihr persönliches Solarpotenzial</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Geben Sie Ihre verfügbare Dachfläche (ca.) und Ihren jährlichen Stromverbrauch ein. Der Rechner basiert auf Schweizer Durchschnittswerten und EIV-Förderung.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <SolarCalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Richtwerte: 6,5 m²/kWp · 950 kWh/kWp/Jahr · 2'200 CHF/kWp · EIV ~350 CHF/kWp. Keine verbindliche Offerte.
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Orientierungswerte</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Typische Anlagengrössen in der Schweiz</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Je nach Haushaltsgrösse und verfügbarer Dachfläche empfehlen sich unterschiedliche Anlagenleistungen. Alle Preise vor kantonalen Förderungen — diese können die Kosten um weitere 10–15% senken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemSizes.map(s => (
              <div
                key={s.kwp}
                className={`rounded-2xl border-2 p-6 relative ${s.color} ${s.highlight ? 'ring-2 ring-[#F97316]/30' : ''}`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Beliebteste Grösse
                  </div>
                )}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded ${s.badge}`}>{s.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{s.kwp} kWp</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Dachfläche</p>
                    <p className="font-bold text-gray-700">{s.flaeche}</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Jahresertrag</span>
                    <span className="font-semibold text-gray-800">{s.jahresertrag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Bruttokosten</span>
                    <span className="font-semibold text-gray-800">{s.kosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">EIV-Förderung</span>
                    <span className="font-semibold text-green-600">− {s.foerderung}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2.5 mt-1">
                    <span className="text-gray-700 font-semibold">Nettokosten</span>
                    <span className="font-bold text-gray-900">{s.nettokosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amortisation</span>
                    <span className="font-semibold text-gray-800">{s.amort}</span>
                  </div>
                  <div className="pt-2 text-xs text-gray-400 border-t border-gray-200">
                    Geeignet für: {s.haushalt}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Richtwerte 2026. Tatsächliche Kosten können je nach Installateur, Kanton und Anlage abweichen.
            <Link href="/solaranlage-kosten" className="text-[#F97316] ml-1 hover:underline">Detaillierte Kostenübersicht →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Einflussfaktoren</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was beeinflusst Ihren Solarertrag?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Der Rechner arbeitet mit Durchschnittswerten. In der Praxis spielen sechs Faktoren eine entscheidende Rolle — verstehen Sie diese, um das Ergebnis richtig einzuordnen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-xs text-[#F97316] font-medium">{f.tip}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Swiss benchmark values ── */}
      <section className="py-16 bg-[#0f1f3d] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Schweizer Richtwerte</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Die Zahlen hinter dem Rechner
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Unser Solarrechner basiert auf validierten Schweizer Marktdaten. Diese Referenzwerte helfen Ihnen, das Ergebnis einzuordnen und verstehen, welche Annahmen zugrunde liegen.
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Jetzt konkrete Offerten anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {richtigValues.map(rv => (
                <div key={rv.label} className="flex items-center justify-between bg-white/8 border border-white/10 rounded-xl px-5 py-3">
                  <span className="text-white/60 text-sm">{rv.label}</span>
                  <span className="text-white font-semibold text-sm">{rv.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">So einfach geht's</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Von der Berechnung zur Offerte</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Der Solarrechner ist der erste Schritt. In drei weiteren einfachen Schritten gelangen Sie zu verbindlichen Offerten von geprüften Schweizer Installateuren.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Dachfläche eingeben', desc: "Schätzen Sie Ihre nutzbare Dachfläche in m² (Länge × Breite). Typisch: 40–100 m²." },
              { step: '2', title: 'Stromverbrauch angeben', desc: 'Ihr Jahresverbrauch steht auf der Stromrechnung — typisch 3\'500–7\'000 kWh für ein EFH.' },
              { step: '3', title: 'Potenzial verstehen', desc: 'Sie sehen sofort: Anlagengrösse, Jahresertrag, Kosten und geschätzte Amortisationszeit.' },
              { step: '4', title: 'Offerten vergleichen', desc: 'Fordern Sie kostenlos 3 Offerten von geprüften Installateuren an — unverbindlich und schnell.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-center text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional note ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Regionale Unterschiede</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Solarertrag nach Region in der Schweiz
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Die Sonneneinstrahlung variiert in der Schweiz regional. Das Tessin und das Wallis gehören zu den sonnenreichsten Regionen mit über 2'000 Sonnenstunden pro Jahr und einem Jahresertrag von bis zu 1'100 kWh/kWp.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Die Deutschschweiz und das Mittelland liegen bei 1'600–1'900 Stunden — immer noch ausgezeichnete Bedingungen für Solarenergie. Der Unterschied im Jahresertrag zwischen Genf und Zürich beträgt weniger als 15%. Solaranlagen lohnen sich in der ganzen Schweiz.
              </p>
              <Link href="/anfrage" className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:underline">
                Jetzt für meinen Standort Offerten anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { region: 'Tessin (Lugano)', stunden: "2'080", ertrag: '1\'080–1\'100 kWh/kWp', bar: 100 },
                { region: 'Wallis (Sion)', stunden: "2'130", ertrag: "1'050–1'100 kWh/kWp", bar: 99 },
                { region: 'Genferseeregion', stunden: "1'870", ertrag: "970–1'000 kWh/kWp", bar: 87 },
                { region: 'Bern / Mittelland', stunden: "1'720", ertrag: "900–950 kWh/kWp", bar: 80 },
                { region: 'Zürich', stunden: "1'700", ertrag: "880–920 kWh/kWp", bar: 78 },
                { region: 'Basel / Nordschweiz', stunden: "1'660", ertrag: "860–900 kWh/kWp", bar: 76 },
              ].map(r => (
                <div key={r.region} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{r.region}</span>
                    <span className="text-xs text-gray-500">{r.stunden} h/Jahr</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full mb-2">
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${r.bar}%`, background: 'linear-gradient(90deg, #fb923c, #F97316)' }}
                    />
                  </div>
                  <p className="text-xs text-gray-400">{r.ertrag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Savings narrative ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Wirtschaftlichkeit</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was bringt Ihnen eine Solaranlage konkret?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Mit einer typischen 10-kWp-Anlage in der Schweiz — gerechnet mit 25 Rp/kWh Strompreis und 35% Eigenverbrauch ohne Speicher.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: 'Jährliche Stromeinsparung',
                value: "CHF 950",
                sub: "≈ 3'325 kWh Eigenverbrauch × 25 Rp",
                color: 'text-[#F97316]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Einspeisevergütung / Jahr',
                value: "CHF 617",
                sub: "≈ 6'175 kWh eingespeist × 10 Rp",
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Gesamtnutzen / Jahr',
                value: "CHF 1'567",
                sub: 'Einsparung + Einspeisevergütung',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: 'Gesamtnutzen über 25 Jahre',
                value: "CHF 39'000+",
                sub: 'Strompreise werden weiter steigen',
                color: 'text-purple-600',
                bg: 'bg-purple-50',
              },
            ].map(c => (
              <div key={c.label} className={`rounded-2xl p-6 border border-gray-100 ${c.bg}`}>
                <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4`}>
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <p className="text-gray-500 text-xs mb-1">{c.label}</p>
                <p className={`text-2xl font-bold ${c.color} mb-1`}>{c.value}</p>
                <p className="text-gray-400 text-xs">{c.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-800">Hinweis:</strong> Die Zahlen basieren auf einer 10-kWp-Anlage mit Nettokosten von ~18'500 CHF, 35% Eigenverbrauch, 25 Rp/kWh Bezugspreis und 10 Rp/kWh Einspeisetarif. Mit Batteriespeicher, Elektroauto oder steigenden Strompreisen verbessert sich die Wirtschaftlichkeit deutlich.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Bereit für konkrete Offerten?"
              subtitle="Unser Rechner gibt eine erste Orientierung. Für verbindliche Angebote vermitteln wir Sie kostenlos an geprüfte Schweizer Solarteure."
              ctaText="Kostenlose Offerten anfordern"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Warum diesen Solarrechner nutzen?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: 'Sofortige Berechnung', desc: 'Erhalten Sie in Sekunden eine erste Einschätzung für Ihre Solaranlage — ohne Anmeldung.' },
              { icon: Zap, title: 'Ertrag ermitteln', desc: 'Sehen Sie, wie viel Strom Ihr Dach jährlich produzieren kann — basierend auf Ihrer Region.' },
              { icon: PiggyBank, title: 'Kosten verstehen', desc: 'Realistische Kostenschätzung mit EIV-Förderung basierend auf aktuellen Schweizer Marktpreisen.' },
              { icon: TrendingUp, title: 'Amortisation planen', desc: 'Erfahren Sie, ab wann sich Ihre Investition amortisiert und wie viel Sie über 25 Jahre sparen.' },
            ].map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fragen zum Solarrechner & zur Wirtschaftlichkeit</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
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
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Haben Sie weitere Fragen?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Kostenlose Offerte anfordern <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solaranlage-kosten"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-gray-700 text-sm border border-gray-200 hover:border-gray-400 transition-colors bg-white"
              >
                Detaillierte Kostenübersicht
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
