import { reactive } from "vue";
import type { Product } from "./types";

export const store = reactive({
  page: 1,
  setPage(page: number) {
    this.page = page;
  },

  totalItems: 0,
  setTotalItems(itemCount: number) {
    this.totalItems = itemCount;
  },

  products: new Array(),
  setProducts(newProducts: Array<Product>) {
    this.products = [...newProducts];
  },

  cart: new Array(),
  setCart(newCart: Array<Product>) {
    this.cart = [...newCart];
  },
});
