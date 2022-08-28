<template>
  <div class="limiter">
    <div class="container-login100 background-highlight">
      <div class="wrap-login100">
        <div class="login100-pic">
          <!-- <Tilt
            :options="{ scale: 1.2 }"
            :parallax="true"
          > -->
          <img src="/images/login-image.png" alt="IMG" />
          <!-- </Tilt> -->
        </div>

        <pages-auth-login> </pages-auth-login>
      </div>
    </div>
    <div v-show="loading" class="loading-overlay">
      <!-- <ripple-loading /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import Tilt from 'vanilla-tilt-vue';
// import LoginForm from '@/components/Pages/User/LoginForm.vue';
// import { useUserStore } from '@/stores/user';
// import { ref, inject } from 'vue';
// import * as bootstrap from 'bootstrap';
import { useI18n } from "vue-i18n";
// import router from '@/router';

// const userStore = useUserStore();
const loading = ref(false);
// const { t } = useI18n({ useScope: 'global' });
// const changeSuccessContent = inject('changeSuccessContent');
// const changeIsSuccessModal = inject('changeIsSuccessModal');
const submit = async (account) => {
  //   const successFormModal = new bootstrap.Modal(document.getElementById('successFormModal'));
  //   loading.value = true;
  //   const response = await userStore.login(account);
  //   if (response.status === 200) {
  //     router.push('/');
  //   } else {
  //     const errors = response.data.errors;
  //     console.log(errors);
  //     changeSuccessContent(t('error.wrongPasswordOrEmail'));
  //     changeIsSuccessModal(false);
  //     successFormModal.show();
  //   }
  //   loading.value = false;
};
</script>

<style lang="scss">
@import "@/assets/scss/pages/_login.scss";
</style>
