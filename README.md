# The Picture Villa — A Cinematic Destination Experience

A high-end, emotionally cinematic homepage built to make visitors feel
**“I need my shoot here.”** Warm golden-hour luxury, editorial typography,
and film-grade scroll motion — not a venue website.

## Stack
- **Next.js 15** (App Router)
- **Tailwind CSS 3**
- **Framer Motion** (cinematic reveals, parallax, scroll choreography)
- **Lucide** icons
- Fonts: **Fraunces** (display) · **Cormorant Garamond** (editorial italics) · **Hanken Grotesk** (UI/body)

## Run
```bash
npm install
npm run dev      # http://localhost:3000 (falls back to 3001 if busy)
npm run build && npm start   # production
```
> Note: on this machine port 3000 is already in use, so dev runs on **3001**.
> To force a port: `npm run dev -- -p 3005`.

## The experience (scroll journey)
Hero → Marquee → Estate Reveal → 18 Worlds → Transformation (interactive) →
Cinematic Title-Card → Stories (proof) → Process → Final Invitation → Footer.
A persistent WhatsApp / Book-A-Visit CTA appears after the hero.

## Swapping in the real Picture Villa media
All imagery is **self-contained** in [`public/media/`](public/media/) and mapped in a
single file: [`lib/data.js`](lib/data.js).

The current photos are **curated stand-ins** (warm Indian pre-wedding / editorial
mood) so the layout reads correctly. To go live:
1. Drop the real TPV assets into `public/media/` using the **same filenames**
   (`hero-1.jpg`, `world-marble.jpg`, `cinematic.jpg`, …), **or**
2. Edit the paths/copy in `lib/data.js`.

Nothing else needs to change. Video backgrounds can replace the hero/cinematic
`<Image>` with a `<video>` in `components/Hero.jsx` / `components/CinematicMoment.jsx`.

Also update real contact details (phone, WhatsApp number, email) in the
`CONTACT` object at the top of `lib/data.js`.

## Structure
```
app/            layout (fonts, metadata) · page (section composition) · globals.css
components/     Hero, EstateReveal, Worlds, Transformation, CinematicMoment,
                Stories, Process, FinalCTA, Footer, Navbar, Marquee, FloatingCTA
components/ui/  Reveal · WordReveal · CinematicImage · Buttons  (motion primitives)
lib/data.js     all content + media references (single source of truth)
public/media/   cinematic imagery
```
