"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { hackathon } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="hackathons" className="section section--quiet">
      <div className="site-container">
        <SectionHeading
          eyebrow="03 — proof of work"
          title="Hackathons"
          id="hackathons-heading"
        />

        <div className="achievement-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="achievement-intro"
          >
            <span>WishCraft Studios</span>

            <h3>{hackathon.name}</h3>

            <p>{hackathon.summary}</p>

            <div className="achievement-intro__mark">
              01—04
            </div>
          </motion.div>

          <div className="achievement-rounds">
            {hackathon.rounds.map((round, index) => {
              const Icon =
                index === 0
                  ? Trophy
                  : index === 1
                    ? Award
                    : index === 2
                      ? Star
                      : Award;

              return (
                <motion.div
                  key={round.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="achievement-row"
                >
                  <Icon size={17} aria-hidden="true" />

                  <div>
                    <strong>{round.label}</strong>
                    <span>{round.note}</span>
                  </div>

                  <em>{round.result}</em>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
