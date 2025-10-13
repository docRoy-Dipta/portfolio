import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue for tech theme
        secondary: "#6b7280", // Gray
        background: "#f9fafb", // Light gray-white
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;