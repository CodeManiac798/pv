/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm cinematic luxury — golden hour, never pure black.
        ivory: "#FAF4EA",
        cream: "#F4EADA",
        sand: "#E7D6BC",
        champagne: "#E4C892",
        beige: "#D8C3A2",
        gold: "#BC8A45",
        "gold-soft": "#CDA265",
        ember: "#A8642B",
        charcoal: "#2B2620",
        espresso: "#1A140E",
        "espresso-2": "#241A12",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.32em",
        wide2: "0.18em",
      },
      maxWidth: {
        reading: "62ch",
      },
      transitionTimingFunction: {
        cinema: "cubic-bezier(0.16, 1, 0.3, 1)",
        film: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-3%,-4%)" },
          "30%": { transform: "translate(2%,-2%)" },
          "50%": { transform: "translate(-1%,3%)" },
          "70%": { transform: "translate(3%,1%)" },
          "90%": { transform: "translate(-2%,2%)" },
        },
        "slow-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        grain: "grain-shift 8s steps(6) infinite",
        float: "slow-float 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
