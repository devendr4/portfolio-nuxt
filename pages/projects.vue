<script setup lang="ts">
import { storeToRefs } from "pinia";
import { projects } from "@/utils/data";
import { useRootStore } from "~/store";
const { selectedProject } = storeToRefs(useRootStore());
console.log(projects.find(v => v.title === selectedProject.value?.title));

watchEffect(() => {
  console.log(projects.find(v => v.title === selectedProject.value?.title));
});
</script>

<template>
  <section
    class="relative flex h-full flex-wrap justify-center"
    :class="selectedProject ? 'flex-col' : 'flex-col'"
  >
    <h1 v-if="!selectedProject" class="w-full">projects</h1>

    <button
      v-else
      class="w-full bg-black"
      @click="
        () => {
          console.log('click');
          selectedProject = undefined;
        }
      "
    >
      X
    </button>

    <div
      class="flex h-1/2 flex-col items-center justify-center gap-9 p-3 md:flex-row"
    >
      <TransitionGroup>
        <ProjectCard
          v-for="p in selectedProject
            ? projects.filter(v => v.title === selectedProject?.title)
            : projects.slice(0, 3)"
          :key="p.title"
          class="grow-0"
          :title="p?.title || ''"
          :description="p?.description || ''"
          :stack="p.stack || []"
          @click="
            () => {
              selectedProject = p;
            }
          "
        />
      </TransitionGroup>
    </div>
    <span class="flex gap-2">
      <p>back</p>
      <p>next</p>
    </span>
  </section>
</template>
;
