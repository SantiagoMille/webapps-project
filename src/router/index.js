import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";
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
      component: () => import("@/views/LogIn"),
      meta: {
        notRequiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("@/views/SignUp"),
      meta: {
        notRequiresAuth: true
      }
    },
    {
      path: "/dashboard", 
      name: "dashboard",
      component: () => import("@/views/Main"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/resetpassword", 
      name: "ResetPassword",
      component: () => import("@/views/ResetPassword")
    },
    {
      path: "/profile", 
      name: "Profile",
      component: () => import("@/views/Profile"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/myuploads", 
      name: "Uploads",
      component: () => import("@/views/Uploads"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/myproducts", 
      name: "Products",
      component: () => import("@/views/Cloned"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/search", 
      name: "Search",
      component: () => import("@/views/Search"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/newproject",
      name: "AddProject",
      component: () => import("@/views/NewProject")
    },
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {

  let u = store.getters.getUser;
  
  if(to.name=="dashboard"&&from.name=='LogIn'){
    location.reload();
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (u&&!('token' in u.user)) {
      next({ name: 'LogIn' })
    } else {
      next(); 
    }
  }
  else if (to.matched.some(record => record.meta.notRequiresAuth)) {
    if (u&&'token' in u.user) {
      next({ name: 'dashboard' })
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router;
