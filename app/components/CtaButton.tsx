"use client";

import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  newTab?: boolean;
  id?: string;
};

export default function CtaButton({ href, children, className = "", ariaLabel, newTab, id }: Props) {
  function handleClick() {
    try {
      // GA4 event
      // @ts-ignore
      if (window.gtag) window.gtag("event", "cta_click", { label: id || href });
      // Meta Pixel event
      // @ts-ignore
      if (window.fbq) window.fbq("trackCustom", "CTA_Click", { label: id || href });
    } catch {}
  }

  return (
    <a
      onClick={handleClick}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

