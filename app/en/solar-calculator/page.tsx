import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Calculator Switzerland 2026 – Calculate Costs & Yield | PVPro',
  description: 'Free solar calculator for Switzerland. Calculate the costs, yield and payback period of your solar installation in 30 seconds. With subsidies and 2026 reference values.',
  alternates: {
    canonical: 'https://pvpro.ch/en/solar-calculator',
    languages: {
      'de-CH': 'https://pvpro.ch/solarrechner',
      'fr-CH': 'https://pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://pvpro.ch/en/solar-calculator',
      'it-CH': 'https://pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Solar Calculator Switzerland 2026 – Calculate Costs & Yield',
    description: 'Free solar calculator for Switzerland. Costs, yield and payback period of your installation.',
    url: 'https://pvpro.ch/en/solar-calculator',
    type: 'website',
    locale: 'en_GB',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'How accurate is the solar calculator?',
    answer: 'Our solar calculator provides a solid first estimate. It is based on Swiss average values: 6.5 m² per kWp, 950 kWh of production per kWp and CHF 2,200 installation costs per kWp. For an exact calculation, we recommend a professional on-site consultation that considers roof orientation, shading and local conditions.',
  },
  {
    question: 'How much roof space do I need per kWp?',
    answer: 'With modern modules, approximately 6.5 m² of roof area per kWp is required in Switzerland. For a typical 10 kWp installation, you need around 65 m² of usable roof space. Not all roof area is usable — skylights, chimneys and shading reduce the available surface.',
  },
  {
    question: 'What is the one-time payment (OTP) subsidy?',
    answer: 'The federal one-time payment (OTP) is currently around CHF 350 per kWp installed. It is deducted directly from the installation price, noticeably reducing your actual costs. Additional cantonal subsidies may also be available. Together, subsidies can cover 20–30% of investment costs.',
  },
  {
    question: 'What is the typical payback period in Switzerland?',
    answer: 'The average payback period in Switzerland is 8–12 years, depending on electricity prices, self-consumption rate and subsidies received. After the payback period, you produce largely free electricity for another 15–20 years. With rising electricity prices, the payback period shortens further.',
  },
  {
    question: 'Is a solar installation worthwhile with a north-facing roof?',
    answer: 'A purely north-facing roof is not ideal. However, east and west-facing roofs still deliver 70–80% of a south-facing roof\'s yield and are usually worthwhile. For north-facing roofs, we recommend a professional case-by-case analysis. Modern bifacial solar modules can achieve convincing results even on less optimal roofs.',
  },
  {
    question: 'Should I add a battery storage system?',
    answer: 'A battery storage system increases your self-consumption rate from around 30% to 60–80%. It costs an additional CHF 8,000–15,000, but pays for itself increasingly quickly with rising electricity prices. Storage is particularly useful if you are rarely at home during the day or if you own an electric vehicle.',
  },
  {
    question: 'How does an electric vehicle affect my solar calculation?',
    answer: 'An electric vehicle with around 15,000 km per year consumes approximately 2,500 kWh. With a solar installation around 3 kWp larger, you can largely cover this additional consumption. Charging the car during the day with solar power significantly increases self-consumption and improves overall profitability.',
  },
  {
    question: 'Which canton has the most sunshine hours in Switzerland?',
    answer: 'Ticino and Valais are among the sunniest cantons in Switzerland with over 2,000 sunshine hours per year. German-speaking Switzerland is between 1,600 and 1,900 hours. Even in less sunny regions, solar installations are worthwhile — the difference in annual yield between Ticino and Zurich is only about 15–20%.',
  },
];

