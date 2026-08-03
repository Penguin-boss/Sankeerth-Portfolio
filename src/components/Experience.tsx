"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="05 — experience" title="Experience" id="experience-heading" />

        <div className="max-w-3xl relative pl-6 sm:pl-8">
          <div className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px bg-hairline" />
          {experience.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-6 sm:-left-8 top-1.5 w-2 h-2 rounded-full bg-accent schema-dot" />
              <p className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-1.5">
                {e.period}
              </p>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{e.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed max-w-2xl">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
