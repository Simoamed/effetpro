import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Wedding LUTs Master Collection — 500+ Cinematic LUTs",
  description:
    "Turn every wedding into a cinematic masterpiece. 500+ LUTs for Premiere Pro & Lightroom + Drone LUTs, music, presets. $27 one‑time, lifetime access.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wedding LUTs Master Collection",
    description:
      "500+ cinematic LUTs for weddings + bonuses. One‑click results.",
    siteName: "Wedding LUTs Master",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wedding LUTs Master Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding LUTs Master Collection",
    description:
      "500+ cinematic LUTs for weddings + bonuses. One‑click results.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#cta" className="skip-link">Skip to main content</a>
        {/* GA4 (conditionally injected) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script
            id="ga4"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        )}
        {/* Meta Pixel (conditionally injected) */}
        {process.env.NEXT_PUBLIC_FB_PIXEL && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {children}
        {/* JSON-LD schema.org Product + FAQ */}
        <Script id="ld-product" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Wedding LUTs Master Collection',
            description:
              '500+ cinematic LUTs for weddings + drone LUTs, music and presets. Lifetime access.',
            offers: {
              '@type': 'Offer',
              price: '27.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: siteUrl,
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '3200',
            },
          })}
        </Script>
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is it compatible with CapCut / Premiere / DaVinci?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, transitions, LUTs and SFX work in all common editors.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use it commercially?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, commercial rights are included for your projects and clients.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I get updates?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You receive a download link that remains valid for future versions.',
                },
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
