import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    // "primevue/resources/themes/saga-blue/theme.css",
    // "primevue/resources/primevue.css",
    // "primeicons/primeicons.css",
    // "primeflex/primeflex.css",
    "@/assets/scss/main.scss",
    "@/assets/fws/css/all.min.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
