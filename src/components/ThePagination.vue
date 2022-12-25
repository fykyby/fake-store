<script setup lang="ts">
import {
  BIconSkipBackwardFill,
  BIconSkipForwardFill,
} from "bootstrap-icons-vue";

defineProps({
  page: {
    default: 1,
    type: Number,
  },
  totalItems: {
    default: 0,
    type: Number,
  },
});

const emit = defineEmits(["changePage"]);
</script>

<template>
  <div class="pagination" v-if="totalItems > 10">
    <button
      class="first"
      :disabled="page - 1 <= 0"
      @click="emit('changePage', 1)"
    >
      <BIconSkipBackwardFill />
    </button>

    <button
      class="prev"
      :disabled="page - 1 <= 0"
      @click="emit('changePage', page - 1)"
    >
      {{ page - 1 }}
    </button>

    <button class="current">{{ page }}</button>

    <button
      class="next"
      :disabled="page * 10 + 10 > totalItems"
      @click="emit('changePage', page + 1)"
    >
      {{ page + 1 }}
    </button>

    <button
      class="last"
      :disabled="page * 10 + 10 > totalItems"
      @click="emit('changePage', Math.floor(totalItems / 10))"
    >
      <BIconSkipForwardFill />
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0.6rem;
  gap: 0.6rem;
  width: fit-content;
  margin: 0 auto;

  button {
    width: 2.6rem;
    aspect-ratio: 1;
    background: none;
    font-size: 1.3rem;
    color: var(--color1);
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color4);
    }

    &:disabled {
      cursor: default;
      color: var(--color5);

      &:hover {
        background: none;
      }
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
    background-color: var(--color4);
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
</style>
