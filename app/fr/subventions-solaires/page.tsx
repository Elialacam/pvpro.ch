import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import FoerderRechner from '@/components/FoerderRechner';

export const metadata: Metadata = {
  title: 'Subventions solaires en Suisse 2026 | PVPro.ch',
  description: 'Rétribution unique (RU), programmes cantonaux et déductions fiscales pour les installations photovoltaïques en Suisse. Calculez votre subvention maintenant.',
  alternates: { canonical: 'https://www.pvpro.ch/fr/subventions-solaires' },
};

const tableRows = [
  { size: '5 kWp',  foerderung: "env. 1'800 CHF", gesamtkosten: "env. 13'000 CHF", effektiv: "env. 11'200 CHF" },
  { size: '8 kWp',  foerderung: "env. 2'800 CHF", gesamtkosten: "env. 20'800 CHF", effektiv: "env. 18'000 CHF", highlight: true },
  { size: '10 kWp', foerderung: "env. 3'500 CHF", gesamtkosten: "env. 25'000 CHF", effektiv: "env. 21'500 CHF" },
];

const processSteps = [
  { n: '1', title: 'Installation', text: 'Faire installer l\'installation photovoltaïque par un installateur certifié.' },
  { n: '2', title: 'Enregistrement', text: 'Enregistrer l\'installation auprès de Pronovo (pronovo.ch) — l\'installateur s\'en charge souvent pour vous.' },
  { n: '3', title: 'Vérification', text: 'Les autorités compétentes vérifient l\'installation et les documents.' },
  { n: '4', title: 'Versement de la RU', text: 'La rétribution unique est généralement versée quelques mois après l\'enregistrement.' },
];

export default function SubventionsSolairesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1117 0%, #1a2236 100%)' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero-solar-panels.webp" alt="Installation solaire Suisse" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-10">
            <Link href="/fr" className="hover:text-gray-300 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-300 font-medium">Subventions solaires</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                Aides de l'État 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Subventions pour<br />les installations<br />solaires en Suisse
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                La Confédération soutient le développement du photovoltaïque avec la <strong className="text-white">rétribution unique (RU)</strong>. Elle réduit directement vos coûts d'investissement et rend l'énergie solaire économiquement attractive.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '300–400', unit: 'CHF/kWp', label: 'Subvention' },
                  { value: '10–15',   unit: 'ans',      label: 'Amortissement' },
                  { value: '30%',     unit: 'rabais',   label: 'Investissement' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-orange-400 font-semibold">{s.unit}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div><FoerderRechner /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Rétribution unique (RU)</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">Qu'est-ce que la rétribution unique ?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                La rétribution unique est la principale aide fédérale pour les installations photovoltaïques en Suisse. Elle est fournie par la Confédération et gérée par <strong>Pronovo</strong>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Vous recevez le paiement <strong>une seule fois</strong> après l'installation et l'enregistrement de votre système — aucune demande annuelle, aucune charge administrative.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl p-5 border-2 border-orange-100" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">KLEIV</p>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">Petite rétribution unique</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Pour les petites installations — le plus souvent utilisé pour les maisons individuelles privées.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-orange-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />Idéal pour les particuliers
                  </div>
                </div>
                <div className="rounded-2xl p-5 border border-gray-100" style={{ background: '#f9fafb' }}>
                  <p className="font-bold text-gray-900 text-lg mb-1">GREIV</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Grande rétribution unique</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Pour les grandes installations — p.ex. immeubles résidentiels ou commerces.</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 font-semibold">
                    <CheckCircle className="w-4 h-4" />Pour les grandes installations
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/blog-2.png" alt="Subvention solaire Suisse" width={700} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Aperçu des subventions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">Quel est le montant de la subvention ?</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              La subvention est typiquement de <strong className="text-gray-800">300–400 CHF par kWp</strong> installé. Plus l'installation est grande, plus le montant est élevé.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-4 gap-0" style={{ background: 'linear-gradient(135deg, #1a2236, #0d1117)' }}>
                {['Taille installation', 'Subvention (RU)', 'Coût total', 'Coût effectif'].map(h => (
                  <div key={h} className="px-5 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">{h}</div>
                ))}
              </div>
              {tableRows.map((row) => (
                <div key={row.size} className={`grid grid-cols-4 gap-0 border-t transition-colors ${row.highlight ? 'border-orange-100' : 'border-gray-100'}`}
                  style={row.highlight ? { background: 'linear-gradient(135deg, #fff7ed, #fff5eb)' } : { background: '#fff' }}>
                  <div className="px-5 py-5 font-bold text-gray-900 flex items-center gap-2">
                    {row.highlight && <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Populaire</span>}
                    {row.size}
                  </div>
                  <div className="px-5 py-5 font-bold text-[#F97316]">{row.foerderung}</div>
                  <div className="px-5 py-5 text-gray-600">{row.gesamtkosten}</div>
                  <div className="px-5 py-5 font-bold text-green-600">{row.effektiv}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-4 flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5" />Valeurs indicatives. Le montant exact dépend de la structure de subvention actuelle et de la taille de l'installation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2236)' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Aides supplémentaires</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Programmes cantonaux</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                En plus de l'aide fédérale, de nombreux cantons proposent des programmes supplémentaires. Les subventions disponibles varient d'un canton à l'autre.
              </p>
              <div className="flex flex-col gap-3">
                {['Batteries de stockage pour installations solaires', 'Systèmes d\'augmentation de l\'autoconsommation', 'Technique du bâtiment économe en énergie'].map(m => (
                  <div key={m} className="flex items-center gap-3 rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{m}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">Procédure</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Comment obtenir la subvention ?</h2>
              <div className="flex flex-col gap-0">
                {processSteps.map((step, i) => (
                  <div key={step.n} className="flex gap-5 pb-8 relative">
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 w-0.5 h-full" style={{ background: 'rgba(249,115,22,0.2)' }} />
                    )}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm relative z-10" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>{step.n}</div>
                    <div className="pt-1">
                      <p className="font-bold text-white mb-1">{step.title}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: '#f9fafb' }}>
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="rounded-3xl p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Profitez maintenant</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Optimiser vos subventions ?</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Nos installateurs partenaires connaissent tous les programmes de subventions actuels et s'occupent des démarches — vous n'avez rien à faire.
            </p>
            <Link href="/fr/demande" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
              Obtenir un devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
