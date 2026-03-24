import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Star, BarChart2, Users } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Comparison Portal Switzerland 2026 – Compare Providers & Save | PVPro.ch',
  description: 'Compare solar panel providers in Switzerland for free. PVPro.ch is Switzerland\'s leading comparison portal for solar systems – up to 3 quotes from certified installers.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-comparison-portal-switzerland',
    languages: {
      'de-CH': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/comparateur-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-comparison-portal-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/comparatore-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/vergleichsportal-photovoltaik-schweiz',
    },
  },
  openGraph: {
    title: 'Solar Comparison Portal Switzerland 2026 – Compare Providers & Save',
    description: 'Compare solar panel providers in Switzerland for free. Up to 3 quotes from certified installers.',
    url: 'https://www.pvpro.ch/en/solar-comparison-portal-switzerland',
    type: 'website',
    locale: 'en',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Is PVPro.ch really free?',
    answer: 'Yes, the service is completely free and non-binding for homeowners. We are funded through a referral fee paid by the installers — not by you.',
  },
  {
    question: 'How many quotes will I receive?',
    answer: 'You receive up to 3 tailored quotes from verified local installers, giving you a direct basis for comparison.',
  },
  {
    question: 'Who are the installers in the PVPro network?',
    answer: 'We work with over 500 certified Swiss companies. Every installer is vetted before joining the network.',
  },
  {
    question: 'Can I use PVPro.ch for an apartment building?',
    answer: 'Yes, we arrange quotes for detached houses, apartment buildings and commercial properties throughout Switzerland.',
  },
  {
    question: 'How long does it take to receive quotes?',
    answer: 'In most cases you receive the first quotes within 24 to 48 hours of submitting your request.',
  },
  {
    question: 'Do I have to commit to anything?',
    answer: 'No. You can compare the quotes and decide freely — with no obligation whatsoever.',
  },
];

const tableRows = [
  { label: 'Cost for the customer', pvpro: 'Free', others: 'Often hidden fees' },
  { label: 'Installers verified', pvpro: 'Yes, certified', others: 'Not always' },
  { label: 'Local companies', pvpro: 'Yes, in your region', others: 'Often national chains' },
  { label: 'No cold calls', pvpro: 'Guaranteed', others: 'Not guaranteed' },
  { label: 'Swiss platform', pvpro: 'Yes', others: 'Often foreign' },
];

export default function SolarComparisonPortalPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar Comparison Portal</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <BarChart2 className="w-3.5 h-3.5" /> Providers &amp; Comparison
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solar Panel Comparison Portal in Switzerland
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Anyone looking to install a solar system in Switzerland faces one big question: which provider is right for me? Prices vary enormously, and quality even more so. PVPro.ch is the independent Swiss comparison portal connecting homeowners with{' '}
              <Link href="/en/request" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">certified local installers</Link>{' '}
              — free of charge and without obligation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Free & non-binding', sub: 'no risk', note: 'completely free for homeowners' },
              { val: 'Up to 3 quotes', sub: 'from certified installers', note: 'tailored to your roof' },
              { val: '500+ partners', sub: 'across Switzerland', note: 'certified companies in your region' },
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

        {/* ── Why compare ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Why compare?</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Why compare solar providers?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Many homeowners contact just one installer and sign the first offer. This is often a costly mistake. For the same system, prices between different installers can vary by several thousand francs.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Comparing pays off for three reasons:</p>
            <ul className="space-y-4">
              {[
                { title: 'Price transparency', text: 'See immediately what a system really costs in your region' },
                { title: 'Quality comparison', text: 'Only certified installers with proven experience' },
                { title: 'Time saving', text: 'Instead of researching yourself, get everything at a glance' },
              ].map(r => (
                <li key={r.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">{r.title}:</strong> {r.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src="/images/asset-beratung-indoor-2.png" alt="Solar comparison portal Switzerland" className="w-full h-72 object-cover rounded-3xl" />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Did you know?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Those who compare at least 3 quotes save on average 15–25% compared to the first offer — that's up to CHF 5,000 for a typical system.
              </p>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Simple & fast</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How does PVPro.ch work as a comparison portal?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">PVPro.ch is not an ordinary directory. We vet every installer in our network and only connect you with certified companies in your region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Fill in the form', text: 'In 2 minutes, describe your roof, energy consumption and requirements.' },
              { n: '2', title: 'Receive quotes', text: 'Up to 3 local installers send you tailored offers directly.' },
              { n: '3', title: 'Compare and choose', text: 'Compare prices, components and references — and decide freely.' },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">Step {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Which providers ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden">
            <img src="/images/asset-installateur-dach-2.png" alt="Certified solar installer Switzerland" className="w-full h-72 object-cover rounded-3xl object-top" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Quality criteria</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Which providers are recommended in Switzerland?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">There are hundreds of solar installers in Switzerland. Quality varies significantly. What should you look for?</p>
            <ul className="space-y-4 mb-6">
              {[
                { title: 'Certification', text: 'Look for companies with recognised qualifications (e.g. electrosuisse, Swissolar)' },
                { title: 'Local experience', text: 'An installer from your region knows the cantonal subsidies and permit procedures' },
                { title: 'References', text: 'Ask for completed projects in your municipality' },
                { title: 'Warranties', text: 'Reputable providers offer clear warranties on modules, inverters and installation' },
                { title: 'Transparent pricing', text: 'No hidden costs — everything in writing in the quote' },
              ].map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">{c.title}:</strong> {c.text}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed"><strong>PVPro.ch checks all these criteria for you</strong> and only connects you with companies that meet our standards.</p>
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">The difference</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What sets PVPro.ch apart from other comparison portals?</h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold w-2/5"></th>
                  <th className="px-6 py-4 text-white font-bold text-center">PVPro.ch</th>
                  <th className="px-6 py-4 text-white/60 font-semibold text-center">Other portals</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center"><span className="inline-flex items-center gap-1.5 text-green-700 font-semibold"><CheckCircle className="w-4 h-4 text-green-500" />{row.pvpro}</span></td>
                    <td className="px-6 py-4 text-center text-gray-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Users className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Compare providers for free now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Fill in our form in 2 minutes and receive up to 3 quotes from <Link href="/en/request" className="text-[#F97316] hover:underline font-medium">certified installers</Link> in your region — free of charge and without obligation.
          </p>
          <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── FAQ ── */}
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
