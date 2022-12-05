import type { App } from "vue";
import * as components from "./packages/main";
import { forEach } from "lodash-es";

export const createCsssUI = () => {
  return (app: App) => {
    forEach(components, (component) => {
      app.component(component.name, component);
    });
  };
};
