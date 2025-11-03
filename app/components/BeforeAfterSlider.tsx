"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt = "Before/After comparison" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    setShowHint(false);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Auto-hide hint after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Instruction Hint */}
      {showHint && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="flex items-center gap-2 rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md px-4 py-2 shadow-lg">
            <svg className="h-5 w-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span className="text-sm font-semibold text-amber-200">Drag to compare</span>
          </div>
        </div>
      )}

      <div
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900 cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={`${alt} - After`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${alt} - Before`}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-amber-500 to-orange-500 shadow-2xl transition-transform hover:scale-110">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute bottom-4 left-4">
          <div className="rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white">
            WITHOUT LUT
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-4 right-4">
          <div className="rounded-full bg-gradient-to-r from-amber-500/80 to-orange-500/80 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-white">
            WITH LUT ✨
          </div>
        </div>
      </div>

      {/* Bottom Instruction */}
      <div className="mt-3 text-center">
        <p className="text-sm text-white/60">
          👆 Drag the slider left or right to see the magic
        </p>
      </div>
    </div>
  );
}
