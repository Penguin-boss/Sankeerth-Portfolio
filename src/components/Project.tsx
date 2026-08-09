"use client";

import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen?: (project: Project) => void;
};

function GithubIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.35 6.5-1.55 6.5-7A5.4 5.4 0 0 0 19 3.7 5 5 0 0 0 18.9 0S17.7-.4 15 1.3a13.4 13.4 0 0 0-7 0C5.3-.4 4.1 0 4.1 0A5 5 0 0 0 4 3.7a5.4 5.4 0 0 0-1.5 3.8c0 5.45 3.3 6.65 6.5 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 18c-3 .9-3-1.4-4.2-1.7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  const initial = project.name.charAt(0).toUpperCase();

  const projectType = project.isMobile ? "MOBILE" : "WEB";

  return (
    <article
      className="project-card-cinematic project-article"
      data-art-reveal
    >
      {/* =====================================================
          VISUAL
          ===================================================== */}

      <div className="project-visual project-visual--cinematic">
        <div className="project-visual__placeholder">
          <div className="project-visual__placeholder-grid" />

          <strong aria-hidden="true">{initial}</strong>
        </div>

        <div className="project-corner project-corner--tl" />
        <div className="project-corner project-corner--br" />

        <div className="project-scan-line" />

        <span className="project-visual__index">
          {number}
        </span>

        <span className="project-visual__type">
          {projectType}
        </span>
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div className="project-content project-content--cinematic">
        <div className="project-content__top">
          <span className="project-status">
            {project.status}
          </span>

          <span className="project-content__number">
            {number}
          </span>
        </div>

        <div className="project-title-wrap">
          <h3>{project.name}</h3>
        </div>

        <div className="project-accent-line" />

        <p>{project.description}</p>

        {/* Contribution */}

        <div className="project-contribution">
          <span>My Contribution</span>

          <strong>
            {project.role.join(" · ")}
          </strong>
        </div>

        {/* Stack */}

        <div className="project-stack">
          {project.stack.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}

        <div className="project-actions">
          <button
            type="button"
            className="text-link"
            onClick={() => onOpen?.(project)}
          >
            Read the breakdown
            <ArrowIcon />
          </button>

          <div className="project-actions__links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} GitHub`}
              >
                <GithubIcon />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live website`}
              >
                <ArrowIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}