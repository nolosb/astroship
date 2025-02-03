/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        headings: ["Switzer", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('../src/assets/hero.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase }) {
      addBase({
        html: {
          scrollBehavior: "smooth",
          fontFamily: "Rubik, sans-serif",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "Switzer, sans-serif",
          fontWeight: "600",
        },
      });
    },
  ],
};
