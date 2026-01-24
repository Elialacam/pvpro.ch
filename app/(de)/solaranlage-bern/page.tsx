import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { getCityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'bern';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage Bern BE - Bundesstadt | Energie Bern Förderung & BKW Solar`,
    description: `Solaranlage Bern: Bundesstadt setzt auf Solar. Energie Bern Beratung, Kanton BE Förderung bis 45%, BKW Smart Energy. CHF 9.000-24.000, netto ab 5.800 CHF. Solar + E-Auto Kombi-Bonus!`,
    keywords: [
      'Solaranlage Bern',
      'Photovoltaik Bern',
      'Solarteur Bern',
      'Energie Bern Förderung',
      'BKW Smart Energy',
      'Kanton Bern Energieförderung',
      'Solaranlage Kosten Bern',
      'PV Anlage Bern',
      'Solar E-Auto Bern',
      'Bundesstadt Solar',
    ],
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-bern',
    },
    openGraph: {
      title: 'Solaranlage Bern - Bundesstadt mit Solar Power',
      description: 'Energie Bern: kostenlose Beratung, Kanton BE Förderung bis 45%, BKW Smart Energy. Solar + E-Auto Kombi. Bundesstadt geht voran!',
      url: 'https://pvpro.ch/solaranlage-bern',
      type: 'website',
      locale: 'de_CH',
      siteName: 'PVPro',
    },
  };
}

export default function BernPage() {
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
            "name": "Solaranlage Installation Bern",
            "description": "Professionelle Solaranlagen-Installation in Bern. Energie Bern Beratung, Kanton BE Förderung bis 45%.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bern",
              "addressRegion": "BE",
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "CHF",
              "lowPrice": "9000",
              "highPrice": "24000",
              "offerCount": "3",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "267"
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
      <UniqueCityPage city={city} content={content} accentColor="green" />
    </>
  );
}
