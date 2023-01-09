import type { App } from "vue";
import CInput from './CInput';

CInput.install = (app: App) => {
  app.component(CInput.name, CInput);
};

export { CInput };
export default CInput;
export { useCsssInput } from "./composables/csssInput";