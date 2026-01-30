// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
  
  // Explicitly configure favicon to prevent Astro from looking for favicon.svg
  build: {
    assets: 'assets'
  }
});