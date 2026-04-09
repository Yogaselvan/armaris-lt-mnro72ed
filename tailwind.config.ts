import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/theme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: {
          50: "#ac8982",
          100: "#ac6759",
          200: "#9a4c3d",
          300: "#7e3526",
          400: "#5a2217",
          500: "#3c140c",
          600: "#41140b",
          700: "#2c0d07",
          800: "#1f0905",
          900: "#110503",
          DEFAULT: "#3c140c",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#0a0a0f",
            foreground: "#f0f0f5",
            primary: {
              50: "#f4f0ef",
              100: "#e9d6d2",
              200: "#dfb6ae",
              300: "#d98f81",
              400: "#d46853",
              500: "#d4462a",
              600: "#ad361e",
              700: "#842614",
              800: "#581a0d",
              900: "#2b0d07",
              DEFAULT: "#d4462a",
              foreground: "#0a0a0f",
            },
            secondary: {
              50: "#f4f3f2",
              100: "#e4ddda",
              200: "#d3c5bd",
              300: "#c3a89a",
              400: "#b58b75",
              500: "#967a6b",
              600: "#796155",
              700: "#5c493f",
              800: "#3e312a",
              900: "#1f1916",
              DEFAULT: "#967a6b",
              foreground: "#0a0a0f",
            },
            content1: "#141419",
            content2: "#1c1c22",
            content3: "#24242b",
            content4: "#2c2c34",
            divider: "#2a2a33",
            focus: "#d4462a",
            default: {
              50: "#f4f3f2",
              100: "#e4ddda",
              200: "#d3c5bd",
              300: "#c3a89a",
              400: "#b58b75",
              500: "#967a6b",
              600: "#796155",
              700: "#5c493f",
              800: "#3e312a",
              900: "#1f1916",
            },
          },
        },
      },
    }),
  ],
};
export default config;
