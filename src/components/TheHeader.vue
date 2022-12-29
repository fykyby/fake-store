<script setup lang="ts">
import { BIconSearch, BIconBag } from "bootstrap-icons-vue";

function search() {
  console.log("search");
  // TODO
}
</script>

<template>
  <header>
    <router-link to="/">
      <h1>Fake-Store</h1>
    </router-link>
    <form @submit.prevent="search">
      <input type="search" placeholder="Search Product" />
      <button>
        <BIconSearch />
      </button>
    </form>
    <button class="cartBtn">
      <BIconBag />
    </button>
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
  min-height: 3.4rem;
  height: 1px;
  background-color: var(--color2);
  position: sticky;
  top: 0;
  z-index: 20;
  max-width: 1280px;
  border-bottom: 2px solid var(--color4);

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

    &:focus-within {
      input,
      button {
        outline: 2px solid var(--color3);
        z-index: 2;
      }
    }

    input {
      width: 100%;
      padding-left: 0.6rem;
      border-radius: 999px 0 0 999px;

      color: var(--color1);
      max-width: 20rem;
    }

    button {
      flex-shrink: 0;
      padding-inline: 0.6rem;
      display: grid;
      place-items: center;
      border-radius: 0 999px 999px 0;
      color: var(--color1);
    }

    input,
    button {
      background-color: var(--color2);
      outline: 1px solid var(--color4);
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

    &:hover {
      background-color: var(--color4);
    }
  }
}

@media (min-width: 481px) {
  header {
    min-height: 3.8rem;

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
    min-height: 4.4rem;
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
