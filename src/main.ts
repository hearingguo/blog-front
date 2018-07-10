import Vue from "vue"
import App from "./layout/App.vue"
import router from "@/router/router"
import store from "@/store/store"

import '@/assets/css/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
