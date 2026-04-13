import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowRight, Wrench, Clock, Sun } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: "Faire installer des panneaux solaires en Suisse 2026 – Fournisseurs & Coûts | PVPro.ch",
  description: "Faire installer une installation solaire en Suisse : trouvez des installateurs certifiés dans votre région. Comparez des offres gratuites et économisez jusqu'à 30% avec PVPro.ch.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/installer-panneau-solaire-suisse',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/installer-panneau-solaire-suisse',
      'en': 'https://www.pvpro.ch/en/solar-panel-installation-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/installare-impianto-solare-svizzera',
      'x-default': 'https://www.pvpro.ch/solaranlage-installieren-schweiz',
    },
  },
  openGraph: {
    title: "Faire installer des panneaux solaires en Suisse 2026 – Fournisseurs & Coûts",
    description: "Installer une installation solaire en Suisse : installateurs certifiés, coûts et offres gratuites.",
    url: 'https://www.pvpro.ch/fr/installer-panneau-solaire-suisse',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Combien de temps dure l'installation d'une installation solaire pour une maison individuelle ?",
    answer: "Le montage proprement dit dure en général 1 à 3 jours pour une maison individuelle. Le délai total à partir de la commande est de 4 à 12 semaines.",
  },
  {
    question: "Dois-je être présent lors de l'installation ?",
    answer: "Pas obligatoirement. Il est cependant conseillé d'être présent le premier jour et lors de la mise en service, pour comprendre le fonctionnement et poser des questions.",
  },
  {
    question: "Qui s'occupe de l'annonce auprès de la commune ?",
    answer: "En règle générale, l'installateur se charge du dépôt ou de la demande de permis auprès de la commune, ainsi que de la demande de rétribution unique auprès de Pronovo.",
  },
  {
    question: "Puis-je installer une installation solaire moi-même ?",
    answer: "En Suisse, l'installation électrique doit obligatoirement être réalisée par un électricien certifié. Le montage des modules peut techniquement être effectué par vous-même, mais n'est pas recommandé pour des raisons de sécurité.",
  },
  {
    question: "Que se passe-t-il après l'installation ?",
    answer: "Après la mise en service, l'installation est annoncée auprès du gestionnaire de réseau local. L'installateur vérifie que tout fonctionne correctement et vous explique le fonctionnement.",
  },
  {
    question: "Comment trouver le meilleur installateur dans ma région ?",
    answer: "PVPro.ch vous met gratuitement en contact avec jusqu'à 3 installateurs certifiés de votre région — pour que vous puissiez comparer directement les prix et les prestations.",
  },
];

const steps = [
  {
    n: '1',
    title: 'Conseil et offre',
    text: "Un installateur certifié visite votre toit, évalue l'orientation, l'inclinaison et la surface et établit une offre personnalisée.",
  },
  {
    n: '2',
    title: 'Planification et autorisation',
    text: "L'installateur se charge du dépôt auprès de la commune ou — pour les installations soumises à autorisation — de la demande de permis de construire.",
  },
  {
    n: '3',
    title: 'Approvisionnement en matériel',
    text: 'Les modules, l\'onduleur, le système de montage et un éventuel stockage par batterie sont commandés et livrés.',
  },
  {
    n: '4',
    title: 'Montage',
    text: "L'installation proprement dite dure en général 1 à 3 jours pour une maison individuelle. L'équipe fixe les modules, pose les câbles et installe l'onduleur.",
  },
  {
    n: '5',
    title: 'Mise en service et annonce',
    text: "Après l'installation, le système est mis en service et annoncé auprès du gestionnaire de réseau local. L'installateur se charge généralement aussi de la demande de rétribution unique (RU) auprès de Pronovo.",
  },
];

const durationRows = [
  { size: '5–8 kWc (petite maison ind.)', duration: '1–2 jours' },
  { size: '8–12 kWc (maison ind. standard)', duration: '2–3 jours' },
  { size: '12–30 kWc (immeuble locatif)', duration: '3–5 jours' },
  { size: '30+ kWc (commercial)', duration: '1–2 semaines' },
];

const costRows = [
  { size: '5 kWc', cost: "13'000 – 18'000 CHF" },
  { size: '8 kWc', cost: "18'000 – 25'000 CHF" },
  { size: '10 kWc', cost: "22'000 – 30'000 CHF" },
];

const criteria = [
  { title: 'Certification', text: "L'entreprise est-elle reconnue et dispose-t-elle d'une expérience prouvée ?" },
  { title: 'Localité', text: "Un installateur local connaît les prescriptions et les subventions cantonales" },
  { title: 'Références', text: "A-t-il réalisé des projets comparables dans votre région ?" },
  { title: 'Garanties', text: "Quelles garanties offre-t-il sur le montage, les modules et l'onduleur ?" },
  { title: 'Rapport qualité-prix', text: "C'est uniquement en comparant plusieurs offres que vous voyez si un prix est équitable" },
];

export default function InstallerPanneauSolaireSuissePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Installer des panneaux solaires</span>
          </nav>
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Wrench className="w-3.5 h-3.5" /> Installation &amp; Prestataires
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Faire installer des panneaux solaires en Suisse
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Une installation solaire est un investissement à long terme. Qui la fait installer doit choisir le bon prestataire — car la qualité, le prix et le service varient fortement. PVPro.ch vous met gratuitement en contact avec des installateurs suisses certifiés de votre région.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: '1–3 jours', sub: "jusqu'à la première offre", note: 'mise en relation rapide et simple' },
              { val: '500+', sub: 'installateurs certifiés', note: 'entreprises certifiées dans toute la Suisse' },
              { val: '25–30 ans', sub: "durée de vie d'une installation", note: 'rendement à long terme pour votre maison' },
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

        {/* ── Que se passe-t-il lors de l'installation ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Étape par étape</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Que se passe-t-il lors de l&apos;installation d&apos;une installation solaire ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              L&apos;installation d&apos;une installation photovoltaïque en Suisse se déroule en général selon les étapes suivantes :
            </p>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg z-10"
                    style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    {step.n}
                  </div>
                  <div className="rounded-2xl p-6 flex-1" style={{ background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', border: '1px solid #e2e8f0' }}>
                    <h3 className="font-bold text-gray-900 mb-2">Étape {step.n} — {step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.n === '2' ? (
                        <>
                          L&apos;installateur se charge du dépôt auprès de la commune ou — pour les installations soumises à autorisation — de la demande de permis de construire. Dans la plupart des cas, une installation solaire sur le toit est{' '}
                          <Link href="/bewilligungspflicht-solaranlage-schweiz" className="text-[#F97316] hover:underline font-medium">dispensée d&apos;autorisation</Link>.
                        </>
                      ) : step.n === '5' ? (
                        <>
                          Après l&apos;installation, le système est mis en service et annoncé auprès du gestionnaire de réseau local. L&apos;installateur se charge généralement aussi de la demande de{' '}
                          <Link href="/fr/subventions-solaires" className="text-[#F97316] hover:underline font-medium">rétribution unique (RU)</Link> auprès de Pronovo.
                        </>
                      ) : step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Durée de l'installation ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Planification</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Combien de temps dure l&apos;installation ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              La durée dépend de la taille de l&apos;installation. Le délai de préparation — de l&apos;offre au montage — est actuellement en Suisse de 4 à 12 semaines, selon la disponibilité de l&apos;installateur et des composants.
            </p>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                    <th className="text-left px-5 py-3 text-white/60 font-semibold">Taille de l&apos;installation</th>
                    <th className="px-5 py-3 text-white font-bold text-center">Durée d&apos;installation</th>
                  </tr>
                </thead>
                <tbody>
                  {durationRows.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3 text-gray-700 font-medium">{row.size}</td>
                      <td className="px-5 py-3 text-center">
                        <span className="inline-flex items-center gap-1.5 text-[#F97316] font-semibold">
                          <Clock className="w-3.5 h-3.5" /> {row.duration}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <img src="/images/asset-installateur-dach-2.png" alt="Installation solaire Suisse" className="w-full h-72 object-cover rounded-3xl object-top" />
          </div>
        </section>

        {/* ── Coût de l'installation ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Coûts</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Combien coûte l&apos;installation d&apos;une installation solaire ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Les coûts d&apos;installation sont inclus dans le prix total d&apos;une installation solaire. Valeurs indicatives typiques pour une{' '}
              <Link href="/fr/solaire-maison-individuelle" className="text-[#F97316] hover:underline font-medium">maison individuelle</Link> :
            </p>
          </div>
          <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl border border-gray-200 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
                  <th className="text-left px-6 py-4 text-white/60 font-semibold">Taille de l&apos;installation</th>
                  <th className="px-6 py-4 text-white font-bold text-center">Coût total installation incluse</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-gray-700 font-medium">{row.size}</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-orange-800 text-sm leading-relaxed">
              Après déduction de la subvention fédérale (<Link href="/fr/subventions-solaires" className="text-[#F97316] hover:underline font-medium">rétribution unique RU</Link>), les{' '}
              <Link href="/fr/cout-installation-solaire" className="text-[#F97316] hover:underline font-medium">coûts</Link>{' '}
              se réduisent de 300–400 CHF par kWc. En{' '}
              <Link href="/fr/comparateur-photovoltaique-suisse" className="text-[#F97316] hover:underline font-medium">comparant plusieurs offres</Link>{' '}
              vous pouvez économiser en plus plusieurs milliers de francs.
            </p>
          </div>
        </section>

        {/* ── À quoi faire attention ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Liste de contrôle</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              À quoi faire attention lors du choix de l&apos;installateur ?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tous les installateurs n&apos;offrent pas la même qualité. Ces points méritent votre attention :
            </p>
            <ul className="space-y-4 mb-6">
              {criteria.map(c => (
                <li key={c.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{c.title}</strong> — {c.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>PVPro.ch vérifie tous ces critères à l&apos;avance</strong> — vous ne recevez que des offres d&apos;entreprises qui respectent nos standards.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/asset-beratung-indoor-2.png" alt="Choisir installateur Suisse" className="w-full h-72 object-cover rounded-3xl" />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Conseil</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Demandez toujours au moins 3 projets de référence dans votre région et faites confirmer par écrit les conditions de garantie — avant de signer.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Sun className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Trouvez maintenant un installateur dans votre région
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Remplissez notre formulaire en 2 minutes et recevez jusqu&apos;à 3 offres d&apos;{' '}
            <Link href="/fr/demande" className="text-[#F97316] hover:underline font-medium">installateurs certifiés</Link>{' '}
            de votre région — gratuitement et sans engagement.
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
              <Link href="/fr/subventions-solaires" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Subventions &amp; RUP
              </Link>
              <Link href="/fr/comparateur-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Comparer les prestataires
              </Link>
              <Link href="/fr/demander-offre-panneau-solaire" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Offres gratuites à comparer
              </Link>
              <Link href="/fr/installation-photovoltaique-suisse" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors">
                Comment se déroule l&apos;installation ?
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
