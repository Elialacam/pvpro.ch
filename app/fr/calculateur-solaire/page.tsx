import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import SolarCalculator from '@/components/SolarCalculator';
import CtaAnfrage from '@/components/CtaAnfrage';
import Link from 'next/link';
import {
  CheckCircle, Calculator, Zap, TrendingUp, PiggyBank,
  Sun, Home, Battery, ArrowRight, ChevronRight, AlertCircle,
} from 'lucide-react';
import FaqSchema from '@/components/FaqSchema';
import { ECONOMIC_FACTS, ELECTRICITY_TARIFF_NOTES, SOURCE_NOTES, STORAGE_PRICE_NOTES, SYSTEM_PRICE_NOTES, calculateAnnualSolarValueRange, formatChfForLocale, formatRangeForLocale, getSystemCostRange } from '@/lib/facts';

const facts = ECONOMIC_FACTS;
const frRange = (range: { min: number; max: number }, unit: string) => formatRangeForLocale(range, unit, 'fr');
const production10 = { min: 10 * facts.production.plateauKwhPerKwp.min, max: 10 * facts.production.plateauKwhPerKwp.max };
const selfConsumed10 = {
  min: Math.round(production10.min * facts.selfConsumptionPercent.withoutStorage.min / 100),
  max: Math.round(production10.max * facts.selfConsumptionPercent.withoutStorage.max / 100),
};
const annualSavings = {
  min: Math.round(selfConsumed10.min * facts.electricityMedianCtPerKwh / 100),
  max: Math.round(selfConsumed10.max * facts.electricityMedianCtPerKwh / 100),
};
const annualFeedIn = {
  min: Math.round((production10.min - selfConsumed10.min) * facts.feedInCtPerKwh.min / 100),
  max: Math.round((production10.max - selfConsumed10.max) * facts.feedInCtPerKwh.max / 100),
};
const annualBenefit = {
  min: calculateAnnualSolarValueRange(production10.min, production10.max).min,
  max: calculateAnnualSolarValueRange(production10.max, production10.max).max,
};

const baseMetadata: Metadata = {
  title: 'Calculateur solaire Suisse 2026 – Calculer coûts et rendement | PvPro.ch',
  description: 'Calculateur solaire gratuit pour la Suisse. Calculez en 30 secondes les coûts, le rendement et l\'amortissement de votre installation solaire. Avec subventions et valeurs de référence 2026.',
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
  openGraph: {
    title: 'Calculateur solaire Suisse 2026 – Calculer coûts et rendement',
    description: 'Calculateur solaire gratuit pour la Suisse. Coûts, rendement et amortissement de votre installation.',
    url: 'https://www.pvpro.ch/fr/calculateur-solaire',
    type: 'website',
    locale: 'fr_CH',
    siteName: 'PvPro.ch',
  },
};

const faqs = [
  {
    question: 'Quelle est la précision du calculateur solaire ?',
    answer: `Notre calculateur donne une première orientation. Il utilise ${facts.roofAreaM2PerKwp.toLocaleString('fr-CH')} m² par kWp, ${frRange(facts.production.plateauKwhPerKwp, 'kWh par kWp')} et ${frRange(facts.systemCosts.perKwp, 'CHF par kWp')}.`,
  },
  {
    question: 'Quelle surface de toit faut-il par kWp ?',
    answer: `On compte environ ${facts.roofAreaM2PerKwp.toLocaleString('fr-CH')} m² de surface de toit par kWp, soit ${10 * facts.roofAreaM2PerKwp} m² pour 10 kWp.`,
  },
  {
    question: 'Qu\'est-ce que la rétribution unique (RU) ?',
    answer: `La RU est de ${formatChfForLocale(facts.incentives.pronovoPerKwpUpTo30, 'fr')} par kWp jusqu'à 30 kWp, plus une contribution de base. Le total des aides fédérales, cantonales et communales peut atteindre ${facts.incentives.combinedMaxPercent}%.`,
  },
  {
    question: 'Quelle est la durée d\'amortissement typique en Suisse ?',
    answer: `Sur le Plateau, la durée d'amortissement indicative est de ${frRange(facts.systemPaybackYears.plateau, 'ans')}.`,
  },
  {
    question: 'Une installation solaire est-elle rentable avec un toit orienté nord ?',
    answer: 'Un toit orienté plein nord n’est pas idéal. Les toits est et ouest peuvent rester adaptés. Pour les toits nord, nous recommandons une analyse professionnelle au cas par cas.',
  },
  {
    question: 'Dois-je ajouter un stockage par batterie ?',
    answer: `Sans stockage, l'autoconsommation est de ${frRange(facts.selfConsumptionPercent.withoutStorage, '%')}. Avec stockage, elle atteint ${frRange(facts.selfConsumptionPercent.withStorage, '%')}. Un stockage de 10 kWh coûte ${frRange(facts.storageCosts.byCapacity[10], 'CHF')}. ${STORAGE_PRICE_NOTES.fr}`,
  },
  {
    question: 'Comment une voiture électrique influence-t-elle mon calcul solaire ?',
    answer: "La consommation dépend du véhicule et du kilométrage. Charger la voiture pendant la production solaire augmente l'autoconsommation.",
  },
];

