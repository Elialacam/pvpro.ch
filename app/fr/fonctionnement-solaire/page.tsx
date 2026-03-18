import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import WieFunktioniertInteractive from '@/components/WieFunktioniertInteractive';

export const metadata: Metadata = {
  title: 'Comment fonctionne une installation solaire ? Expliqué simplement (Suisse) | PVPro.ch',
  description: 'Comment fonctionne une installation solaire ? Explication simple avec exemples, production d\'électricité et réponses aux questions fréquentes sur le photovoltaïque.',
  alternates: { canonical: 'https://www.pvpro.ch/fr/fonctionnement-solaire' },
};

export default function FonctionnementSolairePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Fonctionnement d'une installation solaire</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Technologie & savoir</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Comment fonctionne une installation solaire ? Expliqué simplement
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Une installation solaire convertit la lumière du soleil directement en électricité — basé sur l'effet photoélectrique. Cette page explique comment cela fonctionne et ce que votre installation peut produire, pas à pas.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/fr/demande" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  Obtenir un devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/fr/calculateur-solaire" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
                  Calculateur solaire
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Prêt pour votre propre installation ?</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">Obtenez jusqu'à 3 devis gratuits d'installateurs certifiés dans votre région.</p>
            <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Obtenir des devis gratuits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
