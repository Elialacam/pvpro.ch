import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, FileText, Clock, Coins } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Demander une offre panneau solaire Suisse 2026 – Gratuit & sans engagement | PVPro.ch",
  description: "Demandez des offres gratuites pour votre installation solaire en Suisse. Jusqu'à 3 devis d'installateurs certifiés dans votre région. Comparez et économisez.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/demander-offre-panneau-solaire',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
      'fr-CH': 'https://www.pvpro.ch/fr/demander-offre-panneau-solaire',
      'en': 'https://www.pvpro.ch/en/get-solar-panel-quotes',
      'it-CH': 'https://www.pvpro.ch/it/richiedere-preventivo-solare',
      'x-default': 'https://www.pvpro.ch/solaranlage-offerte-einholen',
    },
  },
  openGraph: {
    title: "Demander une offre panneau solaire Suisse 2026 – Gratuit & sans engagement",
    description: "Offres gratuites pour votre installation solaire en Suisse. Jusqu'à 3 devis d'installateurs certifiés.",
    url: 'https://www.pvpro.ch/fr/demander-offre-panneau-solaire',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Combien d'offres vais-je recevoir via PVPro.ch ?",
    answer: "Vous recevez jusqu'à 3 offres personnalisées d'installateurs certifiés dans votre région. Vous disposez ainsi immédiatement d'une base de comparaison.",
  },
  {
    question: "Combien de temps faut-il pour recevoir les offres ?",
    answer: "Dans la plupart des cas, vous recevez les premières offres dans les 24 à 48 heures suivant votre demande.",
  },
  {
    question: "Suis-je engagé après ma demande ?",
    answer: "Non. La demande est entièrement gratuite et sans engagement. Vous décidez librement si vous acceptez une offre et laquelle.",
  },
  {
    question: "Vais-je recevoir des appels publicitaires après ma demande ?",
    answer: "Non. PVPro.ch garantit que vous ne recevrez pas d'appels publicitaires non sollicités. Seuls les installateurs qui vous envoient une offre prendront contact avec vous.",
  },
  {
    question: "Puis-je aussi demander des offres pour un immeuble résidentiel ?",
    answer: "Oui. PVPro.ch propose des offres pour tous les types de bâtiments — maisons individuelles, immeubles résidentiels et bâtiments commerciaux.",
  },
  {
    question: "Que se passe-t-il si aucune offre ne me convient ?",
    answer: "Vous n'êtes engagé à rien. Vous pouvez refuser toutes les offres sans frais.",
  },
];

const offreContenu = [
  "Taille de l'installation en kWc et nombre de modules",
  "Type de module et fabricant avec données techniques",
  "Onduleur — marque et puissance",
  "Système de montage — adapté à votre type de toit",
  "Coûts d'installation détaillés séparément",
  "Production annuelle estimée en kWh",
  "Subvention (RU) déjà déduite ou indiquée séparément",
  "Garanties sur les modules, l'onduleur et le montage",
  "Durée d'amortissement à titre indicatif",
];

export default function DemanderOffrePanneauSolairePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Demander des offres</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <FileText className="w-3.5 h-3.5" /> Offres &amp; Prix
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Demander des offres pour des installations photovoltaïques en Suisse
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Qui veut acheter une installation solaire ne devrait jamais signer la première offre. En Suisse, les prix pour la même installation peuvent varier de plusieurs milliers de francs selon l'installateur. PVPro.ch vous permet d'obtenir gratuitement jusqu'à 3 offres d'installateurs locaux certifiés — en moins de 2 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Gratuit', sub: 'aucun risque, aucun frais caché', note: 'entièrement gratuit pour les propriétaires' },
              { val: '24–48 heures', sub: 'jusqu'à la première offre', note: 'réponse rapide des entreprises locales' },
              { val: "Jusqu'à 4'000 CHF", sub: "d'économies possibles par comparaison", note: 'selon la taille de l\'installation' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* Pourquoi plusieurs offres */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">L'avantage décisif</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Pourquoi demander plusieurs offres ?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              De nombreux propriétaires en Suisse font la même erreur : ils ne contactent qu'un seul installateur et acceptent la première offre. Ce que la plupart ignorent, c'est que pour exactement la même installation — mêmes modules, même onduleur, même puissance — les prix peuvent varier jusqu'à 4'000 francs selon les installateurs.
            </p>
            <p className="text-gray-600 leading-relaxed">La raison est simple : les installateurs calculent différemment, ont des conditions d'achat et des marges différentes. Comparer, c'est gagner.</p>
          </div>
          <div>
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">Exemple — installation 10 kWc</p>
              <div className="space-y-4">
                {[
                  { label: 'Installateur A', price: "29'500 CHF", highlight: false },
                  { label: 'Installateur B', price: "26'800 CHF", highlight: false },
                  { label: 'Installateur C (le moins cher)', price: "25'600 CHF", highlight: true },
                ].map(r => (
                  <div key={r.label} className={`flex justify-between items-center rounded-xl px-5 py-3 ${r.highlight ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-white/5'}`}>
                    <span className={`text-sm font-medium ${r.highlight ? 'text-orange-300' : 'text-white/70'}`}>{r.label}</span>
                    <span className={`font-bold ${r.highlight ? 'text-orange-400' : 'text-white'}`}>{r.price}</span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-white/60 text-sm">Économies grâce à la comparaison</span>
                  <span className="text-green-400 font-bold">jusqu'à 3'900 CHF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">En 3 étapes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Comment est-il facile d'obtenir des offres ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">Autrefois, obtenir des offres signifiait : chercher soi-même, appeler, prendre rendez-vous, attendre. Avec PVPro.ch, cela se fait en 3 étapes :</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '1', title: 'Remplir le formulaire (2 minutes)', text: "Vous décrivez votre situation : surface du toit, consommation électrique, canton, options souhaitées comme le stockage par batterie ou la pompe à chaleur." },
              { n: '2', title: 'Recevoir des offres (24–48 heures)', text: "Jusqu'à 3 installateurs certifiés de votre région vous envoient des offres personnalisées directement." },
              { n: '3', title: 'Comparer et décider', text: "Vous comparez prix, composants et références — et choisissez librement. Aucune obligation, aucune pression." },
            ].map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                <h3 className="font-bold text-gray-900 text-base mb-3">Étape {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contenu d'une bonne offre */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div><img src="/images/asset-beratung-indoor-2.png" alt="Offre panneau solaire Suisse" className="w-full h-72 object-cover rounded-3xl" /></div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Liste de contrôle</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Que contient une bonne offre ?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Une offre sérieuse pour une installation solaire contient toujours les éléments suivants :</p>
            <ul className="space-y-3 mb-6">
              {offreContenu.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed"><strong>Conseil :</strong> Si une offre ne contient pas ces éléments, demandez des précisions — ou obtenez une offre d'un de nos partenaires vérifiés via PVPro.ch.</p>
            </div>
          </div>
        </section>

        {/* Coût */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Transparence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quel est le coût pour demander des offres ?</h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Coins className="w-6 h-6 text-[#F97316]" />, title: 'Gratuit', text: "Pour les propriétaires, demander des offres est entièrement gratuit — aucun frais caché." },
              { icon: <FileText className="w-6 h-6 text-[#F97316]" />, title: 'Sans abonnement', text: "Aucun abonnement ni obligation de passer commande." },
              { icon: <Clock className="w-6 h-6 text-[#F97316]" />, title: 'Nous nous finançons autrement', text: "Nous percevons une commission de l'installateur mandaté — pas de vous." },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Obtenez gratuitement jusqu'à 3 offres maintenant</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">Remplissez notre formulaire en 2 minutes — et recevez jusqu'à 3 offres d'<Link href="/fr/demande" className="text-[#F97316] hover:underline font-medium">installateurs certifiés</Link> dans votre région. Gratuitement, sans engagement, sans appels publicitaires.</p>
          <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Questions fréquemment posées</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                  {faq.question}
                  <span className="ml-4 text-[#F97316] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
      <FaqSchema faqs={faqs} />
    </main>
  );
}
