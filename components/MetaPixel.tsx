'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, Suspense } from 'react';

const PIXEL_ID = '1848326999213371';
const TEST_EVENT_CODE = 'TEST81166';

function MetaPixelContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="meta-pixel-base"
        strategy="beforeInteractive"
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
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Script
        id="meta-pixel-test"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fbq && fbq('set', 'agent', '${TEST_EVENT_CODE}', '${PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export default function MetaPixel() {
  return (
    <Suspense fallback={null}>
      <MetaPixelContent />
    </Suspense>
  );
}

declare global {
  interface Window {
    fbq: any;
  }
}
