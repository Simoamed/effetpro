"use client";

import React from "react";

type Props = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  threshold?: number;
  delayMs?: number;
};

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  threshold = 0.2,
  delayMs = 0,
}: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const fire = () => setVisible(true);
            if (delayMs > 0) {
              const t = setTimeout(fire, delayMs);
              return () => clearTimeout(t);
            }
            fire();
          }
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, delayMs]);

  return (
    <Tag
      ref={ref as any}
      className={`scroll-reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
