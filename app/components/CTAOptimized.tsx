'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import UrgencyBadge from './UrgencyBadge';
import { SITE_CONFIG } from '../constants/content';

interface CTAOptimizedProps {
  variant?: 'hero' | 'primary' | 'secondary';
  showCountdown?: boolean;
  showUrgency?: boolean;
  className?: string;
}

export default function CTAOptimized({
  variant = 'primary',
  showCountdown = false,
  showUrgency = false,
  className = ''
}: CTAOptimizedProps) {
  const [isHovered, setIsHovered] = useState(false);

  const checkoutUrl = `https://whop.com/checkout/plan_2IPyBtpb088fz?d2c=true&success_url=https://effetpro.com/thank-you`;

  if (variant === 'hero') {
    return (
      <div className={`w-full max-w-2xl mx-auto ${className}`}>
        {/* Urgency badges */}
        {showUrgency && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <UrgencyBadge variant="stock" />
            <UrgencyBadge variant="viewers" />
          </div>
        )}

        {/* Main CTA card */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-950/95 via-amber-950/20 to-slate-950/95 p-8 shadow-2xl backdrop-blur-xl">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(251,146,60,0.15),transparent_60%)]"></div>

          <div className="relative">
            {/* Limited offer badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-red-500/50"></div>
                <div className="relative rounded-full bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 shadow-xl">
                  <div className="text-center">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">Launch Special</div>
                    <div className="text-lg font-black text-white">{SITE_CONFIG.discount} OFF</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-6">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/60">
                One-Time Investment
              </div>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-2xl font-bold text-white/40 line-through">
                  ${SITE_CONFIG.originalPrice}
                </span>
                <span className="text-6xl font-black text-white">
                  ${SITE_CONFIG.price}
                </span>
              </div>
              <div className="text-sm text-emerald-400 font-semibold">
                Save ${Number(SITE_CONFIG.originalPrice) - Number(SITE_CONFIG.price)} Today — Limited Time Only
              </div>
            </div>

            {/* Countdown Timer */}
            {showCountdown && (
              <div className="mb-6">
                <CountdownTimer variant="compact" className="w-full justify-center" />
              </div>
            )}

            {/* Main CTA Button */}
            <a
              href={checkoutUrl}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 p-1 shadow-2xl shadow-amber-500/50 transition-all hover:scale-[1.02] hover:shadow-amber-500/70"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 px-8 py-5">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative flex items-center justify-center gap-3 text-center">
                  <svg className="h-6 w-6 text-white transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-xl font-black text-white">
                    Get Instant Access Now
                  </span>
                  <svg className={`h-5 w-5 text-white transition-transform ${isHovered ? 'translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Instant Download</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Secure Checkout</span>
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-white/80">
                  <span className="font-bold text-white">{SITE_CONFIG.customerCount}</span> video editors trust EffetPro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className={`${className}`}>
        <a
          href={checkoutUrl}
          className="group inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-500/50 hover:from-amber-500/20 hover:to-orange-500/20 hover:scale-105"
        >
          <span>Transform Your Wedding Films — ${SITE_CONFIG.price}</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  // Primary variant (default)
  return (
    <div className={`${className}`}>
      <a
        href={checkoutUrl}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-amber-500/40 transition-all hover:scale-105 hover:shadow-amber-500/60"
      >
        <span className="relative z-10">Start Creating Cinematic Films — ${SITE_CONFIG.price}</span>
        <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </div>
  );
}
