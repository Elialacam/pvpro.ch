import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, FileText, Clock, Coins } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Get Solar Panel Quotes Switzerland 2026 – Free & Non-binding | PVPro.ch',
  description: 'Get free solar panel quotes in Switzerland. Up to 3 offers from certified installers in your region. Compare and save with PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/get-solar-panel-quotes',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
      'fr-CH': 'https://www.pvpro.ch/fr/demander-offre-panneau-solaire',
      'en': 'https://www.pvpro.ch/en/get-solar-panel-quotes',
      'it-CH': 'https://www.pvpro.ch/it/richiedere-preventivo-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
    },
  },
  openGraph: {
    title: 'Get Solar Panel Quotes Switzerland 2026 – Free & Non-binding',
    description: 'Free solar panel quotes in Switzerland. Up to 3 offers from certified installers in your region.',
    url: 'https://www.pvpro.ch/en/get-solar-panel-quotes',
    type: 'website',
    locale: 'en',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'How many quotes will I receive via PVPro.ch?',
    answer: 'You receive up to 3 tailored quotes from certified installers in your region, giving you an immediate basis for comparison.',
  },
  {
    question: 'How quickly will I receive the quotes?',
    answer: 'In most cases you receive the first quotes within 24 to 48 hours of submitting your request.',
  },
  {
    question: 'Am I committed to anything after submitting the form?',
    answer: 'No. The request is completely free and non-binding. You decide freely whether and which offer you accept.',
  },
  {
    question: 'Will I receive sales calls after my request?',
    answer: 'No. PVPro.ch guarantees that you will not receive any unsolicited sales calls. Only the installers who send you a quote will get in touch.',
  },
  {
    question: 'Can I also get quotes for an apartment building?',
    answer: 'Yes. PVPro.ch arranges quotes for all building types — detached houses, apartment buildings and commercial properties.',
  },
  {
    question: "What if I don't like any of the quotes?",
    answer: 'You are not obligated to anything. You can decline all quotes without any costs.',
  },
];

const quoteContent = [
  'System size in kWp and number of modules',
  'Module type and manufacturer with technical data',
  'Inverter — brand and output',
  'Mounting system — suited to your roof type',
  'Installation costs listed separately',
  'Estimated annual production in kWh',
  'Subsidy (OUR) already deducted or shown separately',
  'Warranties on modules, inverter and installation',
  'Payback period as a benchmark',
];

export default function GetSolarPanelQuotesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Get Solar Quotes</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <FileText className="w-3.5 h-3.5" /> Quotes &amp; Prices
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Get Solar Panel Quotes in Switzerland
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Anyone buying a solar system should never sign the first offer. In Switzerland, prices for the same system can vary by several thousand francs from one installer to another. PVPro.ch lets you get up to 3 free quotes from vetted local installers — in under 2 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Free', sub: 'no risk, no hidden fees', note: 'completely free for homeowners' },
              { val: '24–48 hours', sub: 'to the first quote', note: 'fast response from local companies' },
              { val: 'Up to CHF 4,000', sub: 'possible savings by comparing', note: 'depending on system size' },
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

        {/* Why multiple quotes */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">The decisive advantage</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Why get multiple quotes?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Many Swiss homeowners make the same mistake: they contact only one installer and accept the first offer. What most people do not know is that for exactly the same system — same panels, same inverter, same output — prices can vary by up to CHF 4,000 between different installers.</p>
            <p className="text-gray-600 leading-relaxed">The reason is simple: installers calculate differently, have different purchasing terms and different margins. Compare and win.</p>
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

        {/* How it works */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">In 3 steps</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How easy is it to get quotes?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">Getting quotes used to mean: search yourself, call, arrange appointments, wait. With PVPro.ch it takes just 3 steps:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Fill in the form (2 minutes)', text: 'Describe your situation: roof area, energy consumption, canton, desired options such as battery storage or heat pump.' },
              { n: '2', title: 'Receive quotes (24–48 hours)', text: 'Up to 3 certified installers in your region send you tailored offers directly.' },
              { n: '3', title: 'Compare and decide', text: 'You compare prices, components and references — and choose freely. No obligation, no pressure.' },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                <h3 className="font-bold text-gray-900 text-base mb-3">Step {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What a good quote contains */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div><img src="/images/asset-beratung-indoor-2.png" alt="Solar panel quote Switzerland" className="w-full h-72 object-cover rounded-3xl" /></div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checklist</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">What should a good quote contain?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">A reputable solar quote always includes the following points:</p>
            <ul className="space-y-3 mb-6">
              {quoteContent.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed"><strong>Tip:</strong> If a quote is missing these points, ask for clarification — or get a quote from one of our vetted partners via PVPro.ch.</p>
            </div>
          </div>
        </section>

        {/* Cost */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Transparency</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What does it cost to get quotes?</h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Coins className="w-6 h-6 text-[#F97316]" />, title: 'Free', text: 'Getting quotes is completely free for homeowners — no hidden fees.' },
              { icon: <FileText className="w-6 h-6 text-[#F97316]" />, title: 'No subscription', text: 'No subscription costs and no obligation to place an order.' },
              { icon: <Clock className="w-6 h-6 text-[#F97316]" />, title: 'We earn differently', text: 'We receive a referral fee from the appointed installer — not from you.' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Get up to 3 free quotes now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">Fill in our form in 2 minutes — and receive up to 3 quotes from <Link href="/en/request" className="text-[#F97316] hover:underline font-medium">certified installers</Link> in your region. Free, non-binding, no sales calls.</p>
          <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
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
        </section>
      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
