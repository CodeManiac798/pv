"use client";

import { PROCESS } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import WordReveal from "@/components/ui/WordReveal";

export default function Process() {
  return (
    <section className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="mb-16 max-w-2xl">
          <Reveal as="span" className="label mb-5 block">
            The Experience
          </Reveal>
          <h2 className="font-display text-4xl font-light leading-[1.02] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            <WordReveal lines={[["Your", "Shoot,"]]} stagger={0.08} />
            <span className="italic font-editorial text-charcoal/55"> Simplified.</span>
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} from="up" delay={i * 0.1} className="group relative">
              <div className="mb-6 flex items-center gap-4">
                <span className="font-editorial text-5xl italic text-gold/40 transition-colors duration-500 group-hover:text-gold">
                  {p.n}
                </span>
                <span className="h-px flex-1 bg-charcoal/15 transition-colors duration-500 group-hover:bg-gold/40" />
              </div>
              <h3 className="font-display text-2xl font-light leading-tight text-charcoal">
                {p.title}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-charcoal/65">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
