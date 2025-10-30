"use client";

import React, { useState } from "react";

interface VideoBgProps {
  src: string;
  opacity?: number;
}

/**
 * Background video component with fallback
 */
export default function VideoBg({ src, opacity = 0.3 }: VideoBgProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-950" />
    );
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        style={{ opacity }}
        playsInline
        muted
        loop
        autoPlay
        preload="metadata"
        onError={() => setHasError(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-950" />
    </div>
  );
}
