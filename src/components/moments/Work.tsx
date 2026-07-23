import { siteContent } from "@/lib/content";
import { SectionAnchor } from "@/components/shared/SectionAnchor";
import { ProjectEntry } from "@/components/ui/ProjectEntry";
import { HackathonEntry } from "@/components/ui/HackathonEntry";
import { Reveal } from "@/components/ui/Reveal";

export function Work() {
  const { projects, hackathon } = siteContent;

  return (
    <section className="px-6 py-24 md:px-10 md:py-40" aria-label="Work">
      <SectionAnchor id="work" />
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          {projects.map((project, i) => (
            <Reveal key={project.index} delay={i * 0.08}>
              <div
                className={
                  i < projects.length - 1
                    ? "border-b border-surface"
                    : ""
                }
              >
                <ProjectEntry project={project} />
              </div>
            </Reveal>
          ))}

          <Reveal delay={projects.length * 0.08}>
            <div className="border-t border-surface">
              <HackathonEntry hackathon={hackathon} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
