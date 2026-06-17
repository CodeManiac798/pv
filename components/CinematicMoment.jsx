"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CINEMATIC } from "@/lib/data";

export default function CinematicMoment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="letterbox relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-espresso text-ivory"
    >
      {/* Parallax cinematic plate */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image
          src={CINEMATIC.bg}
          alt="A sweeping cinematic moment at The Picture Villa"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/40" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Title-card statement */}
      <motion.div
        style={{ y: textY }}
        className="relative z-30 px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-8 block text-[0.7rem] uppercase tracking-label text-champagne"
        >
          The Picture Villa
        </motion.span>

        <h2 className="font-editorial text-[12vw] font-light italic leading-[0.98] tracking-tight sm:text-[9vw] lg:text-[7rem]">
          {CINEMATIC.quote.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {i === 1 || i === 3 ? (
                  <span className="shimmer-gold">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h2>
      </motion.div>
    </section>
  );
}
