import Link from 'next/link';
import { ChevronRight, Calendar, Clock, CheckCircle2, XCircle, ArrowRight, AlertTriangle, Zap, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Balcony Power Station in Switzerland: Allowed, Costs and Is It Really Worth It? | PVPro.ch',
  description: 'Are balcony power stations allowed in Switzerland? Costs, rules and whether a balcony power station is worth it — with an honest comparison to a full solar installation.',
  alternates: { canonical: 'https://www.pvpro.ch/en/blog/balcony-power-station-switzerland' },
};

const comparisonRows = [
  { factor: 'Costs', balkon: 'CHF 300–1,200', solar: 'CHF 20,000–35,000', winner: 'balkon' },
  { factor: 'Output', balkon: '300–800 Watt', solar: '8,000–12,000 Watt', winner: 'solar' },
  { factor: 'Production/year', balkon: '200–600 kWh', solar: '8,000–12,000 kWh', winner: 'solar' },
  { factor: 'Savings/year', balkon: 'CHF 50–150', solar: 'CHF 1,500–3,000', winner: 'solar' },
  { factor: 'Payback period', balkon: '3–6 years', solar: '8–12 years', winner: 'balkon' },
  { factor: 'Property value', balkon: 'None', solar: 'Yes (real estate)', winner: 'solar' },
  { factor: 'Subsidies', balkon: 'None', solar: 'RU + cantonal', winner: 'solar' },
  { factor: 'Target group', balkon: 'Renters', solar: 'Homeowners', winner: null },
];

const faqsEn = [
  { q: 'Are balcony power stations allowed in Switzerland?', a: 'Yes, they are generally allowed, but must be registered with the grid operator and comply with certain output limits.' },
  { q: 'What penalty is there for unregistered systems?', a: 'In case of violations, the grid operator can take measures. In some cases the system can be disconnected or removed. Liability issues may also arise.' },
  { q: 'Are 2000 Watt balcony power stations allowed?', a: 'Generally not as a simple plug-in solution. Such systems require special registration, technical adaptations and possibly permits.' },
  { q: 'What happens if I don\'t register my balcony power station?', a: 'You violate regulations and risk the system being removed or restricted. The grid operator can take measures.' },
  { q: 'How many balcony power stations can I operate?', a: 'In most cases one system per household is intended to avoid grid problems. Multiple systems can cause feed-in issues.' },
  { q: 'Does a battery storage need to be registered?', a: 'Yes, battery storage must also be registered depending on the system, as it can influence the electricity grid.' },
  { q: 'Can a grid operator detect my balcony power station?', a: 'Yes, through measurements and load profiles, feed-in can be detected. Grid operators can measure changes in power flow and identify unusual load profiles.' },
  { q: 'How long are balcony power stations allowed?', a: 'They are currently allowed as long as legal requirements are met. Changes are possible depending on future regulation.' },
];