const systemSizes = [
  {
    label: 'Small',
    kwp: 6,
    flaeche: '39 m²',
    jahresertrag: '5,700 kWh',
    kosten: 'CHF 13,200',
    foerderung: 'CHF 2,100',
    nettokosten: 'CHF 11,100',
    amort: '9–12 years',
    haushalt: '2 people / apartment',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Medium',
    kwp: 10,
    flaeche: '65 m²',
    jahresertrag: '9,500 kWh',
    kosten: 'CHF 22,000',
    foerderung: 'CHF 3,500',
    nettokosten: 'CHF 18,500',
    amort: '8–11 years',
    haushalt: '3–4 people / detached house',
    color: 'border-[#F97316]/30 bg-orange-50',
    badge: 'bg-[#F97316]/10 text-[#F97316]',
    highlight: true,
  },
  {
    label: 'Large',
    kwp: 15,
    flaeche: '98 m²',
    jahresertrag: '14,250 kWh',
    kosten: 'CHF 33,000',
    foerderung: 'CHF 5,250',
    nettokosten: 'CHF 27,750',
    amort: '8–10 years',
    haushalt: 'Large family / apartment building',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Roof orientation',
    body: 'A south-facing roof achieves 100% yield. East/west deliver 70–80% each, north-facing roofs only 50–60%. The ideal angle is 25–35°.',
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
    body: 'Trees, chimneys or neighbouring buildings can reduce yield by 10–30%. Modern micro-inverters or optimisers minimise losses.',
    tip: 'Have shading checked',
  },
  {
    icon: Battery,
    title: 'Self-consumption',
    body: 'Without storage, you self-consume approximately 25–35% of production. With storage, self-consumption rises to 60–80% — significantly improving profitability.',
    tip: 'Storage increases self-consumption',
  },
  {
    icon: Zap,
    title: 'Electricity price',
    body: 'The average Swiss household currently pays around 25–30 ct/kWh. Every self-produced kilowatt is a direct saving. With rising prices, the installation pays off faster.',
    tip: '~25–30 ct/kWh in Switzerland',
  },
  {
    icon: TrendingUp,
    title: 'Grid feed-in',
    body: 'Electricity you do not consume yourself is fed into the grid. The remuneration varies from 6 to 15 ct/kWh depending on the grid operator — well below the purchase price.',
    tip: '6–15 ct/kWh feed-in rate',
  },
];

