import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

export default <Config>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Qanelas Soft", "sans-serif"],
        heading: ["Qanelas Soft", "sans-serif"],
        secondary: ["Mrs White", "cursive"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "brand-red": "#FF325F",
        "brand-primary-text": "#ffffff",
        "brand-secondary-text": "#BBB8B8",
        "brand-bg": "#070707",
      },
      container: {
        screens: {
          sm: "1175px",
          md: "1175px",
          lg: "1175px",
          xl: "1175px",
          "2xl": "1175px",
        },
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
        center: true,
      },
    },
  },
  plugins: [
    typography,
    plugin(({ addBase, theme }) => {
      addBase({
        "a:not([type=link])": {
          transition: "color 200ms, text-decoration 200ms",
        },
        "a:not([type=link]):hover": {
          color: theme("colors.brand-red"),
        },
      });
    }),
  ],
};
