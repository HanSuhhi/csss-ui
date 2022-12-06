import { resolve } from "path";
import { defineConfig } from "vite";
import VitePluginVitepressDemo from "vite-plugin-vitepress-demo";

export default defineConfig({
  plugins: [
    VitePluginVitepressDemo({
      glob: "./**/*.vue",
    }),
  ],
  resolve: {
    alias: {
      "csss-ui/": `${resolve(__dirname, "../dist")}/`,
    },
  },
});
