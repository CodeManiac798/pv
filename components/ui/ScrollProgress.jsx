"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin gold "film reel" bar pinned to the very top of the page that
 * fills as you scroll the whole document — a subtle cinematic progress cue.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold via-champagne to-gold"
    />
  );
}
