'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL;

  useEffect(() => {
    if (!pixelId) return;

    // Initialize Facebook Pixel
    if (!window.fbq) {
      (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');

      console.log('✅ Facebook Pixel initialized:', pixelId);
    }
  }, [pixelId]);

  useEffect(() => {
    if (!pixelId || !window.fbq) return;

    // Track page views on route change
    window.fbq('track', 'PageView');
    console.log('📊 Facebook Pixel - PageView tracked:', pathname);
  }, [pathname, searchParams, pixelId]);

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Helper function to track custom events
export const trackEvent = (
  eventName: string,
  data?: {
    content_name?: string;
    value?: number;
    currency?: string;
    [key: string]: any;
  }
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
    console.log(`📊 Facebook Pixel - ${eventName} tracked:`, data);
  } else {
    console.warn('⚠️ Facebook Pixel not loaded');
  }
};
