import type { SectionMeta } from "@/lib/site";

type SectionHeadingProps = {
  section: SectionMeta;
  /** Optional supporting sentence below the title. */
  lede?: string;
};

/**
 * Section heading: eyebrow (number + label) above the title.
 *
 * The number is decorative, so it is hidden from assistive technology — a
 * screen reader announces "Profile", not "zero one — about Profile". The
 * heading itself carries the id the section's aria-labelledby points at, which
 * is what gives each <section> an accessible name in the landmarks list.
 */
export default function SectionHeading({ section, lede }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">
        <span aria-hidden="true">{section.index}</span>
        <span>{section.label}</span>
      </p>

      <h2 id={`${section.id}-title`} className="section-heading__title">
        {section.title}
      </h2>

      {lede ? <p className="section-heading__lede">{lede}</p> : null}
    </div>
  );
}
