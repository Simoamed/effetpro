'use client';

import { useState, useEffect } from 'react';
import Container from "../components/UI/Container";
import { CheckCircle, Download, Mail, Heart, Sparkles } from 'lucide-react';

export default function ThankYouPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    // Add your download link here
    window.location.href = 'YOUR_DOWNLOAD_LINK_HERE';

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl" />
      </div>

      {/* Confetti Effect */}
      {confetti && (
        <div className="pointer-events-none absolute inset-0 z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Sparkles className="h-4 w-4 text-amber-400" />
            </div>
          ))}
        </div>
      )}

      <Container className="relative z-20 flex min-h-screen items-center justify-center py-20">
        <div className="w-full max-w-3xl">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/50" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-2xl shadow-emerald-500/50">
                <CheckCircle className="h-12 w-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 via-slate-800/50 to-slate-900/95 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-4 bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
                Payment Successful!
              </h1>
              <p className="mx-auto max-w-xl text-lg text-white/80">
                Thank you for your purchase! Your <span className="font-semibold text-amber-400">Wedding LUTs Master Collection</span> is ready to download.
              </p>
            </div>

            {/* Download Button */}
            <div className="mb-8">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-8 py-6 text-xl font-bold text-white shadow-2xl shadow-emerald-500/50 transition-all hover:scale-[1.02] hover:shadow-emerald-500/70 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Download className="h-6 w-6" />
                  {isDownloading ? 'Preparing Download...' : 'Download Your LUTs Now'}
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
              <p className="mt-3 text-center text-sm text-white/60">
                File size: ~2.5 GB • Instant download • Lifetime access
              </p>
            </div>

            {/* What's Included */}
            <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                <Heart className="h-5 w-5 text-rose-400" />
                What's Included
              </h2>
              <div className="space-y-3">
                {[
                  '500+ Wedding LUTs (cube, 3dl formats)',
                  'Drone LUTs Collection',
                  '120 Emotional Music Tracks (royalty-free)',
                  '30 Golden Love Presets',
                  'Installation Guide & Tutorials'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Confirmation */}
            <div className="mb-8 flex items-start gap-4 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
              <div>
                <p className="font-semibold text-blue-200">Check your email</p>
                <p className="text-sm text-blue-200/80">
                  We've sent a confirmation email with your download link and receipt. If you don't see it, check your spam folder.
                </p>
              </div>
            </div>

            {/* Support Section */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
              <h3 className="mb-2 font-bold text-white">Need Help?</h3>
              <p className="mb-4 text-sm text-white/70">
                Our support team is here to help you get started
              </p>
              <a
                href="mailto:contact@effetpro.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                contact@effetpro.com
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/60">
              🎬 Start creating stunning wedding films today!
            </p>
            <p className="mt-2 text-xs text-white/40">
              30-Day Money-Back Guarantee • Secure Payment • Lifetime Access
            </p>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes fall {
          from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </main>
  );
}
