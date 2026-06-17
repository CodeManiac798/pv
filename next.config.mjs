/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Imagery is bundled locally in /public/media. Optimization is left off
    // so assets are served as-is — simple, predictable, and offline-friendly.
    unoptimized: true,
  },
};

export default nextConfig;
