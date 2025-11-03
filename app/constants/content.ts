// Site configuration
export const SITE_CONFIG = {
  name: "EffetPro",
  tagline: "Wedding LUTs Master Collection",
  description: "+500 LUTs professionnels pour Adobe Premiere Pro & Lightroom — conçus spécialement pour les mariages, films romantiques et clips cinématiques",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "support@effetpro.com",
  phone: "+33 0 000 000",
  location: "France - Remote",
  price: "37",
  originalPrice: "497.00",
  currency: "USD",
  discount: "92%",
  rating: "4.9",
  reviewCount: "3200",
  customerCount: "15,347+",
  targetAudience: "Video Editors",
  guaranteeDays: "30",
};

// Main Product Offer (LUTs only)
export const MAIN_OFFER = [
  {
    id: "luts",
    title: "500+ Wedding LUTs (cube, 3dl)",
    description: "Pour Adobe Premiere Pro & Lightroom — Formats universels compatibles avec tous les logiciels de montage",
    value: "$197",
    color: "rose",
  },
  {
    id: "drone",
    title: "30 Drone LUTs (aerial friendly)",
    description: "Spécialement calibrés pour les vidéos aériennes de mariage et paysages romantiques",
    value: "$97",
    color: "amber",
  },
];

// Exclusive Bonuses
export const EXCLUSIVE_BONUSES = [
  {
    id: "lifetime",
    title: "Accès à vie + mises à jour gratuites",
    description: "Toutes les futures LUTs ajoutées au pack sans frais supplémentaires",
    value: "$22",
    color: "emerald",
    icon: "🔄",
  },
  {
    id: "music",
    title: "🎶 120 Musiques émotionnelles libres de droits",
    description: "Parfaites pour vidéos de mariage, storytelling, love moments",
    value: "$87",
    color: "purple",
    icon: "🎶",
  },
  {
    id: "presets",
    title: "💛 Pack Presets Lightroom \"Golden Love\"",
    description: "30 presets pour sublimer les tons de peau et l'ambiance dorée",
    value: "$67",
    color: "amber",
    icon: "💛",
  },
  {
    id: "class",
    title: "🎥 \"Cinematic Color Mastery Session\"",
    description: "Mini masterclass de 10 minutes sur le color grading cinématique",
    value: "$27",
    color: "blue",
    icon: "🎥",
  },
];

// Legacy export for compatibility
export const PRODUCT_FEATURES = [...MAIN_OFFER, ...EXCLUSIVE_BONUSES];

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
    title: "Gradez un mariage complet en 15 minutes au lieu de 4 heures",
    description: "500+ LUTs créés spécifiquement pour les mariages, fiançailles et films romantiques.",
    color: "rose",
  },
  {
    id: "skin-tones",
    title: "Des tons de peau parfaits automatiquement",
    description: "Optimisés pour des tons naturels avec des reflets flatteurs que les mariés adorent.",
    color: "amber",
  },
  {
    id: "compatible",
    title: "Compatible avec vos outils favoris immédiatement",
    description: "Drag & drop dans Premiere Pro, Lightroom, DaVinci Resolve & Final Cut Pro.",
    color: "emerald",
  },
  {
    id: "cameras",
    title: "Résultats parfaits peu importe la caméra — Sony, Canon, DJI",
    description: "Pré-calibrés pour toutes les grandes marques. Aucun ajustement technique nécessaire.",
    color: "orange",
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
    role: "Wedding Editor",
    avatar: "/imgs/pexels-mlkbnl-12737998.jpg",
    rating: 5,
    quote: "These LUTs changed my editing workflow! My clients keep saying: it feels like a movie!",
  },
  {
    id: "marco",
    name: "Marco V.",
    role: "Video Editor",
    avatar: "/imgs/pexels-olcayertem06-13841073.jpg",
    rating: 5,
    quote: "Golden Love presets are incredible for skin tones. I use them for every couple session now.",
  },
  {
    id: "james",
    name: "James K.",
    role: "Video Editor",
    avatar: "/imgs/pexels-thegenner-11102875.jpg",
    rating: 5,
    quote: "The Drone LUTs are unreal. My aerial shots finally look cinematic!",
  },
];

// About author
export const AUTHOR = {
  name: "Simo Ahmada",
  title: "Professional Video Editor & Colorist",
  avatar: "/portrait/portrait.jpg.JPG",
  bio: "Hey, I'm Simo Ahmada — Professional Video Editor & Colorist specialized in weddings & cinematic storytelling. I've spent years crafting emotional visuals for couples around the world. These LUTs and presets are the same ones I use for my professional projects — now available for video editors worldwide.",
  highlights: [
    "Founder of Ahmada Photography",
    "7+ years experience in color grading & storytelling",
    "Trusted by 15,347+ video editors worldwide",
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
    answer: "Yes! Our LUTs work with Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro, CapCut, and Lightroom. They're in .cube and .3dl formats for maximum compatibility across all major editing software.",
  },
  {
    question: "Can I use it commercially?",
    answer: "Absolutely! You can use these LUTs for client work, weddings, commercial projects, YouTube videos, and more. Full commercial license included with no restrictions.",
  },
  {
    question: "How do I get updates?",
    answer: "All updates are free and lifetime. You'll receive an email whenever new LUTs or presets are added to the collection. No recurring fees ever.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not happy with your purchase, contact us and we'll issue a full refund. No questions asked.",
  },
  {
    question: "How do I download the files?",
    answer: "Instant download! After purchase, you'll get immediate access to download all 500+ LUTs, presets, and bonuses. Files are delivered as a ZIP file.",
  },
  {
    question: "Do I need experience to use these?",
    answer: "Not at all! Our LUTs are beginner-friendly. Just drag & drop into your editing software and apply with one click. Includes a 10-minute tutorial video.",
  },
  {
    question: "Will these work on Log footage?",
    answer: "Yes! We include LUTs specifically designed for Log profiles (S-Log, C-Log, V-Log) as well as LUTs for standard Rec.709 footage.",
  },
  {
    question: "Can I re-download if I lose the files?",
    answer: "Yes! You have lifetime access. Log into your account anytime to re-download all files, even years later.",
  },
];

// Company logos for social proof
export const COMPANY_LOGOS = [
  { name: "Adobe", logo: "🎨" },
  { name: "Netflix", logo: "🎬" },
  { name: "Sony", logo: "📹" },
  { name: "Canon", logo: "📷" },
  { name: "Vimeo", logo: "▶️" },
  { name: "YouTube", logo: "📺" },
];

// Software compatibility logos
export const SOFTWARE_LOGOS = [
  { name: "Premiere Pro", abbr: "Pr", color: "from-[#00005B] to-[#00005B]", bgColor: "bg-[#00005B]" },
  { name: "After Effects", abbr: "Ae", color: "from-[#00005B] to-[#00005B]", bgColor: "bg-[#00005B]" },
  { name: "Photoshop", abbr: "Ps", color: "from-[#001E36] to-[#001E36]", bgColor: "bg-[#001E36]" },
  { name: "Lightroom", abbr: "Lr", color: "from-[#001E36] to-[#001E36]", bgColor: "bg-[#001E36]" },
  { name: "CapCut", abbr: "CC", color: "from-[#000000] to-[#000000]", bgColor: "bg-[#000000]" },
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
  howToUse: "/video/how to use 1.mp4",
};

// Product mockup
export const PRODUCT_MOCKUP = "/imgs/for site 8.png";
