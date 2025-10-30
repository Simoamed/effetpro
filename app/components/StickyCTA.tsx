"use client";

import React from "react";
import { useCountdown } from "../hooks/useCountdown";

export default function StickyCTA() {
  const time = useCountdown(42, "promoEnd42");
  const remaining = `${time.minutes.toString().padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`;

  return (
    <div className="pointer-events-none fixed left-1/2 top-3 z-50 w-[95%] max-w-3xl -translate-x-1/2">
      <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0b0f19]/80 px-4 py-2 shadow-xl shadow-black/40 backdrop-blur">
        <div className="flex items-center gap-2 text-sm text-white/85">
          <span className="inline-block h-2 w-2 rounded-full bg-rose-400" />
          <span className="hidden sm:inline">Offer ends in {remaining} — Unlock 500+ LUTs</span>
          <span className="sm:hidden">Ends in {remaining}</span>
        </div>
        <a href="#get-pack" className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/30 transition hover:bg-rose-700">
          $27 Instant Download
        </a>
      </div>
    </div>
  );
}

