<script setup>
import { projects } from "@/utils/data";
</script>

<template>
  <section class="flex flex-col justify-center flex-wrap gap-2 h-full">
    <h1 class="w-full">projects</h1>
    <NuxtLink :to="'project-detail'">
      <div
        class="flex flex-col items-center md:flex-row p-3 justify-center h-1/2 gap-3"
      >
        <ProjectCard
          v-for="p in projects"
          :title="p?.title || ''"
          :description="p?.description || ''"
          :stack="p.stack || []"
          :key="p.title"
        />
      </div>
    </NuxtLink>
  </section>
</template>
;
