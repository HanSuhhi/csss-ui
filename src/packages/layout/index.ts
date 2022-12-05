import type { App } from "vue";
import Layout from "./CLayout";

Layout.install = (app: App) => {
  app.component(Layout.name, Layout);
};

export { Layout };
export default Layout;
