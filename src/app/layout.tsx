import type { Metadata, Viewport } from "next";
import { fraunces, inter } from "@/lib/fonts";
import {
  identity,
  keywords,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/data/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

/**
 * Root layout.
 *
 * One metadata block, one title, one role description — the same strings the
 * hero shows and the structured data carries. `metadataBase` makes every
 * relative URL below resolve against the real domain, and the canonical that
 * used to point at sankeerth-portfolio.vercel.app is gone.
 */

const title = siteTitle;
const description = siteDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${identity.name}`,
  },
  description,
  keywords: [...keywords],
  authors: [{ name: identity.name, url: siteUrl }],
  creator: identity.name,
  publisher: identity.name,
  applicationName: `${identity.name} — portfolio`,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: identity.name,
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  /* No maximumScale: pinch-zoom is an accessibility feature. */
  colorScheme: "dark",
  themeColor: "#0A192F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
