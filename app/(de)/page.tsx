import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import SwissMap from '@/components/SwissMap';
import FAQ from '@/components/FAQ';
import RelatedCities from '@/components/RelatedCities';

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
      <RelatedCities />
      <FAQ />
    </>
  );
}
