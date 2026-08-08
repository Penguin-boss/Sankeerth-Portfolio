"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const statusStyles = {
  Ongoing: "bg-accent/10 text-accent border-accent/30",
  Contributed: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Individual: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export default function Projects() {
  return (
    <section id="work" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "0%", left: "5%", width: "400px", height: "400px", opacity: 0.04 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="02 — work" title="Projects" id="work-heading" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "expo.out" } }
              }}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group reg-corners border border-border bg-bg-elevated/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.15)]"
              style={{ 
                gridColumn: i === 0 ? "span 2" : "span 1",
                gridRow: i === 0 ? "span 2" : "span 1"
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border ${statusStyles[p.status as keyof typeof statusStyles] || statusStyles.Individual}`}>
                  {p.status}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-fg tracking-tight uppercase mb-3 group-hover:text-accent transition-colors duration-300">
                {p.name}
              </h3>

              <p className="text-fg-muted text-base leading-relaxed mb-5 line-clamp-3">
                {p.description}
              </p>

              <p className="font-mono text-xs text-fg-faint mb-5 uppercase tracking-wider">
                {p.role.join(" · ")}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.slice(0, 6).map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs text-fg-muted border border-border bg-bg/50 hover:bg-accent/5 hover:border-accent/30 hover:text-accent px-3 py-1.5 rounded transition-all"
                  >
                    {s}
                  </span>
                ))}
                {p.stack.length > 6 && (
                  <span className="font-mono text-xs text-fg-faint border border-border bg-bg/50 px-3 py-1.5 rounded">
                    +{p.stack.length - 6} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-fg-faint hover:text-accent hover:bg-accent/10 rounded-lg transition-all group"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-fg-faint hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <button className="group inline-flex items-center gap-2 font-mono text-xs text-accent hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}