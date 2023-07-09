<script setup lang="ts">
import { useRootStore } from "./store";

const route = useRoute();
const store = useRootStore();
</script>

<template>
  <div
    :class="
      (store.darkTheme ? 'bg-black  text-white ' : 'bg-white text-black') +
      'h-screen p-10  md:p-30 xs:p-2'
    "
  >
    <div class="border-2 h-full p-10">
      <NuxtLoadingIndicator />
      <NavBar />
      <NuxtPage />
    </div>
  </div>
</template>
