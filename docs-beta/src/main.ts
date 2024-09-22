import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/style/tailwind.css";
import "./registerServiceWorker";
import router from "./router";

const pinia = createPinia();
const app = createApp(App); //creating vue app instance

app.use(pinia);
app.use(router);
app.mount("#app");
