import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Subsidies Canton Zurich 2026 – OUR, Solar Obligation & Grants | PVPro.ch',
  description: 'What subsidies are available for solar panels in Canton Zurich 2026? OUR, cantonal grants, solar obligation and how to apply. Find out now.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
    languages: {
      'de-CH': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
      'fr-CH': 'https://www.pvpro.ch/fr/subventions-solaires-canton-zurich',
      'en': 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
      'it-CH': 'https://www.pvpro.ch/it/incentivi-solari-cantone-zurigo',
      'x-default': 'https://www.pvpro.ch/foerderungen-kanton-zuerich',
    },
  },
  openGraph: {
    title: 'Solar Subsidies Canton Zurich 2026 – OUR, Solar Obligation & Grants',
    description: 'All subsidies for solar panels in Canton Zurich 2026: OUR, cantonal grants, solar obligation.',
    url: 'https://www.pvpro.ch/en/solar-subsidies-canton-zurich',
    type: 'website',
    locale: 'en',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'How much is the subsidy for a solar system in Canton Zurich?',
    answer: "The federal subsidy (OUR) is approximately CHF 300–400 per kWp. For a 10 kWp system that is around CHF 3,500. Cantonal programmes and tax deductions are added on top.",
  },
  {
    question: 'Does the solar obligation also apply to existing homes in Canton Zurich?',
    answer: 'The solar obligation currently applies primarily to new buildings and major roof renovations. Existing homes are not directly affected but can voluntarily benefit from all subsidies.',
  },
  {
    question: 'Who handles the subsidy application?',
    answer: 'As a rule the certified installer handles the OUR registration with Pronovo. They also assist with cantonal grant applications.',
  },
  {
    question: 'Can I deduct the solar system on my taxes in Canton Zurich?',
    answer: 'Yes. Investments in solar systems can be deducted as energy-saving measures — both at federal level and in Canton Zurich.',
  },
  {
    question: 'How long does it take for the subsidy to be paid out?',
    answer: 'The OUR is typically paid out a few months after registration with Pronovo. Cantonal grants may take longer depending on the programme.',
  },
];

export default function SolarSubsidiesCantonZurichPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/en/solar-subsidies" className="hover:text-white/70 transition-colors">Subsidies</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Canton Zurich</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Subsidies &amp; Grants
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solar Subsidies Canton Zurich 2026
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Canton Zurich is one of the most active cantons in Switzerland in expanding solar energy. In addition to the federal subsidy, residents benefit from additional cantonal programmes and a legal solar obligation for new buildings. This page explains all current subsidy options clearly and concisely.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'CHF 300–400/kWp', sub: 'Federal subsidy OUR', note: 'one-off payment after installation' },
              { val: 'Solar obligation', sub: 'since 2023 for new buildings', note: 'applies throughout Canton Zurich' },
              { val: '7–9 years', sub: 'payback in Canton Zurich', note: 'thanks to subsidies and low energy costs' },
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

        {/* Federal subsidy */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Federal level</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Federal subsidy: the One-off Upfront Remuneration (OUR)</h2>
            <p className="text-gray-600 leading-relaxed mb-6">The most important subsidy for solar systems in Switzerland is the federal One-off Upfront Remuneration (OUR). It also applies in Canton Zurich and is administered by Pronovo.</p>
            <ul className="space-y-3 mb-6">
              {[
                "Amount: approx. CHF 300–400 per kWp of installed capacity",
                "Paid out once after installation",
                "No annual application required",
                "The installer usually handles registration for you",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">For a typical 10 kWp system this equates to a subsidy of approx. <strong>CHF 3,500</strong>.</p>
            </div>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">OUR — Example calculation 10 kWp</p>
              <div className="space-y-4">
                {[
                  { label: 'Installation costs', value: 'CHF 28,000' },
                  { label: 'OUR federal subsidy', value: '− CHF 3,500' },
                  { label: 'Tax deduction (approx.)', value: '− CHF 2,800' },
                  { label: 'Effective costs', value: 'approx. CHF 21,700', highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cantonal subsidies */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Cantonal level</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Cantonal subsidies in Canton Zurich</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">In addition to the OUR, Zurich homeowners can benefit from the following cantonal measures:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Energy Incentive Programme', text: 'Contributions for photovoltaic systems combined with heat pumps or building insulation.', badge: 'Canton Zurich' },
              { title: 'Local Electricity Communities (LEC)', text: 'From 2026 you can sell solar electricity directly to the neighbourhood — reducing network fees by up to 40%.', badge: 'From 2026' },
              { title: 'Tax deductions', text: 'Investments in solar systems can be deducted as energy-saving measures — at federal level and in Canton Zurich.', badge: 'Federal & Cantonal' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full mb-4">{c.badge}</span>
                <h3 className="font-bold text-gray-900 text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solar obligation */}
        <section className="rounded-3xl p-10 sm:p-12" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
          <div className="max-w-3xl">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Legal obligation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Solar obligation in Canton Zurich</h2>
            <p className="text-gray-400 leading-relaxed mb-6">Since 2023 a legal solar obligation has been in force in Canton Zurich for:</p>
            <ul className="space-y-3 mb-8">
              {['New buildings above a certain size', 'Major roof renovations'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5">
              <p className="text-orange-200 text-sm leading-relaxed"><strong className="text-orange-400">Tip:</strong> Those who have to build or renovate anyway should see the solar obligation as an opportunity — the subsidy is fully guaranteed for 2026.</p>
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Step by step</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How do I apply for the subsidy in Canton Zurich?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '1', title: 'Hire an installer', text: 'A certified installer in your region reviews your system and clarifies all subsidy options.' },
              { n: '2', title: 'Install the system', text: 'After installation the installer registers the system with Pronovo for the OUR.' },
              { n: '3', title: 'Apply for cantonal subsidy', text: 'For cantonal grants a separate application is filed with the cantonal Office for Waste, Water, Energy and Air (AWEL).' },
              { n: '4', title: 'Payment', text: 'The OUR is typically paid out a few months after registration. Cantonal grants follow depending on the programme.' },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-3">Step {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Make the most of subsidies in Canton Zurich now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">Our certified installers in Canton Zurich know all current subsidy programmes and handle the application — you do not have to worry about anything.</p>
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
