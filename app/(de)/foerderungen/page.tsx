import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Förderungen für Solaranlagen in der Schweiz | PVPro.ch',
  description: 'Alle staatlichen Förderungen und Subventionen für Photovoltaikanlagen in der Schweiz – Einmalvergütung, kantonale Programme und steuerliche Abzüge.',
};

export default function FoerderungenPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Förderungen</span>
        </nav>

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Subventionen & Förderung</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Förderungen für Solaranlagen in der Schweiz
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Die Schweiz bietet attraktive staatliche Förderprogramme für Photovoltaikanlagen.
            Erfahren Sie, welche Subventionen Sie nutzen können und wie Sie davon profitieren.
          </p>
        </div>

        {/* Placeholder content */}
        <div className="flex items-center justify-center py-32 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-5xl mb-4">🔧</p>
            <p className="text-gray-500 font-medium">Inhalt folgt in Kürze</p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center mt-12" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Förderung optimal nutzen?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Unsere Partner-Installateure helfen Ihnen bei der Beantragung aller verfügbaren Förderungen.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern →
          </Link>
        </div>

      </div>
    </main>
  );
}
