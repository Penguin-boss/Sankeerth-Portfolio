"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, Project } from "@/data/portfolio";
import { Github, ExternalLink, ArrowRight, X, Smartphone, Globe, Layers, Sparkles, CheckCircle2 } from "lucide-react";

type FilterType = "All" | "Ongoing" | "Web" | "Mobile";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "Ongoing") return p.status === "Ongoing";
    if (activeFilter === "Web") return !p.isMobile;
    if (activeFilter === "Mobile") return p.isMobile;
    return true;
  });

  return (
    <section id="work" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="radial-glow" style={{ top: "10%", left: "5%", width: "500px", height: "500px", opacity: 0.05 }} />
        <div className="radial-glow" style={{ bottom: "10%", right: "5%", width: "450px", height: "450px", opacity: 0.04, background: "#3B82F6" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="02 — work" title="Featured Projects" id="work-heading" />

        {/* Filter Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-border/60"
        >
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: "All", label: "All Projects", count: projects.length },
                { id: "Ongoing", label: "Ongoing", count: projects.filter((p) => p.status === "Ongoing").length },
                { id: "Web", label: "Web Apps", count: projects.filter((p) => !p.isMobile).length },
                { id: "Mobile", label: "Mobile Apps", count: projects.filter((p) => p.isMobile).length },
              ] as const
            ).map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as FilterType)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-bg font-semibold"
                      : "text-fg-muted hover:text-fg hover:bg-bg-elevated/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-project-tab"
                      className="absolute inset-0 bg-accent rounded-lg shadow-md shadow-accent/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span
                    className={`relative z-10 px-1.5 py-0.5 text-[10px] rounded ${
                      isActive ? "bg-bg/20 text-bg" : "bg-bg-elevated text-fg-faint"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-fg-faint">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>Click any project for technical breakdown</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between reg-corners border border-border bg-bg-elevated/40 backdrop-blur-md p-6 sm:p-7 rounded-xl transition-all duration-300 hover:border-accent/60 hover:shadow-[0_16px_36px_-10px_rgba(34,197,94,0.12)]"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent/0 via-accent/70 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                <div>
                  {/* Top Bar: Index & Status */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-bold">
                      PROJ / {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-center gap-2">
                      {p.isMobile && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                          <Smartphone size={11} />
                          Mobile App
                        </span>
                      )}
                      {p.status === "Ongoing" ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent font-medium">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                          </span>
                          Ongoing
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                          <CheckCircle2 size={11} />
                          {p.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display text-2xl font-bold text-fg tracking-tight uppercase mb-3 group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
                    <span>{p.name}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-fg-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {p.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-fg-muted border border-border/80 bg-bg/60 px-2.5 py-1 rounded-md group-hover:border-accent/30 group-hover:text-fg transition-all"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        title="View GitHub Repository"
                        className="p-2 text-fg-muted hover:text-fg hover:bg-bg-elevated rounded-lg border border-border/50 hover:border-border transition-all"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        title="Open Live Preview"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-accent bg-accent/10 border border-accent/30 rounded-lg hover:bg-accent hover:text-bg font-medium transition-all"
                      >
                        <Globe size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(p)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted hover:text-accent transition-colors group/btn py-1"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl reg-corners border border-border bg-bg-elevated p-6 sm:p-8 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-fg-muted hover:text-fg hover:bg-bg rounded-lg transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 px-3 py-1 rounded-full font-semibold">
                  {selectedProject.status}
                </span>
                {selectedProject.isMobile && (
                  <span className="font-mono text-xs uppercase tracking-wider text-purple-400 border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full">
                    Mobile App
                  </span>
                )}
              </div>

              <h3 className="font-display text-3xl font-bold text-fg uppercase tracking-tight mb-4">
                {selectedProject.name}
              </h3>

              <p className="text-fg-muted text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Roles Breakdown */}
              <div className="mb-6 p-4 bg-bg/50 rounded-xl border border-border/60">
                <p className="font-mono text-xs tracking-wider text-fg-faint uppercase mb-3 flex items-center gap-2">
                  <Layers size={14} className="text-accent" />
                  Key Roles & Contributions
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.role.map((r) => (
                    <span
                      key={r}
                      className="font-mono text-xs text-fg border border-border bg-bg px-3 py-1.5 rounded-md"
                    >
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="mb-8">
                <p className="font-mono text-xs tracking-wider text-fg-faint uppercase mb-3">
                  Technologies & Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-3 py-1.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-border/60">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent text-fg-muted hover:text-fg text-sm font-mono rounded-lg transition-all"
                  >
                    <Github size={16} />
                    View Repository
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-soft text-bg text-sm font-mono font-medium rounded-lg shadow-lg shadow-accent/25 transition-all"
                  >
                    <ExternalLink size={16} />
                    Open Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}