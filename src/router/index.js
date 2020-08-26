import Vue from "vue";
import VueRouter from "vue-router";
//import store from "@/store/index.js";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home")
    },
    {
      path: "/research",
      name: "Research",
      component: () => import("@/views/Research")
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("@/views/Blog")
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("@/views/Projects")
    },
    {
      path: "/project",
      name: "Project",
      component: () => import("@/components/Home/IndProjectPage")
    },
    {
      path: "/interests",
      name: "Interest",
      component: () => import("@/views/Interest")
    },
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  
    next();
    
});

export default router;
