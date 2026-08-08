"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Eye,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  Certificate,
  certificates,
} from "@/data/portfolio";

type CategoryFilter =
  | "All"
  | "Professional"
  | "Hackathon";

export default function Certificates() {
  const [active, setActive] =
    useState<CategoryFilter>("All");

  const filtered = certificates.filter(
    (certificate) =>
      active === "All" ||
      certificate.category === active
  );

  return (
    <section
      id="certificates"
      className="section section--certificates"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="04 — verification"
          title="Certificates"
          id="certificates-heading"
        />

        <div className="certificate-intro">
          <p>
            Credentials are kept simple here: what it is,
            who issued it, and where to verify it.
          </p>

          <div
            className="project-filters"
            role="tablist"
            aria-label="Certificate filters"
          >
            {(
              [
                "All",
                "Professional",
                "Hackathon",
              ] as CategoryFilter[]
            ).map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={`project-filter ${
                  active === category ? "is-active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="certificate-list">
          {filtered.map(
            (
              certificate: Certificate,
              index
            ) => (
              <motion.article
                layout
                key={certificate.id}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="certificate-row"
              >
                <div className="certificate-row__icon">
                  <Award size={17} />
                </div>

                <div className="certificate-row__main">
                  <span>
                    {certificate.category} ·{" "}
                    {certificate.date}
                  </span>

                  <h3>{certificate.title}</h3>

                  <p>
                    {certificate.description}
                  </p>
                </div>

                <div className="certificate-row__issuer">
                  {certificate.issuer}
                </div>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-row__link"
                  aria-label={`View ${certificate.title}`}
                >
                  <Eye size={16} />
                  <ArrowUpRight size={14} />
                </a>
              </motion.article>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
