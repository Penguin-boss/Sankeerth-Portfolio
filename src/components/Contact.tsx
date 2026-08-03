"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 py-20 sm:py-28 border-t border-hairline">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-3"
        >
          Sheet 06 — contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-10 max-w-xl uppercase"
        >
          Open to conversations about projects, backend work, and collaboration.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#fdfeff] text-sm font-medium hover:bg-accent-soft transition-colors"
          >
            <Download size={15} />
            Download resume
          </a>
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-3 border border-hairline-strong text-ink-muted hover:text-ink hover:border-accent text-sm transition-colors"
              >
                <Icon size={15} />
                {item.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
