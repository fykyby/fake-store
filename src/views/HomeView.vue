<script setup lang="ts">
import type { Product } from "@/types";
import ProductItems from "../components/ProductItems.vue";

const props = defineProps({
  products: Array<Product>,
});
</script>

<template>
  <ProductItems :products="props.products" />
</template>

<style scoped lang="scss"></style>
