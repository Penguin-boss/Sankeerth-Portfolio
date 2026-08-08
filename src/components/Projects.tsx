"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Globe2,
  Layers3,
  X,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Project, projects } from "@/data/portfolio";

type FilterType = "All" | "Ongoing" | "Web" | "Mobile";

const filters: { id: FilterType; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Ongoing", label: "Ongoing" },
  { id: "Web", label: "Web" },
  { id: "Mobile", label: "Mobile" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<FilterType>("All");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "Ongoing") {
      return project.status === "Ongoing";
    }

    if (activeFilter === "Web") {
      return !project.isMobile;
    }

    if (activeFilter === "Mobile") {
      return project.isMobile;
    }

    return true;
  });

  return (
    <section id="work" className="section section--projects">
      <div className="site-container">
        <SectionHeading
          eyebrow="02 — selected work"
          title="Projects"
          id="work-heading"
        />

        <div className="project-controls">
          <div
            className="project-filters"
            role="tablist"
            aria-label="Project filters"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`project-filter ${
                    active ? "is-active" : ""
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <p className="project-controls__hint">
            A few things I have actually worked on.
          </p>
        </div>

        <motion.div layout className="projects-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`project-article project-article--${
                  index % 3
                }`}
              >
                <div className="project-visual" aria-hidden="true">
                  <span className="project-visual__index">
                    0{index + 1}
                  </span>

                  <span className="project-visual__initial">
                    {project.name.charAt(0)}
                  </span>

                  <span className="project-visual__type">
                    {project.isMobile ? "MOBILE" : "WEB"}
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-content__top">
                    <span className="project-status">
                      {project.status}
                    </span>

                    <span className="project-content__number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="project-contribution">
                    <span>My contribution</span>

                    <strong>
                      {project.role.slice(0, 2).join(" · ")}
                    </strong>
                  </div>

                  <div className="project-actions">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProject(project)
                      }
                      className="text-link"
                    >
                      Read the breakdown
                      <ArrowUpRight size={15} />
                    </button>

                    <div className="project-actions__links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} GitHub`}
                        >
                          <Github size={16} />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} live site`}
                        >
                          <Globe2 size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.name} details`}
          >
            <motion.button
              type="button"
              className="project-modal__backdrop"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 22,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="project-modal__panel"
            >
              <button
                type="button"
                className="project-modal__close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <span className="project-status">
                {selectedProject.status}
              </span>

              <h3>{selectedProject.name}</h3>

              <p className="project-modal__description">
                {selectedProject.description}
              </p>

              <div className="project-modal__section">
                <span>
                  <Layers3 size={14} />
                  Contribution
                </span>

                <div className="project-modal__list">
                  {selectedProject.role.map((role) => (
                    <p key={role}>{role}</p>
                  ))}
                </div>
              </div>

              <div className="project-modal__section">
                <span>Stack</span>

                <p className="project-modal__stack">
                  {selectedProject.stack.join(" · ")}
                </p>
              </div>

              <div className="project-modal__actions">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--secondary"
                  >
                    <Github size={16} />
                    Repository
                  </a>
                )}

                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--primary"
                  >
                    <Globe2 size={16} />
                    Live site
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
