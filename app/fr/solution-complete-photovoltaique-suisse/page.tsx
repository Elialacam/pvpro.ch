import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, Zap, Battery, Thermometer, Car, Settings } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Solution complète photovoltaïque Suisse 2026 – Tout en un | PVPro.ch",
  description: "Quelles entreprises suisses proposent des solutions complètes pour les installations photovoltaïques ? Modules, stockage, pompe à chaleur et installation en un seul prestataire. Comparez avec PVPro.ch.",
  alternates: {
    canonical: 'https://pvpro.ch/fr/solution-complete-photovoltaique-suisse',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-komplettloesung-schweiz',
      'fr-CH': 'https://pvpro.ch/fr/solution-complete-photovoltaique-suisse',
      'en': 'https://pvpro.ch/en/complete-solar-solution-switzerland',
      'it-CH': 'https://pvpro.ch/it/soluzione-completa-fotovoltaico-svizzera',
      'x-default': 'https://pvpro.ch/photovoltaik-komplettloesung-schweiz',
    },
  },
  openGraph: {
    title: "Solution complète photovoltaïque Suisse 2026 – Tout en un",
    description: "Modules, stockage, pompe à chaleur et installation en un seul prestataire — solutions complètes pour le photovoltaïque en Suisse.",
    url: 'https://pvpro.ch/fr/solution-complete-photovoltaique-suisse',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Une solution complète avec pompe à chaleur et installation solaire est-elle rentable ?",
    answer: "Oui, dans la plupart des cas. Celui qui fait fonctionner sa pompe à chaleur avec l'électricité solaire autoproduite réduit considérablement les coûts de chauffage et maximise l'autoconsommation. La durée d'amortissement se raccourcit nettement.",
  },
  {
    question: "Puis-je construire une solution complète par étapes ?",
    answer: "Oui. De nombreux propriétaires commencent avec l'installation solaire et ajoutent ensuite le stockage par batterie, la borne de recharge ou la pompe à chaleur. L'important est que l'installation soit dimensionnée en conséquence dès le départ.",
  },
  {
    question: "Quelles subventions existent pour les solutions complètes ?",
    answer: "Il existe des subventions séparées pour chaque composant — la rétribution unique (RU) pour l'installation solaire, des contributions cantonales pour la pompe à chaleur et d'autres programmes selon le canton. Un installateur expérimenté connaît toutes les possibilités de financement pertinentes.",
  },
  {
    question: "Comment trouver un prestataire de solutions complètes dans ma région ?",
    answer: "PVPro.ch met gratuitement en relation avec des installateurs certifiés proposant des solutions complètes. Il suffit de remplir le formulaire et de recevoir jusqu'à 3 offres.",
  },
  {
    question: "Puis-je étendre mon installation solaire existante avec un stockage ou une borne de recharge ?",
    answer: "Oui, dans la plupart des cas une extension est possible. Un installateur certifié vérifie la compatibilité et établit une offre pour l'extension.",
  },
];

const composants = [
  {
    icon: <Sun className="w-6 h-6 text-[#F97316]" />,
    title: 'Installation photovoltaïque',
    text: "La base de toute solution complète. Produit de l'électricité à partir de l'énergie solaire pour l'autoconsommation et l'injection dans le réseau.",
  },
  {
    icon: <Battery className="w-6 h-6 text-[#F97316]" />,
    title: 'Stockage par batterie',
    text: "Stocke l'excédent d'électricité solaire pour une utilisation le soir et la nuit. Augmente l'autoconsommation d'environ 30% à près de 70%.",
  },
  {
    icon: <Thermometer className="w-6 h-6 text-[#F97316]" />,
    title: 'Pompe à chaleur',
    text: "Utilise l'électricité solaire autoproduite pour le chauffage et l'eau chaude. L'un des moyens les plus efficaces de maximiser l'autoconsommation.",
  },
  {
    icon: <Car className="w-6 h-6 text-[#F97316]" />,
    title: 'Borne de recharge pour véhicule électrique (Wallbox)',
    text: "Charge le véhicule électrique directement avec l'énergie solaire — particulièrement économique et durable.",
  },
  {
    icon: <Settings className="w-6 h-6 text-[#F97316]" />,
    title: 'Système de gestion de l\'énergie',
    text: "Contrôle automatiquement quand quelle énergie va où — pour une efficacité maximale sans effort manuel.",
  },
];

