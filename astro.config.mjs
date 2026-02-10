// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://christopher-vantis.ch',
  output: 'static',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
