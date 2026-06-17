"use client";

import { motion } from "framer-motion";

/**
 * Cinematic word-by-word headline entrance. Each line is an array of words
 * so we can keep manual line-breaks while staggering every word's rise.
 */
export default function WordReveal({
  lines = [],
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 0.9,
  once = true,
  amount = 0.5,
}) {
  return (
    <span className={className} aria-label={lines.map((l) => l.join(" ")).join(" ")}>
      {lines.map((words, li) => (
        <span key={li} className="block overflow-hidden">
          {words.map((word, wi) => {
            const idx = lines
              .slice(0, li)
              .reduce((a, l) => a + l.length, 0) + wi;
            return (
              <motion.span
                key={wi}
                aria-hidden="true"
                className="inline-block whitespace-pre"
                initial={{ y: "115%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once, amount }}
                transition={{
                  duration,
                  delay: delay + idx * stagger,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
                {wi < words.length - 1 ? " " : ""}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
