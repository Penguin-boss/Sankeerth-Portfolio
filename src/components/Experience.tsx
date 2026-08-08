"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section section--experience"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="06 — experience"
          title="Experience"
          id="experience-heading"
        />

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-70px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="experience-item"
            >
              <div className="experience-item__index">
                0{index + 1}
              </div>

              <div className="experience-item__content">
                <span>{item.period}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
