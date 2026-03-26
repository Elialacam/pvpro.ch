import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, FileText, Clock, Coins } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Get Solar Panel Quotes Switzerland 2026 – Free & No Obligation | PVPro.ch',
  description: 'Request free solar panel quotes in Switzerland. Up to 3 quotes from certified installers in your region. Compare and save.',
  alternates: {
    canonical: 'https://pvpro.ch/en/get-solar-panel-quotes',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-offerte-einholen',
      'fr-CH': 'https://pvpro.ch/fr/demander-offre-panneau-solaire',
      'en': 'https://pvpro.ch/en/get-solar-panel-quotes',
      'it-CH': 'https://pvpro.ch/it/richiedere-preventivo-solare',
      'x-default': 'https://pvpro.ch/solaranlage-offerte-einholen',
    },
  },
  openGraph: {
    title: 'Get Solar Panel Quotes Switzerland 2026 – Free & No Obligation',
    description: 'Free solar panel quotes in Switzerland. Up to 3 quotes from certified installers.',
    url: 'https://pvpro.ch/en/get-solar-panel-quotes',
    type: 'website',
    locale: 'en_US',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'How many quotes will I receive through PVPro.ch?',
    answer: 'You receive up to 3 tailored quotes from certified installers in your region. This gives you an immediate basis for comparison.',
  },
  {
    question: 'How long does it take to receive the quotes?',
    answer: 'In most cases you receive the first quotes within 24 to 48 hours of submitting your request.',
  },
  {
    question: 'Am I under any obligation after submitting the request?',
    answer: 'No. The request is completely free and non-binding. You decide freely whether and which quote you accept.',
  },
  {
    question: 'Will I receive unsolicited calls after my request?',
    answer: 'No. PVPro.ch guarantees you will not receive unwanted advertising calls. Only the installers who send you a quote will contact you.',
  },
  {
    question: 'Can I also request quotes for an apartment building?',
    answer: 'Yes. PVPro.ch handles quotes for all building types — single-family homes, apartment buildings and commercial properties.',
  },
  {
    question: 'What happens if none of the quotes suits me?',
    answer: 'You are under no obligation at all. You can decline all quotes without incurring any costs.',
  },
];

const quoteContents = [
  'System size in kWp and number of modules',
  'Module type and manufacturer with technical data',
  'Inverter — brand and power rating',
  'Mounting system — suited to your roof type',
  'Installation costs shown separately',
  'Estimated annual yield in kWh',
  'Subsidy (OUR) already deducted or shown separately',
  'Guarantees on modules, inverter and mounting',
  'Indicative payback period',
];

const steps = [
  { n: '1', title: 'Fill in the form (2 minutes)', text: 'You describe your situation: roof area, electricity consumption, canton, desired options such as battery storage or heat pump.' },
  { n: '2', title: 'Receive quotes (24–48 hours)', text: 'Up to 3 certified installers from your region send you tailored offers directly.' },
  { n: '3', title: 'Compare and decide', text: 'You compare prices, components and references — and choose freely. No obligation, no pressure.' },
];

const buildingTypes = [
  { title: 'Single-family home', desc: 'the most common request, typically 8–12 kWp', href: '/en/solar-detached-house' },
  { title: 'Apartment building', desc: 'larger systems with collective self-consumption', href: '/en/solar-apartment-building' },
  { title: 'Commercial building', desc: 'also for businesses and agriculture', href: '/en/quote' },
];

