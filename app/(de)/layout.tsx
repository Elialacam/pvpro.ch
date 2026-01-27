import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pvpro.ch',
    languages: {
      'de-CH': 'https://pvpro.ch',
      'fr-CH': 'https://pvpro.ch/fr',
      'en-CH': 'https://pvpro.ch/en',
    },
  },
  title: {
    default: 'PV Pro - Solaranlagen in der Schweiz vergleichen | Kostenlose Offerten',
    template: '%s | PV Pro',
  },
  description: 'Vergleichen Sie kostenlos Solaranlagen-Angebote von geprüften Installateuren in der Schweiz. Bis zu 30% sparen durch Angebotsvergleich. 100% unverbindlich.',
  keywords: ['Solaranlage', 'Photovoltaik', 'Solar Schweiz', 'Solaranlage Kosten', 'Solarteur', 'Solaranlage vergleichen'],
  authors: [{ name: 'PV Pro' }],
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: 'https://pvpro.ch',
    siteName: 'PV Pro',
    title: 'PV Pro - Solaranlagen in der Schweiz vergleichen',
    description: 'Kostenlos mehrere Solaranlagen-Angebote von geprüften Schweizer Installateuren vergleichen. Bis zu 30% sparen.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PV Pro - Solaranlagen Schweiz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PV Pro - Solaranlagen in der Schweiz vergleichen',
    description: 'Kostenlos mehrere Solaranlagen-Angebote von geprüften Schweizer Installateuren vergleichen. Bis zu 30% sparen.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale="de">
      <StructuredData />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PV Pro",
            "url": "https://pvpro.ch",
            "logo": "https://pvpro.ch/logo.png",
            "sameAs": [
              "https://www.facebook.com/pvpro",
              "https://www.linkedin.com/company/pvpro"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+41774420059",
              "contactType": "customer service",
              "email": "info@pvpro.ch",
              "areaServed": "CH",
              "availableLanguage": ["de", "fr", "en"]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://pvpro.ch",
            "name": "PV Pro",
            "alternateName": "PVPro",
            "description": "Vergleichsplattform für Solaranlagen in der Schweiz",
            "inLanguage": "de-CH",
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pvpro.ch/#formular",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              }
            }
          })
        }}
      />
    </LocaleProvider>
  );
}
