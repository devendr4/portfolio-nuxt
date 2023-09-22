import { defineStore } from "pinia";
import { Project } from "~/types";

export const useRootStore = defineStore("root", () => {
  const darkTheme = ref(true);
  const selectedProject = ref<Project>();
  const toggleTheme = () => {
    darkTheme.value = !darkTheme.value;
  };

  return { darkTheme, toggleTheme, selectedProject };
});
