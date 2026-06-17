"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TRANSFORMATION } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";

export default function Transformation() {
  const [active, setActive] = useState(0);
  const item = TRANSFORMATION[active];

  return (
    <section
      id="transformation"
      className="relative overflow-hidden bg-espresso py-24 text-ivory sm:py-32"
    >
      {/* warm ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(188,138,69,0.22),transparent_65%)] blur-3xl" />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal as="span" className="label mb-5 block">
            The Transformation
          </Reveal>
          <h2 className="font-display text-4xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <WordReveal lines={[["What", "Your", "Story"]]} stagger={0.07} />
            <span className="block italic font-editorial text-champagne">
              <WordReveal
                lines={[["Could", "Feel", "Like."]]}
                delay={0.2}
                stagger={0.07}
              />
            </span>
          </h2>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          {/* Selector */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-5">
            {TRANSFORMATION.map((t, i) => {
              const on = i === active;
              return (
                <button
                  key={t.key}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group border-b border-ivory/10 py-6 text-left transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className={`font-display text-3xl font-light transition-all duration-500 ease-cinema sm:text-4xl ${
                        on
                          ? "translate-x-2 text-champagne"
                          : "text-ivory/45 group-hover:text-ivory/80"
                      }`}
                    >
                      {t.title}
                    </span>
                    {t.share && (
                      <span className="shrink-0 rounded-full border border-champagne/40 px-3 py-1 text-[0.6rem] uppercase tracking-wide2 text-champagne">
                        {t.share}
                      </span>
                    )}
                  </div>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden font-editorial text-lg italic text-ivory/70"
                      >
                        <span className="block pt-2">{t.line}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Crossfading cinematic frame */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-espresso-2 sm:aspect-[3/2] lg:aspect-[4/3]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 vignette" />
                </motion.div>
              </AnimatePresence>

              {/* Floating caption */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.key + "-cap"}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-[0.65rem] uppercase tracking-label text-champagne">
                      Imagine — {item.title}
                    </p>
                    <p className="mt-2 max-w-md font-editorial text-2xl italic leading-snug text-ivory sm:text-3xl">
                      {item.line}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
