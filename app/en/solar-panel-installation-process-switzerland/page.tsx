import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText, Clock } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Installation Process Switzerland 2026 – Steps, Duration & Costs | PVPro.ch',
  description: 'How does solar panel installation work in Switzerland? Steps, duration, costs and what to watch out for — all explained by PVPro.ch.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/solar-panel-installation-process-switzerland',
    languages: {
      'de-CH': 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installation-photovoltaique-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-process-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/processo-installazione-fotovoltaico-svizzera',
      'x-default': 'https://www.pvpro.ch/photovoltaik-installation-schweiz',
    },
  },
  openGraph: {
    title: 'Solar Panel Installation Process Switzerland 2026 – Steps, Duration & Costs',
    description: 'Steps, duration and costs of solar panel installation in Switzerland — explained step by step.',
    url: 'https://www.pvpro.ch/en/solar-panel-installation-process-switzerland',
    type: 'website',
    locale: 'en_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'How long does the installation of a solar system on a detached house take?',
    answer: 'The actual installation of a detached house with 8–12 kWp typically takes 1 to 3 days. The total project duration from order to commissioning is 4 to 12 weeks.',
  },
  {
    question: 'Do I need to be at home during the installation?',
    answer: 'Not necessarily for the entire duration. However, it is recommended to be present on the first day and during commissioning.',
  },
  {
    question: 'Who handles the permit?',
    answer: 'As a rule, the installer handles the notification to the municipality or — for installations requiring a permit — the building application.',
  },
  {
    question: 'When does the system start producing electricity?',
    answer: 'Immediately after commissioning — that is, on the last day of installation. From the very first day, the system produces electricity as long as the sun is shining.',
  },
  {
    question: 'What happens after the installation?',
    answer: 'The installer registers the system with the local grid operator and submits the one-time payment application to Pronovo. You receive an introduction and can track production via an app or monitoring system.',
  },
  {
    question: 'Can I track the progress of the installation?',
    answer: 'Most modern inverters have integrated monitoring that you can follow via an app. The installer sets this up during commissioning.',
  },
];

const phases = [
  {
    n: '1',
    title: 'Planning and quote',
    duration: '1–2 weeks',
    text: 'Everything begins with a needs analysis. A certified installer visits your building, analyses the roof area, orientation, pitch and shading. Based on this, they create a tailored quote with system size, components and costs.',
  },
  {
    n: '2',
    title: 'Permit and notification',
    duration: '1–4 weeks',
    text: 'In most cases, a rooftop solar system does not require a permit — a simple notification to the municipality is sufficient. In exceptional cases (listed buildings, freestanding systems) a building application is required. The installer handles this step for you.',
  },
  {
    n: '3',
    title: 'Material procurement',
    duration: '2–6 weeks',
    text: 'After the order is placed, the modules, inverter, mounting system and any battery storage are ordered. Delivery times vary depending on the manufacturer and season.',
  },
  {
    n: '4',
    title: 'Installation',
    duration: '1–3 days',
    text: 'The installation team mounts the substructure on the roof, attaches the modules, runs the DC cables and installs the inverter in the building. For larger systems, installation takes longer.',
  },
  {
    n: '5',
    title: 'Electrical connection and commissioning',
    duration: '1 day',
    text: 'A certified electrician connects the system to the domestic grid and commissions it. The system is configured and tested.',
  },
  {
    n: '6',
    title: 'Registration and subsidy',
    duration: '2–4 weeks',
    text: 'The installer registers the system with the local grid operator and submits the one-time payment (OTS) application to Pronovo. Payment is made a few months later.',
  },
];

const durations = [
  { phase: 'Planning and quote', duration: '1–2 weeks' },
  { phase: 'Permit / notification', duration: '1–4 weeks' },
  { phase: 'Material procurement', duration: '2–6 weeks' },
  { phase: 'Installation', duration: '1–3 days' },
  { phase: 'Connection and commissioning', duration: '1 day' },
  { phase: 'OTS registration', duration: '2–4 weeks' },
  { phase: 'Total duration from order', duration: '4–12 weeks', highlight: true },
];

export default function SolarPanelInstallationProcessSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/en/solar-panel-installation-switzerland" className="hover:text-white/70 transition-colors">Installation</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Installation process</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Installation &amp; Process
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              How Does Solar Panel Installation Work in Switzerland?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              From the first inquiry to the first self-produced electricity — solar panel installation in Switzerland follows clearly defined steps. Knowing what to expect helps you plan better and make the right decisions. This page explains the entire process step by step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 days', sub: 'Installation duration detached house', note: 'for a typical single-family home' },
              { val: '4–12 weeks', sub: 'Lead time from order', note: 'incl. planning and material procurement' },
              { val: 'Turnkey', sub: 'Installer handles everything', note: 'from planning to OTS application' },
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

        {/* ── Process ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Step by step</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The complete solar panel installation process
            </h2>
          </div>
          <div className="space-y-4">
            {phases.map(phase => (
              <div key={phase.n} className="rounded-2xl p-7" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {phase.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-base">Phase {phase.n} — {phase.title}</h3>
                      <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{phase.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Duration ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Timeline</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              How long does the entire process take?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The biggest time factor is often the installer&apos;s workload and component delivery times — especially during peak season (spring and summer). Placing your order early is worthwhile.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ready to get started?{' '}
              <Link href="/en/get-solar-panel-quotes" className="text-[#F97316] hover:underline font-medium">Compare free quotes</Link>{' '}
              from certified installers in your region.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Phase</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {durations.map((row, i) => (
                    <tr key={row.phase} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.phase}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Installer & Homeowner ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Installer services</p>
            <h2 className="text-xl font-bold text-white mb-5">What does a good installer do?</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A professional installer handles the entire process for you. PVPro.ch only connects you with installers who reliably carry out all these steps.
            </p>
            <ul className="space-y-3">
              {[
                'Roof analysis and system sizing',
                'Notification or building permit application to the municipality',
                'Procurement of all components',
                'Professional installation and electrical connection',
                'Commissioning and introduction',
                'Registration with the grid operator',
                'One-time payment (OTS) application to Pronovo',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Your tasks</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">What do I need to do as a homeowner?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Actually very little. Your tasks are limited to:
            </p>
            <ul className="space-y-3">
              {[
                'Request a quote and compare offers',
                'Commission the installer',
                'Be present during installation (recommended, not mandatory)',
                'Receive the introduction during commissioning',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">Good to know:</strong> The installer handles everything else — from the permit to the OTS application.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Find an installer now and get started
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Fill in our form in 2 minutes — we connect you with up to 3 certified installers in your region who handle the entire process for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/en/request"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Get free quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            First{' '}
            <Link href="/en/get-solar-panel-quotes" className="text-[#F97316] hover:underline font-medium">compare quotes</Link>{' '}
            or{' '}
            <Link href="/en/solar-comparison-portal-switzerland" className="text-[#F97316] hover:underline font-medium">providers</Link>?
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
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">More information:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/en/solar-panel-installation-switzerland" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Find installer
              </Link>
              <Link href="/en/solar-subsidies" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar subsidies OTS
              </Link>
              <Link href="/en/solar-panel-costs" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solar panel costs
              </Link>
              <Link href="/en/request" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Get a quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
