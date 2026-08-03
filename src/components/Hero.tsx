"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const fields: [string, string][] = [
  ["Name", profile.name],
  ["Role", "Student Builder"],
  ["Focus", "Backend & database setup"],
  ["Location", profile.location],
  ["Team", "WishCraft Warriors"],
  ["Rev.", "A — 2026"],
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-6"
        >
          Sheet 01 / 06 — Portfolio
        </motion.p>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-7xl sm:text-9xl lg:text-[10rem] font-semibold tracking-tight text-ink leading-[0.85] uppercase"
          >
            Sankeerth
            <br />
            <span className="text-accent">Devella</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="reg-corners border border-hairline-strong bg-bg-panel/70 p-5"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-ink-faint uppercase mb-3 pb-3 border-b border-dashed border-hairline-strong">
              Title Block
            </p>
            <dl className="space-y-2">
              {fields.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 text-sm">
                  <dt className="font-mono text-[11px] text-ink-faint uppercase tracking-wide">{label}</dt>
                  <dd className="font-mono text-ink text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 text-lg sm:text-xl text-ink-muted max-w-2xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#fdfeff] text-sm font-medium hover:bg-accent-soft transition-colors"
          >
            View work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent text-sm transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent text-sm transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent text-sm transition-colors"
          >
            <Mail size={15} />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
