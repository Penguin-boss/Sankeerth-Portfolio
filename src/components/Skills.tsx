"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

const exploring = [
  "Rust",
  "Go",
  "GraphQL",
  "Docker",
  "React Server Components",
];

export default function Skills() {
  return (
    <section id="skills" className="section section--quiet">
      <div className="site-container">
        <SectionHeading
          eyebrow="05 — capabilities"
          title="Skills"
          id="skills-heading"
        />

        <div className="skills-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-70px",
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="skills-statement"
          >
            <p className="skills-statement__big">
              I work across the parts of a product that
              have to talk to each other.
            </p>

            <p>
              Frontend, backend configuration, databases,
              planning and AI-assisted workflows — with
              the focus on getting a real product shipped.
            </p>
          </motion.div>

          <div className="skills-groups">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{
                  opacity: 0,
                  x: index % 2 ? 16 : -16,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="skill-group"
              >
                <div className="skill-group__heading">
                  <span>0{index + 1}</span>
                  <h3>{group.label}</h3>
                </div>

                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="skills-exploring">
          <span>Currently exploring</span>

          <div>
            {exploring.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