export default function GetSolarPanelQuotesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Get solar quotes</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <FileText className="w-3.5 h-3.5" /> Quotes &amp; Prices
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Get solar panel quotes in Switzerland
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Anyone buying a solar system should never sign the first quote. In Switzerland, the{' '}
              <Link href="/en/solar-panel-costs" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">costs</Link>{' '}
              for the exact same system can vary by several thousand francs between different installers. PVPro.ch lets you get up to 3 free quotes from certified local installers — in under 2 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Free', sub: 'no risk, no hidden fees', note: 'completely free for homeowners' },
              { val: '24–48 hours', sub: 'to the first quote', note: 'fast response from local installers' },
              { val: 'Up to CHF 4,000', sub: 'savings possible by comparing', note: 'depending on system size' },
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

        {/* ── Why multiple quotes ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">The decisive advantage</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Why request multiple quotes?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Many Swiss homeowners make the same mistake: they contact only one installer and accept the first offer. What most do not realise is that for exactly the same system — same modules, same inverter, same output — prices between different installers can vary by up to CHF 4,000.
            </p>
            <p className="text-gray-600 leading-relaxed">The reason is simple: installers calculate differently and have varying purchasing conditions and margins. Those who compare, win.</p>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">Example — 10 kWp system</p>
              <div className="space-y-4">
                {[
                  { label: 'Installer A', price: 'CHF 29,500', highlight: false },
                  { label: 'Installer B', price: 'CHF 26,800', highlight: false },
                  { label: 'Installer C (cheapest)', price: 'CHF 25,600', highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.price}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-white/60 text-sm">Savings by comparing</span>
                  <span className="text-green-400 font-bold">up to CHF 3,900</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">In 3 steps</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How simple is it to request quotes?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              In the past, getting quotes meant searching yourself, calling, making appointments, waiting. With PVPro.ch it is done in 3 steps:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">Step {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.n === '1' ? (
                    <>
                      You describe your situation: roof area, electricity consumption, canton, desired options such as{' '}
                      <Link href="/en/solar-with-battery" className="text-[#F97316] hover:underline font-medium">battery storage</Link>{' '}
                      or heat pump.
                    </>
                  ) : step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quote contents ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/images/asset-beratung-indoor-2.png" alt="Solar panel quote Switzerland" className="w-full h-72 object-cover rounded-3xl" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checklist</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">What should a good quote contain?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">A serious quote for a solar system always contains the following:</p>
            <ul className="space-y-3 mb-6">
              {quoteContents.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {i === 6 ? (
                      <>Subsidy (<Link href="/en/solar-subsidies" className="text-[#F97316] hover:underline font-medium">OUR</Link>) already deducted or shown separately</>
                    ) : item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>Tip:</strong> If a quote does not contain these points, ask questions — or request a quote through PVPro.ch from one of our certified partners.
              </p>
            </div>
          </div>
        </section>

        {/* ── Cost ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Transparency</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What does requesting quotes cost?</h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Coins className="w-6 h-6 text-[#F97316]" />, title: 'Free', text: "For homeowners, requesting quotes is completely free — no hidden fees." },
              { icon: <FileText className="w-6 h-6 text-[#F97316]" />, title: 'No subscription', text: "No subscription and no obligation to place an order." },
              { icon: <Clock className="w-6 h-6 text-[#F97316]" />, title: 'We are funded differently', text: "We receive a commission from the installer you select — not from you." },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Building types ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">All building types</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">For which building types can I request quotes?</h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">Through PVPro.ch you can request quotes for all building types:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {buildingTypes.map(b => (
              <Link key={b.title} href={b.href} className="group rounded-2xl p-8 text-center border border-gray-200 hover:border-orange-300 bg-white hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#F97316] transition-colors">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
                <p className="text-[#F97316] text-sm font-medium mt-3">Request a quote →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Request up to 3 free quotes now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Fill in the form in 2 minutes — and receive up to 3 quotes from{' '}
            <Link href="/en/quote" className="text-[#F97316] hover:underline font-medium">certified installers</Link>{' '}
            in your region. Free, no obligation, no advertising calls.
          </p>
          <Link href="/en/quote" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Frequently asked questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently asked questions</h2>
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
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">More information:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/en/solar-panel-costs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Solar system costs</Link>
              <Link href="/en/solar-comparison-portal-switzerland" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Compare providers</Link>
              <Link href="/en/solar-panel-installation-switzerland" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Installation Switzerland</Link>
              <Link href="/en/solar-subsidies-canton-zurich" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Subsidies Canton Zurich</Link>
              <Link href="/en/complete-solar-solution-switzerland" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">Quote for complete solution</Link>
              <Link href="/en/quote" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
