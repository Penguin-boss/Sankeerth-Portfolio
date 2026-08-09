"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  category?: string;
  contribution?: string;
  github?: string;
  live?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "start end",
      "end start",
    ],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [1.12, 1, 1, 1.06]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-4%", "4%"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7],
    [50, 0, -20]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.8, 1],
    [0, 1, 1, 0.75]
  );

  return (
    <motion.article
      ref={ref}
      className={`project-article project-article--${index % 3}`}
      style={{ opacity }}
    >
      <motion.div
        className="project-visual project-visual--cinematic"
        initial={{
          clipPath: "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0% 0 0)",
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          className="project-visual__image"
          style={{
            scale: imageScale,
            y: imageY,
          }}
        >
          <div className="project-visual__placeholder">
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              {project.title.charAt(0)}
            </strong>
          </div>
        </motion.div>

        <motion.div
          className="project-visual__index"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.55,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        <motion.div
          className="project-visual__type"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.65,
            duration: 0.5,
          }}
        >
          {project.category || "PROJECT"}
        </motion.div>
      </motion.div>

      <motion.div
        className="project-content project-content--cinematic"
        style={{
          y: contentY,
        }}
      >
        <div className="project-content__top">
          <motion.span
            className="project-status"
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
            }}
          >
            {project.category || "Selected work"}
          </motion.span>

          <span className="project-content__number">
            / {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="project-title-wrap">
          <motion.h3
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {project.title}
          </motion.h3>
        </div>

        <motion.div
          className="project-accent-line"
          initial={{
            scaleX: 0,
            transformOrigin: "left",
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
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
            duration: 0.65,
            delay: 0.3,
          }}
        >
          {project.description}
        </motion.p>

        {project.contribution && (
          <motion.div
            className="project-contribution"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.45,
            }}
          >
            <span>Contribution</span>

            <strong>
              {project.contribution}
            </strong>
          </motion.div>
        )}

        <div className="project-actions">
          <motion.div
            className="project-actions__links"
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -4,
                  rotate: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                aria-label="View source"
              >
                <Github size={16} />
              </motion.a>
            )}

            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -4,
                  rotate: 2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                aria-label="View project"
              >
                <ArrowUpRight size={17} />
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
}
