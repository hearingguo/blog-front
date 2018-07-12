import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"
import Index from "@/views/Index.vue"
import About from "@/views/About.vue"
import Sitemap from "@/views/Sitemap.vue"

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
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/sitemap",
      name: "sitemap",
      component: Sitemap
    }
  ]
});
