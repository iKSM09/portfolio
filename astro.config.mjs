import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://iksm09.github.io",
  base: "/portfolio",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [tailwind()],
});
