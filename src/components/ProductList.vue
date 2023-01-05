<script setup lang="ts">
import { store } from "@/store";
import { BIconBagPlus } from "bootstrap-icons-vue";
import type { Product } from "@/types";

function addToCart(product: Product) {
  store.setCart([...store.cart, product]);
}
</script>

<template>
  <div class="products">
    <article v-for="product in store.products" :key="product.id">
      <router-link class="product" :to="`/product/${product.id}`">
        <img :src="product.thumbnail" :alt="product.title + ' thumbnail'" />
        <p class="title">{{ product.title }}</p>
        <p class="price">${{ product.price }}</p>
      </router-link>
      <button class="addToCartBtn" @click.stop="addToCart(product)">
        <BIconBagPlus />
      </button>
    </article>
  </div>
</template>

<style scoped lang="scss">
.products {
  --addBtnSize: 2.8rem;

  gap: 1rem;
  row-gap: calc(1rem + var(--addBtnSize) / 2);
  padding-top: 1rem;
  padding-bottom: calc(1rem + var(--addBtnSize) / 2);
  padding-inline: 0.6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));

  article {
    position: relative;

    .product {
      background-color: var(--color2);
      outline: 2px solid var(--color4);
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding-bottom: calc(1rem + var(--addBtnSize) / 3);
      cursor: pointer;
      border-radius: var(--border-radius);
      aspect-ratio: 1;
      transition: scale 0.2s;
      position: relative;

      &:focus-visible {
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
    }
  }

  .addToCartBtn {
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

    &:focus-visible {
      scale: 1.1;
      outline: none;
      background-color: var(--color6);
    }
  }
}

@media (hover: hover) and (pointer: fine) {
  .products {
    article {
      .product {
        &:hover {
          outline: 2px solid var(--color3);
        }
      }
    }
  }

  .addToCartBtn {
    &:hover {
      scale: 1.1;
      background-color: var(--color6);
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
