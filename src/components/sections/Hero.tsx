"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Hero — Cinematic scroll-driven introduction.
 *
 * Choreography:
 *   1. Initial (0.00 – 0.12):
 *      Resting hero state. Sankeerth Devella typography on left, large
 *      cinematic portrait on right facing left. Scroll indicator prompts.
 *   2. Separation & Dissolve (0.12 – 0.55):
 *      Scroll indicator fades and drifts down. Name slides subtly left and
 *      dissolves with gentle blur. Portrait glides subtly right with gentle
 *      depth of field while face stays readable through early scroll.
 *   3. Controlled Overlap & Statement (0.32 – 0.74):
 *      As hero elements dissolve, the transition statement emerges from a
 *      different spatial plane, peaks in prominence, and holds center stage.
 *   4. Gateway to Profile (0.74 – 0.90):
 *      The transition statement gently floats upward and clears the screen.
 *      At 1.00, the sticky hero unpins seamlessly and Profile (About) arrives.
 *   5. Full Reversibility:
 *      Scrolling back upward reconstructs the hero composition deterministically.
 *
 * Hydration safety:
 *   Motion values are only bound to DOM style props after mount via `active`.
 *   Both SSR and first client render produce identical markup with zero inline
 *   motion styles. CSS handles the resting visual state.
 */

/** Helper: create a blur filter motion value from a numeric motion value. */
function useBlurFilter(blur: MotionValue<number>): MotionValue<string> {
  return useTransform(blur, (v) => `blur(${v}px)`);
}

/** Hydration-safe client-mounted check using React 19 recommended useSyncExternalStore */
const emptySubscribe = () => () => {};
function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // client snapshot
    () => false  // server snapshot
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // --- All motion hooks called unconditionally (Rules of Hooks) ---

  // 1. Text transforms (exits LEFT with restrained blur & fade)
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.40, 0.54],
    [1, 1, 0.35, 0]
  );
  const textX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.54],
    ["0%", "0%", "-8%"]
  );
  const textBlurValue = useTransform(scrollYProgress, [0, 0.18, 0.50], [0, 0, 4]);
  const textFilter = useBlurFilter(textBlurValue);

  // 2. Portrait transforms (exits RIGHT with subtle scale & depth-of-field blur)
  const portraitOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.44, 0.58],
    [1, 1, 0.45, 0]
  );
  const portraitX = useTransform(
    scrollYProgress,
    [0, 0.14, 0.58],
    ["0%", "0%", "3.5%"]
  );
  const portraitScale = useTransform(
    scrollYProgress,
    [0, 0.14, 0.58],
    [1, 1, 1.025]
  );
  const portraitBlurValue = useTransform(scrollYProgress, [0, 0.24, 0.56], [0, 0, 3]);
  const portraitFilter = useBlurFilter(portraitBlurValue);

  // 3. Scroll indicator: subtly responsive to scroll progress
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.10], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.10], ["0px", "10px"]);

  // 4. Transition statement: emerging statement with controlled overlap
  const transitionOpacity = useTransform(
    scrollYProgress,
    [0.30, 0.46, 0.60, 0.74, 0.88],
    [0, 0.65, 1, 1, 0]
  );
  const transitionY = useTransform(
    scrollYProgress,
    [0.30, 0.58, 0.74, 0.88],
    ["28px", "0px", "0px", "-20px"]
  );
  const transitionScale = useTransform(
    scrollYProgress,
    [0.30, 0.58, 0.74, 0.88],
    [0.96, 1, 1, 1.015]
  );
  const transitionBlurValue = useTransform(scrollYProgress, [0.74, 0.88], [0, 3]);
  const transitionFilter = useBlurFilter(transitionBlurValue);

  // Active state: only after hydration AND when reduced motion is off
  const active = mounted && !prefersReducedMotion;

  return (
    <section
      ref={sectionRef}
      id="top"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero__sticky">
        <div className="hero__container hero__layout">
          {/* --- LEFT: Large Typography + Metadata --- */}
          <motion.div
            className="hero__content"
            style={
              active
                ? { opacity: textOpacity, x: textX, filter: textFilter }
                : undefined
            }
          >
            <h1 id="hero-title" className="hero__name">
              <span className="hero__name-line">SANKEERTH</span>
              <span className="hero__name-line">DEVELLA</span>
            </h1>

            <div className="hero__meta">
              <h2 className="hero__role">Creative Technologist</h2>
              <div className="hero__tags">
                <span>AI</span>
                <span className="hero__dot" aria-hidden="true" />
                <span>Software</span>
                <span className="hero__dot" aria-hidden="true" />
                <span>Design</span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: Cinematic Portrait --- */}
          <motion.div
            className="hero__portrait"
            style={
              active
                ? {
                    opacity: portraitOpacity,
                    x: portraitX,
                    scale: portraitScale,
                    filter: portraitFilter,
                  }
                : undefined
            }
          >
            <div className="hero__portrait-wrapper">
              <Image
                src="/hero-portrait.png"
                alt="Sankeerth Devella — Creative Technologist"
                width={581}
                height={1024}
                priority
                className="hero__portrait-img"
              />
              {/* Seamless tonal fade into dark background */}
              <div className="hero__portrait-fade" aria-hidden="true" />
            </div>
          </motion.div>

          {/* --- Scroll Indicator: Subtle Dark Liquid Glass --- */}
          <motion.div
            className="hero__scroll"
            style={
              active
                ? {
                    opacity: scrollIndicatorOpacity,
                    y: scrollIndicatorY,
                  }
                : undefined
            }
          >
            <span className="hero__scroll-text">SCROLL</span>
            <span className="hero__scroll-arrow" aria-hidden="true">↓</span>
          </motion.div>

          {/* --- Transition Typography (emerges as hero exits) --- */}
          <motion.div
            className="hero__transition-text"
            style={
              active
                ? {
                    opacity: transitionOpacity,
                    y: transitionY,
                    scale: transitionScale,
                    filter: transitionFilter,
                  }
                : undefined
            }
            aria-hidden="true"
          >
            <div className="hero__transition-badge">
              <span className="hero__transition-dot" aria-hidden="true" />
              <span>Creative Technologist</span>
            </div>
            <p className="hero__transition-statement">
              Building at the intersection of{" "}
              <span className="hero__transition-accent">Design</span>,{" "}
              <span className="hero__transition-accent">Engineering</span> &amp;{" "}
              <span className="hero__transition-accent">AI</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
