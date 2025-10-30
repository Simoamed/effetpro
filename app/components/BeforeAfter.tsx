"use client";

import React from "react";

type Props = {
  className?: string;
};

export default function BeforeAfter({ className = "" }: Props) {
  const [pos, setPos] = React.useState(50);
  const pct = `${pos}%`;
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 ${className}`}>
      <div className="relative h-72 w-full">
        {/* Before */}
        <div
          aria-label="Avant"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#0ea5e9 0%,#111827 60%), radial-gradient(60% 60% at 20% 20%,#a78bfa33 0%,transparent 60%)",
            backgroundBlendMode: "screen, normal",
          }}
        />
        {/* After overlay with clip */}
        <div
          aria-label="Après"
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 calc(${pct}))`,
            background:
              "linear-gradient(135deg,#10b981 0%,#0b0b0b 60%), radial-gradient(60% 60% at 80% 20%,#f43f5e33 0%,transparent 60%)",
            backgroundBlendMode: "screen, normal",
          }}
        />
        {/* Divider */}
        <div className="absolute inset-y-0" style={{ left: pct }}>
          <div className="absolute left-[-1px] h-full w-0.5 bg-white/60" />
        </div>
        {/* Labels */}
        <div className="pointer-events-none absolute left-4 top-4 rounded-md bg-black/40 px-2 py-1 text-xs text-white ring-1 ring-white/10">
          Avant
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-md bg-black/40 px-2 py-1 text-xs text-white ring-1 ring-white/10">
          Après
        </div>
      </div>
      <input
        aria-label="Comparer avant/après"
        className="absolute bottom-3 left-1/2 h-1 w-[80%] -translate-x-1/2 cursor-ew-resize appearance-none bg-white/20 [accent-color:#22d3ee]"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
      />
    </div>
  );
}
