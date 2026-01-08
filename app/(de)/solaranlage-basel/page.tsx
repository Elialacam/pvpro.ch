import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { getCityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'basel';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage Basel BS - Klimaziel 2030 | IWB Green Power Förderung`,
    description: `Solaranlage Basel: Grosszügigste Förderung der Nordwestschweiz bis 45%. IWB Green Power Programm, Kanton BS Energieförderung. CHF 9.200-24.500, netto ab 5.700 CHF. Basel wird Solarstadt!`,
    keywords: [
      'Solaranlage Basel',
      'Photovoltaik Basel',
      'Solarteur Basel',
      'IWB Solarstrom Basel',
      'Kanton Basel-Stadt Energieförderung',
      'Solaranlage Kosten Basel',
      'PV Anlage Basel',
      'Klimaziel Basel 2030',
      'Basel Solarstadt',
      'Förderung Solar Basel BS',
    ],
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-basel',
    },
    openGraph: {
      title: 'Solaranlage Basel - Grosszügigste Förderung Nordwestschweiz',
      description: 'Bis 45% Förderung! IWB Green Power + Kanton BS. Basel wird Solarstadt, Klimaziel 2030. Amortisation 4-5 Jahre.',
      url: 'https://pvpro.ch/solaranlage-basel',
      type: 'website',
      locale: 'de_CH',
      siteName: 'PVPro',
    },
  };
}

export default function BaselPage() {
  const city = getCityBySlug(citySlug);
  const content = getCityContent(citySlug);

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
            "name": "Solaranlage Installation Basel",
            "description": "Professionelle Solaranlagen-Installation in Basel. Grosszügigste Förderung der Nordwestschweiz bis 45%.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": "Basel",
              "addressRegion": "BS",
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "CHF",
              "lowPrice": "9200",
              "highPrice": "24500",
              "offerCount": "3",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "215"
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
      <UniqueCityPage city={city} content={content} accentColor="red" />
    </>
  );
}
