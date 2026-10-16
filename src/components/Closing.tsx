import { closing, identity } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

const externalLinks = [
  { label: "GitHub", href: identity.github },
  { label: "LinkedIn", href: identity.linkedin },
  { label: "Résumé (PDF)", href: identity.resume },
] as const;

/**
 * Closing.
 *
 * The old contact section was a full-height statement with an oversized
 * headline. This says the same thing quietly: a heading at section size, one
 * line, the email as the single emphasised link on the page, and three links.
 */
export default function Closing() {
  return (
    <section id="contact" className="closing" aria-labelledby="contact-title">
      <div className="container">
        <div className="closing__inner">
          <h2 id="contact-title">{closing.heading}</h2>

          <p className="closing__line">{closing.line}</p>

          <a className="closing__email" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>

          <ul className="closing__links">
            {externalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight />
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
