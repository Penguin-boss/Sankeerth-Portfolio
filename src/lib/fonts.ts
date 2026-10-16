import { Fraunces, Inter } from "next/font/google";

/**
 * Two fonts, no more.
 *
 *   Inter     — body copy, labels, navigation. Neutral and highly legible at
 *               small sizes, which is where most of the site lives.
 *   Fraunces  — display only (the name, section headings, project titles). A
 *               real serif gives the large type some character without adding
 *               a second colour or any decoration.
 *
 * Both are variable fonts served as woff2 from our own origin, preloaded by
 * next/font, so there is no third-party request and no font swap shift.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
