<script setup lang="ts">
import { store } from "@/store";
import { BIconBagPlus } from "bootstrap-icons-vue";
import ThePagination from "./ThePagination.vue";
import { onMounted, watch } from "vue";

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

function addToCart() {
  console.log("add to cart");
  // TODO
}
</script>

<template>
  <div class="products">
    <article
      class="product"
      v-for="product in store.products"
      :key="product.id"
    >
      <img :src="product.thumbnail" :alt="product.title + ' thumbnail'" />
      <p class="title">{{ product.title }}</p>
      <p class="price">${{ product.price }}</p>
      <button @click="addToCart">
        <BIconBagPlus />
      </button>
    </article>
  </div>
  <ThePagination />
</template>

<style lang="scss">
.products {
  --addBtnSize: 2.8rem;

  gap: 1rem;
  row-gap: calc(1rem + var(--addBtnSize) / 2);
  padding-block: 1rem;
  padding-inline: 0.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));

  .product {
    background-color: var(--color2);
    outline: 2px solid var(--color4);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-bottom: calc(1rem + var(--addBtnSize) / 3);
    cursor: pointer;
    border-radius: var(--border-radius);
    aspect-ratio: 1/1;
    transition: scale 0.2s;
    position: relative;

    &:hover {
      outline: 2px solid var(--color3);
    }

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius) var(--border-radius) 0 0;
    }

    .title {
      font-size: 1.2rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-inline: 0.6rem;
    }

    .price {
      font-size: 1.4rem;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-inline: 0.6rem;
      font-weight: bold;
    }

    button {
      display: grid;
      place-items: center;
      border-radius: 999px;
      position: absolute;
      aspect-ratio: 1;
      font-size: calc(var(--addBtnSize) / 2);
      width: var(--addBtnSize);
      bottom: -1.4rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-color: var(--color3);
      color: var(--color2);

      &:hover {
        scale: 1.1;
      }
    }
  }
}

@media (min-width: 769px) {
  .products {
    padding-block: 2rem;
    padding-inline: 1rem;
  }
}

@media (min-width: 1025px) {
  .products {
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
}
</style>
