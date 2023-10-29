import Vue from "vue";
import BeastyFansByHtml from "./screens/BeastyFansByHtml.vue";
Vue.config.productionTip = false;

new Vue({
  render: h => h(BeastyFansByHtml)
}).$mount("#app");