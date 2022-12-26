<script setup lang="ts">
import { store } from "@/store";
import { watch } from "vue";
import { useRoute } from "vue-router";
import ProductItems from "../components/ProductItems.vue";

const route = useRoute();

function syncPageToRoute(newParams: any) {
  const newPage = Array.isArray(newParams.page)
    ? parseInt(newParams.page[0])
    : parseInt(newParams.page) || 1;

  store.setPage(newPage);
}

syncPageToRoute(route.params);
watch(() => route.params, syncPageToRoute);
</script>

<template>
  <main>
    <ProductItems />
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
