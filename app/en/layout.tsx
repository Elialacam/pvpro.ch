import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pvpro.ch/en',
    languages: {
      'de-CH': 'https://pvpro.ch',
      'fr-CH': 'https://pvpro.ch/fr',
      'en-CH': 'https://pvpro.ch/en',
    },
  },
  title: {
    default: 'PV Pro - Compare Solar Systems in Switzerland | Free Quotes',
    template: '%s | PV Pro',
  },
  description: 'Compare solar system offers from certified installers in Switzerland for free. Save up to 30% by comparing. No obligation.',
  keywords: ['Solar system', 'Photovoltaic', 'Solar Switzerland', 'Solar system costs', 'Solar installer', 'Compare solar systems'],
  authors: [{ name: 'PV Pro' }],
  openGraph: {
    type: 'website',
    locale: 'en_CH',
    url: 'https://pvpro.ch/en',
    siteName: 'PV Pro',
    title: 'PV Pro - Compare Solar Systems in Switzerland',
    description: 'Compare multiple solar system offers from certified Swiss installers for free. Save up to 30%.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PV Pro - Solar Systems Switzerland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PV Pro - Compare Solar Systems in Switzerland',
    description: 'Compare solar system offers for free. Save up to 30%.',
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

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale="en">
      <Header />
      <main>{children}</main>
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
            "url": "https://pvpro.ch/en",
            "name": "PV Pro",
            "alternateName": "PVPro",
            "description": "Comparison platform for solar systems in Switzerland",
            "inLanguage": "en-CH",
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pvpro.ch/en#formular",
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
