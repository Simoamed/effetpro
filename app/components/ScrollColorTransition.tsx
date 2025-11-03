"use client";

import { useEffect, useState } from "react";

interface SectionColor {
  id: string;
  darkColor: string; // Couleur sombre
  lightColor: string; // Couleur plus claire pour variation
}

const SECTION_COLORS: SectionColor[] = [
  { id: "hero", darkColor: "rgb(15, 15, 20)", lightColor: "rgb(25, 25, 35)" }, // Bleu nuit soft
  { id: "what-you-get", darkColor: "rgb(45, 35, 50)", lightColor: "rgb(55, 45, 65)" }, // Violet doux
  { id: "guarantee", darkColor: "rgb(20, 50, 45)", lightColor: "rgb(30, 65, 60)" }, // Vert émeraude soft
  { id: "software", darkColor: "rgb(30, 35, 55)", lightColor: "rgb(40, 50, 70)" }, // Bleu indigo soft
  { id: "why", darkColor: "rgb(25, 45, 50)", lightColor: "rgb(35, 60, 65)" }, // Teal doux
  { id: "before-after", darkColor: "rgb(35, 40, 60)", lightColor: "rgb(45, 55, 75)" }, // Bleu lavande
  { id: "how-to-use", darkColor: "rgb(50, 35, 40)", lightColor: "rgb(65, 45, 55)" }, // Rose brun doux
  { id: "looks", darkColor: "rgb(45, 30, 50)", lightColor: "rgb(60, 40, 65)" }, // Prune soft
  { id: "trusted", darkColor: "rgb(40, 40, 45)", lightColor: "rgb(50, 50, 60)" }, // Gris bleuté
  { id: "reviews", darkColor: "rgb(50, 40, 35)", lightColor: "rgb(65, 55, 50)" }, // Brun chaud
  { id: "faq", darkColor: "rgb(25, 50, 50)", lightColor: "rgb(35, 65, 65)" }, // Cyan doux
  { id: "about", darkColor: "rgb(45, 40, 50)", lightColor: "rgb(60, 55, 65)" }, // Violet grisé
  { id: "final-cta", darkColor: "rgb(40, 35, 50)", lightColor: "rgb(55, 50, 65)" }, // Violet profond soft
  { id: "footer", darkColor: "rgb(20, 20, 30)", lightColor: "rgb(30, 30, 45)" }, // Bleu nuit profond
];

export default function ScrollColorTransition() {
  const [backgroundColor, setBackgroundColor] = useState(SECTION_COLORS[0].darkColor);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Trouver la section actuelle basée sur la position de scroll
      const sections = document.querySelectorAll("section, footer");
      let currentSection: Element | null = null;
      let currentIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom) {
          currentSection = section;
          currentIndex = index;
        }
      });

      if (currentSection) {
        const rect = currentSection.getBoundingClientRect();
        const sectionTop = rect.top + scrollPosition;
        const sectionHeight = rect.height;
        const scrollWithinSection = scrollPosition - sectionTop + windowHeight / 2;
        const progress = Math.max(0, Math.min(1, scrollWithinSection / sectionHeight));

        const colorConfig = SECTION_COLORS[Math.min(currentIndex, SECTION_COLORS.length - 1)];

        // Interpoler entre la couleur sombre et la couleur claire en fonction de la progression
        const color = interpolateColors(
          colorConfig.darkColor,
          colorConfig.lightColor,
          progress
        );

        setBackgroundColor(color);
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
