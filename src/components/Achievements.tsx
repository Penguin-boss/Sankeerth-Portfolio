"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { hackathon } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="hackathons" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="03 — achievements" title="Hackathons" id="hackathons-heading" />

        <div className="border border-hairline rounded-2xl bg-bg-panel/60 overflow-hidden max-w-3xl">
          <div className="px-6 py-5 border-b border-hairline flex items-baseline justify-between flex-wrap gap-2">
            <h3 className="font-display text-xl font-medium text-ink">{hackathon.name}</h3>
            <span className="text-xs text-ink-faint">team / {hackathon.team}</span>
          </div>

          <div>
            {hackathon.rounds.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 px-6 py-5 border-b border-hairline/70 last:border-b-0"
              >
                <span className="text-xs text-ink-faint w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-ink text-base font-medium">{r.label}</p>
                  <p className="text-ink-faint text-sm mt-0.5">{r.note}</p>
                </div>
                <span className="text-xs uppercase tracking-wider text-accent border border-accent-dim rounded-full px-3 py-1.5 shrink-0">
                  {r.result}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="px-6 py-5 bg-bg-panel-hover/50">
            <p className="text-ink-muted text-sm leading-relaxed">{hackathon.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
