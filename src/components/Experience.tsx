"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "50%", right: "5%", width: "300px", height: "300px", opacity: 0.03, background: "#2563EB" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="05 — experience" title="Experience" id="experience-heading" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl relative"
        >
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border/50" />

          {experience.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[13px] top-1 w-5 h-5 rounded-full bg-accent border-4 border-bg flex items-center justify-center" />
              
              <div className="reg-corners border border-border bg-bg-elevated/50 p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
                <p className="font-mono text-xs text-fg-faint uppercase tracking-wider mb-3">{e.period}</p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-fg mb-2">{e.title}</h3>
                <p className="text-fg-muted text-sm leading-relaxed max-w-2xl">{e.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}