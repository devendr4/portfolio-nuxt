<script setup>
import { useRootStore } from "../store";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add([faMoon, faSun, faGithub]);
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
  <nav class="w-full flex justify-end gap-2 items-center">
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
    <button v-on:click="store.toggleTheme()">
      <FontAwesomeIcon :icon="store.darkTheme ? 'fa-sun' : ' fa-moon'" />
    </button>
  </nav>
</template>
