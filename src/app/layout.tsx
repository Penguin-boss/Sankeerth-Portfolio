import type { Metadata, Viewport } from "next";
import { spaceGrotesk, inter, spaceMono } from "@/lib/fonts";
import { siteMetadata } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <a href="#work" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
