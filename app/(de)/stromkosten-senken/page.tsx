import { Metadata } from 'next';
import SolarForm from '@/components/SolarForm';
import { CheckCircle, ArrowRight, TrendingDown, Zap, Shield, Clock } from 'lucide-react';

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

      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/30 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Bis zu 80% weniger{' '}
                <span className="text-green-400">Stromkosten.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Mit einer eigenen Solaranlage.
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-md">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Vorher</p>
                    <p className="text-2xl sm:text-3xl font-bold text-red-400 line-through decoration-red-500/60">CHF 967</p>
                  </div>
                  <div className="text-2xl text-gray-500">→</div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Jetzt</p>
                    <p className="text-2xl sm:text-3xl font-bold text-green-400">CHF 180</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-green-600 text-white font-bold text-sm px-3 py-1.5 rounded-full whitespace-nowrap">
                      -80%
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                  <span className="text-green-400 font-semibold text-sm">+ CHF 200/Mt.</span>
                  <span className="text-gray-400 text-sm">für eingespeisten Strom</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 max-w-md">
                Beispiel einer echten Stromrechnung. Die tatsächliche Ersparnis hängt vom Haus und Verbrauch ab.
              </p>
            </div>

            <div className="lg:sticky lg:top-24 flex flex-col items-center">
              <SolarForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Warum Hausbesitzer auf Solar umsteigen
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingDown,
                title: 'Stromkosten senken',
                text: 'Produzieren Sie Ihren eigenen Strom und reduzieren Sie Ihre monatliche Rechnung massiv.',
                highlight: 'Bis zu 80% sparen',
              },
              {
                icon: Zap,
                title: 'Geld verdienen',
                text: 'Überschüssigen Strom speisen Sie ins Netz ein und erhalten dafür eine Vergütung.',
                highlight: '+ CHF 200/Mt.',
              },
              {
                icon: Shield,
                title: 'Unabhängig werden',
                text: 'Schützen Sie sich vor steigenden Strompreisen mit Ihrer eigenen Energiequelle.',
                highlight: 'Preissicherheit',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <span className="inline-block bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                  {item.highlight}
                </span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              In 3 Schritten zur Solaranlage
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Dach prüfen',
                text: 'Beantworten Sie 5 kurze Fragen. Dauert weniger als 30 Sekunden.',
                time: '30 Sek.',
              },
              {
                step: '2',
                title: 'Offerten erhalten',
                text: 'Geprüfte Installateure aus Ihrer Region erstellen Ihnen unverbindliche Angebote.',
                time: '48 Std.',
              },
              {
                step: '3',
                title: 'Sparen',
                text: 'Vergleichen Sie die Offerten und starten Sie mit der besten Option.',
                time: 'Ab Tag 1',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
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

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Zahlen Sie auch zu viel für Strom?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Prüfen Sie jetzt kostenlos, ob Ihr Dach für eine Solaranlage geeignet ist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="#formular"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Jetzt Ersparnis berechnen
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              {['Kostenlos', 'Unverbindlich', '30 Sekunden'].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
