<template>
  <div
    id="carouselExampleCaptions"
    class="banner-slider carousel slide"
    data-bs-ride="carousel"
    data-slide-to="1"
  >
    <div class="carousel-indicators">
      <!-- <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button> -->
      <!-- <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button> -->
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.banner-slider.carousel {
  @media (max-width: 575px) {
    height: 430px;
    .carousel-inner,
    .carousel-item,
    img {
      height: 100%;
    }
    img {
      object-fit: cover;
    }
  }
  .carousel-caption {
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .carousel-indicators {
    opacity: 1;
    button {
      opacity: 1;
      margin: 0 6px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border-top: none;
      border-bottom: none;
      background: #ffe4b3;
      &.active {
        background: #ffa500;
      }
    }
  }
}
</style>
