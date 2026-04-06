import Link from 'next/link';
import { ChevronRight, Sun, Zap, TrendingDown, CheckCircle2, Home, Ruler, Award, Wrench } from 'lucide-react';
import { Metadata } from 'next';
import PhotovoltaikFaq from '@/components/PhotovoltaikFaq';

export const metadata: Metadata = {
  title: 'Solar cost per m² Switzerland: prices, examples and calculation | PVPro.ch',
  description: 'How much does solar cost per m² in Switzerland? Prices, examples and costs per kWp explained simply. Compare offers now.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-cost-per-m2',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
      'fr-CH': 'https://www.pvpro.ch/fr/cout-pv-par-m2',
      'en-CH': 'https://www.pvpro.ch/en/solar-cost-per-m2',
      'it-CH': 'https://www.pvpro.ch/it/costo-fv-per-m2',
      'x-default': 'https://www.pvpro.ch/photovoltaik-kosten-pro-m2',
    },
  },
};

const priceRows = [
  { label: 'Basic installation',     range: 'approx. 200 – 250 CHF', color: '#6b7280', highlight: false },
  { label: 'Standard installation',  range: 'approx. 250 – 350 CHF', color: '#F97316', highlight: true },
  { label: 'Premium installation',   range: 'approx. 350 – 400+ CHF', color: '#1e3a5f', highlight: false },
];

const comparisonRows = [
  { unit: 'per m²',  price: '200 – 400 CHF',    note: 'First rough estimate' },
  { unit: 'per kWp', price: "1,000 – 1,500 CHF", note: 'Accurate planning & quote' },
];

const exampleRows = [
  { position: 'Roof area',               value: '60 m²',             last: false },
  { position: 'Price per m²',            value: '250 CHF',           last: false },
  { position: 'Total price (guide)',      value: "approx. 15,000 CHF", last: true },
];

const factors = [
  { icon: Home,   title: 'Roof type',           text: 'A flat roof is often cheaper to install than a complex pitched roof.' },
  { icon: Ruler,  title: 'System size',         text: 'Larger systems are usually cheaper per m² due to economies of scale.' },
  { icon: Award,  title: 'Module quality',      text: 'Premium modules cost more but often deliver higher output per m².' },
  { icon: Wrench, title: 'Installation effort', text: 'Difficult roofs or additional work increase the price significantly.' },
];

export default function SolarCostPerM2Page() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #F97316 0%, transparent 60%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar cost per m²</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Costs & prices
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Photovoltaic costs per m² in Switzerland
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
              Many homeowners want to quickly understand the cost of a solar installation for their roof — without technical details. In Switzerland, the average cost of photovoltaics is between{' '}
              <strong className="text-white">200 and 400 CHF per m²</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '200 – 400 CHF', label: 'per m² guide price' },
                { value: '1 kWp ≈ 5–6 m²', label: 'space required' },
                { value: '150 – 200 kWh', label: 'electricity per m²/year' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Price table ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Price overview</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What does photovoltaics cost per m²?</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl">
            The cost per m² depends on module output, component quality, roof type and system size.
          </p>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-gray-50 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span>Category</span><span>Price per m²</span>
            </div>
            {priceRows.map((row) => (
              <div key={row.label} className={`grid grid-cols-2 px-6 py-5 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                <span className="font-bold text-gray-800 text-sm sm:text-base">{row.label}</span>
                <span className="font-bold text-base sm:text-lg" style={{ color: row.color }}>{row.range}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 italic">These values serve as a guide. The exact price always depends on the specific project.</p>
        </section>

        {/* ── Why kWp ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Understanding units</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why is it often not calculated in m²?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              In practice, photovoltaics are usually calculated in <strong className="text-gray-800">kWp (kilowatt peak)</strong>, because modules have different outputs, roof areas are differently usable and efficiency varies by technology.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6">
              <p className="text-sm font-bold text-[#F97316] mb-3">Rough conversion</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">1 kWp ≈ 5–6 m²</p>
              <div className="space-y-2 text-sm text-gray-600">
                {["10 kWp system → approx. 50–60 m² of roof area", "20 kWp system → approx. 100–120 m² of roof area"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-panel-closeup-1.png" alt="Solar panels Switzerland" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── m² vs kWp ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Comparison</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Cost per m² vs. cost per kWp</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {comparisonRows.map((row) => (
              <div key={row.unit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{row.unit}</p>
                <p className="text-3xl font-bold text-[#F97316] mb-2">{row.price}</p>
                <p className="text-sm text-gray-500">{row.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 max-w-xl">
            The price per m² is better suited for a rough initial estimate. For realistic planning, the price per kWp is usually more accurate.
          </p>
        </section>

        {/* ── Example ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-2.png" alt="Detached house with solar installation" className="w-full h-72 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calculation example</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Example: Solar installation for a detached house</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              A typical Swiss detached house with 60 m² of roof area and approx. 10 kWp output:
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-5 shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.position} className={`flex justify-between items-center px-5 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.last ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.last ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.position}</span>
                  <span className={`font-bold ${row.last ? 'text-[#F97316] text-lg' : 'text-gray-900'}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800 leading-relaxed">
              <strong>Note:</strong> In reality, total costs are often higher (20,000–30,000 CHF), as the inverter, installation, planning and assembly are added on top.
            </div>
          </div>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Cost factors</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">What factors influence the cost per m²?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Energy production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 60%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Electricity production</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How much electricity does 1 m² of photovoltaics produce?</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                One square metre of photovoltaics in Switzerland produces approximately{' '}
                <strong className="text-white">150 – 200 kWh of electricity per year</strong>. The exact output depends on orientation, tilt and location.
              </p>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <Zap className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                <p className="text-sm text-white/80">
                  <strong className="text-white">50 m²</strong> → approx. <strong className="text-white">7,500 – 10,000 kWh</strong> annually
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: '20 m²', kwh: "3,000 – 4,000 kWh/year", pct: 30 },
                { label: '40 m²', kwh: "6,000 – 8,000 kWh/year", pct: 60 },
                { label: '60 m²', kwh: "9,000 – 12,000 kWh/year", pct: 90 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.kwh}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── When worthwhile ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Profitability</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">When is photovoltaics per m² worthwhile?</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              The more electricity is self-consumed, the higher the profitability of the system.
            </p>
            <div className="space-y-3">
              {[
                'The roof is well oriented (south, east/west)',
                'As much electricity as possible is self-consumed',
                'Electricity consumption is high',
                'The roof is not shaded',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-beratung-indoor-1.png" alt="Solar consultation Switzerland" className="w-full h-72 object-cover" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently asked questions about photovoltaic costs per m²
          </h2>
          <PhotovoltaikFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <TrendingDown className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Compare offers and calculate costs accurately
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            The cost per m² is only a rough guide. Via PVPro you get free quotes from certified installers — accurately calculated for your home.
          </p>
          <Link
            href="/en/request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Get free quotes →
          </Link>
        </section>

      </div>
    </main>
  );
}
