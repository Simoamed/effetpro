'use client';

import { useState, useEffect } from 'react';

interface UrgencyBadgeProps {
  className?: string;
  variant?: 'stock' | 'viewers' | 'sales';
}

export default function UrgencyBadge({ className = '', variant = 'stock' }: UrgencyBadgeProps) {
  const [count, setCount] = useState(variant === 'stock' ? 8 : variant === 'viewers' ? 47 : 12);

  useEffect(() => {
    if (variant === 'viewers') {
      const interval = setInterval(() => {
        setCount(prev => {
          const change = Math.random() > 0.5 ? 1 : -1;
          const newCount = prev + change;
          return Math.max(35, Math.min(58, newCount));
        });
      }, 8000);
      return () => clearInterval(interval);
    }

    if (variant === 'stock') {
      const interval = setInterval(() => {
        setCount(prev => Math.max(3, prev - 1));
      }, 180000); // Decrease every 3 minutes
      return () => clearInterval(interval);
    }
  }, [variant]);

  if (variant === 'stock') {
    return (
      <div className={`inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-gradient-to-r from-orange-600/20 to-red-600/20 px-4 py-2 backdrop-blur-sm ${className}`}>
        <div className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </div>
        <span className="text-sm font-bold text-white">
          Only <span className="text-lg text-orange-300">{count}</span> spots left at this price!
        </span>
      </div>
    );
  }

  if (variant === 'viewers') {
    return (
      <div className={`inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 ${className}`}>
        <div className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </div>
        <span className="text-sm font-semibold text-green-300">
          <span className="font-bold text-white">{count}</span> people viewing this page right now
        </span>
      </div>
    );
  }

  // sales variant
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 ${className}`}>
      <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="text-sm font-semibold text-amber-300">
        {count} editors purchased in the last 24 hours
      </span>
    </div>
  );
}
