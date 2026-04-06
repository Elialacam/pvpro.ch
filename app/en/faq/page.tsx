import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import FaqSchema from '@/components/FaqSchema';
import { faqContent } from '@/lib/faqData';

export const metadata: Metadata = {
  title: 'FAQ – Frequently Asked Questions | PVPro.ch',
  description: 'Answers to the most common questions about solar installations in Switzerland: costs, subsidies, installation and more.',
  alternates: {
    canonical: 'https://www.pvpro.ch/en/faq',
    languages: {
      'de-CH': 'https://www.pvpro.ch/faq',
      'fr-CH': 'https://www.pvpro.ch/fr/faq',
      'en-CH': 'https://www.pvpro.ch/en/faq',
      'it-CH': 'https://www.pvpro.ch/it/faq',
      'x-default': 'https://www.pvpro.ch/faq',
    },
  },
};

export default function FaqEnPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/en" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">FAQ</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Help &amp; support</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Frequently asked questions
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Here you will find answers to the most frequently asked questions about solar installations, subsidies and our referral service in Switzerland.
          </p>
        </div>

      </div>

      <FaqSchema faqs={faqContent.en.faqs} />
      <FAQ />

      {/* CTA */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 mt-12">
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Our team is happy to help. Request your free quotes now.
          </p>
          <Link
            href="/en/request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Request free quote →
          </Link>
        </div>
      </div>
    </main>
  );
}
