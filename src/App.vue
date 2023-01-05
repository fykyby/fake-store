<script setup lang="ts">
import { useRoute } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

const route = useRoute();
</script>

<template>
  <TheHeader />
  <router-view v-slot="{ Component }">
    <transition name="transitionAnimation" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.transitionAnimation-enter-active,
.transitionAnimation-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}

.transitionAnimation-enter-from,
.transitionAnimation-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
