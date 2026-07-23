import type { Project } from "@/lib/types";

interface ProjectEntryProps {
  project: Project;
}

export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <article className="group py-10 md:py-14">
      <span className="font-mono text-sm tracking-wider text-secondary">
        {project.index}
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
        {project.name}
      </h3>
      <p className="mt-3 max-w-lg font-body text-base leading-relaxed text-secondary md:text-lg">
        {project.description}
      </p>
    </article>
  );
}
