<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMoon, faSun, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRootStore } from "../store";

/* add icons to the library */
library.add([faMoon, faSun, faGithub, faHamburger]);
const options = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "projects", link: "projects" },
  { title: "contact", link: "contact" },
];
const store = useRootStore();

const isOpen = ref(false);
const setOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="hidden w-full items-center justify-end gap-2 md:flex">
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
  <button class="md:hidden" @click="setOpen()">
    <FontAwesomeIcon icon="fa-hamburger" />
  </button>

  <nav
    class="absolute right-0 top-0 z-50 flex h-full justify-center bg-primary p-5 opacity-95 backdrop-blur-3xl md:hidden"
    :class="isOpen ? 'w-4/12' : 'hidden w-0'"
  >
    <ul class="flex flex-col gap-2">
      <button class="text-xl" @click="store.toggleTheme()">
        <FontAwesomeIcon :icon="store.darkTheme ? 'fa-sun' : ' fa-moon'" />
      </button>
      <NuxtLink
        v-for="option in options"
        :key="option"
        :to="option.link"
        class="hover:border-none"
      >
        <li>{{ option.title }}</li>
      </NuxtLink>
    </ul>
  </nav>
</template>