const couts = [
  { composant: "Installation photovoltaïque 10 kWc", cout: "22'000 – 30'000 CHF" },
  { composant: "Stockage par batterie 10 kWh", cout: "7'000 – 10'000 CHF" },
  { composant: "Pompe à chaleur", cout: "15'000 – 25'000 CHF" },
  { composant: "Borne de recharge (Wallbox)", cout: "1'500 – 3'000 CHF" },
  { composant: "Système de gestion de l'énergie", cout: "1'000 – 3'000 CHF" },
  { composant: "Forfait total", cout: "env. 40'000 – 70'000 CHF", highlight: true },
];

const avantages = [
  "Coordination optimale — tous les composants sont accordés entre eux et communiquent",
  "Un seul interlocuteur — en cas de questions ou de problèmes, il n'y a qu'un seul point de contact",
  "Meilleurs prix — les prix de forfait sont souvent moins chers que les achats individuels",
  "Demande de subventions simplifiée — un installateur s'occupe de toutes les demandes",
  "Garanties en un seul endroit — pas de discussion entre différents prestataires",
];

const criteres = [
  "Le prestataire a-t-il de l'expérience avec tous les composants — pas seulement les modules ?",
  "Propose-t-il un système de gestion de l'énergie intégré ?",
  "Peut-il installer lui-même la pompe à chaleur et la borne de recharge, ou seulement les transmettre ?",
  "Existe-t-il des projets de référence avec des solutions complètes comparables ?",
  "Toutes les demandes de subventions sont-elles incluses dans le service ?",
];

export default function SolutionCompletePhotovoltaiqueSuissePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fr/installer-panneau-solaire-suisse" className="hover:text-white/70 transition-colors">Solaire</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solution complète</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Zap className="w-3.5 h-3.5" /> Solutions complètes &amp; Prestataires
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Solution complète photovoltaïque en Suisse — tout en un
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              De plus en plus de propriétaires suisses veulent non seulement une installation solaire, mais une solution énergétique complète : photovoltaïque, stockage par batterie, pompe à chaleur et borne de recharge pour voiture électrique, le tout coordonné par un seul prestataire. Cette page explique ce qu&apos;une solution complète comprend, ce qu&apos;elle coûte et comment trouver le bon prestataire.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "Jusqu'à 80%", sub: "Autoconsommation avec solution complète", note: "grâce à la gestion optimisée de l'énergie" },
              { val: '1 prestataire', sub: "responsable de tout", note: "de la planification à la mise en service" },
              { val: '500+', sub: "partenaires certifiés en Suisse", note: "installateurs certifiés sur PVPro.ch" },
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

        {/* ── Composants ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Vue d&apos;ensemble</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Qu&apos;est-ce qu&apos;une solution photovoltaïque complète ?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Une solution complète combine plusieurs technologies énergétiques en un système intégré. PVPro.ch met en relation avec des prestataires qui livrent et installent tous ces composants en un seul endroit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {composants.map((c, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  {c.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Coûts ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Aperçu des prix</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Combien coûte une solution complète en Suisse ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les coûts dépendent des composants inclus. Après déduction de toutes les subventions — rétribution unique, subventions cantonales pour la pompe à chaleur — les coûts se réduisent considérablement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              L&apos;autoconsommation peut atteindre jusqu&apos;à 80%, ce qui raccourcit nettement la durée d&apos;amortissement. Obtenez maintenant des{' '}
              <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">offres gratuites</Link>.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Composant</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Coût (indicatif)</th>
                  </tr>
                </thead>
                <tbody>
                  {couts.map((row, i) => (
                    <tr key={row.composant} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.composant}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.cout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Avant subventions. Obtenir une offre individuelle auprès d&apos;un installateur certifié.
            </p>
          </div>
        </section>

        {/* ── Avantages & Critères ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Avantages</p>
            <h2 className="text-xl font-bold text-white mb-5">
              Avantages d&apos;une solution complète par rapport aux composants individuels
            </h2>
            <ul className="space-y-3">
              {avantages.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Liste de contrôle</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">
              À quoi faire attention lors du choix d&apos;un prestataire de solution complète ?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Tous les installateurs ne proposent pas de vraies solutions complètes. Vérifiez ces points :
            </p>
            <ul className="space-y-3">
              {criteres.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Demander maintenant une solution complète
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Remplissez notre formulaire et recevez jusqu&apos;à 3 offres d&apos;installateurs certifiés proposant des solutions complètes en un seul endroit — gratuitement et sans engagement.
          </p>
          <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-500 text-sm mt-5">
            <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">Comparer les offres</Link>
            {' '}ou{' '}
            <Link href="/fr/comparateur-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">comparer les prestataires</Link> ?
          </p>
        </section>

        {/* ── FAQ ── */}
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
