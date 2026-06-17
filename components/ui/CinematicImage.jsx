"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * The workhorse of the site. Every photograph:
 *  - sits on a warm champagne→espresso gradient bed (intentional loading/fail state)
 *  - reveals with a slow cinematic clip-path wipe + scale settle
 *  - drifts with subtle scroll parallax
 *  - carries an optional warm overlay + vignette so text stays legible
 */
export default function CinematicImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  parallax = 14, // px of vertical drift; 0 disables
  overlay = false, // "warm" | "bottom" | true
  vignette = false,
  priority = false,
  sizes = "100vw",
  reveal = true,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [parallax, -parallax]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-br from-champagne via-sand to-espresso ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        style={parallax ? { y, scale } : undefined}
        initial={reveal ? { clipPath: "inset(100% 0 0 0)" } : false}
        whileInView={reveal ? { clipPath: "inset(0% 0 0 0)" } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          draggable={false}
          className={`object-cover drag-none ${imgClassName}`}
        />
      </motion.div>

      {overlay && (
        <div
          className={`pointer-events-none absolute inset-0 ${
            overlay === "bottom"
              ? "bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent"
              : "bg-gradient-to-t from-espresso/70 via-espresso/15 to-espresso/30"
          }`}
        />
      )}

      {vignette && <div className="pointer-events-none absolute inset-0 vignette" />}
    </div>
  );
}
