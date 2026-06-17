"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CinematicImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  parallax = 14,
  overlay = false,
  vignette = false,
  priority = false,
  sizes = "100vw",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-br from-champagne via-sand to-espresso ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        style={parallax ? { y, scale } : undefined}
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
