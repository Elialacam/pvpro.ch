import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import {
  ECONOMIC_FACTS,
  formatChf,
  formatRangeForLocale,
  formatSwissNumber,
  getSourceNote,
  getSystemCostRange,
} from '@/lib/facts';

const exampleProduction = 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min;
const exampleSelfUse = exampleProduction * ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage.min / 100;
const exampleFeedIn = exampleProduction - exampleSelfUse;
const exampleSelfUseValue = exampleSelfUse * ECONOMIC_FACTS.electricityMedianCtPerKwh / 100;
const exampleFeedInValue = {
  min: exampleFeedIn * ECONOMIC_FACTS.feedInCtPerKwh.min / 100,
  max: exampleFeedIn * ECONOMIC_FACTS.feedInCtPerKwh.max / 100,
};
const exampleAnnualValue = {
  min: exampleSelfUseValue + exampleFeedInValue.min,
  max: exampleSelfUseValue + exampleFeedInValue.max,
};

export const metadata: Metadata = pageMetadata({
  title: 'Solarrechner Schweiz 2026 – Kosten & Ertrag berechnen | PvPro.ch',
  description: 'Kostenloser Solarrechner für die Schweiz. Berechnen Sie in 30 Sekunden Kosten, Ertrag und Amortisation Ihrer Solaranlage. Mit Förderungen, Eigenverbrauch und Richtwerten für 2026.',
  alternates: {
    canonical: 'https://www.pvpro.ch/solarrechner',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solarrechner',
      'fr-CH': 'https://www.pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-calculator',
      'it-CH': 'https://www.pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://www.pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Solarrechner Schweiz 2026 – Kosten & Ertrag berechnen',
    description: 'Kostenloser Solarrechner. Berechnen Sie Kosten, Ertrag und Amortisation Ihrer Solaranlage in der Schweiz.',
    url: 'https://www.pvpro.ch/solarrechner',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PvPro.ch',
  },
}, { path: '/solarrechner', locale: 'de' });

const faqs = [
  {
    question: 'Wie genau ist der Solarrechner?',
    answer: `Unser Solarrechner gibt Ihnen eine erste Orientierung. Er rechnet mit ${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m² pro kWp, ${formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh Produktion pro kWp', 'de')} und ${formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF Installationskosten pro kWp', 'de')}.`,
  },
  {
    question: 'Wie viel m² Dachfläche brauche ich pro kWp?',
    answer: `Mit modernen Modulen rechnet man mit ${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m² Dachfläche pro kWp. Für eine 10-kWp-Anlage sind das ${formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m² nutzbare Dachfläche.`,
  },
  {
    question: 'Was ist die Bundesförderung (EIV)?',
    answer: `Die RU beträgt bis 30 kWp ${formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} pro kWp, zuzüglich Grundbeitrag. Bundes-, Kantons- und Gemeindebeiträge können zusammen bis ${ECONOMIC_FACTS.incentives.combinedMaxPercent}% erreichen.`,
  },
  {
    question: 'Was ist die typische Amortisationszeit in der Schweiz?',
    answer: `Im Mittelland liegt die Amortisationszeit bei ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahren', 'de')}. Module halten typischerweise ${formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'Jahre', 'de')}.`,
  },
  {
    question: 'Lohnt sich eine Solaranlage auch mit einem Norddach?',
    answer: 'Ein reines Norddach ist nicht ideal. Für Ost-, West- und Norddächer empfehlen wir eine professionelle Einzelfallprüfung, da Ausrichtung, Neigung und Verschattung den Ertrag beeinflussen.',
  },
  {
    question: 'Soll ich einen Batteriespeicher hinzufügen?',
    answer: `Ein Batteriespeicher erhöht den Eigenverbrauch von ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%', 'de')} auf ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%', 'de')}. Ein installierter 10-kWh-Speicher kostet ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'de')}.`,
  },
  {
    question: 'Wie beeinflusst ein Elektroauto die Solarrechnung?',
    answer: 'Ein Elektroauto erhöht den Stromverbrauch. Das Laden tagsüber mit Solarstrom steigert den Eigenverbrauch. Die passende zusätzliche Anlagenleistung muss anhand des Fahrprofils berechnet werden.',
  },
];