const richtigValues = [
  { label: 'Average sunshine hours/year (CH)', value: '1,600–2,100 h' },
  { label: 'Annual yield per kWp (CH average)', value: '950–1,000 kWh' },
  { label: 'Roof area per kWp (modern modules)', value: '6.5 m²' },
  { label: 'Installation cost per kWp', value: 'CHF 2,000–2,500' },
  { label: 'Federal OTP subsidy per kWp', value: '~CHF 350' },
  { label: 'Average self-consumption without storage', value: '25–35%' },
  { label: 'Average self-consumption with storage', value: '60–80%' },
  { label: 'Solar module lifespan', value: '25–30 years' },
  { label: 'Performance guarantee (typical)', value: '80% after 25 years' },
  { label: 'Payback period (Switzerland)', value: '8–12 years' },
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
            name: 'PVPro Solar Calculator',
            description: 'Free solar calculator for Switzerland',
            url: 'https://pvpro.ch/en/solar-calculator',
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
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar Calculator</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Free tool</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solar Calculator Switzerland 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Enter your roof area and electricity consumption — instantly receive a realistic estimate of costs, annual yield and payback period for your solar installation in Switzerland.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">100% free</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Instant results</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Swiss market data</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: '950–1,000', unit: 'kWh/kWp/year', label: 'Swiss average' },
                { val: '8–12', unit: 'years', label: 'Typical payback' },
                { val: '~350', unit: 'CHF/kWp', label: 'Federal OTP subsidy' },
                { val: '25–30', unit: 'years', label: 'Module lifespan' },
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
            Reference values: 6.5 m²/kWp · 950 kWh/kWp/year · CHF 2,200/kWp · OTP ~CHF 350/kWp. No binding quote.
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Reference values</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Typical installation sizes in Switzerland</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Different system sizes are recommended depending on household size and available roof space. All prices before cantonal subsidies — these can reduce costs by a further 10–15%.
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
            <Link href="/en/solar-panel-costs" className="text-[#F97316] ml-1 hover:underline">Detailed cost overview →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Influencing factors</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What influences your solar yield?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              The calculator works with average values. In practice, six factors play a decisive role — understand these to correctly interpret the result.
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
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Swiss reference values</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The numbers behind the calculator
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Our solar calculator is based on validated Swiss market data. These reference values help you interpret the result and understand the underlying assumptions.
              </p>
              <Link
                href="/en/request"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">It's simple</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">From calculation to quote</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              The calculator is the first step. In three further simple steps, you receive firm quotes from vetted Swiss installers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Enter roof area', desc: 'Estimate your usable roof area in m² (length × width). Typically: 40–100 m².' },
              { step: '2', title: 'Enter electricity consumption', desc: 'Your annual consumption is on your electricity bill — typically 3,500–7,000 kWh for a house.' },
              { step: '3', title: 'Understand your potential', desc: 'Immediately see: system size, annual yield, costs and estimated payback period.' },
              { step: '4', title: 'Compare quotes', desc: 'Request 3 free quotes from vetted installers — no commitment and quick.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
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

      {/* ── Regional note ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Regional differences</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Solar yield by region in Switzerland
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Solar irradiation varies regionally in Switzerland. Ticino and Valais are among the sunniest regions with over 2,000 sunshine hours per year and an annual yield of up to 1,100 kWh/kWp.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                German-speaking Switzerland and the Plateau are at 1,600–1,900 hours — still excellent conditions for solar energy. The difference in annual yield between Geneva and Zurich is less than 15%. Solar installations are worthwhile throughout Switzerland.
              </p>
              <Link href="/en/request" className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:underline">
                Request quotes for my location <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { region: 'Ticino (Lugano)', stunden: '2,080', ertrag: '1,080–1,100 kWh/kWp', bar: 100 },
                { region: 'Valais (Sion)', stunden: '2,130', ertrag: '1,050–1,100 kWh/kWp', bar: 99 },
                { region: 'Lake Geneva region', stunden: '1,870', ertrag: '970–1,000 kWh/kWp', bar: 87 },
                { region: 'Berne / Plateau', stunden: '1,720', ertrag: '900–950 kWh/kWp', bar: 80 },
                { region: 'Zurich', stunden: '1,700', ertrag: '880–920 kWh/kWp', bar: 78 },
                { region: 'Basel / Northern Switzerland', stunden: '1,660', ertrag: '860–900 kWh/kWp', bar: 76 },
              ].map(r => (
                <div key={r.region} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{r.region}</span>
                    <span className="text-xs text-gray-500">{r.stunden} h/year</span>
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Profitability</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What does a solar installation concretely bring you?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              With a typical 10 kWp installation in Switzerland — calculated with 25 ct/kWh electricity price and 35% self-consumption without storage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: 'Annual electricity savings',
                value: 'CHF 950',
                sub: '≈ 3,325 kWh self-consumed × 25 ct',
                color: 'text-[#F97316]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Feed-in remuneration / year',
                value: 'CHF 617',
                sub: '≈ 6,175 kWh fed in × 10 ct',
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Total benefit / year',
                value: 'CHF 1,567',
                sub: 'Savings + feed-in remuneration',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: 'Total benefit over 25 years',
                value: 'CHF 39,000+',
                sub: 'Electricity prices will continue to rise',
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
              <strong className="text-gray-800">Note:</strong> Figures are based on a 10 kWp installation with net costs of approximately CHF 18,500, 35% self-consumption, 25 ct/kWh purchase price and 10 ct/kWh feed-in tariff. With battery storage, an electric vehicle or rising electricity prices, profitability improves significantly.
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
              { icon: Zap, title: 'Calculate yield', desc: 'See how much electricity your roof can produce annually — based on your region.' },
              { icon: PiggyBank, title: 'Understand costs', desc: 'Realistic cost estimate with OTP subsidy based on current Swiss market prices.' },
              { icon: TrendingUp, title: 'Plan payback', desc: 'Find out when your investment pays off and how much you save over 25 years.' },
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Frequently asked questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Questions about the calculator and profitability</h2>
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
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
