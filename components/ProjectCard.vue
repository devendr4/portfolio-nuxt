<script lang="ts" setup>
const props = defineProps<{
  title: string;
  description: string;
  stack?: string[];
}>();

const hover = ref(false);
</script>

<template>
  <div class="relative">
    <Transition name="bounce">
      <div
        v-if="hover"
        class="absolute bg-transparent border-0 -top-96 z-10 w-1/3 left-0 right-0 m-auto"
      ></div>
    </Transition>
    <GenericCard class="z-50 md:w-96 relative backdrop-blur">
      <div class="flex flex-col gap-5">
        <GenericTitle variant="h1">
          {{ props.title }}
        </GenericTitle>
        <p>{{ props.description }}</p>
        <div class="flex flex-wrap gap-3">
          <p v-for="v in props.stack" :key="v">
            {{ v }}
          </p>
        </div>
      </div>
    </GenericCard>
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
