import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import PageTransition from "@/components/PageTransition";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  title: {
    default: 'Solaranlagen vergleichen | PvPro.ch',
    template: '%s | PvPro.ch',
  },
  description: "Vergleichen Sie kostenlos bis zu 3 geprüfte Offerten für Ihre Solaranlage von qualifizierten Schweizer Fachbetrieben – transparent und unverbindlich.",
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

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale="de">
      <StructuredData />
      <Header />
      <main className="min-h-screen pt-20"><PageTransition>{children}</PageTransition></main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.pvpro.ch",
            "name": "PvPro.ch",
            "alternateName": "PvPro.ch",
            "description": "Vergleichsplattform für Solaranlagen in der Schweiz",
            "inLanguage": "de-CH",
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
