"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const record: [string, string][] = [
  ["name", profile.name],
  ["role", "Full-stack Engineer & Product developer"],
  ["focus", "frontend_systems, backend_infrastructure, system_optimization"],
  ["location", profile.location],
  ["team", "Wishcraft Studios"],
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6"
          >
            portfolio / record.log
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-ink leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg sm:text-xl text-ink-muted max-w-xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-[#100e0c] font-mono text-xs tracking-wide uppercase rounded-sm hover:bg-accent-soft transition-colors"
            >
              <Download size={14} />
              Download resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent-soft font-mono text-xs tracking-wide uppercase rounded-sm transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent-soft font-mono text-xs tracking-wide uppercase rounded-sm transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent-soft font-mono text-xs tracking-wide uppercase rounded-sm transition-colors"
            >
              <Mail size={14} />
              Email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="bg-bg-panel border border-hairline rounded-md overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-hairline">
            <span className="w-2 h-2 rounded-full bg-[#5a4a35]" />
            <span className="w-2 h-2 rounded-full bg-[#5a4a35]" />
            <span className="w-2 h-2 rounded-full bg-accent-dim" />
            <span className="ml-2 font-mono text-[11px] text-ink-faint">profile.record</span>
          </div>
          <div className="p-5 sm:p-6 font-mono text-[13px] leading-8">
            {record.map(([key, value], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
                className="flex gap-3"
              >
                <span className="text-ink-faint w-20 shrink-0">{key}</span>
                <span className="text-ink-muted">:</span>
                <span className="text-accent-soft break-words">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
