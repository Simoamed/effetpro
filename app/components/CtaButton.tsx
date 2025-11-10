'use client';

import { trackEvent } from './FacebookPixel';

export default function CTAButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Track Meta Pixel event
    trackEvent('InitiateCheckout', {
      content_name: 'Wedding LUTs Master Collection',
      value: 27.00,
      currency: 'USD'
    });
  };

  return (
    <a
      href="https://whop.com/checkout/plan_2IPyBtpb088fz?d2c=true&success_url=https://effetpro.com/thank-you"
      onClick={handleClick}
      className="group relative w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 text-center text-lg font-bold text-white shadow-2xl shadow-amber-500/40 transition-all hover:scale-105 hover:shadow-amber-500/60"
    >
      <span className="relative z-10">Yes! Give Me Instant Access → Only $27</span>
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
    </a>
  );
}
