"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-charcoal py-3.5 pl-4 pr-5 text-ivory shadow-[0_12px_40px_-12px_rgba(26,20,14,0.7)] sm:bottom-7 sm:right-7"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne/60" />
            <MessageCircle className="relative h-5 w-5 text-champagne" />
          </span>
          <span className="text-sm font-medium tracking-wide2">Book A Visit</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
