import { Metadata } from 'next';
import SolarForm from '@/components/SolarForm';
import Image from 'next/image';
import { CheckCircle, Shield, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zuverlässige lokale Installateure finden | PVPro.ch',
  description: 'Einen zuverlässigen Photovoltaik-Installateur zu finden ist nicht einfach. PVPro wählt geprüfte lokale Installateure in Ihrer Region aus. In 30 Sekunden prüfen, ob Ihr Dach geeignet ist.',
  keywords: [
    'Solarinstallateur Schweiz',
    'Photovoltaik Installateur finden',
    'lokale Solarteure',
    'geprüfte Installateure',
    'Solaranlage Installateur',
    'PV Installateur in der Nähe',
  ],
  alternates: {
    canonical: 'https://pvpro.ch/lokale-installateure',
  },
  openGraph: {
    title: 'Zuverlässige lokale Installateure finden | PVPro.ch',
    description: 'PVPro wählt geprüfte lokale Installateure in Ihrer Region aus. Sparen Sie Zeit und vermeiden Sie unseriöse Anbieter.',
    url: 'https://pvpro.ch/lokale-installateure',
    type: 'website',
    locale: 'de_CH',
    siteName: 'PVPro',
    images: [
      {
        url: '/og-installateure.png',
        width: 1200,
        height: 630,
        alt: 'Zuverlässige lokale Installateure finden',
      },
    ],
  },
};

export default function LokaleInstallateurePage() {
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
              { '@type': 'ListItem', position: 2, name: 'Lokale Installateure', item: 'https://pvpro.ch/lokale-installateure' },
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
                Einen zuverlässigen Solarinstallateur zu finden, ist{' '}
                <span className="text-primary">nicht einfach.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Zu viele Anbieter, unterschiedliche Offerten und unklare Preise. PVPro übernimmt die Auswahl und verbindet Sie mit geprüften lokalen Solarinstallateuren aus Ihrer Region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Geprüfte lokale Installateure',
                  'Keine unseriösen Anbieter',
                  'Kostenlos & unverbindlich',
                  'Prüfung in 30 Sekunden',
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Das Problem: Zu viele Anbieter, zu wenig Vertrauen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In der Schweiz gibt es Hunderte von Solarfirmen. Die Preise variieren stark, die Qualität ist schwer einzuschätzen, und unverbindliche Richtpreise helfen selten weiter. Viele Hausbesitzer verschwenden Wochen mit Recherche und erhalten trotzdem kein gutes Gefühl.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <Image
                src="/images/team-project.png"
                alt="PVPro Team bei der Arbeit"
                width={500}
                height={300}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Shield,
                title: 'Unklare Qualität',
                text: 'Wie erkennt man einen seriösen Installateur? Bewertungen im Internet sind oft nicht aussagekräftig.',
              },
              {
                icon: Clock,
                title: 'Zeitaufwand',
                text: 'Angebote einholen, vergleichen und hinterfragen kostet viel Zeit und Nerven.',
              },
              {
                icon: MapPin,
                title: 'Regionale Unterschiede',
                text: 'Nicht jeder Installateur arbeitet in Ihrer Region. Lokale Nähe bedeutet besseren Service.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
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
              Wir machen den Prozess einfach, schnell und transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Kurzes Formular ausfüllen',
                text: 'Beantworten Sie ein paar einfache Fragen zu Ihrem Haus und Dach. Dauert nur 30 Sekunden.',
              },
              {
                step: '2',
                title: 'Wir prüfen & vermitteln',
                text: 'PVPro wählt geprüfte Installateure in Ihrer Region aus und leitet Ihre Anfrage weiter.',
              },
              {
                step: '3',
                title: 'Offerten vergleichen',
                text: 'Sie erhalten echte Offerten von lokalen Installateuren und entscheiden sich ohne Druck.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
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
                Lokale Installateure, denen Sie vertrauen können
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: 'Geprüft & zertifiziert',
                    text: 'Jeder Installateur wird von PVPro persönlich überprüft, bevor er in unser Netzwerk aufgenommen wird.',
                  },
                  {
                    icon: MapPin,
                    title: 'Aus Ihrer Region',
                    text: 'Wir vermitteln nur Installateure, die tatsächlich in Ihrer Gegend arbeiten und den lokalen Markt kennen.',
                  },
                  {
                    icon: Users,
                    title: 'Erfahrene Fachleute',
                    text: 'Unsere Partner-Installateure haben jahrelange Erfahrung und zahlreiche erfolgreiche Projekte umgesetzt.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
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
                alt="PVPro Installateurin auf dem Dach"
                width={300}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover h-[250px]"
              />
              <Image
                src="/images/team-install-1.png"
                alt="PVPro Installateurin bei der Arbeit"
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
            Jetzt prüfen, ob Ihr Dach geeignet ist
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Beantworten Sie ein paar kurze Fragen und erhalten Sie unverbindliche Offerten von geprüften Installateuren in Ihrer Nähe.
          </p>
          <a
            href="#formular"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Jetzt Formular ausfüllen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
