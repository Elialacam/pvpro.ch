import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import { ECONOMIC_FACTS, SOURCE_NOTES, SYSTEM_PRICE_NOTES, calculateAnnualSolarValueRange, formatChfForLocale, formatRangeForLocale, formatSwissNumber, getSystemCostRange } from '@/lib/facts';

const annualValue10Kwp = {
  min: calculateAnnualSolarValueRange(
    10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min,
    10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max,
  ).min,
  max: calculateAnnualSolarValueRange(
    10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max,
    10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max,
  ).max,
};

export const metadata: Metadata = pageMetadata({
  title: 'Solar Calculator Switzerland 2026 – Calculate Costs & Yield | PvPro.ch',
  description: 'Free solar calculator for Switzerland. Calculate the costs, yield and payback period of your solar installation in 30 seconds. With subsidies and 2026 reference values.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-calculator',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solarrechner',
      'fr-CH': 'https://www.pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-calculator',
      'it-CH': 'https://www.pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://www.pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Solar Calculator Switzerland 2026 – Calculate Costs & Yield',
    description: 'Free solar calculator for Switzerland. Costs, yield and payback period of your installation.',
    url: 'https://www.pvpro.ch/en/solar-calculator',
    type: 'website',
    locale: 'en_GB',
    siteName: 'PvPro.ch',
  },
}, { path: '/en/solar-calculator', locale: 'en' });

const faqs = [
  {
    question: 'How accurate is the solar calculator?',
    answer: `Our solar calculator provides a first estimate. It uses ${ECONOMIC_FACTS.roofAreaM2PerKwp} m² per kWp, ${formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh per kWp', 'en')} and ${formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF per kWp', 'en')}.`,
  },
  {
    question: 'How much roof space do I need per kWp?',
    answer: `Allow approximately ${ECONOMIC_FACTS.roofAreaM2PerKwp} m² per kWp. A 10 kWp installation needs about ${ECONOMIC_FACTS.roofAreaM2PerKwp * 10} m² of usable roof space.`,
  },
  {
    question: 'What is the one-time payment (OTP) subsidy?',
    answer: `Pronovo pays ${formatChfForLocale(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en')} per kWp up to 30 kWp, plus a base contribution. The federal share is ${formatRangeForLocale(ECONOMIC_FACTS.incentives.federalSharePercent, '%', 'en')} without storage.`,
  },
  {
    question: 'What is the typical payback period in Switzerland?',
    answer: `On the Swiss Plateau, the indicative payback period is ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en')}.`,
  },
  {
    question: 'Is a solar installation worthwhile with a north-facing roof?',
    answer: 'A purely north-facing roof is not ideal. East and west-facing roofs can still be worthwhile. A professional calculation should account for orientation and shading.',
  },
  {
    question: 'Should I add a battery storage system?',
    answer: `Without storage, self-consumption is ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%', 'en')}; with storage it is ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%', 'en')}. A 10 kWh battery costs ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'en')}.`,
  },
  {
    question: 'How does an electric vehicle affect my solar calculation?',
    answer: 'Charging an electric vehicle during the day can increase direct use of solar electricity. Include the vehicle in the professional system sizing.',
  },
];

