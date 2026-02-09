import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMap';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { cities } from '@/lib/cities';
import { MapPin } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PV Pro - Solaranlagen in der Schweiz vergleichen | Kostenlose Offerten',
  description: 'Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage in der Schweiz. Sparen Sie Zeit und Geld mit PV Pro.',
};

export default function HomePage() {
  const defaultFAQs = [
    {
      question: 'Was kostet eine Solaranlage in der Schweiz?',
      answer: 'Eine typische Solaranlage für ein Einfamilienhaus kostet zwischen 9.500 und 25.000 CHF. Der genaue Preis hängt von der Grösse der Anlage, der Dachbeschaffenheit und den verwendeten Komponenten ab. Mit einem Batteriespeicher liegen die Kosten höher, zwischen 19.500 und 35.000 CHF.',
    },
    {
      question: 'Wie funktioniert die Vermittlung bei PVPro?',
      answer: 'Sie füllen unser kurzes Formular aus, in dem Sie Ihre Anforderungen angeben. Wir leiten Ihre Anfrage an bis zu 3 geprüfte Solarteure in Ihrer Region weiter. Diese erstellen individuelle Angebote für Sie. Sie vergleichen die Offerten und wählen das beste Angebot aus – ganz ohne Verpflichtung.',
    },
    {
      question: 'Gibt es Förderungen für Solaranlagen in der Schweiz?',
      answer: 'Ja! Die Schweiz bietet verschiedene Förderungen: Die Einmalvergütung (EIV) vom Bund deckt bis zu 30% der Investitionskosten. Zusätzlich gibt es kantonale und kommunale Förderprogramme sowie steuerliche Abzüge. Unsere Partner-Installateure helfen Ihnen bei der Beantragung aller verfügbaren Förderungen.',
    },
    {
      question: 'Wie lange dauert die Installation einer Solaranlage?',
      answer: 'Von der Anfrage bis zur Installation vergehen in der Regel 2-4 Monate. Die eigentliche Montage auf dem Dach dauert meist nur 1-3 Tage, abhängig von der Anlagengrösse. Nach der Installation erfolgt noch die Inbetriebnahme und Abnahme durch den Netzbetreiber.',
    },
    {
      question: 'Lohnt sich eine Solaranlage auch bei wenig Sonnenschein?',
      answer: 'Ja! Selbst in weniger sonnenreichen Regionen der Schweiz produzieren Solaranlagen genug Strom, um sich zu amortisieren. Moderne Solarmodule arbeiten auch bei diffusem Licht effizient. Die durchschnittliche Amortisationszeit in der Schweiz liegt bei 10-15 Jahren, bei einer Lebensdauer von 25-30 Jahren.',
    },
    {
      question: 'Ist der Service von PVPro wirklich kostenlos?',
      answer: 'Ja, unser Service ist zu 100% kostenlos und unverbindlich für Sie. Wir finanzieren uns durch Provisionen von unseren Partner-Installateuren. Sie zahlen für die Vermittlung nichts und erhalten dennoch die gleichen Preise wie bei direkter Anfrage beim Solarteur.',
    },
  ];

  return (
    <>
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": defaultFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Solar Installation",
            "provider": {
              "@type": "Electrician",
              "name": "Solar Installation City"
            },
            "areaServed": {
              "@type": "City",
              "name": "City"
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pvpro.ch"
              }
            ]
          })
        }}
      />

      <Hero />
      <Testimonials />
      <TeamSection />
      <SwissMap />
      <HowItWorks />

      {/* Cities Section - Internal Linking */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-gray-900 mb-4">
              Solaranlagen in der ganzen Schweiz
            </h2>
            <p className="text-xl text-gray-600">
              Wir vermitteln Solarteure in allen grösseren Schweizer Städten
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => {
              let href = '';
              if (city.language === 'fr') {
                href = `/fr/solaire-${city.slug}`;
              } else if (city.language === 'it') {
                href = `/it/fotovoltaico-${city.slug}`;
              } else {
                href = `/solaranlage-${city.slug}`;
              }
              
              return (
                <Link
                  key={city.slug}
                  href={href}
                  className="group flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary-50 transition-all duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                      {city.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {city.canton}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
