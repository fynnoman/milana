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
        white: "#FFFFFF",
        paper: "#FFFFFF",
        mist: "#F5F7FA",
        surface: "#F0F3F7",
        line: "#E4E9EF",
        muted: "#6B7A88",
        petrol: "#2F5F96",
        blue: "#2F5F96",
        navy: "#214267",
        deep: "#17324F",
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
        soft:
          "0 1px 0 0 rgba(255,255,255,0.7) inset, 0 20px 60px -30px rgba(33,66,103,0.18)",
        card: "0 30px 80px -50px rgba(33,66,103,0.28)",
        line: "0 1px 0 0 #E4E9EF",
      },
      backgroundImage: {
        "mist-fade":
          "linear-gradient(135deg,#FFFFFF 0%,#F5F7FA 55%,#E9EEF4 100%)",
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
