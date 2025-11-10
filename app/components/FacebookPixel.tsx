'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

// Facebook Pixel ID - Production ready for effetpro.com
const FB_PIXEL_ID = '640702059123669';

// Check if we're in production environment
const isProduction = process.env.NODE_ENV === 'production';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();
  const [isPixelLoaded, setIsPixelLoaded] = useState(false);

  // Track route changes only after pixel is loaded
  useEffect(() => {
    if (isPixelLoaded && window.fbq && pathname) {
      window.fbq('track', 'PageView');
      if (!isProduction) {
        console.log('📊 PageView tracked for route:', pathname);
      }
    }
  }, [pathname, isPixelLoaded]);

  const handleScriptLoad = () => {
    // Initialize fbq queue if not already initialized
    if (!window.fbq) {
      window.fbq = function() {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments as any)
          : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Initialize pixel with the ID and enable automatic configuration
    window.fbq('init', FB_PIXEL_ID, {
      autoConfig: true,
      debug: !isProduction
    });

    // Track initial PageView
    window.fbq('track', 'PageView');

    setIsPixelLoaded(true);

    if (!isProduction) {
      console.log('✅ Facebook Pixel initialized:', FB_PIXEL_ID);
      console.log('📊 Initial PageView tracked');
    }
  };

  return (
    <>
      {/* Load Facebook Pixel script - Optimized for Vercel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={handleScriptLoad}
        onError={(e) => {
          if (!isProduction) {
            console.error('❌ Failed to load Facebook Pixel:', e);
          }
        }}
      />
      {/* Fallback noscript pixel for users with JavaScript disabled */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Helper function to track custom events - Optimized for production
export const trackEvent = (
  eventName: string,
  data?: {
    content_name?: string;
    content_type?: string;
    value?: number;
    currency?: string;
    [key: string]: any;
  }
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);

    // Only log in development
    if (!isProduction) {
      console.log(`📊 Facebook Pixel - ${eventName} tracked:`, data);
    }
  } else if (!isProduction) {
    console.warn('⚠️ Facebook Pixel not loaded yet');
  }
};
