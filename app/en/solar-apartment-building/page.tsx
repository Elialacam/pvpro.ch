import Link from 'next/link';
import { ChevronRight, Building2, ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Solar installation for apartment buildings Switzerland: costs, ZEC and profitability | PVPro.ch',
  description: 'How much does a solar installation for an apartment building cost? Costs, ZEC, size and profitability for multiple residential units in Switzerland.',
  alternates: { canonical: 'https://www.pvpro.ch/en/solar-apartment-building' },
};

const costRows = [
  { size: 'Small installation (15–30 kWp)', price: "approx. CHF 40'000 – 80'000", highlight: false },
  { size: 'Medium installation (30–60 kWp)', price: "approx. CHF 80'000 – 150'000", highlight: true },
  { size: 'Large installation (60+ kWp)', price: "CHF 150'000 +", highlight: false },
];

const sizeGuide = [
  { units: '5–10 units',     kwp: 'approx. 20–40 kWp', m2: 'approx. 100–240 m²' },
  { units: '10–20 units',    kwp: 'approx. 40–80 kWp', m2: 'approx. 200–480 m²' },
  { units: 'Larger buildings', kwp: '80 kWp +',          m2: '480 m² +' },
];

const benefits = [
  { icon: TrendingUp, title: 'Higher self-consumption', text: 'With many users, solar electricity is consumed evenly throughout the day — ideal for apartment buildings.' },
  { icon: Users,      title: 'Lower costs for all',    text: 'Solar electricity is cheaper than grid electricity. All tenants benefit directly from lower electricity bills.' },
  { icon: Building2,  title: 'Property value rises',   text: 'Buildings with solar installations are more attractive to tenants and buyers.' },
  { icon: BarChart3,  title: 'Stable energy prices',   text: 'Independence from electricity price rises protects owners and tenants in the long term.' },
];

export default function SolarApartmentBuildingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar apartment building</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Building2 className="w-3.5 h-3.5" />Apartment buildings
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Solar for apartment buildings: costs, ZEC and profitability
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Apartment buildings offer huge potential for photovoltaics. With a local electricity community (ZEC), all tenants can benefit directly from solar electricity.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '60–75%', label: 'Self-consumption possible' },
                { value: '25+ yrs', label: 'Service life' },
                { value: '10–15 yrs', label: 'Payback period' },
              ].map(s => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Why solar for apartment buildings?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Price overview</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Costs by size</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-10">
            {costRows.map((row) => (
              <div key={row.size} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 mb-3 rounded-2xl border ${row.highlight ? 'border-orange-200' : 'border-gray-100'}`}
                style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' } : {}}>
                <div className="flex items-center gap-2 mb-1 sm:mb-0">
                  {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Popular</span>}
                  <span className="font-bold text-gray-900">{row.size}</span>
                </div>
                <span className="font-bold text-[#F97316]">{row.price}</span>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-4">Sizing guide</h3>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-3 bg-gray-900 text-gray-400 text-xs font-bold uppercase tracking-widest">
                {['Units', 'Output', 'Area'].map(h => <div key={h} className="px-5 py-3">{h}</div>)}
              </div>
              {sizeGuide.map((row) => (
                <div key={row.units} className="grid grid-cols-3 border-t border-gray-100">
                  <div className="px-5 py-4 font-bold text-gray-900">{row.units}</div>
                  <div className="px-5 py-4 text-[#F97316] font-bold">{row.kwp}</div>
                  <div className="px-5 py-4 text-gray-600">{row.m2}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Custom calculation</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Calculate your building</h2>
          </div>
          <MehrfamilienhausRechner />
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <MehrfamilienhausFaq />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Get quotes for your building</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Receive up to 3 quotes from certified installers.</p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Get free quotes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
