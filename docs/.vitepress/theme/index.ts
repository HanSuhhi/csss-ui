import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme";
import "csss-ui/style.css";
// @ts-ignore
import { createCsssUI } from "csss-ui/csss-ui.es.js";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Demo", AntdTheme);
    app.use(createCsssUI());
  },
} as Theme;
