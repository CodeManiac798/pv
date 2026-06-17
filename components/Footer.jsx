"use client";

import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { CONTACT, NAV } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory">
      <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8">
        {/* Giant wordmark */}
        <Reveal from="up">
          <h2 className="font-display text-[16vw] font-light leading-[0.85] tracking-tight text-ivory/95 sm:text-[13vw] lg:text-[9rem]">
            The Picture
            <span className="block italic font-editorial text-champagne/90">
              Villa
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-ivory/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Visit */}
          <div>
            <h3 className="label mb-5">Visit</h3>
            <p className="flex items-start gap-2 text-sm text-ivory/75">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              {CONTACT.location}
              <br />
            </p>
            <p className="mt-1 pl-6 text-xs text-ivory/50">{CONTACT.mapsHint}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label mb-5">Contact</h3>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-ivory/75 transition-colors hover:text-champagne"
            >
              <Phone className="h-4 w-4 text-champagne" /> {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3 flex items-center gap-2 text-sm text-ivory/75 transition-colors hover:text-champagne"
            >
              <Mail className="h-4 w-4 text-champagne" /> {CONTACT.email}
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="label mb-5">Explore</h3>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-sm text-ivory/75 transition-colors hover:text-champagne"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram / CTA */}
          <div>
            <h3 className="label mb-5">Follow The Story</h3>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-ivory/75 transition-colors hover:text-champagne"
            >
              <Instagram className="h-4 w-4 text-champagne" /> @thepicturevilla
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-cinema group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#visit"
              className="mt-6 inline-block rounded-full bg-champagne px-6 py-3 text-sm font-medium tracking-wide2 text-espresso transition-transform duration-500 ease-cinema hover:-translate-y-0.5"
            >
              Book A Visit
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/40 sm:flex-row">
          <span>© {new Date().getFullYear()} The Picture Villa. Every frame feels cinematic.</span>
          <span className="font-editorial italic">A cinematic world hidden inside Delhi.</span>
        </div>
      </div>
    </footer>
  );
}
