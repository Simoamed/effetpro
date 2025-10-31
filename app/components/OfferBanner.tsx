"use client";

import { useCountdown } from "../hooks/useCountdown";

type Props = {
  minutes?: number; // countdown duration in minutes from mount
  className?: string;
};

function format(n: number) {
  return n.toString().padStart(2, "0");
}

export default function OfferBanner({ minutes = 21, className = "" }: Props) {
  const time = useCountdown(minutes, "offer-deadline");
  const { hours, minutes: minutesLeft, seconds } = time;

  const isExpired = hours === 0 && minutesLeft === 0 && seconds === 0;

  return (
    <div className={`bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 py-3 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center gap-2 text-white">
          <span className="text-red-500 text-xl">●</span>
          <span className="text-sm font-medium">
            Offer ends in{" "}
            {isExpired ? (
              <span className="text-red-500 font-bold">EXPIRED</span>
            ) : (
              <span className="font-bold">
                {hours > 0 && `${format(hours)}h `}
                {format(minutesLeft)}min
              </span>
            )}
            {" "}— Unlock 500+ LUTs
          </span>
        </div>
      </div>
    </div>
  );
}
