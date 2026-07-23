"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SECTION_IDS = ["work", "about", "connect"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection(): SectionId | null {
  const [active, setActive] = useState<SectionId | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observe = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const entries = new Map<string, boolean>();

    observerRef.current = new IntersectionObserver(
      (observed) => {
        for (const entry of observed) {
          entries.set(entry.target.id, entry.isIntersecting);
        }

        for (const id of SECTION_IDS) {
          if (entries.get(id)) {
            setActive(id);
            return;
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }
  }, []);

  useEffect(() => {
    observe();
    return () => observerRef.current?.disconnect();
  }, [observe]);

  return active;
}
