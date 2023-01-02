<script setup lang="ts">
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
    console.log(data);
  }
}

onMounted(fetchProduct);
</script>

<template>
  <main>
    <div class="images" v-if="product">
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
    <!-- <div class="info">INFO</div> -->
  </main>
</template>

<style scoped lang="scss">
main {
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .images,
  .info {
    display: flex;
    flex-shrink: 0;
  }

  .images {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .mainImg {
      flex-grow: 1;
      border-radius: var(--border-radius);
      border: 2px solid var(--color3);
      display: flex;
      justify-content: center;
      width: 100%;
      aspect-ratio: 1;

      img {
        height: 100%;
        object-fit: contain;
        border-radius: inherit;
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
}
</style>
