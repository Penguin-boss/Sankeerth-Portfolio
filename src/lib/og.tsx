import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { identity, projects, type Project } from "@/data/site";

export const ogSize = { width: 1200, height: 630 } as const;
export const ogContentType = "image/png";
export const ogAlt = `${identity.name} — ${identity.role}`;

const FONT_DIR = path.join(process.cwd(), "src/assets/fonts");

/**
 * Inter, loaded from the repository rather than from node_modules or the
 * network, so the card renders identically wherever the build runs. These two
 * woff files exist only for the social images; the page itself uses the
 * woff2 files next/font generates.
 */
async function loadFonts() {
  const [regular, semibold] = await Promise.all([
    readFile(path.join(FONT_DIR, "inter-latin-400.woff")),
    readFile(path.join(FONT_DIR, "inter-latin-600.woff")),
  ]);

  return [
    { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

type OgCardProps = {
  /** Kept short: the card has no room for wrapping headings. */
  /** Small line in the top-right, e.g. "Ongoing project" or the role. */
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  /** Bottom-left, defaults to the site host. */
  readonly footer?: string;
};

/**
 * The 1200×630 card: black ground, white type, one navy mark. Same three
 * colours as the site, no gradients, no decoration beyond a hairline rule.
 */
export async function renderOgCard({
  eyebrow,
  title,
  subtitle,
  footer = identity.location.formatted,
}: OgCardProps) {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#000000",
          padding: "64px 72px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 26,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            {identity.name}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0A192F",
              color: "#FFFFFF",
              fontSize: 20,
              padding: "8px 18px",
              borderRadius: 999,
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 84, height: 3, background: "#FFFFFF" }} />
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginTop: 36,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.74)",
              marginTop: 26,
              maxWidth: 880,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.18)",
            paddingTop: 26,
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex" }}>{footer}</div>
          <div style={{ display: "flex" }}>devellasankeerth.vercel.app</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}

/** The home card: the name as the title, one line of context underneath. */
export const homeCard: OgCardProps = {
  eyebrow: "Portfolio",
  title: identity.name,
  subtitle: `${identity.role} in ${identity.location.formatted}. ${identity.focus}`,
  footer: projects.map((project) => project.name).join(" · "),
};

/** The project card: the project's own name, status, summary and stack. */
export function projectCard(project: Project): OgCardProps {
  return {
    eyebrow: project.status,
    title: project.name,
    subtitle: project.summary,
    footer: project.stack.join(" · "),
  };
}
