import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import TrackingScripts from '@/components/TrackingScripts';
import UtmTracker from '@/components/UtmTracker';
import SupportPopup from '@/components/SupportPopup';
import NavigationProgress from '@/components/NavigationProgress';
import SmoothScroll from '@/components/SmoothScroll';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'PV Pro - Solaranlagen in der Schweiz vergleichen',
  description: 'Vergleichen Sie kostenlos bis zu 3 Offerten für Ihre Photovoltaikanlage in der Schweiz.',
  metadataBase: new URL('https://www.pvpro.ch'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH" className={`scroll-smooth ${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Suspense fallback={null}>
          <TrackingScripts />
        </Suspense>
        <UtmTracker />
        <SmoothScroll />
        <NavigationProgress />
        {children}
        <SupportPopup />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
