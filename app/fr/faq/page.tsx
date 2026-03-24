import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'FAQ – Questions fréquentes | PVPro.ch',
  description: 'Réponses aux questions les plus fréquentes sur les installations solaires en Suisse : coûts, subventions, installation et plus.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/faq',
    languages: {
      'de-CH': 'https://www.pvpro.ch/faq',
      'fr-CH': 'https://www.pvpro.ch/fr/faq',
      'en-CH': 'https://www.pvpro.ch/en/faq',
      'it-CH': 'https://www.pvpro.ch/it/faq',
      'x-default': 'https://www.pvpro.ch/faq',
    },
  },
};

const faqs = [
  { q: 'Le service PVPro est-il gratuit ?', a: 'Oui, notre service est entièrement gratuit pour les propriétaires. Nous nous finançons par des commissions des installateurs partenaires — sans aucun supplément pour vous.' },
  { q: 'Combien coûte une installation solaire en Suisse ?', a: 'Pour une maison individuelle, les prix se situent généralement entre 15\'000 et 35\'000 CHF après déduction des subventions. Cela dépend de la taille de l\'installation, du type de toit et des composants choisis.' },
  { q: 'Quelles subventions existent pour le solaire en Suisse ?', a: 'La Confédération propose la rétribution unique (RU) : environ 300–400 CHF par kWp. De nombreux cantons proposent en plus leurs propres programmes. L\'investissement est également déductible fiscalement.' },
  { q: 'Combien de temps dure l\'installation ?', a: 'L\'installation proprement dite dure généralement 1 à 3 jours selon la taille du système. Du premier contact jusqu\'à la mise en service, comptez environ 4 à 8 semaines.' },
  { q: 'Combien d\'électricité produit une installation solaire ?', a: 'En Suisse, une installation produit environ 900–1\'000 kWh par kWp et par an. Une installation de 10 kWp produit donc environ 9\'000–10\'000 kWh par an.' },
  { q: 'Suis-je obligé d\'accepter une offre ?', a: 'Non. Vous pouvez refuser toutes les offres sans aucune conséquence. Aucun contrat avec PVPro n\'est conclu.' },
  { q: 'Dans combien de temps vais-je recevoir les devis ?', a: 'En règle générale, vous recevez les offres dans les 24 à 48 heures suivant votre demande.' },
  { q: 'L\'installation solaire en vaut-elle la peine en Suisse ?', a: 'Oui. Grâce à la hausse des prix de l\'électricité et aux subventions disponibles, la plupart des installations s\'amortissent en 10 à 15 ans pour une durée de vie de 25 à 30 ans.' },
  { q: 'Comment choisir la bonne taille d\'installation ?', a: 'La taille idéale dépend de votre consommation annuelle d\'électricité, de la surface disponible sur votre toit et de votre budget. Nos installateurs partenaires vous conseillent personnellement.' },
  { q: 'PVPro est-il actif dans toute la Suisse ?', a: 'Oui, nous opérons dans les 26 cantons suisses — en Suisse alémanique, romande et italophone.' },
];

export default function FaqFrPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/fr" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">FAQ</span>
        </nav>

        <div className="mb-12">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-2">Aide & support</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Questions fréquentes</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Ici vous trouverez des réponses aux questions les plus fréquentes sur les installations solaires, les subventions et notre service d'intermédiation en Suisse.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">D'autres questions ?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Notre équipe est là pour vous aider. Demandez vos devis gratuits maintenant.</p>
          <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Obtenir des devis gratuits →
          </Link>
        </div>
      </div>
      <FaqSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />
    </main>
  );
}
