import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/products/:page?",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/product/:id",
      component: () => import("../views/ProductView.vue"),
    },
  ],
});

export default router;
