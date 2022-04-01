import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://travis-vandame.github.io/travis-vandame/",
  plugins: [vue({
    reactivityTransform: true
  })],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
