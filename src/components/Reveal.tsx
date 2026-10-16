"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  readonly children: React.ReactNode;
  readonly as?: "div" | "li" | "section" | "article";
  readonly className?: string;
  /** Stagger index; each step adds 70ms, capped at 210ms. */
  readonly order?: number;
};

/**
 * A short fade-and-lift as a block scrolls into view, played once.
 *
 * Three guarantees, which matter more than the effect itself:
 *   1. The server-rendered markup is visible. The hidden state is only applied
 *      after mount, so a failed script, a slow network or a crawler never sees
 *      missing content.
 *   2. Only opacity and transform animate, so there is no layout shift and the
 *      composite stays on the GPU.
 *   3. `unobserve` after the first intersection: content that has been read
 *      never re-hides when the reader scrolls back.
 *
 * Reduced motion is handled in CSS (components.css), which pins the resting
 * state, so this component does not need to know about the preference.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  order = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"pending" | "shown" | undefined>();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Anything already inside the viewport is left alone: it should not fade in
    // after the reader has started reading it.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setState("shown");
      return;
    }

    setState("pending");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.unobserve(node);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      data-reveal={state}
      style={
        state === "shown" && order > 0
          ? { transitionDelay: `${Math.min(order * 70, 210)}ms` }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
