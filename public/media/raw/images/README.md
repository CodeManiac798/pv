# /public/images — The Picture Villa Asset Guide

All static media lives here. Next.js serves everything in `/public` at the root,
so `/public/images/hero/pre-wedding.jpg` is accessed as `/images/hero/pre-wedding.jpg`.

---

## Folder Map

```
/images
  /hero          Hero section frames (2–3 images or short video loops)
  /prewedding    Pre-wedding shoot gallery + story archetypes
  /fashion       Fashion & editorial gallery
  /spaces        Per-space photography (one subfolder per space slug)
  /gallery       General homepage gallery plates
  /social-proof  "Stories From The Villa" curated grid (9–12 images)
  /bts           Behind-the-scenes — candid, honest, energetic
  /drone         Aerial stills and video posters
  /clients       Client + brand logo assets (SVG preferred)
  /og            Open Graph images for social sharing
```

---

## Quality Expectations

| Type | Min resolution | Max file size | Format |
|------|---------------|--------------|--------|
| Hero image | 2400 × 3200 px (portrait) | 600 KB | JPEG/WebP |
| Hero video | 1920 × 1080 px | 8 MB (30s loop) | MP4/H.264 |
| Gallery / social-proof | 1200 × 1800 px | 300 KB | JPEG/WebP |
| Space covers | 1600 × 2000 px | 400 KB | JPEG/WebP |
| OG images | 1200 × 630 px | 200 KB | JPEG |
| Client logos | vector preferred | — | SVG |

All images should be exported at 80–85 quality JPEG or WebP.
Use [Squoosh](https://squoosh.app) or ImageOptim before placing files here.
Next.js will generate responsive sizes automatically from the originals.

---

## Hero Media Selection Rules

The hero has three frames. Pre-wedding is the dominant (largest) frame.

**Frame 1 — Pre-Wedding (dominant):**
- Must feel warm, intimate, golden-hour or soft-window-light.
- The couple should look *dreamy*, not posed.
- Orientation: portrait (3:4 ratio ideally).
- This is the emotional anchor of the entire site. Pick the best shot.
- File: `hero/pre-wedding.jpg` (still) + `hero/pre-wedding.mp4` (optional loop)
- Poster for video: `hero/pre-wedding-poster.jpg`
- Mobile variant (portrait-cropped): `hero/mobile/pre-wedding.jpg`

**Frame 2 — Editorial/Fashion:**
- Dramatic, architectural light. One subject or striking composition.
- Orientation: portrait (4:5 ratio).
- File: `hero/editorial.jpg`

**Frame 3 — Cinematic:**
- Atmospheric, wide or medium shot. Could be a frame from a film shoot.
- Orientation: portrait (4:5 ratio).
- File: `hero/cinematic.jpg`

---

## Naming Conventions

- Lowercase, hyphen-separated. No spaces, no underscores.
- Spaces: use the space slug (e.g. `raj-mahal`, `flower-tunnel`).
- Story archetypes: prefix `story-` (e.g. `story-romantic.jpg`).
- Social-proof grid: `sp-01.jpg` through `sp-12.jpg` in order of intended layout.
- Pre-wedding gallery: `pw-01.jpg` through `pw-24.jpg`.
- Fashion gallery: `fe-01.jpg` through `fe-12.jpg`.
- BTS: `bts-01.jpg` etc.
- Drone: `drone-01.jpg` etc.

---

## Section → Asset Mapping

| Section | Folder(s) |
|---------|-----------|
| HeroSection (hero frames) | `/hero/` |
| ChooseYourStory (6 archetype cards) | `/prewedding/story-*.jpg`, `/fashion/story-fashion.jpg` |
| SpacesPreview / space detail pages | `/spaces/<slug>/` |
| StoriesFromVilla (social proof grid) | `/social-proof/sp-*.jpg` |
| GalleryMoments | `/gallery/` |
| Pre-wedding shoot page | `/prewedding/pw-*.jpg` |
| Fashion/editorial page | `/fashion/fe-*.jpg` |
| BTS content (when added) | `/bts/` |
| Drone / estate overview (when added) | `/drone/` |
| Client logos (EditorialStory section) | `/clients/` |
| Open Graph / SEO | `/og/og-default.jpg` |
