import { about, education, profile } from "@/data/portfolio";
import { sections } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const meta = sections[0];

/**
 * Profile section: the long-form introduction, with the at-a-glance facts
 * pulled out into a definition list beside it.
 *
 * The first paragraph is set at title-3 size as a lede so the section has a
 * clear entry point, and body copy is capped at ~60 characters per line, which
 * is where sustained reading is most comfortable.
 */
export default function About() {
  return (
    <section
      id={meta.id}
      className="section"
      aria-labelledby={`${meta.id}-title`}
    >
      <div className="container">
        <SectionHeading section={meta} />

        <div className="about__grid">
          <Reveal className="about__prose">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal order={1}>
            <dl className="about__aside glass-panel glass-panel--interactive">
              <div className="about__aside-item">
                <dt className="meta">Based in</dt>
                <dd className="about__aside-value">{profile.location}</dd>
              </div>

              <div className="about__aside-item">
                <dt className="meta">Education</dt>
                <dd className="about__aside-value">
                  {education.school}
                  <br />
                  {education.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>

              <div className="about__aside-item">
                <dt className="meta">Email</dt>
                <dd className="about__aside-value">
                  <a href={`mailto:${profile.email}`} className="link">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
