import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pvpro.ch/fr',
    languages: {
      'de-CH': 'https://pvpro.ch',
      'fr-CH': 'https://pvpro.ch/fr',
      'en-CH': 'https://pvpro.ch/en',
    },
  },
  title: {
    default: 'PV Pro - Comparer les installations solaires en Suisse | Devis gratuits',
    template: '%s | PV Pro',
  },
  description: 'Comparez gratuitement les offres d\'installations solaires d\'installateurs certifiés en Suisse. Économisez jusqu\'à 30% grâce à la comparaison. 100% sans engagement.',
  keywords: ['Installation solaire', 'Photovoltaïque', 'Solaire Suisse', 'Coûts installation solaire', 'Installateur solaire', 'Comparer installations solaires'],
  authors: [{ name: 'PV Pro' }],
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://pvpro.ch/fr',
    siteName: 'PV Pro',
    title: 'PV Pro - Comparer les installations solaires en Suisse',
    description: 'Comparez gratuitement plusieurs offres d\'installations solaires d\'installateurs certifiés suisses. Économisez jusqu\'à 30%.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PV Pro - Installations Solaires Suisse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PV Pro - Comparer les installations solaires en Suisse',
    description: 'Comparez gratuitement les offres d\'installations solaires. Économisez jusqu\'à 30%.',
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

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale="fr">
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
            "logo": "https://pvpro.ch/logo-pvpro.png",
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
            "url": "https://pvpro.ch/fr",
            "name": "PV Pro",
            "alternateName": "PVPro",
            "description": "Plateforme de comparaison d'installations solaires en Suisse",
            "inLanguage": "fr-CH",
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pvpro.ch/fr#formular",
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
