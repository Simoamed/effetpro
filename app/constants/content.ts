// Site configuration
export const SITE_CONFIG = {
  name: "EffetPro",
  tagline: "Wedding LUTs Master Collection — 500+ Cinematic LUTs",
  description: "Turn every wedding into a cinematic masterpiece with 500+ professional LUTs",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "support@effetpro.com",
  phone: "+33 0 000 000",
  location: "France - Remote",
  price: "27.00",
  originalPrice: "497.00",
  currency: "USD",
  discount: "60%",
  rating: "4.9",
  reviewCount: "3200",
  customerCount: "2,000+",
  guaranteeDays: "30",
};

// Product features with value
export const PRODUCT_FEATURES = [
  {
    id: "luts",
    title: "500+ Wedding LUTs (cube, 3dl)",
    value: "$197",
    color: "rose",
  },
  {
    id: "drone",
    title: "30 Drone LUTs (aerial friendly)",
    value: "$97",
    color: "amber",
  },
  {
    id: "music",
    title: "120 Emotional Music Tracks",
    value: "$87",
    color: "emerald",
  },
  {
    id: "presets",
    title: "Golden Love Lightroom Presets",
    value: "$67",
    color: "indigo",
  },
  {
    id: "class",
    title: "Mini class: Cinematic Color (10 min)",
    value: "$27",
    color: "fuchsia",
  },
  {
    id: "lifetime",
    title: "Lifetime access + free updates",
    value: "$22",
    color: "cyan",
  },
];

// Trust badges & guarantees
export const TRUST_BADGES = [
  {
    id: "instant",
    icon: "⚡",
    title: "Instant Download",
    description: "Get access in 60 seconds",
  },
  {
    id: "guarantee",
    icon: "🛡️",
    title: "30-Day Money Back",
    description: "100% satisfaction guaranteed",
  },
  {
    id: "support",
    icon: "💬",
    title: "24/7 Support",
    description: "We're here to help anytime",
  },
  {
    id: "secure",
    icon: "🔒",
    title: "Secure Checkout",
    description: "SSL encrypted payment",
  },
];

// Why choose benefits (result-focused)
export const BENEFITS = [
  {
    id: "handcrafted",
    title: "Grade a full wedding in 15 minutes instead of 4 hours",
    description: "500+ LUTs handcrafted specifically for weddings, engagements & romantic films.",
    color: "rose",
  },
  {
    id: "skin-tones",
    title: "Make every couple look flawless — automatically",
    description: "Optimized for natural skin tones with dreamy, flattering highlights that brides love.",
    color: "amber",
  },
  {
    id: "compatible",
    title: "Works with your favorite tools, right away",
    description: "Drag & drop in Premiere Pro, Lightroom, DaVinci Resolve & Final Cut Pro.",
    color: "emerald",
  },
  {
    id: "cameras",
    title: "Perfect results from any camera — Sony, Canon, DJI",
    description: "Pre-calibrated for all major camera brands. No technical adjustments needed.",
    color: "indigo",
  },
];

