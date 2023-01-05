<script setup lang="ts">
import { store } from "@/store";
import ProductList from "@/components/ProductList.vue";
import ThePagination from "@/components/ThePagination.vue";
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchData } from "@/misc";

const route = useRoute();
const router = useRouter();

const pageItemLimit = 12;

function syncPageToRoute(newParams: any) {
  const newPage = Array.isArray(newParams.page)
    ? parseInt(newParams.page[0])
    : parseInt(newParams.page) || 1;

  store.setPage(newPage);
}

async function fetchProducts(url: string) {
  store.setProducts([]);

  const data = await fetchData(url);
  store.setProducts(data.products);
  store.setTotalItems(data.total);
}

function handleFetching() {
  if (route.params.category) {
    const url = `https://dummyjson.com/products/category/${
      route.params.category
    }?limit=${pageItemLimit}&skip=${
      (store.page - 1) * pageItemLimit
    }&select=category,id,price,thumbnail,title`;

    fetchProducts(url);
  } else if (route.params.query) {
    const url = `https://dummyjson.com/products/search?q=${route.params.query}&select=category,id,price,thumbnail,title`;

    fetchProducts(url);
  } else {
    const url = `https://dummyjson.com/products?limit=${pageItemLimit}&skip=${
      (store.page - 1) * pageItemLimit
    }&select=category,id,price,thumbnail,title`;

    fetchProducts(url);
  }
}

onMounted(() => {
  handleFetching();
});

syncPageToRoute(route.params);
watch(() => route.params, syncPageToRoute);
watch(
  () => store.page,
  () => {
    handleFetching();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
);
</script>

<template>
  <main>
    <div class="noResults" v-if="store.totalItems === 0">
      <h2>No results</h2>
      <router-link @click.prevent="router.back" to="/">Go Back</router-link>
    </div>
    <ProductList />
    <ThePagination />
  </main>
</template>

<style scoped lang="scss">
main {
  .noResults {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    a {
      border: 2px solid var(--color4);
      border-radius: 999px;
      padding: 0.2rem 1rem;
      width: fit-content;

      &:hover {
        background-color: var(--color4);
      }
    }
  }
}
</style>
