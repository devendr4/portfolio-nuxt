<script setup lang="ts">
// eslint-disable-next-line no-undef
const route = useRoute();
</script>

<template>
  <div class="bg-black h-screen text-white p-40">
    <NuxtLoadingIndicator />
    <NavBar />
    <NuxtPage />
  </div>
</template>
