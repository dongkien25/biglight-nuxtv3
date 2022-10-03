<template>
  <common-banner-carousel>
    <div class="carousel-inner">
      <div class="carousel-overlay" />
      <div class="carousel-item active" data-bs-interval="6000">
        <img
          src="/HomePage/parco-chan-OL0VKdO8JvI-unsplash.jpg"
          class="d-block w-100"
          alt=""
        />
        <div
          class="carousel-caption d-flex justify-content-center align-items-center flex-column"
        >
          <div class="text-center mt-sm-auto pb-3 w-75">
            <!-- <h1 class="animate__animated animate__fadeInDown animate__slow">ÁNH SÁNG DẪN LỐI THÀNH CÔNG</h1>
            <h1 class="text-primary animate__animated animate__fadeInTopLeft animate__slow">CÙNG BIG LIGHT</h1>
            <p class="mt-4 animate__animated animate__fadeInTopLeft animate__slow">
              “Tất cả những nụ cười - Tới tất cả mọi người - Ở mọi nơi”
            </p> -->
            <!-- <div id="handWriter"></div> -->
            <IconsHomeSlideText v-if="!loading" class="ms-3 ms-lg-5" />
            <!-- <HomeSlideText/> -->
            <button
              class="d-none d-md-inline-block btn btn-primary mt-5"
              @click="showMessageFormModal"
            >
              {{ $t("button.contact") }}
            </button>
            <button
              class="d-inline-block d-md-none btn btn-primary mt-4 btn-sm"
              @click="showMessageFormModal"
            >
              {{ $t("button.contact") }}
            </button>
          </div>
          <div class="mouse-icon mt-auto d-none d-lg-block">
            <div
              class="pb-5 animate__animated animate__fadeOutDown animate__delay-1s animate__slow animate__infinite"
            >
              <IconsMouseIcon />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="carousel-item" data-bs-interval="4000">
        <img src="@/assets/HomePage/ExampleSlide-1.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-flex justify-content-center align-items-center"></div>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
        <img src="@/assets/HomePage/ExampleSlide-1.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-flex justify-content-center align-items-center"></div>
      </div> -->
    </div>
  </common-banner-carousel>
</template>

<script>
import { inject, ref } from "vue";
// import { Modal } from "bootstrap";
export default {
  setup() {
    const myModalAlternative = ref(null);
    const showMessageFormModal = () => {
      // myModalAlternative.value = new Modal("#messageFormModal", {
      //   backdrop: true,
      //   focus: true,
      //   keyboard: true,
      // });
      // myModalAlternative.value.show();
    };
    return {
      loading: inject("loading"),
      showMessageFormModal,
    };
  },
};
</script>
<style lang="scss" scoped>
.carousel-caption {
  background: rgba(0, 0, 0, 0.2);
}
</style>
