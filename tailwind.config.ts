import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        panchang: ["var(--font-panchang)", "system-ui", "sans-serif"],
        "mona-sans": ["var(--font-mona-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        "electric-blue": "#0066FF",
        "warm-gray": "#F8F8F8",
        "soft-gray": "#6B7280",
        "deep-black": "#0A0A0A",
      },
      animation: {
        reveal: "reveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
      },
      keyframes: {
        reveal: {
          to: {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
