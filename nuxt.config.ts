// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@davestewart/nuxt-scrollbar",
  ],
  css: ["assets/devices.min.css"],
  googleFonts: {
    families: {
      Rajdhani: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
    },
  },
  build: {
    transpile: ["@fortawesome/vue-fontawesome"],
  },
});
