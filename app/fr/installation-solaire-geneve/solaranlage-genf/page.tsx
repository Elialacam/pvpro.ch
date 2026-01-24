import { Metadata } from 'next';
import { getCityBySlug } from '@/lib/cities';
import { getCityContent } from '@/lib/city-content';
import { notFound } from 'next/navigation';
import UniqueCityPage from '@/components/UniqueCityPage';

export const dynamic = 'force-static';
export const revalidate = false;

const citySlug = 'genf';

export async function generateMetadata(): Promise<Metadata> {
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Stadt nicht gefunden' };

  return {
    title: `Solaranlage Genf GE - 1.849 Sonnenstunden | Panneaux Solaires Genève`,
    description: `Solaranlage Genf: 1.849 Sonnenstunden, SIG Solar-Programm, Programme ScanE Förderung bis 50%. Kostenlos Offerten vergleichen. CHF 10.000-26.000, netto ab 6.000 CHF. Einspeisevergütung 10-12 Rp/kWh!`,
    keywords: [
      'Solaranlage Genf',
      'Panneaux solaires Genève',
      'Photovoltaik Genf',
      'Solarteur Genf',
      'Programme ScanE Genève',
      'SIG Mon Soleil',
      'Installation photovoltaïque Genève',
      'Solaranlage Kosten Genf',
      'PV Anlage Genf',
      'Subventions solaires Genève',
    ],
    alternates: {
      canonical: 'https://pvpro.ch/solaranlage-genf',
    },
    openGraph: {
      title: 'Solaranlage Genf - Panneaux Solaires Genève',
      description: '1.849 Sonnenstunden, höchste Einspeisevergütung (10-12 Rp/kWh), Programme ScanE Förderung bis 50%. International Solar Hub.',
      url: 'https://pvpro.ch/solaranlage-genf',
      type: 'website',
      locale: 'de_CH',
      siteName: 'PVPro',
    },
  };
}

export default function GenevePage() {
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
            "name": "Solaranlage Installation Genf / Installation Panneaux Solaires Genève",
            "description": "Installation professionnelle de panneaux solaires à Genève. 1.849 heures de soleil, Programme ScanE.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PVPro",
              "url": "https://pvpro.ch",
              "telephone": "+41774420059",
              "email": "info@pvpro.ch"
            },
            "areaServed": {
              "@type": "City",
              "name": "Genève",
              "addressRegion": "GE",
              "addressCountry": "CH"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "CHF",
              "lowPrice": "10000",
              "highPrice": "26000",
              "offerCount": "3",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "189"
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
      <UniqueCityPage city={city} content={content} accentColor="purple" />
    </>
  );
}
