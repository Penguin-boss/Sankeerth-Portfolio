"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 sm:px-8 py-12 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "50%", left: "50%", width: "400px", height: "400px", opacity: 0.02 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p className="font-display text-lg font-bold text-fg tracking-tight uppercase">
              <span className="text-accent">{profile.name.split(" ")[0]}</span> {profile.name.split(" ")[1]}
            </p>
            <p className="font-mono text-xs text-fg-faint">{profile.location}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-fg-faint hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-fg-faint hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-fg-faint hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-fg-faint">Built with</span>
            <Heart className="w-4 h-4 text-accent animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs text-fg-faint">Next.js · Tailwind · Framer Motion</span>
            <span className="font-mono text-xs text-fg-faint hidden sm:inline">· {year}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="font-mono text-xs text-fg-faint">
            © {year} Sankeerth Devella. Crafted with intention.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}