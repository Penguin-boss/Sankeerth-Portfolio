"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="04 — capabilities" title="Skills" id="skills-heading" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border border-hairline rounded-md p-5 bg-bg-panel/50"
            >
              <p className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase mb-4">
                {group.label}
              </p>
              <ul className="space-y-2.5">
                {group.skills.map((s) => (
                  <li key={s} className="text-ink-muted text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-ink-faint shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
