<script setup>
import { projects } from "@/utils/data";
import { storeToRefs } from "pinia";
import { useRootStore } from "~/store";
const { selectedProject } = storeToRefs(useRootStore());
console.log(projects.find((v) => v.title === selectedProject.title));
watchEffect(() => {
  console.log(projects.find((v) => v.title === selectedProject.title));
});
</script>

<template>
  <section
    class="flex justify-center flex-wrap h-full relative"
    :class="selectedProject ? 'flex-row' : 'flex-col'"
  >
    <h1 v-if="!selectedProject" class="w-full">projects</h1>

    <button
      class="w-full bg-black"
      v-else
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
      class="flex flex-col p-3 items-center md:flex-row justify-center h-1/2 gap-9"
    >
      <ProjectCard
        v-for="p in //selectedProject
        //? projects.filter((v) => v.title === selectedProject.title):
        projects.slice(0, 3)"
        @click="
          () => {
            selectedProject = p;
          }
        "
        :title="p?.title || ''"
        :description="p?.description || ''"
        :stack="p.stack || []"
        :key="p.title"
      />
    </div>
    <span class="flex gap-2">
      <p>back</p>
      <p>next</p>
    </span>
  </section>
</template>
;
