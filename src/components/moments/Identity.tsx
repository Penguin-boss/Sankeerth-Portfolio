import { siteContent } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Identity() {
  const { identity } = siteContent;

  return (
    <section
      className="flex min-h-svh flex-col justify-center px-6 pt-20 pb-16 md:px-10"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] font-bold leading-[0.9] tracking-tighter text-primary">
            {identity.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 max-w-md md:mt-10 md:ml-auto md:max-w-sm md:text-right">
            <p className="font-mono text-sm leading-relaxed tracking-wide text-secondary">
              {identity.role}
            </p>
            <p className="font-mono text-sm leading-relaxed tracking-wide text-secondary">
              {identity.company} · {identity.location}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-xl font-body text-base leading-relaxed text-secondary/80 md:mt-16 md:text-lg">
            {identity.headline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
