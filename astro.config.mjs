import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap"
import vercel from '@astrojs/vercel';
import lottie from "astro-integration-lottie";

export default defineConfig({
  integrations: [
    sitemap(),
    lottie()
  ],
  vite: {
    plugins: [
      tailwindcss(),
      viteCompression({ algorithm: 'brotliCompress' }),
      visualizer({
        open: true,
        brotliSize: true,
        filename: 'dist/stats.html'
      })
    ],
    build: {
      minify: 'esbuild',
      cssMinify: true,
    },
  },
  adapter: vercel({
    isr: true,
    maxDuration: 60
  })
});