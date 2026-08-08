"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-bold text-fg tracking-tight flex items-center gap-2 uppercase"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="w-2.5 h-2.5 bg-accent rounded-sm animate-pulse" />
          Sankeerth
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative pb-2 font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  isActive ? "text-accent" : "text-fg-muted hover:text-fg"
                }`}
              >
                {l.label}
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{ display: isActive ? "block" : "none" }}
                />
              </a>
            );
          })}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-fg p-2 rounded-lg hover:bg-bg-elevated transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-border bg-bg/95 backdrop-blur-lg"
        >
          <div className="flex flex-col px-6 py-6 gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-body text-sm uppercase tracking-wider py-3 px-4 rounded-lg transition-all ${
                  active === l.href
                    ? "bg-accent/10 text-accent"
                    : "text-fg-muted hover:text-fg hover:bg-bg-hover"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}