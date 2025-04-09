import type { AstroI18nextConfig } from "astro-i18next";

/** @type {import('astro-i18next').AstroI18nextConfig} */
const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "vi"],
  load: ['server', 'client'],
  routes: {
    en: {},
    vi: {}
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },

  // Make sure it can find your translation files
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: true,
  },
};

export default config;