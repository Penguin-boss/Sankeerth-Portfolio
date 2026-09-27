import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { sections } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const meta = sections[5];

export default function Contact() {
  return (
    <section
      id={meta.id}
      className="section contact"
      aria-labelledby={`${meta.id}-title`}
    >
      <div className="container">
        <Reveal>
          <div className="contact__conclusion">
            <h2 id={`${meta.id}-title`} className="contact__big-title">
              <span className="block">LET&apos;S BUILD</span>
              <span className="block">SOMETHING</span>
              <span className="block text-tint">INTERESTING.</span>
            </h2>

            <a href={`mailto:${profile.email}`} className="contact__email-link">
              {profile.email}
            </a>

            <div className="contact__minimal-links">
              <a
                href={profile.github}
                className="contact__minimal-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight aria-hidden="true" width={14} height={14} />
              </a>
              <span className="contact__minimal-divider">/</span>
              <a
                href={profile.linkedin}
                className="contact__minimal-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight aria-hidden="true" width={14} height={14} />
              </a>
              <span className="contact__minimal-divider">/</span>
              <span className="contact__minimal-link text-meta">
                {profile.location}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
