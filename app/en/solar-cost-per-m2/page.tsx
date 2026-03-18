import Link from 'next/link';
import { ChevronRight, Sun, Home, Ruler, Award, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import PhotovoltaikFaq from '@/components/PhotovoltaikFaq';

export const metadata: Metadata = {
  title: 'Solar cost per m² Switzerland: prices, examples and calculation | PVPro.ch',
  description: 'How much does solar cost per m² in Switzerland? Prices, examples and costs per kWp explained simply. Compare offers now.',
  alternates: { canonical: 'https://www.pvpro.ch/en/solar-cost-per-m2' },
};

const priceRows = [
  { label: 'Basic installation',     range: 'approx. 200 – 250 CHF', color: '#6b7280', highlight: false },
  { label: 'Standard installation',  range: 'approx. 250 – 350 CHF', color: '#F97316', highlight: true },
  { label: 'Premium installation',   range: 'approx. 350 – 400+ CHF', color: '#1e3a5f', highlight: false },
];

const factors = [
  { icon: Home,  title: 'Roof type',       text: 'A flat roof is often cheaper to install than a complex pitched roof.' },
  { icon: Ruler, title: 'System size',     text: 'Larger installations are usually cheaper per m² due to economies of scale.' },
  { icon: Award, title: 'Module quality',  text: 'Premium modules cost more but often deliver higher output per m².' },
  { icon: Wrench, title: 'Installation effort', text: 'Difficult roofs or additional work increase the price significantly.' },
];

export default function SolarCostPerM2Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar cost per m²</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" />Costs & prices
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Photovoltaic costs per m² in Switzerland
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Many homeowners want to quickly understand the cost of a solar installation for their roof — without technical details. In Switzerland, the average cost of photovoltaics is between{' '}
              <strong className="text-white">CHF 200 and 400 per m²</strong>.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                { unit: 'per m²', price: '200 – 400 CHF', note: 'First rough estimate' },
                { unit: 'per kWp', price: "1'000 – 1'500 CHF", note: 'More precise planning & quote' },
              ].map(r => (
                <div key={r.unit} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-xl font-bold text-white mb-1">{r.price}</p>
                  <p className="text-xs text-orange-400 font-bold uppercase tracking-wide mb-2">{r.unit}</p>
                  <p className="text-xs text-gray-500">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Price ranges</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Costs by quality</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-6">
            {priceRows.map((row) => (
              <div key={row.label} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 mb-3 rounded-2xl border ${row.highlight ? 'border-orange-200' : 'border-gray-100'}`}
                style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : {}}>
                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                  {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Standard</span>}
                  <span className="font-bold text-gray-900">{row.label}</span>
                </div>
                <span className="font-bold" style={{ color: row.color }}>{row.range}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="font-bold text-gray-900 mb-3">Calculation example</p>
            {[
              { label: 'Roof area', value: '60 m²' },
              { label: 'Price per m²', value: '250 CHF' },
              { label: 'Total price (indicative)', value: "approx. CHF 15'000", bold: true },
            ].map(r => (
              <div key={r.label} className="flex justify-between py-2 border-b border-orange-100 last:border-b-0">
                <span className="text-sm text-gray-600">{r.label}</span>
                <span className={`text-sm ${r.bold ? 'font-bold text-[#F97316]' : 'text-gray-900'}`}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Cost factors</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What influences the price per m²?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl bg-white p-7 border border-gray-100 hover:shadow-md transition-shadow">
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
          <PhotovoltaikFaq />
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get a precise quote</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Receive up to 3 quotes from certified installers with exact prices.</p>
            <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Get free quotes →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
