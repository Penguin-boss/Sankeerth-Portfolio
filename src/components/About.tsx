"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "20%", right: "10%", width: "350px", height: "350px", opacity: 0.03, background: "#2563EB" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="01 — profile" title="About" id="about-heading" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6"
            >
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-fg-muted text-base sm:text-lg leading-relaxed max-w-3xl"
                >
                  {p}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="reg-corners border border-border bg-bg-elevated/50 p-6 max-w-2xl backdrop-blur-sm"
              >
                <p className="font-mono text-xs tracking-[0.15em] text-fg-faint uppercase mb-4">
                  Education
                </p>
                <p className="text-fg text-base font-medium mb-2">{education.school}</p>
                {education.lines.map((l) => (
                  <p key={l} className="text-fg-muted text-sm leading-relaxed">
                    {l}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="reg-corners border border-border bg-bg-elevated/30 p-6 backdrop-blur-sm sticky top-28">
              <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase mb-6 pb-4 border-b border-border">
                Highlights
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-bg/50 rounded-lg border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/30 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 16l4-16M6 16l4-16m4 16l4-16" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-fg">Backend Rebuild</p>
                    <p className="text-fg-muted text-sm mt-1">Rebuilt client backend from scratch</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-bg/50 rounded-lg border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 border border-blue-500/30 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-fg">Database Design</p>
                    <p className="text-fg-muted text-sm mt-1">PostgreSQL + Prisma schema design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-bg/50 rounded-lg border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 border border-purple-500/30 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-fg">AI-Assisted Dev</p>
                    <p className="text-fg-muted text-sm mt-1">Workflow automation with AI tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-bg/50 rounded-lg border border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 border border-orange-500/30 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-fg">Team Collaboration</p>
                    <p className="text-fg-muted text-sm mt-1">WishCraft Studios — Top 10 Finalist</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}