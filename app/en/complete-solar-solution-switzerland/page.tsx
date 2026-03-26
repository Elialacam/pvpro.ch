import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, Zap, Battery, Thermometer, Car, Settings } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Complete Solar Solution Switzerland 2026 – All-in-One | PVPro.ch',
  description: 'Which Swiss companies offer complete solar panel solutions? Modules, storage, heat pump and installation from a single provider. Compare now with PVPro.ch.',
  alternates: {
    canonical: 'https://pvpro.ch/en/complete-solar-solution-switzerland',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-komplettloesung-schweiz',
      'fr-CH': 'https://pvpro.ch/fr/solution-complete-photovoltaique-suisse',
      'en': 'https://pvpro.ch/en/complete-solar-solution-switzerland',
      'it-CH': 'https://pvpro.ch/it/soluzione-completa-fotovoltaico-svizzera',
      'x-default': 'https://pvpro.ch/photovoltaik-komplettloesung-schweiz',
    },
  },
  openGraph: {
    title: 'Complete Solar Solution Switzerland 2026 – All-in-One',
    description: 'Modules, storage, heat pump and installation from a single provider — complete solar solutions in Switzerland.',
    url: 'https://pvpro.ch/en/complete-solar-solution-switzerland',
    type: 'website',
    locale: 'en_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Is a complete solution with a heat pump and solar system worthwhile?',
    answer: 'Yes, in most cases. Anyone who runs their heat pump with self-produced solar power significantly reduces heating costs and maximises self-consumption. The payback period is noticeably shorter.',
  },
  {
    question: 'Can I build a complete solution step by step?',
    answer: 'Yes. Many homeowners start with the solar system and later add battery storage, a charging station or a heat pump. What matters is that the system is dimensioned accordingly from the outset.',
  },
  {
    question: 'What subsidies are available for complete solutions?',
    answer: 'There are separate subsidies for each component — the one-time payment (OTS) for the solar system, cantonal contributions for the heat pump and other programmes depending on the canton. An experienced installer knows all relevant funding options.',
  },
  {
    question: 'How do I find a complete solution provider in my region?',
    answer: 'PVPro.ch connects you free of charge with certified installers offering complete solutions. Simply fill in the form and receive up to 3 quotes.',
  },
  {
    question: 'Can I expand my existing solar system with storage or a charging station?',
    answer: 'Yes, in most cases an expansion is possible. A certified installer checks compatibility and provides a quote for the expansion.',
  },
];

const components = [
  {
    icon: <Sun className="w-6 h-6 text-[#F97316]" />,
    title: 'Solar panel system',
    text: 'The basis of every complete solution. Produces electricity from solar energy for self-consumption and grid feed-in.',
  },
  {
    icon: <Battery className="w-6 h-6 text-[#F97316]" />,
    title: 'Battery storage',
    text: 'Stores excess solar electricity for use in the evening and at night. Increases self-consumption from approximately 30% to up to 70%.',
  },
  {
    icon: <Thermometer className="w-6 h-6 text-[#F97316]" />,
    title: 'Heat pump',
    text: 'Uses self-produced solar power for heating and hot water. One of the most effective ways to maximise self-consumption.',
  },
  {
    icon: <Car className="w-6 h-6 text-[#F97316]" />,
    title: 'Electric vehicle charging station (Wallbox)',
    text: 'Charges the electric vehicle directly with solar power — particularly economical and sustainable.',
  },
  {
    icon: <Settings className="w-6 h-6 text-[#F97316]" />,
    title: 'Energy management system',
    text: 'Automatically controls when which energy goes where — for maximum efficiency without manual effort.',
  },
];

const costs = [
  { component: 'Solar panel system 10 kWp', cost: "CHF 22,000 – 30,000" },
  { component: 'Battery storage 10 kWh', cost: "CHF 7,000 – 10,000" },
  { component: 'Heat pump', cost: "CHF 15,000 – 25,000" },
  { component: 'Charging station (Wallbox)', cost: "CHF 1,500 – 3,000" },
  { component: 'Energy management system', cost: "CHF 1,000 – 3,000" },
  { component: 'Total package', cost: "approx. CHF 40,000 – 70,000", highlight: true },
];

const benefits = [
  'Optimal coordination — all components are matched to each other and communicate',
  'Single point of contact — one contact person for questions or problems',
  'Better prices — package prices are often cheaper than individual purchases',
  'Simpler subsidy applications — one installer handles all subsidy applications',
  'Warranties from a single source — no disputes between different providers',
];

const checkpoints = [
  'Does the provider have experience with all components — not just modules?',
  'Does they offer an integrated energy management system?',
  'Can they install the heat pump and charging station themselves or only arrange it?',
  'Are there reference projects with comparable complete solutions?',
  'Are all subsidy applications included in the service?',
];

export default function CompleteSolarSolutionSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/en/solar-panel-installation-switzerland" className="hover:text-white/70 transition-colors">Solar</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Complete solution</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Complete solutions &amp; Providers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Complete Solar Solution in Switzerland — All-in-One
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              More and more Swiss homeowners want not just a solar system — they want a complete energy solution: solar panels, battery storage, heat pump and electric vehicle charging station, all coordinated by a single provider. This page explains what a complete solution includes, what it costs and how to find the right provider.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Up to 80%', sub: 'Self-consumption with complete solution', note: 'thanks to optimised energy management' },
              { val: '1 provider', sub: 'responsible for everything', note: 'from planning to commissioning' },
              { val: '500+', sub: 'certified partners in Switzerland', note: 'certified installers on PVPro.ch' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── What is ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What is a complete solar solution?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A complete solution combines several energy technologies into an integrated system. PVPro.ch connects you with providers who deliver and install all these components from a single source.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {components.map((c, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Costs ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Price overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              How much does a complete solution cost in Switzerland?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Costs depend on which components are included. After deducting all subsidies — one-time payment, cantonal contributions for the heat pump — costs are significantly reduced.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Self-consumption can rise to up to 80%, which significantly shortens the payback period. Get{' '}
              <Link href="/en/get-solar-panel-quotes" className="text-[#F97316] hover:underline font-medium">free quotes</Link>{' '}
              now.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Component</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Cost (guide)</th>
                  </tr>
                </thead>
                <tbody>
                  {costs.map((row, i) => (
                    <tr key={row.component} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.component}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Before subsidies. Get an individual quote from a certified installer.
            </p>
          </div>
        </section>

        {/* ── Benefits & Checkpoints ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-xl font-bold text-white mb-5">
              Benefits of a complete solution versus individual components
            </h2>
            <ul className="space-y-3">
              {benefits.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checklist</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              What to look for when choosing a complete solution provider?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Not every installer offers genuine complete solutions. Check these points:
            </p>
            <ul className="space-y-3">
              {checkpoints.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Request a complete solution now
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Fill in our form and receive up to 3 quotes from certified installers offering complete solutions from a single source — free and no obligation.
          </p>
          <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Get free quote <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            First{' '}
            <Link href="/en/get-solar-panel-quotes" className="text-[#F97316] hover:underline font-medium">compare quotes</Link>
            {' '}or{' '}
            <Link href="/en/solar-comparison-portal-switzerland" className="text-[#F97316] hover:underline font-medium">compare providers</Link>?
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Frequently asked questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
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
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
