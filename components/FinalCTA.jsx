"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT, HERO } from "@/lib/data";
import WordReveal from "@/components/ui/WordReveal";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section
      id="visit"
      ref={ref}
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-espresso text-ivory"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={HERO.slideshow[0]}
          alt="Golden hour at The Picture Villa"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-espresso/60" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* warm glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(228,200,146,0.25),transparent_65%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal as="span" className="label mb-7 block text-champagne">
          The Invitation
        </Reveal>
        <h2 className="font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.5rem]">
          <WordReveal lines={[["Come", "Experience"]]} stagger={0.08} amount={0.4} />
          <span className="block italic font-editorial shimmer-gold pb-[0.1em]">
            <WordReveal
              lines={[["It", "Yourself."]]}
              delay={0.2}
              stagger={0.08}
              amount={0.4}
            />
          </span>
        </h2>

        <Reveal from="up" delay={0.3}>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
            Some places are better experienced in person. Walk the estate, feel
            the light, and picture your story unfolding here.
          </p>
        </Reveal>

        <Reveal
          from="up"
          delay={0.45}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-champagne px-9 py-4 text-sm font-medium tracking-wide2 text-espresso transition-transform duration-500 ease-cinema hover:-translate-y-0.5"
            data-cta="book"
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
            className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-8 py-4 text-sm font-medium tracking-wide2 text-ivory transition-colors duration-500 ease-cinema hover:border-champagne hover:text-champagne"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
          </a>
        </Reveal>

        <Reveal from="fade" delay={0.7}>
          <p className="mt-8 text-xs uppercase tracking-wide2 text-ivory/50">
            {CONTACT.location} · {CONTACT.mapsHint}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
