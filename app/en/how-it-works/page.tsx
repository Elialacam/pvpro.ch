import Link from 'next/link';
import { ChevronRight, FileText, Search, CheckCircle, Clock, ShieldCheck, Euro, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works – PVPro.ch | Solar Quotes in 3 Steps',
  description: 'How PVPro works: fill in the form, receive up to 3 certified quotes and choose the best installer. Free and no obligation.',
  alternates: { canonical: 'https://www.pvpro.ch/en/how-it-works' },
};

const steps = [
  {
    number: '1', Icon: FileText,
    title: 'Fill in the form',
    subtitle: 'Takes less than 2 minutes',
    description: 'Enter your contact details and address in our simple online form. No technical knowledge is required — we guide you step by step through the process.',
    details: ['Name, phone number and email', 'Full address of your property', 'No account or registration needed', '100% free and no obligation'],
  },
  {
    number: '2', Icon: Search,
    title: 'We connect you with certified installers',
    subtitle: 'Within 24–48 hours',
    description: 'Once we receive your request, we forward it to up to 3 certified solar installers in your region. Every partner in our network has been pre-screened for certifications, references and quality.',
    details: ['Up to 3 independent quotes', 'Only certified professionals', 'Installers from your region', 'Individual offers tailored to your roof'],
  },
  {
    number: '3', Icon: CheckCircle,
    title: 'Compare and choose',
    subtitle: 'No pressure, no obligation',
    description: 'You receive the installers\' offers directly and compare prices, services and terms at your own pace. You decide freely whether and which offer you accept — with no pressure at all.',
    details: ['Real prices, no bait offers', 'No installer has priority', 'No contract with PVPro', 'Free decision, no minimum order'],
  },
];

const benefits = [
  { Icon: Clock,       title: 'Time saving',         text: 'Instead of contacting multiple installers yourself, PVPro handles the search for you — in less than 2 minutes.' },
  { Icon: ShieldCheck, title: 'Certified quality',    text: 'Only installers with valid certifications, proof of insurance and positive references.' },
  { Icon: Euro,        title: 'Free of charge',       text: 'Our service is 100% free for homeowners. We are funded by installer commissions — no extra cost for you.' },
  { Icon: Phone,       title: 'Personal support',     text: 'If you have questions, our team is available by phone and email at any time.' },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">How it works</span>
        </nav>

        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Simple & transparent</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Get the best solar quote in 3 steps
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            PVPro makes comparing solar installations simple, fast and free. You don't need to contact multiple installers yourself — we do it for you.
          </p>
        </div>

        <div className="flex flex-col gap-0 mb-24">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-9 top-[88px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-orange-200 to-orange-100 hidden sm:block" />
                )}
                <div className="flex flex-col sm:flex-row gap-8 pb-16">
                  <div className="flex-shrink-0">
                    <div className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                      <Icon className="w-8 h-8 text-white" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-1">{step.subtitle}</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                            <span className="text-[#F97316] text-[10px] font-bold">✓</span>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Why PVPro?</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">The benefits at a glance</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.Icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 p-8 sm:p-10 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { q: 'Is the service really free?', a: 'Yes, 100%. We are funded by installer commissions — at no extra cost to you.' },
              { q: 'Am I obliged to choose an offer?', a: 'No. You can decline all quotes without any consequences.' },
              { q: 'How quickly will I receive quotes?', a: 'Usually within 24–48 hours of your request.' },
              { q: 'Which regions is PVPro active in?', a: 'We operate throughout Switzerland, in all 26 cantons.' },
            ].map((faq) => (
              <div key={faq.q}>
                <p className="font-bold text-gray-900 mb-1 text-sm">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link href="/en/faq" className="text-sm font-semibold text-[#F97316] hover:underline">View all FAQ →</Link>
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start for free now</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Fill in the form in under 2 minutes and receive up to 3 quotes from certified installers.</p>
          <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Get free quotes →
          </Link>
        </div>
      </div>
    </main>
  );
}
