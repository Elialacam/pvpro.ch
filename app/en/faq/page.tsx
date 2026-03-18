import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ – Frequently Asked Questions | PVPro.ch',
  description: 'Answers to the most common questions about solar installations in Switzerland: costs, subsidies, installation and more.',
  alternates: { canonical: 'https://www.pvpro.ch/en/faq' },
};

const faqs = [
  { q: 'Is PVPro\'s service free?', a: 'Yes, our service is completely free for homeowners. We are funded by commissions from partner installers — with no extra cost to you.' },
  { q: 'How much does a solar installation cost in Switzerland?', a: 'For a detached house, prices are typically between CHF 15,000 and CHF 35,000 after subsidies. This depends on the system size, roof type and components chosen.' },
  { q: 'What subsidies exist for solar in Switzerland?', a: 'The federal government offers the one-time payment (OTP): approximately CHF 300–400 per kWp. Many cantons also have their own programmes. The investment is also tax-deductible.' },
  { q: 'How long does installation take?', a: 'The actual installation usually takes 1 to 3 days depending on the system size. From first contact to commissioning, allow about 4 to 8 weeks.' },
  { q: 'How much electricity does a solar installation produce?', a: 'In Switzerland, a solar installation produces approximately 900–1,000 kWh per kWp per year. A 10 kWp installation therefore produces around 9,000–10,000 kWh per year.' },
  { q: 'Am I obliged to accept any offer?', a: 'No. You can decline all quotes without any consequences. No contract is concluded with PVPro.' },
  { q: 'How quickly will I receive quotes?', a: 'As a rule, you receive offers within 24 to 48 hours of your request.' },
  { q: 'Is solar worth it in Switzerland?', a: 'Yes. Thanks to rising electricity prices and available subsidies, most installations pay for themselves within 10 to 15 years, with a lifespan of 25 to 30 years.' },
  { q: 'How do I choose the right system size?', a: 'The ideal size depends on your annual electricity consumption, available roof space and budget. Our partner installers will advise you personally.' },
  { q: 'Is PVPro active throughout Switzerland?', a: 'Yes, we operate in all 26 Swiss cantons — in German-, French- and Italian-speaking Switzerland.' },
];

export default function FaqEnPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">FAQ</span>
        </nav>

        <div className="mb-12">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Help & support</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Frequently asked questions</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Here you will find answers to the most common questions about solar installations, subsidies and our matching service in Switzerland.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h2 className="font-bold text-gray-900 mb-2">{faq.q}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Our team is happy to help. Request your free quotes now.</p>
          <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Get free quotes →
          </Link>
        </div>
      </div>
    </main>
  );
}
