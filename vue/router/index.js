import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";
const Opt = () => import("../views/Opt.vue");

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/opt",
    name: "opt",
    component: Opt,
  },
];

const router = createRouter({
  history: createWebHistory("/avtoklav-krestjanka-site/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
