export const state = () => ({
  darkTheme: false,
});

export type RootState = ReturnType<typeof state>;

export const actions: ActionTree = {
  setTheme({ state, commit }) {
    commit("setTheme", (state.theme = !state.theme));
  },
};