const systemSizes = [
  {
    label: 'Klein',
    kwp: 6,
    flaeche: `${formatSwissNumber(6 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`,
    jahresertrag: `${formatSwissNumber(6 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(6 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh`,
    kosten: formatRangeForLocale(getSystemCostRange(6), 'CHF', 'de'),
    foerderung: formatChf(6 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30),
    nettokosten: `${formatSwissNumber(getSystemCostRange(6).min - 6 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} bis ${formatSwissNumber(getSystemCostRange(6).max - 6 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} CHF`,
    amort: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahre', 'de'),
    haushalt: '2 Personen / Wohnung',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Mittel',
    kwp: 10,
    flaeche: `${formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`,
    jahresertrag: `${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh`,
    kosten: formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[10], 'CHF', 'de'),
    foerderung: formatChf(ECONOMIC_FACTS.incentives.tenKwpApprox),
    nettokosten: `${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].min - ECONOMIC_FACTS.incentives.tenKwpApprox)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[10].max - ECONOMIC_FACTS.incentives.tenKwpApprox)} CHF`,
    amort: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahre', 'de'),
    haushalt: '3–4 Personen / EFH',
    color: 'border-[#fcb210]/30 bg-orange-50',
    badge: 'bg-[#fcb210]/10 text-[#fcb210]',
    highlight: true,
  },
  {
    label: 'Gross',
    kwp: 15,
    flaeche: `${formatSwissNumber(15 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`,
    jahresertrag: `${formatSwissNumber(15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min)} bis ${formatSwissNumber(15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max)} kWh`,
    kosten: formatRangeForLocale(ECONOMIC_FACTS.systemCosts.bySize[15], 'CHF', 'de'),
    foerderung: formatChf(15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30),
    nettokosten: `${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[15].min - 15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} bis ${formatSwissNumber(ECONOMIC_FACTS.systemCosts.bySize[15].max - 15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30)} CHF`,
    amort: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahre', 'de'),
    haushalt: 'Grossfamilie / MFH',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Dachausrichtung',
    body: 'Ausrichtung und Neigung beeinflussen den Ertrag. Ein Fachbetrieb berechnet das Potenzial für Ihr konkretes Dach.',
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
    body: 'Bäume, Kamine oder Nachbarhäuser können den Ertrag reduzieren. Moderne Mikrowechselrichter oder Optimierer begrenzen Verluste.',
    tip: 'Verschattung prüfen lassen',
  },
  {
    icon: Battery,
    title: 'Eigenverbrauch',
    body: `Ohne Speicher verbrauchen Sie ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%', 'de')} des produzierten Stroms selbst. Mit Speicher steigt der Eigenverbrauch auf ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%', 'de')}.`,
    tip: 'Speicher erhöht Eigenverbrauch',
  },
  {
    icon: Zap,
    title: 'Strompreis',
    body: `Der Schweizer Medianpreis liegt bei ${formatSwissNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct/kWh. Jede selbst verbrauchte Kilowattstunde spart den Strombezug.`,
    tip: `${formatSwissNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct/kWh Schweizer Median`,
  },
  {
    icon: TrendingUp,
    title: 'Einspeisung',
    body: `Strom, den Sie nicht selbst verbrauchen, speisen Sie ins Netz ein. Die Vergütung liegt je nach Betreiber bei ${formatRangeForLocale(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh', 'de')}.`,
    tip: `${formatRangeForLocale(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh', 'de')} Einspeisung`,
  },
];

