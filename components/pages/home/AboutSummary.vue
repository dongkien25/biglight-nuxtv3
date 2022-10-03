<template>
  <div class="about-summary d-flex justify-content-center">
    <div class="about-summary__container container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="text-center d-flex flex-column align-items-center"
      >
        <h1 class="heading m-0 text-uppercase d-none d-sm-block">
          {{ $t("homePage.aboutSummary1") }}
        </h1>
        <h2 class="heading m-0 text-uppercase d-block d-sm-none">
          {{ $t("homePage.aboutSummary1") }}
        </h2>
        <h1 class="text-primary text-uppercase d-none d-sm-block">
          {{ $t("homePage.aboutSummary2") }}
        </h1>
        <h2 class="text-primary text-uppercase d-block d-sm-none">
          {{ $t("homePage.aboutSummary2") }}
        </h2>
      </div>
      <div id="number-counter" class="row justify-content-between">
        <div
          v-for="(item, index) in summaryContents"
          :key="index"
          class="col-12 col-sm-3 text-center animate__animated animate__pulse animate__infinite pt-3 pt-sm-0"
        >
          <div
            class="d-flex justify-content-center text-primary mb-4 fw-bolder"
          >
            <h1 class="counter-value transition" :data-count="item.amount">
              {{ convertNumber(item.amount) }}
              <!-- <number
                class="bold transition"
                :ref="
                  (el) => {
                    numberCounter[index] = el;
                  }
                "
                :format="convertNumber"
                :from="0"
                animationPaused
                :to="item.amount"
                :duration="2"
                :delay="0.5"
                easing="Power4.easeOut"
              /> -->
            </h1>
            <h1 class="ms-1">+</h1>
          </div>

          <p
            class="text-primary-blue m-0 fw-semibold"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUpdate, reactive } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n({ useScope: "global" });
    const numberCounter = ref([]);
    const count = ref(0);
    const oTop = ref(0);
    const summaryContents = reactive([
      {
        amount: 3000,
        description: t("homePage.summaryCandidate"),
      },
      {
        amount: 100,
        description: t("homePage.summaryMajor"),
      },
      {
        amount: 20,
        description: t("homePage.summaryJob"),
      },
    ]);
    const convertNumber = (number) => {
      return parseInt(number).toLocaleString("de-DE");
    };
    // const handleScroll = () => {
    //   // oTop.value = document.getElementById('number-counter').offsetTop - window.innerHeight;
    //   if (count.value === 0 && window.scrollY > oTop.value) {
    //     numberCounter.value.forEach((element) => {
    //       element.play();
    //     });
    //     count.value = 1;
    //   }
    // };
    onMounted(() => {
      setTimeout(() => {
        oTop.value =
          document.getElementById("number-counter").offsetTop -
          window.innerHeight;
        if (count.value === 0 && window.scrollY > oTop.value) {
          numberCounter.value.forEach((element) => {
            element.play();
          });
          count.value = 1;
        }
      }, 500);
      // window.addEventListener('scroll', handleScroll);
    });
    onBeforeUpdate(() => {
      numberCounter.value = [];
    });
    return { summaryContents, convertNumber, numberCounter };
  },
};
</script>

<style lang="scss" scoped>
.about-summary {
  height: 560px;
  background-image: url("/HomePage/background-banner2.png");
  background-size: cover;
  &__container {
    padding: 0 50px;
    margin: 78px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .slogan {
      width: 727px;
    }
  }
}
</style>
