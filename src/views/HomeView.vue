<script setup lang="ts">
import ProductList from "@/components/ProductList.vue";
import { fetchData } from "@/misc";
import { store } from "@/store";
import { onMounted } from "vue";

async function fetchProducts() {
  const data = await fetchData(
    `https://dummyjson.com/products?limit=4&select=category,id,price,thumbnail,title`
  );
  store.setProducts(data.products);
}

onMounted(fetchProducts);
</script>

<template>
  <main>
    <section class="products">
      <h1>Products</h1>
      <router-link to="/products">Show all</router-link>
      <ProductList />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  padding-block: 1rem;

  .products {
    position: relative;
    h1 {
      padding-inline: 0.6rem;
      font-size: 1.8em;
    }

    a {
      position: absolute;
      right: 0.6rem;
      top: -0.2rem;
      padding-inline: 0.6rem;
      padding-block: 0.2rem;
      border: 2px solid var(--color4);
      border-radius: 999px;
      font-size: 1.2em;
      z-index: 2;

      &:hover {
        background-color: var(--color4);
      }
    }
  }
}

@media (min-width: 769px) {
  main {
    font-size: 1.2rem;
    padding-block: 2rem;
    .products {
      h1 {
        padding-inline: 1rem;
      }

      a {
        right: 1rem;
        padding-inline: 1rem;
      }
    }
  }
}
</style>
