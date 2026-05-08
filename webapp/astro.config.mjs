// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://kaizin-digital.github.io',
  base: '/kaizin-systems-wesite',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()]
});