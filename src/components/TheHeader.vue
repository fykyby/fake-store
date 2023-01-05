<script setup lang="ts">
import { store } from "@/store";
import { BIconSearch, BIconBag } from "bootstrap-icons-vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import TheCart from "./TheCart.vue";

const router = useRouter();

const cartExpanded = ref(false);
const headerSticky = ref(true);
const searchQuery = ref("");

function search() {
  if (searchQuery.value === "" || searchQuery.value === " ") return;
  router.push(`/products/search/${searchQuery.value}`);
}

function onScroll() {
  headerSticky.value = window.scrollY !== 0;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header :class="{ sticky: headerSticky }">
    <router-link to="/">
      <h1>Fake-Store</h1>
    </router-link>
    <form @submit.prevent="search">
      <input v-model="searchQuery" type="search" placeholder="Search Product" />
      <button>
        <BIconSearch />
      </button>
    </form>
    <button
      class="cartBtn"
      :class="{ expanded: cartExpanded }"
      @click="cartExpanded = !cartExpanded"
    >
      <BIconBag />
      <p class="cartCount" v-if="store.cart.length > 0">
        {{ store.cart.length }}
      </p>
    </button>
    <TheCart v-if="cartExpanded" @hide="cartExpanded = false" />
  </header>
</template>

<style scoped lang="scss">
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  padding-inline: 0.6rem;
  width: 100%;
  height: 3.4rem;
  background-color: var(--color2);
  position: sticky;
  top: 0;
  z-index: 20;
  max-width: 1280px;
  border-bottom: 2px solid var(--color4);

  &.sticky {
    box-shadow: var(--shadow);
  }

  a:focus-visible {
    outline: 2px solid var(--color3);
  }

  h1 {
    user-select: none;
    white-space: nowrap;
    font-size: 1.6rem;
    text-align: left;
    color: var(--color3);
  }

  form {
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.9rem;
    height: 65%;
    flex-grow: 1;
    justify-content: flex-end;

    input {
      width: 100%;
      padding-left: 0.6rem;
      border-radius: 999px 0 0 999px;
      color: var(--color1);
      max-width: 20rem;

      &:focus-visible {
        outline: 2px solid var(--color3);
        z-index: 2;
      }
    }

    button {
      flex-shrink: 0;
      padding-inline: 0.6rem;
      display: grid;
      place-items: center;
      border-radius: 0 999px 999px 0;
      color: var(--color1);

      &:focus-visible {
        outline: 2px solid var(--color3);
      }

      &:hover {
        background-color: var(--color4);
      }
    }

    input,
    button {
      background-color: var(--color2);
      outline: 2px solid var(--color4);
    }
  }

  .cartBtn {
    font-size: 1.2rem;
    background: transparent;
    height: 65%;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: 999px;
    position: relative;

    &:focus-visible {
      outline: 2px solid var(--color3);
    }

    &:hover {
      background-color: var(--color4);
    }

    &.expanded {
      outline: 2px solid var(--color4);
    }

    .cartCount {
      position: absolute;
      font-size: 0.9rem;
      bottom: 0;
      right: 0;
      background-color: var(--color3);
      color: white;
      height: 1.2rem;
      aspect-ratio: 1;
      border-radius: 999px;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
  }
}

@media (min-width: 481px) {
  header {
    height: 3.8rem;

    h1 {
      font-size: 1.8rem;
    }

    form {
      font-size: 1rem;

      input {
        padding-left: 1rem;
      }

      button {
        padding-inline: 1rem;
      }
    }

    .cartBtn {
      font-size: 1.4rem;
    }
  }
}

@media (min-width: 769px) {
  header {
    height: 4.4rem;
    padding-inline: 1rem;

    h1 {
      font-size: 2rem;
    }

    form {
      font-size: 1.1rem;
    }

    .cartBtn {
      font-size: 1.6rem;
    }
  }
}
</style>
