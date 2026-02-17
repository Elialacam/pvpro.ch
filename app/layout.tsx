import Script from 'next/script'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import TrackingScripts from '@/components/TrackingScripts';
import WhatsAppFloating from '@/components/WhatsAppFloating';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PV Pro - Solaranlagen in der Schweiz vergleichen',
  description: 'Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage in der Schweiz.',
  metadataBase: new URL('https://pvpro.ch'),
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
    <html lang="de-CH" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="afterInteractive"
        />
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
