<script setup lang="ts">
import { useRootStore } from "./store";

const route = useRoute();
const store = useRootStore();
const onScroll = () => {
  console.log("scrolling", store.darkTheme);
};
</script>

<template>
  <div
    :class="
      (store.darkTheme ? 'bg-black text-white' : 'bg-white text-black') +
      ' h-screen p-10  md:p-30 xs:p-2'
    "
  >
    <div class="border-2 h-full overflow-auto">
      <NuxtScrollbar tag="aside" @ps-scroll-y="onScroll" class="h-full">
        <div class="p-10">
          <NuxtLoadingIndicator />
          <NavBar />
          <NuxtPage />
        </div>
      </NuxtScrollbar>
    </div>
  </div>
</template>
