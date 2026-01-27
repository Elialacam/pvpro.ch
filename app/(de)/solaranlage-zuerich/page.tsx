import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { CityContent, cityContents } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'zurich';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage Zürich ZH - Über 40 Solarteure vergleichen | Photovoltaik Offerte`,
    description: `Solaranlage Zürich: Grösster Solarmarkt der Schweiz. Vergleichen Sie kostenlos Offerten von über 40 geprüften Zürcher Solarteuren. Kanton ZH Förderung bis 50%. CHF 9.500-25.000, netto ab 6.500 CHF. Sparen Sie 4.500-7.000 CHF!`,
    keywords: [
      'Solaranlage Zürich',
      'Photovoltaik Zürich',
      'Solarteur Zürich',
      'Solaranlage Kosten Zürich',
      'Kanton Zürich Energieförderung',
      'PV Anlage Zürich',
      'Photovoltaik Offerte Zürich',
      'Solaranlage mit Speicher Zürich',
      'Energie Zürich Solar',
      'Solarteure Zürich vergleichen',
    ],
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-zuerich',
    },
    openGraph: {
      title: 'Solaranlage Zürich - Über 40 Solarteure vergleichen',
      description: 'Grösster Solarmarkt: Über 40 Zürcher Solarteure im Vergleich. Kanton ZH Förderung bis 50%. Sparen Sie 4.500-7.000 CHF durch Vergleich.',
      url: 'https://pvpro.ch/solaranlage-zuerich',
      type: 'website',
      locale: 'de_CH',
      siteName: 'PVPro',
    },
  };
}

export default function ZurichPage() {
  const city = getCityBySlug(citySlug);
  const content = cityContents[citySlug];

  if (!city || !content) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Photovoltaik Installation",
            "name": "Solaranlage Installation Zürich",
            "description": "Professionelle Solaranlagen-Installation in Zürich. Über 40 Solarteure im Vergleich.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": "Zürich",
              "addressRegion": "ZH",
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "CHF",
              "lowPrice": "9500",
              "highPrice": "25000",
              "offerCount": "3",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "342"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.faqs.map(faq => ({
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
      <UniqueCityPage city={city} content={content} accentColor="blue" />
    </>
  );
}
