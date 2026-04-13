import { Metadata } from 'next';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Sun, Home, Building2, Battery, Calculator, TrendingUp, PiggyBank } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Costs Switzerland 2026 – What does a solar installation cost? | PVPro',
  description: 'How much does a solar installation cost in Switzerland? 2026 prices: CHF 15,000 – 35,000 for a detached house. Costs per kWp, subsidies and storage. Compare offers free of charge.',
  keywords: [
    'Solar panel costs Switzerland',
    'Solar installation cost Switzerland',
    'Photovoltaic costs Switzerland',
    'Solar installation price detached house',
    'PV system cost per kWp',
    '10 kW solar installation cost',
    'Solar installation with storage cost',
    'Solar subsidies Switzerland',
  ],
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
    description: 'Current prices for solar installations in Switzerland. CHF 15,000 – 35,000 for a detached house after subsidy. All info on costs, kWp price and storage.',
    url: 'https://www.pvpro.ch/en/solar-panel-costs',
    type: 'article',
    locale: 'en_GB',
    siteName: 'PVPro',
  },
};

const costTable = [
  { size: '5 kWp', production: '4,500 – 5,000 kWh', price: 'CHF 13,000 – 18,000', area: 'approx. 30 – 35 m²', ideal: 'Small house' },
  { size: '8 kWp', production: '7,500 – 8,000 kWh', price: 'CHF 18,000 – 25,000', area: 'approx. 50 – 55 m²', ideal: 'Detached house' },
  { size: '10 kWp', production: '9,000 – 10,000 kWh', price: 'CHF 22,000 – 30,000', area: 'approx. 62 – 68 m²', ideal: 'Large house / apartment building' },
];

const storageTable = [
  { size: '5 kWh', price: 'CHF 4,000 – 6,000' },
  { size: '10 kWh', price: 'CHF 7,000 – 10,000' },
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
    answer: 'Most solar installations for detached houses in Switzerland cost between CHF 18,000 and CHF 30,000 after deducting subsidies (OTP). For a typical installation of 8 to 10 kWp, this is the usual price range.',
  },
  {
    question: 'How much does a 10 kW solar installation cost in Switzerland?',
    answer: 'A photovoltaic system with 10 kWp typically costs between CHF 22,000 and CHF 30,000 in Switzerland. After deducting the federal one-time payment (OTP), the net costs can be noticeably lower. Such a system produces approximately 9,000 – 10,000 kWh of electricity per year.',
  },
  {
    question: 'How much electricity does a solar installation produce?',
    answer: 'In Switzerland, a solar installation produces approximately 900 – 1,000 kWh of electricity per kWp per year. A 10 kWp system therefore generates around 9,000 – 10,000 kWh annually – often enough to cover a large portion of a detached house\'s electricity consumption.',
  },
  {
    question: 'Is a solar installation worthwhile in Switzerland?',
    answer: 'Yes. Due to rising electricity prices and available subsidies, many installations in Switzerland pay for themselves within 10 to 15 years. With a lifespan of 25 – 30 years, that means years of free electricity from your own roof.',
  },
  {
    question: 'How many solar modules does a detached house need?',
    answer: 'For a typical installation of 8 to 10 kWp, 20 to 30 solar modules are generally needed, depending on the module output (usually 400 – 450 watts per module).',
  },
  {
    question: 'How large does my roof need to be for a solar installation?',
    answer: 'For 1 kWp of output, approximately 6 to 7 m² of roof area is required. A 10 kWp system therefore needs around 60 – 70 m² of suitable roof surface.',
  },
  {
    question: 'What subsidies are available for solar installations in Switzerland?',
    answer: 'In Switzerland the federal government offers the one-time payment (OTP). Typical subsidy amounts are around CHF 300 – 400 per kWp. Additionally, many cantons and municipalities offer their own support programmes. The investment is also tax-deductible.',
  },
  {
    question: 'What does a solar installation with battery storage cost?',
    answer: 'Battery storage increases the cost of the solar installation: a 5 kWh storage system costs around CHF 4,000 – 6,000, a 10 kWh system around CHF 7,000 – 10,000. With storage, the self-consumption of self-produced electricity increases significantly.',
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
            "author": { "@type": "Organization", "name": "PVPro" },
            "publisher": { "@type": "Organization", "name": "PVPro", "url": "https://www.pvpro.ch" },
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
                <div className="text-4xl sm:text-5xl font-bold mb-1">CHF 15,000 – 35,000</div>
                <div className="text-primary-100 text-base">after deducting subsidies</div>
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
            These prices typically include: <strong>solar modules, inverter, mounting and installation.</strong> The actual price depends on the roof type, orientation and chosen components.
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
              <div className="text-4xl font-bold text-primary mb-2">CHF 1,800 – 2,800 <span className="text-2xl">per kWp</span></div>
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
              <div className="text-4xl font-bold text-primary mb-3">CHF 22,000 – 30,000</div>
              <p className="text-gray-700 text-sm">after deducting subsidies</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Annual electricity production</p>
                  <p className="text-gray-600">A 10 kWp system produces approximately <strong>9,000 – 10,000 kWh of electricity per year</strong> in Switzerland. This is often enough to cover a large portion of a detached house's electricity consumption.</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
              <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-yellow-800 text-sm">
                For a 10 kWp system you need approximately <strong>62 – 68 m² of roof area</strong> and 20 to 25 solar modules.
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
                  <p className="text-2xl font-bold text-primary mb-1">CHF 300 – 400 per kWp</p>
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
                  <span className="font-medium">CHF 26,000</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– One-time payment OTP (approx. CHF 350/kWp)</span>
                  <span className="font-medium">– CHF 3,500</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span>– Cantonal subsidy (example)</span>
                  <span className="font-medium">– CHF 2,000</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-semibold text-gray-900">Effective cost (example)</span>
                  <span className="font-bold text-xl text-primary">CHF 20,500</span>
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
            <div className="text-4xl font-bold text-primary mb-3">CHF 15,000 – 35,000</div>
            <p className="text-gray-600 text-sm mb-6">for a detached house</p>
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
