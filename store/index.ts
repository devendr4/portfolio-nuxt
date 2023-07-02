import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    darkTheme: false,
  }),
  actions: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
    },
  },
});
