import "@hansuhhi-don/csss/dist/style.css";
import "@/packages/style/index";

import type { App } from "vue";
import * as components from "./packages/main";
import { forEach } from "lodash-es";

const createCsssUI = () => {
  return (app: App) => {
    forEach(components, (component) => {
      app.component(component.name, component);
    });
  };
};

export { createCsssUI };
export default createCsssUI;
export * from "./packages/main";





