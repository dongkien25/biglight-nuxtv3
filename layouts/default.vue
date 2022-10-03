<template>
  <div>
    <layout-the-header></layout-the-header>
    <h1><i class="fa-regular fa-bars"></i> {{ $t("updating") }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  console.log(localStorage);
});
</script>

<style scoped></style>
