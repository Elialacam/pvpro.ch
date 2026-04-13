import Link from 'next/link';
import { ChevronRight, Calendar, Clock, CheckCircle2, XCircle, ArrowRight, AlertTriangle, Zap, TrendingUp } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centrale solaire de balcon en Suisse : autorisée, coûts et vaut-elle vraiment la peine ? | PVPro.ch',
  description: "Les mini-centrales solaires de balcon sont-elles autorisées en Suisse ? Coûts, règles et si une centrale de balcon vaut la peine — avec comparaison honnête à l'installation solaire.",
  alternates: { canonical: 'https://www.pvpro.ch/fr/blog/centrale-balcon-suisse' },
};

const comparisonRows = [
  { factor: 'Coûts', balkon: "300 – 1'200 CHF", solar: "20'000 – 35'000 CHF", winner: 'balkon' },
  { factor: 'Puissance', balkon: '300 – 800 Watt', solar: "8'000 – 12'000 Watt", winner: 'solar' },
  { factor: 'Production/an', balkon: '200 – 600 kWh', solar: "8'000 – 12'000 kWh", winner: 'solar' },
  { factor: 'Économie/an', balkon: '50 – 150 CHF', solar: "1'500 – 3'000 CHF", winner: 'solar' },
  { factor: 'Amortissement', balkon: '3 – 6 ans', solar: '8 – 12 ans', winner: 'balkon' },
  { factor: 'Plus-value', balkon: 'Aucune', solar: 'Oui (immobilier)', winner: 'solar' },
  { factor: 'Subventions', balkon: 'Aucune', solar: 'RU + cantonal', winner: 'solar' },
  { factor: 'Cible', balkon: 'Locataires', solar: 'Propriétaires', winner: null },
];

const faqsFr = [
  { q: "Les centrales solaires de balcon sont-elles autorisées en Suisse ?", a: "Oui, elles sont en principe autorisées, mais elles doivent être annoncées auprès du gestionnaire de réseau et respecter certaines limites de puissance." },
  { q: "Quelle amende risque-t-on en cas d'installation non déclarée ?", a: "En cas de violation, le gestionnaire de réseau peut prendre des mesures. Dans certains cas, l'installation peut être déconnectée ou retirée. Des questions de responsabilité peuvent également se poser." },
  { q: "Les centrales de balcon de 2000 Watt sont-elles autorisées ?", a: "En règle générale, non comme solution simple sur prise. Ces installations nécessitent une annonce spéciale, des adaptations techniques et éventuellement des autorisations." },
  { q: "Que se passe-t-il si je ne déclare pas ma centrale de balcon ?", a: "Vous enfreignez la réglementation et risquez que l'installation soit retirée ou limitée. Le gestionnaire de réseau peut prendre des mesures." },
  { q: "Combien de centrales de balcon puis-je exploiter ?", a: "Dans la plupart des cas, une seule installation par ménage est prévue afin d'éviter des problèmes de réseau. Plusieurs installations peuvent causer des problèmes d'injection." },
  { q: "Un accumulateur est-il soumis à obligation de déclaration ?", a: "Oui, les batteries de stockage doivent également être déclarées selon le système, car elles peuvent influencer le réseau électrique." },
  { q: "Un gestionnaire de réseau peut-il détecter ma centrale de balcon ?", a: "Oui, par des mesures et des profils de charge, l'injection peut être détectée. Les gestionnaires de réseau peuvent mesurer les changements dans le flux électrique et identifier des profils de charge inhabituels." },
  { q: "Jusqu'à quand les centrales de balcon sont-elles autorisées ?", a: "Elles sont actuellement autorisées dans le respect de la réglementation en vigueur. Des modifications sont toutefois possibles selon l'évolution de la législation." },
];

