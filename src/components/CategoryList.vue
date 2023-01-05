<script setup lang="ts">
import { fetchData } from "@/misc";
import { computed, onMounted, ref } from "vue";

const categories = ref([]);

const fixedCategories = computed(() => {
  return categories.value.map((cat: string) => {
    const fixedCategory = cat.replace("-", " ");
    return {
      displayCategory: fixedCategory,
      urlCategory: cat,
    };
  });
});

async function fetchCategories() {
  const data = await fetchData("https://dummyjson.com/products/categories");
  categories.value = data;
}

onMounted(fetchCategories);
</script>

<template>
  <div class="categories">
    <router-link
      class="category"
      v-for="category in fixedCategories"
      :key="category.urlCategory"
      :to="`/category/${category.urlCategory}`"
    >
      {{ category.displayCategory }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.categories {
  padding-block: 1rem;
  padding-inline: 0.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;

  .category {
    border: 2px solid var(--color4);
    border-radius: var(--border-radius);
    padding: 0.2rem 0.6rem;
    text-transform: capitalize;

    &:hover {
      background-color: var(--color4);
    }
  }
}

@media (min-width: 769px) {
  .categories {
    padding-block: 2rem;
    padding-inline: 1rem;
  }
}
</style>
