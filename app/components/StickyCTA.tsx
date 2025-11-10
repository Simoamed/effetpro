"use client";

import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import { trackEvent } from "./FacebookPixel";

export default function StickyCTA() {
  const time = useCountdown(14, "promoEnd14v1");

  // Format time dynamically based on what's remaining
  const formatSeconds = (s: number) => s.toString().padStart(2, '0');
  const totalMinutes = time.hours * 60 + time.minutes;

  return (
    <div className="pointer-events-none fixed left-1/2 top-3 z-50 w-[95%] max-w-3xl -translate-x-1/2">
      <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-[#0b0f19]/95 via-amber-950/20 to-[#0b0f19]/95 px-4 py-2 shadow-xl shadow-amber-500/20 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sm text-white/90">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
          <span className="hidden sm:inline">
            Offer ends in <span className="font-bold text-amber-400">{totalMinutes}min {formatSeconds(time.seconds)}s</span> — Unlock 500+ LUTs
          </span>
          <span className="sm:hidden">
            Ends in <span className="font-bold text-amber-400">{totalMinutes}min {formatSeconds(time.seconds)}s</span>
          </span>
        </div>
        <a
          href="https://whop.com/checkout/plan_2IPyBtpb088fz?d2c=true&success_url=https://effetpro.com/thank-you"
          onClick={() => {
            // Track AddToCart first
            trackEvent('AddToCart', {
              content_name: 'Wedding LUTs Master Collection',
              content_type: 'product',
              value: 27.00,
              currency: 'USD'
            });

            // Then track InitiateCheckout
            setTimeout(() => {
              trackEvent('InitiateCheckout', {
                content_name: 'Wedding LUTs Master Collection',
                content_type: 'product',
                value: 27.00,
                currency: 'USD'
              });
            }, 100);
          }}
          className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/40 transition-all hover:scale-105 hover:shadow-amber-500/60"
        >
          $27 Instant Download
        </a>
      </div>
    </div>
  );
}

