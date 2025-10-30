"use client";

import React from "react";

type Props = {
  frontSrc?: string; // texture for generated 3D box
  angleSrc?: string; // full-angle image (your provided mockup)
  title?: string;
  className?: string;
};

export default function PackMockup3D({ frontSrc = "/mockups/box-front.svg", angleSrc, title = "Wedding LUTs", className = "" }: Props) {
  // If a full‑angle image is provided, only show it when loaded; otherwise fall back to the front texture.
  if (angleSrc) {
    return (
      <div className={`relative ${className}`} style={{ perspective: 1200 }}>
        <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-br from-rose-500/20 via-fuchsia-500/15 to-amber-300/15 blur-2xl" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={angleSrc}
          alt={title}
          className="h-64 w-48 rotate-[-6deg] object-contain drop-shadow-2xl sm:h-80 sm:w-56"
          onError={(e) => {
            // Fallback to front texture if angle image fails
            const img = e.currentTarget as HTMLImageElement;
            img.src = frontSrc;
            img.className = "h-64 w-48 rounded-xl object-cover ring-1 ring-white/10 sm:h-80 sm:w-56";
          }}
        />
      </div>
    );
  }

  // Default: procedural 3D box with front texture
  return (
    <div className={`[perspective:1200px] ${className}`}>
      <div
        className="relative h-64 w-48 sm:h-80 sm:w-56 [transform-style:preserve-3d] transition-transform duration-500 hover:rotate-y-12"
        style={{ transform: "rotateY(-18deg) rotateX(3deg)" }}
      >
        <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-br from-rose-500/20 via-fuchsia-500/15 to-amber-300/15 blur-2xl" />
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-slate-900 ring-1 ring-white/10 [transform:translateZ(24px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={frontSrc} alt={title} className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 right-0 h-full w-8 rounded-r-xl bg-gradient-to-b from-slate-800 to-slate-900 ring-1 ring-white/10 [transform:rotateY(90deg)_translateZ(24px)]" />
        <div className="absolute left-0 top-0 h-8 w-full rounded-t-xl bg-gradient-to-r from-slate-800 to-slate-900 ring-1 ring-white/10 [transform:rotateX(90deg)_translateZ(24px)]" />
        <div className="pointer-events-none absolute inset-0 rounded-xl before:absolute before:-left-1/2 before:top-0 before:h-full before:w-1/2 before:rotate-12 before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] before:opacity-0 hover:before:opacity-100 before:transition-opacity" />
      </div>
    </div>
  );
}
