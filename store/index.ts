import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    darkTheme: true
  }),
  actions: {
    toggleTheme () {
      this.darkTheme = !this.darkTheme;
    }
  }
});
