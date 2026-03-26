import { Metadata } from 'next';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Calculateur solaire Suisse 2026 – Calculer coûts et rendement | PVPro',
  description: 'Calculateur solaire gratuit pour la Suisse. Calculez en 30 secondes les coûts, le rendement et l\'amortissement de votre installation solaire. Avec subventions et valeurs de référence 2026.',
  alternates: {
    canonical: 'https://pvpro.ch/fr/calculateur-solaire',
    languages: {
      'de-CH': 'https://pvpro.ch/solarrechner',
      'fr-CH': 'https://pvpro.ch/fr/calculateur-solaire',
      'en-CH': 'https://pvpro.ch/en/solar-calculator',
      'it-CH': 'https://pvpro.ch/it/calcolatore-solare',
      'x-default': 'https://pvpro.ch/solarrechner',
    },
  },
  openGraph: {
    title: 'Calculateur solaire Suisse 2026 – Calculer coûts et rendement',
    description: 'Calculateur solaire gratuit pour la Suisse. Coûts, rendement et amortissement de votre installation.',
    url: 'https://pvpro.ch/fr/calculateur-solaire',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PVPro',
  },
};

const faqs = [
  {
    question: 'Quelle est la précision du calculateur solaire ?',
    answer: "Notre calculateur vous donne une bonne première orientation. Il est basé sur des valeurs moyennes suisses : 6,5 m² par kWp, 950 kWh de production par kWp et 2'200 CHF de coûts d'installation par kWp. Pour un calcul exact, nous recommandons une consultation professionnelle sur place, qui tient compte de l'orientation du toit, des ombrages et des conditions locales.",
  },
  {
    question: 'Quelle surface de toit faut-il par kWp ?',
    answer: 'Avec des modules modernes, on compte environ 6,5 m² de surface de toit par kWp en Suisse. Pour une installation typique de 10 kWp, il vous faut environ 65 m² de surface utilisable. L\'ensemble du toit n\'est pas forcément exploitable — velux, cheminées et ombrages réduisent la surface disponible.',
  },
  {
    question: 'Qu\'est-ce que la rétribution unique (RU) ?',
    answer: 'La rétribution unique (RU) de la Confédération s\'élève actuellement à environ 350 CHF par kWp installé. Elle est directement déduite du prix d\'installation et réduit sensiblement vos coûts réels. Des subventions cantonales supplémentaires sont possibles selon le canton. Au total, les subventions peuvent couvrir 20–30% des coûts d\'investissement.',
  },
  {
    question: 'Quelle est la durée d\'amortissement typique en Suisse ?',
    answer: "La durée d'amortissement moyenne en Suisse est de 8–12 ans, selon le prix de l'électricité, le taux d'autoconsommation et les subventions reçues. Après l'amortissement, vous produisez de l'électricité largement gratuite pendant encore 15–20 ans. Avec la hausse des prix de l'électricité, la durée d'amortissement se raccourcit.",
  },
  {
    question: 'Une installation solaire est-elle rentable avec un toit orienté nord ?',
    answer: 'Un toit orienté plein nord n\'est pas idéal. En revanche, les toits est et ouest fournissent encore 70–80% du rendement d\'un toit sud et sont généralement rentables. Pour les toits nord, nous recommandons une analyse professionnelle au cas par cas. Les modules solaires bifaciaux modernes peuvent donner de très bons résultats même sur des toits moins optimaux.',
  },
  {
    question: 'Dois-je ajouter un stockage par batterie ?',
    answer: "Un stockage par batterie augmente votre taux d'autoconsommation de 30% à 60–80%. Il coûte environ 8'000–15'000 CHF supplémentaires, mais s'amortit de plus en plus vite avec la hausse des prix de l'électricité. Un stockage est particulièrement utile si vous êtes peu chez vous la journée ou si vous possédez une voiture électrique.",
  },
  {
    question: 'Comment une voiture électrique influence-t-elle mon calcul solaire ?',
    answer: "Une voiture électrique avec environ 15'000 km/an consomme environ 2'500 kWh. Avec une installation solaire d'environ 3 kWp plus grande, vous pouvez couvrir largement cette consommation supplémentaire. Charger la voiture le jour avec l'énergie solaire augmente considérablement l'autoconsommation.",
  },
  {
    question: 'Quel canton a le plus d\'heures d\'ensoleillement en Suisse ?',
    answer: "Le Tessin et le Valais comptent parmi les cantons les plus ensoleillés de Suisse, avec plus de 2'000 heures de soleil par an. La Suisse alémanique se situe entre 1'600 et 1'900 heures. Même dans les régions moins ensoleillées, les installations solaires sont rentables — la différence de rendement entre le Tessin et Zurich n'est que de 15–20%.",
  },
];

