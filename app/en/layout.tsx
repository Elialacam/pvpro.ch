import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  title: {
    default: 'Compare solar systems in Switzerland | PvPro.ch',
    template: '%s | PvPro.ch',
  },
  description: 'Compare solar system offers from certified installers in Switzerland for free. Save up to 30% by comparing. No obligation.',
  authors: [{ name: 'PvPro.ch' }],
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
      <main className="min-h-screen pt-20"><PageTransition>{children}</PageTransition></main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PvPro.ch",
            "url": "https://www.pvpro.ch",
            "logo": "https://www.pvpro.ch/logo-pvpro.png",
            "sameAs": [
              "https://www.facebook.com/pvpro",
              "https://www.linkedin.com/company/pvpro"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+41762703887",
              "contactType": "customer service",
              "email": "anfrage@pvpro.ch",
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
            "url": "https://www.pvpro.ch/en",
            "name": "PvPro.ch",
            "alternateName": "PvPro.ch",
            "description": "Comparison platform for solar systems in Switzerland",
            "inLanguage": "en-CH",
            "potentialAction": {
              "@type": "OrderAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.pvpro.ch/anfrage",
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
