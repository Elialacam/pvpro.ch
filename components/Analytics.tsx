'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { pageview, GA_MEASUREMENT_ID, GTM_ID } from '@/lib/analytics';

/**
 * Analytics Component
 *
 * This component loads Google Analytics 4 and Google Tag Manager
 * Place this in your root layout.tsx
 *
 * SETUP REQUIRED:
 * 1. Create .env.local file in project root
 * 2. Add your tracking IDs:
 *    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *    NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 */

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views on route change
  useEffect(() => {
    if (pathname) {
      pageview(pathname + searchParams.toString());
    }
  }, [pathname, searchParams]);

  // Only load analytics in production or when env vars are set
  const isProduction = process.env.NODE_ENV === 'production';
  const hasGA = GA_MEASUREMENT_ID && !GA_MEASUREMENT_ID.includes('XXX');
  const hasGTM = GTM_ID && !GTM_ID.includes('XXX');

  if (!isProduction && !hasGA && !hasGTM) {
    console.log('📊 Analytics: Not loaded (development mode)');
    return null;
  }

  return (
    <>
      {/* Google Tag Manager Script */}
      {hasGTM && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics 4 Script */}
      {hasGA && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  cookie_flags: 'SameSite=None;Secure',
                  anonymize_ip: true,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}
