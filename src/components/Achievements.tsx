"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { hackathon } from "@/data/portfolio";
import { Trophy, Award, Star } from "lucide-react";

export default function Achievements() {
  const icons = { 0: Trophy, 1: Award, 2: Star, 3: Award };

  return (
    <section id="hackathons" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "0%", left: "10%", width: "350px", height: "350px", opacity: 0.04 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="03 — achievements" title="Hackathons" id="hackathons-heading" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <div className="reg-corners border border-border bg-bg-elevated/50 overflow-hidden backdrop-blur-sm">
            <div className="px-6 py-5 border-b border-border flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="font-display text-2xl font-bold text-fg uppercase">{hackathon.name}</h3>
              <span className="font-mono text-xs text-fg-faint uppercase">Team / {hackathon.team}</span>
            </div>

            <div>
              {hackathon.rounds.map((r, i) => {
                const Icon = icons[i as keyof typeof icons] || Trophy;
                return (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center gap-4 px-6 py-5 border-b border-border/50 last:border-b-0 hover:bg-bg-hover transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 border border-accent/30 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-fg text-base font-medium">{r.label}</p>
                      <p className="text-fg-muted text-sm mt-0.5">{r.note}</p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 px-3 py-1.5 rounded-full shrink-0">
                      {r.result}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <div className="px-6 py-5 bg-bg/50 border-t border-border/50">
              <p className="text-fg-muted text-sm leading-relaxed">{hackathon.summary}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 reg-corners border border-border bg-bg-elevated/30 p-6 backdrop-blur-sm"
          >
            <p className="font-mono text-xs tracking-[0.15em] text-fg-faint uppercase mb-4">Other Recognition</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-bg/50 rounded-lg border border-border/50">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-fg text-sm font-medium">Certificate of Excellence</p>
                  <p className="text-fg-faint text-xs">Enginow Hackathon - Round 1</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-bg/50 rounded-lg border border-border/50">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-fg text-sm font-medium">Top 10 Finalist</p>
                  <p className="text-fg-faint text-xs">Enginow Hackathon - Final Round</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}