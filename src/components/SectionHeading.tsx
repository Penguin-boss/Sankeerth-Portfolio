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
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="section-heading"
    >
      <p
        id={id}
        className="section-heading__eyebrow scroll-mt-28"
      >
        <span aria-hidden="true" />
        {eyebrow}
      </p>

      <h2 className="section-heading__title">
        {title}
      </h2>
    </motion.div>
  );
}
