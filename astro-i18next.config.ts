import type { AstroI18nextConfig } from "astro-i18next";

/** @type {import('astro-i18next').AstroI18nextConfig} */
const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "vi"],
  routes: {
    en: {},
    vi: {}
  },

  // Make sure it can find your translation files
  i18nextServer: {
    debug: false,
  }
};

export default config;