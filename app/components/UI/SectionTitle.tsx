import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradient?: string;
}

/**
 * Section title component with gradient text and optional subtitle
 */
export default function SectionTitle({
  title,
  subtitle,
  gradient = "from-amber-300 via-rose-300 to-amber-200"
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className={`bg-gradient-to-r ${gradient} bg-clip-text text-3xl font-bold text-transparent sm:text-4xl`}>
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
    </div>
  );
}
