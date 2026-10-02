import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import { ECONOMIC_FACTS, SOURCE_NOTES, STORAGE_PRICE_NOTES, SYSTEM_PRICE_NOTES, formatChfForLocale, formatRangeForLocale, getSystemCostRange } from '@/lib/facts';

export const metadata: Metadata = pageMetadata({
  title: 'Solar Panel Costs Switzerland 2026 – What does a solar installation cost? | PvPro.ch',
  description: `How much does a solar installation cost in Switzerland? A 10 kWp system costs ${formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')}. Costs per kWp, subsidies and storage. Compare offers free of charge.`,
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-panel-costs',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-kosten',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-installation-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-panel-costs',
      'it-CH': 'https://www.pvpro.ch/it/costi-impianto-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-kosten',
    },
  },
  openGraph: {
    title: 'Solar Panel Costs Switzerland 2026 – Current prices & subsidies',
    description: `Current prices for solar installations in Switzerland. A 10 kWp system costs ${formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')} before subsidy.`,
    url: 'https://www.pvpro.ch/en/solar-panel-costs',
    type: 'article',
    locale: 'en_GB',
    siteName: 'PvPro.ch',
  },
}, { path: '/en/solar-panel-costs', locale: 'en' });

const costTable = [
  { size: '5 kWp', production: formatRangeForLocale({ min: ECONOMIC_FACTS.production.plateauKwhPerKwp.min * 5, max: ECONOMIC_FACTS.production.plateauKwhPerKwp.max * 5 }, 'kWh', 'en'), price: formatRangeForLocale(getSystemCostRange(5), 'CHF', 'en'), area: `${ECONOMIC_FACTS.roofAreaM2PerKwp * 5} m²`, ideal: 'Small house' },
  { size: '8 kWp', production: formatRangeForLocale({ min: ECONOMIC_FACTS.production.plateauKwhPerKwp.min * 8, max: ECONOMIC_FACTS.production.plateauKwhPerKwp.max * 8 }, 'kWh', 'en'), price: formatRangeForLocale(getSystemCostRange(8), 'CHF', 'en'), area: `${ECONOMIC_FACTS.roofAreaM2PerKwp * 8} m²`, ideal: 'Detached house' },
  { size: '10 kWp', production: formatRangeForLocale({ min: ECONOMIC_FACTS.production.plateauKwhPerKwp.min * 10, max: ECONOMIC_FACTS.production.plateauKwhPerKwp.max * 10 }, 'kWh', 'en'), price: formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en'), area: `${ECONOMIC_FACTS.roofAreaM2PerKwp * 10} m²`, ideal: 'Large house / apartment building' },
];

const storageTable = [
  { size: '5 kWh', price: formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[5], 'CHF', 'en') },
  { size: '10 kWh', price: formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'en') },
];

const costFactors = [
  {
    icon: Building2,
    title: 'System size',
    text: 'Larger systems generally have lower costs per kWp, as installation costs are spread across more output.',
  },
  {
    icon: Home,
    title: 'Roof area',
    text: 'The larger the available roof area, the larger the system can be dimensioned.',
  },
  {
    icon: Home,
    title: 'Roof type',
    text: 'Flat roofs or complex roof shapes can result in higher installation costs.',
  },
  {
    icon: Sun,
    title: 'Components',
    text: 'High-quality modules or inverters can increase the price but offer longer warranties and a longer service life.',
  },
];

const faqs = [
  {
    question: 'What does a photovoltaic system cost for a detached house?',
    answer: `A 10 kWp solar installation costs ${formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')} before subsidies.`,
  },
  {
    question: 'How much does a 10 kW solar installation cost in Switzerland?',
    answer: `A 10 kWp photovoltaic system costs ${formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')} before subsidies. On the Swiss Plateau it produces ${formatRangeForLocale({ min: ECONOMIC_FACTS.production.plateauKwhPerKwp.min * 10, max: ECONOMIC_FACTS.production.plateauKwhPerKwp.max * 10 }, 'kWh per year', 'en')}.`,
  },
  {
    question: 'How much electricity does a solar installation produce?',
    answer: `On the Swiss Plateau, a solar installation produces ${formatRangeForLocale(ECONOMIC_FACTS.production.plateauKwhPerKwp, 'kWh per kWp per year', 'en')}.`,
  },
  {
    question: 'Is a solar installation worthwhile in Switzerland?',
    answer: `On the Swiss Plateau, the indicative payback period is ${formatRangeForLocale(ECONOMIC_FACTS.systemPaybackYears.plateau, 'years', 'en')}. Modules last ${formatRangeForLocale(ECONOMIC_FACTS.moduleLifetimeYears, 'years', 'en')}.`,
  },
  {
    question: 'How many solar modules does a detached house need?',
    answer: 'The number of modules depends on the system size and the output of the selected modules.',
  },
  {
    question: 'How large does my roof need to be for a solar installation?',
    answer: `Allow approximately ${ECONOMIC_FACTS.roofAreaM2PerKwp} m² per kWp. A 10 kWp system therefore needs about ${ECONOMIC_FACTS.roofAreaM2PerKwp * 10} m².`,
  },
  {
    question: 'What subsidies are available for solar installations in Switzerland?',
    answer: `Pronovo pays ${formatChfForLocale(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en')} per kWp up to 30 kWp, plus a base contribution. Cantonal and municipal support may also apply.`,
  },
  {
    question: 'What does a solar installation with battery storage cost?',
    answer: `Battery storage increases the cost: 5 kWh costs ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[5], 'CHF', 'en')} and 10 kWh costs ${formatRangeForLocale(ECONOMIC_FACTS.storageCosts.byCapacity[10], 'CHF', 'en')}.`,
  },
];

