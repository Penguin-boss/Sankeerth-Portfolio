"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [2.5, -2.5]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-2.5, 2.5]
  );

  const imageX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-8, 8]
  );

  const imageY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-8, 8]
  );

  const {
    scrollYProgress,
  } = useScroll({
    target: ref,
    offset: [
      "start end",
      "end start",
    ],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [1.12, 1, 1, 1.05]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [45, 0, -10, -25]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      className={`project-article project-card-cinematic project-article--${
        index % 3
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      {/* =====================================================
          VISUAL
          ===================================================== */}

      <motion.div
        className="project-visual project-visual--cinematic"
        initial={{
          clipPath:
            "inset(0 100% 0 0)",
        }}
        whileInView={{
          clipPath:
            "inset(0 0% 0 0)",
        }}
        viewport={{
          once: true,
          amount: 0.18,
        }}
        transition={{
          duration: 1.1,
          ease: [
            0.16,
            1,
            0.3,
            1,
          ],
        }}
      >
        {/* Moving visual layer */}

        <motion.div
          className="project-visual__image"
          style={{
            scale: imageScale,
            x: imageX,
            y: imageY,
          }}
        >
          <div
            className={`project-visual__placeholder project-visual__placeholder--${index}`}
          >
            <span className="project-visual__placeholder-number">
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </span>

            <strong>
              {project.name.charAt(0)}
            </strong>

            <div className="project-visual__placeholder-grid" />
          </div>
        </motion.div>

        {/* Corner frame */}

        <div
          className="project-corner project-corner--tl"
          aria-hidden="true"
        />

        <div
          className="project-corner project-corner--br"
          aria-hidden="true"
        />

        {/* Index */}

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
          /{" "}
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </motion.div>

        {/* Status */}

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
          {project.status}
        </motion.div>

        {/* Scan line */}

        <motion.div
          className="project-scan-line"
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
            duration: 1.2,
            delay: 0.35,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        />

        {/* Cursor glow */}

        <motion.div
          className="project-cursor-glow"
          style={{
            left: useTransform(
              smoothX,
              [-0.5, 0.5],
              ["35%", "65%"]
            ),
            top: useTransform(
              smoothY,
              [-0.5, 0.5],
              ["35%", "65%"]
            ),
          }}
        />
      </motion.div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

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
            {project.status}
          </motion.span>

          <span className="project-content__number">
            {project.isMobile
              ? "MOBILE"
              : "WEB"}
          </span>
        </div>

        <div className="project-title-wrap">
          <motion.h3
            initial={{
              opacity: 0,
              y: 55,
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
              delay: 0.15,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            {project.name}
          </motion.h3>
        </div>

        {/* Accent line */}

        <motion.div
          className="project-accent-line"
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
            duration: 0.8,
            delay: 0.35,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
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

        {/* Role */}

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
          <span>
            Contribution
          </span>

          <strong>
            {project.role.join(" · ")}
          </strong>
        </motion.div>

        {/* Stack */}

        <motion.div
          className="project-stack"
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
            delay: 0.5,
          }}
        >
          {project.stack.map(
            (technology) => (
              <span
                key={technology}
              >
                {technology}
              </span>
            )
          )}
        </motion.div>

        {/* Actions */}

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
              delay: 0.55,
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
                aria-label={`View ${project.name} source`}
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
                aria-label={`View ${project.name}`}
              >
                <ArrowUpRight
                  size={17}
                />
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  );
        }
