import Link from 'next/link';
import { ChevronRight, Sun, CheckCircle2, Home, Ruler, Cpu, Wrench, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import EinfamilienhausRechner, { EinfamilienhausFaq } from '@/components/EinfamilienhausRechner';

export const metadata: Metadata = {
  title: 'Installation solaire maison individuelle Suisse : coûts, taille et avantages | PVPro.ch',
  description: 'Combien coûte une installation solaire pour une maison individuelle en Suisse ? Prix, taille, subventions et conseils expliqués simplement. Comparez les offres maintenant.',
  alternates: {
    canonical: 'https://pvpro.ch/fr/solaire-maison-individuelle',
    languages: {
      'de-CH': 'https://pvpro.ch/solaranlage-einfamilienhaus',
      'fr-CH': 'https://pvpro.ch/fr/solaire-maison-individuelle',
      'en-CH': 'https://pvpro.ch/en/solar-detached-house',
      'it-CH': 'https://pvpro.ch/it/solare-casa-unifamiliare',
      'x-default': 'https://pvpro.ch/solaranlage-einfamilienhaus',
    },
  },
};

const costRows = [
  { size: 'Petite installation (6–8 kWp)',  price: "env. 20'000 – 25'000 CHF", highlight: false },
  { size: 'Standard (8–10 kWp)',            price: "env. 25'000 – 30'000 CHF", highlight: true },
  { size: 'Grande installation (10–15 kWp)', price: "env. 30'000 – 35'000 CHF", highlight: false },
];

const exampleRows = [
  { label: 'Surface de toit',   value: '60 m²',                        highlight: false },
  { label: 'Puissance',         value: '10 kWp',                       highlight: false },
  { label: 'Coûts',             value: "env. 25'000 – 30'000 CHF",    highlight: false },
  { label: 'Subvention RU',     value: "env. 3'600 CHF",              highlight: false },
  { label: 'Coûts effectifs',   value: "env. 20'000 – 26'000 CHF",    highlight: true },
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
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
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
                Une installation solaire réduit vos coûts d'électricité et vous rend plus indépendant. Typiquement, une maison individuelle est équipée de <strong className="text-white">8–12 kWp</strong> — soit environ <strong className="text-white">50–70 m²</strong> de surface de toit.
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
                { value: '8–12 kWp',           label: "Taille typique de l'installation" },
                { value: "25'000–30'000",       label: 'CHF investissement' },
                { value: "9'000–11'000",        label: 'kWh production/an' },
                { value: '25–30 ans',           label: 'Durée de vie' },
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
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Calculateur de taille</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quelle taille doit avoir votre installation solaire ?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                La taille optimale dépend de la consommation électrique. En règle générale :{' '}
                <strong className="text-gray-800">1'000 kWh de consommation → env. 1–2 kWp d'installation.</strong>
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
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Coûts</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Combien coûte une installation solaire pour une maison individuelle ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Pour une installation typique de 10 kWp avec environ 50 m² de surface de toit, des investissements d'environ{' '}
              <strong className="text-gray-800">25'000 à 30'000 CHF</strong> sont réalistes.
              Après subventions et déductions fiscales, le prix effectif peut être nettement inférieur.
            </p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Taille installation</span><span>Valeur indicative</span>
              </div>
              {costRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-2 px-5 py-4 border-t border-gray-100 ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className="font-bold text-gray-800 text-sm">{row.size}</span>
                  <span className={`font-bold text-sm ${row.highlight ? 'text-[#F97316]' : 'text-gray-700'}`}>{row.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-installateur-dach-1.png" alt="Installation solaire maison individuelle Suisse" className="w-full h-80 object-cover" />
          </div>
        </section>

        {/* ── Production ── */}
        <section className="rounded-3xl bg-[#0f1f3d] p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Production d'électricité</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Quelle quantité d'électricité produit une installation solaire ?
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Une installation typique sur une maison individuelle produit{' '}
                <strong className="text-white">env. 9'000 – 11'000 kWh par an</strong> — soit la majeure partie des besoins électriques d'un foyer.
              </p>
              {[
                { label: 'Installation 8 kWp',  value: "7'200 – 8'800 kWh/an",   pct: 65 },
                { label: 'Installation 10 kWp', value: "9'000 – 11'000 kWh/an",  pct: 80 },
                { label: 'Installation 12 kWp', value: "10'800 – 13'200 kWh/an", pct: 95 },
              ].map((row) => (
                <div key={row.label} className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-white font-bold">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-[#F97316]" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/asset-haus-luftbild-1.png" alt="Maison individuelle avec installation solaire" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* ── Lohnt sich ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img src="/images/asset-beratung-indoor-2.png" alt="Conseil installation solaire" className="w-full h-80 object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Rentabilité</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Une installation solaire pour maison individuelle vaut-elle la peine ?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Oui, dans la plupart des cas, une installation photovoltaïque est rentable à long terme. Grâce à l'autoconsommation et aux subventions, l'installation s'amortit au fil des années.
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5" />
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
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Subventions</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Subventions pour installations solaires en Suisse
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Pour une installation de 10 kWp, la subvention fédérale correspond à environ <strong className="text-gray-800">3'600 CHF</strong>. S'y ajoutent des subventions cantonales et des déductions fiscales.
              </p>
              <div className="space-y-3">
                {[
                  "Rémunération unique (RU) fédérale : env. 360 CHF/kWp",
                  "Programmes de subventions cantonaux supplémentaires",
                  "Déductions fiscales au niveau fédéral",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fr/subventions-solaires" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#F97316] hover:underline">
                Voir toutes les subventions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Investissement (10 kWp)',  value: "25'000 – 30'000 CHF", color: 'text-gray-800',   highlight: false },
                { label: 'Subvention fédérale RU',  value: "– 3'600 CHF",          color: 'text-green-600',  highlight: false },
                { label: 'Subvention cantonale',    value: 'variable',              color: 'text-green-600',  highlight: false },
                { label: 'Déductions fiscales',     value: 'variable',              color: 'text-green-600',  highlight: false },
                { label: 'Coûts effectifs',         value: "env. 20'000 – 26'000 CHF", color: 'text-[#F97316]', highlight: true },
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
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Stockage batterie</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Avec ou sans stockage batterie ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white">
              <p className="font-bold text-gray-900 text-lg mb-1">Sans stockage</p>
              <p className="text-sm text-gray-400 mb-4">Option économique</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Investissement initial moins élevé</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Amortissement plus rapide</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" /><span>Autoconsommation env. 25–40%</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#F97316]/30 p-6 shadow-sm bg-orange-50">
              <p className="font-bold text-gray-900 text-lg mb-1">Avec stockage batterie</p>
              <p className="text-sm text-[#F97316] font-semibold mb-4">Recommandé pour une consommation élevée</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Autoconsommation jusqu'à 50–65%</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Utiliser l'électricité aussi le soir</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0" /><span>Plus grande indépendance</span></div>
              </div>
            </div>
          </div>
          <Link href="/fr/solaire-avec-batterie" className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-[#F97316] hover:underline">
            En savoir plus sur le stockage batterie <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ── Factors ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Facteurs d'influence</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Quels facteurs influencent les coûts ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#F97316]" />
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
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">Exemple de calcul</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Exemple : installation solaire pour une maison individuelle</h2>
          <div className="max-w-lg">
            <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {exampleRows.map((row, i) => (
                <div key={row.label} className={`flex justify-between items-center px-6 py-4 ${i !== 0 ? 'border-t border-gray-100' : ''} ${row.highlight ? 'bg-orange-50' : 'bg-white'}`}>
                  <span className={`text-sm ${row.highlight ? 'font-bold text-gray-900' : 'text-gray-600'}`}>{row.label}</span>
                  <span className={`font-bold ${row.highlight ? 'text-[#F97316] text-base' : 'text-gray-900 text-sm'}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Questions fréquentes sur l'installation solaire pour maison individuelle
          </h2>
          <EinfamilienhausFaq />
        </section>

        {/* ── CTA ── */}
        <section className="rounded-3xl p-10 sm:p-14 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <Sun className="w-10 h-10 text-[#F97316] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Comparer les offres et optimiser les coûts
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Les prix des installations solaires varient considérablement selon les prestataires. Via PVPro, obtenez gratuitement jusqu'à 3 devis d'installateurs certifiés dans votre région.
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
