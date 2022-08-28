<template>
  <form class="login100-form validate-form" novalidate="">
    <p class="fw-semibold mb-0 pb-2">
      Chào mừng bạn đến với <span class="text-primary">BIGLIGHT,</span>
    </p>
    <h3 class="login100-form-title fw-bold pb-4 heading my-0">Đăng nhập</h3>
    <!-- <SocialLogin class="pb-2" /> -->
    <div
      class="wrap-input100 validate-input"
      data-validate="Email không hợp lệ!"
    >
      <input
        v-model="user.email"
        class="input100"
        type="text"
        name="email"
        placeholder="Email"
        required
      />
      <span class="focus-input100" />

      <span class="symbol-input100">
        <!-- <EmailIcon /> -->
      </span>
    </div>

    <div
      class="wrap-input100 validate-input"
      data-validate="Vui lòng nhập mật khẩu của bạn!"
    >
      <input
        v-model="user.password"
        class="input100"
        type="password"
        name="pass"
        placeholder="Password"
      />
      <span class="focus-input100" />
      <span class="symbol-input100">
        <!-- <KeyIcon /> -->
      </span>
    </div>
    <div class="text-end pb-4">
      <a to="#" class="fs-6 fw-semibold text-primary" href="#">
        Quên mật khẩu?
      </a>
    </div>

    <div class="container-login100-form-btn">
      <button
        class="btn btn-primary w-100 text-white"
        type="submit"
        @click="submit"
      >
        {{ $t("button.login") }}
      </button>
    </div>

    <div class="text-center need-register">
      <p class="fw-semibold" href="#">
        Chưa có tài khoản ?
        <NuxtLink to="/register" class="text-primary">
          Đăng ký ngay
          <!-- <ArrowRightIcon /> -->
        </NuxtLink>
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
// import EmailIcon from '@/components/icons/EmailIcon.vue';
// import KeyIcon from '@/components/icons/KeyIcon.vue';
// import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue';
// import SocialLogin from '@/components/Pages/User/SocialLogin.vue';
import { EMAIL_REGEX } from "@/utils/pattern";

// import { ref } from '@vue/reactivity';
// import { onMounted } from '@vue/runtime-core';

const user = ref({
  email: "",
  password: "",
});
const validate = () => {
  if (!!user.value.email.trim() && !!user.value.password.trim()) {
    return !!user.value.email.trim().match(EMAIL_REGEX);
  }
  return false;
};

const showValidate = (input) => {
  input.parentElement.classList.add("alert-validate");
};

const hideValidate = (input) => {
  input.parentElement.classList.remove("alert-validate");
};
const submit = (e) => {
  //   e.preventDefault();
  //   const inputs = document.querySelectorAll('.validate-input .input100');
  //   let check = true;
  //   for (const element of inputs) {
  //     if (!validate()) {
  //       check = false;
  //       showValidate(element);
  //     } else {
  //       hideValidate(element);
  //     }
  //   }
  //   if (check) {
  //     emit('submit', user.value);
  //   }
};
onMounted(() => {
  //   const inputs = document.querySelectorAll('.validate-input .input100');
  //   for (const element of inputs) {
  //     element.addEventListener('focus', function () {
  //       hideValidate(element);
  //     });
  //   }
});
</script>

<style lang="scss" scoped>
.need-register {
  padding-top: 56px;
  @media (min-width: 1200px) {
    padding-top: 136px;
  }
}
</style>
