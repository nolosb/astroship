/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "Roboto", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        hero: "url('../src/assets/hero.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")]
};
