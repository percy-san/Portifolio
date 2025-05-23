// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite:{
    plugins: [tailwind()],
  },
  integrations: [svelte()]
});