<script setup lang="ts">
import type { Product } from "@/types";
import ProductItems from "../components/ProductItems.vue";

defineProps({
  products: Array<Product>,
});
</script>

<template>
  <ProductItems :products="products" />
</template>

<style scoped lang="scss"></style>
