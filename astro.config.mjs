// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import {vitePlugin} from "@udixio/theme";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compressor from "astro-compressor";
import vercel from '@astrojs/vercel';
import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [
    lottie(),
    react(),
    robotsTxt(),
    compressor(),
    (await import("@playform/compress")).default(),
    sitemap(),
  ],
  output: "static",
  site: "https://temp.fr/",
  compressHTML: true,
  experimental: {},
  vite: {
    plugins: [tailwindcss(), vitePlugin()],
    build: {
      rollupOptions: {
        external: ["pages/send-message.ts", "validator", "nodemailer", "xss"]
      }
    },
    ssr: {
      noExternal: ["@udixio/theme", "astro-obfuscate", "react-google-recaptcha-v3"]
    }
  },
  adapter: vercel()
});