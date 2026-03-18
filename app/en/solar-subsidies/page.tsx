import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import FoerderRechner from '@/components/FoerderRechner';

export const metadata: Metadata = {
  title: 'Solar Subsidies in Switzerland 2026 | PVPro.ch',
  description: 'One-time payment (OTP), cantonal programmes and tax deductions for photovoltaic installations in Switzerland. Calculate your subsidy now.',
  alternates: { canonical: 'https://www.pvpro.ch/en/solar-subsidies' },
};

const tableRows = [
  { size: '5 kWp',  subsidy: "approx. CHF 1'800", total: "approx. CHF 13'000", net: "approx. CHF 11'200" },
  { size: '8 kWp',  subsidy: "approx. CHF 2'800", total: "approx. CHF 20'800", net: "approx. CHF 18'000", highlight: true },
  { size: '10 kWp', subsidy: "approx. CHF 3'500", total: "approx. CHF 25'000", net: "approx. CHF 21'500" },
];

const processSteps = [
  { n: '1', title: 'Installation', text: 'Have the photovoltaic system installed by a certified installer.' },
  { n: '2', title: 'Registration', text: 'Register the system with Pronovo (pronovo.ch) — the installer often handles this for you.' },
  { n: '3', title: 'Review', text: 'The relevant authorities review the installation and documentation.' },
  { n: '4', title: 'OTP payment', text: 'The one-time payment is usually made a few months after registration.' },
];

export default function SolarSubsidiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero-solar-panels.webp" alt="Solar installation Switzerland" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/en" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Solar subsidies</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Government support 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Subsidies for<br />solar installations<br />in Switzerland
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                The federal government supports the expansion of photovoltaics with the <strong className="text-white">one-time payment (OTP)</strong>. This directly reduces your investment costs and makes solar energy economically attractive.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '300–400', unit: 'CHF/kWp', label: 'Subsidy' },
                  { value: '10–15',   unit: 'years',   label: 'Payback' },
                  { value: '30%',     unit: 'discount', label: 'Investment' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div><FoerderRechner /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">One-time payment (OTP)</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">What is the one-time payment?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The one-time payment is the main federal subsidy for photovoltaic installations in Switzerland. It is provided by the Confederation and managed by <strong>Pronovo</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                You receive the payment <strong>once</strong> after the installation and registration of your system — no annual application, no bureaucratic burden.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 border-2 border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">KLEIV</p>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">Small one-time payment</p>
                  <p className="text-sm text-gray-600 leading-relaxed">For smaller installations — most commonly used for private detached houses.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />Ideal for private homeowners
                  </div>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ background: '#f9fafb' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">GREIV</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Large one-time payment</p>
                  <p className="text-sm text-gray-600 leading-relaxed">For larger installations — e.g. apartment buildings or commercial properties.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <CheckCircle className="w-4 h-4" />For larger installations
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-2.png" alt="Solar subsidy Switzerland" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Subsidy overview</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">How much is the subsidy?</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              The subsidy is typically <strong className="text-gray-800">CHF 300–400 per kWp</strong> of installed capacity. The larger the installation, the higher the amount.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-4 gap-0" style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                {['System size', 'Subsidy (OTP)', 'Total cost', 'Net cost'].map(h => (
                  <div key={h} className="px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</div>
                ))}
              </div>
              {tableRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-4 gap-0 border-t ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                  style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : { background: '#fff' }}>
                  <div className="px-5 py-5 font-bold text-gray-900 flex items-center gap-2">
                    {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Popular</span>}
                    {row.size}
                  </div>
                  <div className="px-5 py-5 font-bold text-[#F97316]">{row.subsidy}</div>
                  <div className="px-5 py-5 text-gray-600">{row.total}</div>
                  <div className="px-5 py-5 font-bold text-green-600">{row.net}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5" />Indicative values. The exact amount depends on the current subsidy structure and the system size.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Additional support</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Cantonal subsidy programmes</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                In addition to federal support, many cantons offer additional programmes. The available subsidies differ from canton to canton.
              </p>
              <div className="flex flex-col gap-3">
                {['Battery storage for solar installations', 'Systems to increase self-consumption', 'Energy-efficient building technology'].map(m => (
                  <div key={m} className="flex items-center gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{m}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Process</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">How do I get the subsidy?</h2>
              <div className="flex flex-col gap-0">
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-5 pb-8 relative">
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 w-0.5 h-full" style={{ background: 'rgba(249,115,22,0.2)' }} />
                    )}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm relative z-10" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                    <div className="pt-1">
                      <p className="font-bold text-white mb-1">{step.title}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Make the most of it</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Maximise your subsidies?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Our partner installers know all current subsidy programmes and handle the applications — you don't have to worry about a thing.
            </p>
            <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Get a free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
