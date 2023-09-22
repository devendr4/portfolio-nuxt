<script lang="ts" setup>
import { useRootStore } from "~/store";
import img from "@/assets/todo.jpg";

const props = defineProps<{
  title: string;
  description: string;
  stack?: string[];
}>();

const store = useRootStore();
</script>

<template>
  <GenericCard
    class="backdrop-blur gap-4"
    :class="
      store.selectedProject?.title === props.title
        ? 'h-full md:w-11/12  z-50 flex flex-wrap ml-60 mt-40 border border-b-0 transition-height   duration-1000  border-r-0 rounded-r-none rounded-b-none '
        : 'md:w-96 w-full z-10'
    "
  >
    <div
      :class="
        store.selectedProject?.title === props.title ? 'p-10 flex gap-2 ' : ''
      "
    >
      <div class="w-1/2">
        <Phone
          v-if="store.selectedProject?.title === props.title"
          :src="img"
          :class="{ grow: !!store.selectedProject }"
        />
      </div>
      <div
        class="flex flex-col gap-5"
        :class="store.selectedProject && 'w-1/2'"
      >
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
    </div>
  </GenericCard>
</template>

<style>
.grow {
  animation: grow 0.9s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes open {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes grow {
  0% {
    transform: scale(0);
  }

  75% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}
</style>
