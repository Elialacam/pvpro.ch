import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Wrench, Clock, Sun } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Installation Switzerland 2026 – Providers & Costs | PVPro.ch',
  description: 'Solar panel installation in Switzerland: find certified providers in your region. Compare free quotes and save up to 30% with PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-panel-installation-switzerland',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installer-panneau-solaire-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/installare-impianto-solare-svizzera',
      'x-default': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
    },
  },
  openGraph: {
    title: 'Solar Panel Installation Switzerland 2026 – Providers & Costs',
    description: 'Solar panel installation in Switzerland: certified providers, costs and free quotes.',
    url: 'https://www.pvpro.ch/en/solar-panel-installation-switzerland',
    type: 'website',
    locale: 'en',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'How long does installation take for a detached house?',
    answer: 'The actual installation typically takes 1 to 3 days for a detached house. On top of that, allow 4 to 12 weeks lead time from placing the order.',
  },
  {
    question: 'Do I need to be present during installation?',
    answer: 'Not strictly necessary. However, it is recommended to be there on the first day and at commissioning to understand everything and ask questions.',
  },
  {
    question: 'Who handles the permit application with the municipality?',
    answer: 'The installer generally takes care of the notification or building permit with the municipality, as well as registering for the one-time subsidy (KEV/OUR) with Pronovo.',
  },
  {
    question: 'Can I install a solar system myself?',
    answer: 'In Switzerland, the electrical installation must be carried out by a certified electrician. The panel mounting can theoretically be done yourself, but is not recommended for safety reasons.',
  },
  {
    question: 'What happens after installation?',
    answer: 'After commissioning, the system is registered with the local grid operator. The installer makes sure everything works correctly and explains how to use it.',
  },
  {
    question: 'How do I find the best installer in my region?',
    answer: 'PVPro.ch connects you free of charge with up to 3 certified installers in your region — so you can directly compare prices and services.',
  },
];

const steps = [
  { n: '1', title: 'Consultation and quote', text: 'A certified installer visits your roof, assesses orientation, tilt and surface area, and creates a tailored quote.' },
  { n: '2', title: 'Planning and permits', text: 'The installer handles the notification with the municipality or — for systems requiring planning permission — the building permit application. In most cases, a roof-mounted solar system does not require a permit.' },
  { n: '3', title: 'Procurement', text: 'Panels, inverter, mounting system and any battery storage are ordered and delivered.' },
  { n: '4', title: 'Installation', text: 'The actual installation typically takes 1 to 3 days for a detached house. The team mounts the panels, runs the cables and installs the inverter.' },
  { n: '5', title: 'Commissioning and registration', text: 'After installation, the system is commissioned and registered with the local grid operator. The installer usually also handles the registration for the one-time subsidy (OUR) with Pronovo.' },
];

const durationRows = [
  { size: '5–8 kWp (small house)', duration: '1–2 days' },
  { size: '8–12 kWp (standard house)', duration: '2–3 days' },
  { size: '12–30 kWp (apartment building)', duration: '3–5 days' },
  { size: '30+ kWp (commercial)', duration: '1–2 weeks' },
];

const costRows = [
  { size: '5 kWp', cost: "CHF 13,000 – 18,000" },
  { size: '8 kWp', cost: "CHF 18,000 – 25,000" },
  { size: '10 kWp', cost: "CHF 22,000 – 30,000" },
];

export default function SolarPanelInstallationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar Panel Installation</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Installation &amp; Providers
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solar Panel Installation in Switzerland
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A solar system is a long-term investment. Choosing the right company to install it matters — because quality, price and service vary enormously. PVPro.ch connects you free of charge with vetted Swiss installers in your region.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 days', sub: 'to the first quote', note: 'fast and straightforward matching' },
              { val: '500+', sub: 'certified installers', note: 'vetted companies across Switzerland' },
              { val: '25–30 years', sub: 'system lifespan', note: 'long-term return for your home' },
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

        {/* Steps */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Step by step</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What happens during a solar installation?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">A photovoltaic installation in Switzerland typically follows these steps:</p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg z-10" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                  <div className="rounded-2xl p-6 flex-1" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                    <h3 className="font-bold text-gray-900 mb-2">Step {step.n} — {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duration */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Timeline</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">How long does installation take?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Duration depends on system size. The lead time — from quote to installation — is currently 4 to 12 weeks in Switzerland, depending on installer availability and component delivery.</p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3 text-white/60 font-semibold">System size</th>
                    <th className="px-5 py-3 text-white font-bold text-center">Installation time</th>
                  </tr>
                </thead>
                <tbody>
                  {durationRows.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3 text-gray-700 font-medium">{row.size}</td>
                      <td className="px-5 py-3 text-center"><span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold"><Clock className="w-3.5 h-3.5" /> {row.duration}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div><img src="/images/asset-installateur-dach-2.png" alt="Solar installation Switzerland" className="w-full h-72 object-cover rounded-3xl object-top" /></div>
        </section>

        {/* Costs */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Costs</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What does solar installation cost?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">Installation costs are included in the total system price. Typical ballpark figures for a detached house:</p>
          </div>
          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold">System size</th>
                  <th className="px-6 py-4 text-white font-bold text-center">Total cost incl. installation</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.size}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-orange-800 text-sm leading-relaxed">After deducting the federal subsidy (one-time remuneration, OUR), costs are reduced by CHF 300–400 per kWp. By comparing multiple quotes you can save several thousand francs on top of that.</p>
          </div>
        </section>

        {/* Choosing installer */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Checklist</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">What to look for when choosing an installer?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Not all installers offer the same quality. Check these points:</p>
            <ul className="space-y-4 mb-6">
              {[
                { title: 'Certification', text: 'Is the company recognised and does it have proven experience?' },
                { title: 'Locality', text: 'A regional installer knows the cantonal regulations and subsidies' },
                { title: 'References', text: 'Has it completed comparable projects in your area?' },
                { title: 'Warranties', text: 'What warranties does it offer on mounting, panels and inverter?' },
                { title: 'Value for money', text: 'Only by comparing multiple quotes can you tell whether a price is fair' },
              ].map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">{c.title}</strong> — {c.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div><img src="/images/asset-beratung-indoor-2.png" alt="Choosing a solar installer in Switzerland" className="w-full h-72 object-cover rounded-3xl" /></div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Sun className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Find an installer in your region now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">Fill in our form in 2 minutes and receive up to 3 quotes from <Link href="/en/request" className="text-[#F97316] hover:underline font-medium">certified installers</Link> in your region — free of charge and without obligation.</p>
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
