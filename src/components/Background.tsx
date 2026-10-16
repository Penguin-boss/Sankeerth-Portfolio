import {
  certificates,
  education,
  experience,
  hackathon,
  skillGroups,
} from "@/data/site";
import Reveal from "@/components/Reveal";

/**
 * Background — experience, education, competition results, certifications and
 * skills in one place.
 *
 * The previous site spread these across three sections (Experience & Education,
 * Capabilities, Credentials) plus a second list of certificates, with the four
 * hackathon certificates appearing twice. Here each fact is stated once: the
 * rounds carry their own certificates, so nothing is repeated, and there are no
 * tables, chips, icons, progress bars or card grids — a label column and a
 * content column, at body-text size.
 */
export default function Background() {
  return (
    <section id="background" className="section" aria-labelledby="background-title">
      <div className="container">
        <div className="section__head">
          <h2 id="background-title">Background</h2>
          <p className="lede">
            Where the work has happened so far, what it produced, and the toolkit
            behind it.
          </p>
        </div>

        <div className="background">
          <div className="background__block">
            <h3 className="background__label">Experience</h3>
            <ul className="background__list">
              {experience.map((item) => (
                <li className="entry" key={item.title}>
                  <h4 className="entry__title">{item.title}</h4>
                  {/* The role leads the detail line, as it does on the resume. */}
                  <p className="entry__meta">
                    {item.honour ? `${item.honour} · ${item.period}` : item.period}
                  </p>
                  <p className="entry__body">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="background__block">
            <h3 className="background__label">Education</h3>
            <ul className="background__list">
              <li className="entry">
                <h4 className="entry__title">{education.school}</h4>
                <ul>
                  {education.lines.map((line) => (
                    <li className="entry__body" key={line}>
                      {line}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div className="background__block">
            <h3 className="background__label">Hackathon</h3>
            <Reveal className="entry">
              <h4 className="entry__title">
                {hackathon.name} — {hackathon.team}
              </h4>

              <ul className="rounds">
                {hackathon.rounds.map((round) => (
                  <li key={round.label}>
                    <span>{round.label}</span>
                    <strong>{round.result}</strong>
                    <span>{round.note}</span>
                    <a
                      href={round.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the certificate for ${round.label} (opens in a new tab)`}
                    >
                      Certificate
                    </a>
                  </li>
                ))}
              </ul>

              <p className="entry__body">{hackathon.summary}</p>
            </Reveal>
          </div>

          <div className="background__block">
            <h3 className="background__label">Certifications</h3>
            <ul className="certificates">
              {certificates.map((certificate) => (
                <li className="certificate" key={certificate.id}>
                  <div className="certificate__head">
                    <h4 className="certificate__title">{certificate.title}</h4>
                    <p className="certificate__meta">
                      {certificate.issuer}, {certificate.date}
                    </p>
                  </div>
                  <p className="certificate__body">{certificate.description}</p>
                  {certificate.image ? (
                    <a
                      className="certificate__link"
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the ${certificate.title} certificate (opens in a new tab)`}
                    >
                      View certificate
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="background__block">
            <h3 className="background__label">Skills &amp; tools</h3>
            <dl className="skills">
              {skillGroups.map((group) => (
                <div className="skills__row" key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.skills.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
