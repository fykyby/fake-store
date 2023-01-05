<script setup lang="ts">
import CategoryList from "@/components/CategoryList.vue";
import ProductList from "@/components/ProductList.vue";
import { fetchData } from "@/misc";
import { store } from "@/store";
import { onMounted } from "vue";

async function fetchProducts() {
  store.setProducts([]);
  const data = await fetchData(
    `https://dummyjson.com/products?limit=4&select=category,id,price,thumbnail,title`
  );
  store.setProducts(data.products);
}

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <main>
    <section class="categories">
      <div class="top">
        <div class="hidden"></div>
        <h1>Categories</h1>
        <button class="showAll">Show all</button>
      </div>
      <CategoryList />
    </section>
    <section class="products" v-if="store.products.length > 0">
      <div class="top">
        <div class="hidden"></div>
        <h1>Products</h1>
        <router-link class="showAll" to="/products">Show all</router-link>
      </div>
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
  display: flex;
  flex-direction: column;
  gap: 1rem;

  section {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 0.6rem;

      .hidden {
        display: none;
      }

      h1 {
        font-size: 1.8em;
      }

      .showAll {
        width: 6rem;
        padding-inline: 0.4rem;
        padding-block: 0.1rem;
        border: 2px solid var(--color4);
        border-radius: 999px;
        font-size: 1em;
        z-index: 2;
        background-color: var(--color2);

        &:hover {
          background-color: var(--color4);
        }
      }
    }
  }
}

@media (min-width: 769px) {
  main {
    font-size: 1.2rem;
    padding-block: 2rem;
    gap: 2rem;

    section {
      .top {
        padding-inline: 1rem;

        .hidden {
          width: 7rem;
          display: block;
          visibility: hidden;
        }

        .showAll {
          width: 7rem;
          padding-inline: 1rem;
          padding-block: 0.3rem;
        }
      }
    }
  }
}
</style>
