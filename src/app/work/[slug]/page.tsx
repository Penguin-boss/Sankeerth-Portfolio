import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  absoluteUrl,
  identity,
  otherProjects,
  projectBySlug,
  projectDescription,
  projectPath,
  projects,
  siteUrl,
} from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";

/**
 * Project page.
 *
 * A real page per project rather than a dialog: it can be linked, indexed,
 * shared and previewed on its own. The URL is readable (/work/versacareer) and
 * every page carries its own title, description, canonical and social image.
 */

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const CATEGORY_LABEL: Record<string, string> = {
  WebApplication: "Web application",
  MobileApplication: "Mobile application",
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Anything not in the content file is a 404, not a dynamically built page. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) return {};

  const description = projectDescription(project);
  const path = projectPath(project.slug);

  return {
    title: project.name,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: `${project.name} — ${identity.name}`,
      description,
      siteName: identity.name,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${identity.name}`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) notFound();

  const others = otherProjects(project.slug);
  const category = CATEGORY_LABEL[project.category] ?? "Project";

  /** SoftwareApplication schema, using only the facts on this page. */
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: project.category,
    url: project.live ?? absoluteUrl(projectPath(project.slug)),
    author: {
      "@type": "Person",
      name: identity.name,
      url: siteUrl,
    },
    ...(project.github ? { codeRepository: project.github } : {}),
    ...(project.stack.length
      ? { keywords: project.stack.join(", ") }
      : {}),
  };

  return (
    <>
      <JsonLd data={schema} />

      <main id="main" className="page-enter">
        <article className="project-page">
          <div className="container">
            <Link className="project-page__back" href="/#work">
              <ArrowLeft />
              <span>Selected work</span>
            </Link>

            <header className="project-page__head">
              <p className="project-page__status">
                {project.status} · {category}
              </p>

              <h1>{project.name}</h1>

              <p className="lede">{project.summary}</p>

              {project.live || project.github ? (
                <p className="project-page__links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live site
                      <ArrowUpRight />
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  ) : null}

                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      Source on GitHub
                      <ArrowUpRight />
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </p>
              ) : null}
            </header>

            <div className="project-page__body">
              <section className="project-page__block" aria-labelledby="role-title">
                <h2 id="role-title">Role</h2>
                <ul className="project-page__list">
                  {project.role.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {project.stack.length > 0 ? (
                <section
                  className="project-page__block"
                  aria-labelledby="stack-title"
                >
                  <h2 id="stack-title">Stack</h2>
                  <ul className="project-page__list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>

            <nav className="more" aria-label="More work">
              <p className="more__title">More work</p>
              <ul className="more__links">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link href={projectPath(other.slug)}>{other.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>
      </main>
    </>
  );
}
