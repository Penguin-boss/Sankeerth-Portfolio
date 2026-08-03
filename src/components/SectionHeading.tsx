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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 sm:mb-14"
    >
      <p id={id} className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-4 scroll-mt-24">
        Sheet {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight uppercase">
        {title}
      </h2>
    </motion.div>
  );
}
