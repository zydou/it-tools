// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import UnoCSS from 'unocss/astro'
import { locales, defaultLocale } from './src/i18n/languages';
import pagefind from "astro-pagefind";


// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(), 
    UnoCSS({ injectReset: true }),
    pagefind(),
  ],
  i18n: {
    locales,
    defaultLocale,
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
  },
  build: {
    
  },
});