import { siteContent } from "@/lib/content";
import { SectionAnchor } from "@/components/shared/SectionAnchor";
import { DetailGrid } from "@/components/ui/DetailGrid";
import { Reveal } from "@/components/ui/Reveal";

export function Context() {
  const { summary, details } = siteContent;

  return (
    <section className="px-6 py-24 md:px-10 md:py-40" aria-label="About">
      <SectionAnchor id="about" />
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            {summary.map((paragraph, i) => (
              <p
                key={i}
                className="mt-6 font-body text-lg leading-relaxed text-primary/90 first:mt-0 md:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 max-w-sm md:mt-20">
            <DetailGrid details={details} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
