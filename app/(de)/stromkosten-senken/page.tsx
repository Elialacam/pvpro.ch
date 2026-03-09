import { Metadata } from 'next';
import SolarForm from '@/components/SolarForm';
import { CheckCircle, TrendingUp, Sun, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stromkosten mit Solarenergie reduzieren | PVPro.ch',
  description: 'Stromkosten deutlich senken mit einer eigenen Solaranlage. Prüfen Sie in 30 Sekunden, ob Ihr Dach geeignet ist. Kostenlos und unverbindlich.',
  keywords: [
    'Stromkosten senken',
    'Solarenergie Schweiz',
    'Stromkosten reduzieren',
    'eigener Strom produzieren',
    'Solaranlage Einfamilienhaus',
    'Stromrechnung senken',
  ],
  alternates: {
    canonical: 'https://pvpro.ch/stromkosten-senken',
  },
  openGraph: {
    title: 'Stromkosten mit Solarenergie reduzieren | PVPro.ch',
    description: 'Produzieren Sie Ihren eigenen Strom und senken Sie Ihre Stromrechnung deutlich.',
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Stromkosten mit Solarenergie{' '}
                <span className="text-primary">deutlich reduzieren.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Viele Hausbesitzer in der Schweiz produzieren bereits ihren eigenen Strom. Prüfen Sie in weniger als 30 Sekunden, ob Ihr Dach dafür geeignet ist.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Stromkosten deutlich reduzieren',
                  'Eigenen Strom produzieren',
                  'Kostenlos & unverbindlich prüfen',
                  'Ergebnis in 30 Sekunden',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24 flex flex-col items-center">
              <SolarForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-7 h-7 text-red-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Stromkosten steigen
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Die Strompreise in der Schweiz sind in den letzten Jahren deutlich gestiegen.
            </p>
            <p>
              Viele Hausbesitzer zahlen jeden Monat mehr für Energie und suchen nach Möglichkeiten, ihre Stromkosten langfristig zu senken.
            </p>
            <p>
              Eine Lösung, die immer mehr Haushalte nutzen, ist eine eigene Solaranlage.
            </p>
            <p>
              Damit kann ein Haus einen Teil seines Stroms selbst produzieren und die Stromrechnung deutlich reduzieren.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Eigenen Strom produzieren
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mit einer Solaranlage wird das Dach eines Hauses zu einer eigenen Energiequelle.
                </p>
                <p>
                  Ein Teil des Stroms, den Sie täglich nutzen, kann direkt auf Ihrem eigenen Dach produziert werden.
                </p>
                <p>
                  Das kann helfen, die Abhängigkeit vom Stromanbieter zu reduzieren und langfristig Kosten zu sparen.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                {[
                  { icon: Zap, label: 'Eigener Strom vom Dach', desc: 'Produzieren Sie einen Teil Ihres täglichen Strombedarfs selbst.' },
                  { icon: TrendingUp, label: 'Weniger Abhängigkeit', desc: 'Reduzieren Sie Ihre Abhängigkeit vom Stromanbieter.' },
                  { icon: Sun, label: 'Langfristig sparen', desc: 'Senken Sie Ihre Stromrechnung über Jahre hinweg.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Prüfen Sie Ihr Dach
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Der erste Schritt ist herauszufinden, ob Ihr Dach für eine Solaranlage geeignet ist.
              </p>
              <p>
                Beantworten Sie ein paar kurze Fragen zu Ihrer Immobilie und prüfen Sie in weniger als 30 Sekunden, ob Ihr Dach Strom produzieren kann.
              </p>
              <p>
                Die Prüfung ist kostenlos und unverbindlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Jetzt prüfen, ob Ihr Haus Strom produzieren kann.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Kostenlos und unverbindlich in weniger als 30 Sekunden.
          </p>
          <a
            href="#formular"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Jetzt Dach prüfen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
