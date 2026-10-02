import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/pageMetadata';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';
import { ECONOMIC_FACTS, SOURCE_NOTES, SYSTEM_PRICE_NOTES, formatChfForLocale, formatRangeForLocale } from '@/lib/facts';

const facts = ECONOMIC_FACTS;
const frRange = (range: { min: number; max: number }, unit: string) => formatRangeForLocale(range, unit, 'fr');
const netTen = { min: facts.systemCosts.bySize[10].min - facts.incentives.tenKwpApprox, max: facts.systemCosts.bySize[10].max - facts.incentives.tenKwpApprox };

const baseMetadata: Metadata = {
  title: 'Installation solaire maison individuelle Suisse : coûts, taille et avantages | PvPro.ch',
  description: 'Combien coûte une installation solaire pour une maison individuelle en Suisse ? Prix, taille, subventions et conseils expliqués simplement. Comparez les offres maintenant.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/solaire-maison-individuelle',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-maison-individuelle',
      'en-CH': 'https://www.pvpro.ch/en/solar-detached-house',
      'it-CH': 'https://www.pvpro.ch/it/solare-casa-unifamiliare',
      'x-default': 'https://www.pvpro.ch/solaranlage-einfamilienhaus',
    },
  },
};

const costRows = [
  { size: '5 kWp', price: frRange(facts.systemCosts.bySize[5], 'CHF'), highlight: false },
  { size: '8 kWp', price: frRange(facts.systemCosts.bySize[8], 'CHF'), highlight: true },
  { size: '10 kWp', price: frRange(facts.systemCosts.bySize[10], 'CHF'), highlight: false },
  { size: '15 kWp', price: frRange(facts.systemCosts.bySize[15], 'CHF'), highlight: false },
];

const exampleRows = [
  { label: 'Surface de toit', value: `${10 * facts.roofAreaM2PerKwp} m²`, highlight: false },
  { label: 'Puissance',         value: '10 kWp',                       highlight: false },
  { label: 'Coût brut', value: frRange(facts.systemCosts.bySize[10], 'CHF'), highlight: false },
  { label: 'Subvention RU', value: formatChfForLocale(facts.incentives.tenKwpApprox, 'fr'), highlight: false },
  { label: 'Coût net après RU', value: frRange(netTen, 'CHF'), highlight: true },
];

const factors = [
  { icon: Home,   title: 'Taille et orientation du toit', text: 'Les toits orientés sud offrent les meilleures performances. Les toits est/ouest sont également bien adaptés.' },
  { icon: Ruler,  title: "Taille de l'installation",     text: "Les grandes installations sont moins chères par kWp — les effets d'échelle jouent sur le prix." },
  { icon: Cpu,    title: 'Technologie et composants',    text: "Les modules, onduleurs et stockage optionnel influencent coûts et performances." },
  { icon: Wrench, title: "Effort d'installation",        text: "Les toits complexes ou difficiles d'accès augmentent l'effort de montage." },
];

const benefits = [
  "Réduire significativement les coûts d'électricité",
  "Augmenter l'indépendance énergétique",
  'Augmenter la valeur immobilière',
  "Utiliser de l'énergie durable directement depuis le toit",
];

export default function SolaireMaisonIndividuellePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #fcb210 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solaire maison individuelle</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Pour les propriétaires
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Installation solaire pour maison individuelle : coûts, taille et avantages
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                 Une installation solaire réduit vos coûts d'électricité et vous rend plus indépendant. Le tableau ci-dessous présente les tailles couvertes par les valeurs nationales.
              </p>
              <Link
                href="/fr/demande"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                 { value: '10 kWp', label: "Exemple d'installation" },
                 { value: frRange(facts.systemCosts.bySize[10], 'CHF'), label: 'Investissement brut' },
                 { value: frRange({ min: 10 * facts.production.plateauKwhPerKwp.min, max: 10 * facts.production.plateauKwhPerKwp.max }, 'kWh'), label: 'Production annuelle sur le Plateau' },
                 { value: frRange(facts.moduleLifetimeYears, 'ans'), label: 'Durée de vie' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-20">

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Calculateur de taille</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quelle taille doit avoir votre installation solaire ?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                 La taille optimale dépend de la consommation électrique, du toit et des usages prévus.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Si vous avez une pompe à chaleur ou une voiture électrique, une installation plus grande est souvent rentable. Utilisez le calculateur pour obtenir une première recommandation.
              </p>
            </div>
            <div className="lg:col-span-3">
              <EinfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Coûts</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Combien coûte une installation solaire pour une maison individuelle ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
               Pour une installation de 10 kWp avec environ {10 * facts.roofAreaM2PerKwp} m² de surface de toit, le coût brut est de{' '}
               <strong className="text-gray-800">{frRange(facts.systemCosts.bySize[10], 'CHF')}</strong>.
              Après subventions et déductions fiscales, le prix effectif peut être nettement inférieur.
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Taille installation</span><span>Valeur indicative</span>
              </div>
              {costRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                  <span className={`font-bold text-sm ${row.highlight ? 'text-[#fcb210]' : 'text-gray-700'}`}>{row.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">{SYSTEM_PRICE_NOTES.fr} {SOURCE_NOTES.fr}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/asset-installateur-dach-1.webp" alt="Installation solaire maison individuelle Suisse" width={1600} height={1600} sizes="(max-width: 1024px) 100vw, 640px" className="w-full h-80 object-cover" loading="lazy"/>
          </div>
        </section>

        {/* ── Production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #fcb210 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Production d'électricité</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quelle quantité d'électricité produit une installation solaire ?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                 Sur le Plateau, la production annuelle dépend directement de la puissance installée.
              </p>
              {[
                 { label: 'Installation 8 kWp', value: frRange({ min: 8 * facts.production.plateauKwhPerKwp.min, max: 8 * facts.production.plateauKwhPerKwp.max }, 'kWh/an'), pct: 65 },
                 { label: 'Installation 10 kWp', value: frRange({ min: 10 * facts.production.plateauKwhPerKwp.min, max: 10 * facts.production.plateauKwhPerKwp.max }, 'kWh/an'), pct: 80 },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#fcb210]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/asset-haus-luftbild-1.webp" alt="Maison individuelle avec installation solaire" width={1600} height={1600} sizes="(max-width: 1024px) 100vw, 640px" className="w-full h-72 object-cover" loading="lazy"/>
            </div>
          </div>
        </section>

        {/* ── Lohnt sich ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image src="/images/asset-beratung-indoor-2.webp" alt="Conseil installation solaire" width={2048} height={2048} sizes="(max-width: 1024px) 100vw, 640px" className="w-full h-80 object-cover" loading="lazy"/>
          </div>
          <div>
            <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Rentabilité</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Une installation solaire pour maison individuelle vaut-elle la peine ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Oui, dans la plupart des cas, une installation photovoltaïque est rentable à long terme. Grâce à l'autoconsommation et aux subventions, l'installation s'amortit au fil des années.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#fcb210] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subventions ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Subventions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Subventions pour installations solaires en Suisse
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Pour une installation de 10 kWp, la subvention fédérale correspond à environ <strong className="text-gray-800">{formatChfForLocale(facts.incentives.tenKwpApprox, 'fr')}</strong>. S&apos;y ajoutent des subventions cantonales et des déductions fiscales.
              </p>
              <div className="space-y-3">
                {[
                   `Rémunération unique (RU) fédérale : ${formatChfForLocale(facts.incentives.pronovoPerKwpUpTo30, 'fr')}/kWp jusqu'à 30 kWp`,
                  "Programmes de subventions cantonaux supplémentaires",
                  "Déductions fiscales au niveau fédéral",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fr/subventions-solaires" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#fcb210] hover:underline">
                Voir toutes les subventions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                 { label: 'Investissement (10 kWp)', value: frRange(facts.systemCosts.bySize[10], 'CHF'), color: 'text-gray-800', highlight: false },
                 { label: 'Subvention fédérale RU', value: `– ${formatChfForLocale(facts.incentives.tenKwpApprox, 'fr')}`, color: 'text-green-600', highlight: false },
                { label: 'Subvention cantonale',    value: 'variable',              color: 'text-green-600',  highlight: false },
                { label: 'Déductions fiscales',     value: 'variable',              color: 'text-green-600',  highlight: false },
                 { label: 'Coût net après RU', value: frRange(netTen, 'CHF'), color: 'text-[#fcb210]', highlight: true },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between items-center px-5 py-3.5 rounded-xl ${row.highlight ? 'bg-orange-50 border border-orange-100' : 'bg-white border border-gray-100'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold text-sm ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stockage ── */}
        <section>
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Stockage batterie</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Avec ou sans stockage batterie ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <p className="font-bold text-gray-900 text-lg mb-1">Sans stockage</p>
              <p className="text-sm text-gray-400 mb-4">Option économique</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Investissement initial moins élevé</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Amortissement plus rapide</span></div>
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Autoconsommation {frRange(facts.selfConsumptionPercent.withoutStorage, '%')}</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#fcb210]/30 p-6 shadow-sm bg-orange-50">
              <p className="font-bold text-gray-900 text-lg mb-1">Avec stockage batterie</p>
              <p className="text-sm text-[#fcb210] font-semibold mb-4">Recommandé pour une consommation élevée</p>
              <div className="space-y-2 text-sm text-gray-600">
                 <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0" /><span>Autoconsommation {frRange(facts.selfConsumptionPercent.withStorage, '%')}</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0" /><span>Utiliser l'électricité aussi le soir</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#fcb210] flex-shrink-0" /><span>Plus grande indépendance</span></div>
              </div>
            </div>
          </div>
          <Link href="/fr/solaire-avec-batterie" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#fcb210] hover:underline">
            En savoir plus sur le stockage batterie <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Facteurs d'influence</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Quels facteurs influencent les coûts ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#fcb210]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#fcb210]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">Exemple de calcul</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Exemple : installation solaire pour une maison individuelle</h2>
          <div className="max-w-lg">
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? 'text-[#fcb210] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#fcb210] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur l'installation solaire pour maison individuelle
          </h2>
          <EinfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Sun className="w-10 h-10 text-[#fcb210] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Comparer les offres et optimiser les coûts
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Les prix des installations solaires varient considérablement selon les prestataires. Via PvPro.ch, obtenez gratuitement jusqu'à 3 devis d'installateurs certifiés dans votre canton.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #ffc812, #fcb210)' }}
          >
            Demander un devis gratuit →
          </Link>
        </section>

      </div>
    </main>
  );
}

export const metadata: Metadata = pageMetadata(baseMetadata, { path: '/fr/solaire-maison-individuelle', locale: 'fr' });
