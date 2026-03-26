import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Shield, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns – PVPro.ch | Schweizer Solaranlage-Vergleichsplattform',
  description: 'Erfahren Sie mehr über PVPro.ch – die unabhängige Schweizer Plattform, die Hausbesitzer mit geprüften Photovoltaik-Installateuren verbindet.',
  alternates: {
    canonical: 'https://pvpro.ch/ueber-uns',
    languages: {
      'de-CH': 'https://pvpro.ch/ueber-uns',
      'fr-CH': 'https://pvpro.ch/fr/a-propos',
      'en-CH': 'https://pvpro.ch/en/about-us',
      'it-CH': 'https://pvpro.ch/it/chi-siamo',
      'x-default': 'https://pvpro.ch/ueber-uns',
    },
  },
};

const values = [
  {
    icon: Shield,
    title: 'Unabhängigkeit',
    text: 'Wir sind keinem Installateur verpflichtet. Unsere Empfehlungen basieren ausschliesslich auf Qualität, Preis und Kundenbewertungen.',
  },
  {
    icon: Users,
    title: 'Geprüfte Partner',
    text: 'Jeder Installateur in unserem Netzwerk durchläuft eine sorgfältige Prüfung: Zertifikate, Referenzen, Versicherungen und Kundenfeedback.',
  },
  {
    icon: Star,
    title: 'Transparenz',
    text: 'Keine versteckten Kosten, keine Verpflichtungen. Sie erhalten echte Preise von echten Installateuren in Ihrer Region.',
  },
];

const stats = [
  { value: '10\'000+', label: 'Zufriedene Kunden' },
  { value: '500+',    label: 'Zertifizierte Installateure' },
  { value: '15+',     label: 'Jahre Erfahrung' },
  { value: '26',      label: 'Schweizer Kantone' },
];

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-700 font-medium">Über uns</span>
        </nav>

        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Unsere Geschichte</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Die unabhängige Schweizer Solar­plattform
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              PVPro.ch wurde mit einer klaren Mission gegründet: Schweizer Hausbesitzer dabei zu unterstützen, die beste Solaranlage zum besten Preis zu finden — einfach, transparent und kostenlos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              In einem Markt, der oft undurchsichtig und schwer vergleichbar ist, schaffen wir Klarheit. Wir verbinden Sie mit bis zu 3 geprüften Installateuren aus Ihrer Region und lassen die Angebote für sich sprechen.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/team-new.png"
              alt="Das PVPro Team"
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
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Unsere Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
              Wir machen Solarenergie zugänglich für alle
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Der Wechsel zu Solarenergie ist eine der besten Investitionen, die ein Hausbesitzer tätigen kann. Aber der Weg dorthin ist oft kompliziert. PVPro macht diesen Schritt einfach, schnell und sicher.
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
              src="/images/hero-family-solar.png"
              alt="Familie mit Solaranlage"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-[#F97316] uppercase tracking-widest mb-3">Wie wir arbeiten</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Ihr Interesse kommt zuerst
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { title: 'Kostenloser Service', text: 'Unser Service ist 100% kostenlos für Hausbesitzer. Wir finanzieren uns ausschliesslich durch Provisionen der Installateure — ohne Aufpreis für Sie.' },
                { title: 'Keine Verpflichtungen', text: 'Sie entscheiden, ob und welches Angebot Sie annehmen. Kein Druck, keine Mindestbestellmenge, keine Vertragsstrafe.' },
                { title: 'Geprüfte Qualität', text: 'Wir prüfen jeden Installateur vor der Aufnahme ins Netzwerk. Zertifikate, Referenzen, Versicherungsnachweis und Kundenbewertungen sind Pflicht.' },
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

        {/* Company info */}
        <div className="rounded-2xl border border-gray-100 p-8 sm:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Kontakt</h2>
          <div className="flex flex-col gap-4 text-sm max-w-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F97316] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Adresse</p>
                  <p className="font-semibold text-gray-800">Via Santi Pietro e Paolo 16<br />6953 Lugaggia, Schweiz</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">E-Mail</p>
                  <a href="mailto:anfrage@pvpro.ch" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">anfrage@pvpro.ch</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Telefon</p>
                  <a href="tel:+41779770750" className="font-semibold text-gray-800 hover:text-[#F97316] transition-colors">+41 77 977 07 50</a>
                </div>
              </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #fff7ed, #ffedd5)' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Bereit für Ihre Solaranlage?</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Fordern Sie jetzt kostenlos und unverbindlich bis zu 3 Offerten an.
          </p>
          <Link
            href="/anfrage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #fb923c, #F97316)' }}
          >
            Kostenlose Offerte anfordern →
          </Link>
        </div>

      </div>
    </main>
  );
}
