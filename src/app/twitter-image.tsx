import { homeCard, ogAlt, ogContentType, ogSize, renderOgCard } from "@/lib/og";

/**
 * The Twitter card is the same designed card as the Open Graph one, built from
 * the same content so the two can never disagree. The file has to exist for
 * Next to emit an explicit twitter:image tag.
 */
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgCard(homeCard);
}
