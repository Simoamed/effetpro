"use client";

import { useEffect, useState } from "react";

interface SectionColor {
  id: string;
  darkColor: string; // Couleur sombre
  lightColor: string; // Couleur plus claire pour variation
}

const SECTION_COLORS: SectionColor[] = [
  { id: "hero", darkColor: "rgb(10, 10, 10)", lightColor: "rgb(18, 18, 18)" }, // Pure black
  { id: "what-you-get", darkColor: "rgb(15, 15, 15)", lightColor: "rgb(22, 22, 22)" }, // Dark gray
  { id: "guarantee", darkColor: "rgb(18, 18, 18)", lightColor: "rgb(25, 25, 25)" }, // Charcoal
  { id: "software", darkColor: "rgb(12, 12, 12)", lightColor: "rgb(20, 20, 20)" }, // Deep black
  { id: "why", darkColor: "rgb(20, 20, 20)", lightColor: "rgb(28, 28, 28)" }, // Dark slate
  { id: "before-after", darkColor: "rgb(22, 20, 18)", lightColor: "rgb(30, 28, 26)" }, // Dark warm gray
  { id: "how-to-use", darkColor: "rgb(16, 16, 16)", lightColor: "rgb(24, 24, 24)" }, // Near black
  { id: "looks", darkColor: "rgb(18, 16, 14)", lightColor: "rgb(26, 24, 22)" }, // Dark brown gray
  { id: "trusted", darkColor: "rgb(14, 14, 14)", lightColor: "rgb(22, 22, 22)" }, // Graphite
  { id: "reviews", darkColor: "rgb(20, 18, 16)", lightColor: "rgb(28, 26, 24)" }, // Warm charcoal
  { id: "faq", darkColor: "rgb(16, 16, 16)", lightColor: "rgb(24, 24, 24)" }, // Deep gray
  { id: "about", darkColor: "rgb(18, 18, 18)", lightColor: "rgb(26, 26, 26)" }, // Dark neutral
  { id: "final-cta", darkColor: "rgb(12, 12, 12)", lightColor: "rgb(20, 20, 20)" }, // Almost black
  { id: "footer", darkColor: "rgb(8, 8, 8)", lightColor: "rgb(15, 15, 15)" }, // Deepest black
];

export default function ScrollColorTransition() {
  const [backgroundColor, setBackgroundColor] = useState(SECTION_COLORS[0].darkColor);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Trouver la section actuelle basée sur la position de scroll
      const sections = Array.from(document.querySelectorAll<HTMLElement>("section, footer"));

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom) {
          const scrollWithinSection = scrollPosition - sectionTop + windowHeight / 2;
          const progress = Math.max(0, Math.min(1, scrollWithinSection / rect.height));

          const colorConfig = SECTION_COLORS[Math.min(i, SECTION_COLORS.length - 1)];

          // Interpoler entre la couleur sombre et la couleur claire en fonction de la progression
          const color = interpolateColors(
            colorConfig.darkColor,
            colorConfig.lightColor,
            progress
          );

          setBackgroundColor(color);
          break;
        }
      }
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-700 ease-out"
      style={{ backgroundColor }}
    />
  );
}

// Fonction utilitaire pour interpoler entre deux couleurs RGB
function interpolateColors(color1: string, color2: string, progress: number): string {
  const rgb1 = parseRGB(color1);
  const rgb2 = parseRGB(color2);

  if (!rgb1 || !rgb2) return color1;

  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * progress);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * progress);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * progress);

  return `rgb(${r}, ${g}, ${b})`;
}

function parseRGB(color: string): { r: number; g: number; b: number } | null {
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return null;

  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
  };
}
