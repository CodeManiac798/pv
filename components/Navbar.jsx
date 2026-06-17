"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, CONTACT } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-cinema ${
          scrolled
            ? "bg-ivory/80 py-3 shadow-[0_1px_30px_-12px_rgba(26,20,14,0.4)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="#top" className="group flex min-w-0 flex-col leading-none">
            <span
              className={`font-display text-base tracking-tight transition-colors duration-500 sm:text-lg ${
                scrolled ? "text-charcoal" : "text-ivory"
              }`}
            >
              The Picture Villa
            </span>
            <span
              className={`mt-0.5 hidden text-[0.55rem] uppercase tracking-label transition-colors duration-500 sm:block ${
                scrolled ? "text-gold" : "text-champagne/90"
              }`}
            >
              Every Frame Feels Cinematic
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`group relative text-sm tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-charcoal/80 hover:text-charcoal" : "text-ivory/85 hover:text-ivory"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-cinema group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#visit"
              className="hidden rounded-full bg-charcoal px-6 py-2.5 text-sm font-medium tracking-wide2 text-ivory transition-transform duration-500 ease-cinema hover:-translate-y-0.5 md:inline-block"
            >
              Book A Visit
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden ${scrolled ? "text-charcoal" : "text-ivory"}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] bg-espresso text-ivory lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-lg">The Picture Villa</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col gap-2 px-7">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ivory/10 py-5 font-display text-4xl text-ivory/90"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 px-7">
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="rounded-full bg-champagne px-7 py-4 text-center text-sm font-medium tracking-wide2 text-espresso"
              >
                Book A Visit
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-7 py-4 text-sm tracking-wide2 text-ivory"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
