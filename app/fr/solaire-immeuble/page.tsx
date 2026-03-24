import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, TrendingUp, Users, Building2, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Metadata } from 'next';
import MehrfamilienhausRechner, { MehrfamilienhausFaq } from '@/components/MehrfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Installation solaire immeuble Suisse : coûts, RCP et rentabilité | PVPro.ch',
  description: 'Combien coûte une installation solaire pour un immeuble ? Coûts, RCP, taille et rentabilité pour plusieurs logements en Suisse.',
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/solaire-immeuble',
    languages: {
      'de-CH': 'https://www.pvpro.ch/solaranlage-mehrfamilienhaus',
      'fr-CH': 'https://www.pvpro.ch/fr/solaire-immeuble',
      'en-CH': 'https://www.pvpro.ch/en/solar-apartment-building',
      'it-CH': 'https://www.pvpro.ch/it/solare-condominio',
      'x-default': 'https://www.pvpro.ch/solaranlage-mehrfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Petite installation (15–30 kWp)',   price: "env. 40'000 – 80'000 CHF", highlight: false },
  { size: 'Installation moyenne (30–60 kWp)',  price: "env. 80'000 – 150'000 CHF", highlight: true },
  { size: 'Grande installation (60+ kWp)',     price: "150'000 CHF +",              highlight: false },
];

const sizeGuide = [
  { label: '5–10 logements',  kwp: "env. 20–40 kWp", m2: "env. 100–240 m²" },
  { label: '10–20 logements', kwp: "env. 40–80 kWp", m2: "env. 200–480 m²" },
  { label: 'Grands bâtiments', kwp: '80 kWp +',       m2: '480 m² +' },
];

const exampleRows = [
  { label: 'Logements',                value: '10',              highlight: false },
  { label: 'Puissance',                value: '50 kWp',          highlight: false },
  { label: 'Coûts',                    value: "env. 100'000 CHF", highlight: false },
  { label: "Modèle d'utilisation",     value: 'RCP',             highlight: false },
  { label: "Taux d'autoconsommation",  value: '60–75 %',         highlight: true },
];

const benefits = [
  { icon: TrendingUp, title: 'Autoconsommation élevée',        text: "Avec de nombreux utilisateurs, l'électricité solaire est consommée régulièrement tout au long de la journée — idéal pour les immeubles." },
  { icon: Users,      title: 'Coûts réduits pour tous',        text: "L'électricité solaire est moins chère que l'électricité du réseau. Tous les locataires en profitent directement." },
  { icon: Building2,  title: 'Valeur immobilière en hausse',   text: "Les bâtiments avec installations solaires sont plus attractifs pour les locataires et les acheteurs." },
  { icon: BarChart3,  title: "Prix de l'énergie stables",      text: "L'indépendance des hausses des prix de l'électricité protège les propriétaires et les locataires à long terme." },
];

const wirtschaftFaktoren = [
  { title: 'Autoconsommation',         text: "Plus l'autoconsommation est élevée, meilleur est le rendement. Dans un immeuble, une grande partie est consommée directement." },
  { title: "Taille de l'installation", text: "Les grandes installations sont plus efficaces et moins chères par kWp — effets d'échelle." },
  { title: 'Comportement de consommation', text: "Une consommation d'électricité régulière au cours de la journée augmente l'utilisation de l'énergie solaire." },
  { title: 'Structure RCP',            text: "Une bonne organisation et infrastructure de compteurs dans le bâtiment est déterminante." },
];

