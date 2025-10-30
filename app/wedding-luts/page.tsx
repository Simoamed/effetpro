"use client";

import React, { useState } from "react";

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits rÃ©servÃ©s.</div>;
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-white/70">{subtitle}</p> : null}
    </div>
  );
}

function SafeImg({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />;
}

function SplitImage({ src, alt }: { src: string; alt: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
        setPos(Math.round((x / r.width) * 100));
      }}
    >
      <SafeImg src={src} alt={alt} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={src}
          alt={`${alt} before`}
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(60%) saturate(0.6) brightness(0.85)" }}
        />
      </div>
      <div className="pointer-events-none absolute top-0 h-full w-0.5 bg-white/60" style={{ left: `${pos}%` }} />
      <input
        aria-label="Adjust before/after split"
        className="absolute bottom-3 left-1/2 h-1 w-[80%] -translate-x-1/2 cursor-ew-resize appearance-none bg-white/20 [accent-color:#f43f5e]"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
      />
    </div>
  );
}

function VideoCard({ src, label }: { src: string; label?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
      {label ? <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits rÃ©servÃ©s.</div> : null}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
        <video className="absolute inset-0 h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata" controls={false}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default function Page() {
  const slides = [
    "/before-after/wed-1.jpg.png",
    "/before-after/wed-2.jpg.png",
    "/before-after/wed-3.jpg.png",
    "/before-after/wed-4.jpg.png",
    "/before-after/wed-5.jpg.png",
  ];
  const split = "/before-after/wed-6.jpg.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <section className="py-10 border-b border-white/10">
        <Container>
          <div className="text-center">
            <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits rÃ©servÃ©s.</div>
            <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">Version 1 - Cinema & Emotion (Wedding Style)</h1>
            <p className="mt-3 text-white/80">Watch the transformation happen.</p>
            <p className="text-white/70">Ordinary to unforgettable - in just 1 click.</p>
            <p className="text-white/60">Feel the colors. Feel the story.</p>
          </div>
        </Container>
      </section>
      <section className="relative py-16 sm:py-20">
        <Container>
          <SectionTitle title="Before / After" subtitle="Transform ordinary clips into cinematic moments in 1 click." />
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits rÃ©servÃ©s.</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <SafeImg src={slides[0]} alt="Gallery" />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits rÃ©servÃ©s.</div>
              <SplitImage src={split} alt="Split" />
            </div>
            <div className="sm:col-span-2">
              <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits rÃ©servÃ©s.</div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <VideoCard src="/video/video2.mp4.mp4" label="Version 1 - Before" />
                <VideoCard src="/video/video3.mp4.mp4" label="Version 1 - After" />
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-white/60">&#169; {new Date().getFullYear()} EffetPro. Tous droits réservés.</div>
        </Container>
      </section>
    </div>
  );
}


