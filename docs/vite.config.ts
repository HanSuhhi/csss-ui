import { resolve } from "path";
import { defineConfig } from "vite";
import VitePluginVitepressDemo from "vite-plugin-vitepress-demo";
import { SearchPlugin } from "vitepress-plugin-search";

export default defineConfig({
  plugins: [
    VitePluginVitepressDemo({
      glob: "./**/*.vue",
    }),
    SearchPlugin(),
  ],
  resolve: {
    alias: {
      "csss-ui": resolve(__dirname, "../dist"),
      "@": resolve(__dirname, "./"),
    },
  },
});
