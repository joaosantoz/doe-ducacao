import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "@/assets/main.css";

import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueSweetalert2);
