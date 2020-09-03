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
    {
      path: "/dashboard", 
      name: "dashboard",
      component: () => import("@/views/Main")
    },
    {
      path: "/resetpassword", 
      name: "ResetPassword",
      component: () => import("@/views/ResetPassword")
    },
    {
      path: "/profile", 
      name: "Profile",
      component: () => import("@/views/Profile")
    },
    {
      path: "/myuploads", 
      name: "Uploads",
      component: () => import("@/views/Uploads")
    },
    {
      path: "/myproducts", 
      name: "Products",
      component: () => import("@/views/Cloned")
    },
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  
    next();
    
});

export default router;
