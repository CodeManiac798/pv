"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ESTATE, CONTACT } from "@/lib/data";
import CinematicImage from "@/components/ui/CinematicImage";
import Reveal from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";

export default function EstateReveal() {
  return (
    <section id="estate" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal as="span" from="up" className="label mb-5 block">
              The Estate
            </Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.02] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              <WordReveal
                lines={[["A", "Hidden", "Cinematic"], ["World", "Inside"]]}
                stagger={0.07}
              />
              <span className="italic ink-gold font-editorial"> Delhi.</span>
            </h2>
          </div>
          <Reveal
            from="up"
            delay={0.2}
            className="lg:col-span-4 lg:pb-3"
          >
            <p className="max-w-sm text-pretty text-base leading-relaxed text-charcoal/70">
              Drive twenty minutes past the noise and the city disappears. What
              opens up feels less like a venue — more like a film set you get to
              live inside for a day.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
              <MapPin className="h-4 w-4" />
              {CONTACT.location} · {CONTACT.mapsHint}
            </div>
          </Reveal>
        </div>

        {/* Wide cinematic reveal */}
        <CinematicImage
          src={ESTATE.wide}
          alt="The Picture Villa estate bathed in golden light"
          className="aspect-[16/9] w-full rounded-[3px] sm:aspect-[21/9]"
          parallax={26}
          vignette
          sizes="100vw"
        />

        {/* Stats + intimate inset */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal from="right" className="lg:col-span-5">
            <CinematicImage
              src={ESTATE.inset}
              alt="An intimate moment captured at the villa"
              className="aspect-[4/5] w-full rounded-[3px]"
              parallax={18}
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="grid grid-cols-3 gap-6 border-y border-charcoal/10 py-10">
              {ESTATE.stats.map((s, i) => (
                <Reveal key={s.label} from="up" delay={i * 0.12}>
                  <div className="font-display text-5xl font-light text-charcoal sm:text-6xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide2 text-charcoal/55">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal from="up" delay={0.2}>
              <p className="mt-8 max-w-reading font-editorial text-2xl italic leading-snug text-charcoal/80 sm:text-3xl">
                “One address. Eighteen worlds. Every one of them built to be
                photographed.”
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
