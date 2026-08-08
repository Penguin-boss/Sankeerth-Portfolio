"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="radial-glow" style={{ top: "50%", left: "50%", width: "500px", height: "500px", opacity: 0.05 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "expo.out" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">
            Sheet 06 / 06 — Contact
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "expo.out" }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-fg tracking-tight mb-6 leading-[1.1]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Open to conversations about
            <br />
            <span className="text-gradient-accent">projects, backend work,</span>
            <br />
            <span className="text-gradient-accent">and collaboration.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "expo.out" }}
            className="text-fg-muted text-lg leading-relaxed max-w-xl mx-auto"
          >
            Whether you have a project in mind, need backend expertise, or just want to say hello — I'd love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "expo.out" }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={profile.resumeFile}
              download
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-sm font-medium rounded-lg hover:bg-accent-soft transition-all duration-300 shadow-lg shadow-accent/25"
            >
              <Download size={18} />
              Download Resume
              <ArrowUpRight size={16} />
            </a>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, staggerChildren: 0.08 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {links.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-5 py-3 border border-border text-fg-muted hover:text-fg hover:border-accent hover:bg-accent/5 text-sm transition-all duration-300 rounded-lg"
                >
                  <item.icon size={16} className="group-hover:text-accent transition-colors" />
                  {item.label}
                  {item.external && <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "expo.out" }}
          className="mt-20 reg-corners border border-border bg-bg-elevated/30 p-6 sm:p-8 backdrop-blur-sm"
        >
          <p className="font-mono text-xs tracking-[0.15em] text-fg-faint uppercase mb-6 text-center">Availability</p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-bg/50 rounded-lg border border-border/50">
              <p className="font-display text-2xl font-bold text-accent mb-1">Open</p>
              <p className="text-fg-muted text-sm">Freelance Projects</p>
            </div>
            <div className="p-4 bg-bg/50 rounded-lg border border-border/50">
              <p className="font-display text-2xl font-bold text-accent mb-1">Open</p>
              <p className="text-fg-muted text-sm">Collaborations</p>
            </div>
            <div className="p-4 bg-bg/50 rounded-lg border border-border/50">
              <p className="font-display text-2xl font-bold text-accent mb-1">Open</p>
              <p className="text-fg-muted text-sm">Mentoring / Chats</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}