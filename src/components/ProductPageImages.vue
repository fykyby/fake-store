<script setup lang="ts">
import { ref, onMounted } from "vue";

const selectedImg = ref();

const props = defineProps({
  product: Object,
});

onMounted(() => {
  if (!props.product) return;
  selectedImg.value = props.product.images[0];
});
</script>

<template>
  <div class="images" v-if="product">
    <div class="mainImg">
      <img :src="selectedImg" alt="Item photo" />
    </div>
    <div class="imgList">
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
</template>

<style scoped lang="scss">
.images {
  // overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  border: 2px solid var(--color4);
  border-radius: var(--border-radius);

  .mainImg {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid var(--color4);

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      border-radius: inherit;
      height: 400px;
    }
  }

  .imgList {
    display: flex;
    gap: 0.4rem;
    flex-shrink: 0;
    justify-content: center;
    flex-wrap: wrap;

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

@media (min-width: 769px) {
  .images {
    max-width: none;
    gap: 1.8rem;
  }
}
</style>
