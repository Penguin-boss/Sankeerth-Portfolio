"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { profile } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const titleLine = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.95,
      ease,
    },
  },
};

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div
        className="hero-section__wash"
        aria-hidden="true"
      />

      <div className="site-container hero-section__inner">
        <motion.div
          className="hero-section__eyebrow"
          variants={heroItem}
          initial="hidden"
          animate="visible"
        >
          <span>Student Builder</span>

          <motion.span
            className="hero-section__rule"
            aria-hidden="true"
            initial={{
              scaleX: 0,
              transformOrigin: "left",
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease,
            }}
          />

          <span>Hyderabad, India</span>
        </motion.div>

        <motion.div
          className="hero-section__grid"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-section__copy">
            <div className="hero-title-mask">
              <motion.h1
                className="hero-section__title"
                variants={titleLine}
              >
                I build things
              </motion.h1>
            </div>

            <div className="hero-title-mask">
              <motion.h1
                className="hero-section__title"
                variants={titleLine}
              >
                <em>worth using.</em>
              </motion.h1>
            </div>

            <motion.p
              className="hero-section__lede"
              variants={heroItem}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="hero-section__actions"
              variants={heroItem}
            >
              <motion.a
                href="#work"
                className="button button--primary"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.18,
                }}
              >
                See the work

                <motion.span
                  initial={{ x: 0, y: 0 }}
                  whileHover={{
                    x: 3,
                    y: 3,
                  }}
                >
                  <ArrowDownRight
                    size={17}
                    aria-hidden="true"
                  />
                </motion.span>
              </motion.a>

              <motion.a
                href={`mailto:${profile.email}`}
                className="text-link"
                whileHover={{
                  x: 4,
                }}
              >
                Start a conversation
              </motion.a>
            </motion.div>
          </div>

          <motion.aside
            className="hero-artifact"
            aria-label="Profile summary"
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.38,
              ease,
            }}
          >
            <motion.div
              className="hero-artifact__topline"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.75,
                duration: 0.5,
              }}
            >
              <span>01</span>
              <span>PROFILE</span>
            </motion.div>

            <motion.div
              className="hero-artifact__name"
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.55,
                ease,
              }}
            >
              SD
            </motion.div>

            <motion.div
              className="hero-artifact__bottom"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.85,
                ease,
              }}
            >
              <div>
                <span>Currently</span>
                <strong>
                  Building + learning
                </strong>
              </div>

              <div>
                <span>Team</span>
                <strong>
                  WishCraft Studios
                </strong>
              </div>
            </motion.div>

            <motion.span
              className="hero-artifact__scan"
              aria-hidden="true"
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease,
              }}
            />
          </motion.aside>
        </motion.div>

        <motion.div
          className="hero-section__footer"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 1,
            ease,
          }}
        >
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.15,
            }}
          >
            Frontend · Backend · Databases ·
            AI-Assisted Development
          </motion.span>

          <div className="hero-section__socials">
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{
                y: -3,
              }}
            >
              <Github size={16} />
            </motion.a>

            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{
                y: -3,
              }}
            >
              <Linkedin size={16} />
            </motion.a>

            <motion.a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              whileHover={{
                y: -3,
              }}
            >
              <Mail size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
              }
