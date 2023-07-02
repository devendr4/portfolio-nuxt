<script setup lang="ts">
import { useRootStore } from "./store";

const route = useRoute();
const store = useRootStore();
</script>

<template>
  <div
    :class="
      (store.darkTheme ? 'bg-black  text-white ' : 'bg-white text-black') +
      'h-screen  p-40'
    "
  >
    <NuxtLoadingIndicator />
    <NavBar />
    <NuxtPage />
  </div>
</template>
