import { education, experience } from "@/data/portfolio";
import { sections } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const meta = sections[4];

/**
 * Experience and education.
 *
 * A two-column layout on wide viewports (period beside detail) collapsing to a
 * single column below 52rem, so the relationship between a role and its dates
 * survives on a phone instead of the dates floating off on their own line.
 */
export default function Experience() {
  return (
    <section
      id={meta.id}
      className="section"
      aria-labelledby={`${meta.id}-title`}
    >
      <div className="container">
        <SectionHeading section={meta} />

        <h3 className="meta" style={{ marginBottom: "var(--space-2)" }}>
          Experience
        </h3>

        <ul>
          {experience.map((item, index) => (
            <Reveal
              as="li"
              key={item.id}
              order={index}
              className="timeline-entry"
            >
              <div className="timeline-entry__period">
                <p className="meta">{item.period}</p>
              </div>

              <div className="timeline-entry__body">
                <h4 className="timeline-entry__role">{item.title}</h4>
                <p className="timeline-entry__text">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <h3
          className="meta"
          style={{
            marginTop: "var(--space-8)",
            marginBottom: "var(--space-2)",
          }}
        >
          Education
        </h3>

        <ul>
          <Reveal as="li" className="timeline-entry">
            <div className="timeline-entry__period">
              <p className="meta">Current</p>
            </div>

            <div className="timeline-entry__body">
              <h4 className="timeline-entry__role">{education.school}</h4>
              <ul className="skill-group__list">
                {education.lines.map((line) => (
                  <li key={line} className="skill-group__item">
                    <span className="skill-group__marker" aria-hidden="true">
                      —
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
