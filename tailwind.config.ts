import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system palette
        base: "#FFFFFF",          // page background — pure white
        ink: "#1A1A1A",            // text primary
        ink2: "#6B6B6B",           // text secondary
        metal: "#8A8A8A",          // brushed metal accent
        cold: "#FAFAFA",           // cold white accent
        line: "#E8E8E8",           // border / divider
        // Aliases for Tailwind defaults so existing utilities still work
        background: "#FFFFFF",
        foreground: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "var(--font-pretendard)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Custom scale tied to the design system
        "h1-d": ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h1-m": ["40px", { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2-d": ["40px", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h2-m": ["28px", { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "600" }],
        "h3":   ["20px", { lineHeight: "1.4",  fontWeight: "500" }],
        "body": ["16px", { lineHeight: "1.7",  fontWeight: "400" }],
        "meta": ["13px", { lineHeight: "1.5",  letterSpacing: "0.1em", fontWeight: "400" }],
      },
      maxWidth: {
        container: "1280px",
        prose: "720px",
        prose2: "900px",
        manifesto: "600px",
      },
      spacing: {
        section: "160px",
        "section-m": "96px",
      },
      transitionTimingFunction: {
        "soft": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
