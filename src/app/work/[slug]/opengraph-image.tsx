import { projectBySlug, projects } from "@/data/site";
import { ogAlt, ogContentType, ogSize, projectCard, renderOgCard } from "@/lib/og";

/** Each project gets its own card, built from that project's own content. */
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  return renderOgCard(project ? projectCard(project) : { eyebrow: "Project", title: ogAlt, subtitle: "" });
}
