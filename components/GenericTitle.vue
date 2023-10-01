<script setup lang="ts">
const props = defineProps<{
  variant: "h1" | "h2" | "h3" | "h4" | "h4" | "h5";
}>();
</script>

<template>
  <component :is="props.variant || 'h1'" class="w-full py-3 text-3xl font-bold">
    <slot />
  </component>
</template>
