import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#2EC27E",
        "body-color": "#5C5C5C",
        "body-color-dark": "#A3A3A3",
        dark: "#111111",
        "gray-dark": "#141414",
        "bg-color-dark": "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        "sticky-dark": "inset 0 -1px 0 0 hsla(0,0%,100%,.08)",
      },
    },
  },
  plugins: [],
};
export default config;