const richtigValues = [
  { label: 'Jahresertrag pro kWp im Mittelland', value: formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh', 'de') },
  { label: 'Dachfläche pro kWp', value: `${formatSwissNumber(ECONOMIC_FACTS.roofAreaM2PerKwp)} m²` },
  { label: 'Installationskosten pro kWp', value: formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF', 'de') },
  { label: 'Bundesförderung RU pro kWp bis 30 kWp', value: formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30) },
  { label: 'Eigenverbrauch ohne Speicher', value: formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%', 'de') },
  { label: 'Eigenverbrauch mit Speicher', value: formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%', 'de') },
  { label: 'Lebensdauer Solarmodule', value: formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'Jahre', 'de') },
  { label: 'Leistungsgarantie', value: `${ECONOMIC_FACTS.performanceWarranty.percent}% nach ${ECONOMIC_FACTS.performanceWarranty.afterYears} Jahren` },
  { label: 'Amortisationszeit Mittelland', value: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahre', 'de') },
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
            name: 'PvPro.ch Solarrechner',
            description: 'Kostenloser Solarrechner für die Schweiz',
            url: 'https://www.pvpro.ch/solarrechner',
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
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solarrechner</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-4">Kostenloses Tool</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solarrechner Schweiz 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Geben Sie Ihre Dachfläche und Ihren Stromverbrauch ein — und erhalten Sie sofort eine realistische Schätzung für Kosten, Jahresertrag und Amortisation Ihrer Solaranlage in der Schweiz.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">100% kostenlos</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Sofortige Ergebnisse</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Schweizer Marktdaten</span>
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh/kWp/Jahr', 'de'), unit: '', label: 'Mittelland' },
                { val: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahre', 'de'), unit: '', label: 'Amortisation Mittelland' },
                { val: formatChf(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30), unit: 'pro kWp', label: 'RU bis 30 kWp' },
                { val: formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'Jahre', 'de'), unit: '', label: 'Lebensdauer Module' },
              ].map(s => (
                <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[#fcb210] text-xs font-semibold mt-0.5">{s.unit}</p>
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
            {getSourceNote('de')} Keine verbindliche Offerte.
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Orientierungswerte</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Typische Anlagengrössen in der Schweiz</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Je nach Haushaltsgrösse und verfügbarer Dachfläche empfehlen sich unterschiedliche Anlagenleistungen. Alle Preise verstehen sich vor kantonalen Förderungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemSizes.map(s => (
              <div
                key={s.kwp}
                className={`rounded-2xl border-2 p-6 relative ${s.color} ${s.highlight ? 'ring-2 ring-[#fcb210]/30' : ''}`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fcb210] text-white text-xs font-bold px-4 py-1 rounded-full">
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
            <Link href="/solaranlage-kosten" className="text-[#fcb210] ml-1 hover:underline">Detaillierte Kostenübersicht →</Link>
            {' '}·{' '}
            <Link href="/blog/lohnt-sich-solaranlage-schweiz-2026" className="text-[#fcb210] ml-1 hover:underline">Lohnt sich eine Solaranlage in Ihrem Kanton? →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Einflussfaktoren</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was beeinflusst Ihren Solarertrag?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Der Rechner arbeitet mit Durchschnittswerten. In der Praxis spielen sechs Faktoren eine entscheidende Rolle — verstehen Sie diese, um das Ergebnis richtig einzuordnen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fcb210]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#fcb210]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-xs text-[#fcb210] font-medium">{f.tip}</span>
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
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #fcb210 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Schweizer Richtwerte</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Die Zahlen hinter dem Rechner
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Unser Solarrechner basiert auf validierten Schweizer Marktdaten. Diese Referenzwerte helfen Ihnen, das Ergebnis einzuordnen und verstehen, welche Annahmen zugrunde liegen.
              </p>
              <Link
                href="/anfrage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">So einfach geht&apos;s</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Von der Berechnung zur Offerte</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Der Solarrechner ist der erste Schritt. In drei weiteren einfachen Schritten gelangen Sie zu verbindlichen Offerten von geprüften Schweizer Installateuren.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Dachfläche eingeben', desc: 'Schätzen Sie Ihre nutzbare Dachfläche anhand von Länge und Breite.' },
              { step: '2', title: 'Stromverbrauch angeben', desc: 'Ihr Jahresverbrauch steht auf der Stromrechnung.' },
              { step: '3', title: 'Potenzial verstehen', desc: 'Sie sehen sofort: Anlagengrösse, Jahresertrag, Kosten und geschätzte Amortisationszeit.' },
              { step: '4', title: 'Offerten vergleichen', desc: 'Fordern Sie kostenlos 3 Offerten von geprüften Installateuren an — unverbindlich und schnell.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}>
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-center text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kantonale Unterschiede ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Cantonale Unterschiede</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Solarertrag nach Kanton in der Schweiz
              </h2>
              <Link href="/anfrage" className="inline-flex items-center gap-2 text-sm font-bold text-[#fcb210] hover:underline">
                Jetzt für meinen Standort Offerten anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Savings narrative ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Wirtschaftlichkeit</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Was bringt Ihnen eine Solaranlage konkret?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Beispiel mit 10 kWp im Mittelland, Schweizer Medianstrompreis und dem unteren Richtwert für Eigenverbrauch ohne Speicher.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: 'Jährliche Stromeinsparung',
                value: formatChf(Math.round(exampleSelfUseValue)),
                sub: `${formatSwissNumber(exampleSelfUse)} kWh Eigenverbrauch × ${formatSwissNumber(ECONOMIC_FACTS.electricityMedianCtPerKwh)} ct`,
                color: 'text-[#fcb210]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Einspeisevergütung / Jahr',
                value: formatRangeForLocale(exampleFeedInValue, 'CHF', 'de'),
                sub: `${formatSwissNumber(exampleFeedIn)} kWh eingespeist × ${formatRangeForLocale(ECONOMIC_FACTS.feedInCtPerKwh, 'ct', 'de')}`,
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Gesamtnutzen / Jahr',
                value: formatRangeForLocale(exampleAnnualValue, 'CHF', 'de'),
                sub: 'Einsparung + Einspeisevergütung',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: `Gesamtnutzen über ${ECONOMIC_FACTS.moduleLifetimeYears.min} bis ${ECONOMIC_FACTS.moduleLifetimeYears.max} Jahre`,
                value: `${formatSwissNumber(exampleAnnualValue.min * ECONOMIC_FACTS.moduleLifetimeYears.min)} bis ${formatSwissNumber(exampleAnnualValue.max * ECONOMIC_FACTS.moduleLifetimeYears.max)} CHF`,
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
              <strong className="text-gray-800">Hinweis:</strong> {getSourceNote('de')} Die Rechnung ist eine Orientierung und keine verbindliche Offerte.
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
              { icon: Zap, title: 'Ertrag ermitteln', desc: 'Sehen Sie, wie viel Strom Ihr Dach jährlich produzieren kann — basierend auf Ihrem Kanton.' },
              { icon: PiggyBank, title: 'Kosten verstehen', desc: 'Realistische Kostenschätzung mit EIV-Förderung basierend auf aktuellen Schweizer Marktpreisen.' },
              { icon: TrendingUp, title: 'Amortisation planen', desc: `Richtwert im Mittelland: ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'Jahre', 'de')}.` },
            ].map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#fcb210]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-[#fcb210]" />
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Häufige Fragen</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fragen zum Solarrechner & zur Wirtschaftlichkeit</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                    {faq.question}
                    <span className="ml-4 text-[#fcb210] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
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
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
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
