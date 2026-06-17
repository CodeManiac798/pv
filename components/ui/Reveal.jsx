"use client";

import { motion } from "framer-motion";

const presets = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: 60, opacity: 0 },
  right: { x: -60, opacity: 0 },
  fade: { opacity: 0 },
  scale: { scale: 0.92, opacity: 0 },
};

/**
 * Scroll-triggered cinematic reveal. Restrained, slow, premium easing.
 */
export default function Reveal({
  children,
  as = "div",
  from = "up",
  delay = 0,
  duration = 1,
  amount = 0.3,
  once = true,
  className = "",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const hidden = presets[from] || presets.up;

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
