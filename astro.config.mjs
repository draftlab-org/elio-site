// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.bunny(),
        name: "Petrona",
        cssVariable: "--font-petrona",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        provider: fontProviders.bunny(),
        name: "Outfit",
        cssVariable: "--font-outfit",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});