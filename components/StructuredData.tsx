export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://pvpro.ch/#organization",
    "name": "PVPro",
    "alternateName": "Solar Heim",
    "url": "https://pvpro.ch",
    "logo": "https://pvpro.ch/logo-pvpro.png",
    "image": [
      "https://pvpro.ch/logo-pvpro.png",
      "https://pvpro.ch/og-image.jpg"
    ],
    "description": "PVPro ist die führende Vergleichsplattform für Solaranlagen in der Schweiz. Wir vermitteln kostenlos Angebote von geprüften Solarteu ren und helfen Hausbesitzern, bis zu 30% zu sparen.",
    "telephone": "+41774420059",
    "email": "anfrage@pvpro.ch",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Santi Pietro e Paolo 16",
      "addressLocality": "Lugaggia",
      "postalCode": "6953",
      "addressRegion": "TI",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.0815",
      "longitude": "8.9755"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Switzerland"
    },
    "priceRange": "$$",
    "currenciesAccepted": "CHF",
    "paymentAccepted": "Free Service",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/pvpro",
      "https://www.linkedin.com/company/pvpro"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pvpro.ch/#formular",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Order",
        "name": "Kostenlose Solaranlage Offerte"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
