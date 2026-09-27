"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { legacyFragments, sectionIds, sections } from "@/lib/site";
import { profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { LiquidButton, GlassFilter } from "@/components/ui/liquid-button";

/**
 * Site navigation.
 *
 * Desktop (>= 60rem): a persistent top bar listing every section — the web
 * analogue of a macOS toolbar. All six destinations are visible at once, so
 * there is no hidden navigation to discover. Dark mode only — no theme selector.
 *
 * Mobile (< 60rem): the link row is replaced by a bottom sheet. HIG steers away
 * from stashing primary navigation behind an unlabelled hamburger, so the
 * trigger carries the visible word "Menu" alongside its icon, and the sheet
 * itself rises from the bottom where a thumb can reach it, with 48px rows.
 */
export function NavBar() {
  const [elevated, setElevated] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // Give the bar a background only once the page has scrolled under it, so the
  // hero reads as full-bleed but the bar never sits on top of moving text.
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hackathons and Certificates were merged into one Credentials section.
  // Anyone arriving on an old link is moved to the section that now holds that
  // content instead of landing on a fragment that no longer resolves.
  useEffect(() => {
    const fragment = window.location.hash.replace("#", "");
    const target = legacyFragments[fragment];
    if (!target) return;

    document
      .getElementById(target)
      ?.scrollIntoView({ block: "start", behavior: "auto" });
    window.history.replaceState(null, "", `#${target}`);
  }, []);

  const closeSheet = useCallback(() => {
    setSheetOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  // Escape closes the sheet; Tab stays inside it while it is open.
  useEffect(() => {
    if (!sheetOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSheet();
        return;
      }
      if (event.key !== "Tab") return;

      const items = sheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!items || items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sheetOpen, closeSheet]);

  // Lock background scrolling while the sheet is open.
  useEffect(() => {
    if (!sheetOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sheetRef.current?.querySelector<HTMLElement>("a, button")?.focus({
      preventScroll: true,
    });
    return () => {
      document.body.style.overflow = previous;
    };
  }, [sheetOpen]);

  // Close the sheet if the viewport grows past the breakpoint while it is open,
  // otherwise the reader is left with a sheet over a bar that already has links.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 60.0625rem)");
    const onChange = () => {
      if (query.matches) setSheetOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className="site-nav" data-elevated={elevated}>
        <GlassFilter />
        <nav className="site-nav__inner" aria-label="Main">
          <a href="#top" className="site-nav__brand">
            Sankeerth
            <span className="site-nav__brand-mark" aria-hidden="true">
              .
            </span>
          </a>

          <ul className="site-nav__links">
            {sections.map((section) => (
              <li key={section.id}>
                <LiquidButton
                  href={`#${section.id}`}
                  size="nav"
                  variant="nav"
                  isActive={activeSection === section.id}
                >
                  {section.label}
                </LiquidButton>
              </li>
            ))}
          </ul>

          <button
            ref={triggerRef}
            type="button"
            className="btn btn--bordered site-nav__sheet-trigger"
            aria-expanded={sheetOpen}
            aria-haspopup="dialog"
            onClick={() => setSheetOpen(true)}
          >
            <Menu className="btn__icon" aria-hidden="true" />
            Menu
          </button>
        </nav>
      </header>

      {sheetOpen && typeof document !== "undefined"
        ? createPortal(
            <>
              <div
                className="sheet-scrim"
                aria-hidden="true"
                onMouseDown={closeSheet}
              />

              <div
                ref={sheetRef}
                role="dialog"
                aria-modal="true"
                aria-label="Site sections"
                className="sheet"
              >
                <div className="sheet__grabber" aria-hidden="true" />

                <p className="sheet__title">Sections</p>

                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="sheet__link"
                    aria-current={
                      activeSection === section.id ? "true" : undefined
                    }
                    onClick={closeSheet}
                  >
                    {section.label}
                    <span className="sheet__link-index" aria-hidden="true">
                      {section.index}
                    </span>
                  </a>
                ))}

                <div className="sheet__footer">
                  <button
                    type="button"
                    className="btn btn--bordered"
                    onClick={closeSheet}
                  >
                    <X className="btn__icon" aria-hidden="true" />
                    Close
                  </button>
                </div>

                <p className="sheet__title" style={{ marginTop: "var(--space-4)" }}>
                  {profile.location}
                </p>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}

export default NavBar;
