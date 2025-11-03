"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./UI/Container";
import SectionTitle from "./UI/SectionTitle";
import { TESTIMONIALS, SITE_CONFIG } from "../constants/content";

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  return (
    <section id="reviews" className="border-t border-white/5 py-16 bg-gradient-to-b from-amber-950/20 via-orange-950/15 to-rose-950/25">
      <Container>
        <SectionTitle
          title={`Loved by ${SITE_CONFIG.customerCount} Video Editors`}
          subtitle={`${SITE_CONFIG.rating}/5 average rating`}
          gradient="from-amber-300 via-rose-300 to-amber-200"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center text-amber-300" aria-label={`${testimonial.rating} stars`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.24 2.2a.75.75 0 0 0 .564.218l3.102-.259a.75.75 0 0 1 .78.98l-.94 2.968a.75.75 0 0 0 .23.78l2.317 2.06a.75.75 0 0 1-.42 1.31l-3.08.385a.75.75 0 0 0-.61.44l-1.24 2.81a.75.75 0 0 1-1.36 0l-1.24-2.81a.75.75 0 0 0-.61-.44l-3.08-.385a.75.75 0 0 1-.42-1.31l2.318-2.06a.75.75 0 0 0 .229-.78l-.94-2.968a.75.75 0 0 1 .78-.98l3.101.259a.75.75 0 0 0 .564-.218l2.24-2.2Z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-white/70">
                    <span className="font-semibold text-white">{testimonial.name}</span> — {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/90">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-6 py-3 text-base font-semibold text-amber-300 transition-all hover:border-amber-500/50 hover:from-amber-500/20 hover:to-orange-500/20 hover:text-amber-200"
            >
              <span>Show More Reviews</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="mt-3 text-sm text-white/60">+{TESTIMONIALS.length - 3} more verified reviews</p>
          </div>
        )}
      </Container>
    </section>
  );
}
