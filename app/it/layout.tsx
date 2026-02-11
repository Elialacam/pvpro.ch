import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://pvpro.ch/it',
    languages: {
      'de-CH': 'https://pvpro.ch',
      'fr-CH': 'https://pvpro.ch/fr',
      'en-CH': 'https://pvpro.ch/en',
      'it-CH': 'https://pvpro.ch/it',
    },
  },
  title: {
    default: 'PV Pro - Confronta impianti fotovoltaici in Svizzera | Preventivi gratuiti',
    template: '%s | PV Pro',
  },
  description: 'Confronta gratuitamente le offerte di impianti fotovoltaici da installatori certificati in Svizzera. Risparmia fino al 30% con il confronto. 100% senza impegno.',
  keywords: ['Impianto solare', 'Fotovoltaico', 'Solare Svizzera', 'Costi impianto solare', 'Installatore solare', 'Confronta impianti solari'],
  authors: [{ name: 'PV Pro' }],
  openGraph: {
    type: 'website',
    locale: 'it_CH',
    url: 'https://pvpro.ch/it',
    siteName: 'PV Pro',
    title: 'PV Pro - Confronta impianti fotovoltaici in Svizzera',
    description: 'Confronta gratuitamente diverse offerte di impianti fotovoltaici da installatori svizzeri certificati. Risparmia fino al 30%.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PV Pro - Impianti Fotovoltaici Svizzera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PV Pro - Confronta impianti fotovoltaici in Svizzera',
    description: 'Confronta gratuitamente le offerte di impianti fotovoltaici. Risparmia fino al 30%.',
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

export default function ItalianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale="it">
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
              "telephone": "+41779770750",
              "contactType": "customer service",
              "email": "anfrage@pvpro.ch",
              "areaServed": "CH",
              "availableLanguage": ["de", "fr", "en", "it"]
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
            "url": "https://pvpro.ch/it",
            "name": "PV Pro",
            "alternateName": "PVPro",
            "description": "Piattaforma di confronto per impianti fotovoltaici in Svizzera",
            "inLanguage": "it-CH",
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pvpro.ch/it#formular",
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
