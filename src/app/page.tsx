import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import Profile from "@/components/Profile";
import Background from "@/components/Background";
import Closing from "@/components/Closing";
import JsonLd from "@/components/JsonLd";
import {
  absoluteUrl,
  identity,
  siteDescription,
  siteTitle,
  siteUrl,
} from "@/data/site";

/**
 * Home.
 *
 * Five blocks and no more: hero, selected work, profile, background, closing.
 * That is the whole page — the credentials, capability and experience sections
 * that used to sit side by side are one background block, and the oversized
 * contact statement is a closing line.
 */

const title = siteTitle;
const description = siteDescription;

/**
 * `absolute` because the layout's title template would otherwise append the
 * name twice to the home page title.
 */
export const metadata: Metadata = {
  title: { absolute: title },
  description,
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
};

/** Person schema — only facts the content file actually holds. */
const personSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: siteUrl,
  image: absoluteUrl("/hero-portrait.png"),
  jobTitle: identity.role,
  description,
  email: `mailto:${identity.email}`,
  sameAs: [identity.github, identity.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: identity.location.city,
    addressCountry: identity.location.countryCode,
  },
  knowsAbout: [
    "Frontend development",
    "Backend architecture",
    "Database design",
    "UI/UX planning",
    "AI-assisted development workflows",
  ],
  worksFor: {
    "@type": "Organization",
    name: "WishCraft Studios",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={personSchema} />

      <main id="main" className="page-enter">
        <Hero />
        <WorkList />
        <Profile />
        <Background />
        <Closing />
      </main>
    </>
  );
}