export default function CentraleBalconSuissePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero avec photo ── */}
      <section className="relative bg-[#0f1f3d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #F97316 0%, transparent 55%)' }} />
        <div className="relative max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex items-center gap-1.5 text-sm text-white/40 mb-8">
            <Link href="/fr" className="hover:text-white/70 transition-colors">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/fr/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Centrale solaire de balcon Suisse</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-0">
            <div className="pb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F97316]/20 text-orange-400 uppercase tracking-widest">Guide</span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Calendar className="w-3.5 h-3.5" /> 17 mars 2026
                </span>
                <span className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Clock className="w-3.5 h-3.5" /> 7 min. de lecture
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Centrale solaire de balcon en Suisse : ce qui est autorisé — et vaut-elle vraiment la peine ?
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Une centrale solaire de balcon semble séduisante. Mais combien d&apos;électricité produit-elle vraiment — et quand une installation solaire complète est-elle le choix bien meilleur ?
              </p>
            </div>
            <div className="relative h-80 lg:h-[440px] rounded-t-2xl overflow-hidden self-end">
              <img
                src="/images/balkonkraftwerk-schweiz.webp"
                alt="Centrale solaire de balcon en Suisse – Mini-installation sur balcon avec vue sur les Alpes"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Corps de l'article ── */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Contenu principal */}
          <article className="lg:col-span-2 space-y-14">

            {/* Intro */}
            <section>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                En Suisse, les centrales solaires de balcon sont de plus en plus populaires — surtout chez les locataires ou les personnes qui ne peuvent pas installer une grande installation solaire. Mais pour ceux qui possèdent leur propre maison, la question décisive se pose :
              </p>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 font-medium text-sm leading-relaxed">
                  Une centrale de balcon est-elle vraiment la meilleure solution — ou est-ce que je rate ainsi l&apos;économie bien plus grande d&apos;une installation solaire complète ?
                </p>
              </div>
            </section>

            {/* Qu'est-ce qu'une centrale de balcon ? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Qu&apos;est-ce qu&apos;une centrale solaire de balcon ?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Une centrale solaire de balcon est une mini-installation solaire pour usage personnel : typiquement 1–2 modules solaires d&apos;une puissance comprise entre 300 et 800 watts, raccordés via une prise normale. L&apos;électricité produite est consommée directement dans le foyer.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Modules', value: '1–2' },
                  { label: 'Puissance max.', value: '800 W' },
                  { label: 'Production/an', value: '200–600 kWh' },
                  { label: 'Économie/an', value: '50–150 CHF' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                    <p className="font-bold text-gray-900 text-sm">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Autorisées ? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Les centrales de balcon sont-elles autorisées en Suisse ?</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Oui — en principe autorisées, mais avec des règles claires. Beaucoup sous-estiment les démarches administratives.
              </p>
              <div className="space-y-3">
                {[
                  { ok: true, text: "L'installation doit être annoncée auprès du gestionnaire de réseau (généralement gratuit)" },
                  { ok: true, text: 'Les prescriptions de sécurité doivent être respectées' },
                  { ok: false, text: "Les installations de plus de 800 W ne sont pas simplement autorisées en plug-and-play" },
                  { ok: false, text: 'Les installations de 2000 W nécessitent des autorisations spéciales' },
                  { ok: false, text: 'Les installations non déclarées peuvent être déconnectées' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {item.ok
                      ? <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    }
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Production */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Combien d&apos;électricité produit une centrale de balcon ?</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Une centrale de balcon typique produit environ <strong>200–600 kWh par an</strong> — ce qui correspond à la consommation de base de quelques appareils (réfrigérateur, veille). Cela est loin de couvrir la majorité de la consommation électrique du foyer.
              </p>
              {/* Barres de comparaison visuelles */}
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 space-y-5">
                <p className="font-bold text-gray-900 text-sm mb-4">Comparaison : production annuelle</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Centrale de balcon (800 W)</span>
                    <span className="font-bold text-gray-800">jusqu&apos;à 600 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-gray-400" style={{ width: '5%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Installation solaire (10 kWc)</span>
                    <span className="font-bold text-[#F97316]">9&apos;000 – 11&apos;000 kWh</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-200">
                    <div className="h-4 rounded-full bg-[#F97316]" style={{ width: '90%' }} />
                  </div>
                </div>
                <p className="text-xs text-gray-400">Une installation solaire complète produit <strong>15–20× plus d&apos;électricité</strong> par an.</p>
              </div>
            </section>

            {/* Tableau de comparaison */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Centrale de balcon vs. installation solaire — la comparaison directe</h2>
              <p className="text-gray-500 text-sm mb-6">Pour les propriétaires, la différence est énorme.</p>
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-3 bg-gray-50 px-5 py-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <span>Facteur</span>
                  <span className="text-center">Centrale de balcon</span>
                  <span className="text-center text-[#F97316]">Installation solaire</span>
                </div>
                {comparisonRows.map((row) => (
                  <div key={row.factor} className="grid grid-cols-3 px-5 py-3.5 border-t border-gray-100 bg-white text-sm">
                    <span className="font-bold text-gray-800">{row.factor}</span>
                    <span className={`text-center ${row.winner === 'balkon' ? 'text-green-600 font-bold' : 'text-gray-500'}`}>{row.balkon}</span>
                    <span className={`text-center ${row.winner === 'solar' ? 'text-[#F97316] font-bold' : 'text-gray-500'}`}>{row.solar}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/20 p-4">
                <p className="text-sm font-bold text-gray-900 mb-1">Conclusion :</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Une centrale de balcon est un petit complément — une installation solaire est une <strong>vraie solution énergétique</strong>. Pour un propriétaire, une centrale de balcon laisse des milliers de francs d&apos;économies annuelles sur la table.
                </p>
              </div>
            </section>

            {/* Quand quoi ? */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Quand une installation solaire est-elle le meilleur choix ?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
                  <p className="font-bold text-gray-500 text-sm mb-4 uppercase tracking-wide">Centrale de balcon utile si…</p>
                  <div className="space-y-2">
                    {['Vous êtes locataire', 'Pas de surface de toit propre disponible', 'Installation minimale souhaitée', 'Première découverte de l\'énergie solaire'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[#F97316]/30 p-6 bg-orange-50 shadow-sm">
                  <p className="font-bold text-[#F97316] text-sm mb-4 uppercase tracking-wide">Installation solaire utile si…</p>
                  <div className="space-y-2">
                    {['Vous êtes propriétaire d\'une maison', 'Vous souhaitez réduire significativement vos coûts d\'énergie', 'Vous visez l\'indépendance à long terme', 'Vous voulez augmenter la valeur de votre bien immobilier'].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#F97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Alternative */}
            <section className="rounded-3xl bg-[#0f1f3d] p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #F97316 0%, transparent 55%)' }} />
              <div className="relative">
                <TrendingUp className="w-8 h-8 text-[#F97316] mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">Alternative : installation solaire plutôt que centrale de balcon</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Beaucoup commencent avec l&apos;idée d&apos;une centrale de balcon et réalisent ensuite : <strong className="text-white">L&apos;effet est trop faible.</strong>
                </p>
                <p className="text-white/70 leading-relaxed mb-6">
                  Une installation solaire complète vous économise annuellement <strong className="text-white">1&apos;500 – 3&apos;000 CHF</strong> — soit 10–20× plus qu&apos;une centrale de balcon. Et avec la rémunération unique (RU) et les subventions cantonales, les coûts d&apos;acquisition diminuent considérablement.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: Zap, label: '15–20×', sub: 'plus de production d\'énergie' },
                    { icon: TrendingUp, label: '10–20×', sub: 'plus d\'économies/an' },
                    { icon: CheckCircle2, label: '100%', sub: 'subventions disponibles' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
                        <Icon className="w-5 h-5 text-[#F97316] mx-auto mb-1" />
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-white/50 text-xs">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href="/fr/demander-offre-panneau-solaire"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Demander une offre gratuite <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Questions fréquentes sur la centrale de balcon en Suisse
              </h2>
              <div className="rounded-2xl border border-gray-100 px-6 shadow-sm bg-white">
                {faqsFr.map((f, i) => (
                  <details key={i} className="group border-b border-gray-100 last:border-0">
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none select-none">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{f.q}</span>
                      <span className="text-[#F97316] flex-shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white mb-6">
                <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-4">En un coup d&apos;œil</p>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Autorisée en CH ?', value: 'Oui, avec déclaration' },
                    { label: 'Puissance max.', value: '800 Watt (plug-and-play)' },
                    { label: 'Coûts', value: "300 – 1'200 CHF" },
                    { label: 'Production/an', value: '200 – 600 kWh' },
                    { label: 'Économie/an', value: '50 – 150 CHF' },
                    { label: 'Obligation de déclaration', value: 'Oui, auprès du gestionnaire réseau' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2 py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="font-bold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA sidebar */}
              <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                <Zap className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
                <p className="font-bold text-gray-900 text-base mb-2">Propriétaire ?</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Une installation solaire complète vous économise 10× plus qu&apos;une centrale de balcon.
                </p>
                <Link
                  href="/fr/demander-offre-panneau-solaire"
                  className="block w-full py-3 rounded-full font-bold text-white text-sm hover:opacity-90 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
                >
                  Obtenir une offre maintenant →
                </Link>
              </div>

              {/* Articles liés */}
              <div className="rounded-2xl border border-gray-100 p-5 shadow-sm bg-white mt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Autres articles</p>
                <div className="space-y-3">
                  {[
                    { href: '/fr/blog/retour-investissement-solaire-suisse', title: "ROI d'une installation solaire : quand l'investissement est-il rentable ?" },
                    { href: '/fr/blog/subventions-photovoltaiques-2026', title: 'Subventions photovoltaïques 2026 en Suisse' },
                    { href: '/fr/blog/batterie-stockage-solaire-suisse', title: "Batterie de stockage : l'investissement vaut-il la peine ?" },
                  ].map((a) => (
                    <Link key={a.href} href={a.href} className="block text-sm text-gray-700 hover:text-[#F97316] transition-colors leading-snug border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                      → {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
