import type { HackathonEntry as HackathonData } from "@/lib/types";

interface HackathonEntryProps {
  hackathon: HackathonData;
}

export function HackathonEntry({ hackathon }: HackathonEntryProps) {
  return (
    <article className="py-10 md:py-14">
      <span
        className="inline-block font-body text-sm tracking-wider text-signal"
        aria-hidden="true"
      >
        ✦
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
        {hackathon.name}
      </h3>
      <p className="mt-3 font-body text-base leading-relaxed text-secondary md:text-lg">
        {hackathon.progression.join(" · ")}
      </p>
      <p className="mt-1 font-body text-base font-medium text-signal md:text-lg">
        {hackathon.result}
      </p>
    </article>
  );
}
