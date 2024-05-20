import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          light: "var(--primary-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },
        white: "var(--text-light)",
        light: "var(--text-light)",
        dark: "var(--text-dark)",
        black: "var(--text-dark)",
        footer: "var(--footer-color)",
        header: "var(--header-color)",
      },
      boxShadow: {
        main: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
