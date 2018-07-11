import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Index from "@/views/Index.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index",
      name: "index",
      component: Index
    }
  ]
});
