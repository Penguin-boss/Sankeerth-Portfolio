import { homeCard, ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

/** The designed 1200×630 card for the home page. */
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgCard(homeCard);
}
