/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        fly: {
          void: "#06060a",
          ink: "#0c0c12",
          panel: "#101018",
          line: "rgba(255,255,255,0.08)",
          muted: "rgba(244,241,234,0.62)",
          cream: "#f4f1ea",
        },
      },
      boxShadow: {
        glow: "0 0 80px -20px rgb(var(--accent-rgb) / 0.45)",
        card: "0 24px 80px -32px rgba(0,0,0,0.65)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 14s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(8px, -12px) scale(1.03)" },
          "66%": { transform: "translate(-10px, 6px) scale(0.98)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
