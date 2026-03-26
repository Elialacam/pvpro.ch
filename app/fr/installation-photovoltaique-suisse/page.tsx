import Link from 'next/link';
import { ChevronRight, ArrowRight, Sun, CheckCircle, FileText, Clock } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Installation photovoltaïque Suisse 2026 – Étapes, durée & coûts | PVPro.ch",
  description: "Comment fonctionne l'installation d'une installation photovoltaïque en Suisse ? Étapes, durée, coûts et ce à quoi vous devez faire attention — tout expliqué par PVPro.ch.",
  alternates: {
    canonical: 'https://pvpro.ch/fr/installation-photovoltaique-suisse',
    languages: {
      'de-CH': 'https://pvpro.ch/photovoltaik-installation-schweiz',
      'fr-CH': 'https://pvpro.ch/fr/installation-photovoltaique-suisse',
      'en': 'https://pvpro.ch/en/solar-panel-installation-process-switzerland',
      'it-CH': 'https://pvpro.ch/it/processo-installazione-fotovoltaico-svizzera',
      'x-default': 'https://pvpro.ch/photovoltaik-installation-schweiz',
    },
  },
  openGraph: {
    title: "Installation photovoltaïque Suisse 2026 – Étapes, durée & coûts",
    description: "Étapes, durée et coûts de l'installation photovoltaïque en Suisse — expliqués pas à pas.",
    url: 'https://pvpro.ch/fr/installation-photovoltaique-suisse',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Combien de temps dure le montage d'une installation solaire sur une maison individuelle ?",
    answer: "Le montage proprement dit d'une maison individuelle de 8 à 12 kWc dure généralement 1 à 3 jours. La durée totale du projet à partir de la commande est de 4 à 12 semaines.",
  },
  {
    question: "Dois-je être présent pendant l'installation ?",
    answer: "Pas nécessairement pour toute la durée. Il est cependant recommandé d'être présent le premier jour et lors de la mise en service.",
  },
  {
    question: "Qui s'occupe de l'autorisation ?",
    answer: "En général, l'installateur se charge de la déclaration auprès de la commune ou — pour les installations soumises à autorisation — de la demande de permis de construire.",
  },
  {
    question: "Quand l'installation commence-t-elle à produire de l'électricité ?",
    answer: "Dès la mise en service — c'est-à-dire le dernier jour du montage. Dès le premier jour, l'installation produit de l'électricité si le soleil brille.",
  },
  {
    question: "Que se passe-t-il après l'installation ?",
    answer: "L'installateur enregistre l'installation auprès du gestionnaire de réseau et dépose la demande de rétribution unique auprès de Pronovo. Vous recevez une formation et pouvez suivre la production via une application ou un système de monitoring.",
  },
  {
    question: "Puis-je suivre l'avancement de l'installation ?",
    answer: "La plupart des onduleurs modernes disposent d'un monitoring intégré que vous pouvez suivre via une application. L'installateur le configure lors de la mise en service.",
  },
];

const phases = [
  {
    n: '1',
    title: 'Planification et offre',
    duration: '1–2 semaines',
    text: "Tout commence par une analyse des besoins. Un installateur certifié visite votre bâtiment, analyse la surface du toit, l'orientation, l'inclinaison et les ombrages. Sur cette base, il établit une offre sur mesure avec la taille de l'installation, les composants et les coûts.",
  },
  {
    n: '2',
    title: 'Autorisation et déclaration',
    duration: '1–4 semaines',
    text: "Dans la plupart des cas, une installation solaire sur le toit est exempte d'autorisation — une simple déclaration à la commune suffit. Dans des cas exceptionnels (monuments historiques, installations non intégrées), un permis de construire est nécessaire. L'installateur s'occupe de cette étape pour vous.",
  },
  {
    n: '3',
    title: 'Approvisionnement en matériaux',
    duration: '2–6 semaines',
    text: "Après la passation de la commande, les modules, l'onduleur, le système de montage et éventuellement un système de stockage par batterie sont commandés. Les délais de livraison varient selon le fabricant et la saison.",
  },
  {
    n: '4',
    title: 'Montage',
    duration: '1–3 jours',
    text: "L'équipe de montage installe la sous-construction sur le toit, fixe les modules, pose les câbles DC et installe l'onduleur dans le bâtiment. Pour les installations plus grandes, le montage dure plus longtemps.",
  },
  {
    n: '5',
    title: 'Raccordement électrique et mise en service',
    duration: '1 jour',
    text: "Un électricien certifié raccorde l'installation au réseau domestique et la met en service. L'installation est configurée et testée.",
  },
  {
    n: '6',
    title: 'Enregistrement et subvention',
    duration: '2–4 semaines',
    text: "L'installateur enregistre l'installation auprès du gestionnaire de réseau local et dépose la demande de rétribution unique (RU) auprès de Pronovo. Le paiement intervient quelques mois plus tard.",
  },
];

