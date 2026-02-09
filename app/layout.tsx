import Script from 'next/script'
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import ScrollTracking from "@/components/ScrollTracking";
import { Suspense } from "react";

import GoogleTagManager from '../components/GoogleTagManager';
import MetaPixel from '../components/MetaPixel';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const syne = Syne({
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
});

// Base metadata - specific language pages override this
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
    <html lang="de-CH" className={`scroll-smooth ${plusJakartaSans.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="afterInteractive"
        />
        <GoogleTagManager />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <ScrollTracking />
        {children}

        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u1ur4kb2kq");
            `,
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G0VT0Y9P6Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G0VT0Y9P6Q');
          `}
        </Script>
      </body>
    </html>
  );
}
