import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, TrendingUp, Users, Building2, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Solar installation for apartment buildings Switzerland: costs, ZEC and profitability | PVPro.ch',
  description: 'How much does a solar installation for an apartment building cost? Costs, ZEC, size and profitability for multiple residential units in Switzerland.',
  alternates: {
    canonical: 'https://pvpro.ch/en/solar-apartment-building',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-mehrfamilienhaus',
      'fr-CH': 'https://pvpro.ch/fr/solaire-immeuble',
      'en-CH': 'https://pvpro.ch/en/solar-apartment-building',
      'it-CH': 'https://pvpro.ch/it/solare-condominio',
      'x-default': 'https://pvpro.ch/solaranlage-mehrfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Small installation (15–30 kWp)',   price: "approx. CHF 40,000 – 80,000", highlight: false },
  { size: 'Medium installation (30–60 kWp)',  price: "approx. CHF 80,000 – 150,000", highlight: true },
  { size: 'Large installation (60+ kWp)',     price: "CHF 150,000+",                 highlight: false },
];

const sizeGuide = [
  { label: '5–10 units',      kwp: 'approx. 20–40 kWp', m2: 'approx. 100–240 m²' },
  { label: '10–20 units',     kwp: 'approx. 40–80 kWp', m2: 'approx. 200–480 m²' },
  { label: 'Larger buildings', kwp: '80 kWp +',           m2: '480 m² +' },
];

const exampleRows = [
  { label: 'Apartments',          value: '10',               highlight: false },
  { label: 'Output',              value: '50 kWp',           highlight: false },
  { label: 'Costs',               value: "approx. CHF 100,000", highlight: false },
  { label: 'Usage model',         value: 'ZEC',              highlight: false },
  { label: 'Self-consumption rate', value: '60–75%',         highlight: true },
];

const benefits = [
  { icon: TrendingUp, title: 'Higher self-consumption',  text: 'With many users, solar electricity is consumed evenly throughout the day — ideal for apartment buildings.' },
  { icon: Users,      title: 'Lower costs for all',      text: 'Solar electricity is cheaper than grid electricity. All tenants benefit directly from lower electricity bills.' },
  { icon: Building2,  title: 'Property value rises',     text: 'Buildings with solar installations are more attractive to tenants and buyers.' },
  { icon: BarChart3,  title: 'Stable energy prices',     text: 'Independence from electricity price rises protects owners and tenants in the long term.' },
];

const wirtschaftFaktoren = [
  { title: 'Self-consumption',      text: 'The higher the self-consumption, the better the return. In apartment buildings, a large share is consumed directly.' },
  { title: 'System size',           text: 'Larger systems are more efficient and cheaper per kWp — economies of scale.' },
  { title: 'Consumption patterns',  text: 'Consistent electricity consumption throughout the day increases the use of solar energy.' },
  { title: 'ZEC structure',         text: 'Good organisation and meter infrastructure in the building are decisive.' },
];

export default function SolarApartmentBuildingPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar apartment building</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> For property owners
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solar for apartment buildings: costs, ZEC and benefits
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Apartment buildings offer ideal conditions for photovoltaics: large roof areas, many users and high self-consumption through the ZEC model. This makes them particularly{' '}
                <strong className="text-white">efficient and economical</strong>.
              </p>
              <Link
                href="/en/request"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Request free quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '20–120 kWp',    label: 'Typical system size' },
                { value: '40,000–150,000+', label: 'CHF investment' },
                { value: 'ZEC',           label: 'Joint usage model' },
                { value: '60–75%',        label: 'Self-consumption rate' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── ZEC explainer ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How does a solar installation work in an apartment building?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In an apartment building, solar electricity is produced centrally and then distributed to residents. The most common solution in Switzerland is the{' '}
              <strong className="text-gray-800">local electricity community (ZEC)</strong>.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6 space-y-3">
              <p className="font-bold text-gray-900 mb-2">With the ZEC:</p>
              {[
                'Electricity is used directly within the building',
                'Each apartment has its own meter',
                'Billing is internal — often cheaper than grid electricity',
                'Surplus electricity is fed into the grid',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-3.png" alt="Apartment building with solar installation" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">System calculator</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How large should the system be?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                The optimal size depends on the building's total electricity consumption. Select the number of apartments to get a first orientation.
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-3">
                {sizeGuide.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-700">{row.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#F97316]">{row.kwp}</span>
                      <span className="text-xs text-gray-400 ml-2">/ {row.m2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <MehrfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Costs</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What does a solar installation for an apartment building cost?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                The larger the system, the cheaper it becomes <strong className="text-gray-800">per kWp</strong> — economies of scale are particularly pronounced for larger buildings.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-gray-100 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>System</span><span>Guide price</span>
                </div>
                {costRows.map((row) => (
                  <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-200 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                    <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-installateur-dach-5.png" alt="Solar installation apartment building" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Billing steps ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Billing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            How is solar electricity billed in an apartment building?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '1', title: 'Produce solar electricity', text: 'The PV system on the roof generates electricity during the day for the entire building.' },
              { step: '2', title: 'Distribute internally (ZEC)', text: 'Electricity is distributed directly to all apartments via the building\'s internal network.' },
              { step: '3', title: 'Bill transparently', text: 'Each apartment only pays for the solar electricity actually consumed, via its sub-meter.' },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Profitability</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Why is a solar installation in an apartment building worthwhile?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Capital investment ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Capital investment</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Is an apartment building with photovoltaics a good investment?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Yes, in many cases. A solar installation can generate additional income, reduce operating costs and increase attractiveness for tenants.
              </p>
              <div className="space-y-3">
                {[
                  'Sell electricity to tenants cheaper than grid electricity',
                  'Permanently reduce operating costs',
                  'Increase attractiveness for tenants and buyers',
                  'Increase property value in the long term',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/asset-haus-solar-ev-1.png" alt="Apartment building solar investment" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Economic factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Profitability factors</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            What factors influence profitability?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {wirtschaftFaktoren.map((f, i) => (
              <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F97316] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calculation example</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Example: Solar installation for an apartment building
              </h2>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                {exampleRows.map((row, i) => (
                  <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-200' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                Thanks to shared consumption, a large proportion of electricity can be used directly within the building.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-beratung-indoor-3.png" alt="Solar planning for apartment building" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently asked questions about solar installations for apartment buildings
          </h2>
          <MehrfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Zap className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Compare offers and plan your installation optimally
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Every building is different and requires an individual solution. Via PVPro you compare multiple offers for free and find the best solution for your building.
          </p>
          <Link
            href="/en/request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Request free quote →
          </Link>
        </section>

      </div>
    </main>
  );
}
