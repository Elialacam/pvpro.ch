import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Solar installation for detached houses Switzerland: costs, size and benefits | PVPro.ch',
  description: 'What does a solar installation for a detached house in Switzerland cost? Prices, size, subsidies and tips explained simply. Compare offers now.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-detached-house',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-maison-individuelle',
      'en-CH': 'https://www.pvpro.ch/en/solar-detached-house',
      'it-CH': 'https://www.pvpro.ch/it/solare-casa-unifamiliare',
      'x-default': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Small installation (6–8 kWp)',  price: "approx. CHF 20,000 – 25,000", highlight: false },
  { size: 'Standard (8–10 kWp)',           price: "approx. CHF 25,000 – 30,000", highlight: true },
  { size: 'Larger installation (10–15 kWp)', price: "approx. CHF 30,000 – 35,000", highlight: false },
];

const exampleRows = [
  { label: 'Roof area',       value: '60 m²',                     highlight: false },
  { label: 'Output',          value: '10 kWp',                    highlight: false },
  { label: 'Costs',           value: "approx. CHF 25,000 – 30,000", highlight: false },
  { label: 'OTP subsidy',     value: "approx. CHF 3,600",         highlight: false },
  { label: 'Net costs',       value: "approx. CHF 20,000 – 26,000", highlight: true },
];

const factors = [
  { icon: Home,   title: 'Roof size and orientation', text: 'South-facing roofs deliver the best performance. East/west roofs are also very suitable.' },
  { icon: Ruler,  title: 'System size',               text: 'Larger systems are cheaper per kWp — economies of scale affect the price.' },
  { icon: Cpu,    title: 'Technology and components', text: 'Modules, inverters and optional storage influence costs and performance.' },
  { icon: Wrench, title: 'Installation effort',       text: 'Complex roofs or difficult access increase the installation effort.' },
];

const benefits = [
  'Significantly reduce electricity costs',
  'Increase energy independence',
  'Increase property value',
  'Use sustainable energy directly from your roof',
];

export default function SolarDetachedHousePage() {
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
            <span className="text-white/70">Solar detached house</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> For homeowners
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Solar installation for detached house: costs, size and benefits
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                A solar installation reduces your electricity costs and makes you more independent. A typical detached house is equipped with <strong className="text-white">8–12 kWp</strong> — that's approximately <strong className="text-white">50–70 m²</strong> of roof area.
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
                { value: '8–12 kWp',     label: 'Typical system size' },
                { value: '25,000–30,000', label: 'CHF investment' },
                { value: '9,000–11,000',  label: 'kWh production/year' },
                { value: '25–30 years',   label: 'Lifespan' },
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

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Size calculator</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How large should your solar installation be?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                The optimal size depends on electricity consumption. As a rule of thumb:{' '}
                <strong className="text-gray-800">1,000 kWh consumption → approx. 1–2 kWp system.</strong>
              </p>
              <p className="text-gray-500 leading-relaxed">
                If you have a heat pump or an electric car, a larger system is often worthwhile. Use the calculator to get a first recommendation.
              </p>
            </div>
            <div className="lg:col-span-3">
              <EinfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Costs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What does a solar installation for a detached house cost?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              For a typical 10 kWp system with around 50 m² of roof area, investments of approximately{' '}
              <strong className="text-gray-800">CHF 25,000 to 30,000</strong> are realistic.
              After subsidies and tax deductions, the effective price can be significantly lower.
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>System size</span><span>Guide price</span>
              </div>
              {costRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                  <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img loading="lazy" src="/images/asset-installateur-dach-1.webp" alt="Solar installation detached house Switzerland" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Electricity production</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How much electricity does a solar installation produce?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                A typical installation on a detached house produces{' '}
                <strong className="text-white">approx. 9,000 – 11,000 kWh per year</strong> — covering the majority of a household's electricity needs.
              </p>
              {[
                { label: '8 kWp system',  value: "7,200 – 8,800 kWh/year",   pct: 65 },
                { label: '10 kWp system', value: "9,000 – 11,000 kWh/year",  pct: 80 },
                { label: '12 kWp system', value: "10,800 – 13,200 kWh/year", pct: 95 },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img loading="lazy" src="/images/asset-haus-luftbild-1.webp" alt="Detached house with solar installation" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Is it worth it ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img loading="lazy" src="/images/asset-beratung-indoor-2.webp" alt="Solar installation consultation" className="w-full h-80 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Profitability</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Is a solar installation for a detached house worth it?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Yes, in most cases a photovoltaic installation is worthwhile in the long run. Through self-consumption and subsidies, the system pays for itself over the years.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subsidies ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Subsidies</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Subsidies for solar installations in Switzerland
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                For a 10 kWp system, the federal subsidy amounts to approximately <strong className="text-gray-800">CHF 3,600</strong>. Additional cantonal subsidies and tax deductions also apply.
              </p>
              <div className="space-y-3">
                {[
                  "One-time payment (OTP) from the federal government: approx. CHF 360/kWp",
                  "Additional cantonal subsidy programmes",
                  "Tax deductions at federal level",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/en/solar-subsidies" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#F97316] hover:underline">
                View all subsidies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Investment (10 kWp)',    value: "CHF 25,000 – 30,000",    color: 'text-gray-800',   highlight: false },
                { label: 'Federal OTP subsidy',   value: '– CHF 3,600',            color: 'text-green-600',  highlight: false },
                { label: 'Cantonal subsidy',      value: 'varies',                 color: 'text-green-600',  highlight: false },
                { label: 'Tax deductions',        value: 'varies',                 color: 'text-green-600',  highlight: false },
                { label: 'Net costs',             value: "approx. CHF 20,000 – 26,000", color: 'text-[#F97316]', highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between items-center px-5 py-3.5 rounded-xl ${row.highlight ? 'bg-orange-50 border border-orange-100' : 'bg-white border border-gray-100'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold text-sm ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Battery storage ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Battery storage</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">With or without battery storage?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <p className="font-bold text-gray-900 text-lg mb-1">Without storage</p>
              <p className="text-sm text-gray-400 mb-4">More affordable option</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Lower upfront investment</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Faster payback</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Self-consumption approx. 25–40%</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#F97316]/30 p-6 shadow-sm bg-orange-50">
              <p className="font-bold text-gray-900 text-lg mb-1">With battery storage</p>
              <p className="text-sm text-[#F97316] font-semibold mb-4">Recommended for high consumption</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Self-consumption up to 50–65%</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Use electricity in the evening too</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Greater independence</span></div>
              </div>
            </div>
          </div>
          <Link href="/en/solar-with-battery" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#F97316] hover:underline">
            Learn more about battery storage <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Cost factors</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">What factors influence the costs?</h2>
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

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calculation example</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Example: Solar installation for a detached house</h2>
          <div className="max-w-lg">
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently asked questions about solar installations for detached houses
          </h2>
          <EinfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Sun className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Compare offers and optimise costs
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Solar installation prices vary greatly depending on the provider. Via PVPro you receive up to 3 free quotes from certified installers in your region.
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
