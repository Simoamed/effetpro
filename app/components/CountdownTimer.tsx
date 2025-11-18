'use client';

import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'inline';
}

export default function CountdownTimer({ className = '', variant = 'hero' }: CountdownTimerProps) {
  const timeLeft = useCountdown(14, "promoEnd14v1");

  if (variant === 'inline') {
    return (
      <span className={`font-mono font-bold text-red-400 ${className}`}>
        {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 ${className}`}>
        <svg className="h-4 w-4 animate-pulse text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-bold text-red-300">
          Offer ends in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    );
  }

  // Hero variant (default)
  return (
    <div className={`rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/40 via-orange-950/30 to-red-950/40 p-6 backdrop-blur-sm ${className}`}>
      <div className="text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <svg className="h-5 w-5 animate-pulse text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <p className="text-sm font-bold uppercase tracking-wider text-red-300">Limited Time Offer</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 backdrop-blur-sm">
              <span className="text-3xl font-black text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
            <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">Hours</span>
          </div>

          <span className="text-3xl font-bold text-red-400">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 backdrop-blur-sm">
              <span className="text-3xl font-black text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">Minutes</span>
          </div>

          <span className="text-3xl font-bold text-red-400">:</span>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/20 backdrop-blur-sm">
              <span className="text-3xl font-black text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">Seconds</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-white/70">
          Price increases to <span className="font-bold text-white line-through">$197</span> when timer hits zero
        </p>
      </div>
    </div>
  );
}
