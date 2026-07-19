"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const stats: [string, string][] = [
  ["Focus", "Backend & database setup"],
  ["Location", profile.location],
  ["Team", "WishCraft Warriors"],
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 sm:pt-52 sm:pb-32 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-[0.25em] text-accent uppercase mb-8"
        >
          Portfolio — Record 01
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl sm:text-8xl lg:text-9xl font-medium tracking-tight text-ink leading-[0.95]"
        >
          Sankeerth
          <br />
          <span className="text-accent-soft">Devella.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-xl sm:text-2xl text-ink-muted max-w-2xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent-soft text-sm rounded-full transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent-soft text-sm rounded-full transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent-soft text-sm rounded-full transition-colors"
          >
            <Mail size={15} />
            Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-hairline pt-8"
        >
          {stats.map(([label, value]) => (
            <div key={label}>
              <p className="text-xs tracking-[0.2em] uppercase text-ink-faint mb-2">{label}</p>
              <p className="font-display text-lg text-ink">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
