"use client";

import { useEffect, useState } from "react";
import { sectionIds } from "@/lib/site";

/**
 * Tracks which section is currently in view so the navigation bar can mark it
 * with aria-current.
 *
 * Uses a rootMargin band near the top of the viewport rather than a scroll
 * listener: of the sections intersecting that band, the highest one wins, which
 * matches what a reader would call "the section I'm in" even when two sections
 * are partly visible. Returns null rather than guessing when nothing qualifies.
 */
export function useActiveSection(ids: readonly string[] = sectionIds): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const onScroll = () => {
      // Calculate activation point dynamically.
      // We want the section to become active when it crosses a line comfortably below the navbar.
      const navElement = document.querySelector(".site-nav");
      const navHeight = navElement ? navElement.getBoundingClientRect().height : 80;
      // Activation line is navbar height + 15% of viewport height (~100-150px buffer).
      // This is large enough so smooth scrolling exactly to var(--nav-h) will definitively
      // cross the line, and manual scrolling feels natural.
      const activationPoint = navHeight + window.innerHeight * 0.15;

      // Check if we are at the absolute bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      if (isAtBottom) {
        setActive(elements[elements.length - 1].id);
        return;
      }

      // Iterate backwards to find the last section that has crossed the activation line
      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        const rect = el.getBoundingClientRect();
        
        // If the top of the section is above our activation point (meaning it has scrolled up past it)
        // or if it's the very first section and we haven't scrolled past it yet
        if (rect.top <= activationPoint || (i === 0 && rect.top > 0)) {
          setActive(el.id);
          break;
        }
      }
    };

    // Run once on mount
    onScroll();

    // Use a passive listener for performance
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
