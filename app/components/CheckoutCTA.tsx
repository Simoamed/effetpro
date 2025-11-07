'use client';

import { useState } from 'react';
import { Lock, Check, Zap } from 'lucide-react';

const PAYMENT_URL = 'https://whop.com/effetpro/wedding-luts-master-collection-4a';

export default function CheckoutCTA() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    window.open(PAYMENT_URL, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-800/50 to-slate-900/95 p-8 shadow-2xl backdrop-blur-xl">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-blue-500/10"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-black text-white">
              Wedding LUTs Master Collection
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
              <Zap className="h-4 w-4" />
              <span>$37 • 92% OFF</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6 space-y-3">
            {[
              '500+ Wedding LUTs (cube, 3dl)',
              'Drone LUTs included (aerial friendly)',
              '120 Emotional Music Tracks (royalty-free)',
              'Golden Love Presets (30)',
              'Instant Download • Lifetime Access'
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClick}
            disabled={isDisabled}
            data-gtm="cta_buy_now"
            aria-label="Buy Wedding LUTs Master Collection - Secure Checkout"
            className="mb-4 w-full rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-rose-500/50 transition-all hover:scale-[1.02] hover:shadow-rose-500/70 focus:outline-none focus:ring-4 focus:ring-rose-500/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isDisabled ? 'Opening Checkout...' : 'Buy Now — Secure Checkout'}
          </button>

          {/* Secondary Link */}
          <div className="mb-4 text-center">
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-blue-400 transition hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Secure Checkout →
            </a>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-white/60">
            <Lock className="h-3 w-3" />
            <span>SSL 256-bit • Secure Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
