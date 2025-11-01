"use client";

import React from "react";
import { useCountdown } from "../hooks/useCountdown";

export default function StickyCTA() {
  const time = useCountdown(14, "promoEnd14v1");

  // Format time dynamically based on what's remaining
  const formatSeconds = (s: number) => s.toString().padStart(2, '0');
  const totalMinutes = time.hours * 60 + time.minutes;
  const isExpired = totalMinutes === 0 && time.seconds === 0;

  return (
    <div className="pointer-events-none fixed left-1/2 top-3 z-50 w-[95%] max-w-3xl -translate-x-1/2">
      <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0b0f19]/80 px-4 py-2 shadow-xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-2 text-sm text-white/85">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-rose-400" />
          <span className="hidden sm:inline">
            Offer ends in {isExpired ? (
              <span className="font-bold text-rose-400">EXPIRED</span>
            ) : (
              <span className="font-bold">{totalMinutes}min {formatSeconds(time.seconds)}s</span>
            )} — Unlock 500+ LUTs
          </span>
          <span className="sm:hidden">
            Ends in {isExpired ? (
              <span className="font-bold text-rose-400">EXPIRED</span>
            ) : (
              <span className="font-bold">{totalMinutes}min {formatSeconds(time.seconds)}s</span>
            )}
          </span>
        </div>
        <a href="#get-pack" className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/30 transition hover:bg-rose-700">
          $37 Instant Download
        </a>
      </div>
    </div>
  );
}

