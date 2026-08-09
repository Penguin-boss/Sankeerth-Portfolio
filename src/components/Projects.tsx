"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/Project";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="work"
      className="section section--projects"
    >
      <div className="site-container">
        <div className="section-heading">
          <div className="section-heading__eyebrow">
            <span />
            Selected Work
          </div>

          <motion.h2
            className="section-heading__title"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.8,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            Things I've built.
          </motion.h2>
        </div>

        <div className="projects-list">
          {projects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
