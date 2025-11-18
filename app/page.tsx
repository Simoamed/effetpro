export { metadata } from "./wedding-luts/metadata";
import StickyCTA from "./components/StickyCTA";
import ScrollColorTransition from "./components/ScrollColorTransition";
// Removed old ReviewsSection - replaced with SocialProofAdvanced
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Container from "./components/UI/Container";
import SectionTitle from "./components/UI/SectionTitle";
import VideoBg from "./components/UI/VideoBg";
import VideoPlayer from "./components/VideoPlayer";
import Image from "next/image";
import PageViewTracker from "./components/PageViewTracker";
import CTAOptimized from "./components/CTAOptimized";
import CountdownTimer from "./components/CountdownTimer";
import UrgencyBadge from "./components/UrgencyBadge";
import SocialProofAdvanced from "./components/SocialProofAdvanced";
import {
  MAIN_OFFER,
  EXCLUSIVE_BONUSES,
  BENEFITS,
  SIGNATURE_LOOKS,
  AUTHOR,
  FOOTER_LINKS,
  DEMO_VIDEOS,
  SITE_CONFIG,
  TRUST_BADGES,
  FAQ_DATA,
  COMPANY_LOGOS,
  SOFTWARE_LOGOS,
} from "./constants/content";

export default function Page() {

  return (
    <main className="min-h-screen text-white relative">
      <PageViewTracker />
      <ScrollColorTransition />
      <StickyCTA />

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden py-20 sm:py-28">
        <VideoBg src={DEMO_VIDEOS.hero} />
        <Container className="relative">
          {/* Urgency Badge - Viewers */}
          <div className="flex justify-center mb-6">
            <UrgencyBadge variant="viewers" />
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(251,191,36,0.3)]">
                Charge $3,000-$8,000 Per Wedding
              </span>
              <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_30px_rgba(251,146,60,0.5)] mt-2">
                With Netflix-Level Color Grading
              </span>
              <span className="block text-white/90 text-2xl sm:text-3xl mt-4 font-bold">
                Even If You're a Complete Beginner
              </span>
            </h1>

            {/* Subheadline - Results focused */}
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stop losing clients to "expensive colorists". Start delivering <span className="font-bold text-amber-300">cinematic wedding films in 15 minutes</span> that make couples cry tears of joy — and pay premium prices.
            </p>
          </div>

          {/* Before/After Slider */}
          <div className="relative mx-auto mt-10 w-full max-w-2xl px-4 sm:px-6">
            <BeforeAfterSlider
              beforeImage="/imgs/pexels-khezez-15524745.jpg"
              afterImage="/imgs/pexels-khezez-15524745.jpg"
              alt="Wedding LUT before and after comparison - Transform your footage instantly"
            />
          </div>

          {/* Main Hero CTA */}
          <div className="mt-12">
            <CTAOptimized variant="hero" showCountdown={true} showUrgency={true} />
          </div>
        </Container>
      </section>

      {/* What You Get (chips) */}
      <section id="what-you-get" className="relative border-t border-white/5 py-20 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/15 to-purple-950/25"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.06),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.06),transparent_60%)]"></div>

        <Container className="relative">
          <SectionTitle
            title="The Complete Package"
            subtitle="Everything you need to create cinematic wedding films"
            gradient="from-amber-200 via-orange-200 to-amber-200"
          />

          {/* Main Offer + Bonuses - Unified Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Main Offer Items */}
            {MAIN_OFFER.map((item, index) => {
              const gradients = [
                "from-rose-500 to-pink-600",
                "from-amber-500 to-orange-600",
              ];

              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}></div>

                  <div className="relative">
                    {/* Mockup Image */}
                    {item.mockup && (
                      <div className="mb-4 relative flex justify-center h-52 items-center">
                        <Image
                          src={item.mockup}
                          alt={item.title}
                          width={240}
                          height={240}
                          className="w-auto max-h-52 object-contain transition-transform duration-300 group-hover:scale-105"
                          style={{
                            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${gradients[index]} shadow-lg`}></div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Value</span>
                        <span className="text-lg font-extrabold text-white/40 line-through">{item.value}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-white leading-tight mb-2 group-hover:text-amber-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4">{item.description}</p>

                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-bold text-emerald-300">Included</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Exclusive Bonuses */}
            {EXCLUSIVE_BONUSES.map((bonus, index) => {
              const gradients = [
                "from-purple-500 to-fuchsia-600",
                "from-amber-500 to-yellow-600",
                "from-blue-500 to-cyan-600"
              ];

              return (
                <div
                  key={bonus.id}
                  className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}></div>

                  <div className="relative">
                    {/* Free Gift Badge */}
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="flex items-center gap-1 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-500 to-fuchsia-500 px-3 py-1 shadow-lg">
                        <span className="text-xs">🎁</span>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-white">Free Gift</span>
                      </div>
                    </div>

                    {/* Mockup Image */}
                    {bonus.mockup && (
                      <div className="mb-4 relative flex justify-center h-52 items-center">
                        <Image
                          src={bonus.mockup}
                          alt={bonus.title}
                          width={240}
                          height={240}
                          className="w-auto max-h-52 object-contain transition-transform duration-300 group-hover:scale-105"
                          style={{
                            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
                          }}
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">{bonus.icon}</div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300/60">Bonus</span>
                        <span className="text-lg font-extrabold text-purple-300/50 line-through">{bonus.value}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-white leading-tight mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {bonus.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-4">{bonus.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Stack - Pricing Card with Urgency */}
          <div className="mx-auto mt-12 max-w-2xl">
            {/* Urgency: Limited spots */}
            <div className="mb-6 flex justify-center">
              <UrgencyBadge variant="stock" />
            </div>

            {/* Countdown Timer */}
            <CountdownTimer variant="hero" className="mb-6" />

            {/* Removed inline pricing - using CTAOptimized component instead which has better conversion */}
          </div>
        </Container>
      </section>

      {/* 30-Day Money-Back Guarantee */}
      <section id="guarantee" className="border-t border-white/5 py-16 bg-gradient-to-b from-emerald-900/15 via-teal-900/10 to-emerald-950/20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-teal-950/30 to-neutral-950/40 p-8 md:p-12 backdrop-blur-sm">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>

              <div className="relative">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-500/30 bg-emerald-500/20">
                  <svg className="h-10 w-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
                  30-Day Money-Back Guarantee
                </h2>

                {/* Description */}
                <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed text-white/80">
                  Try EffetPro risk-free for 30 days. If you&apos;re not completely satisfied, we&apos;ll refund your purchase. <span className="font-bold text-emerald-400">No questions asked.</span>
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white">Full Refund</div>
                      <div className="text-sm text-white/70">100% money back</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white">No Questions</div>
                      <div className="text-sm text-white/70">Hassle-free process</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white">Fast Processing</div>
                      <div className="text-sm text-white/70">3-5 business days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Compatible Software */}
      <section id="software" className="border-t border-white/5 py-12 bg-gradient-to-b from-indigo-950/25 via-blue-950/20 to-slate-950/30">
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
      <section id="why" className="border-t border-white/5 py-16 bg-gradient-to-b from-teal-900/20 via-cyan-950/15 to-teal-950/25">
        <Container>
          <SectionTitle
            title={`Why ${SITE_CONFIG.customerCount} Video Editors Choose EffetPro`}
            subtitle="Real results you'll get — not just features."
            gradient="from-emerald-300 via-teal-200 to-emerald-400"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BENEFITS.map((benefit) => {
              const colorClasses = {
                rose: "border-rose-500/25 bg-rose-500/10",
                amber: "border-amber-500/25 bg-amber-500/10",
                emerald: "border-emerald-500/25 bg-emerald-500/10",
                orange: "border-orange-500/25 bg-orange-500/10"
              };

              return (
                <div key={benefit.id} className={`flex flex-col gap-3 rounded-xl border p-6 ${colorClasses[benefit.color as keyof typeof colorClasses]}`}>
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
              );
            })}
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

          {/* CTA #2 - Mid-page after benefits */}
          <div className="mt-12">
            <CTAOptimized variant="primary" className="flex justify-center" />
          </div>
        </Container>
      </section>

      {/* Before / After + Videos */}
      <section id="before-after" className="border-t border-white/5 py-16 bg-gradient-to-b from-blue-950/20 via-indigo-950/15 to-violet-950/25">
        <Container>
          <SectionTitle title="Before / After" subtitle="See the transformation in seconds." gradient="from-amber-300 via-orange-300 to-amber-200" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">Before/After</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <video className="absolute inset-0 h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata" aria-label="Before/After wedding LUT comparison">
                  <source src="/video/video3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Before/After</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <video className="absolute inset-0 h-full w-full object-cover" playsInline muted loop autoPlay preload="metadata" aria-label="Before/After wedding LUT comparison">
                  <source src="/video/video4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">Before/After</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <Image src="/imgs/600.png" alt="Before/After wedding LUT comparison" width={800} height={450} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">Before/After</div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
                <Image src="/imgs/601.png" alt="Before/After wedding LUT comparison" width={800} height={450} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Interactive Before/After Slider */}
          <div className="mt-10">
            <div className="mx-auto max-w-4xl">
              <BeforeAfterSlider
                beforeImage="/imgs/pexels-khezez-15524745.jpg"
                afterImage="/imgs/pexels-khezez-15524745.jpg"
                alt="Wedding LUT before and after comparison"
              />
            </div>
          </div>

          {/* Removed CTA - reducing from 8 to 3 total CTAs */}
        </Container>
      </section>

      {/* How to Use Tutorial */}
      <section id="how-to-use" className="border-t border-white/5 py-16 bg-gradient-to-b from-pink-950/20 via-rose-950/15 to-purple-950/25">
        <Container>
          <SectionTitle
            title="How to Use Your LUTs in 60 Seconds"
            subtitle="Simple drag-and-drop installation guide for all editing software"
            gradient="from-amber-200 via-orange-200 to-amber-200"
          />

          <div className="mx-auto max-w-4xl">
            {/* Video Container */}
            <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-2 shadow-2xl backdrop-blur">
              <VideoPlayer
                src={DEMO_VIDEOS.howToUse}
                thumbnail="/imgs/miniature 2.jpg"
                ariaLabel="Step-by-step tutorial on how to install and use wedding LUTs"
              />
            </div>

            {/* Quick Steps */}
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { step: "1", title: "Download", desc: "Get your LUTs pack instantly after purchase", icon: "📥" },
                { step: "2", title: "Install", desc: "Drag & drop into your editing software", icon: "🎬" },
                { step: "3", title: "Apply", desc: "One-click color grading magic", icon: "✨" },
              ].map((item) => (
                <div key={item.step} className="group rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-amber-500/5 p-6 transition-all hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/20">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-2xl">{item.icon}</div>
                    <div className="text-2xl font-bold text-orange-400">Step {item.step}</div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Support Note */}
            <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/10 p-6 text-center">
              <p className="text-white/90">
                📚 <span className="font-semibold text-amber-300">Detailed PDF guides included</span> for Premiere Pro, Lightroom, DaVinci Resolve & Final Cut Pro
              </p>
            </div>

            {/* Removed CTA - reducing total CTAs */}
          </div>
        </Container>
      </section>

      {/* Looks Gallery */}
      <section id="looks" className="border-t border-white/5 py-16 bg-gradient-to-b from-purple-950/25 via-fuchsia-950/15 to-violet-950/30">
        <Container>
          <SectionTitle title="Signature Looks Gallery" subtitle="Preview of some of the wedding LUT styles included." gradient="from-amber-200 via-orange-200 to-red-200" />
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
          {/* Removed CTA - reducing total CTAs */}
        </Container>
      </section>

      {/* Trusted By Companies */}
      <section id="trusted" className="border-t border-white/5 py-12 bg-gradient-to-b from-slate-900/20 via-gray-900/15 to-slate-950/25">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-300/70 mb-6">Trusted by video editors from</p>
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

      {/* Social Proof - Advanced with Revenue Stats */}
      <SocialProofAdvanced />

      {/* 30-Day Guarantee + FAQ */}
      <section id="faq" className="border-t border-white/5 py-16 bg-gradient-to-b from-cyan-950/20 via-teal-950/15 to-emerald-950/25">
        <Container>
          {/* 30-Day Guarantee - Prominent */}
          <div className="mx-auto max-w-4xl mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-500/10 p-8 md:p-12 shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 ring-2 ring-emerald-500/30">
                  <svg className="h-10 w-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">30-Day Money-Back Guarantee</h3>
                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
                  Try EffetPro risk-free for 30 days. If you&apos;re not completely satisfied, we&apos;ll refund your purchase. <span className="font-bold text-emerald-300">No questions asked.</span>
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

          {/* Removed CTA - reducing total CTAs */}
        </Container>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 py-20 bg-gradient-to-b from-violet-950/25 via-purple-950/20 to-fuchsia-950/30">
        <Container>
          {/* Section Title */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 mb-4">
              <span>👋</span>
              <span>Meet Your Instructor</span>
            </div>
            <h2 className="mt-4 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              The Creator Behind EffetPro
            </h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
              {/* Profile Image - Enhanced with gradients and effects */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative">
                  {/* Gradient glow effect */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-75 blur-lg"></div>

                  {/* Image container with gradient border */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-full border-4 border-transparent bg-gradient-to-br from-amber-500 via-orange-500 to-amber-500 p-1">
                      <div className="overflow-hidden rounded-full bg-neutral-900">
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
                    <div className="absolute -bottom-2 -right-2 rounded-full border-4 border-neutral-950 bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 shadow-xl">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">7+</div>
                        <div className="text-xs font-semibold text-white/90">Years</div>
                      </div>
                    </div>
                  </div>

                  {/* Name badge on top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2 shadow-lg">
                    <div className="text-center">
                      <div className="text-xl font-black uppercase tracking-wider text-white">
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
                  <p className="mt-1 text-lg text-amber-300">{AUTHOR.title}</p>
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
                      className="group relative overflow-hidden rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-3 transition-all hover:border-orange-500/40 hover:bg-orange-500/20"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
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
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
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

      {/* Final CTA - #3 Last chance to convert */}
      <section id="final-cta" className="border-t border-white/5 py-20 bg-gradient-to-b from-purple-950/25 via-indigo-950/20 to-violet-950/30 relative overflow-hidden">
        {/* Dramatic background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]"></div>

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Your Future Wedding Clients Are Waiting...
              <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent mt-3">
                Will You Keep Them Waiting?
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join {SITE_CONFIG.customerCount} wedding videographers who stopped competing on price and started <span className="font-bold text-emerald-300">charging premium rates</span> for cinematic color grading.
            </p>
          </div>

          {/* Final CTA */}
          <div className="flex justify-center">
            <CTAOptimized variant="hero" showCountdown={false} showUrgency={false} />
          </div>

          {/* Risk Reversal one more time */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center backdrop-blur-sm">
              <p className="text-white/90 leading-relaxed">
                <span className="font-bold text-emerald-300">Zero Risk:</span> Try it for 30 days. If you don't book at least one premium wedding because of these LUTs, we'll refund every penny. No questions asked.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-white/60">
            &#169; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>
        </Container>
      </section>

      {/* Site Footer */}
      <footer className="border-t border-white/5 bg-gradient-to-b from-slate-950/80 via-gray-950/60 to-black/80 py-14">
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
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/60">
            &#169; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}

