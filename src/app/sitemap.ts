import type { MetadataRoute } from "next";
import { absoluteUrl, projectPath, projects } from "@/data/site";

/**
 * Sitemap — generated from the content file, so adding a project to
 * src/data/site.ts puts its page in the sitemap, the metadata and the work list
 * at the same time. There is no URL in this file that is typed by hand.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: absoluteUrl(projectPath(project.slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