const systemSizes = [
  {
    label: 'Petite',
    kwp: 6,
    flaeche: `${6 * facts.roofAreaM2PerKwp} m²`,
    jahresertrag: frRange({ min: 6 * facts.production.plateauKwhPerKwp.min, max: 6 * facts.production.plateauKwhPerKwp.max }, 'kWh'),
    kosten: frRange(getSystemCostRange(6), 'CHF'),
    foerderung: formatChfForLocale(6 * facts.incentives.pronovoPerKwpUpTo30, 'fr'),
    nettokosten: frRange({ min: getSystemCostRange(6).min - 6 * facts.incentives.pronovoPerKwpUpTo30, max: getSystemCostRange(6).max - 6 * facts.incentives.pronovoPerKwpUpTo30 }, 'CHF'),
    amort: frRange(facts.systemPaybackYears.plateau, 'ans'),
    haushalt: '2 personnes / appartement',
    color: 'border-blue-200 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Moyenne',
    kwp: 10,
    flaeche: `${10 * facts.roofAreaM2PerKwp} m²`,
    jahresertrag: frRange({ min: 10 * facts.production.plateauKwhPerKwp.min, max: 10 * facts.production.plateauKwhPerKwp.max }, 'kWh'),
    kosten: frRange(facts.systemCosts.bySize[10], 'CHF'),
    foerderung: formatChfForLocale(facts.incentives.tenKwpApprox, 'fr'),
    nettokosten: frRange({ min: facts.systemCosts.bySize[10].min - facts.incentives.tenKwpApprox, max: facts.systemCosts.bySize[10].max - facts.incentives.tenKwpApprox }, 'CHF'),
    amort: frRange(facts.systemPaybackYears.plateau, 'ans'),
    haushalt: '3–4 personnes / maison individuelle',
    color: 'border-[#fcb210]/30 bg-orange-50',
    badge: 'bg-[#fcb210]/10 text-[#fcb210]',
    highlight: true,
  },
  {
    label: 'Grande',
    kwp: 15,
    flaeche: `${15 * facts.roofAreaM2PerKwp} m²`,
    jahresertrag: frRange({ min: 15 * facts.production.plateauKwhPerKwp.min, max: 15 * facts.production.plateauKwhPerKwp.max }, 'kWh'),
    kosten: frRange(facts.systemCosts.bySize[15], 'CHF'),
    foerderung: formatChfForLocale(15 * facts.incentives.pronovoPerKwpUpTo30, 'fr'),
    nettokosten: frRange({ min: facts.systemCosts.bySize[15].min - 15 * facts.incentives.pronovoPerKwpUpTo30, max: facts.systemCosts.bySize[15].max - 15 * facts.incentives.pronovoPerKwpUpTo30 }, 'CHF'),
    amort: frRange(facts.systemPaybackYears.plateau, 'ans'),
    haushalt: 'Grande famille / immeuble',
    color: 'border-green-200 bg-green-50',
    badge: 'bg-green-100 text-green-700',
  },
];