const durations = [
  { phase: 'Planification et offre', duration: '1–2 sem.' },
  { phase: 'Autorisation / déclaration', duration: '1–4 sem.' },
  { phase: 'Approvisionnement', duration: '2–6 sem.' },
  { phase: 'Montage', duration: '1–3 jours' },
  { phase: 'Raccordement et mise en service', duration: '1 jour' },
  { phase: 'Enregistrement RU', duration: '2–4 sem.' },
  { phase: 'Durée totale à partir de la commande', duration: '4–12 sem.', highlight: true },
];

export default function InstallationPhotovoltaiqueSuissePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fr/installer-panneau-solaire-suisse" className="hover:text-white/70 transition-colors">Installation</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Processus d&apos;installation</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Sun className="w-3.5 h-3.5" /> Installation &amp; Processus
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Comment fonctionne l&apos;installation d&apos;une installation photovoltaïque en Suisse ?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              De la première demande jusqu&apos;à la première électricité autoproduite — l&apos;installation d&apos;une installation photovoltaïque en Suisse se déroule en étapes clairement définies. Qui sait ce qui l&apos;attend peut mieux planifier et prendre les bonnes décisions. Cette page explique l&apos;ensemble du processus étape par étape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 jours', sub: 'Durée de montage maison individuelle', note: 'pour une maison individuelle typique' },
              { val: '4–12 semaines', sub: "Délai à partir de la commande", note: 'incl. planification et approvisionnement' },
              { val: 'Clé en main', sub: "L'installateur s'occupe de tout", note: 'de la planification à la demande RU' },
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

        {/* ── Processus ── */}
        <section>
          <div className="mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Étape par étape</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Le processus complet d&apos;une installation photovoltaïque
            </h2>
          </div>
          <div className="space-y-4">
            {phases.map(phase => (
              <div key={phase.n} className="rounded-2xl p-7" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {phase.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-base">Phase {phase.n} — {phase.title}</h3>
                      <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" /> {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{phase.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Durée ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calendrier</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Combien de temps dure l&apos;ensemble du processus ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Le principal facteur de temps est souvent le niveau d&apos;activité de l&apos;installateur et le délai de livraison des composants — surtout en haute saison (printemps et été). Passer commande tôt est recommandé.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Prêt à démarrer ?{' '}
              <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">Comparez gratuitement des offres</Link>{' '}
              d&apos;installateurs certifiés dans votre région.
            </p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Phase</th>
                    <th className="text-right px-5 py-3.5 text-white/80 font-semibold text-xs uppercase tracking-wider">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  {durations.map((row, i) => (
                    <tr key={row.phase} className={row.highlight ? 'bg-orange-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className={`px-5 py-3.5 ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{row.phase}</td>
                      <td className={`px-5 py-3.5 text-right font-bold ${row.highlight ? 'text-[#F97316]' : 'text-gray-900'}`}>{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Installateur & Propriétaire ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Prestations de l&apos;installateur</p>
            <h2 className="text-xl font-bold text-white mb-5">Que fait un bon installateur ?</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Un installateur professionnel prend en charge l&apos;ensemble du processus pour vous. PVPro.ch ne met en relation qu&apos;avec des installateurs qui effectuent toutes ces étapes de manière fiable.
            </p>
            <ul className="space-y-3">
              {[
                'Analyse du toit et dimensionnement de l\'installation',
                'Déclaration ou demande de permis de construire auprès de la commune',
                'Approvisionnement de tous les composants',
                'Montage professionnel et raccordement électrique',
                'Mise en service et formation',
                'Enregistrement auprès du gestionnaire de réseau',
                'Demande de rétribution unique (RU) auprès de Pronovo',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Vos tâches</p>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Que dois-je faire en tant que propriétaire ?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              En réalité, très peu de choses. Vos tâches se limitent à :
            </p>
            <ul className="space-y-3">
              {[
                'Faire une demande et comparer les offres',
                "Mandater l'installateur",
                'Être présent lors du montage (recommandé, mais pas obligatoire)',
                "Recevoir la formation lors de la mise en service",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong className="text-orange-600">Bon à savoir :</strong> L&apos;installateur s&apos;occupe du reste — de l&apos;autorisation à la demande de RU.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trouvez maintenant un installateur et lancez-vous
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Remplissez notre formulaire en 2 minutes — nous vous mettons en relation avec jusqu&apos;à 3 installateurs certifiés dans votre région, qui prennent en charge l&apos;ensemble du processus.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/fr/demande"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
            >
              Demander une offre gratuite <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            D&apos;abord{' '}
            <Link href="/fr/demander-offre-panneau-solaire" className="text-[#F97316] hover:underline font-medium">comparer les offres</Link>{' '}
            ou les{' '}
            <Link href="/fr/comparateur-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">fournisseurs</Link> ?
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
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Plus d&apos;informations :</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/fr/installer-panneau-solaire-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Mandater un installateur
              </Link>
              <Link href="/fr/subventions-solaires" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Subventions RU
              </Link>
              <Link href="/fr/cout-installation-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Coûts installation
              </Link>
              <Link href="/fr/demande" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                Demander une offre <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <FaqSchema faqs={faqs} />
    </main>
  );
}
