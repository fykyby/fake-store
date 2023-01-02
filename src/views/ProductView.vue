<script setup lang="ts">
import { store } from "@/store";
import type { Product } from "@/types";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref();
const selectedImg = ref();

async function fetchProduct() {
  const response = await fetch(
    `https://dummyjson.com/products/${route.params.id}`
  );
  const data = await response.json();

  if (data.message) {
    // ERROR
  } else {
    selectedImg.value = data.images[0];
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
    <div class="images">
      <div class="mainImg">
        <img :src="selectedImg" alt="Item photo" />
      </div>
      <div class="all">
        <button
          class="imgBtn"
          @click="selectedImg = image"
          :class="{ selected: selectedImg === image }"
          v-for="image in product.images"
          :key="image"
        >
          <img :src="image" alt="Item photo" />
        </button>
      </div>
    </div>
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

  .images,
  .info {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    // outline: 2px solid red;
    padding-block: 1rem;
    padding-inline: 1.4rem;
  }

  .images {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 600px;
    border: 2px solid var(--color4);
    border-radius: var(--border-radius);

    .mainImg {
      flex-grow: 1;
      // border-radius: var(--border-radius);
      // border: 2px solid var(--color4);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      aspect-ratio: 1;
      padding: 1rem;
      border-bottom: 2px solid var(--color4);

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        border-radius: inherit;
        height: 400px;
      }
    }

    .all {
      display: flex;
      gap: 0.4rem;
      overflow-x: auto;
      flex-shrink: 0;

      .imgBtn {
        width: 6rem;
        height: 6rem;
        flex-shrink: 0;
        border-radius: var(--border-radius);
        overflow: hidden;
        border: 2px solid var(--color4);

        &:focus-visible {
          outline: none;
          border: 2px solid var(--color3);
        }

        &.selected {
          border: 2px solid var(--color3);
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
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

    .images,
    .info {
      height: 70%;
      padding-block: 1.8rem;
    }

    .images {
      max-width: none;
      gap: 1.8rem;

      .mainImg {
        img {
          height: 500px;
        }
      }
    }
  }
}
</style>