const factors = [
  {
    icon: Sun,
    title: 'Orientation du toit',
    body: 'L’orientation et l’inclinaison du toit influencent la production. Une analyse sur place permet de les évaluer.',
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
    body: 'Arbres, cheminées ou maisons voisines peuvent réduire le rendement. Une étude d’ombrage permet de mesurer cet effet.',
    tip: 'Faire vérifier les ombrages',
  },
  {
    icon: Battery,
    title: 'Autoconsommation',
    body: `Sans stockage, l'autoconsommation est de ${frRange(facts.selfConsumptionPercent.withoutStorage, '%')}. Avec stockage, elle monte à ${frRange(facts.selfConsumptionPercent.withStorage, '%')}.`,
    tip: 'Le stockage augmente l\'autoconsommation',
  },
  {
    icon: Zap,
    title: 'Prix de l\'électricité',
    body: `La médiane suisse est de ${facts.electricityMedianCtPerKwh.toLocaleString('fr-CH')} ct/kWh. Chaque kilowattheure produit et consommé sur place évite un achat.`,
    tip: ELECTRICITY_TARIFF_NOTES.fr,
  },
  {
    icon: TrendingUp,
    title: 'Injection réseau',
    body: `La rémunération de l'injection varie de ${facts.feedInCtPerKwh.min} à ${facts.feedInCtPerKwh.max} ct/kWh selon le gestionnaire.`,
    tip: `${frRange(facts.feedInCtPerKwh, 'ct/kWh')}. ${ELECTRICITY_TARIFF_NOTES.fr}`,
  },
];

