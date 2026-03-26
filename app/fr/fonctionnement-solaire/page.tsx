import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import WieFunktioniertInteractive from '@/components/WieFunktioniertInteractive';
import FaqSchema from '@/components/FaqSchema';

const wfFaqs = [
  { question: 'Comment fonctionne une installation solaire, simplement expliqué ?', answer: "Les modules solaires produisent du courant continu à partir de la lumière du soleil. Un onduleur le convertit en courant alternatif utilisable, qui est consommé directement dans le foyer ou injecté dans le réseau." },
  { question: 'Quelle est la différence entre le photovoltaïque et l\'installation solaire ?', answer: "Le photovoltaïque produit de l'électricité à partir de la lumière. La thermique solaire, en revanche, produit de la chaleur (par ex. pour l'eau chaude). Dans la vie courante, «installation solaire» est souvent utilisé comme synonyme de photovoltaïque." },
  { question: 'Que produit un module solaire de 800 watts par jour ?', answer: "Un système de 800 watts produit environ 2 à 4 kWh par jour en été. En hiver, la production est nettement plus faible, car les jours sont plus courts et le soleil est plus bas." },
  { question: 'Un panneau solaire peut-il faire fonctionner un réfrigérateur ?', answer: "Oui, un panneau solaire peut faire fonctionner un réfrigérateur — mais généralement pas en permanence tout seul. Il faut pour cela un système plus grand ou un stockage." },
  { question: 'Peut-on être autonome avec le photovoltaïque ?', answer: "Pas complètement. Sans stockage et en hiver, on reste partiellement dépendant de l'électricité du réseau. Avec un grand stockage par batterie, on peut cependant atteindre un très haut degré d'autoapprovisionnement." },
  { question: 'Que produit une installation solaire en hiver ?', answer: "En hiver, une installation solaire produit nettement moins d'électricité — mais pas rien. Les jours plus courts et les angles solaires plus bas réduisent la production, mais de l'électricité est quand même produite." },
  { question: 'Combien de temps dure un stockage de 10 kWh ?', answer: "Un stockage de 10 kWh couvre, selon le foyer, la soirée et la nuit. Avec une consommation élevée (par ex. pompe à chaleur), il se décharge plus rapidement." },
];

export const metadata: Metadata = {
  title: "Comment fonctionne une installation solaire ? Expliqué simplement (Suisse) | PVPro.ch",
  description: "Comment fonctionne une installation solaire ? Explication simple avec exemples, production d'électricité et réponses aux questions fréquentes sur le photovoltaïque.",
  alternates: {
    canonical: 'https://pvpro.ch/fr/fonctionnement-solaire',
    languages: {
      'de-CH': 'https://pvpro.ch/wie-funktioniert',
      'fr-CH': 'https://pvpro.ch/fr/fonctionnement-solaire',
      'en-CH': 'https://pvpro.ch/en/how-solar-works',
      'it-CH': 'https://pvpro.ch/it/come-funziona-solare',
      'x-default': 'https://pvpro.ch/wie-funktioniert',
    },
  },
};

export default function FonctionnementSolairePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
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
                <Link
                  href="/fr/demande"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Obtenir un devis gratuit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/fr/calculateur-solaire"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
                >
                  Calculer la production
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden self-center shadow-2xl mb-8">
              <img
                src="/images/wie-funktioniert-solaranlage.png"
                alt="Comment fonctionne une installation solaire – illustration avec soleil, modules solaires, onduleur, stockage et électricité domestique"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: '25–30 ans', label: 'Durée de vie modules' },
              { val: '22%', label: 'Rend. max.' },
              { val: '9–11k', label: 'kWh/an pour 10 kWp' },
              { val: '0 CHF', label: 'Carburant nécessaire' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-[#F97316]">{s.val}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro text ── */}
      <section className="py-14">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Le principe est simple
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Une installation photovoltaïque (PV) est basée sur l'<strong>effet photoélectrique</strong> : lorsque la lumière frappe certains matériaux, des électrons sont libérés et un courant électrique est produit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les modules solaires sur votre toit contiennent des milliers de ces cellules. Ils convertissent la lumière du soleil directement et silencieusement en électricité — sans pièces mobiles, sans émissions, sans bruit.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Photovoltaïque vs. thermique solaire</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#F97316]/20">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Photovoltaïque</p>
                    <p className="text-gray-500 text-xs mt-0.5">Produit de l'<strong>électricité</strong> à partir de la lumière du soleil. C'est ce que la plupart des gens entendent par «installation solaire».</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                  <span className="text-2xl">🌡️</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Thermique solaire</p>
                    <p className="text-gray-500 text-xs mt-0.5">Produit de la <strong>chaleur</strong> à partir de la lumière du soleil — typiquement pour la préparation d'eau chaude ou le chauffage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive section (steps + components + calculator + FAQ) ── */}
      <WieFunktioniertInteractive />

      {/* ── CTA bottom ── */}
      <section className="py-16 bg-[#0f1f3d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt pour votre propre installation solaire ?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Comparez dès maintenant gratuitement des devis d'installateurs certifiés dans votre région — sans engagement et en quelques minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/fr/demande"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-xl"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Obtenir un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/fr/cout-installation-solaire"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white/80 text-sm border border-white/20 hover:border-white/40 transition-colors"
            >
              Calculer les coûts
            </Link>
          </div>
        </div>
      </section>

      <FaqSchema faqs={wfFaqs} />
    </main>
  );
}
