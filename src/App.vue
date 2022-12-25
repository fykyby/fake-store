<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { Ref } from "vue";
import type { Product } from "./types";
import TheHeader from "./components/TheHeader.vue";
import ThePagination from "./components/ThePagination.vue";

const products: Ref<Array<Product>> = ref([]);
const page: Ref<number> = ref(1);
const totalItems: Ref<number> = ref(0);

async function fetchProducts() {
  const response = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${
      (page.value - 1) * 10
    }&select=category,id,price,thumbnail,title`
  );
  const data = await response.json();
  products.value = data.products;
  totalItems.value = data.total;
}

onMounted(() => {
  fetchProducts();
});

watch(page, () => {
  fetchProducts();
  window.scrollTo(0, 0);
});
</script>

<template>
  <TheHeader />
  <router-view :products="products" />
  <ThePagination
    :page="page"
    :totalItems="totalItems"
    @changePage="(newPage) => (page = newPage)"
  />
</template>
