import type { App } from "vue";
import CButton from './CButton';

CButton.install = (app: App) => {
  app.component(CButton.name, CButton);
};

export { CButton };
export default CButton;
export { useCsssButton } from "./composables/csssButton";