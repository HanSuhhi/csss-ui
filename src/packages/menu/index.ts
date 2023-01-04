import type { App } from "vue";
import CMenu from './CMenu';

CMenu.install = (app: App) => {
  app.component(CMenu.name, CMenu);
};

export { CMenu };
export default CMenu;
export { useCsssMenu } from "./composables/csssMenu";