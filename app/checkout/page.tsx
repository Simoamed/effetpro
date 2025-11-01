"use client";

import Container from "../components/UI/Container";
import { SITE_CONFIG } from "../constants/content";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      <Container className="py-12">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-emerald-300">Secure Checkout</span>
          </div>

          <h1 className="text-4xl font-extrabold text-white mb-4">
            You're One Step Away From Leveling Up Your Edits 🎬✨
          </h1>

          <p className="text-xl text-white/80">
            Complete your purchase below — secure payment & instant access.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - What You'll Get */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Summary */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-bold text-white mb-6">What You'll Get Instantly</h2>

              <div className="space-y-4">
                {[
                  { icon: "⚡", text: "Immediate download access" },
                  { icon: "🔄", text: "Lifetime updates included" },
                  { icon: "🎁", text: "Bonus packs unlocked" },
                  { icon: "💬", text: "Dedicated support" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-xl">
                      {item.icon}
                    </div>
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70">EffetPro LUTs Pack</span>
                  <span className="text-white font-semibold">${SITE_CONFIG.price}</span>
                </div>
                <div className="flex items-center justify-between text-2xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-emerald-400">${SITE_CONFIG.price}</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 backdrop-blur">
              <div className="space-y-3">
                {[
                  { icon: "🔒", text: "100% Secure Checkout" },
                  { icon: "🛡️", text: "SSL Encrypted" },
                  { icon: "🌍", text: "Trusted by {SITE_CONFIG.customerCount} Editors Worldwide".replace("{SITE_CONFIG.customerCount}", SITE_CONFIG.customerCount) },
                  { icon: "⭐", text: "5-Star Rated — 4.9/5 Average" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-emerald-200">
                    <span>{item.icon}</span>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6 backdrop-blur text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="text-lg font-bold text-white mb-2">30-Day Satisfaction Guarantee</h3>
              <p className="text-sm text-white/70">
                Not happy? Get a full refund. No questions asked.
              </p>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>

              <form className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    required
                  />
                  <p className="mt-1 text-xs text-white/50">Download link will be sent here</p>
                </div>

                {/* Card Info */}
                <div>
                  <label htmlFor="card" className="block text-sm font-semibold text-white/90 mb-2">
                    Card Information
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      id="card"
                      placeholder="1234 5678 9012 3456"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      required
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        required
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Name on Card */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    required
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-white/90 mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="AU">Australia</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-[1.02] hover:shadow-emerald-500/50"
                >
                  Complete My Order — ${SITE_CONFIG.price} ✅
                </button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure SSL Encrypted Payment</span>
                </div>
              </form>

              {/* Bottom Info */}
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                <p className="text-white/70 mb-4">
                  ⚡ <span className="font-semibold text-emerald-400">Instant Access</span> — Start editing in 60 seconds
                </p>
                <p className="text-sm text-white/50">
                  Need help? Contact us anytime:<br />
                  <a href="mailto:support@effetpro.com" className="text-emerald-400 hover:text-emerald-300">
                    📧 support@effetpro.com
                  </a>
                </p>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="mt-6 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 text-center backdrop-blur">
              <p className="text-lg text-white/90">
                Thank you for your trust and welcome to the creator family 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mx-auto max-w-4xl mt-12 text-center">
          <p className="text-sm text-white/50 mb-4">We accept all major payment methods</p>
          <div className="flex items-center justify-center gap-4 opacity-50">
            <div className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900">VISA</div>
            <div className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900">MASTERCARD</div>
            <div className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900">AMEX</div>
            <div className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-slate-900">PAYPAL</div>
          </div>
        </div>
      </Container>
    </main>
  );
}
