"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="02 — work" title="Projects" id="work-heading" />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -3 }}
              className="border border-hairline rounded-md bg-bg-panel/60 overflow-hidden hover:border-accent-dim transition-colors"
            >
              {/* table header row */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-hairline">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent schema-dot" />
                  <h3 className="font-display text-base font-semibold text-ink">{p.name}</h3>
                </div>
                <span
                  className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-sm border ${
                    p.status === "Ongoing"
                      ? "text-sage border-sage/40 bg-sage/10"
                      : "text-ink-faint border-hairline-strong"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <div className="px-5 py-4">
                <p className="text-ink-muted text-sm leading-relaxed mb-4">{p.description}</p>

                {/* schema rows */}
                <div className="font-mono text-[11px] mb-4">
                  <div className="flex gap-3 py-1 border-t border-hairline/70">
                    <span className="text-ink-faint w-14 shrink-0 pt-0.5">role</span>
                    <span className="text-ink-muted">{p.role.join(" · ")}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] text-accent-soft border border-accent-dim rounded-sm px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
