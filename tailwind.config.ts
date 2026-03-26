import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        "primary-dark": "#5A52D5",
        surface: "#F8F7FF",
        "text-main": "#1A1A2E",
        "text-muted": "#64748B",
      },
    },
  },
  plugins: [],
};
export default config;
