"use client";

import { useEffect, useState } from "react";

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Custom hook for countdown timer with localStorage persistence
 * @param durationMinutes - Duration of countdown in minutes
 * @param storageKey - LocalStorage key for persistence
 * @returns CountdownTime object with days, hours, minutes, seconds
 */
export function useCountdown(durationMinutes: number, storageKey: string = "countdownEnd"): CountdownTime {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      let end = localStorage.getItem(storageKey);
      if (!end) {
        const endTime = Date.now() + durationMinutes * 60 * 1000;
        localStorage.setItem(storageKey, String(endTime));
        end = String(endTime);
      }

      const remaining = Math.max(0, Number(end) - Date.now());
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remaining / (1000 * 60)) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [durationMinutes, storageKey]);

  return time;
}
