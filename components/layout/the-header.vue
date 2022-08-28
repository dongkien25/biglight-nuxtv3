<template>
  <header class="header-wrapper">
    <div class="header-container container">
      <!-- toggle button sidebar -->
      <div class="d-flex d-xl-none align-items-center">
        <button
          class="btn btn-icon d-xl-none p-1"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i class="fa-regular fa-bars"></i>
        </button>
      </div>

      <!-- biglight logo -->

      <div class="cursor-pointer" @click="internalRedirect(500)">
        <!-- <router-link :to="{ name: 'home' }"> -->
        <img
          class="biglight-logo"
          src="/icons/biglight-logo-light.svg"
          alt="Biglight 株式会社 biglight株式会社"
        />
        <!-- </router-link> -->
      </div>

      <!-- translate button -->
      <!-- <HeaderLanguage class="d-xl-none" /> -->

      <!-- header list -->
      <div class="header-container__list d-none d-xl-flex">
        <ul class="navbar fw-semibold">
          <li class="nav-item d-none d-xxl-flex text-danger">
            <!-- <router-link :to="{ name: 'home' }"> -->
            <span
              class="nav-link highlight"
              data-route-name="home"
              @click="internalRedirect(500)"
            >
              {{ $t("header.homePage") }}
            </span>
            <!-- </router-link> -->
          </li>
          <li class="nav-item">
            <!-- <router-link :to="{ name: 'about' }"> -->
            <span
              class="nav-link highlight"
              data-route-name="about"
              @click="internalRedirect(500)"
              >{{ $t("header.aboutUs") }}</span
            >
            <!-- </router-link> -->
          </li>
          <li class="nav-item">
            <!-- <router-link :to="{ name: 'ourStrength' }"> -->
            <span
              class="nav-link highlight"
              data-route-name="ourStrength"
              @click="internalRedirect(500)"
              >{{ $t("header.companyService") }}</span
            >
            <!-- </router-link> -->
          </li>
          <li class="nav-item">
            <!-- <router-link :to="{ name: 'recruitmentPage' }"> -->
            <span
              class="nav-link highlight"
              data-route-name="recruitmentPage"
              @click="internalRedirect(500)"
              >{{ $t("header.recruitmentNews") }}</span
            >
            <!-- </router-link> -->
          </li>
          <li class="nav-item">
            <!-- <router-link :to="{ name: 'blogPage' }"> -->
            <span
              class="nav-link highlight"
              data-route-name="blogPage"
              @click="internalRedirect(500)"
              >{{ $t("header.blogEvent") }}</span
            >
            <!-- </router-link> -->
          </li>

          <li class="nav-item">
            <!-- <router-link :to="{ name: 'servicePage' }"> -->
            <span
              class="nav-link highlight"
              data-route-name="servicePage"
              @click="internalRedirect(500)"
              >{{ $t("header.aboutService") }}</span
            >
            <!-- </router-link> -->
          </li>
          <!-- <HeaderLanguage class="d-none d-lg-flex" /> -->
        </ul>
        <div class="d-none d-lg-flex">
          <!-- <HeaderButton /> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const internalRedirect = (a) => {
  console.log(a);
};
onMounted(() => {
  console.log(localStorage);
});
</script>
