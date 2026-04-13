import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos – PVPro.ch | Plateforme solaire suisse indépendante',
  description: "Découvrez PVPro.ch – la plateforme suisse indépendante qui met en relation les propriétaires avec des installateurs photovoltaïques certifiés.",
  alternates: {
    canonical: 'https://www.pvpro.ch/fr/a-propos',
    languages: {
      'de-CH': 'https://www.pvpro.ch/ueber-uns',
      'fr-CH': 'https://www.pvpro.ch/fr/a-propos',
      'en-CH': 'https://www.pvpro.ch/en/about-us',
      'it-CH': 'https://www.pvpro.ch/it/chi-siamo',
      'x-default': 'https://www.pvpro.ch/ueber-uns',
    },
  },
};

const values = [
  {
    icon: Shield,
    title: 'Indépendance',
    text: "Nous ne sommes liés à aucun installateur. Nos recommandations se basent exclusivement sur la qualité, le prix et les évaluations des clients.",
  },
  {
    icon: Users,
    title: 'Partenaires certifiés',
    text: "Chaque installateur de notre réseau fait l'objet d'une vérification rigoureuse : certificats, références, assurances et avis clients.",
  },
  {
    icon: Star,
    title: 'Transparence',
    text: "Aucun frais caché, aucun engagement. Vous obtenez des prix réels d'installateurs réels dans votre région.",
  },
];

const stats = [
  { value: "10'000+", label: 'Clients satisfaits' },
  { value: '500+',    label: 'Installateurs certifiés' },
  { value: '15+',     label: "Années d'expérience" },
  { value: '26',      label: 'Cantons suisses' },
];

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/fr" className="hover:text-gray-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">À propos</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Notre histoire</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              La plateforme solaire suisse indépendante
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              PVPro.ch a été fondé avec une mission claire : aider les propriétaires suisses à trouver la meilleure installation solaire au meilleur prix — simplement, en toute transparence et gratuitement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dans un marché souvent peu transparent et difficile à comparer, nous apportons de la clarté. Nous vous mettons en relation avec jusqu'à 3 installateurs certifiés de votre région et laissons les offres parler d'elles-mêmes.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/team-new.png"
              alt="L'équipe PVPro"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
              <p className="text-3xl sm:text-4xl font-bold text-[#F97316] mb-2">{s.value}</p>
              <p className="text-sm text-gray-600 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Notre mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Nous rendons l'énergie solaire accessible à tous
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Passer à l'énergie solaire est l'un des meilleurs investissements qu'un propriétaire puisse faire. Mais le chemin pour y arriver est souvent compliqué. PVPro rend cette démarche simple, rapide et sécurisée.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
                    <Icon className="w-6 h-6 text-[#F97316]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How we work */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="/images/hero-family-solar.webp"
              alt="Famille avec installation solaire"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Comment nous travaillons</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Vos intérêts d'abord
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { title: 'Service gratuit', text: "Notre service est 100% gratuit pour les propriétaires. Nous nous finançons exclusivement par les commissions des installateurs — sans surcoût pour vous." },
                { title: 'Aucun engagement', text: "Vous décidez si et quelle offre vous acceptez. Aucune pression, aucune quantité minimale de commande, aucune pénalité contractuelle." },
                { title: 'Qualité vérifiée', text: "Nous vérifions chaque installateur avant son admission dans le réseau. Certificats, références, justificatif d'assurance et évaluations clients sont obligatoires." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="flex flex-col gap-4 text-sm max-w-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Adresse</p>
                <p className="font-semibold text-gray-800">Via Santi Pietro e Paolo 16<br />6953 Lugaggia, Suisse</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">E-mail</p>
                <a href="mailto:anfrage@pvpro.ch" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">anfrage@pvpro.ch</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F97316] flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Téléphone</p>
                <a href="tel:+41779770750" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">+41 77 977 07 50</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Prêt pour votre installation solaire ?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Demandez maintenant gratuitement et sans engagement jusqu'à 3 devis.
          </p>
          <Link
            href="/fr/demande"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Demander un devis gratuit →
          </Link>
        </div>

      </div>
    </main>
  );
}
