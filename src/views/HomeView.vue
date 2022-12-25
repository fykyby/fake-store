<script setup lang="ts">
import type { Product } from "@/types";
import ProductItems from "../components/ProductItems.vue";

defineProps({
  products: Array<Product>,
});
</script>

<template>
  <main>
    <ProductItems :products="products" />
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
