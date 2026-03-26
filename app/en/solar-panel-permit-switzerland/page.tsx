import Link from 'next/link';
import { ChevronRight, CheckCircle, AlertCircle, FileText, ArrowRight, Shield, Home, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Solar Panel Permit Switzerland 2026 – What You Need to Know | PVPro.ch',
  description: 'Does a solar system in Switzerland need planning permission? Rules for all cantons, when a permit is required and how PVPro helps.',
  alternates: {
    canonical: 'https://pvpro.ch/en/solar-panel-permit-switzerland',
    languages: {
      'de-CH': 'https://pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
      'fr-CH': 'https://pvpro.ch/fr/autorisation-installation-solaire-suisse',
      'en-CH': 'https://pvpro.ch/en/solar-panel-permit-switzerland',
      'it-CH': 'https://pvpro.ch/it/autorizzazione-impianto-solare-svizzera',
      'x-default': 'https://pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
    },
  },
  openGraph: {
    title: 'Solar Panel Permit Switzerland 2026 – What You Need to Know',
    description: 'Does a solar system in Switzerland need planning permission? All cantonal rules, notification requirements and exceptions.',
    url: 'https://pvpro.ch/en/solar-panel-permit-switzerland',
    type: 'website',
    locale: 'en_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Do I need a permit for a rooftop solar system?',
    answer: 'In most cases, no. Rooftop systems mounted parallel to the roof that do not exceed the ridge are generally permit-free in Switzerland and subject only to a notification requirement.',
  },
  {
    question: 'How much does a planning application for a solar system cost?',
    answer: 'Costs vary by municipality and canton but typically range between CHF 200 and CHF 800. For permit-free systems, there are no costs at all.',
  },
  {
    question: 'Who notifies the municipality about the solar installation?',
    answer: 'The certified installer usually handles the notification. PVPro only connects you with certified companies that are experienced in this process.',
  },
  {
    question: 'Does the permit exemption also apply to balcony power stations?',
    answer: 'Balcony power stations (plug-in solar devices) are also generally permit-free in Switzerland, but subject to their own rules regarding output and grid feed-in.',
  },
  {
    question: 'What happens if I install the solar system without notifying the municipality?',
    answer: 'This can cause problems when applying for subsidies and, in the worst case, trigger a retroactive permit requirement. It is always advisable to follow the correct procedure — your installer takes care of this.',
  },
];

const noPermit = [
  'The system is building-integrated or mounted parallel to the roof',
  'It does not exceed the roof ridge',
  'It does not significantly impair the townscape',
  'The building is not located in a protected zone',
];

const permitRequired = [
  'The building is a listed historic monument',
  'The building is in an ISOS townscape protection area',
  'The system is ground-mounted (e.g. in the garden)',
  'The system exceeds the roof ridge',
  'The canton has enacted stricter regulations',
];

const steps = [
  {
    n: '1',
    title: 'Contact an installer',
    text: 'A certified installer assesses your situation and clarifies whether a permit is required. PVPro connects you free of charge.',
  },
  {
    n: '2',
    title: 'Notification or planning application',
    text: 'Depending on the situation, the installer submits a notification or planning application to the municipality. They know the local regulations inside out.',
  },
  {
    n: '3',
    title: 'Installation',
    text: 'After approval, the system is installed. For permit-free systems, this often happens within a few weeks.',
  },
  {
    n: '4',
    title: 'Apply for subsidy',
    text: 'After installation, the one-time subsidy (OTS) is registered with Pronovo — also often handled by the installer.',
  },
];