const systemSizes = [
  {
    label: 'Petite',
    kwp: 6,
    flaeche: '39 m²',
    jahresertrag: "5'700 kWh",
    kosten: "13'200 CHF",
    foerderung: "2'100 CHF",
    nettokosten: "11'100 CHF",
    amort: '9–12 ans',
    haushalt: '2 personnes / appartement',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Moyenne',
    kwp: 10,
    flaeche: '65 m²',
    jahresertrag: "9'500 kWh",
    kosten: "22'000 CHF",
    foerderung: "3'500 CHF",
    nettokosten: "18'500 CHF",
    amort: '8–11 ans',
    haushalt: '3–4 personnes / maison individuelle',
    color: 'border-[#F97316]/30 bg-orange-50',
    badge: 'bg-[#F97316]/10 text-[#F97316]',
    highlight: true,
  },
  {
    label: 'Grande',
    kwp: 15,
    flaeche: '98 m²',
    jahresertrag: "14'250 kWh",
    kosten: "33'000 CHF",
    foerderung: "5'250 CHF",
    nettokosten: "27'750 CHF",
    amort: '8–10 ans',
    haushalt: 'Grande famille / immeuble',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Orientation du toit',
    body: 'Un toit orienté sud atteint 100% de rendement. Est/Ouest fournissent chacun 70–80%, les toits nord seulement 50–60%. L\'inclinaison idéale est de 25–35°.',
    tip: 'Sud, Est ou Ouest sont idéaux',
  },
  {
    icon: Home,
    title: 'État du toit',
    body: 'Les toits en tuiles, béton et tôle sont sans problème. Les toits en amiante ou en bitume doivent être rénovés au préalable — ce qui augmente le coût total.',
    tip: 'Prévoir une rénovation si nécessaire',
  },
  {
    icon: AlertCircle,
    title: 'Ombrage',
    body: 'Arbres, cheminées ou maisons voisines peuvent réduire le rendement de 10–30%. Les micro-onduleurs ou optimiseurs modernes minimisent les pertes.',
    tip: 'Faire vérifier les ombrages',
  },
  {
    icon: Battery,
    title: 'Autoconsommation',
    body: 'Sans stockage, vous consommez environ 25–35% de l\'électricité produite. Avec un stockage, l\'autoconsommation monte à 60–80% — ce qui améliore considérablement la rentabilité.',
    tip: 'Le stockage augmente l\'autoconsommation',
  },
  {
    icon: Zap,
    title: 'Prix de l\'électricité',
    body: 'Le ménage suisse moyen paie actuellement environ 25–30 ct/kWh. Chaque kilowatt produit soi-même est directement économisé. Avec la hausse des prix, l\'installation s\'amortit plus vite.',
    tip: '~25–30 ct/kWh en Suisse',
  },
  {
    icon: TrendingUp,
    title: 'Injection réseau',
    body: 'L\'électricité que vous ne consommez pas vous-même est injectée dans le réseau. La rémunération varie entre 6 et 15 ct/kWh selon le gestionnaire de réseau — nettement en dessous du prix d\'achat.',
    tip: '6–15 ct/kWh d\'injection',
  },
];

const richtigValues = [
  { label: "Heures d'ensoleillement/an moyennes (CH)", value: "1'600–2'100 h" },
  { label: 'Rendement annuel par kWp (moyenne CH)', value: "950–1'000 kWh" },
  { label: 'Surface de toit par kWp (modules modernes)', value: '6,5 m²' },
  { label: "Coûts d'installation par kWp", value: "2'000–2'500 CHF" },
  { label: 'Subvention fédérale RU par kWp', value: '~350 CHF' },
  { label: 'Autoconsommation moyenne sans stockage', value: '25–35%' },
  { label: 'Autoconsommation moyenne avec stockage', value: '60–80%' },
  { label: 'Durée de vie des modules solaires', value: '25–30 ans' },
  { label: 'Garantie de performance (typique)', value: '80% après 25 ans' },
  { label: "Durée d'amortissement (Suisse)", value: '8–12 ans' },
];

