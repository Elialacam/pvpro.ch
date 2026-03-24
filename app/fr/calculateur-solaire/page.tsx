import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import { CheckCircle, Calculator, Zap, TrendingUp, PiggyBank } from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Calculateur solaire Suisse – Calculer coûts et rendement | PVPro',
  description: 'Calculateur solaire gratuit pour la Suisse. Calculez en 30 secondes les coûts, le rendement et l\'amortissement de votre installation solaire.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/calculateur-solaire',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solarrechner',
      'fr-CH': 'https://www.pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://www.pvpro.ch/en/solar-calculator',
      'it-CH': 'https://www.pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://www.pvpro.ch/solarrechner',
    },
  },
};

const benefits = [
  { icon: Calculator, title: 'Calcul instantané',      description: 'Obtenez en quelques secondes une première estimation pour votre installation solaire.' },
  { icon: Zap,        title: 'Calculer le rendement',  description: 'Voyez combien d\'électricité vous pouvez produire avec votre surface de toit.' },
  { icon: PiggyBank,  title: 'Comprendre les coûts',   description: 'Estimation réaliste basée sur les prix du marché suisse.' },
  { icon: TrendingUp, title: 'Planifier l\'amortissement', description: 'Sachez quand votre investissement sera rentabilisé.' },
];

const faqs = [
  { question: 'Quelle est la précision du calculateur ?', answer: "Notre calculateur vous donne une première orientation. Il est basé sur des valeurs moyennes suisses : 6,5 m² par kWp, 950 kWh de production par kWp et 2'200 CHF de coûts d'installation par kWp. Pour un calcul exact, nous recommandons une consultation professionnelle sur place." },
  { question: 'Qu\'est-ce que le kWp ?', answer: 'Le kWp (kilowatt-crête) est l\'unité de mesure de la puissance nominale d\'une installation photovoltaïque. 1 kWp correspond à environ 6,5 m² de surface de panneaux en Suisse.' },
  { question: 'Combien d\'électricité puis-je utiliser moi-même ?', answer: 'Sans stockage, vous pouvez utiliser environ 25–35% de l\'électricité vous-même. Avec un stockage batterie, l\'autoconsommation passe à environ 60–75%.' },
  { question: 'Comment obtenir un devis précis ?', answer: 'Le calculateur vous donne une bonne première estimation. Pour un devis exact, obtenez jusqu\'à 3 offres gratuites d\'installateurs certifiés via PVPro.' },
];

export default function CalculateurSolairePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-[#0f1f3d] pt-28 pb-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Calculator className="w-3.5 h-3.5" />Outil gratuit
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Calculateur solaire Suisse
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Calculez en 30 secondes les coûts, le rendement et l'amortissement de votre installation solaire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <SolarCalculator />
        </div>
      </section>

      <section className="py-16" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Ce que vous apprenez</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl bg-white p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <CtaAnfrage />
        </div>
      </section>
          <FaqSchema faqs={faqs} />
    </main>
  );
}
