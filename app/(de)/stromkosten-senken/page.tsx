import { Metadata } from 'next';
import Image from 'next/image';
import SolarForm from '@/components/SolarForm';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
    canonical: 'https://pvpro.ch/stromkosten-senken',
  },
  openGraph: {
    title: '80% weniger Stromkosten mit Solarenergie | PVPro.ch',
    description: 'Von CHF 967 auf CHF 180 pro Monat mit einer eigenen Solaranlage.',
    url: 'https://pvpro.ch/stromkosten-senken',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pvpro.ch' },
              { '@type': 'ListItem', position: 2, name: 'Stromkosten senken', item: 'https://pvpro.ch/stromkosten-senken' },
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
                80% WENIGER
                <br />
                <span className="text-green-400">STROMKOSTEN</span>
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

      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Zahlen Sie auch zu viel für Strom?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10 text-sm sm:text-base">
            {[
              'Bis zu 80% Stromkosten sparen',
              'Geld verdienen mit Einspeisung',
              'Unabhängig von steigenden Preisen',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="#formular"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-green-600/20"
          >
            Jetzt Ersparnis berechnen
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-gray-500 text-sm">Kostenlos & unverbindlich in 30 Sekunden</p>
        </div>
      </section>
    </>
  );
}
