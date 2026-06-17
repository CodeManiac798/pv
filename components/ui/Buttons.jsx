"use client";

import { ArrowUpRight } from "lucide-react";

/**
 * Primary CTA — warm gold fill with a sweeping shine on hover.
 */
export function BookButton({ className = "", children = "Book A Visit", href = "#visit" }) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium tracking-wide2 text-ivory transition-transform duration-500 ease-cinema hover:-translate-y-0.5 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-soft/40 to-transparent transition-transform duration-[1100ms] ease-cinema group-hover:translate-x-full"
      />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 ease-cinema group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/**
 * Secondary CTA — quiet gold outline (WhatsApp / inquiry).
 */
export function GhostButton({ className = "", children, href = "#", target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-2 rounded-full border border-charcoal/25 px-7 py-3.5 text-sm font-medium tracking-wide2 text-charcoal transition-colors duration-500 ease-cinema hover:border-gold hover:text-gold ${className}`}
    >
      {children}
    </a>
  );
}