export default function SolaireImmeubleePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-10">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Solaire immeuble</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <Sun className="w-3.5 h-3.5" /> Pour les propriétaires immobiliers
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Installation solaire pour immeuble : coûts, RCP et avantages
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Les immeubles résidentiels offrent des conditions idéales pour le photovoltaïque : grandes surfaces de toit, nombreux utilisateurs et autoconsommation élevée grâce au modèle RCP. Cela les rend particulièrement{' '}
                <strong className="text-white">efficaces et économiques</strong>.
              </p>
              <Link
                href="/fr/demande"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
              >
                Demander un devis gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '20–120 kWp',          label: "Taille typique de l'installation" },
                { value: "40'000–150'000+",      label: 'CHF investissement' },
                { value: 'RCP',                  label: "Modèle d'utilisation commun" },
                { value: '60–75 %',              label: "Taux d'autoconsommation" },
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

        {/* ── RCP explainer ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Fonctionnement</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comment fonctionne une installation solaire dans un immeuble ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Dans un immeuble, l'électricité solaire est produite centralement puis distribuée aux résidents. La solution la plus répandue en Suisse est le{' '}
              <strong className="text-gray-800">regroupement pour la consommation propre (RCP)</strong>.
            </p>
            <div className="rounded-2xl bg-[#F97316]/5 border border-[#F97316]/20 p-6 space-y-3">
              <p className="font-bold text-gray-900 mb-2">Avec le RCP :</p>
              {[
                "L'électricité est utilisée directement dans le bâtiment",
                "Chaque logement a son propre compteur",
                "La facturation est interne — souvent moins chère que le réseau",
                "L'excédent d'électricité est injecté dans le réseau",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-haus-luftbild-3.png" alt="Immeuble avec installation solaire" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Calculator ── */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calculateur d'installation</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quelle taille doit avoir l'installation ?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                La taille optimale dépend de la consommation totale du bâtiment. Choisissez le nombre de logements pour obtenir une première orientation.
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 space-y-3">
                {sizeGuide.map((row) => (
                  <div key={row.label} className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-700">{row.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-[#F97316]">{row.kwp}</span>
                      <span className="text-xs text-gray-400 ml-2">/ {row.m2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <MehrfamilienhausRechner />
            </div>
          </div>
        </section>

        {/* ── Cost table ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Coûts</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Combien coûte une installation solaire pour un immeuble ?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Plus l'installation est grande, moins elle coûte <strong className="text-gray-800">par kWp</strong> — les effets d'échelle jouent un rôle particulièrement important pour les grands bâtiments.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-2 bg-gray-100 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Installation</span><span>Valeur indicative</span>
                </div>
                {costRows.map((row) => (
                  <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-200 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                    <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-installateur-dach-5.png" alt="Montage installation solaire immeuble" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Billing steps ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Facturation</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Comment l'électricité solaire est-elle facturée dans un immeuble ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '1', title: "Produire l'électricité solaire", text: "L'installation photovoltaïque sur le toit produit de l'électricité pendant la journée pour l'ensemble du bâtiment." },
              { step: '2', title: 'Distribuer en interne (RCP)',   text: "L'électricité est distribuée directement à tous les logements via le réseau interne du bâtiment." },
              { step: '3', title: 'Facturer de manière transparente', text: "Chaque logement ne paie que l'électricité solaire réellement consommée, via son sous-compteur." },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white font-bold text-sm flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rentabilité</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Pourquoi une installation solaire dans un immeuble est-elle rentable ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Capital investment ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Investissement</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Un immeuble avec photovoltaïque est-il un bon investissement ?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Oui, dans de nombreux cas. Une installation solaire peut générer des revenus supplémentaires, réduire les charges d'exploitation et accroître l'attractivité pour les locataires.
              </p>
              <div className="space-y-3">
                {[
                  "Vendre l'électricité aux locataires moins cher que le réseau",
                  "Réduire durablement les charges d'exploitation",
                  "Augmenter l'attractivité pour les locataires et les acheteurs",
                  "Augmenter la valeur immobilière à long terme",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/asset-haus-solar-ev-1.png" alt="Immeuble solaire investissement" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Economic factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Facteurs de rentabilité</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Quels facteurs influencent la rentabilité ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {wirtschaftFaktoren.map((f, i) => (
              <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F97316] text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Example ── */}
        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Exemple de calcul</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Exemple : installation solaire pour un immeuble
              </h2>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                {exampleRows.map((row, i) => (
                  <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-200' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                    <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                Grâce à la consommation commune, une grande partie de l'électricité peut être utilisée directement dans le bâtiment.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src="/images/asset-beratung-indoor-3.png" alt="Planification installation solaire immeuble" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur l'installation solaire pour immeuble
          </h2>
          <MehrfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Zap className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Comparer les offres et planifier l'installation de façon optimale
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Chaque immeuble est différent et nécessite une solution individuelle. Via PVPro, comparez gratuitement plusieurs offres et trouvez la meilleure solution pour votre bâtiment.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Demander un devis gratuit →
          </Link>
        </section>

      </div>
    </main>
  );
}
