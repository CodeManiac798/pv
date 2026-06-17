// =============================================================
//  THE PICTURE VILLA — content & media source of truth
// -------------------------------------------------------------
//  All imagery lives in /public/media — real Picture Villa
//  photography (pre-wedding, fashion/editorial, and the actual
//  named spaces of the estate). Originals are kept in
//  /public/media/raw/images; the files referenced below are the
//  curated, site-ready selections copied out of that archive.
// =============================================================

const m = (file) => `/media/${file}`;

export const NAV = [
  { label: "Spaces", href: "#worlds" },
  { label: "Experiences", href: "#transformation" },
  { label: "Gallery", href: "#stories" },
  { label: "About", href: "#estate" },
  { label: "Contact", href: "#visit" },
];

export const CONTACT = {
  phone: "+91 98100 00000",
  whatsapp:
    "https://wa.me/919810000000?text=Hi%20Picture%20Villa%2C%20I%27d%20love%20to%20book%20a%20visit%20for%20a%20shoot.",
  instagram: "https://www.instagram.com/thepicturevilla/",
  email: "hello@thepicturevilla.com",
  location: "Chhatarpur, New Delhi",
  mapsHint: "20 minutes from South Delhi",
};

export const HERO = {
  trust: [
    "18+ Cinematic Spaces",
    "Pre-Wedding Favourite",
    "Fashion & Music Shoots",
    "Premium Shoot Experience",
  ],
  // The hero now runs as a cinematic crossfading reel — each frame is a
  // full-bleed plate that holds for a beat, then dissolves into the next.
  slideshow: [
    m("hero-prewedding.jpg"),
    m("world-raj-mahal.jpg"),
    m("estate-wide.jpg"),
    m("hero-editorial.jpg"),
    m("trans-music.jpg"),
  ],
};

export const ESTATE = {
  wide: m("estate-wide.jpg"),
  inset: m("estate-inset.jpg"),
  stats: [
    { value: "18+", label: "Cinematic Worlds" },
    { value: "1", label: "Hidden Estate" },
    { value: "∞", label: "Stories" },
  ],
};

export const WORLDS = [
  {
    n: "01",
    name: "Raj Mahal",
    mood: "Regal · Architectural · Night-lit",
    img: m("world-raj-mahal.jpg"),
  },
  {
    n: "02",
    name: "The Colonnade",
    mood: "Warm · Moorish · Golden Hour",
    img: m("world-colonnade.jpg"),
  },
  {
    n: "03",
    name: "The Library",
    mood: "Intimate · Literary · Vintage",
    img: m("world-library.jpg"),
  },
  {
    n: "04",
    name: "Old English Room",
    mood: "Moody · Royal · Velvet",
    img: m("world-old-english.jpg"),
  },
  {
    n: "05",
    name: "The Conservatory",
    mood: "Dreamy · Glasshouse · Soft Light",
    img: m("world-conservatory.jpg"),
  },
  {
    n: "06",
    name: "Rustic Café",
    mood: "Playful · Hand-painted · Bohemian",
    img: m("world-rustic-cafe.jpg"),
  },
];

export const TRANSFORMATION = [
  {
    key: "pre-wedding",
    title: "Pre-Wedding",
    line: "Your love story, told like a film.",
    img: m("trans-prewedding.jpg"),
    share: "The 70%",
  },
  {
    key: "fashion",
    title: "Fashion & Editorial",
    line: "Campaign-grade frames, every time.",
    img: m("trans-fashion.jpg"),
    share: "",
  },
  {
    key: "music",
    title: "Music Videos",
    line: "Sets that carry the whole story.",
    img: m("trans-music.jpg"),
    share: "",
  },
  {
    key: "creators",
    title: "Creators & Brands",
    line: "Scroll-stopping content, on demand.",
    img: m("trans-creators.jpg"),
    share: "",
  },
];

export const CINEMATIC = {
  bg: m("cinematic.jpg"),
  quote: ["Some places", "you visit.", "This one,", "you remember."],
};

export const STORIES = [
  {
    img: m("story-1.jpg"),
    name: "Aanya & Veer",
    type: "Pre-Wedding Film",
    quote: "We didn't pose. We just lived a movie for a day.",
  },
  {
    img: m("story-2.jpg"),
    name: "Label — RÊVE",
    type: "Editorial Campaign",
    quote: "Every corner was a backdrop we didn't have to build.",
  },
  {
    img: m("story-3.jpg"),
    name: "Isha & Kabir",
    type: "Pre-Wedding",
    quote: "Our photos look unreal. People think we flew abroad.",
  },
  {
    img: m("story-4.jpg"),
    name: "Music — 'Saanjh'",
    type: "Music Video",
    quote: "One location. The whole narrative. Effortless.",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "Choose Your Experience",
    body: "Tell us your story. We'll match you to the worlds that fit it.",
  },
  {
    n: "02",
    title: "Visit The Villa",
    body: "Walk the estate. Feel the light. Imagine your frames.",
  },
  {
    n: "03",
    title: "Create Your Story",
    body: "Bring your team — or ours. The sets do half the work.",
  },
  {
    n: "04",
    title: "Walk Away Cinematic",
    body: "Leave with images that look like they belong on a screen.",
  },
];

export const MARQUEE = [
  "Pre-Weddings",
  "Fashion Editorials",
  "Music Videos",
  "Brand Films",
  "Creator Content",
  "Engagements",
];
