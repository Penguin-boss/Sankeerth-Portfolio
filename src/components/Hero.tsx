"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const fields: [string, string][] = [
  ["Name", profile.name],
  ["Role", "Student Builder"],
  ["Focus", "Backend & Database Setup"],
  ["Location", profile.location],
  ["Team", "WishCraft Studios"],
  ["Rev.", "A — 2026"],
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "20%", left: "10%", width: "500px", height: "500px", opacity: 0.08 }} />
        <div className="radial-glow" style={{ top: "60%", right: "15%", width: "400px", height: "400px", opacity: 0.06, background: "#2563EB" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Sheet 01 / 06 — Portfolio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-fg leading-[0.9]"
              style={{ letterSpacing: "-0.03em" }}
            >
              <span className="block">Sankeerth</span>
              <span className="block text-gradient-accent">Devella</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 text-lg sm:text-xl text-fg-muted max-w-2xl leading-relaxed font-light"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-accent text-bg text-sm font-medium rounded-lg hover:bg-accent-soft transition-all duration-300 shadow-lg shadow-accent/25"
              >
                View Work
                <motion.div
                  layoutId="arrow"
                  className="w-8 h-8 flex items-center justify-center bg-accent-soft rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-border text-fg-muted hover:text-fg hover:border-accent text-sm transition-all duration-300 rounded-lg"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 border border-border text-fg-muted hover:text-fg hover:border-accent text-sm transition-all duration-300 rounded-lg"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-4 border border-border text-fg-muted hover:text-fg hover:border-accent text-sm transition-all duration-300 rounded-lg"
              >
                <Mail size={16} />
                Email
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="reg-corners border border-border bg-bg-elevated/50 p-6 backdrop-blur-sm"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-fg-faint uppercase mb-4 pb-4 border-b border-dashed border-border">
              Title Block
            </p>
            <dl className="space-y-3">
              {fields.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 text-sm">
                  <dt className="font-mono text-[11px] text-fg-faint uppercase tracking-wider">{label}</dt>
                  <dd className="font-mono text-fg text-right max-w-[60%] truncate">{value}</dd>
                </div>
              ))}
            </dl>
            
            <div className="mt-6 pt-4 border-t border-border">
              <p className="font-mono text-[10px] text-fg-faint uppercase tracking-wider mb-3">Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Prisma"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-3 py-1.5 rounded transition-all hover:bg-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <p className="font-mono text-xs text-fg-faint uppercase tracking-wider">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-10 flex flex-col items-center justify-between"
          >
            <div className="w-full h-1.5 bg-accent rounded-full" />
            <div className="w-full h-1.5 bg-accent rounded-full opacity-50" />
            <div className="w-full h-1.5 bg-accent rounded-full opacity-25" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}