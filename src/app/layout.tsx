import type { Metadata, Viewport } from "next";

/* Self-hosted so there is no third-party font request on first paint.
   Inter was previously loaded and never used — dropped. Space Grotesk is the
   display face, IBM Plex Mono carries the metadata; body copy uses the reader's
   own system font (HIG — Typography: the system font is tuned for UI
   legibility at every size and already matches the reader's settings). */
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sankeerth Devella — Student Builder",
    template: "%s — Sankeerth Devella",
  },
  description:
    "Student builder at WishCraft Studios. Frontend, backend, database setup and frontend integration, with AI-assisted development workflows.",
  keywords: [
    "Sankeerth Devella",
    "student developer",
    "frontend developer",
    "WishCraft Studios",
    "Next.js",
    "Hyderabad",
  ],
  authors: [{ name: "Sankeerth Devella" }],
  creator: "Sankeerth Devella",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sankeerth Devella",
    title: "Sankeerth Devella — Student Builder",
    description:
      "Frontend, backend, database setup and frontend integration, with AI-assisted development workflows.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankeerth Devella — Student Builder",
    description:
      "Frontend, backend, database setup and frontend integration, with AI-assisted development workflows.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  /* No maximumScale / userScalable lock: pinch-zoom is an accessibility
     feature, and disabling it is the single most common way a site becomes
     unusable for low-vision readers. */
  viewportFit: "cover",
  themeColor: "#07090D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body>
        {/* First tab stop on the page — HIG (Accessibility): give keyboard
            users a direct route past repeated navigation. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <div className="site-backdrop" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
