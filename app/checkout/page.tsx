import { Metadata } from 'next';
import CheckoutCTA from '../components/CheckoutCTA';
import Container from "../components/UI/Container";

export const metadata: Metadata = {
  title: 'Wedding LUTs Master Collection - $37 (92% OFF)',
  description: '500+ professional wedding LUTs, drone LUTs, 120 emotional music tracks, and Golden Love presets. Instant download, lifetime access.',
  openGraph: {
    title: 'Wedding LUTs Master Collection - $37 (92% OFF)',
    description: '500+ professional wedding LUTs, drone LUTs, 120 emotional music tracks, and Golden Love presets.',
  },
};

export default function CheckoutPage() {
  return (
    <>
      <noscript>
        <div style={{ padding: '2rem', textAlign: 'center', background: '#0f172a' }}>
          <a
            href="https://whop.com/checkout/plan_2IPyBtpb088fz?redirect_url=https://effetpro.com/thank-you"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: '#e11d48',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Buy Wedding LUTs - $27
          </a>
        </div>
      </noscript>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white py-20">
        <Container>
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300 bg-clip-text text-5xl font-black text-transparent">
              Transform Your Wedding Films
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/80">
              Get instant access to 500+ professional LUTs, drone presets, and emotional music tracks.
            </p>
          </div>

          {/* Checkout CTA */}
          <CheckoutCTA />

          {/* Additional Trust Signals */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span>15,347+ Happy Customers</span>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
