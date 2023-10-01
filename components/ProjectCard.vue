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
    class="max-w-[24rem] grow-0 gap-4 backdrop-blur transition-all"
    :class="
      store.selectedProject?.title === props.title
        ? 'open  z-50'
        : 'z-10 w-full cursor-pointer md:w-96'
    "
  >
    <div
      class="transition-all"
      :class="
        store.selectedProject?.title === props.title
          ? 'child flex gap-2 p-10'
          : ''
      "
    >
      <Transition name="grow">
        <div v-if="store.selectedProject?.title === props.title" class="w-1/2">
          <PhoneContainer :src="img" />
        </div>
      </Transition>
      <div
        class="flex w-full flex-col gap-5 transition-all duration-300"
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
        <a
          v-if="store.selectedProject"
          :href="store.selectedProject?.source"
          class="cursor-pointer underline"
          >Source</a
        >
      </div>
    </div>
  </GenericCard>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.grow-enter-active {
  width: 0;
  opacity: 0;
  animation: grow 0.9s ease-in-out;
  animation-delay: 0.9s;
}

.grow-leave-active {
  animation: grow 0.9s ease-in-out reverse;
  /* animation-delay: 0.9s; */
}
.open {
  animation: open 0.9s ease-in-out forwards;
  animation-delay: 0.9s;

  /* animation-delay: 0.3s; */
}

.child {
  /* transform: scale(0.5); */
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes open {
  from {
    width: 24rem;

    /* transform: scale(1); */
  }
  to {
    /* transform: scale(2); */
    /* transform: translate(-50%, -50%); */
    margin-left: 15rem;
    margin-top: 10rem;
    width: 90%;
    height: 70%;
    position: fixed;
    max-width: 100%;
  }
}

@keyframes grow {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  75% {
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(0.2);
  }
}
</style>
