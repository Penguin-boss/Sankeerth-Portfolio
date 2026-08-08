"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section section--contact"
    >
      <div className="site-container">
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
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="contact-layout"
        >
          <div>
            <p className="section-heading__eyebrow">
              <span />
              07 — contact
            </p>

            <h2>
              Have something
              <br />
              <em>worth building?</em>
            </h2>
          </div>

          <div className="contact-copy">
            <p>
              For projects, collaborations, or a good
              technical conversation, send me a message.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="contact-email"
            >
              {profile.email}
              <ArrowUpRight size={18} />
            </a>

            <div className="contact-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href={profile.resumeFile}
                download
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="contact-bottom"
        >
          <span>Open to conversations</span>
          <span>{profile.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
