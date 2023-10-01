<script setup lang="ts">
import img from "@/assets/todo.jpg";

const props = defineProps<{
  title: string;
  description: string;
  stack?: string[];
}>();
</script>

<template>
  <GenericCard class="flex h-full flex-col items-center justify-center gap-5">
    <GenericTitle variant="h1" class="w-full text-center">
      {{ props.title }}
    </GenericTitle>
    <p>{{ props.description }}</p>
    <Phone :src="img"></Phone>
    <div class="flex flex-wrap gap-3">
      <p v-for="v in props.stack" :key="v">
        {{ v }}
      </p>
    </div>
  </GenericCard>
</template>
