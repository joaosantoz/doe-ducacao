import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/locations",
    name: "locations",
    component: () => import("../views/Locations.vue"),
  },
  {
    path: "/admin/locations",
    name: "admlocations",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/admin",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
