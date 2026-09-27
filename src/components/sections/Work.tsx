"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Maximize2 } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { sections } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Dialog from "@/components/ui/Dialog";
import { Reveal } from "@/components/ui/Reveal";

const meta = sections[1];

/**
 * Selected work.
 *
 * Each card is a single <button> rather than a div with a click handler, so
 * keyboard and screen-reader users get the same affordance pointer users get,
 * and the card announces itself as "Open details for <project>". Nested links
 * are deliberately kept out of the card — an interactive control inside another
 * interactive control is ambiguous to operate — so the GitHub and live links
 * live in the dialog's footer instead.
 */
export default function Work() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active: Project | undefined = projects.find((p) => p.id === openId);

  return (
    <section
      id={meta.id}
      className="section"
      aria-labelledby={`${meta.id}-title`}
    >
      <div className="container">
        <SectionHeading
          section={meta}
          lede="Client work and personal builds. Select a project for the full role, stack and links."
        />

        <ul className="work__grid">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.id} order={index}>
              <button
                type="button"
                className="work-card"
                onClick={() => setOpenId(project.id)}
                aria-haspopup="dialog"
              >
                <span className="work-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="work-card__title">{project.name}</span>

                <span className="work-card__summary">{project.description}</span>

                <span className="work-card__footer">
                  <span className="meta">{project.stack[0]}</span>
                </span>
                
                <span className="work-card__cue">
                  Details
                  <Maximize2 aria-hidden="true" />
                </span>

                <span className="visually-hidden">
                  Opens a dialog with details for {project.name}
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog
        open={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.name ?? ""}
        eyebrow={active?.status}
        footer={
          active ? (
            <>
              {active.live ? (
                <a
                  href={active.live}
                  className="btn btn--filled"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site
                  <ArrowUpRight className="btn__icon" aria-hidden="true" />
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              ) : null}

              {active.github ? (
                <a
                  href={active.github}
                  className="btn btn--bordered"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="btn__icon" aria-hidden="true" />
                  Source
                  <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              ) : null}

              {!active.live && !active.github ? (
                <p className="meta meta--plain">
                  No public link for this project.
                </p>
              ) : null}
            </>
          ) : null
        }
      >
        {active ? (
          <div className="work-detail">
            <div className="work-detail__block">
              <p className="work-detail__text">{active.description}</p>
            </div>

            <div className="work-detail__block">
              <h3 className="work-detail__label">My role</h3>
              <ul className="work-detail__list">
                {active.role.map((item) => (
                  <li key={item}>
                    <span className="work-detail__bullet" aria-hidden="true">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="work-detail__block">
              <h3 className="work-detail__label">Stack</h3>
              <ul className="chip-list">
                {active.stack.map((item) => (
                  <li key={item}>
                    <span className="chip">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {active.isMobile ? (
              <div className="work-detail__block">
                <h3 className="work-detail__label">Platform</h3>
                <p className="work-detail__text">Mobile application.</p>
              </div>
            ) : null}
          </div>
        ) : null}
      </Dialog>
    </section>
  );
}
