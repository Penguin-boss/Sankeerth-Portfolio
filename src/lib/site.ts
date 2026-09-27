/**
 * Site-level configuration: the single list of navigable sections and the
 * canonical external URLs.
 *
 * Keeping the section list in one place means the navigation bar, the mobile
 * sheet, the footer and the section headings can never disagree about labels,
 * order or numbering — which is the usual cause of a nav item pointing at a
 * heading that says something else.
 */

export type SectionId =
  | "about"
  | "work"
  | "credentials"
  | "skills"
  | "experience"
  | "contact";

export type SectionMeta = {
  /** Anchor id, also the fragment used in the URL. */
  readonly id: SectionId;
  /** Short label for navigation. Sentence case, no jargon. */
  readonly label: string;
  /** Decorative sequence number shown in the section eyebrow. */
  readonly index: string;
  /** Heading shown at the top of the section itself. */
  readonly title: string;
};

export const sections: readonly SectionMeta[] = [
  { id: "about", label: "About", index: "01", title: "Profile" },
  { id: "work", label: "Work", index: "02", title: "Selected work" },
  {
    id: "credentials",
    label: "Credentials",
    index: "03",
    title: "Credentials",
  },
  { id: "skills", label: "Skills", index: "04", title: "Capabilities" },
  {
    id: "experience",
    label: "Experience",
    index: "05",
    title: "Experience & education",
  },
  { id: "contact", label: "Contact", index: "06", title: "Get in touch" },
];

export const sectionIds = sections.map((section) => section.id);

/** Fragments kept working after the Hackathons and Certificates merge. */
export const legacyFragments: Record<string, SectionId> = {
  hackathons: "credentials",
  hackathon: "credentials",
  certificates: "credentials",
  projects: "work",
};

export const siteUrl = "https://sankeerth-portfolio.vercel.app";