// Signature looks gallery
export const SIGNATURE_LOOKS = [
  { src: "/imgs/pexels-mlkbnl-12737998.jpg", name: "Bridal Soft Film", alt: "Bridal soft film wedding LUT example" },
  { src: "/imgs/pexels-aydin-photography-298758980-31084048.jpg", name: "Black & White Elegance", alt: "Black and white elegance wedding LUT" },
  { src: "/imgs/pexels-bikareantalya-34206659.jpg", name: "Golden Romance", alt: "Golden romance wedding LUT example" },
  { src: "/imgs/pexels-emma-bauso-1183828-2253870.jpg", name: "Soft Pastel", alt: "Soft pastel wedding LUT example" },
  { src: "/imgs/pexels-filipgrobgaard-18612642.jpg", name: "Cinematic Teal", alt: "Cinematic teal wedding LUT example" },
  { src: "/imgs/pexels-helen1-15278442.jpg", name: "Dreamy Glow", alt: "Dreamy glow wedding LUT example" },
  { src: "/imgs/pexels-khezez-15524745.jpg", name: "Warm Film", alt: "Warm film wedding LUT example" },
  { src: "/imgs/pexels-lazarus-ziridis-2154851868-34282175.jpg", name: "Clean White", alt: "Clean white wedding LUT example" },
  { src: "/imgs/pexels-olcayertem06-13841073.jpg", name: "Moody Love", alt: "Moody love wedding LUT example" },
  { src: "/imgs/pexels-photography-maghradze-ph-1659410-17895974.jpg", name: "Vintage Rose", alt: "Vintage rose wedding LUT example" },
  { src: "/imgs/pexels-thegenner-11102875.jpg", name: "Sunset Gold", alt: "Sunset gold wedding LUT example" },
  { src: "/imgs/pexels-ucantereyagi-14811301.jpg", name: "Bright & Airy", alt: "Bright and airy wedding LUT example" },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: "emma",
    name: "Emma L.",
    role: "Wedding Videographer",
    avatar: "/imgs/pexels-mlkbnl-12737998.jpg",
    rating: 5,
    quote: "These LUTs changed my editing workflow! My clients keep saying: it feels like a movie!",
  },
  {
    id: "marco",
    name: "Marco V.",
    role: "Photographer",
    avatar: "/imgs/pexels-olcayertem06-13841073.jpg",
    rating: 5,
    quote: "Golden Love presets are incredible for skin tones. I use them for every couple session now.",
  },
  {
    id: "james",
    name: "James K.",
    role: "Filmmaker",
    avatar: "/imgs/pexels-thegenner-11102875.jpg",
    rating: 5,
    quote: "The Drone LUTs are unreal. My aerial shots finally look cinematic!",
  },
];

// About author
export const AUTHOR = {
  name: "Simo Ahmada",
  title: "Photographer & Videographer",
  avatar: "/portrait/portrait.jpg.JPG",
  bio: "Hey, I'm Simo Ahmada — Photographer & Videographer specialized in weddings & cinematic storytelling. I've spent years crafting emotional visuals for couples around the world. These LUTs and presets are the same ones I use for my professional projects — now available for you.",
  highlights: [
    "Founder of Ahmada Photography",
    "7+ years experience in color grading & storytelling",
    "Trusted by 2000+ creators worldwide",
  ],
};

// Footer links
export const FOOTER_LINKS = {
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Refund Policy", href: "/legal/refund" },
    { label: "Disclaimer", href: "/legal/terms#disclaimer" },
  ],
  resources: [
    { label: "Why This Pack", href: "#why" },
    { label: "Install Guides (Premiere/Lightroom)", href: "#install-guides" },
    { label: "Pricing & FAQ", href: "#faq" },
    { label: "Get the Pack", href: "#get-pack" },
  ],
  social: [
    { platform: "Instagram", label: "IG", href: "#", ariaLabel: "Instagram" },
    { platform: "YouTube", label: "YT", href: "#", ariaLabel: "YouTube" },
    { platform: "TikTok", label: "TT", href: "#", ariaLabel: "TikTok" },
  ],
};

// FAQ data for structured data
export const FAQ_DATA = [
  {
    question: "Is it compatible with CapCut / Premiere / DaVinci?",
    answer: "Yes! Our LUTs work with Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, and Lightroom. They're in .cube and .3dl formats for maximum compatibility.",
  },
  {
    question: "Can I use it commercially?",
    answer: "Absolutely! You can use these LUTs for client work, weddings, commercial projects, and more. Full commercial license included.",
  },
  {
    question: "How do I get updates?",
    answer: "All updates are free and lifetime. You'll receive an email whenever new LUTs or presets are added to the collection.",
  },
];

// Before/After demo images
export const DEMO_IMAGES = {
  before: "/before-after/wed-6.jpg",
  after: "/before-after/wed-6.jpg",
};

// Demo videos
export const DEMO_VIDEOS = {
  raw: "/video/lut-wedding-before-after-2.mp4",
  graded: "/video/video3.mp4",
  hero: "/video/video3.mp4",
};

// Product mockup
export const PRODUCT_MOCKUP = "/mockups/11111.png";
