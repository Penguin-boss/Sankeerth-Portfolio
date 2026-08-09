"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Project";
import { projects, type Project } from "@/data/portfolio";

type Filter = "ALL" | "ONGOING" | "WEB" | "MOBILE";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filters: Filter[] = [
    "ALL",
    "ONGOING",
    "WEB",
    "MOBILE",
  ];

  const filteredProjects = useMemo(() => {
    switch (filter) {
      case "ONGOING":
        return projects.filter(
          (project) => project.status === "Ongoing"
        );

      case "MOBILE":
        return projects.filter(
          (project) => project.isMobile === true
        );

      case "WEB":
        return projects.filter(
          (project) => project.isMobile !== true
        );

      case "ALL":
      default:
        return projects;
    }
  }, [filter]);

  return (
    <section
      id="work"
      className="section section--projects"
    >
      <div className="site-container">

        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <div className="section-heading">
          <p className="section-heading__eyebrow">
            <span />
            Selected Work
          </p>

          <h2 className="section-heading__title">
            Things I've built.
          </h2>
        </div>

        {/* ==================================================
            PROJECT CONTROLS
        ================================================== */}

        <div className="project-controls">

          <div className="project-filters">
            {filters.map((item) => {
              const active = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  className={`project-filter ${
                    active ? "is-active" : ""
                  }`}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <p className="project-controls__hint">
            A few things I've actually worked on.
          </p>

        </div>

        {/* ==================================================
            PROJECT LIST
        ================================================== */}

        <motion.div
          className="projects-list"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </motion.div>

      </div>

      {/* ====================================================
          PROJECT MODAL
      ==================================================== */}

      {selectedProject && (
        <div className="project-modal">

          <button
            type="button"
            className="project-modal__backdrop"
            aria-label="Close project"
            onClick={() => setSelectedProject(null)}
          />

          <div className="project-modal__panel">

            <button
              type="button"
              className="project-modal__close"
              aria-label="Close project"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <span className="project-status">
              {selectedProject.status}
            </span>

            <h3>
              {selectedProject.name}
            </h3>

            <p className="project-modal__description">
              {selectedProject.description}
            </p>

            {/* Contribution */}

            <div className="project-modal__section">
              <span>My Contribution</span>

              <div className="project-modal__list">
                {selectedProject.role.map((role) => (
                  <p key={role}>
                    {role}
                  </p>
                ))}
              </div>
            </div>

            {/* Stack */}

            <div className="project-modal__section">
              <span>Technology</span>

              <p className="project-modal__stack">
                {selectedProject.stack.join(" · ")}
              </p>
            </div>

            {/* Links */}

            <div className="project-modal__actions">

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--secondary"
                >
                  GitHub
                </a>
              )}

              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                >
                  Visit Website
                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}

            </div>

          </div>
        </div>
      )}
    </section>
  );
}