"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/Project";
import { projects } from "@/data/portfolio";

type Filter =
  | "ALL"
  | "ONGOING"
  | "WEB"
  | "MOBILE";

export default function Projects() {
  const [filter, setFilter] =
    useState<Filter>("ALL");

  const filteredProjects =
    useMemo(() => {
      if (filter === "ALL") {
        return projects;
      }

      if (filter === "ONGOING") {
        return projects.filter(
          (project) =>
            project.status === "Ongoing"
        );
      }

      if (filter === "MOBILE") {
        return projects.filter(
          (project) =>
            project.isMobile
        );
      }

      return projects.filter(
        (project) =>
          !project.isMobile
      );
    }, [filter]);

  const filters: Filter[] = [
    "ALL",
    "ONGOING",
    "WEB",
    "MOBILE",
  ];

  return (
    <section
      id="work"
      className="projects-section"
    >
      <div className="projects-section__intro">
        <div className="projects-section__label">
          <span />
          SELECTED WORK
        </div>

        <p>
          A few things I’ve actually
          worked on.
        </p>
      </div>

      <div className="projects-section__toolbar">
        <div className="projects-filters">
          {filters.map((item) => {
            const active =
              filter === item;

            return (
              <button
                key={item}
                type="button"
                className={
                  active
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  setFilter(item)
                }
              >
                {item}
              </button>
            );
          })}
        </div>

        <span className="projects-section__count">
          {String(
            filteredProjects.length
          ).padStart(2, "0")}{" "}
          PROJECTS
        </span>
      </div>

      <motion.div
        className="projects-section__list"
        layout
      >
        {filteredProjects.map(
          (project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          )
        )}
      </motion.div>
    </section>
  );
}