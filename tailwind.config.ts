import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF9F6",
        surface: "#FFFFFF",
        mist: "#E7EDF0",
        line: "#CBD6DA",
        steel: "#91AAB5",
        petrol: "#304A58",
        navy: "#182E3A",
        ink: "#0E1A21",
        gold: {
          DEFAULT: "#B89968",
          soft: "#E4D3B0",
          deep: "#8F6E42",
          faint: "#F5EDD9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "brand-wide": "0.14em",
        "brand-wider": "0.22em",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 20px 60px -30px rgba(24,46,58,0.25)",
        card: "0 30px 80px -50px rgba(24,46,58,0.35)",
        line: "0 1px 0 0 #CBD6DA",
      },
      backgroundImage: {
        "ivory-fade":
          "linear-gradient(135deg,#F9F9F7 0%,#EEF3F4 55%,#DCE6E9 100%)",
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.09  0 0 0 0 0.12  0 0 0 0 0.14  0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      transitionTimingFunction: {
        emil: "cubic-bezier(0.23, 1, 0.32, 1)",
        drawer: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
