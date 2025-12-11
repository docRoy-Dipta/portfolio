import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#6b7280",
          foreground: "#ffffff"
        },
        background: "#f9fafb",
        foreground: "#0f172a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a"
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b"
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff"
        },
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#2563eb",
        chart: {
          "1": "#2563eb",
          "2": "#10b981",
          "3": "#f59e0b",
          "4": "#ef4444",
          "5": "#8b5cf6"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem"
      }
    }
  },
  plugins: [],
};

export default config;