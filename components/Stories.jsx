"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { STORIES } from "@/lib/data";
import CinematicImage from "@/components/ui/CinematicImage";
import Reveal from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";

export default function Stories() {
  return (
    <section id="stories" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal as="span" className="label mb-5 block">
              The Proof
            </Reveal>
            <h2 className="font-display text-5xl font-light leading-[0.95] tracking-tight text-charcoal sm:text-7xl">
              <WordReveal lines={[["Stories", "Created"]]} stagger={0.08} />
              <span className="italic font-editorial ink-gold"> Here.</span>
            </h2>
          </div>
          <Reveal from="up" delay={0.15} className="flex items-center gap-3 lg:pb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-charcoal/70">
              Loved by couples, labels & creators across Delhi.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Horizontal gallery track */}
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {STORIES.map((s, i) => (
          <motion.article
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-[82vw] shrink-0 snap-center sm:w-[58vw] lg:w-[30vw]"
          >
            <CinematicImage
              src={s.img}
              alt={`${s.name} — ${s.type}`}
              className="aspect-[4/5] w-full rounded-[3px]"
              parallax={0}
              reveal={false}
              overlay="bottom"
              sizes="(max-width:1024px) 82vw, 30vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <Quote className="mb-3 h-7 w-7 text-champagne/80" />
              <p className="font-editorial text-xl italic leading-snug text-ivory sm:text-2xl">
                “{s.quote}”
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-ivory/20 pt-3">
                <span className="text-sm font-medium text-ivory">{s.name}</span>
                <span className="text-[0.65rem] uppercase tracking-wide2 text-champagne">
                  {s.type}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
        <div className="shrink-0 pr-2" />
      </div>

      <p className="mt-4 px-5 text-center text-xs uppercase tracking-wide2 text-charcoal/40 sm:px-8">
        ← Drag to explore more stories →
      </p>
    </section>
  );
}
