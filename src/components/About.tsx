"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section section--quiet">
      <div className="site-container">
        <SectionHeading
          eyebrow="01 — profile"
          title="About"
          id="about-heading"
        />

        <div className="about-layout">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="about-story"
          >
            <p className="about-story__lead">
              I like turning unfinished ideas into useful software.
            </p>

            <div className="about-story__body">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="about-note"
          >
            <span className="about-note__number">A / 01</span>

            <h3>What I care about</h3>

            <ul>
              <li>Clear interfaces</li>
              <li>Reliable backend work</li>
              <li>Learning by shipping</li>
              <li>Building with a team</li>
            </ul>

            <div className="about-note__education">
              <span>Education</span>

              <strong>{education.school}</strong>

              {education.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
