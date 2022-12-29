<script setup lang="ts">
import { store } from "@/store";
import { BIconTrash3 } from "bootstrap-icons-vue";
import { ref, watch } from "vue";

const finalPrice = ref(0);

function deleteFromCart(id: number) {
  const newCart = store.cart;
  const indexToDelete = newCart.findIndex((item) => item.id === id);
  newCart.splice(indexToDelete, 1);
  store.setCart(newCart);
}

watch(
  () => store.cart,
  (newCart) => {
    if (newCart.length < 1) {
      finalPrice.value = 0;
      return;
    }

    finalPrice.value = newCart.reduce((prev, curr) => prev + curr.price, 0);
  }
);
</script>

<template>
  <div class="cart">
    <div class="items">
      <article class="item" v-for="item in store.cart" :key="item.id">
        <img :src="item.thumbnail" alt="Item thumbnail" />
        <p class="title">{{ item.title }}</p>
        <p class="price">${{ item.price }}</p>
        <button class="deleteBtn" @click="deleteFromCart(item.id)">
          <BIconTrash3 />
        </button>
      </article>
    </div>
    <div class="details">
      <p class="price">${{ finalPrice }}</p>
      <button :disabled="store.cart.length < 1">Checkout</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  position: absolute;
  background-color: var(--color2);
  border-radius: var(--border-radius);
  outline: 2px solid var(--color4);
  width: calc(100% - 1.2rem);
  max-width: 36rem;
  right: 0rem;
  top: 3.4rem;
  z-index: inherit;
  padding-inline: 0.6rem;
  font-size: 1rem;
  margin-top: 0.6rem;
  margin-right: 0.6rem;

  .items {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-block: 0.6rem;
    max-height: 32rem;
    overflow-y: auto;

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.6rem;
      padding-right: 0.6rem;
      border: 1px solid var(--color4);
      border-radius: var(--border-radius);

      img {
        aspect-ratio: 1;
        width: 3.8rem;
        margin: 0.2rem;
        object-fit: cover;
        border-radius: var(--border-radius);
      }

      .title {
        width: 100%;
        text-align: left;
        font-size: 1.1em;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }

      .price {
        width: fit-content;
        text-align: right;
        font-size: 1.2em;
        font-weight: bold;
      }

      .deleteBtn {
        flex-shrink: 0;
        width: 2rem;
        aspect-ratio: 1;
        font-size: 1.2rem;
        display: grid;
        place-items: center;
        border-radius: 999px;
        background: var(--color2);

        &:focus-visible {
          outline: 2px solid var(--color3);
        }

        &:hover {
          background-color: var(--color4);
        }
      }
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.4rem;
    border-top: 2px solid var(--color4);

    .price {
      font-weight: bold;
      font-size: 1.5em;
    }

    button {
      font-weight: bold;
      font-size: 1.3em;
      height: 65%;
      padding: 0 1rem;
      border-radius: 999px;
      background-color: var(--color3);
      color: var(--color2);

      &:hover,
      &:focus-visible {
        background-color: var(--color6);
        outline: none;
      }

      &:disabled {
        cursor: default;
        background-color: var(--color4);
        color: var(--color5);
      }
    }
  }
}

@media (min-width: 481px) {
  .cart {
    top: 3.8rem;
    font-size: 1.1rem;

    .items {
      .item {
        .deleteBtn {
          font-size: 1.4rem;
          width: 2.2rem;
        }
      }
    }

    .details {
      height: 3.8rem;
    }
  }
}

@media (min-width: 769px) {
  .cart {
    top: 4.4rem;
    padding-inline: 1rem;
    font-size: 1.2rem;

    .items {
      padding-block: 1rem;
    }
  }
}
</style>
