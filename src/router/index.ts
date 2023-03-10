import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
      path: "/products/category/:category/:page?",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/search/:query/:page?",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/product/:id",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
});

export default router;
