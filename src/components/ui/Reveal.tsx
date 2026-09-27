"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: React.ReactNode;
  /** Stagger index — 0-based. Each step adds 60ms, capped at 240ms. */
  order?: number;
  /** Transition delay in seconds (e.g. 0.15), milliseconds, or CSS time string */
  delay?: number | string;
  as?: "div" | "li" | "section" | "article";
  className?: string;
};

/**
 * Entrance animation for content blocks.
 *
 * Two guarantees:
 *   - When the reader has Reduce Motion on, the element renders at its resting
 *     state with no transition at all (via CSS media query).
 *   - The animation only touches opacity and transform, and `once` means content
 *     never re-hides on scroll-back. Content that has been read stays read.
 *   - CSS-first approach means content is NEVER permanently hidden if JS fails.
 */
export function Reveal({ children, order = 0, delay, as = "div", className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"pending" | "shown" | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Set up observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState("shown");
            observer.unobserve(node);
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px" }
    );

    // If it's already far above the bottom of the viewport, just show it immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      setState("shown");
    } else {
      setState("pending");
    }
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Tag = as;

  const transitionDelay =
    state === "shown"
      ? delay !== undefined
        ? typeof delay === "number"
          ? delay < 10
            ? `${delay}s`
            : `${delay}ms`
          : delay
        : `${Math.min(order * 60, 240)}ms`
      : undefined;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      data-reveal={state}
      style={{
        transitionDelay,
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
