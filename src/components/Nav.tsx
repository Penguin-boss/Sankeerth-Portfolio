"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) =>
        document.querySelector(link.href)
      )
      .filter(
        (element): element is Element =>
          Boolean(element)
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          )[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{
        y: -18,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`site-nav ${
        scrolled ? "site-nav--scrolled" : ""
      }`}
    >
      <div className="site-container site-nav__inner">
        <a href="#top" className="site-nav__brand">
          SD<span>.</span>
        </a>

        <nav
          className="site-nav__links"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                active === link.href
                  ? "is-active"
                  : ""
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="site-nav__menu"
          onClick={() =>
            setOpen((value) => !value)
          }
          aria-label={
            open ? "Close menu" : "Open menu"
          }
          aria-expanded={open}
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="site-nav__mobile"
          >
            <div className="site-container">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
