"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Connect", href: "#connect" },
] as const;

export function NavBar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-sm" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="font-mono text-sm tracking-wider text-secondary transition-colors duration-200 hover:text-primary"
          aria-label="Scroll to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          SD
        </a>

        <ul className="flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = active === sectionId;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`font-mono text-sm tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(sectionId)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
