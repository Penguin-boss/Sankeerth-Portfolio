"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-section__wash" aria-hidden="true" />

      <div className="site-container hero-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero-section__eyebrow"
        >
          <span>Student Builder</span>
          <span className="hero-section__rule" />
          <span>Hyderabad, India</span>
        </motion.div>

        <div className="hero-section__grid">
          <div className="hero-section__copy">
            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-section__title"
            >
              I build things
              <br />
              <em>worth using.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-section__lede"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-section__actions"
            >
              <a href="#work" className="button button--primary">
                See the work
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>

              <a href={`mailto:${profile.email}`} className="text-link">
                Start a conversation
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-artifact"
            aria-label="Profile summary"
          >
            <div className="hero-artifact__topline">
              <span>01</span>
              <span>PROFILE</span>
            </div>

            <div className="hero-artifact__name">SD</div>

            <div className="hero-artifact__bottom">
              <div>
                <span>Currently</span>
                <strong>Building + learning</strong>
              </div>

              <div>
                <span>Team</span>
                <strong>WishCraft Studios</strong>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="hero-section__footer"
        >
          <span>
            Frontend · Backend · Databases · AI-assisted development
          </span>

          <div className="hero-section__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
