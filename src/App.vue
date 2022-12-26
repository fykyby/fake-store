<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import TheHeader from "./components/TheHeader.vue";
import { store } from "./store";

// const products: Ref<Array<Product>> = ref([]);
const pageItemLimit = 12;

async function fetchProducts() {
  const response = await fetch(
    `https://dummyjson.com/products?limit=${pageItemLimit}&skip=${
      (store.page - 1) * pageItemLimit
    }&select=category,id,price,thumbnail,title`
  );
  const data = await response.json();
  store.setProducts(data.products);
  store.setTotalItems(data.total);
}

onMounted(() => {
  fetchProducts();
});

watch(
  () => store.page,
  () => {
    fetchProducts();
    window.scrollTo(0, 0);
  }
);
</script>

<template>
  <TheHeader />
  <router-view />
</template>
