<script setup lang="ts">
import type { Product } from "@/types";

defineProps({
  products: Array<Product>,
});
</script>

<template>
  <div class="products">
    <article class="product" v-for="product in products" :key="product.id">
      <img :src="product.thumbnail" :alt="product.title + ' thumbnail'" />
      <p class="title">{{ product.title }}</p>
      <p class="price">${{ product.price }}</p>
    </article>
  </div>
</template>

<style lang="scss">
.products {
  gap: 1rem;
  padding-block: 1rem;
  padding-inline: 0.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));

  .product {
    background-color: var(--color4);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-bottom: 0.8rem;
    cursor: pointer;
    border-radius: var(--border-radius);
    aspect-ratio: 1/1;
    transition: scale 0.2s;

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
