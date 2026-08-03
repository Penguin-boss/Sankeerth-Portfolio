"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="02 — work" title="Projects" id="work-heading" />

        <div className="flex flex-col">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group grid sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-8 gap-y-3 py-10 border-b border-hairline hover:pl-2 transition-[padding] duration-300"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-ink-faint uppercase order-1 sm:order-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="order-3 sm:order-none">
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight uppercase group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="text-ink-muted text-base leading-relaxed mt-3 max-w-2xl">
                  {p.description}
                </p>
                <p className="text-sm text-ink-faint mt-3">{p.role.join(" · ")}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs text-accent-soft border border-accent-dim px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <span
                className={`order-2 sm:order-none justify-self-start sm:justify-self-end font-mono text-xs tracking-wider uppercase px-3 py-1 border h-fit ${
                  p.status === "Ongoing"
                    ? "text-sage border-sage/40 bg-sage/10"
                    : "text-ink-faint border-hairline-strong"
                }`}
              >
                {p.status}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
