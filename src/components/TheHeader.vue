<script setup lang="ts">
import { BIconSearch } from "bootstrap-icons-vue";

function search() {
  console.log("search");
  // TODO
}
</script>

<template>
  <header>
    <h1>Fake-Store</h1>
    <form @submit.prevent="search">
      <input type="search" />
      <button>
        <BIconSearch />
      </button>
    </form>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  min-height: 3rem;
  height: 1px;
  padding-inline: 0.4rem;
  box-shadow: var(--shadow);
  background-color: var(--color4);

  h1 {
    user-select: none;
    white-space: nowrap;
    font-size: 1.6rem;
    flex-grow: 1;
    text-align: left;
  }

  form {
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.9rem;
    height: 65%;

    input {
      width: 8rem;
      padding-inline: 0.4rem;
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      background-color: var(--color2);
      color: var(--color1);

      &:focus {
        outline: 1px solid var(--color3);
        z-index: 2;
      }
    }

    button {
      flex-shrink: 0;
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      background-color: var(--color2);
      color: var(--color1);
    }
  }
}
</style>
