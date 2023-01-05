<script setup lang="ts">
import { store } from "@/store";
import {
  BIconSkipBackwardFill,
  BIconSkipForwardFill,
} from "bootstrap-icons-vue";

const pageItemLimit = 12;
</script>

<template>
  <div
    class="pagination"
    v-if="store.totalItems > pageItemLimit && store.products.length > 0"
  >
    <router-link
      class="first"
      :class="{ disabled: store.page - 1 <= 0 }"
      to="/products"
    >
      <BIconSkipBackwardFill />
    </router-link>

    <router-link
      v-if="store.page - 1 !== 1"
      class="prev"
      :class="{ disabled: store.page - 1 <= 0 }"
      :to="`/products/${store.page - 1}`"
    >
      {{ store.page - 1 }}
    </router-link>
    <router-link
      v-else
      class="prev"
      :class="{ disabled: store.page - 1 <= 0 }"
      to="/products"
    >
      {{ store.page - 1 }}
    </router-link>

    <router-link class="current" :to="`/products/${store.page}`">{{
      store.page
    }}</router-link>

    <router-link
      class="next"
      :class="{
        disabled: store.page * pageItemLimit + pageItemLimit > store.totalItems,
      }"
      :to="`/products/${store.page + 1}`"
    >
      {{ store.page + 1 }}
    </router-link>

    <router-link
      class="last"
      :class="{
        disabled: store.page * pageItemLimit + pageItemLimit > store.totalItems,
      }"
      :to="`/products/${Math.floor(store.totalItems / pageItemLimit)}`"
    >
      <BIconSkipForwardFill />
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0.6rem;
  padding-bottom: 1.6rem;
  gap: 0.6rem;
  width: fit-content;
  margin: 0 auto;

  a {
    width: 2.6rem;
    aspect-ratio: 1;
    background: none;
    font-size: 1.3rem;
    color: var(--color1);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.disabled {
      cursor: default;
      color: var(--color5);
      pointer-events: none;
    }
  }

  .first {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .prev {
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .current {
    grid-column-start: 3;
    grid-column-end: 4;
    outline: 2px solid var(--color4);
    font-size: 1.6rem;
  }

  .next {
    grid-column-start: 4;
    grid-column-end: 5;
  }

  .last {
    grid-column-start: 5;
    grid-column-end: 6;
  }
}

@media (hover: hover) and (pointer: fine) {
  .pagination {
    a {
      &:hover {
        background-color: var(--color4);
      }

      &.disabled {
        &:hover {
          background: none;
        }
      }
    }
  }
}
</style>
