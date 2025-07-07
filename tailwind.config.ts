import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        panchang: ["var(--font-panchang)", "system-ui", "sans-serif"],
        thorsa: ["var(--font-thorsa)", "system-ui", "sans-serif"],
        "mona-sans": ["var(--font-mona-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
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
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
