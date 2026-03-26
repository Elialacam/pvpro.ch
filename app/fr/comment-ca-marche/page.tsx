import Link from 'next/link';
import { ChevronRight, FileText, Search, CheckCircle, Clock, ShieldCheck, Euro, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Comment ça marche – PVPro.ch | Devis solaires en 3 étapes",
  description: "Découvrez comment PVPro fonctionne : remplissez le formulaire, recevez jusqu'à 3 devis certifiés et choisissez le meilleur installateur. Gratuit et sans engagement.",
  alternates: {
    canonical: 'https://pvpro.ch/fr/comment-ca-marche',
    languages: {
      'de-CH': 'https://pvpro.ch/wie-es-funktioniert',
      'fr-CH': 'https://pvpro.ch/fr/comment-ca-marche',
      'en-CH': 'https://pvpro.ch/en/how-it-works',
      'it-CH': 'https://pvpro.ch/it/come-funziona',
      'x-default': 'https://pvpro.ch/wie-es-funktioniert',
    },
  },
};

const steps = [
  {
    number: '1',
    Icon: FileText,
    title: 'Remplissez le formulaire',
    subtitle: 'Moins de 2 minutes',
    description: "Indiquez vos coordonnées et votre adresse dans notre formulaire en ligne simple. Aucune connaissance technique n'est nécessaire — nous vous guidons étape par étape.",
    details: [
      'Nom, téléphone et e-mail',
      'Adresse complète de votre bien',
      'Aucun compte requis, aucune inscription',
      '100% gratuit et sans engagement',
    ],
  },
  {
    number: '2',
    Icon: Search,
    title: 'Nous trouvons les installateurs certifiés',
    subtitle: 'Dans les 24 à 48 heures',
    description: "Dès réception de votre demande, nous la transmettons à jusqu'à 3 installateurs solaires certifiés de votre région. Chaque partenaire a été vérifié au préalable : certifications, références et qualité.",
    details: [
      "Jusqu'à 3 devis indépendants",
      'Uniquement des professionnels certifiés',
      'Installateurs de votre région',
      'Offres adaptées à votre toiture',
    ],
  },
  {
    number: '3',
    Icon: CheckCircle,
    title: 'Comparez et choisissez',
    subtitle: 'Sans pression, sans obligation',
    description: 'Vous recevez les offres des installateurs directement et comparez les prix, prestations et conditions tranquillement. Vous décidez librement si et quelle offre vous acceptez — sans aucune pression.',
    details: [
      "Vrais prix, sans offres d'appel",
      "Aucun installateur n'a la priorité",
      'Aucun contrat avec PVPro',
      'Décision libre, sans minimum',
    ],
  },
];

const benefits = [
  { Icon: Clock,       title: 'Gain de temps',       text: "Au lieu de contacter plusieurs installateurs vous-même, PVPro s'en charge — en moins de 2 minutes." },
  { Icon: ShieldCheck, title: 'Qualité certifiée',    text: "Uniquement des installateurs avec certifications valides, attestations d'assurance et références positives." },
  { Icon: Euro,        title: 'Gratuit',              text: "Notre service est 100% gratuit pour les propriétaires. Nous nous finançons par des commissions des installateurs." },
  { Icon: Phone,       title: 'Support personnalisé', text: 'Pour toute question, notre équipe est disponible par téléphone et e-mail.' },
];

export default function CommentCaMarchePage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/fr" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Comment ça marche</span>
        </nav>

        {/* Page header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Simple & transparent</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            3 étapes pour le meilleur devis solaire
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            PVPro rend la comparaison d'installations solaires simple, rapide et gratuite. Vous n'avez pas besoin de contacter plusieurs installateurs — nous le faisons pour vous.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 mb-24">
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-9 top-[88px] w-0.5 h-[calc(100%-40px)] bg-gradient-to-b from-orange-200 to-orange-100 hidden sm:block" />
                )}
                <div className="flex flex-col sm:flex-row gap-8 pb-16">
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-0">
                    <div className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-md" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                      <Icon className="w-8 h-8 text-white" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-xs font-semibold text-[#F97316] uppercase tracking-widest mb-1">{step.subtitle}</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-5 max-w-xl">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                            <span className="text-[#F97316] text-[10px] font-bold">✓</span>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Pourquoi PVPro ?</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Les avantages en un coup d'œil</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => {
              const Icon = b.Icon;
              return (
                <div key={b.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-10 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { q: 'Le service est-il vraiment gratuit ?', a: "Oui, à 100%. Nous nous finançons par des commissions des installateurs — sans supplément pour vous." },
              { q: "Suis-je obligé d'accepter une offre ?", a: 'Non. Vous pouvez refuser toutes les offres sans aucune conséquence.' },
              { q: 'Combien de temps pour recevoir les devis ?', a: "En général dans les 24 à 48 heures suivant votre demande." },
              { q: 'Dans quelles régions PVPro est-il actif ?', a: 'Nous sommes actifs dans toute la Suisse, dans les 26 cantons.' },
            ].map((faq) => (
              <div key={faq.q}>
                <p className="font-bold text-gray-900 mb-1 text-sm">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link href="/fr/faq" className="text-sm font-semibold text-[#F97316] hover:underline">
              Voir toutes les FAQ →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Commencez gratuitement maintenant</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Remplissez le formulaire en moins de 2 minutes et recevez jusqu'à 3 devis d'installateurs certifiés.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Obtenir des devis gratuits →
          </Link>
        </div>

      </div>
    </main>
  );
}
