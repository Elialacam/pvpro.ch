'use client';

import { useState, useCallback, useEffect } from 'react';
import Script from 'next/script';
import CookieConsentBanner from './CookieConsent';
import { type CookieConsent, getConsent } from '@/lib/cookieConsent';

export default function TrackingScripts() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      setConsent(existing);
    }
    setLoaded(true);
  }, []);

  const handleConsentChange = useCallback((newConsent: CookieConsent) => {
    setConsent(newConsent);
  }, []);

  const showAnalytics = consent?.analytics === true;
  const showMarketing = consent?.marketing === true;

  if (!loaded) return null;

  return (
    <>
      {showMarketing && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1848326999213371');
                fbq('track', 'PageView');
              `,
            }}
          />
          <Script
            id="google-ads-tag"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-17901154625"
          />
          <Script
            id="google-ads-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                if(!window.gtag){window.gtag=function(){dataLayer.push(arguments);};}
                window.gtag('js', new Date());
                window.gtag('config', 'AW-17901154625');
              `,
            }}
          />
        </>
      )}

      {showAnalytics && (
        <>
          <Script
            id="ga4-tag"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-ZE1BS0ZGK9"
          />
          <Script
            id="ga4-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                if(!window.gtag){window.gtag=function(){dataLayer.push(arguments);};}
                window.gtag('js', new Date());
                window.gtag('config', 'G-ZE1BS0ZGK9');
              `,
            }}
          />
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
        </>
      )}

      <CookieConsentBanner onConsentChange={handleConsentChange} />
    </>
  );
}
