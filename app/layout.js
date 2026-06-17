import "./globals.css";
import { Fraunces, Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
});

export const metadata = {
  title: "The Picture Villa — Every Frame Feels Cinematic",
  description:
    "A cinematic world hidden inside Delhi — crafted for unforgettable pre-weddings, fashion stories, and visual experiences. Every frame feels cinematic.",
  keywords: [
    "pre-wedding shoot Delhi",
    "cinematic photography villa",
    "fashion editorial location",
    "music video shoot Delhi",
    "The Picture Villa",
  ],
  openGraph: {
    title: "The Picture Villa — Every Frame Feels Cinematic",
    description:
      "A cinematic world hidden inside Delhi. Crafted for unforgettable pre-weddings, fashion stories, and visual experiences.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#1a140e",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cormorant.variable} ${hanken.variable}`}
    >
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
