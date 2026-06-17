"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle, Check } from "lucide-react";
import { HERO, CONTACT } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";

const SLIDES = HERO.slideshow;
const HOLD = 5200; // ms each frame holds before dissolving

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The whole hero drifts up & fades as you leave it — a film dissolve.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  // Auto-advancing cinematic reel.
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % SLIDES.length), HOLD);
    return () => clearTimeout(t);
  }, [idx, paused]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso"
    >
      {/* Primary cinematic backdrop — crossfading Ken-Burns reel */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <AnimatePresence>
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.16 }}
              animate={{ scale: 1 }}
              transition={{ duration: (HOLD + 1700) / 1000, ease: "linear" }}
            >
              <Image
                src={SLIDES[idx]}
                alt="A cinematic frame at The Picture Villa"
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Warm cinematic grade */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/35 to-espresso/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/10 to-transparent" />
        <div className="absolute inset-0 vignette" />

        {/* Drifting golden light-leak */}
        <motion.div
          aria-hidden
          className="absolute -right-32 top-10 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(228,200,146,0.35),transparent_65%)] blur-2xl"
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -10, 0], opacity: [0.7, 1, 0.8, 0.7] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Vertical reel selector (replaces the old floating frames) */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex">
        {SLIDES.map((_, i) => {
          const on = i === idx;
          return (
            <button
              key={i}
              onClick={() => setIdx(i)}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              aria-label={`View frame ${i + 1}`}
              className="group flex items-center gap-3"
            >
              <span
                className={`font-editorial text-sm italic tabular-nums transition-colors duration-500 ${
                  on ? "text-champagne" : "text-ivory/40 group-hover:text-ivory/75"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`block h-px transition-all duration-500 ease-cinema ${
                  on ? "w-10 bg-champagne" : "w-4 bg-ivory/30 group-hover:w-6 group-hover:bg-ivory/60"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-24 sm:px-8 sm:pb-28 lg:justify-center lg:pb-0"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3 text-champagne"
        >
          <span className="h-px w-10 bg-champagne/60" />
          <span className="text-[0.7rem] uppercase tracking-label">
            A cinematic world hidden inside Delhi
          </span>
        </motion.span>

        <h1 className="font-display text-[15vw] font-light leading-[0.92] tracking-[-0.02em] text-ivory sm:text-[12vw] lg:text-[8.5vw] xl:text-[7.5rem]">
          <WordReveal
            lines={[["Every", "Frame"]]}
            delay={0.55}
            stagger={0.12}
            duration={1.1}
            amount={0}
          />
          <span className="block italic ink-gold pb-[0.12em]">
            <WordReveal
              lines={[["Feels", "Cinematic."]]}
              delay={0.9}
              stagger={0.12}
              duration={1.1}
              amount={0}
              className="font-editorial"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg"
        >
          Crafted for unforgettable pre-weddings, fashion stories, and visual
          experiences — where every corner is already a frame worth keeping.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#visit"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-champagne px-8 py-4 text-sm font-medium tracking-wide2 text-espresso transition-transform duration-500 ease-cinema hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-[1100ms] ease-cinema group-hover:translate-x-full"
            />
            <span className="relative z-10">Book A Visit</span>
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-7 py-4 text-sm font-medium tracking-wide2 text-ivory transition-colors duration-500 ease-cinema hover:border-champagne hover:text-champagne"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.9 }}
          className="mt-12 flex flex-wrap gap-x-7 gap-y-3"
        >
          {HERO.trust.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 text-xs tracking-wide text-ivory/70"
            >
              <Check className="h-3.5 w-3.5 text-champagne" strokeWidth={2.5} />
              {t}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Film-strip progress scrubber */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-ivory/10">
        <motion.div
          key={idx}
          className="h-full bg-gradient-to-r from-gold via-champagne to-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: paused ? 0 : HOLD / 1000, ease: "linear" }}
        />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/60 lg:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-label">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
