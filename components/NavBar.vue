<script setup>
import { useRootStore } from "../store";
const options = [
  { title: "home", link: "/" },
  { title: "about", link: "about" },
  { title: "projects", link: "projects" },
  { title: "contact", link: "contact" },
];
const store = useRootStore();
watchEffect(() => {
  console.log(store.darkTheme);
}, [store.darkTheme]);
</script>

<template>
  <nav class="w-full flex justify-end">
    <ul class="flex gap-2">
      <NuxtLink
        v-for="option in options"
        v-bind:key="option"
        :to="option.link"
        class="border-b-2 hover:border-none"
      >
        <li>{{ option.title }}</li>
      </NuxtLink>
    </ul>
    <button v-on:click="store.toggleTheme()">theme</button>
  </nav>
</template>
