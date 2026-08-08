"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-12 sm:mb-16"
    >
      <p id={id} className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-5 flex items-center gap-3 scroll-mt-24">
        <span className="w-10 h-px bg-accent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-fg tracking-tight uppercase leading-[1.1]"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}