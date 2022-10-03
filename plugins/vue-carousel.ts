import { defineNuxtPlugin } from "#app";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Carousel', Carousel);
  nuxtApp.vueApp.component('Pagination', Pagination);
  nuxtApp.vueApp.component('Slide', Slide);
  nuxtApp.vueApp.component('Navigation', Navigation);
});
