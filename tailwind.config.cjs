/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "skills-fluid": "repeat(auto-fit, minmax(7rem, 1fr))",
      },
    },
  },
  plugins: [],
};
