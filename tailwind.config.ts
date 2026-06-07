import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        brand: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          cyan: "#06B6D4",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(99, 102, 241, 0.28)",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        grid: { "0%": { transform: "translateY(0)" }, "100%": { transform: "translateY(-48px)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        grid: "grid 14s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
