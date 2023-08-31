import { defineConfig, sharpImageService } from 'astro/config';

import react from "@astrojs/react";
import featherIcons from "@astrojs/react";
const devMode = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), featherIcons()],
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
  }
});