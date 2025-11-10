'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Use environment variable or fallback to hardcoded ID
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL || '640702059123669';

    if (!pixelId) {
      console.warn('⚠️ Facebook Pixel ID not configured');
      return;
    }

    // Initialize Facebook Pixel immediately
    if (!window.fbq) {
      // Load Facebook Pixel base code
      (function(f: any, b: any, e: any, v: any) {
        if (f.fbq) return;
        const n: any = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        const t = b.createElement(e);
        t.async = true;
        t.src = v;
        const s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      // Initialize with pixel ID
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');

      console.log('✅ Facebook Pixel initialized:', pixelId);
      console.log('📊 Facebook Pixel - PageView tracked');
    }
  }, []);

  useEffect(() => {
    // Track route changes
    if (window.fbq) {
      window.fbq('track', 'PageView');
      console.log('📊 Facebook Pixel - PageView tracked:', pathname);
    }
  }, [pathname]);

  return null;
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
