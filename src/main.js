import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";
import "./style.css";
/* 路由 */
import router from "./router";
import VWave from "v-wave";

createApp(App).use(router).use(VWave).mount("#app");
