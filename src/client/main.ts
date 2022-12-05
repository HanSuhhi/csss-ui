import "./config.css";
import "@hansuhhi-don/csss/dist/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createCsssUI } from "..";

createApp(App).use(createCsssUI()).mount("#app");
