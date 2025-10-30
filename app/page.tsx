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
              {SITE_CONFIG.customerCount} Wedding Filmmakers Already Creating Magic
            </div>
            <h1 className="mt-4 bg-gradient-to-r from-amber-300 via-rose-300 to-amber-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
              Stop Spending 4+ Hours On Color Grading
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/90 sm:text-2xl">
              Grade an <span className="font-bold text-rose-300">entire wedding in 15 minutes</span> with cinematic LUTs that make couples cry tears of joy
            </p>
          </div>

          {/* Mockup centered */}
          <div className="relative mx-auto mt-10 w-full max-w-lg">
            <Image src={PRODUCT_MOCKUP} alt="Wedding LUTs 3D Mockup" width={600} height={600} className="h-auto w-full object-contain" priority />
          </div>
          {/* Subheadline + CTAs */}
          <div className="mt-8 text-center">
            <div className="mt-8 flex flex-col items-center gap-3">
              <a href="#get-pack" className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-4 text-center text-lg font-bold text-white shadow-2xl shadow-rose-500/50 transition-all hover:scale-105 hover:shadow-rose-500/70">
                <span className="relative z-10">Yes! Give Me Instant Access → Only $27</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Downloaded by 347 creators in the last 7 days</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-1">
                <span>⚡</span>
                <span>Instant Download</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🛡️</span>
                <span>30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🔒</span>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What You Get (chips) */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-indigo-950/40 via-slate-950/30 to-black/10">
        <Container>
          <SectionTitle
            title="What's Inside The Pack?"
            subtitle="Everything you need to create stunning wedding films — no experience required."
            gradient="from-purple-300 via-blue-300 to-cyan-300"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_FEATURES.map((feature) => (
              <div key={feature.id} className={`rounded-xl border border-${feature.color}-500/25 bg-${feature.color}-500/10 p-5`}>
                <div className="flex items-start justify-between gap-2">
                  <span className="flex-1">{feature.title}</span>
                  <span className="text-sm font-bold text-white/60 line-through">{feature.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Value Stack */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-wide text-amber-300">Total Value</div>
              <div className="mt-2 text-4xl font-bold text-white line-through opacity-60">${SITE_CONFIG.originalPrice}</div>
              <div className="mt-2 text-sm text-white/70">Today's Price:</div>
              <div className="mt-1 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                ${SITE_CONFIG.price}
              </div>
              <div className="mt-2 inline-flex rounded-full bg-rose-500/20 px-4 py-1 text-sm font-bold text-rose-300">
                Save {SITE_CONFIG.discount} — Limited Time Only!
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <a href="#get-pack" className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 px-6 py-4 text-center text-lg font-bold text-white shadow-2xl shadow-rose-500/50 transition-all hover:scale-105">
              <span className="relative z-10">Claim Your {SITE_CONFIG.discount} Discount Now →</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Why */}
      <section id="why" className="border-t border-white/10 py-16 bg-gradient-to-b from-emerald-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle
            title="Why 2,000+ Wedding Filmmakers Choose EffetPro"
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
            <a href="#get-pack" className="w-full max-w-sm rounded-xl bg-rose-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700">Start Grading Like a Pro &#8212; $27</a>
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
            <a href="#get-pack" className="w-full max-w-sm rounded-xl bg-rose-600 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-700">Get All 500+ Looks &#8212; $27</a>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-amber-950/30 via-slate-950/20 to-black/10">
        <Container>
          <SectionTitle title={`Loved by ${SITE_CONFIG.customerCount} Creators`} subtitle={`${SITE_CONFIG.rating}/5 average rating`} gradient="from-amber-300 via-rose-300 to-amber-200" />
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

      {/* About */}
      <section className="border-t border-white/10 py-16 bg-gradient-to-b from-purple-950/30 via-slate-950/20 to-black/10">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="aspect-square w-40 overflow-hidden rounded-full border border-white/10">
                <Image src={AUTHOR.avatar} alt={AUTHOR.name} width={160} height={160} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white">About Me</h3>
              <p className="mt-3 text-white/80">{AUTHOR.bio}</p>
              <ul className="mt-3 text-white/70 list-disc pl-5 space-y-1">
                {AUTHOR.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
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

