import Link from 'next/link';
import { ChevronRight, CheckCircle, Sun, Home, Building2, Battery, Calculator } from 'lucide-react';
import { Metadata } from 'next';
import CtaAnfrage from '@/components/CtaAnfrage';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Costs Switzerland 2026 – What does a solar installation cost? | PVPro',
  description: 'How much does a solar installation cost in Switzerland? Current 2026 prices: CHF 15,000 – 35,000 for a detached house. Costs per kWp, subsidies and storage. Compare offers free of charge.',
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
};

const costTable = [
  { size: '5 kWp',  production: '4,500 – 5,000 kWh', price: "CHF 13'000 – 18'000", area: 'approx. 30 – 35 m²', ideal: 'Small house' },
  { size: '8 kWp',  production: '7,500 – 8,000 kWh', price: "CHF 18'000 – 25'000", area: 'approx. 50 – 55 m²', ideal: 'Detached house', highlight: true },
  { size: '10 kWp', production: '9,000 – 10,000 kWh', price: "CHF 22'000 – 30'000", area: 'approx. 62 – 68 m²', ideal: 'Large house / apartment' },
];

const costFactors = [
  { icon: Building2, title: 'System size', text: 'Larger installations have a lower cost per kWp due to economies of scale.' },
  { icon: Home,      title: 'Roof area', text: 'The larger the available roof area, the larger the installation can be dimensioned.' },
  { icon: Home,      title: 'Roof type', text: 'Flat roofs or complex roofs can result in higher installation costs.' },
  { icon: Sun,       title: 'Components', text: 'High-quality modules or inverters can increase the price but offer better warranties.' },
];

const faqs = [
  { question: 'What does a solar installation for a detached house cost?', answer: "Most solar installations for detached houses in Switzerland cost between CHF 18,000 and CHF 30,000 after subsidies (OTP). This is the typical price range for a standard 8 to 10 kWp system." },
  { question: 'How much does a 10 kW solar installation cost in Switzerland?', answer: "A 10 kWp photovoltaic installation in Switzerland typically costs between CHF 22,000 and CHF 30,000. After deducting the federal one-time payment (OTP), the net costs can be significantly lower. Such an installation produces approximately 9,000–10,000 kWh of electricity per year." },
  { question: 'How much electricity does a solar installation produce?', answer: "In Switzerland, a solar installation produces approximately 900–1,000 kWh per kWp per year. A 10 kWp installation therefore produces around 9,000–10,000 kWh annually." },
  { question: 'Is solar energy worth it in Switzerland?', answer: "Yes. With rising electricity prices and available subsidies, most installations pay for themselves within 10 to 15 years, with a lifespan of 25 to 30 years." },
];

export default function SolarPanelCostsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar panel costs</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />Prices 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Solar installation costs in Switzerland
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              Most Swiss detached houses pay between{' '}
              <strong className="text-white">CHF 15,000 and CHF 35,000</strong> for a complete photovoltaic installation — depending on the size, roof type and components chosen.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "1'400 – 2'200", unit: 'CHF/kWp', label: 'Average cost' },
                { value: '300 – 400',     unit: 'CHF/kWp', label: 'OTP subsidy' },
                { value: '10 – 15',       unit: 'years',   label: 'Payback period' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-lg font-bold text-white">{s.value}</p>
                  <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Price overview</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Prices by system size</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl shadow-xl border border-gray-100 mb-6">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                  {['Size', 'Annual production', 'Price (gross)', 'Area required', 'Ideal for'].map(h => (
                    <th key={h} className="px-5 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {costTable.map((row) => (
                  <tr key={row.size} className={`border-t ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                    style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : {}}>
                    <td className="px-5 py-5 font-bold text-gray-900">
                      <div className="flex items-center gap-2">
                        {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full">Popular</span>}
                        {row.size}
                      </div>
                    </td>
                    <td className="px-5 py-5 text-gray-600">{row.production}</td>
                    <td className="px-5 py-5 font-bold text-[#F97316]">{row.price}</td>
                    <td className="px-5 py-5 text-gray-600">{row.area}</td>
                    <td className="px-5 py-5 text-gray-600">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 text-center">Gross prices before subsidies. The one-time payment reduces costs by CHF 300–400/kWp.</p>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Cost factors</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What influences the price?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {costFactors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl p-6 bg-white border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Benefits of solar</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">Why invest?</h2>
              <div className="flex flex-col gap-3">
                {['Significantly reduce electricity costs', 'Increase energy independence', 'Increase property value', 'Use sustainable energy directly from your roof', 'Federal & cantonal subsidies available'].map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                    <span className="text-gray-600">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl border border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Battery className="w-5 h-5 text-[#F97316]" />
                  <p className="font-bold text-gray-900">With battery storage</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A battery storage system increases self-consumption to up to 70%. Additional cost:{' '}
                  <strong className="text-gray-800">CHF 7,000 – 15,000</strong> depending on capacity.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Frequently asked questions</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">FAQ on costs</h2>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <CtaAnfrage />
        </div>
      </section>
          <FaqSchema faqs={faqs} />
    </main>
  );
}
