'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { trackEvent } from './FacebookPixel';

const PAYMENT_URL = 'https://whop.com/checkout/plan_2IPyBtpb088fz?d2c=true&success_url=https://effetpro.com/thank-you';

export default function CheckoutCTA() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);

    // Track AddToCart event first
    trackEvent('AddToCart', {
      content_name: 'Wedding LUTs Master Collection',
      content_type: 'product',
      value: 27.00,
      currency: 'USD'
    });

    // Then track InitiateCheckout event
    setTimeout(() => {
      trackEvent('InitiateCheckout', {
        content_name: 'Wedding LUTs Master Collection',
        content_type: 'product',
        value: 27.00,
        currency: 'USD'
      });
    }, 100);

    window.open(PAYMENT_URL, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };

  return (
    <div className="group relative mx-auto w-full max-w-md">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 opacity-20 blur-xl transition duration-500 group-hover:opacity-40"></div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-5 shadow-2xl backdrop-blur-sm">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-amber-500/5 to-orange-500/5"></div>

        <div className="relative space-y-4">
          {/* Price Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-semibold text-white/80">Wedding LUTs Collection</span>
            </div>
            <div className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              94% OFF
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-white">$27</span>
            <span className="text-lg text-white/40 line-through">$497</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClick}
            disabled={isDisabled}
            data-gtm="cta_buy_now"
            aria-label="Buy Wedding LUTs Master Collection - Secure Checkout"
            className="w-full rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 py-3.5 text-base font-bold text-white shadow-xl shadow-rose-500/30 transition-all hover:scale-[1.02] hover:shadow-amber-500/50 focus:outline-none focus:ring-4 focus:ring-amber-500/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isDisabled ? 'Opening...' : 'Get Instant Access →'}
          </button>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 text-xs text-white/50">
            <span>✓ Instant Download</span>
            <span>•</span>
            <span>✓ Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
