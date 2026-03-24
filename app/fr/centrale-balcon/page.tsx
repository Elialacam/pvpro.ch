import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centrale solaire balcon Suisse – Mini-installation pour balcon | PVPro.ch',
  description: "Centrale solaire pour balcon en Suisse : coûts, inscription, bases légales et conseils pour locataires et propriétaires. Produisez votre propre électricité sans toit.",
};

export default function CentraleBalconPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/fr" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Centrale solaire balcon Suisse</span>
        </nav>
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Mini-installation solaire</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Centrale solaire balcon en Suisse
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Une centrale solaire de balcon permet aussi aux locataires et aux propriétaires d'appartements de produire leur propre électricité solaire — sans toit. Découvrez tout sur les coûts, l'inscription et les règles en Suisse.
          </p>
        </div>
        <div className="flex items-center justify-center py-32 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 mb-12">
          <div className="text-center">
            <p className="text-5xl mb-4">🔧</p>
            <p className="text-gray-500 font-medium">Contenu disponible prochainement</p>
          </div>
        </div>
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Une installation plus grande prévue ?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Pour les propriétaires de maison, une installation solaire complète est souvent plus rentable. Comparez des offres gratuitement maintenant.</p>
          <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite →
          </Link>
        </div>
      </div>
    </main>
  );
}