export default function BalconyPowerStationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-16 overflow-hidden min-h-[480px] flex flex-col justify-end">
        <img
          src="/images/balkonkraftwerk-schweiz.webp"
          alt="Balcony power station in Switzerland – mini solar system on balcony with view of the Alps"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0f1f3d]/70" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/en/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Balcony Power Station Switzerland</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316]/20 text-orange-400 uppercase tracking-widest">Guide</span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <Calendar className="w-3.5 h-3.5" /> 17 March 2026
              </span>
              <span className="flex items-center gap-1.5 text-white/40 text-xs">
                <Clock className="w-3.5 h-3.5" /> 7 min read
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Balcony Power Station in Switzerland: what is allowed — and is it really worth it?
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A balcony power station seems appealing. But how much electricity does it actually produce — and when is a full solar installation a much better choice?
            </p>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <article className="lg:col-span-2 space-y-14">

            {/* Intro */}
            <section>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                In Switzerland, balcony power stations are becoming increasingly popular — especially among renters or people who cannot install a large solar system. But for those who own their home, the key question arises:
              </p>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 font-medium text-sm leading-relaxed">
                  Is a balcony power station really the best solution — or am I missing out on much greater savings from a full solar installation?
                </p>
              </div>
            </section>

            {/* What is it? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is a balcony power station?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                A balcony power station is a mini solar system for personal use: typically 1–2 solar modules with an output of 300 to 800 watts, connected via a normal plug socket. The electricity produced is consumed directly in the household.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Modules', value: '1–2' },
                  { label: 'Max. output', value: '800 W' },
                  { label: 'Production/year', value: '200–600 kWh' },
                  { label: 'Savings/year', value: 'CHF 50–150' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Allowed? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Are balcony power stations allowed in Switzerland?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Yes — generally allowed, but with clear rules. Many people underestimate the administrative requirements.
              </p>
              <div className="space-y-3">
                {[
                  { ok: true, text: 'The system must be registered with the grid operator (usually free of charge)' },
                  { ok: true, text: 'Safety requirements must be met' },
                  { ok: false, text: 'Systems over 800 W are not simply allowed as plug-and-play' },
                  { ok: false, text: '2000 W systems require special permits' },
                  { ok: false, text: 'Unregistered systems can be disconnected' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {item.ok
                      ? <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    }
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Production */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How much electricity does a balcony power station produce?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A typical balcony power station produces around <strong>200–600 kWh per year</strong> — this corresponds to the base consumption of a few appliances (fridge, standby). This is far from covering the majority of a household&apos;s electricity consumption.
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-5">
                <p className="font-bold text-gray-900 text-sm mb-4">Comparison: annual production</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Balcony power station (800 W)</span>
                    <span className="font-bold text-gray-800">up to 600 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-gray-400" style={{ width: '5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Solar installation (10 kWp)</span>
                    <span className="font-bold text-[#F97316]">9,000–11,000 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-[#F97316]" style={{ width: '90%' }} />
                  </div>
                </div>
                <p className="text-xs text-gray-400">A full solar installation produces <strong>15–20× more electricity</strong> per year.</p>
              </div>
            </section>

            {/* Comparison table */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Balcony power station vs. solar installation — the direct comparison</h2>
              <p className="text-gray-500 text-sm mb-6">For homeowners, the difference is enormous.</p>
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Factor</span>
                  <span className="text-center">Balcony power station</span>
                  <span className="text-center text-[#F97316]">Solar installation</span>
                </div>
                {comparisonRows.map((row) => (
                  <div key={row.factor} className="grid grid-cols-3 px-5 py-3.5 border-t border-gray-100 bg-white text-sm">
                    <span className="font-bold text-gray-800">{row.factor}</span>
                    <span className={`text-center ${row.winner === 'balkon' ? 'text-green-600 font-bold' : 'text-gray-500'}`}>{row.balkon}</span>
                    <span className={`text-center ${row.winner === 'solar' ? 'text-[#F97316] font-bold' : 'text-gray-500'}`}>{row.solar}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/20 p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">Conclusion:</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A balcony power station is a small supplement — a solar installation is a <strong>real energy solution</strong>. For a homeowner, a balcony power station leaves thousands of francs in annual savings on the table.
                </p>
              </div>
            </section>

            {/* When which? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">When is a solar installation the better choice?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
                  <p className="font-bold text-gray-500 text-sm mb-4 uppercase tracking-wide">Balcony power station useful if…</p>
                  <div className="space-y-2">
                    {['You are a renter', 'No own roof space available', 'Minimal installation desired', 'First introduction to solar energy'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#F97316]/30 p-6 bg-orange-50 shadow-sm">
                  <p className="font-bold text-[#F97316] text-sm mb-4 uppercase tracking-wide">Solar installation useful if…</p>
                  <div className="space-y-2">
                    {['You own a home', 'You want to significantly reduce energy costs', 'You aim for long-term energy independence', 'You want to increase the value of your property'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Alternative */}
            <section className="rounded-3xl bg-[#0f1f3d] p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
              <div className="relative">
                <TrendingUp className="w-8 h-8 text-[#F97316] mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Alternative: solar installation instead of balcony power station</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Many start with the idea of a balcony power station and then realise: <strong className="text-white">the effect is too small.</strong>
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  A full solar installation saves you <strong className="text-white">CHF 1,500–3,000</strong> annually — 10–20× more than a balcony power station. And with the one-time payment (OTP) and cantonal subsidies, acquisition costs are significantly reduced.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: Zap, label: '15–20×', sub: 'more energy production' },
                    { icon: TrendingUp, label: '10–20×', sub: 'more savings/year' },
                    { icon: CheckCircle2, label: '100%', sub: 'subsidies available' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                        <Icon className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-white/50 text-xs">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/en/get-solar-panel-quotes"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Frequently asked questions about balcony power stations in Switzerland
              </h2>
              <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
                {faqsEn.map((f, i) => (
                  <details key={i} className="group border-b border-gray-100 last:border-0">
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{f.q}</span>
                      <span className="text-[#F97316] flex-shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white mb-6">
                <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">At a glance</p>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Allowed in CH?', value: 'Yes, with registration' },
                    { label: 'Max. output', value: '800 Watt (plug-and-play)' },
                    { label: 'Costs', value: 'CHF 300–1,200' },
                    { label: 'Production/year', value: '200–600 kWh' },
                    { label: 'Savings/year', value: 'CHF 50–150' },
                    { label: 'Registration required', value: 'Yes, with grid operator' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-bold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <Zap className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
                <p className="font-bold text-gray-900 text-base mb-2">Homeowner?</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  A full solar installation saves you 10× more than a balcony power station.
                </p>
                <Link
                  href="/en/get-solar-panel-quotes"
                  className="block w-full py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Get a quote now →
                </Link>
              </div>

              <div className="rounded-2xl border border-gray-100 p-5 shadow-sm bg-white mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related articles</p>
                <div className="space-y-3">
                  {[
                    { href: '/en/blog/solar-investment-return-switzerland', title: 'ROI of a solar installation: when does the investment pay off?' },
                    { href: '/en/blog/solar-subsidies-2026', title: 'Solar subsidies 2026 in Switzerland' },
                    { href: '/en/blog/solar-battery-storage-switzerland', title: 'Battery storage: is the investment worth it?' },
                  ].map((a) => (
                    <Link key={a.href} href={a.href} className="block text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                      → {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
