import { Metadata } from 'next';
import Image from 'next/image';
import SolarForm from '@/components/SolarForm';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: '80% weniger Stromkosten mit Solarenergie | PVPro.ch',
  description: 'Von CHF 967 auf CHF 180 pro Monat. Prüfen Sie in 30 Sekunden, ob Ihr Dach für eine Solaranlage geeignet ist. Kostenlos und unverbindlich.',
  keywords: [
    'Stromkosten senken',
    'Solarenergie Schweiz',
    '80% weniger Stromkosten',
    'Solaranlage sparen',
    'Stromrechnung senken',
  ],
  alternates: {
    canonical: 'https://www.pvpro.ch/stromkosten-senken',
  },
  openGraph: {
    title: '80% weniger Stromkosten mit Solarenergie | PVPro.ch',
    description: 'Von CHF 967 auf CHF 180 pro Monat mit einer eigenen Solaranlage.',
    url: 'https://www.pvpro.ch/stromkosten-senken',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
    images: [
      {
        url: '/og-stromkosten.png',
        width: 1200,
        height: 630,
        alt: '80% weniger Stromkosten mit Solarenergie',
      },
    ],
  },
};

export default function StromkostenSenkenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pvpro.ch' },
              { '@type': 'ListItem', position: 2, name: 'Stromkosten senken', item: 'https://www.pvpro.ch/stromkosten-senken' },
            ],
          }),
        }}
      />

      <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/solar-house-hero.png"
            alt="Haus mit Solaranlage in den Schweizer Bergen"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight drop-shadow-lg">
                Bis zu 80% weniger Stromkosten für{' '}
                <span className="text-green-400">Ihr Zuhause.</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 font-medium drop-shadow-md">
                Mit einer eigenen Solaranlage
                <br />
                <span className="text-white/70">Von </span>
                <span className="text-red-400 font-bold">CHF 967</span>
                <span className="text-white/70"> auf nur </span>
                <span className="text-green-400 font-bold">CHF 180</span>
                <span className="text-white/70"> pro Monat</span>
              </p>

              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-5xl font-extrabold text-red-400 line-through decoration-red-500/50 decoration-[3px] drop-shadow-lg">CHF 967</span>
                <span className="text-3xl text-white/40 drop-shadow-lg">→</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-green-400 drop-shadow-lg">CHF 180</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-green-600 text-white font-extrabold text-xl sm:text-2xl px-5 py-2.5 rounded-xl shadow-lg shadow-green-600/30">
                  - 80%
                </span>
                <span className="text-green-400 font-semibold text-sm">+ CHF 200/Mt. für eingespeisten Strom</span>
              </div>

              <p className="text-[11px] text-white/30">
                Beispiel einer echten Stromrechnung. Die tatsächliche Ersparnis hängt vom Haus und Verbrauch ab.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <SolarForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Das Problem: Strompreise steigen jedes Jahr
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Die Strompreise in der Schweiz sind in den letzten Jahren um über 30% gestiegen. Viele Hausbesitzer zahlen jeden Monat mehr, ohne etwas dagegen tun zu können. Gleichzeitig produzieren immer mehr Schweizer Haushalte ihren eigenen Strom und sparen dabei Hunderte Franken pro Jahr.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: TrendingUp,
                title: 'Steigende Preise',
                text: 'Die Stromtarife steigen kontinuierlich. Was heute CHF 967 kostet, wird morgen noch teurer.',
              },
              {
                icon: Zap,
                title: 'Verpasste Einnahmen',
                text: 'Ohne Solaranlage verschenken Sie jeden Tag Geld, das Ihr eigenes Dach für Sie verdienen könnte.',
              },
              {
                icon: Shield,
                title: 'Keine Kontrolle',
                text: 'Als Stromkunde sind Sie den Preiserhöhungen Ihres Anbieters ausgeliefert.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              So funktioniert PVPro
            </h2>
            <p className="text-lg text-gray-600">
              In 3 einfachen Schritten zu tieferen Stromkosten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Dach prüfen',
                text: 'Beantworten Sie ein paar einfache Fragen zu Ihrem Haus und Dach. Dauert nur 30 Sekunden.',
              },
              {
                step: '2',
                title: 'Offerten erhalten',
                text: 'Geprüfte Installateure aus Ihrer Region erstellen Ihnen unverbindliche Angebote.',
              },
              {
                step: '3',
                title: 'Sparen ab Tag 1',
                text: 'Vergleichen Sie die Offerten, wählen Sie die beste Option und produzieren Sie Ihren eigenen Strom.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Warum Schweizer Hausbesitzer auf Solar umsteigen
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: TrendingUp,
                    title: 'Bis zu 80% tiefere Stromkosten',
                    text: 'Produzieren Sie Ihren eigenen Strom und reduzieren Sie Ihre monatliche Rechnung massiv.',
                  },
                  {
                    icon: Zap,
                    title: 'Geld verdienen mit Einspeisung',
                    text: 'Überschüssigen Strom speisen Sie ins Netz ein und erhalten dafür bis zu CHF 200 pro Monat.',
                  },
                  {
                    icon: Shield,
                    title: 'Schutz vor Preiserhöhungen',
                    text: 'Ihr eigener Strom bleibt immer gleich günstig, egal wie stark die Tarife steigen.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/team-roof-1.png"
                alt="Solarinstallation auf dem Dach"
                width={300}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover h-[250px]"
              />
              <Image
                src="/images/team-install-1.png"
                alt="Installateur bei der Arbeit"
                width={300}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover h-[250px]"
              />
              <Image
                src="/images/team-collage.png"
                alt="PVPro Team und Projekte"
                width={620}
                height={300}
                className="rounded-xl shadow-lg w-full object-cover h-[200px] col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Zahlen Sie auch zu viel für Strom?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Prüfen Sie jetzt kostenlos, ob Ihr Dach für eine Solaranlage geeignet ist und wie viel Sie sparen können.
          </p>
          <a
            href="#formular"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-green-600/20"
          >
            Jetzt Ersparnis berechnen
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-400">
            {['Kostenlos', 'Unverbindlich', '30 Sekunden'].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
