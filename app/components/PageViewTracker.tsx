'use client';

import { useEffect } from 'react';
import { trackEvent } from './FacebookPixel';

export default function PageViewTracker() {
  useEffect(() => {
    // Track ViewContent event when the landing page loads
    trackEvent('ViewContent', {
      content_name: 'Wedding LUTs Master Collection Landing Page',
      content_type: 'product',
      value: 27.00,
      currency: 'USD'
    });
  }, []);

  return null;
}
