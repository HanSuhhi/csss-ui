import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { AntdTheme } from "vite-plugin-vitepress-demo/theme";
import "csss-ui/style.css";
// @ts-ignore
import { createCsssUI } from "csss-ui/csss-ui.es.js";
import { forEach } from "lodash-es";
// @ts-ignore
const demos = import.meta.glob("@/demos/**/demo.vue", {
  eager: true,
});

const defineGlobDemoComponentName = (path: string) => {
  const name = path.split("/")[2];
  console.log("name: ", name);
  return `${name}-demo`;
};

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Demo", AntdTheme);
    app.use(createCsssUI());
    forEach(demos, (component, path) => app.component(defineGlobDemoComponentName(path), component.default));
  },
} as Theme;
