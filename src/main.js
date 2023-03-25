import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";
import "./style.css";
/* 路由 */
import router from "./router";

createApp(App).use(router).mount("#app");
