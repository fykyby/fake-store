<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref();

async function fetchProduct() {
  const response = await fetch(
    `https://dummyjson.com/products/${route.params.id}`
  );
  const data = await response.json();

  if (data.message) {
    // ERROR
  } else {
    product.value = data;
    console.log(data);
  }
}

onMounted(fetchProduct);
</script>

<template>
  <main>
    <div class="images">IMG</div>
    <div class="info">INFO</div>
  </main>
</template>

<style scoped lang="scss">
main {
  border: 1px solid red;
  flex-grow: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .images,
  .info {
    display: flex;
  }
}
</style>
