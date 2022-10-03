<template>
  <div class="d-flex flex-column homepage">
    <div class="w-100 module-content">
      <pages-home-slide />
      <pages-home-about-summary />
    </div>
    <pages-home-our-service class="module-content" />
    <!-- <pages-home-recruitment-news class="module-content" /> -->
    <!-- <pages-home-news-and-event class="module-content" /> -->
    <!-- <pages-home-bottom-slider class="module-content" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref();
</script>

<style lang="scss"></style>
