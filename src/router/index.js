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
      path: "/login",
      name: "LogIn",
      component: () => import("@/views/LogIn")
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("@/views/SignUp")
    },
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  
    next();
    
});

export default router;
