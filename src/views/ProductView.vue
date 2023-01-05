<script setup lang="ts">
import ProductPageImages from "@/components/ProductPageImages.vue";
import { store } from "@/store";
import type { Product } from "@/types";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { fetchData } from "@/misc";

const route = useRoute();
const product = ref();

async function fetchProduct() {
  const data = await fetchData(
    `https://dummyjson.com/products/${route.params.id}`
  );

  if (data.message) {
    // ERROR
  } else {
    product.value = data;
  }
}

function addToCart(product: Product) {
  store.setCart([...store.cart, product]);
}

onMounted(fetchProduct);
</script>

<template>
  <main v-if="product">
    <ProductPageImages :product="product" />
    <div class="info">
      <p class="brand">{{ product.brand }}</p>
      <h2 class="title">{{ product.title }}</h2>
      <p class="description">{{ product.description }}</p>
      <p class="stock">{{ product.stock }} in stock</p>
      <p class="price">${{ product.price }}</p>
      <div class="buttons">
        <button>Buy Now</button>
        <button class="addToCartBtn" @click="addToCart(product)">
          Add to Cart
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  font-size: 1rem;
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  height: 100%;

  & > * {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-block: 1rem;
    padding-inline: 1.2rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1.4em;
    align-items: flex-start;
    max-width: 600px;
    border: 2px solid var(--color4);
    border-radius: var(--border-radius);

    .brand {
      font-weight: bold;
      font-size: 1.2em;
      margin-bottom: -0.6em;
    }

    .title {
      font-size: 2em;
      font-weight: bold;
      text-align: left;
      line-height: 1em;
    }

    .description {
      color: var(--color7);
      font-weight: bold;
      text-align: left;
    }

    .stock {
      font-weight: bold;
      font-size: 1.1em;
    }

    .price {
      font-size: 1.8em;
      font-weight: bold;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6em;

      & > button {
        background-color: var(--color3);
        height: 2em;
        color: white;
        font-size: 1.2em;
        padding-inline: 1rem;
        border-radius: 999px;

        &:hover {
          background: var(--color6);
        }
      }
    }
  }
}

@media (min-width: 769px) {
  main {
    flex-direction: row;
    font-size: 1.1rem;
    align-items: flex-start;

    & > * {
      padding-block: 1.8rem;
      width: 50%;
    }
  }
}
</style>
