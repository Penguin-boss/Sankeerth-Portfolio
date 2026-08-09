"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
} from "lucide-react";
import { useRef } from "react";
import type { Project as ProjectData } from "@/data/portfolio";

type ProjectCardProps = {
  project: ProjectData;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-5%", "5%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1, 1.05]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [35, 0, -20]
  );

  return (
    <motion.article
      ref={ref}
      className={`project-card project-card--${index % 2 === 0 ? "left" : "right"}`}
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* =====================================================
          PROJECT VISUAL
          ===================================================== */}

      <motion.div
        className="project-card__visual"
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0)",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          className="project-card__image"
          style={{
            y: imageY,
            scale: imageScale,
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} project preview`}
              loading="lazy"
            />
          ) : (
            <div className="project-card__letter">
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>
                {project.name.charAt(0)}
              </strong>
            </div>
          )}
        </motion.div>

        <div className="project-card__grid" />

        <div className="project-card__frame" />

        <div className="project-card__top">
          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span>
            {project.isMobile
              ? "MOBILE"
              : "WEB"}
          </span>
        </div>

        <div className="project-card__bottom">
          <span>
            {project.status}
          </span>
        </div>

        <motion.div
          className="project-card__scan"
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        />
      </motion.div>

      {/* =====================================================
          PROJECT INFORMATION
          ===================================================== */}

      <motion.div
        className="project-card__content"
        style={{
          y: contentY,
        }}
      >
        <div className="project-card__meta">
          <span>
            {project.status}
          </span>

          <span>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <motion.h3
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {project.name}
        </motion.h3>

        <motion.div
          className="project-card__line"
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
        />

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          {project.description}
        </motion.p>

        <div className="project-card__details">
          <div>
            <span>
              MY CONTRIBUTION
            </span>

            <p>
              {project.role.join(" · ")}
            </p>
          </div>

          <div>
            <span>
              STACK
            </span>

            <div className="project-card__stack">
              {project.stack.map(
                (item) => (
                  <span key={item}>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="project-card__actions">
          <motion.a
            href={
              project.live ||
              project.github ||
              "#"
            }
            target="_blank"
            rel="noreferrer"
            whileHover={{
              x: 5,
            }}
          >
            <span>
              Read the breakdown
            </span>

            <ArrowUpRight size={16} />
          </motion.a>

          <div className="project-card__icons">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`GitHub repository for ${project.name}`}
                whileHover={{
                  y: -3,
                }}
              >
                <Github size={16} />
              </motion.a>
            )}

            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`Live ${project.name} project`}
                whileHover={{
                  y: -3,
                }}
              >
                <ArrowUpRight size={16} />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}