export default function SolarPanelPermitPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solar Panel Permit Switzerland</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Shield className="w-3.5 h-3.5" /> Law &amp; Permits
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solar Panel Permits in Switzerland
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              In Switzerland, solar systems generally do not require planning permission — but not always. Whether you need a building permit depends on the canton, the location of the building and the type of system. This page explains the current rules clearly and simply.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Usually', sub: 'no permit needed', note: 'for standard rooftop systems' },
              { val: '26', sub: 'cantons', note: 'each with their own regulations' },
              { val: 'Notification', sub: 'instead of permit', note: 'sufficient in most cases' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-2xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── No permit needed ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">No permit required</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              When does a solar system in Switzerland not need a permit?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Since the revision of the <strong>Spatial Planning Act (SPA)</strong>, rooftop solar systems in Switzerland are generally permit-free if they meet the following conditions:
            </p>
            <ul className="space-y-3 mb-6">
              {noPermit.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>Conclusion:</strong> If all these conditions are met, you do not need a building permit — a simple <strong>notification to the municipality</strong> is sufficient.
              </p>
            </div>
          </div>

          {/* Visual side */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-3.png"
              alt="Technician on roof with solar panels – permit requirements Switzerland"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Did you know?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                In Switzerland, more than 50,000 new solar systems were installed in 2024 — the vast majority without a permit. With proper planning and an experienced installer, the path to your own solar system is straightforward.
              </p>
            </div>
          </div>
        </section>

        {/* ── Permit required ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Exceptions</p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                When is a permit still required?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                In certain situations a planning application is still required — in these cases you must apply <strong>before installation</strong>:
              </p>
              <ul className="space-y-3">
                {permitRequired.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-amber-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  In these cases, a planning application must be submitted before installation. Your installer knows the local rules and will assist you.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Cantonal differences</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Differences between cantons
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Although federal law provides the foundation, cantons have some room for manoeuvre. Some cantons such as <Link href="/en/solar-subsidies-canton-zurich" className="text-[#F97316] hover:underline font-medium">Canton Zurich</Link> have introduced a <strong>solar obligation for new buildings</strong>. Other cantons have simplified notification procedures.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { kanton: 'Zurich', regel: 'Solar obligation for new buildings from 2025; rooftop systems otherwise subject to notification', badge: 'Solar Duty' },
                  { kanton: 'Berne', regel: 'Simplified notification procedure for standard installations', badge: 'Notification' },
                  { kanton: 'Geneva', regel: 'Solar obligation for renovations of larger buildings', badge: 'Solar Duty' },
                  { kanton: 'Ticino', regel: 'Strict rules in townscape protection areas', badge: 'Heritage' },
                  { kanton: 'All others', regel: 'Federal SPA applies: permit-free for standard installations', badge: 'Standard' },
                ].map(r => (
                  <div key={r.kanton} className="flex items-start justify-between bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{r.kanton}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{r.regel}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-500 flex-shrink-0 ml-2">{r.badge}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Important:</strong> Always check with your <strong>municipality</strong> as regulations can vary further at the local level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Notification procedure ── */}
        <section className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Simpler process</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                What is the notification procedure?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The notification procedure is <strong>not a permit procedure</strong> — it is far simpler. You inform the municipality before installation that you intend to erect a solar system. The municipality then has a short period to respond.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you receive <strong>no response</strong>, the installation is deemed approved. In practice, in most cases the installer submits the notification on your behalf.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The procedure is straightforward and typically takes only a few days to two weeks. Unlike a planning application, it generally incurs <strong>no costs</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { step: '1', title: 'Submit notification', text: 'The installer submits the notification to the municipality — often digitally.', color: 'bg-[#F97316]' },
                { step: '2', title: 'Waiting period (10–30 days)', text: 'The municipality reviews the notification. No response = Approved.', color: 'bg-blue-500' },
                { step: '3', title: 'Install the system', text: 'After the deadline or express approval, installation begins.', color: 'bg-green-500' },
                { step: '4', title: 'Apply for OTS', text: 'The one-time subsidy is registered with Pronovo — often by the installer.', color: 'bg-purple-500' },
              ].map(s => (
                <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                  <div className={`w-8 h-8 rounded-full ${s.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Step by step</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Step by step: what do you need to do?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              From first enquiry to subsidy — four steps to your own solar system. Your installer guides you through the entire process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div
                  className="w-12 h-12 rounded-full text-white text-lg font-bold flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {s.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-start gap-4">
            <FileText className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-1">
                Everything about the one-time subsidy (OTS)
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The <Link href="/en/solar-subsidies" className="text-[#F97316] hover:underline font-medium">one-time subsidy (OTS)</Link> from the federal government covers a significant portion of your investment costs. Find out how much you can receive and how to apply.
              </p>
            </div>
          </div>
        </section>

        {/* ── Balcony power stations ── */}
        <section className="bg-[#0f1f3d] rounded-3xl p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Special case</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                Balcony power stations: special rules
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                <Link href="/en/blog/balkonkraftwerk-schweiz" className="text-[#F97316] hover:underline font-medium">Balcony power stations</Link> (plug-in solar devices) are also generally permit-free in Switzerland. However, specific rules apply:
              </p>
              <ul className="space-y-2">
                {[
                  'Maximum feed-in power: 600 watts into the household grid',
                  'No professional electrical installation required',
                  'Notification to grid operator recommended',
                  'In condominium units: approval of the owners\' association required',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-white/60 text-sm mb-4">More about balcony power stations in Switzerland</p>
              <Link
                href="/en/blog/balkonkraftwerk-schweiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity border border-white/20"
              >
                Balcony power station guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Home className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Request a quote now — permit check included
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Our <Link href="/en/request" className="text-[#F97316] hover:underline font-medium">certified installers</Link> know the permit rules in your canton and handle everything — from notification to subsidy.
          </p>
          <Link
            href="/en/request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Request a free quote →
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Frequently asked questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Questions about solar permits
            </h2>
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
            <p className="text-gray-500 text-sm mb-4">More information about solar systems:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/en/solar-panel-costs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Solar system costs
              </Link>
              <Link
                href="/en/solar-subsidies"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Subsidies &amp; OTS
              </Link>
              <Link
                href="/en/how-solar-works"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                How solar works
              </Link>
              <Link
                href="/en/request"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
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
