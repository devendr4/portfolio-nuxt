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
      (store.darkTheme ? 'bg-foreground text-white' : 'bg-white text-black') +
        ' h-screen p-10  md:p-30 xs:p-2'
    "
  >
    <div
      class="border-2 h-full overflow-auto"
      :class="
        store.darkTheme ? 'bg-foreground text-white' : 'bg-white text-black'
      "
    >
      <NuxtScrollbar tag="aside" class="h-full" @ps-scroll-y="onScroll">
        <div class="p-10">
          <NuxtLoadingIndicator />
          <NavBar />
          <NuxtPage />
        </div>
      </NuxtScrollbar>
    </div>
  </div>
</template>
