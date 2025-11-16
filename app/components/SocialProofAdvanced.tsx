'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play, Star, TrendingUp } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  videoUrl?: string;
  beforeRevenue?: string;
  afterRevenue?: string;
  thumbnail?: string;
  verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Rodriguez",
    role: "Wedding Filmmaker, Miami",
    avatar: "/imgs/avatar1.jpg",
    rating: 5,
    quote: "These LUTs helped me book 3 weddings at $4,500 each in just ONE MONTH. Clients kept saying my films looked 'like a movie'. Best $27 I ever spent.",
    beforeRevenue: "$1,200/wedding",
    afterRevenue: "$4,500/wedding",
    verified: true,
    thumbnail: "/imgs/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Sophie Chen",
    role: "Destination Wedding Videographer",
    avatar: "/imgs/avatar2.jpg",
    rating: 5,
    quote: "I was spending 12+ hours on color grading. Now I finish films in 2 hours and my clients actually CRY when they see the final product. Game changer!",
    beforeRevenue: "12 hrs/film",
    afterRevenue: "2 hrs/film",
    verified: true,
    thumbnail: "/imgs/testimonial2.jpg"
  },
  {
    id: 3,
    name: "James Patterson",
    role: "Full-Time Wedding Videographer, UK",
    avatar: "/imgs/avatar3.jpg",
    rating: 5,
    quote: "Went from charging £800 to £2,500 per wedding after upgrading my color. The cinematic look made all the difference. ROI = 10,000%+",
    beforeRevenue: "£800/wedding",
    afterRevenue: "£2,500/wedding",
    verified: true,
    thumbnail: "/imgs/testimonial3.jpg"
  },
  {
    id: 4,
    name: "Olivia Martinez",
    role: "Beginner Wedding Editor",
    avatar: "/imgs/avatar4.jpg",
    rating: 5,
    quote: "I'm a complete beginner and these LUTs made me look like a PRO instantly. Booked my first paid wedding ($2K) after posting a sample on Instagram!",
    beforeRevenue: "$0 (hobbyist)",
    afterRevenue: "$2,000 first booking!",
    verified: true
  },
  {
    id: 5,
    name: "David Kim",
    role: "Luxury Wedding Cinematographer, LA",
    avatar: "/imgs/avatar5.jpg",
    rating: 5,
    quote: "My clients are celebrities and influencers. They demand Netflix-quality. These LUTs deliver exactly that. Worth 100x the price.",
    verified: true
  },
  {
    id: 6,
    name: "Emma Thompson",
    role: "Wedding Studio Owner, Australia",
    avatar: "/imgs/avatar6.jpg",
    rating: 5,
    quote: "Bought this for my entire team of 5 editors. We've standardized our look and cut editing time by 60%. Client satisfaction up 40%!",
    beforeRevenue: "8 hrs avg/film",
    afterRevenue: "3 hrs avg/film",
    verified: true
  }
];

const REVENUE_STATS = [
  { label: "Average Revenue Increase", value: "+$2,847", subtext: "per wedding booked", icon: TrendingUp, color: "emerald" },
  { label: "Time Saved", value: "8.5 hrs", subtext: "average per film", icon: "⏱️", color: "amber" },
  { label: "Client Satisfaction", value: "98.7%", subtext: "5-star reviews", icon: "⭐", color: "purple" },
  { label: "ROI", value: "3,547%", subtext: "average return", icon: "💰", color: "green" }
];

export default function SocialProofAdvanced() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section id="social-proof" className="border-t border-white/5 py-20 bg-gradient-to-b from-purple-950/20 via-indigo-950/15 to-purple-950/25 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.06),transparent_60%)]"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-6 py-2.5 mb-4">
            <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
            <span className="text-sm font-bold uppercase tracking-wider text-amber-300">Real Results from Real Editors</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            They Transformed Their Business.
            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent mt-2">
              You're Next.
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join 2,847+ wedding videographers earning $3K-$8K per wedding with pro-level color grading
          </p>
        </div>

        {/* Revenue Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REVENUE_STATS.map((stat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-${stat.color}-500/20 bg-gradient-to-br from-${stat.color}-500/10 to-${stat.color}-500/5 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-${stat.color}-500/40`}
            >
              <div className="absolute top-0 right-0 text-6xl opacity-10">
                {typeof stat.icon === 'string' ? stat.icon : <stat.icon className="h-16 w-16" />}
              </div>
              <div className="relative">
                <div className={`text-3xl font-black bg-gradient-to-r from-${stat.color}-300 to-${stat.color}-400 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mt-2">{stat.label}</div>
                <div className="text-xs text-white/60 mt-1">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition-all hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Header with Avatar */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-0.5">
                    <div className="h-full w-full rounded-full bg-slate-900 flex items-center justify-center text-2xl font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-white/80 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Before/After Revenue */}
              {testimonial.beforeRevenue && testimonial.afterRevenue && (
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-xs text-white/50 uppercase tracking-wide mb-1">Before</div>
                    <div className="text-sm font-bold text-red-400">{testimonial.beforeRevenue}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-white/50 uppercase tracking-wide mb-1">After</div>
                    <div className="text-sm font-bold text-emerald-400">{testimonial.afterRevenue}</div>
                  </div>
                </div>
              )}

              {/* Video thumbnail if available */}
              {testimonial.thumbnail && (
                <button
                  onClick={() => setSelectedVideo(testimonial.id)}
                  className="mt-4 relative w-full rounded-lg overflow-hidden group/video"
                >
                  <div className="aspect-video bg-slate-800 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white/80 group-hover/video:scale-110 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-xs text-white font-semibold">
                    Watch {testimonial.name.split(' ')[0]}'s Story
                  </div>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-emerald-950/40 p-8 backdrop-blur-sm text-center">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">2,847+ Happy Editors</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-amber-400 fill-amber-400" />
                <span className="font-semibold">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-purple-400" />
                <span className="font-semibold">$2,847 Avg Revenue Increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
