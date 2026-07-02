"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: Github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: Linkedin },
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
          className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3"
        >
          06 — contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-10 max-w-xl"
        >
          Open to conversations about projects, backend work, and collaboration.
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="border border-hairline rounded-md p-5 bg-bg-panel/50 hover:border-accent-dim transition-colors group"
              >
                <Icon size={18} className="text-accent mb-4" />
                <p className="font-mono text-[10px] tracking-wider uppercase text-ink-faint mb-1.5">
                  {item.label}
                </p>
                <p className="text-ink text-sm break-words group-hover:text-accent-soft transition-colors">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
