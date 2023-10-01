<script setup lang="ts">
const props = defineProps<{
  src: string;
}>();
</script>

<template>
  <div class="marvel-device iphone4s silver w-full">
    <div class="top-bar"></div>
    <div class="sleep"></div>
    <div class="volume"></div>
    <div class="camera"></div>
    <div class="sensor"></div>
    <div class="speaker"></div>
    <div class="screen">
      <img class="" :src="props.src" />
    </div>
    <div class="home"></div>
    <div class="bottom-bar"></div>
  </div>
</template>
