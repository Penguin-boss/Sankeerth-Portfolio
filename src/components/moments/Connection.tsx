import { siteContent } from "@/lib/content";
import { SectionAnchor } from "@/components/shared/SectionAnchor";
import { Reveal } from "@/components/ui/Reveal";

export function Connection() {
  const { contact } = siteContent;

  return (
    <footer className="px-6 py-24 md:px-10 md:py-40" role="contentinfo">
      <SectionAnchor id="connect" />
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-10 grid gap-4 md:mt-14" role="list">
            {contact.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2 font-mono text-sm tracking-wider text-secondary transition-colors duration-200 hover:text-signal"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="border-b border-transparent transition-colors duration-200 group-hover:border-signal">
                    {link.label}
                  </span>
                  {link.external && (
                    <span className="text-xs" aria-hidden="true">
                      ↗
                    </span>
                  )}
                  {link.external && (
                    <span className="sr-only">(opens in a new tab)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-20 font-mono text-xs tracking-wider text-secondary/50 md:mt-28">
            {contact.copyright}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
