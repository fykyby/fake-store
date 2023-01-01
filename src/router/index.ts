import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/page/:page",
      component: HomeView,
    },
    {
      path: "/products/:id",
      component: ProductView,
    },
  ],
});

// component: () => import("../views/AboutView.vue"),
export default router;
