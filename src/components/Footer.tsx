"use client";

import { profile } from "@/data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <div>
          <strong>{profile.name}</strong>
          <span>{profile.location}</span>
        </div>

        <div className="site-footer__links">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <span>
          © {new Date().getFullYear()} · Built with
          intention.
        </span>
      </div>
    </footer>
  );
}