export default function CalculateurSolairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'PVPro Calculateur Solaire',
            description: 'Calculateur solaire gratuit pour la Suisse',
            url: 'https://pvpro.ch/fr/calculateur-solaire',
            applicationCategory: 'Calculator',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'CHF' },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Calculateur solaire</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">Outil gratuit</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Calculateur solaire Suisse 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Entrez la surface de votre toit et votre consommation d'électricité — obtenez immédiatement une estimation réaliste des coûts, du rendement annuel et de l'amortissement de votre installation solaire en Suisse.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">100% gratuit</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Résultats instantanés</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#F97316]" />
                  <span className="text-white/80 text-sm">Données du marché suisse</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                { val: "950–1'000", unit: 'kWh/kWp/an', label: 'Moyenne suisse' },
                { val: '8–12', unit: 'ans', label: 'Amortissement typique' },
                { val: '~350', unit: 'CHF/kWp', label: 'Subvention fédérale RU' },
                { val: '25–30', unit: 'ans', label: 'Durée de vie modules' },
              ].map(s => (
                <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[#F97316] text-xs font-semibold mt-0.5">{s.unit}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-14 bg-white" id="calculateur">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Votre potentiel solaire personnalisé</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Entrez votre surface de toit disponible et votre consommation annuelle d'électricité. Le calculateur est basé sur des valeurs moyennes suisses et la subvention RU.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <SolarCalculator />
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Valeurs indicatives : 6,5 m²/kWp · 950 kWh/kWp/an · 2'200 CHF/kWp · RU ~350 CHF/kWp. Pas d'offre ferme.
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Valeurs de référence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Tailles d'installations typiques en Suisse</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Selon la taille du ménage et la surface de toit disponible, différentes puissances sont recommandées. Tous les prix avant subventions cantonales — celles-ci peuvent réduire les coûts de 10–15% supplémentaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemSizes.map(s => (
              <div
                key={s.kwp}
                className={`rounded-2xl border-2 p-6 relative ${s.color} ${s.highlight ? 'ring-2 ring-[#F97316]/30' : ''}`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Taille la plus populaire
                  </div>
                )}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded ${s.badge}`}>{s.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{s.kwp} kWp</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Surface toit</p>
                    <p className="font-bold text-gray-700">{s.flaeche}</p>
                  </div>
                </div>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rendement annuel</span>
                    <span className="font-semibold text-gray-800">{s.jahresertrag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coût brut</span>
                    <span className="font-semibold text-gray-800">{s.kosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subvention RU</span>
                    <span className="font-semibold text-green-600">− {s.foerderung}</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-2.5 mt-1">
                    <span className="text-gray-700 font-semibold">Coût net</span>
                    <span className="font-bold text-gray-900">{s.nettokosten}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amortissement</span>
                    <span className="font-semibold text-gray-800">{s.amort}</span>
                  </div>
                  <div className="pt-2 text-xs text-gray-400 border-t border-gray-200">
                    Adapté pour : {s.haushalt}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Valeurs indicatives 2026. Les coûts réels peuvent varier selon l'installateur, le canton et l'installation.
            <Link href="/fr/cout-installation-solaire" className="text-[#F97316] ml-1 hover:underline">Aperçu détaillé des coûts →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Facteurs d'influence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Qu'est-ce qui influence votre rendement solaire ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Le calculateur utilise des valeurs moyennes. En pratique, six facteurs jouent un rôle décisif — comprenez-les pour interpréter correctement le résultat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-xs text-[#F97316] font-medium">{f.tip}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Swiss benchmark values ── */}
      <section className="py-16 bg-[#0f1f3d] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Valeurs de référence suisses</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Les chiffres derrière le calculateur
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Notre calculateur solaire est basé sur des données de marché suisses validées. Ces valeurs de référence vous aident à interpréter le résultat et à comprendre les hypothèses utilisées.
              </p>
              <Link
                href="/fr/demande"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Demander des devis concrets maintenant <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-2">
              {richtigValues.map(rv => (
                <div key={rv.label} className="flex items-center justify-between bg-white/8 border border-white/10 rounded-xl px-5 py-3">
                  <span className="text-white/60 text-sm">{rv.label}</span>
                  <span className="text-white font-semibold text-sm">{rv.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">C'est simple</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Du calcul au devis</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Le calculateur est la première étape. En trois étapes simples supplémentaires, vous obtenez des devis fermes d'installateurs suisses certifiés.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Entrer la surface du toit', desc: "Estimez votre surface de toit utilisable en m² (longueur × largeur). Typiquement : 40–100 m²." },
              { step: '2', title: 'Indiquer la consommation', desc: "Votre consommation annuelle figure sur votre facture d'électricité — typiquement 3'500–7'000 kWh pour une maison." },
              { step: '3', title: 'Comprendre le potentiel', desc: "Vous voyez immédiatement : taille de l'installation, rendement annuel, coûts et durée d'amortissement estimée." },
              { step: '4', title: 'Comparer les devis', desc: 'Demandez gratuitement 3 devis d\'installateurs certifiés — sans engagement et rapidement.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-2 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-center text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional note ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Différences régionales</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Rendement solaire par région en Suisse
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L'ensoleillement varie régionalement en Suisse. Le Tessin et le Valais comptent parmi les régions les plus ensoleillées avec plus de 2'000 heures de soleil par an et un rendement annuel allant jusqu'à 1'100 kWh/kWp.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                La Suisse alémanique et le Plateau se situent à 1'600–1'900 heures — d'excellentes conditions pour l'énergie solaire. La différence de rendement annuel entre Genève et Zurich est inférieure à 15%. Les installations solaires sont rentables dans toute la Suisse.
              </p>
              <Link href="/fr/demande" className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:underline">
                Demander des devis pour mon emplacement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { region: 'Tessin (Lugano)', stunden: "2'080", ertrag: "1'080–1'100 kWh/kWp", bar: 100 },
                { region: 'Valais (Sion)', stunden: "2'130", ertrag: "1'050–1'100 kWh/kWp", bar: 99 },
                { region: 'Région lémanique', stunden: "1'870", ertrag: "970–1'000 kWh/kWp", bar: 87 },
                { region: 'Berne / Plateau', stunden: "1'720", ertrag: "900–950 kWh/kWp", bar: 80 },
                { region: 'Zurich', stunden: "1'700", ertrag: "880–920 kWh/kWp", bar: 78 },
                { region: 'Bâle / Suisse du Nord', stunden: "1'660", ertrag: "860–900 kWh/kWp", bar: 76 },
              ].map(r => (
                <div key={r.region} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 text-sm">{r.region}</span>
                    <span className="text-xs text-gray-500">{r.stunden} h/an</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full mb-2">
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${r.bar}%`, background: 'linear-gradient(90deg, #fb923c, #F97316)' }}
                    />
                  </div>
                  <p className="text-xs text-gray-400">{r.ertrag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Savings narrative ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rentabilité</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Qu'est-ce qu'une installation solaire vous rapporte concrètement ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Avec une installation typique de 10 kWp en Suisse — calculé avec 25 ct/kWh de prix d'électricité et 35% d'autoconsommation sans stockage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: "Économies d'électricité annuelles",
                value: 'CHF 950',
                sub: "≈ 3'325 kWh autoconsommés × 25 ct",
                color: 'text-[#F97316]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Rémunération injection / an',
                value: 'CHF 617',
                sub: "≈ 6'175 kWh injectés × 10 ct",
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Bénéfice total / an',
                value: "CHF 1'567",
                sub: 'Économies + rémunération injection',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: 'Bénéfice total sur 25 ans',
                value: "CHF 39'000+",
                sub: "Les prix de l'électricité continueront à augmenter",
                color: 'text-purple-600',
                bg: 'bg-purple-50',
              },
            ].map(c => (
              <div key={c.label} className={`rounded-2xl p-6 border border-gray-100 ${c.bg}`}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4">
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <p className="text-gray-500 text-xs mb-1">{c.label}</p>
                <p className={`text-2xl font-bold ${c.color} mb-1`}>{c.value}</p>
                <p className="text-gray-400 text-xs">{c.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-5 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-800">Remarque :</strong> Les chiffres sont basés sur une installation de 10 kWp avec des coûts nets d'environ 18'500 CHF, 35% d'autoconsommation, 25 ct/kWh de prix d'achat et 10 ct/kWh de tarif d'injection. Avec un stockage batterie, une voiture électrique ou la hausse des prix de l'électricité, la rentabilité s'améliore nettement.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl mx-auto">
            <CtaAnfrage
              title="Prêt pour des devis concrets ?"
              subtitle="Notre calculateur donne une première orientation. Pour des offres fermes, nous vous mettons gratuitement en contact avec des installateurs solaires suisses certifiés."
              ctaText="Demander des devis gratuits"
            />
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Pourquoi utiliser ce calculateur solaire ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calculator, title: 'Calcul instantané', desc: "Obtenez en quelques secondes une première estimation pour votre installation solaire — sans inscription." },
              { icon: Zap, title: 'Calculer le rendement', desc: "Voyez combien d'électricité votre toit peut produire annuellement — selon votre région." },
              { icon: PiggyBank, title: 'Comprendre les coûts', desc: 'Estimation réaliste avec subvention RU basée sur les prix actuels du marché suisse.' },
              { icon: TrendingUp, title: "Planifier l'amortissement", desc: "Sachez quand votre investissement sera rentabilisé et combien vous économiserez sur 25 ans." },
            ].map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-[#F97316]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Questions sur le calculateur et la rentabilité</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
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
          </div>
        </div>
      </section>

      <FaqSchema faqs={faqs} />
    </>
  );
}
