<script setup lang="ts">
import { useRootStore } from "./store";

const store = useRootStore();
const onScroll = () => {
  console.log("scrolling", store.darkTheme);
};

const boxRef = ref();
const { onLoop } = useRenderLoop();
onLoop(() => {
  if (boxRef.value) {
    boxRef.value.rotation.x += 0.001;
    boxRef.value.rotation.z += 0.001;
    // boxRef.value.rotation.z += 0.002;
  }
});
</script>

<template>
  <div
    :class="
      (store.darkTheme ? 'bg-foreground text-white' : 'bg-white text-black') +
      ' md:p-30 xs:p-2  h-screen p-10'
    "
  >
    <TresCanvas
      window-size
      :clear-color="store.darkTheme ? '#2C3333' : 'white'"
      :shadows="true"
    >
      <TresMesh ref="boxRef">
        <TresBoxGeometry :args="[2, 1, 1]" />
        <TresMeshBasicMaterial color="#3b4545" />
      </TresMesh>
      <TresSpotLight :intensity="10" />
    </TresCanvas>
    <div
      class="z-50 h-full overflow-auto border-2"
      :class="
        store.darkTheme ? 'bg-foreground text-white' : 'bg-white text-black'
      "
    >
      <NuxtScrollbar tag="aside" class="h-full" @ps-scroll-y="onScroll">
        <div class="h-full p-10">
          <NuxtLoadingIndicator />
          <NavBar />
          <NuxtPage />
        </div>
      </NuxtScrollbar>
    </div>
  </div>
</template>
