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
    answer: "Vous recevez jusqu'à 3 offres personnalisées d'installateurs certifiés de votre région. Vous disposez ainsi d'une base de comparaison immédiate.",
  },
  {
    question: "Combien de temps faut-il pour recevoir les offres ?",
    answer: "Dans la plupart des cas, vous recevez les premières offres dans les 24 à 48 heures suivant votre demande.",
  },
  {
    question: "Suis-je obligé de quelque chose après la demande ?",
    answer: "Non. La demande est entièrement gratuite et sans engagement. Vous décidez librement si vous acceptez une offre et laquelle.",
  },
  {
    question: "Vais-je recevoir des appels publicitaires après ma demande ?",
    answer: "Non. PVPro.ch garantit que vous ne recevrez pas d'appels publicitaires indésirables. Seuls les installateurs qui vous envoient une offre prendront contact avec vous.",
  },
  {
    question: "Puis-je aussi demander des offres pour un immeuble locatif ?",
    answer: "Oui. PVPro.ch transmet des offres pour tous les types de bâtiments — maisons individuelles, immeubles locatifs et bâtiments commerciaux.",
  },
  {
    question: "Que se passe-t-il si aucune offre ne me convient ?",
    answer: "Vous n'êtes à rien obligé. Vous pouvez refuser toutes les offres sans supporter aucun frais.",
  },
];

const offerteInhalt = [
  "Taille de l'installation en kWc et nombre de modules",
  "Type de module et fabricant avec données techniques",
  "Onduleur — marque et puissance",
  "Système de montage — adapté à votre type de toit",
  "Coûts d'installation indiqués séparément",
  "Production annuelle estimée en kWh",
  "Subvention (RU) déjà déduite ou indiquée séparément",
  "Garanties sur modules, onduleur et montage",
  "Durée d'amortissement à titre indicatif",
];

const steps = [
  {
    n: '1',
    title: 'Remplir le formulaire (2 minutes)',
    text: "Vous décrivez votre situation : surface du toit, consommation électrique, canton, options souhaitées comme le stockage par batterie ou la pompe à chaleur.",
  },
  {
    n: '2',
    title: 'Recevoir les offres (24–48 heures)',
    text: "Jusqu'à 3 installateurs certifiés de votre région vous envoient des offres personnalisées directement.",
  },
  {
    n: '3',
    title: 'Comparer et décider',
    text: "Vous comparez les prix, les composants et les références — et choisissez librement. Sans engagement, sans pression.",
  },
];

const buildingTypes = [
  {
    title: 'Maison individuelle',
    desc: "la demande la plus fréquente, typiquement 8–12 kWc",
    href: '/fr/solaire-maison-individuelle',
  },
  {
    title: 'Immeuble locatif',
    desc: "installations plus grandes avec modèle CEP",
    href: '/fr/solaire-immeuble',
  },
  {
    title: "Bâtiment commercial",
    desc: "aussi pour les entreprises et l'agriculture",
    href: '/fr/demande',
  },
];

export default function DemanderOffrePanneauSolairePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Demander une offre</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <FileText className="w-3.5 h-3.5" /> Offres &amp; Prix
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Demander des offres pour des installations photovoltaïques en Suisse
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Celui qui veut acheter une installation solaire ne devrait jamais signer la première offre. En Suisse, les{' '}
              <Link href="/fr/cout-installation-solaire" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">coûts</Link>{' '}
              pour la même installation peuvent varier de plusieurs milliers de francs selon l&apos;installateur. PVPro.ch vous permet d&apos;obtenir gratuitement jusqu&apos;à 3 offres d&apos;installateurs locaux certifiés — en moins de 2 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'Gratuit', sub: 'sans risque, sans cache', note: 'entièrement gratuit pour les propriétaires' },
              { val: '24–48 heures', sub: "jusqu'à la première offre", note: 'réponse rapide des installateurs locaux' },
              { val: "Jusqu'à 4'000 CHF", sub: 'économie possible par comparaison', note: 'selon la taille de l\'installation' },
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

        {/* ── Pourquoi plusieurs offres ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">L&apos;avantage décisif</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Pourquoi demander plusieurs offres ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              De nombreux propriétaires en Suisse font la même erreur : ils ne consultent qu&apos;un seul installateur et acceptent la première offre. Ce que la plupart ignorent, c&apos;est que pour exactement la même installation — mêmes modules, même onduleur, même puissance — les prix entre différents installateurs peuvent varier jusqu&apos;à 4&apos;000 francs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La raison est simple : les installateurs calculent différemment, ont des conditions d&apos;achat et des marges variables. Qui compare, gagne.
            </p>
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
                  <span className="text-white/60 text-sm">Économie par comparaison</span>
                  <span className="text-green-400 font-bold">jusqu&apos;à 3&apos;900 CHF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Comment demander ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">En 3 étapes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Comment est-il simple de demander des offres ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Autrefois, demander des offres signifiait : chercher soi-même, appeler, prendre des rendez-vous, attendre. Avec PVPro.ch, c&apos;est fait en 3 étapes :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(step => (
              <div key={step.n} className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                  {step.n}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-3">Étape {step.n} — {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.n === '1' ? (
                    <>
                      Vous décrivez votre situation : surface du toit, consommation électrique, canton, options souhaitées comme le{' '}
                      <Link href="/fr/solaire-avec-batterie" className="text-[#F97316] hover:underline font-medium">stockage par batterie</Link>{' '}
                      ou la pompe à chaleur.
                    </>
                  ) : step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Que contient une bonne offre ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img loading="lazy" src="/images/asset-beratung-indoor-2.webp" alt="Offre panneau solaire Suisse" className="w-full h-72 object-cover rounded-3xl" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Liste de contrôle</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Que contient une bonne offre ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Une offre sérieuse pour une installation solaire contient toujours les points suivants :
            </p>
            <ul className="space-y-3 mb-6">
              {offerteInhalt.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {item.includes('RU') ? (
                      <>
                        {'Subvention ('}
                        <Link href="/fr/subventions-solaires" className="text-[#F97316] hover:underline font-medium">RU</Link>
                        {') déjà déduite ou indiquée séparément'}
                      </>
                    ) : item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <p className="text-orange-800 text-sm leading-relaxed">
                <strong>Conseil :</strong> Si une offre ne contient pas ces points, posez des questions — ou demandez une offre via PVPro.ch auprès d&apos;un de nos partenaires certifiés.
              </p>
            </div>
          </div>
        </section>

        {/* ── Combien ça coûte ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Transparence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Combien coûte la demande d&apos;offres ?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Coins className="w-6 h-6 text-[#F97316]" />, title: 'Gratuit', text: 'Pour les propriétaires, la demande d\'offres est entièrement gratuite — aucun frais caché.' },
              { icon: <FileText className="w-6 h-6 text-[#F97316]" />, title: 'Pas d\'abonnement', text: 'Aucun abonnement et aucune obligation de passer commande.' },
              { icon: <Clock className="w-6 h-6 text-[#F97316]" />, title: 'Nous nous finançons autrement', text: 'Nous recevons une commission de l\'installateur mandaté — pas de vous.' },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                <div className="flex justify-center mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Types de bâtiments ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Tous les types de bâtiments</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Pour quels types de bâtiments puis-je demander des offres ?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
              Via PVPro.ch vous pouvez demander des offres pour tous les types de bâtiments :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {buildingTypes.map(b => (
              <Link key={b.title} href={b.href} className="group rounded-2xl p-8 text-center border border-gray-200 hover:border-orange-300 bg-white hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#F97316] transition-colors">{b.title}</h3>
                <p className="text-gray-500 text-sm">{b.desc}</p>
                <p className="text-[#F97316] text-sm font-medium mt-3">Demander une offre →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <FileText className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Demander maintenant gratuitement jusqu&apos;à 3 offres
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Remplissez le formulaire en 2 minutes — et recevez jusqu&apos;à 3 offres d&apos;{' '}
            <Link href="/fr/demande" className="text-[#F97316] hover:underline font-medium">installateurs certifiés</Link>{' '}
            de votre région. Gratuit, sans engagement, sans appels publicitaires.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Demander une offre gratuite <ArrowRight className="w-4 h-4" />
          </Link>
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
              <Link href="/fr/cout-installation-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Coût installation solaire
              </Link>
              <Link href="/fr/comparateur-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Comparer les prestataires
              </Link>
              <Link href="/fr/installer-panneau-solaire-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Installation Suisse
              </Link>
              <Link href="/fr/subventions-solaires-canton-zurich" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Subvention Canton Zurich
              </Link>
              <Link href="/fr/photovoltaique-climat-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Solaire et climat suisse
              </Link>
              <Link href="/fr/installation-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Que se passe-t-il après l&apos;offre ?
              </Link>
              <Link href="/fr/solution-complete-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Offre pour solution complète
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
