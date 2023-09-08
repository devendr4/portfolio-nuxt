<script setup lang="ts">
const props = defineProps<{
  variant: "h1" | "h2" | "h3" | "h4" | "h4" | "h5";
  class?: string;
}>();
</script>

<template>
  <component :is="props.variant || 'h1'" class="w-full font-bold">
    <slot />
  </component>
</template>
