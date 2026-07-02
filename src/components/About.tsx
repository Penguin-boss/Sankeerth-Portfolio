"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <SectionHeading eyebrow="01 — profile" title="About" id="about-heading" />

        <div>
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-ink-muted text-base sm:text-lg leading-relaxed mb-5 max-w-2xl"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 border border-hairline rounded-md p-5 max-w-2xl bg-bg-panel/50"
          >
            <p className="font-mono text-[11px] tracking-[0.15em] text-ink-faint uppercase mb-3">
              education
            </p>
            <p className="text-ink text-sm font-medium mb-1">{education.school}</p>
            {education.lines.map((l) => (
              <p key={l} className="text-ink-muted text-sm">
                {l}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
