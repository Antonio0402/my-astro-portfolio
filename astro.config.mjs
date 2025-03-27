import { defineConfig, sharpImageService } from 'astro/config';

import react from "@astrojs/react";
import featherIcons from "@astrojs/react";
const devMode = process.env.NODE_ENV === 'development';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), featherIcons(), astroI18next()],
  experimental: {
    assets: true
  },
  image: {
    domains: ["skillicons.dev", "storage.googleapis.com"],
    service: sharpImageService(),
  },
  vite: {
    legacy: { buildSsrCjsExternalHeuristics: !devMode },
    ssr: { noExternal: ['styled-components'] },
  },
});