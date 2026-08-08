"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "0%", left: "50%", width: "400px", height: "400px", opacity: 0.04 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="04 — capabilities" title="Skills" id="skills-heading" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="reg-corners border border-border bg-bg-elevated/50 p-6 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/30 rounded-lg">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">{group.label.slice(0, 2)}</span>
                </div>
                <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase">{group.label}</p>
              </div>
              <ul className="space-y-3">
                {group.skills.map((s) => (
                  <li key={s} className="group flex items-center gap-3 text-fg-muted text-sm transition-colors">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: 8 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                      className="w-8 h-[2px] bg-border group-hover:bg-accent group-hover:w-10 transition-all duration-300"
                    />
                    <span className="group-hover:text-fg transition-colors">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 reg-corners border border-border bg-bg-elevated/30 p-6 sm:p-8 backdrop-blur-sm"
        >
          <p className="font-mono text-xs tracking-[0.15em] text-fg-faint uppercase mb-4">Currently Exploring</p>
          <div className="flex flex-wrap gap-2">
            {["Rust", "Go", "GraphQL", "Docker", "React Server Components"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-fg-muted border border-border bg-bg/50 hover:bg-accent/5 hover:border-accent/30 hover:text-accent px-3 py-1.5 rounded transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}