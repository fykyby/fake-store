<script setup lang="ts">
import { store } from "@/store";
import ProductList from "@/components/ProductList.vue";
import ThePagination from "@/components/ThePagination.vue";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { fetchData } from "@/misc";

const route = useRoute();

const pageItemLimit = 12;

function syncPageToRoute(newParams: any) {
  const newPage = Array.isArray(newParams.page)
    ? parseInt(newParams.page[0])
    : parseInt(newParams.page) || 1;

  store.setPage(newPage);
}

async function fetchProducts() {
  store.setProducts([]);
  const url = route.params.category
    ? `https://dummyjson.com/products/category/${
        route.params.category
      }?limit=${pageItemLimit}&skip=${
        (store.page - 1) * pageItemLimit
      }&select=category,id,price,thumbnail,title`
    : `https://dummyjson.com/products?limit=${pageItemLimit}&skip=${
        (store.page - 1) * pageItemLimit
      }&select=category,id,price,thumbnail,title`;

  const data = await fetchData(url);
  store.setProducts(data.products);
  store.setTotalItems(data.total);
}

onMounted(() => {
  fetchProducts();
});

syncPageToRoute(route.params);
watch(() => route.params, syncPageToRoute);
watch(
  () => store.page,
  () => {
    fetchProducts();
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
    <ProductList />
    <ThePagination />
  </main>
</template>
