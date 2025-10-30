import Countdown from "./components/Countdown";
import Reveal from "./components/Reveal";
import CtaButton from "./components/CtaButton";
import BeforeAfter from "./components/BeforeAfter";

const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black text-zinc-100">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="font-semibold tracking-tight text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-md px-1">
            Mega Creator <span className="text-emerald-400">Pack 2025</span>
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#offer" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-md px-1">What’s Inside</a>
            <a href="#value" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-md px-1">Value</a>
            <a href="#social" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-md px-1">Reviews</a>
            <a href="#faq" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-md px-1">FAQ</a>
            <a href="/wedding-luts" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 rounded-md px-1">Wedding LUTs</a>
          </nav>
          <a
            href="#cta"
            className="btn-shine inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-black ring-1 ring-white/20 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            aria-label="Go to checkout section"
          >
            Buy
          </a>
        </div>
      </header>

      {/* Animated gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 10%, #22d3ee33 0%, transparent 60%), radial-gradient(50% 40% at 90% 20%, #a78bfa33 0%, transparent 60%), radial-gradient(60% 45% at 50% 100%, #ef444433 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900/0 via-zinc-900/40 to-black" />

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Mega Creator Pack 2025
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Transform your edits in minutes — even if you’re not a pro.
            </h1>
            <p className="mt-4 text-lg text-zinc-300">
              The secret LUTs, transitions, and sound effects top creators use to make any clip look cinematic.
            </p>
            <p className="mt-2 text-zinc-400">➜ Create, sell, and grow your creative brand — all from one pack.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton
                id="hero-cta"
                href="#cta"
                ariaLabel="View purchase offer"
                className="btn-shine inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-semibold text-black shadow-lg shadow-emerald-500/20 ring-1 ring-white/20 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                🔥 Download now — $27
              </CtaButton>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-zinc-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                aria-label="Watch the 5‑minute demo"
              >
                Watch demo (5 min)
              </a>
            </div>
          </Reveal>
        </div>

        {/* Floating accents */}
        <div className="pointer-events-none absolute -top-24 right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl floating" />
        <div className="pointer-events-none absolute top-16 -left-10 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl floating" />
      </section>

      {/* Subheadline */}
      <section className="border-t border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Most creators waste hours chasing “viral effects.”</h2>
            <p className="mt-4 text-zinc-300">The difference between amateur and pro isn’t talent — it’s assets. With the right pack, your videos become scroll‑stopping stories.</p>
          </Reveal>
        </div>
      </section>

      {/* Problem → Desire */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <Reveal className="space-y-4">
              <h3 className="text-2xl font-semibold">You’ve seen it:</h3>
              <ul className="list-disc space-y-2 pl-5 text-zinc-300">
                <li>You add a transition — it feels off.</li>
                <li>You tweak color — it still looks cheap.</li>
                <li>You spend hours in CapCut, Premiere or DaVinci — final result? Meh.</li>
              </ul>
            </Reveal>
            <Reveal className="space-y-4" delayMs={120}>
              <p className="text-zinc-300">You’re missing the three invisible layers of viral content:</p>
              <div className="grid gap-3">
                <Card title="Visual rhythm" desc="Transitions that flow" hue="from-cyan-400 to-emerald-400" />
                <Card title="Color identity" desc="LUTs that pop" hue="from-violet-400 to-fuchsia-400" />
                <Card title="Sound energy" desc="SFX that hook attention" hue="from-amber-400 to-orange-400" />
              </div>
              <p className="text-zinc-400">Your audience decides in 3 seconds to scroll or stay. This pack gives you control of that moment.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300 ring-1 ring-emerald-300/30">
              🎬 Mega Creator Pack 2025
            </div>
            <h3 className="mt-6 text-3xl font-semibold sm:text-4xl">
              Everything you need to create studio‑quality content — no expensive tools or experience.
            </h3>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "500+ custom transitions (drag & drop, all editors)",
              "100+ cinematic LUTs (instant mood)",
              "100+ studio‑grade SFX (reels, ads, YouTube)",
              "BONUS: 16 Trending Hook templates",
              "BONUS: Lifetime updates + commercial rights",
            ].map((t, i) => (
              <Reveal key={i} delayMs={i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-xs font-bold">✓</span>
                  <p className="text-zinc-200">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center text-sm text-zinc-400">💡 Built by real creators — tested on videos with 2M+ views.</Reveal>
        </div>
      </section>

      {/* Value equation */}
      <section id="value">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-semibold">The Value Equation</h3>
            <p className="mt-3 text-zinc-300">Real value $150 — you pay $27 today.</p>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
              <ValueCell k="Dream Outcome" v="Create pro‑level videos and sell digital content." />
              <ValueCell k="Likelihood" v="Proven templates + plug & play" />
              <ValueCell k="Time Delay" v="Instant download, instant results" />
              <ValueCell k="Effort" v="Zero tech skills required" />
            </div>
          </div>
        </div>
      </section>

      {/* Avant / Après interactif */}
      <section id="before-after" className="border-t border-white/10 bg-zinc-950/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold">Avant / Après</h3>
            <p className="mt-2 text-zinc-300">Glisse pour comparer un rendu brut et un rendu stylisé avec le pack.</p>
          </Reveal>
          <Reveal delayMs={120} className="mt-8">
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      {/* Scarcity + Urgency */}
      <section id="urgency" className="border-y border-white/10 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-violet-400/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <Reveal>
              <h3 className="text-2xl font-semibold">⚡ Special Today: $27 (was $90)</h3>
              <p className="mt-2 text-zinc-200">Get full access for $27 instead of $90. When the timer hits zero, the pack goes back to full price.</p>
              <p className="mt-2 text-zinc-300">🕒 Ends in:</p>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="flex justify-start md:justify-end">
                <Countdown className="" hours={24} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">7‑Day Money‑Back Guarantee</h3>
            <p className="mt-2 text-zinc-300">Try the pack for 7 days, risk‑free. If your content doesn’t improve instantly, we’ll refund you — no questions asked.</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold">FAQ</h3>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4">
            <FAQ q="Is it compatible with CapCut / Premiere / DaVinci?" a="Yes, transitions, LUTs and SFX work in all common editors." />
            <FAQ q="Can I use it commercially?" a="Yes — commercial rights are included for your projects and clients." />
            <FAQ q="How do I get updates?" a="You receive a download link that remains valid for future versions." />
            <FAQ q="Do you offer refunds?" a="Yes — within 7 days if you’re not satisfied." />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section id="social">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="text-center">
            <h3 className="text-2xl font-semibold">What creators are saying</h3>
            <p className="mt-2 text-zinc-300">Join 3,200+ creators already using the pack.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Testimonial text="I used one LUT and my client thought I upgraded cameras." author="@vfxmood" />
            <Testimonial text="These SFX doubled my reel retention." author="@soundlab.studio" />
            <Testimonial text="Honestly, it’s plug‑and‑play magic." author="@editflow" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Reveal>
            <h3 className="text-3xl font-semibold">🚀 Transform your edits today</h3>
            <p className="mt-2 text-lg text-zinc-300">🎁 Get the Mega Creator Pack 2025 for $27 (normally $90). Real value $150.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <CtaButton
                id="footer-cta"
                href={CHECKOUT_URL}
                newTab={CHECKOUT_URL.startsWith("http")}
                ariaLabel="Buy now"
                className="btn-shine inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-4 text-lg font-semibold text-black shadow-xl shadow-emerald-500/25 ring-1 ring-white/20 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                🔥 Buy Now — Instant Access
              </CtaButton>
            </div>
            <p className="mt-3 text-sm text-zinc-400">Secure payment. No subscriptions. No limits.</p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
              <Badge>256‑bit SSL</Badge>
              <Badge>7‑Day Guarantee</Badge>
              <Badge>Lifetime Updates</Badge>
              <Badge>Commercial Use</Badge>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bonus Hook / Demo */}
      <section id="demo" className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-zinc-300">“I made this edit in 5 minutes — using free software. The secret? It’s not skill — it’s system.”</p>
            <p className="mt-2 text-zinc-400">Watch me turn a basic clip into a cinematic ad using only the Mega Creator Pack 2025.</p>
          </Reveal>
          <Reveal delayMs={120} className="mt-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 p-1">
              <div className="relative h-64 w-full rounded-xl bg-zinc-950">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20" aria-label="Play demo video">
                    <span className="absolute inset-0 -z-10 rounded-full bg-white/10 blur-xl group-hover:opacity-100" />
                    ▶
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <a href="#cta" className="text-emerald-300 hover:text-emerald-200">➜ Learn more below</a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
          <div className="text-sm text-zinc-400">© {new Date().getFullYear()} Mega Creator Pack 2025</div>
          <div className="flex gap-4 text-sm text-zinc-400">
            <a href="/legal/terms" className="hover:text-white">Terms</a>
            <a href="/legal/privacy" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({
  title,
  desc,
  hue,
}: {
  title: string;
  desc: string;
  hue: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
      <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${hue} opacity-25 blur-2xl`} />
      <div className="relative">
        <div className={`inline-flex items-center justify-center rounded-md bg-gradient-to-r ${hue} px-2 py-0.5 text-xs font-semibold text-black ring-1 ring-white/10`}>
          {title}
        </div>
        <p className="mt-2 text-zinc-300">{desc}</p>
      </div>
    </div>
  );
}

function ValueCell({ k, v }: { k: string; v: string }) {
  return (
    <div className="p-6">
      <div className="text-sm text-zinc-400">{k}</div>
      <div className="mt-1 font-medium text-zinc-100">{v}</div>
    </div>
  );
}

function Testimonial({ text, author }: { text: string; author: string }) {
  return (
    <Reveal className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-zinc-200">“{text}”</p>
      <div className="mt-3 text-sm text-zinc-400">— {author}</div>
    </Reveal>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <Reveal className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="font-medium text-zinc-100">{q}</div>
      <p className="mt-1 text-zinc-300">{a}</p>
    </Reveal>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
      {children}
    </span>
  );
}
