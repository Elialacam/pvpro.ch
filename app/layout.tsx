import Script from 'next/script'
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import TrackingScripts from '@/components/TrackingScripts';
import SupportPopup from '@/components/SupportPopup';

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PV Pro - Solaranlagen in der Schweiz vergleichen',
  description: 'Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage in der Schweiz.',
  metadataBase: new URL('https://www.pvpro.ch'),
  icons: {
    icon: [
      { url: '/logo-pvpro.png', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-pvpro.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-pvpro.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH" className={`scroll-smooth ${barlow.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <head />
      <body className={barlow.className}>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="afterInteractive"
        />
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        {children}
        <SupportPopup />
      </body>
    </html>
  );
}
