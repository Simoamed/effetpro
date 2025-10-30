"use client";

import { useCountdown } from "../hooks/useCountdown";

type Props = {
  hours?: number; // countdown duration in hours from mount
  className?: string;
};

function format(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown({ hours = 24, className = "" }: Props) {
  const time = useCountdown(hours * 60, "lp-deadline");
  const { days, hours: hoursLeft, minutes, seconds } = time;

  return (
    <div className={`grid grid-flow-col gap-3 text-center ${className}`}>
      {days > 0 && (
        <TimeBlock label="Days" value={format(days)} />
      )}
      <TimeBlock label="Hours" value={format(hoursLeft)} />
      <TimeBlock label="Min" value={format(minutes)} />
      <TimeBlock label="Sec" value={format(seconds)} />
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-zinc-900/80 px-3 py-2 text-zinc-100 shadow ring-1 ring-white/10">
      <div className="text-2xl font-semibold tabular-nums leading-none">{value}</div>
      <div className="text-xs text-zinc-400 mt-1">{label}</div>
    </div>
  );
}
