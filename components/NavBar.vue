<script setup>
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMoon, faSun, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRootStore } from "../store";

/* add icons to the library */
library.add([faMoon, faSun, faGithub, faHamburger]);
const options = [
  { title: "home", link: "/" },
  { title: "about", link: "about" },
  { title: "projects", link: "projects" },
  { title: "contact", link: "contact" },
];
const store = useRootStore();
watchEffect(() => {
  console.log(store.darkTheme);
  console.log(2);
}, [store.darkTheme]);
</script>

<template>
  <nav class="hidden w-full md:flex justify-end gap-2 items-center">
    <ul class="flex gap-2">
      <NuxtLink
        v-for="option in options"
        :key="option"
        :to="option.link"
        class="border-b-2 hover:border-none"
      >
        <li>{{ option.title }}</li>
      </NuxtLink>
    </ul>
    <button class="text-xl" @click="store.toggleTheme()">
      <FontAwesomeIcon :icon="store.darkTheme ? 'fa-sun' : ' fa-moon'" />
    </button>
  </nav>
  <nav
    class="flex justify-end p-3 md:hidden h-screen opacity-95 backdrop-blur-sm bg-white/30 w-5/12 absolute top-0 right-0"
  >
    <ul class="flex flex-col gap-2">
      <NuxtLink
        v-for="option in options"
        :key="option"
        :to="option.link"
        class="hover:border-none"
      >
        <li>{{ option.title }}</li>
      </NuxtLink>
    </ul>
    <button>
      <FontAwesomeIcon icon="fa-hamburger" />
    </button>
  </nav>
</template>
