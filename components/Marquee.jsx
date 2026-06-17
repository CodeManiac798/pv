"use client";

import { motion } from "framer-motion";
import { MARQUEE } from "@/lib/data";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative overflow-hidden border-y border-charcoal/10 bg-cream py-5">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-editorial text-2xl italic text-charcoal/70 sm:text-3xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </motion.div>
      {/* edge fades for seamlessness */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
