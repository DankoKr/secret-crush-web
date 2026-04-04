import { defineNuxtPlugin } from "#app";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide);
});
