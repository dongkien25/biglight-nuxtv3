<template>
  <div class="container our-service text-center">
    <h3
      data-aos="fade-up"
      data-aos-duration="1000"
      class="text-primary sub-heading text-uppercase"
    >
      {{ $t("homePage.companyService") }}
    </h3>
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="d-flex justify-content-center"
    >
      <h1 class="heading text-uppercase">
        {{ $t("homePage.ourService") }}
      </h1>
    </div>
    <!-- <p>Trang tuyển dụng về các công việc, ngành nghề tại Nhật Bản</p> -->
    <div class="row justify-content-center px-1 px-sm-5">
      <div data-aos="zoom-in" data-aos-duration="1000" class="col-12 col-lg-6">
        <div class="card text-start h-100">
          <img src="/HomePage/OurService-1.png" alt="OurService Image" />
          <h3 class="w-100 mt-3">
            {{ $t("homePage.ourServiceTitle1") }}
          </h3>
          <p v-html="$t('homePage.ourServiceContent1')" />
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" class="col-12 col-lg-6">
        <div class="card text-start h-100 mt-4 mt-lg-0">
          <img src="/HomePage/OurService-2.png" alt="OurService Image" />
          <h3 class="w-100 mt-3" v-html="$t('homePage.ourServiceTitle2')" />
          <p v-html="$t('homePage.ourServiceContent2')" />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <button
        class="btn btn-outline-primary"
        @click="internalRedirect('servicePage')"
      >
        {{ $t("button.viewDetails") }}
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
// import useRedirect from "@/plugins/redirect";
export default {
  setup() {
    // const { internalRedirect } = useRedirect();
    const internalRedirect = () => {};
    onMounted(() => {});
    return { internalRedirect };
  },
};
</script>

<style lang="scss" scoped>
.our-service {
  .row {
    margin-top: 64px;
    .col {
      padding: 0px 16px;
      max-width: 612px;
      min-height: 632px;
      max-height: 632px;
      .card {
        padding: 24px 32px;
        justify-content: center;
        align-items: center;
        img {
          width: 516px;
          height: 422px;
          padding-bottom: 32px;
        }
      }
    }
  }
}
</style>