export default function SolarPanelCostsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How much does a solar installation cost in Switzerland? Current prices 2026",
            "description": "Current costs for solar installations in Switzerland. 5–10 kWp systems, costs per kWp, subsidies and battery storage.",
            "author": { "@type": "Organization", "name": "PvPro.ch" },
            "publisher": { "@type": "Organization", "name": "PvPro.ch", "url": "https://www.pvpro.ch" },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
            }))
          })
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-sans font-semibold tracking-normal text-gray-900 mb-6 leading-tight">
                How much does a solar installation cost in Switzerland?
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                The costs depend primarily on the system size, the roof area and the components used.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                For a typical detached house, prices are usually between:
              </p>
              <div className="inline-block bg-primary text-white rounded-2xl px-10 py-6 mb-8">
                <div className="text-4xl sm:text-5xl font-bold mb-1">{formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')}</div>
                <div className="text-primary-100 text-base">gross cost for 10 kWp</div>
              </div>
              <p className="text-gray-600">
                An average installation for a detached house has an output of approximately <strong>8 to 10 kWp</strong>.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/asset-haus-luftbild-2.webp"
                alt="Solar installation on a Swiss detached house – aerial view"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            Solar installation costs for a detached house
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Typical price ranges for photovoltaic systems in Switzerland
          </p>

          {/* Desktop table */}
          <div className="hidden md:block max-w-4xl mx-auto mb-10 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-6 py-4 font-semibold">System size</th>
                  <th className="px-6 py-4 font-semibold">Annual electricity production</th>
                  <th className="px-6 py-4 font-semibold">Roof area (approx.)</th>
                  <th className="px-6 py-4 font-semibold">Cost (approx.)</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{row.size}</td>
                    <td className="px-6 py-4 text-gray-700">{row.production}</td>
                    <td className="px-6 py-4 text-gray-700">{row.area}</td>
                    <td className="px-6 py-4 font-bold text-primary">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-10">
            {costTable.map((row, i) => (
              <div key={i} className={`rounded-2xl p-5 border-2 ${i === 1 ? 'border-primary bg-primary-50' : 'border-gray-200 bg-white'}`}>
                {i === 1 && (
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    Most popular size
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xl font-bold text-gray-900">{row.size}</span>
                  <span className="text-xl font-bold text-primary">{row.price}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Production:</span> {row.production}</div>
                  <div><span className="font-medium">Roof area:</span> {row.area}</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">Ideal for: {row.ideal}</div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-3xl mx-auto text-sm text-gray-600 text-center">
             {SYSTEM_PRICE_NOTES.en} {SOURCE_NOTES.en}
          </div>
        </div>
      </section>

      {/* Cost per kWp */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Cost per kWp in Switzerland
            </h2>
            <p className="text-gray-600 mb-6">
              The cost of a photovoltaic system is often calculated per kWp (kilowatt peak).
              In Switzerland, average costs are:
            </p>
            <div className="bg-white rounded-2xl border-2 border-primary p-8 text-center mb-6">
               <div className="text-4xl font-bold text-primary mb-2">{formatRangeForLocale(ECONOMIC_FACTS.systemCosts.perKwp, 'CHF', 'en')} <span className="text-2xl">per kWp</span></div>
              <p className="text-gray-600 text-sm mt-2">
                The price per kWp decreases for larger systems, as installation costs can be better distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 kW solar installation */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              How much does a 10 kW solar installation cost in Switzerland?
            </h2>
            <p className="text-gray-600 mb-6">
              A photovoltaic system with <strong>10 kWp output</strong> typically costs in Switzerland:
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
               <div className="text-4xl font-bold text-primary mb-3">{formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')}</div>
               <p className="text-gray-700 text-sm">gross cost before subsidies</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Annual electricity production</p>
                   <p className="text-gray-600">On the Swiss Plateau, a 10 kWp system produces <strong>{formatRangeForLocale({ min: ECONOMIC_FACTS.production.plateauKwhPerKwp.min * 10, max: ECONOMIC_FACTS.production.plateauKwhPerKwp.max * 10 }, 'kWh per year', 'en')}</strong>.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                 For a 10 kWp system, allow approximately <strong>{ECONOMIC_FACTS.roofAreaM2PerKwp * 10} m² of roof area</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solar installation with storage */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              How much does a solar installation with storage cost?
            </h2>
            <p className="text-gray-600 mb-6">
              Battery storage increases the cost of a solar installation – but it allows you to use more of your own electricity and feed less into the grid.
            </p>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 font-semibold">Storage capacity</th>
                    <th className="px-6 py-4 font-semibold">Cost (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {storageTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900 flex items-center gap-2">
                        <Battery className="w-4 h-4 text-primary" />{row.size}
                      </td>
                      <td className="px-6 py-4 font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3 mb-6">
              {storageTable.map((row, i) => (
                <div key={i} className="flex justify-between items-center bg-white rounded-xl border border-gray-200 px-5 py-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <Battery className="w-4 h-4 text-primary" />{row.size}
                  </div>
                  <span className="font-bold text-primary">{row.price}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              Storage can significantly increase the self-consumption of self-produced electricity.
            </p>
            <p className="text-xs text-gray-500 mb-4">{STORAGE_PRICE_NOTES.en} {SOURCE_NOTES.en}</p>
            <Link
              href="/en/solar-with-battery"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              → More information: Solar installation with battery storage
            </Link>
          </div>
        </div>
      </section>

      {/* Cost factors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            What factors influence the costs?
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            The most important factors that determine the price of a solar installation in Switzerland
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <f.icon className="w-9 h-9 text-primary mb-4" />
                <h3 className="text-lg font-sans font-semibold tracking-normal text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sans font-semibold tracking-normal text-gray-900 mb-4">
              Subsidies for solar installations in Switzerland
            </h2>
            <p className="text-gray-600 mb-6">
              In Switzerland, the federal government supports photovoltaic systems with the <strong>one-time payment (OTP)</strong>.
              This subsidy noticeably reduces investment costs.
            </p>
            <div className="bg-primary-50 rounded-2xl p-8 mb-6">
              <div className="flex items-start gap-4">
                <PiggyBank className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                   <p className="text-2xl font-bold text-primary mb-1">{formatChfForLocale(ECONOMIC_FACTS.incentives.pronovoPerKwpUpTo30, 'en')} per kWp</p>
                  <p className="text-gray-700">Typical federal subsidy amounts (OTP). The level depends on the system size.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Calculation example: 10 kWp system
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gross cost</span>
                   <span className="font-medium">{formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')}</span>
                </div>
                <div className="flex justify-between text-primary">
                   <span>– One-time payment OTP</span>
                   <span className="font-medium">– {formatChfForLocale(ECONOMIC_FACTS.incentives.tenKwpApprox, 'en')}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Effective cost (example)</span>
                   <span className="font-bold text-xl text-primary">{formatRangeForLocale({ min: getSystemCostRange(10).min - ECONOMIC_FACTS.incentives.tenKwpApprox, max: getSystemCostRange(10).max - ECONOMIC_FACTS.incentives.tenKwpApprox }, 'CHF', 'en')}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">Reference value. Actual subsidies vary by canton and system size.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-primary-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <Calculator className="w-14 h-14 text-primary flex-shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Solar Calculator: calculate costs</h3>
              <p className="text-gray-600 text-sm">
                Estimate the costs of your solar installation based on your roof area and electricity consumption.
              </p>
            </div>
            <Link href="/en/solar-calculator" className="btn-primary px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap flex-shrink-0">
              Start Solar Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Quotes */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Get free quotes now"
              subtitle="Compare up to 3 offers from vetted Swiss solar installers. Done in 2 minutes."
              ctaText="Request free quote"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-sans font-semibold tracking-normal text-center text-gray-900 mb-4">
            FAQ – Frequently asked questions about solar installation costs
          </h2>
          <p className="text-center text-gray-600 mb-10">Answers to the most common questions about the cost of a solar installation in Switzerland</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-sans font-semibold tracking-normal text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In brief */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">In brief</h2>
            <p className="text-gray-600 mb-4">A solar installation in Switzerland typically costs:</p>
             <div className="text-4xl font-bold text-primary mb-3">{formatRangeForLocale(getSystemCostRange(10), 'CHF', 'en')}</div>
             <p className="text-gray-600 text-sm mb-6">gross cost for 10 kWp</p>
             <p className="text-xs text-gray-500 mb-4">{SYSTEM_PRICE_NOTES.en} {SOURCE_NOTES.en}</p>
            <p className="text-gray-500 text-sm">
              The exact costs depend on the roof area, system size and available subsidies.
              Request 3 quotes without obligation from vetted installers.
            </p>
          </div>
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
