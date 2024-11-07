// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const isDev = import.meta.env.DEV;

export default defineConfig({
  site: isDev ? 'http://localhost:4321' : 'https://zloom.org',
  integrations: [
    tailwind(), 
    icon(), 
    mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2024-10-14'),
  })]
});