const richtigValues = [
  { label: 'Rendement annuel par kWp sur le Plateau', value: frRange(facts.production.plateauKwhPerKwp, 'kWh') },
  { label: 'Surface de toit par kWp', value: `${facts.roofAreaM2PerKwp.toLocaleString('fr-CH')} m²` },
  { label: "Coûts d'installation par kWp", value: frRange(facts.systemCosts.perKwp, 'CHF') },
  { label: 'Subvention fédérale RU par kWp', value: formatChfForLocale(facts.incentives.pronovoPerKwpUpTo30, 'fr') },
  { label: 'Autoconsommation sans stockage', value: frRange(facts.selfConsumptionPercent.withoutStorage, '%') },
  { label: 'Autoconsommation avec stockage', value: frRange(facts.selfConsumptionPercent.withStorage, '%') },
  { label: 'Durée de vie des modules solaires', value: frRange(facts.moduleLifetimeYears, 'ans') },
  { label: 'Garantie de performance', value: `${facts.performanceWarranty.percent}% après ${facts.performanceWarranty.afterYears} ans` },
  { label: "Durée d'amortissement sur le Plateau", value: frRange(facts.systemPaybackYears.plateau, 'ans') },
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
            name: 'PvPro.ch Calculateur Solaire',
            description: 'Calculateur solaire gratuit pour la Suisse',
            url: 'https://www.pvpro.ch/fr/calculateur-solaire',
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
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Calculateur solaire</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-12">
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-4">Outil gratuit</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Calculateur solaire Suisse 2026
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Entrez la surface de votre toit et votre consommation d'électricité — obtenez immédiatement une estimation réaliste des coûts, du rendement annuel et de l'amortissement de votre installation solaire en Suisse.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
              <span className="text-white/80 text-sm">Gratuit</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Résultats instantanés</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-[#fcb210]" />
                  <span className="text-white/80 text-sm">Données du marché suisse</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-12">
              {[
                 { val: frRange(facts.production.plateauKwhPerKwp, ''), unit: 'kWh/kWp/an', label: 'Plateau' },
                 { val: frRange(facts.systemPaybackYears.plateau, ''), unit: 'ans', label: 'Amortissement Plateau' },
                 { val: String(facts.incentives.pronovoPerKwpUpTo30), unit: 'CHF/kWp', label: 'Subvention fédérale RU' },
                 { val: frRange(facts.moduleLifetimeYears, ''), unit: 'ans', label: 'Durée de vie modules' },
              ].map(s => (
                <div key={s.label} className="bg-white/8 border border-white/10 rounded-2xl p-5">
                  <p className="text-2xl font-bold text-white">{s.val}</p>
                  <p className="text-[#fcb210] text-xs font-semibold mt-0.5">{s.unit}</p>
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
            {SOURCE_NOTES.fr} {SYSTEM_PRICE_NOTES.fr}
          </p>
        </div>
      </section>

      {/* ── Reference table by system size ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Valeurs de référence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Tailles d'installations typiques en Suisse</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Selon la taille du ménage et la surface de toit disponible, différentes puissances sont possibles. Les prix affichés sont avant les aides cantonales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemSizes.map(s => (
              <div
                key={s.kwp}
                className={`rounded-2xl border-2 p-6 relative ${s.color} ${s.highlight ? 'ring-2 ring-[#fcb210]/30' : ''}`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fcb210] text-white text-xs font-bold px-4 py-1 rounded-full">
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
            <Link href="/fr/cout-installation-solaire" className="text-[#fcb210] ml-1 hover:underline">Aperçu détaillé des coûts →</Link>
          </p>
        </div>
      </section>

      {/* ── What influences the result ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Facteurs d'influence</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Qu'est-ce qui influence votre rendement solaire ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Le calculateur utilise des valeurs moyennes. En pratique, six facteurs jouent un rôle décisif — comprenez-les pour interpréter correctement le résultat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {factors.map(f => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fcb210]/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#fcb210]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{f.title}</h3>
                    <span className="text-xs text-[#fcb210] font-medium">{f.tip}</span>
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
          style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #fcb210 0%, transparent 55%)' }}
        />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Valeurs de référence suisses</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Les chiffres derrière le calculateur
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Notre calculateur solaire est basé sur des données de marché suisses validées. Ces valeurs de référence vous aident à interpréter le résultat et à comprendre les hypothèses utilisées.
              </p>
              <Link
                href="/fr/demande"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">C'est simple</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Du calcul au devis</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Le calculateur est la première étape. En trois étapes simples supplémentaires, vous obtenez des devis fermes d'installateurs suisses certifiés.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Entrer la surface du toit', desc: "Estimez votre surface de toit utilisable en m², longueur multipliée par largeur." },
              { step: '2', title: 'Indiquer la consommation', desc: "Votre consommation annuelle figure sur votre facture d'électricité." },
              { step: '3', title: 'Comprendre le potentiel', desc: "Vous voyez immédiatement : taille de l'installation, rendement annuel, coûts et durée d'amortissement estimée." },
              { step: '4', title: 'Comparer les devis', desc: 'Demandez gratuitement 3 devis d\'installateurs certifiés — sans engagement et rapidement.' },
            ].map(s => (
              <div key={s.step} className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
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

      {/* ── Note cantonale ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Différences cantonales</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Rendement solaire par canton en Suisse
              </h2>
              <Link href="/fr/demande" className="inline-flex items-center gap-2 text-sm font-bold text-[#fcb210] hover:underline">
                Demander des devis pour mon emplacement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Savings narrative ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Rentabilité</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Qu'est-ce qu'une installation solaire vous rapporte concrètement ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Exemple pour 10 kWp sur le Plateau, avec la médiane suisse de {facts.electricityMedianCtPerKwh.toLocaleString('fr-CH')} ct/kWh et {frRange(facts.selfConsumptionPercent.withoutStorage, '%')} d'autoconsommation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                label: "Économies d'électricité annuelles",
                value: frRange(annualSavings, 'CHF'),
                sub: `${frRange(selfConsumed10, 'kWh')} autoconsommés`,
                color: 'text-[#fcb210]',
                bg: 'bg-orange-50',
              },
              {
                icon: TrendingUp,
                label: 'Rémunération injection / an',
                value: frRange(annualFeedIn, 'CHF'),
                sub: frRange(facts.feedInCtPerKwh, 'ct/kWh'),
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: PiggyBank,
                label: 'Bénéfice total / an',
                value: frRange(annualBenefit, 'CHF'),
                sub: 'Économies + rémunération injection',
                color: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                icon: Calculator,
                label: `Bénéfice indicatif sur ${facts.moduleLifetimeYears.min} ans`,
                value: frRange({ min: annualBenefit.min * facts.moduleLifetimeYears.min, max: annualBenefit.max * facts.moduleLifetimeYears.min }, 'CHF'),
                sub: 'À prix constants',
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
              {SOURCE_NOTES.fr}
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
              { icon: Zap, title: 'Calculer le rendement', desc: "Voyez combien d'électricité votre toit peut produire annuellement — selon votre canton." },
              { icon: PiggyBank, title: 'Comprendre les coûts', desc: 'Estimation réaliste avec subvention RU basée sur les prix actuels du marché suisse.' },
              { icon: TrendingUp, title: "Planifier l'amortissement", desc: `Situez votre projet par rapport à la durée indicative de ${frRange(facts.systemPaybackYears.plateau, 'ans')} sur le Plateau.` },
            ].map(b => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#fcb210]/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-[#fcb210]" />
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
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Questions fréquentes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Questions sur le calculateur et la rentabilité</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 text-sm select-none list-none">
                    {faq.question}
                    <span className="ml-4 text-[#fcb210] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
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

export const metadata: Metadata = pageMetadata(baseMetadata, { path: '/fr/calculateur-solaire', locale: 'fr' });
