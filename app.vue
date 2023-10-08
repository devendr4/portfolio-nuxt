<script setup lang="ts">
import { useRootStore } from "./store";

const store = useRootStore();
const onScroll = () => {
  console.log("scrolling", store.darkTheme);
};
</script>

<template>
  <div
    :class="
      (store.darkTheme
        ? 'h-screen bg-foreground p-10 text-white backdrop-blur'
        : 'bg-white text-black') + ' md:p-30 xs:p-2  h-full '
    "
  >
    <div
      class="z-50 h-full overflow-auto border-2 backdrop-blur"
      :class="
        store.darkTheme ? ' text-white backdrop-blur-sm' : 'bg-white text-black'
      "
    >
      <!-- <NuxtScrollbar tag="aside" class="h-full" @ps-scroll-y="onScroll"> -->
      <AnimatedBackground />
      <div class="absolute inset-y-0 py-10">
        <NavBar />
        <NuxtLoadingIndicator />
        <NuxtPage />
      </div>
      <!-- </NuxtScrollbar> -->
    </div>
  </div>
</template>