const systemSizes = [
  {
    label: 'Small',
    kwp: 6,
    flaeche: `${formatSwissNumber(6 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`,
    jahresertrag: formatRangeForLocale({ min: 6 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 6 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh', 'en'),
    kosten: formatRangeForLocale(getSystemCostRange(6), 'CHF', 'en'),
    foerderung: formatChfForLocale(6 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en'),
    nettokosten: formatRangeForLocale({ min: getSystemCostRange(6).min - 6 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, max: getSystemCostRange(6).max - 6 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30 }, 'CHF', 'en'),
    amort: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en'),
    haushalt: '2 people / apartment',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Medium',
    kwp: 10,
    flaeche: `${formatSwissNumber(10 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`,
    jahresertrag: formatRangeForLocale({ min: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 10 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh', 'en'),
    kosten: formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en'),
    foerderung: formatChfForLocale(ECONOMIC_FACTS.incentives.tenKwpApprox, 'en'),
    nettokosten: formatRangeForLocale({ min: getSystemCostRange(10).min - ECONOMIC_FACTS.incentives.tenKwpApprox, max: getSystemCostRange(10).max - ECONOMIC_FACTS.incentives.tenKwpApprox }, 'CHF', 'en'),
    amort: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en'),
    haushalt: '3–4 people / detached house',
    color: 'border-[#fcb210]/30 bg-orange-50',
    badge: 'bg-[#fcb210]/10 text-[#fcb210]',
    highlight: true,
  },
  {
    label: 'Large',
    kwp: 15,
    flaeche: `${formatSwissNumber(15 * ECONOMIC_FACTS.roofAreaM2PerKwp)} m²`,
    jahresertrag: formatRangeForLocale({ min: 15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.min, max: 15 * ECONOMIC_FACTS.production.plateauKwhPerKwp.max }, 'kWh', 'en'),
    kosten: formatRangeForLocale(getSystemCostRange(15), 'CHF', 'en'),
    foerderung: formatChfForLocale(15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en'),
    nettokosten: formatRangeForLocale({ min: getSystemCostRange(15).min - 15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, max: getSystemCostRange(15).max - 15 * ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30 }, 'CHF', 'en'),
    amort: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en'),
    haushalt: 'Large family / apartment building',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Roof orientation',
    body: 'Orientation, pitch and shading all affect yield. A professional calculation accounts for the exact roof.',
    tip: 'South, east or west are ideal',
  },
  {
    icon: Home,
    title: 'Roof condition',
    body: 'Tile, concrete and metal roofs are straightforward. Asbestos or bitumen roofs must be renovated beforehand — increasing the overall cost.',
    tip: 'Plan renovation if necessary',
  },
  {
    icon: AlertCircle,
    title: 'Shading',
    body: 'Trees, chimneys or neighbouring buildings can reduce yield. Modern micro-inverters or optimisers can limit losses.',
    tip: 'Have shading checked',
  },
  {
    icon: Battery,
    title: 'Self-consumption',
    body: `Without storage, self-consumption is ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%', 'en')}. With storage, it rises to ${formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%', 'en')}.`,
    tip: 'Storage increases self-consumption',
  },
  {
    icon: Zap,
    title: 'Electricity price',
    body: `The Swiss median is ${ECONOMIC_FACTS.electricityMedianCtPerKwh} ct/kWh. Every self-produced kilowatt-hour is a direct saving.`,
    tip: `${ECONOMIC_FACTS.electricityMedianCtPerKwh} ct/kWh Swiss median`,
  },
  {
    icon: TrendingUp,
    title: 'Grid feed-in',
    body: `Feed-in remuneration is ${formatRangeForLocale(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh', 'en')}, depending on the operator.`,
    tip: formatRangeForLocale(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh', 'en'),
  },
];

const richtigValues = [
  { label: 'Annual yield per kWp on the Plateau', value: formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh', 'en') },
  { label: 'Roof area per kWp', value: `${ECONOMIC_FACTS.roofAreaM2PerKwp} m²` },
  { label: 'Installation cost per kWp', value: formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF', 'en') },
  { label: 'Federal OTP subsidy per kWp', value: formatChfForLocale(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en') },
  { label: 'Self-consumption without storage', value: formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withoutStorage, '%', 'en') },
  { label: 'Self-consumption with storage', value: formatRangeForLocale(ECONOMIC_FACTS.selfConsumptionPercent.withStorage, '%', 'en') },
  { label: 'Solar module lifespan', value: formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'years', 'en') },
  { label: 'Performance warranty', value: `${ECONOMIC_FACTS.performanceWarranty.percent}% after ${ECONOMIC_FACTS.performanceWarranty.afterYears} years` },
  { label: 'Payback period on the Plateau', value: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en') },
];

export default function SolarCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'PvPro.ch Solar Calculator',
            description: 'Free solar calculator for Switzerland',
            url: 'https://www.pvpro.ch/en/solar-calculator',
            applicationCategory: 'Calculator',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' },
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
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar Calculator</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-4">Free tool</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solar Calculator Switzerland 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Enter your roof area and electricity consumption — instantly receive a realistic estimate of costs, annual yield and payback period for your solar installation in Switzerland.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
              <span className="text-white/80 text-sm">Free</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Instant results</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Swiss market data</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh/kWp/year', 'en'), unit: '', label: 'Swiss Plateau' },
                { val: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en'), unit: '', label: 'Payback on the Plateau' },
                { val: formatChfForLocale(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en'), unit: '/kWp', label: 'Federal OTP subsidy' },
                { val: formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'years', 'en'), unit: '', label: 'Module lifespan' },
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
      <section className="py-14 bg-white" id="calculator">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Your personal solar potential</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Enter your available roof area (approximately) and your annual electricity consumption. The calculator is based on Swiss average values and the OTP subsidy.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <SolarCalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
             {SOURCE_NOTES.en} {SYSTEM_PRICE_NOTES.en}
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Reference values</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Typical installation sizes in Switzerland</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
               Different system sizes are recommended depending on household size and available roof space. Prices are shown before subsidies.
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
                    Most popular size
                  </div>
                )}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded ${s.badge}`}>{s.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{s.kwp} kWp</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Roof area</p>
                    <p className="font-bold text-gray-700">{s.flaeche}</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Annual yield</span>
                    <span className="font-semibold text-gray-800">{s.jahresertrag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gross cost</span>
                    <span className="font-semibold text-gray-800">{s.kosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">OTP subsidy</span>
                    <span className="font-semibold text-green-600">− {s.foerderung}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2.5 mt-1">
                    <span className="text-gray-700 font-semibold">Net cost</span>
                    <span className="font-bold text-gray-900">{s.nettokosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payback period</span>
                    <span className="font-semibold text-gray-800">{s.amort}</span>
                  </div>
                  <div className="pt-2 text-xs text-gray-400 border-t border-gray-200">
                    Suitable for: {s.haushalt}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Indicative 2026 values. Actual costs may vary by installer, canton and system.
            <Link href="/en/solar-panel-costs" className="text-[#fcb210] ml-1 hover:underline">Detailed cost overview →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Influencing factors</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What influences your solar yield?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              The calculator works with average values. In practice, six factors play a decisive role — understand these to correctly interpret the result.
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
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Swiss reference values</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The numbers behind the calculator
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Our solar calculator is based on validated Swiss market data. These reference values help you interpret the result and understand the underlying assumptions.
              </p>
              <Link
                href="/en/request"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
              >
                Request concrete quotes now <ArrowRight className="w-4 h-4" />
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">It's simple</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">From calculation to quote</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              The calculator is the first step. In three further simple steps, you receive firm quotes from vetted Swiss installers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Enter roof area', desc: 'Estimate your usable roof area in m² (length × width).' },
              { step: '2', title: 'Enter electricity consumption', desc: 'Your annual consumption is shown on your electricity bill.' },
              { step: '3', title: 'Understand your potential', desc: 'Immediately see: system size, annual yield, costs and estimated payback period.' },
              { step: '4', title: 'Compare quotes', desc: 'Request 3 free quotes from vetted installers — no commitment and quick.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-center text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cantonal note ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Cantonal differences</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Solar yield by canton in Switzerland
              </h2>
              <Link href="/en/request" className="inline-flex items-center gap-2 text-sm font-bold text-[#fcb210] hover:underline">
                Request quotes for my location <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Savings narrative ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Profitability</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What does a solar installation concretely bring you?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Values depend on system size, electricity tariff and self-consumption.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: 'Annual solar value',
                value: formatRangeForLocale(annualValue10Kwp, 'CHF/year', 'en'),
                sub: 'Self-consumption and feed-in value for 10 kWp on the Plateau',
                color: 'text-[#fcb210]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Feed-in tariff',
                value: formatRangeForLocale(ECONOMIC_FACTS.feedInCtPerKwh, 'ct/kWh', 'en'),
                sub: 'Depends on the grid operator',
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Indicative payback',
                value: formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en'),
                sub: 'Benchmark for the Plateau',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: 'Module lifespan',
                value: formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'years', 'en'),
                sub: SOURCE_NOTES.en,
                color: 'text-purple-600',
                bg: 'bg-purple-50',
              },
            ].map(c => (
              <div key={c.label} className={`rounded-2xl p-6 border border-gray-100 ${c.bg}`}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
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
              <strong className="text-gray-800">Note:</strong> {SOURCE_NOTES.en} Actual results depend on the project and local tariff.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Ready for concrete quotes?"
              subtitle="Our calculator gives a first indication. For binding offers, we connect you free of charge with vetted Swiss solar installers."
              ctaText="Request free quotes"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why use this solar calculator?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: 'Instant calculation', desc: 'Get a first estimate for your solar installation in seconds — no registration required.' },
              { icon: Zap, title: 'Calculate yield', desc: 'See how much electricity your roof can produce annually — based on your canton.' },
              { icon: PiggyBank, title: 'Understand costs', desc: 'Realistic cost estimate with OTP subsidy based on current Swiss market prices.' },
              { icon: TrendingUp, title: 'Plan payback', desc: 'Find out when your investment pays off.' },
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Frequently asked questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Questions about the calculator and profitability</h2>
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
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
