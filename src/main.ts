import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import vueClickOutsideElement from "vue-click-outside-element";

const app = createApp(App);
app.use(router);
app.use(vueClickOutsideElement);
app.mount("#app");
