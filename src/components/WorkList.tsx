import Link from "next/link";
import { projectPath, projects } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

/**
 * Selected work — the main event.
 *
 * Each project is one navy panel with real presence: the title is the link into
 * the project page, then the summary, then the role and stack as two quiet
 * lines, then the external links. Nothing is hidden behind a dialog and nothing
 * needs JavaScript: every project page is a real, linkable URL.
 */
export default function WorkList() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <div className="section__head">
          <h2 id="work-title">Selected work</h2>
          <p className="lede">
            Two web products, the studio I build with, and a mobile app. Each one
            has a page with the role, the stack and the links behind it.
          </p>
        </div>

        <ul className="work">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.slug} order={index}>
              <article className="project">
                <h3 className="project__title">
                  <Link className="project__link" href={projectPath(project.slug)}>
                    {project.name}
                  </Link>
                </h3>

                <p className="project__summary">{project.summary}</p>

                <dl className="project__facts">
                  <div className="project__fact">
                    <dt>Role</dt>
                    <dd>{project.role.join(", ")}</dd>
                  </div>
                  <div className="project__fact">
                    <dt>Stack</dt>
                    <dd>{project.stack.join(", ")}</dd>
                  </div>
                </dl>

                {project.live || project.github ? (
                  <p className="project__links">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        Live site
                        <ArrowUpRight />
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    ) : null}

                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Source
                        <ArrowUpRight />
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
