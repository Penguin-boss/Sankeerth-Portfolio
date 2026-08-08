"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .group, [href]'
    );

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [isHovering]);

  if (typeof window === "undefined") return null;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  
  if (prefersReducedMotion || isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          display: isVisible ? "block" : "none",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          borderRadius: isHovering ? "50%" : "50%",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div
          className="w-full h-full border-2 border-accent rounded-full"
          style={{
            boxShadow: isHovering 
              ? "0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3)" 
              : "0 0 10px rgba(34, 197, 94, 0.4)",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-accent/10 rounded-full"
          animate={{ scale: isHovering ? 1 : 0, opacity: isHovering ? 0.3 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          width: 8,
          height: 8,
          display: isVisible ? "block" : "none",
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-accent rounded-full" />
      </motion.div>

      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          a, button, [role="button"], input, textarea, select, .group, [href] {
            cursor: none !important;
          }
          
          * {
            cursor: none !important;
          }
          
          input, textarea, select {
            cursor: text !important;
          }
        }
      `}</style>
    </>
  );
}