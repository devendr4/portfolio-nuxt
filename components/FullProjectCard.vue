<script setup lang="ts">
import img from "@/assets/todo.jpg";

const props = defineProps<{
  title: string;
  description: string;
  stack?: string[];
}>();
</script>

<template>
  <GenericCard class="flex flex-col gap-5 h-full items-center justify-center">
    <GenericTitle variant="h1" class="text-center w-full">
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
