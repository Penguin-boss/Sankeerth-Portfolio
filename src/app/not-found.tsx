import type { Metadata } from "next";
import Link from "next/link";
import { projects, projectPath } from "@/data/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page does not exist. The work, profile and contact details are on the home page.",
  robots: { index: false, follow: true },
};

/** 404 — designed, and not a dead end: it still offers somewhere to go. */
export default function NotFound() {
  return (
    <main id="main" className="page-enter">
      <div className="container">
        <div className="not-found">
          <h1>Page not found</h1>

          <p className="lede">
            That URL does not exist — it may have been renamed. Everything the
            site has is on the home page, or one of the project pages below.
          </p>

          <p className="project-page__links">
            <Link href="/#work">
              Back to selected work
              <ArrowRight />
            </Link>
          </p>

          <ul className="more__links">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={projectPath(project.slug)}>{project.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
