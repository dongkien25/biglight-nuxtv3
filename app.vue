<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  AOS.init({
    duration: 1000,
  });
});

const loading = ref(true);
const successContent = ref("Success");
const isSuccessModal = ref(false);
const toastData = ref({
  title: "",
  type: "info",
  content: "",
});
const showToast = ref(false);
nuxtApp.vueApp.provide("loading", loading);
nuxtApp.vueApp.provide("successContent", successContent);
nuxtApp.vueApp.provide("isSuccessModal", isSuccessModal);
nuxtApp.vueApp.provide("toastData", toastData);
nuxtApp.vueApp.provide("showToast", showToast);

nuxtApp.vueApp.provide("changeLoading", () => {
  setTimeout(() => {
    loading.value = false;
  }, 1100);
});

const loadingRoute = ref(false);
nuxtApp.vueApp.provide("loadingRoute", loadingRoute);
nuxtApp.vueApp.provide("changeLoadingRoute", (duration) => {
  loadingRoute.value = true;
  setTimeout(() => {
    loadingRoute.value = false;
  }, duration);
});
nuxtApp.vueApp.provide("changeDataLoading", (value) => {
  const body = document.querySelector("body");
  if (value) {
    body.style.overflow = "hidden";
    body.style.paddingRight = "17px";
  } else {
    body.style.overflow = null;
    body.style.paddingRight = null;
  }

  loadingRoute.value = value;
});

nuxtApp.vueApp.provide("changeSuccessContent", (value) => {
  successContent.value = value;
});

nuxtApp.vueApp.provide("changeIsSuccessModal", (value) => {
  isSuccessModal.value = value;
});

nuxtApp.vueApp.provide("changeToastData", (value) => {
  toastData.value = { ...value };
});

nuxtApp.vueApp.provide("changeShowToast", (value) => {
  showToast.value = value;
});
</script>
