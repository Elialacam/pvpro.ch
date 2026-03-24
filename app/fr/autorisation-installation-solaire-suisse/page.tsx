import Link from 'next/link';
import { ChevronRight, CheckCircle, AlertCircle, FileText, ArrowRight, Shield, Home, MapPin } from 'lucide-react';
import { Metadata } from 'next';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Autorisation installation solaire Suisse 2026 – Ce que vous devez savoir | PVPro.ch',
  description: "Faut-il un permis de construire pour une installation solaire en Suisse? Règles pour tous les cantons, quand une autorisation est nécessaire et comment PVPro vous aide.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/autorisation-installation-solaire-suisse',
    languages: {
      'de-CH': 'https://www.pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
      'fr-CH': 'https://www.pvpro.ch/fr/autorisation-installation-solaire-suisse',
      'en-CH': 'https://www.pvpro.ch/en/solar-panel-permit-switzerland',
      'it-CH': 'https://www.pvpro.ch/it/autorizzazione-impianto-solare-svizzera',
      'x-default': 'https://www.pvpro.ch/bewilligungspflicht-solaranlage-schweiz',
    },
  },
  openGraph: {
    title: 'Autorisation installation solaire Suisse 2026 – Ce que vous devez savoir',
    description: "Faut-il un permis de construire pour une installation solaire en Suisse? Toutes les règles cantonales, obligation d'annonce et exceptions.",
    url: 'https://www.pvpro.ch/fr/autorisation-installation-solaire-suisse',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: "Ai-je besoin d'une autorisation pour une installation solaire sur le toit?",
    answer: "Dans la plupart des cas, non. Les installations en toiture montées parallèlement au toit et ne dépassant pas le faîte sont en principe exemptées d'autorisation en Suisse et soumises uniquement à l'obligation d'annonce.",
  },
  {
    question: "Combien coûte une demande de permis de construire pour une installation solaire?",
    answer: "Les coûts varient selon la commune et le canton, mais se situent généralement entre 200 et 800 CHF. Pour les installations exemptées d'autorisation, aucun coût n'est engagé.",
  },
  {
    question: "Qui annonce l'installation solaire auprès de la commune?",
    answer: "En règle générale, l'installateur certifié prend en charge l'annonce. PVPro met uniquement en relation avec des entreprises certifiées qui maîtrisent parfaitement ce processus.",
  },
  {
    question: "L'exemption d'autorisation s'applique-t-elle aussi aux mini-centrales de balcon?",
    answer: "Les mini-centrales de balcon (appareils solaires à prise) sont également exemptées d'autorisation en Suisse, mais soumises à leurs propres règles en matière de puissance et d'injection réseau.",
  },
  {
    question: "Que se passe-t-il si j'installe l'installation solaire sans annonce?",
    answer: "Cela peut entraîner des problèmes lors de la demande de subvention et, dans le pire des cas, déclencher une obligation d'autorisation rétroactive. Il est conseillé de toujours respecter la procédure correcte — votre installateur s'en occupe.",
  },
];

const sansAutorisation = [
  "L'installation est intégrée au bâtiment ou montée parallèlement au toit",
  "Elle ne dépasse pas le faîte du toit",
  "Elle ne porte pas atteinte de manière significative au paysage urbain",
  "Le bâtiment n'est pas situé dans une zone protégée",
];

const avecAutorisation = [
  "Le bâtiment est classé monument historique",
  "Le bâtiment est situé dans une zone de protection du paysage ISOS",
  "L'installation est au sol (p.ex. dans le jardin)",
  "L'installation dépasse le faîte du toit",
  "Le canton a édicté des règles plus strictes",
];

const steps = [
  {
    n: '1',
    title: 'Contacter un installateur',
    text: 'Un installateur certifié examine votre situation et vérifie si une autorisation est requise. PVPro vous met en relation gratuitement.',
  },
  {
    n: '2',
    title: 'Annonce ou demande de permis',
    text: "Selon la situation, l'installateur dépose une annonce ou une demande de permis auprès de la commune. Il connaît parfaitement les règlements locaux.",
  },
  {
    n: '3',
    title: 'Installation',
    text: "Après validation, l'installation est montée. Pour les installations exemptées d'autorisation, cela se fait souvent en quelques semaines.",
  },
  {
    n: '4',
    title: 'Demander la subvention',
    text: "Après l'installation, la rétribution unique (RU) est annoncée auprès de Pronovo — souvent par l'installateur.",
  },
];

export default function AutorisationInstallationSolairePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Autorisation installation solaire</span>
          </nav>

          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              <Shield className="w-3.5 h-3.5" /> Droit &amp; Autorisation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Autorisation pour installations solaires en Suisse
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              En Suisse, les installations solaires ne nécessitent dans la plupart des cas pas de permis de construire — mais pas toujours. L&apos;obligation d&apos;autorisation dépend du canton, de l&apos;emplacement du bâtiment et du type d&apos;installation. Cette page explique les règles actuelles de manière claire et compréhensible.
            </p>
          </div>

          {/* Stat boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: 'En général', sub: 'sans autorisation', note: 'pour les installations standard en toiture' },
              { val: '26', sub: 'cantons', note: 'chacun avec ses propres règlements' },
              { val: 'Obligation', sub: "d'annonce", note: 'suffit dans la plupart des cas' },
            ].map(s => (
              <div key={s.val} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p className="text-2xl font-bold text-white mb-0.5">{s.val}</p>
                <p className="text-[#F97316] text-sm font-semibold">{s.sub}</p>
                <p className="text-gray-500 text-xs mt-1">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Sans autorisation ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Pas d&apos;autorisation requise</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Quand une installation solaire en Suisse ne nécessite-t-elle pas d&apos;autorisation?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Depuis la révision de la <strong>loi sur l&apos;aménagement du territoire (LAT)</strong>, en Suisse les installations solaires en toiture sont en principe exemptées d&apos;autorisation si elles remplissent les conditions suivantes:
            </p>
            <ul className="space-y-3 mb-6">
              {sansAutorisation.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>Conclusion:</strong> Si tous ces points sont remplis, vous n&apos;avez pas besoin de permis de construire — une simple <strong>annonce à la commune</strong> suffit.
              </p>
            </div>
          </div>

          {/* Visual side */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/asset-installateur-dach-3.png"
              alt="Technicien sur un toit avec panneaux solaires – autorisation Suisse"
              className="w-full h-72 object-cover rounded-3xl"
            />
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Le saviez-vous?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                En Suisse, plus de 50&apos;000 nouvelles installations solaires ont été posées en 2024 — la grande majorité sans autorisation. Avec une bonne planification et un installateur expérimenté, le chemin vers votre propre installation solaire est simple.
              </p>
            </div>
          </div>
        </section>

        {/* ── Avec autorisation ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Exceptions</p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quand une autorisation est-elle tout de même requise?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Dans certaines situations, une demande de permis est néanmoins requise — dans ces cas, vous devez déposer une demande <strong>avant l&apos;installation</strong>:
              </p>
              <ul className="space-y-3">
                {avecAutorisation.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-amber-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dans ces cas, une demande de permis de construire doit être déposée avant l&apos;installation. Votre installateur connaît les règles locales et vous aide dans cette démarche.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Différences cantonales</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Différences entre les cantons
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Bien que le droit fédéral constitue la base, les cantons disposent d&apos;une certaine marge de manœuvre. Certains cantons comme le <Link href="/fr/subventions-solaires-canton-zurich" className="text-[#F97316] hover:underline font-medium">canton de Zurich</Link> ont introduit une <strong>obligation solaire pour les nouvelles constructions</strong>. D&apos;autres cantons ont des procédures d&apos;annonce simplifiées.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { kanton: 'Zurich', regel: "Obligation solaire pour les nouveaux bâtiments dès 2025; installations en toiture sinon soumises à annonce", badge: 'Obligation' },
                  { kanton: 'Berne', regel: "Procédure d'annonce simplifiée pour les installations standard", badge: 'Annonce' },
                  { kanton: 'Genève', regel: "Obligation solaire lors de rénovations de grands bâtiments", badge: 'Obligation' },
                  { kanton: 'Tessin', regel: "Règles strictes dans les zones de protection du paysage urbain", badge: 'Paysage' },
                  { kanton: 'Tous les autres', regel: "LAT fédérale s'applique: exemption pour les installations standard", badge: 'Standard' },
                ].map(r => (
                  <div key={r.kanton} className="flex items-start justify-between bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{r.kanton}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{r.regel}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-500 flex-shrink-0 ml-2">{r.badge}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Important:</strong> Renseignez-vous toujours auprès de votre <strong>commune</strong>, car les règles peuvent varier davantage au niveau communal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Obligation d'annonce ── */}
        <section className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Procédure simplifiée</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Qu&apos;est-ce que l&apos;obligation d&apos;annonce?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;obligation d&apos;annonce n&apos;est <strong>pas une procédure d&apos;autorisation</strong> — elle est bien plus simple. Vous informez la commune avant l&apos;installation que vous souhaitez ériger une installation solaire. La commune dispose alors d&apos;un court délai pour réagir.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Si vous ne recevez <strong>aucune réponse</strong>, l&apos;installation est réputée approuvée. En pratique, c&apos;est dans la plupart des cas l&apos;installateur qui effectue l&apos;annonce pour vous.
              </p>
              <p className="text-gray-600 leading-relaxed">
                La procédure est simple et ne dure généralement que quelques jours à deux semaines. Contrairement à la demande de permis, elle n&apos;entraîne généralement <strong>aucun coût</strong>.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { step: '1', title: "Déposer l'annonce", text: "L'installateur dépose l'annonce auprès de la commune — souvent en ligne.", color: 'bg-[#F97316]' },
                { step: '2', title: "Délai d'attente (10–30 jours)", text: "La commune examine l'annonce. Pas de réponse = Approuvé.", color: 'bg-blue-500' },
                { step: '3', title: "Monter l'installation", text: "Après le délai ou approbation expresse, l'installation commence.", color: 'bg-green-500' },
                { step: '4', title: "Demander la RU", text: "La rétribution unique est enregistrée auprès de Pronovo — souvent par l'installateur.", color: 'bg-purple-500' },
              ].map(s => (
                <div key={s.step} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                  <div className={`w-8 h-8 rounded-full ${s.color} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section>
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Étapes à suivre</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Étape par étape: que devez-vous faire?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              De la première demande à la subvention — en quatre étapes vers votre propre installation solaire. Votre installateur vous accompagne tout au long du processus.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div
                  className="w-12 h-12 rounded-full text-white text-lg font-bold flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {s.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-5 flex items-start gap-4">
            <FileText className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800 text-sm mb-1">
                Tout sur la rétribution unique (RU)
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                La <Link href="/fr/subventions-solaires" className="text-[#F97316] hover:underline font-medium">rétribution unique (RU)</Link> de la Confédération couvre une part importante de vos coûts d&apos;investissement. Découvrez le montant auquel vous avez droit et comment demander la subvention.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mini-centrales de balcon ── */}
        <section className="bg-[#0f1f3d] rounded-3xl p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Cas particulier</p>
              <h2 className="text-2xl font-bold text-white mb-4">
                Mini-centrales de balcon: règles spéciales
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                <Link href="/fr/blog/balkonkraftwerk-schweiz" className="text-[#F97316] hover:underline font-medium">Les mini-centrales de balcon</Link> (appareils solaires à prise) sont également exemptées d&apos;autorisation en Suisse. Mais des règles spécifiques s&apos;appliquent:
              </p>
              <ul className="space-y-2">
                {[
                  "Puissance d'injection maximale: 600 watts dans le réseau domestique",
                  "Pas d'installation électrique professionnelle requise",
                  "Annonce auprès du gestionnaire de réseau recommandée",
                  "En propriété par étages: accord de la communauté des propriétaires requis",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-white/60 text-sm mb-4">En savoir plus sur les mini-centrales de balcon en Suisse</p>
              <Link
                href="/fr/blog/balkonkraftwerk-schweiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity border border-white/20"
              >
                Guide mini-centrales de balcon <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
            <Home className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Demandez votre offre maintenant — vérification d&apos;autorisation incluse
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Nos <Link href="/fr/demande" className="text-[#F97316] hover:underline font-medium">installateurs certifiés</Link> connaissent les règles d&apos;autorisation dans votre canton et s&apos;occupent de tout — de l&apos;annonce à la subvention.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Demander une offre gratuite →
          </Link>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Questions sur l&apos;autorisation
            </h2>
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
            <p className="text-gray-500 text-sm mb-4">Plus d&apos;informations sur les installations solaires:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/fr/cout-installation-solaire"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Coûts installation solaire
              </Link>
              <Link
                href="/fr/subventions-solaires"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Subventions &amp; RU
              </Link>
              <Link
                href="/fr/fonctionnement-solaire"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 bg-white transition-colors"
              >
                Fonctionnement du solaire
              </Link>
              <Link
                href="/fr/demande"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
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
