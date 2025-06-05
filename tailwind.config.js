// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fixedsys': ["Fixedsys Excelsior", "sans-serif"],
      },
      colors: {
        'parchment': {
          light: '#e6ceb7', // Lightest for background maybe
          DEFAULT: '#cdba94', // Main parchment tone
          dark: '#bda583', // Maybe for hover/accents
        },
        'ink': { // Define shades for text/borders
          darkest: '#292418', // Main text
          dark: '#524839', // Slightly lighter ink / borders
          DEFAULT: '#73654a', // Medium ink / secondary text
          light: '#8b7d62', // Lighter accents
        },
        'accent': '#a48d6a', // An accent color from the palette
      },
    },
  },
  plugins: [],
}