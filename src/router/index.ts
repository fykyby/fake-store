import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import ProductsView from "../views/ProductsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/products",
      component: ProductsView,
    },
    {
      path: "/products/:page",
      component: ProductsView,
    },
    {
      path: "/product/:id",
      component: ProductView,
    },
  ],
});

// component: () => import("../views/AboutView.vue"),
export default router;
