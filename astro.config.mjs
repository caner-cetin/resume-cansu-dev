import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Optional: If you want to apply Tailwind's base styles manually or through another method
      // applyBaseStyles: false,
    }),
  ],
  output: 'static', // For a static resume site
  // If deploying to a Node.js environment and need SSR capabilities later:
  // import node from "@astrojs/node";
  // adapter: node({ mode: 'standalone' }),
});
