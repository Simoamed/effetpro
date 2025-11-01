export { metadata } from "./wedding-luts/metadata";
import StickyCTA from "./components/StickyCTA";
import Container from "./components/UI/Container";
import SectionTitle from "./components/UI/SectionTitle";
import VideoBg from "./components/UI/VideoBg";
import Image from "next/image";
import {
  PRODUCT_FEATURES,
  BENEFITS,
  SIGNATURE_LOOKS,
  TESTIMONIALS,
  AUTHOR,
  FOOTER_LINKS,
  DEMO_IMAGES,
  DEMO_VIDEOS,
  PRODUCT_MOCKUP,
  SITE_CONFIG,
  TRUST_BADGES,
  FAQ_DATA,
  COMPANY_LOGOS,
  SOFTWARE_LOGOS,
} from "./constants/content";

export default function Page() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <StickyCTA />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <VideoBg src={DEMO_VIDEOS.hero} />
        <Container className="relative">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {SITE_CONFIG.customerCount} Wedding Editors & Filmmakers Already Creating Magic
            </div>
            <h1 className="mt-4 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
              Stop Spending 4+ Hours On Color Grading
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90 sm:text-2xl">
              Grade an <span className="font-bold text-rose-300">entire wedding in 15 minutes</span> with cinematic LUTs that make couples cry tears of joy
            </p>
          </div>

          {/* Mockup centered */}
          <div className="relative mx-auto mt-10 w-full max-w-2xl">
            <Image src={PRODUCT_MOCKUP} alt="Wedding LUTs 3D Mockup" width={800} height={800} className="h-auto w-full object-contain" priority />
          </div>

          {/* Subheadline + CTAs */}
          <div className="mt-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <a href="#get-pack" className="group relative w-full max-w-md overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3.5 text-center text-lg font-bold text-white shadow-2xl shadow-rose-500/50 transition-all hover:scale-105 hover:shadow-rose-500/70">
                <span className="relative z-10">Yes! Give Me Instant Access → Only $37</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Downloaded by 347 wedding editors in the last 7 days</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-white/70">
                <span>⚡</span>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-white/70">
                <span>🛡️</span>
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-white/70">
                <span>🔒</span>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What You Get (chips) */}
      <section className="relative border-t border-white/10 py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-fuchsia-950/30 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

        <Container className="relative">
          <SectionTitle
            title="What's Inside The Pack?"
            subtitle="Everything you need to create stunning wedding films — no experience required."
            gradient="from-violet-300 via-fuchsia-300 to-pink-300"
          />

          {/* Modern Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_FEATURES.map((feature, index) => {
              const icons = ["🎨", "🚁", "🎵", "💝", "🎓", "♾️"];
              const gradients = [
                "from-violet-500 to-purple-600",
                "from-sky-500 to-blue-600",
                "from-emerald-500 to-teal-600",
                "from-rose-500 to-pink-600",
                "from-orange-500 to-amber-600",
                "from-cyan-500 to-indigo-600"
              ];

              return (
                <div
                  key={feature.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/20"
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}></div>

                  {/* Icon */}
                  <div className="relative mb-4 flex items-center justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradients[index]} shadow-lg`}>
                      <span className="text-2xl">{icons[index]}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Value</span>
                      <span className="text-lg font-bold text-white/30 line-through">{feature.value}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="relative text-lg font-bold text-white leading-tight">
                    {feature.title}
                  </h3>

                  {/* Checkmark */}
                  <div className="relative mt-4 flex items-center gap-2 text-sm text-emerald-400">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Included</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Stack - Modern Design */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] p-8 backdrop-blur-2xl shadow-2xl">
              {/* Gradient orbs */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 blur-3xl"></div>

              <div className="relative text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
                  <span className="text-xl">💎</span>
                  <span className="text-sm font-bold uppercase tracking-wide text-amber-300">Total Package Value</span>
                </div>

                <div className="mt-4 text-5xl font-black text-white/40 line-through">
                  ${SITE_CONFIG.originalPrice}
                </div>

                <div className="my-4 flex items-center justify-center gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20"></div>
                  <span className="text-sm font-semibold text-white/60">Your Price Today</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20"></div>
                </div>

                <div className="mb-4 text-5xl font-black">
                  <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    ${SITE_CONFIG.price}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-3 shadow-lg shadow-rose-500/30">
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-base font-bold text-white">Save {SITE_CONFIG.discount} — Join {SITE_CONFIG.customerCount} Creators!</span>
                </div>

                <p className="mt-4 text-sm text-white/50">
                  ⚡ Limited time offer • No recurring fees • Lifetime access
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <a
              href="#get-pack"
              className="group relative w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-size-200 bg-pos-0 px-8 py-5 text-center text-xl font-black text-white shadow-2xl shadow-rose-500/50 transition-all duration-300 hover:bg-pos-100 hover:scale-105 hover:shadow-rose-500/70"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Claim Your {SITE_CONFIG.discount} Discount Now</span>
                <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Compatible Software */}
      <section className="border-t border-white/10 py-12 bg-gradient-to-b from-slate-950/40 via-slate-900/30 to-black/10">
        <Container>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-2">Works seamlessly with</p>
            <h3 className="text-2xl font-bold text-white">All Major Editing Software</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {SOFTWARE_LOGOS.map((software) => (
              <div key={software.name} className="group flex flex-col items-center gap-1.5 transition-all hover:scale-110">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${software.bgColor} shadow-lg transition-all group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/10`}>
                  <span className={`text-xl font-black ${software.name === "Avid" ? "text-black" : "text-white"} tracking-tighter`}>{software.abbr}</span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 group-hover:text-white transition-colors">{software.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section id="why" className="border-t border-white/10 py-16 bg-gradient-to-b from-emerald-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle
            title={`Why ${SITE_CONFIG.customerCount} Wedding Editors & Filmmakers Choose EffetPro`}
            subtitle="See the real results you'll get — not just features."
            gradient="from-emerald-300 via-teal-200 to-emerald-400"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className={`flex flex-col gap-3 rounded-xl border border-${benefit.color}-500/25 bg-${benefit.color}-500/10 p-6`}>
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-400" aria-hidden="true">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.28a.75.75 0 0 0-1.06-1.06l-4.22 4.22-1.53-1.53a.75.75 0 1 0-1.06 1.06l2.06 2.06a.75.75 0 0 0 1.06 0l4.75-4.75Z" clipRule="evenodd"/>
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.id} className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-3xl">{badge.icon}</div>
                <div className="mt-2 text-sm font-bold text-white">{badge.title}</div>
                <div className="mt-1 text-xs text-white/60">{badge.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center">
            <a href="#get-pack" className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-4 text-center text-lg font-bold text-white shadow-2xl shadow-rose-500/50 transition-all hover:scale-105">
              <span className="relative z-10">Start Creating Magic Today →</span>
            </a>
            <div className="mt-3 text-center text-sm text-emerald-300">
              ⚡ Instant access • No monthly fees • Lifetime updates
            </div>
          </div>
        </Container>
      </section>

      {/* Before / After + Videos */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-sky-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle title="Before / After" subtitle="Watch the transformation happen in seconds." gradient="from-indigo-300 via-sky-300 to-indigo-200" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 md:order-2">
              <div className="mb-2 text-sm font-serif font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300 uppercase">Before</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <Image src={DEMO_IMAGES.before} alt="Before applying wedding LUT" width={800} height={450} className="h-full w-full object-cover" style={{ filter: "grayscale(60%) saturate(0.6) brightness(0.85)" }} />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 md:order-1">
              <div className="mb-2 text-sm font-serif font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 uppercase">After</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <Image src={DEMO_IMAGES.after} alt="After applying wedding LUT" width={800} height={450} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-indigo-300">Raw Footage</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <video className="absolute inset-0 h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata" aria-label="Raw wedding footage before color grading">
                  <source src={DEMO_VIDEOS.raw} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Drone Graded Result</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <video className="absolute inset-0 h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata" aria-label="Drone footage with wedding LUT applied">
                  <source src={DEMO_VIDEOS.graded} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <a href="#get-pack" className="w-full max-w-sm rounded-xl bg-rose-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700">Start Grading Like a Pro &#8212; $37</a>
          </div>
        </Container>
      </section>

      {/* How to Use Tutorial */}
      <section id="install-guides" className="border-t border-white/10 py-16 bg-gradient-to-b from-indigo-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle
            title="How to Use Your LUTs in 60 Seconds"
            subtitle="Simple drag-and-drop installation guide for all major editing software"
            gradient="from-indigo-300 via-purple-300 to-indigo-300"
          />

          <div className="mx-auto max-w-4xl">
            {/* Video Container */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-2 shadow-2xl backdrop-blur">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  controls
                  preload="metadata"
                  poster="/video-poster.jpg"
                  aria-label="Step-by-step tutorial on how to install and use wedding LUTs"
                >
                  <source src={DEMO_VIDEOS.howToUse} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Quick Steps */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { step: "1", title: "Download", desc: "Get your LUTs pack instantly after purchase", icon: "📥" },
                { step: "2", title: "Install", desc: "Drag & drop into your editing software", icon: "🎬" },
                { step: "3", title: "Apply", desc: "One-click color grading magic", icon: "✨" },
              ].map((item) => (
                <div key={item.step} className="group rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 p-6 transition-all hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/20">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-2xl">{item.icon}</div>
                    <div className="text-2xl font-bold text-indigo-400">Step {item.step}</div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Support Note */}
            <div className="mt-8 rounded-xl border border-purple-500/20 bg-purple-500/10 p-6 text-center">
              <p className="text-white/90">
                📚 <span className="font-semibold text-purple-300">Detailed PDF guides included</span> for Premiere Pro, Lightroom, DaVinci Resolve & Final Cut Pro
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <a href="#get-pack" className="w-full max-w-sm rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-indigo-500/50">
                Get Started Now — $37
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Looks Gallery */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-rose-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle title="Signature Looks Gallery" subtitle="Preview a few of the included wedding LUT styles." gradient="from-fuchsia-300 via-pink-300 to-rose-300" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNATURE_LOOKS.map((look) => (
              <div key={look.src} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <Image src={look.src} alt={look.alt} width={400} height={256} className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white shadow-md">{look.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center">
            <a href="#get-pack" className="w-full max-w-sm rounded-xl bg-rose-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700">Get All 500+ Looks &#8212; $37</a>
          </div>
        </Container>
      </section>

      {/* Trusted By Companies */}
      <section className="border-t border-white/10 py-12 bg-gradient-to-b from-violet-950/20 via-slate-950/10 to-black/5">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-300/70 mb-6">Trusted by wedding editors from</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {COMPANY_LOGOS.map((company) => (
                <div key={company.name} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-4xl">{company.logo}</span>
                  <span className="text-xs font-semibold text-white/60">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-amber-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle title={`Loved by ${SITE_CONFIG.customerCount} Wedding Editors & Filmmakers`} subtitle={`${SITE_CONFIG.rating}/5 average rating`} gradient="from-amber-300 via-rose-300 to-amber-200" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/10">
                    <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center text-amber-300" aria-label={`${testimonial.rating} stars`}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                          <path d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.24 2.2a.75.75 0 0 0 .564.218l3.102-.259a.75.75 0 0 1 .78.98l-.94 2.968a.75.75 0 0 0 .23.78l2.317 2.06a.75.75 0 0 1-.42 1.31l-3.08.385a.75.75 0 0 0-.61.44l-1.24 2.81a.75.75 0 0 1-1.36 0l-1.24-2.81a.75.75 0 0 0-.61-.44l-3.08-.385a.75.75 0 0 1-.42-1.31l2.318-2.06a.75.75 0 0 0 .229-.78l-.94-2.968a.75.75 0 0 1 .78-.98l3.101.259a.75.75 0 0 0 .564-.218l2.24-2.2Z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-white/70">
                      <span className="font-semibold text-white">{testimonial.name}</span> &#8212; {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/90">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 30-Day Guarantee + FAQ */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-emerald-950/30 via-slate-950/20 to-black/10">
        <Container>
          {/* 30-Day Guarantee - Prominent */}
          <div className="mx-auto max-w-4xl mb-16">
            <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-500/10 p-8 md:p-12 shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 ring-4 ring-emerald-500/30">
                  <svg className="h-10 w-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">30-Day Money-Back Guarantee</h3>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
                  Try EffetPro risk-free for 30 days. If you're not completely satisfied, we'll refund your purchase. <span className="font-bold text-emerald-300">No questions asked.</span>
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-200">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Full Refund</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fast Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about EffetPro LUTs"
            gradient="from-cyan-300 via-blue-300 to-cyan-300"
          />
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <details key={index} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                  <summary className="flex cursor-pointer items-center justify-between text-left font-semibold text-white">
                    <span className="text-lg">{faq.question}</span>
                    <svg className="h-5 w-5 flex-shrink-0 text-cyan-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-white/70 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <a href="#get-pack" className="w-full max-w-sm rounded-xl bg-rose-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700">Get EffetPro Now — $37</a>
            <div className="mt-3 text-center text-sm text-emerald-300">
              ✅ 30-Day Guarantee • 💳 Secure Checkout • ⚡ Instant Access
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="border-t border-white/10 py-20 bg-gradient-to-b from-purple-950/30 via-slate-950/20 to-black/10">
        <Container>
          {/* Section Title */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300 mb-4">
              <span>👋</span>
              <span>Meet Your Instructor</span>
            </div>
            <h2 className="mt-4 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              The Creator Behind EffetPro
            </h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
              {/* Profile Image - Enhanced with gradients and effects */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative">
                  {/* Gradient glow effect */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-75 blur-lg"></div>

                  {/* Image container with gradient border */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-full border-4 border-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 p-1">
                      <div className="overflow-hidden rounded-full bg-slate-900">
                        <Image
                          src={AUTHOR.avatar}
                          alt={AUTHOR.name}
                          width={280}
                          height={280}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-slate-950 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 shadow-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">7+</div>
                        <div className="text-xs font-semibold text-white/90">Years</div>
                      </div>
                    </div>
                  </div>

                  {/* Name badge on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
                        SIMO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-3xl font-bold text-white">{AUTHOR.name}</h3>
                  <p className="mt-1 text-lg text-purple-300">{AUTHOR.title}</p>
                </div>

                {/* Bio */}
                <p className="text-lg leading-relaxed text-white/80">
                  {AUTHOR.bio}
                </p>

                {/* Stats / Highlights as badges */}
                <div className="flex flex-wrap gap-3">
                  {AUTHOR.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 transition-all hover:border-purple-500/40 hover:bg-purple-500/20"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold text-white">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social proof numbers */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                      {SITE_CONFIG.customerCount}
                    </div>
                    <div className="mt-1 text-xs text-white/60">Happy Editors</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                      500+
                    </div>
                    <div className="mt-1 text-xs text-white/60">LUTs Created</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
                      {SITE_CONFIG.rating}
                    </div>
                    <div className="mt-1 text-xs text-white/60">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section id="get-pack" className="border-t border-white/10 py-16 bg-gradient-to-b from-amber-950/30 via-slate-950/20 to-black/10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white">Ready to Create Cinematic Wedding Films That Clients Will Never Forget?</h2>
            <a href="#" className="mt-6 inline-flex rounded-xl bg-rose-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700">
              Get The Full Pack Now &#8212; Only ${SITE_CONFIG.price} ({SITE_CONFIG.discount} OFF)
            </a>
            <div className="mt-3 text-sm text-white/70">Instant Download &bull; Lifetime Access &bull; Limited Offer</div>
            <div className="mt-4 text-xs text-white/60">&#169; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.</div>
          </div>
        </Container>
      </section>

      {/* Site Footer */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-14">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <div className="bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 bg-clip-text text-lg font-extrabold leading-tight text-transparent">
                {SITE_CONFIG.name}
              </div>
              <p className="mt-2 max-w-sm text-sm text-white/70">
                Cinematic LUTs and Lightroom presets crafted for weddings. Elevate color, protect skin tones, and deliver premium films faster.
              </p>
              <div className="mt-4 flex items-center gap-3">
                {FOOTER_LINKS.social.map((social) => (
                  <a key={social.platform} aria-label={social.ariaLabel} href={social.href} className="grid h-8 w-8 place-items-center rounded-full border border-amber-400/40 bg-amber-400/20 text-amber-200 transition hover:bg-amber-400/30">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Legal</div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <a className="hover:underline" href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Resources</div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    <a className="hover:underline" href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="text-white/60">Email:</span>
                  <a className="hover:underline" href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/60">Tel:</span>
                  <span>{SITE_CONFIG.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white/60">Location:</span>
                  <span>{SITE_CONFIG.location}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/60">
            &#169; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </div>
        </Container>
      </footer>
    </main>
  );
}

