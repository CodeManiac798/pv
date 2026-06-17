"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WORLDS } from "@/lib/data";
import CinematicImage from "@/components/ui/CinematicImage";
import Reveal from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";

function WorldCard({ world, tall }) {
  // Cursor-driven 3D tilt + glare.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), {
    stiffness: 150,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), {
    stiffness: 150,
    damping: 16,
  });
  const gx = useTransform(px, [0, 1], [0, 100]);
  const gy = useTransform(py, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,244,234,0.28), transparent 55%)`;

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <Reveal
      from="up"
      amount={0.2}
      className={`${tall ? "lg:mt-0" : "lg:mt-20"}`}
      style={{ perspective: 1100 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative cursor-pointer transition-shadow duration-500 will-change-transform hover:shadow-[0_40px_80px_-30px_rgba(26,20,14,0.7)]"
      >
        <CinematicImage
          src={world.img}
          alt={world.name}
          className={`w-full rounded-[3px] ${tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}
          parallax={20}
          overlay="bottom"
          sizes="(max-width:1024px) 100vw, 33vw"
          imgClassName="transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.06]"
        />

        {/* Cursor glare */}
        <motion.div
          aria-hidden
          style={{ backgroundImage: glare }}
          className="pointer-events-none absolute inset-0 z-10 rounded-[3px] opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* number badge — lifted in 3D space */}
        <span
          style={{ transform: "translateZ(45px)" }}
          className="absolute left-4 top-4 z-10 font-editorial text-sm italic text-ivory/80"
        >
          — {world.n}
        </span>

        {/* caption — lifted in 3D space */}
        <div
          style={{ transform: "translateZ(60px)" }}
          className="absolute inset-x-0 bottom-0 z-10 p-5"
        >
          <div className="flex items-end justify-between">
            <div className="translate-y-1 transition-transform duration-500 ease-cinema group-hover:translate-y-0">
              <h3 className="font-display text-2xl font-light text-ivory sm:text-3xl">
                {world.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-champagne/90">
                {world.mood}
              </p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory opacity-0 transition-all duration-500 ease-cinema group-hover:opacity-100 group-hover:border-champagne group-hover:text-champagne">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Worlds() {
  return (
    <section id="worlds" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal as="span" className="label mb-5 block">
              The Worlds
            </Reveal>
            <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight text-charcoal sm:text-7xl lg:text-8xl">
              <WordReveal lines={[["Six", "Worlds."]]} stagger={0.1} />
              <span className="block italic font-editorial text-charcoal/60">
                <WordReveal
                  lines={[["Endless", "Stories."]]}
                  delay={0.2}
                  stagger={0.1}
                />
              </span>
            </h2>
          </div>
          <Reveal from="up" delay={0.2} className="max-w-sm lg:pb-4">
            <p className="text-pretty text-base leading-relaxed text-charcoal/70">
              No two corners feel the same. Move from the lantern-lit Raj Mahal to
              the Moorish Colonnade to a vintage library — each one a different
              chapter of the same story.
            </p>
          </Reveal>
        </div>

        {/* Offset editorial grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-4">
          {WORLDS.map((w, i) => (
            <WorldCard key={w.n} world={w} tall={i % 2 === 0} />
          ))}
        </div>

        {/* CTA strip */}
        <Reveal from="up" className="mt-20 text-center">
          <p className="font-editorial text-2xl italic text-charcoal/70">
            Six of eighteen-plus worlds — and every frame is already built.
          </p>
          <a
            href="#visit"
            className="group mt-6 inline-flex items-center gap-2 border-b border-charcoal/30 pb-1 text-sm uppercase tracking-wide2 text-charcoal transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            Walk Every World
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-cinema group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
