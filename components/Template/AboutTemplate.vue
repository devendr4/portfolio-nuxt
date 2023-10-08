<script setup lang="ts">
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserSecret);
</script>

<template>
  <h1 class="mb-3">about</h1>
  <div class="flex flex-wrap">
    <section class="basis-3/4 p-3">
      <h2 class="mb-2">experiences</h2>
      <ul class="flex flex-col gap-5">
        <li v-for="exp in experiences" :key="exp.company">
          <p>{{ exp.company + " " + exp.startYear + " - " + exp.endYear }}</p>
          <p>{{ exp.duties }}</p>
        </li>
      </ul>
    </section>
    <!-- <font-awesome-icon :icon="{ faUserSecret }" /> -->
    <section class="p-3">
      <h2 class="mb-2">skills</h2>
      <ul class="flex flex-col gap-3">
        <li v-for="skill in skills" :key="skill.name">
          {{ skill.name }}
        </li>
      </ul>
    </section>
  </div>
</template>
