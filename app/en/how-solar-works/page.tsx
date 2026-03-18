import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import WieFunktioniertInteractive from '@/components/WieFunktioniertInteractive';

export const metadata: Metadata = {
  title: 'How does a solar installation work? Simply explained (Switzerland) | PVPro.ch',
  description: 'How does a solar installation work? Simple explanation with examples, electricity production and answers to frequently asked questions about photovoltaics.',
  alternates: { canonical: 'https://www.pvpro.ch/en/how-solar-works' },
};

export default function HowSolarWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/en" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">How a solar installation works</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Technology & knowledge</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                How does a solar installation work? Simply explained
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                A solar installation converts sunlight directly into electricity — based on the photoelectric effect. This page explains how it works and what your installation can produce, step by step.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/request" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  Get a free quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/en/solar-calculator" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
                  Solar calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WieFunktioniertInteractive />

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready for your own installation?</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Get up to 3 free quotes from certified installers in your region.</p>
            <Link href="/en/request" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Get free quotes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
