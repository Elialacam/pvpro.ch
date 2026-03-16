import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wie funktioniert eine Solaranlage? | PVPro.ch',
  description: 'Wie funktioniert eine Solaranlage? Erklärung der Photovoltaik-Technologie, der Komponenten und des Stromflusses – einfach und verständlich erklärt.',
};

export default function WieFunktioniertPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Wie funktioniert eine Solaranlage</span>
        </nav>
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Technik & Wissen</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Wie funktioniert eine Solaranlage?
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Solarmodule wandeln Sonnenlicht direkt in elektrischen Strom um. Erfahren Sie, wie die Photovoltaik-Technologie funktioniert und wie der Strom in Ihrem Haushalt genutzt wird.
          </p>
        </div>
        <div className="flex items-center justify-center py-32 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 mb-12">
          <div className="text-center">
            <p className="text-5xl mb-4">🔧</p>
            <p className="text-gray-500 font-medium">Inhalt folgt in Kürze</p>
          </div>
        </div>
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Bereit für Ihre eigene Solaranlage?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Vergleichen Sie jetzt kostenlos Offerten von geprüften Installateuren in Ihrer Region.</p>
          <Link href="/anfrage" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Kostenlose Offerte anfordern →
          </Link>
        </div>
      </div>
    </main>
  );
}
