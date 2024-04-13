<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserSecret);
</script>

<template>
  <h1 class="mb-3">
    about
  </h1>
  <div class="flex flex-wrap">
    <section class="basis-3/4 p-3">
      <h2 class="mb-2">
        I have over 4 years of professional experience in software development, having worked in multiple environments, from growing startups to bigger companies with over 100 employees.
      </h2>

      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li v-for="exp in experiences" :key="exp.company" class="mb-10 ms-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ exp.role }} @ {{ exp.company }}
          </h3>

          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white border-gray-900 bg-gray-700 bg-gray-700" />
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ exp.startDate }}</time>

          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {{ exp.duties }}
          </p>
        </li>
      </ol>
    </section>
    <FontAwesomeIcon icon="{faUserSecret}" />
    <section class="p-3">
      <h2 class="mb-2">
        skills
      </h2>
      <ul class="flex flex-col gap-3">
        <li v-for="skill in skills" :key="skill.name">
          {{ skill.name }}
        </li>
      </ul>
    </section>
  </div>
</template>
