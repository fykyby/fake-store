<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import type { Product } from "./types";
import TheHeader from "./components/TheHeader.vue";

const products: Ref<Array<Product>> = ref([]);
const page: Ref<number> = ref(1);

async function fetchProducts() {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${page.value * 10}&skip=${
      (page.value - 1) * 10
    }&select=category,id,price,thumbnail,title`
  );
  const data = await response.json();
  products.value = data.products;
  console.log(data.products);
}

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <TheHeader />
  <router-view :products="products" />
</template>
