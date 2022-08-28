<template>
  <form class="login100-form validate-form">
    <p class="fw-semibold mb-0 pb-2">
      Chào mừng bạn đến với <span class="text-primary">BIGLIGHT,</span>
    </p>
    <h3 class="login100-form-title fw-bold heading pb-4 my-0">
      {{ $t("button.register") }}
    </h3>
    <!-- <SocialLogin class="pb-2" /> -->
    <div
      class="wrap-input100 validate-input"
      data-validate="Vui lòng nhập tên của bạn!"
    >
      <input
        v-model="user.name"
        class="input100"
        type="text"
        data-input-name="name"
        name="name"
        placeholder="Họ và tên"
      />
      <span class="focus-input100" />

      <span class="symbol-input100">
        <i class="fa-solid fa-circle-user fa-lg" />
      </span>
    </div>
    <div
      class="wrap-input100 validate-input"
      data-validate="Email không hợp lệ!"
    >
      <input
        v-model="user.email"
        class="input100"
        type="text"
        data-input-name="email"
        name="email"
        placeholder="Email"
      />
      <span class="focus-input100" />

      <span class="symbol-input100">
        <!-- <EmailIcon /> -->
      </span>
    </div>
    <div
      class="wrap-input100 validate-input"
      data-validate="Vui lòng nhập link Facebook của bạn!"
    >
      <input
        v-model="user.facebook_link"
        class="input100"
        type="text"
        data-input-name="facebook_link"
        name="facebook_link"
        placeholder="Facebook cá nhân"
      />
      <span class="focus-input100" />

      <span class="symbol-input100">
        <i
          class="fa-brands fa-facebook-f"
          data-bs-toggle="tooltip"
          data-bs-html="true"
          data-bs-title="Cách xem Facebook ID Facebook ID (Tên người dùng) là phần cuối cùng của đường link FB
        <b> www.facebook.com/ </b><em>Tên người dùng </em><br />
        Cách xem trên máy tính
        Kiểm tra trên link khi bạn mở trang Facebook cá nhân của mình trong trình duyệt web <br />
        Cách xem trên app điện thoại
        Bạn mở trang cá nhân Profile của bạn, chọn phần cài đặt sẽ ra Link trang cá nhân Profile của bạn"
        />
      </span>
    </div>
    <div
      class="wrap-input100 validate-input"
      data-validate="Số điện thoại không hợp lệ!"
    >
      <input
        v-model="user.phone"
        class="input100"
        type="text"
        data-input-name="phone"
        name="phone"
        placeholder="Số điện thoại"
      />
      <span class="focus-input100" />
      <span class="symbol-input100">
        <!-- <PhoneIcon /> -->
      </span>
    </div>
    <div
      class="wrap-input100 validate-input"
      data-validate="Vui lòng nhập mật khẩu ít nhất 8 ký tự!"
    >
      <input
        v-model="user.password"
        class="input100"
        type="password"
        data-input-name="password"
        name="password"
        placeholder="Mật khẩu"
      />
      <span class="focus-input100" />
      <span class="symbol-input100">
        <!-- <KeyIcon /> -->
      </span>
    </div>
    <div
      class="wrap-input100 validate-input"
      data-validate="Mật khẩu xác nhận chưa đúng!"
    >
      <input
        v-model="user.password_confirmation"
        class="input100"
        type="password"
        data-input-name="password_confirmation "
        name="password_confirmation "
        placeholder="Xác nhận lại mật khẩu"
      />
      <span class="focus-input100" />
      <span class="symbol-input100">
        <!-- <KeyIcon /> -->
      </span>
    </div>

    <div class="text-end pb-0">
      <p class="pt-2 text-start tos-text">
        Bằng việc nhấn nút đăng ký, bạn đã đồng ý với
        <!-- <router-link to="/terms-of-use" class="fw-semibold text-primary"> -->
        Điều khoản sử dụng
        <!-- </router-link> -->
        và
        <!-- <router-link to="/privacy-policy" class="fw-semibold text-primary"> -->
        Chính sách bảo mật
        <!-- </router-link> -->
        của BIGLIGHT
      </p>
    </div>
    <div class="container-login100-form-btn">
      <button class="btn btn-primary w-100 text-white" @click="submit">
        {{ $t("button.register") }}
      </button>
    </div>

    <div class="text-center" style="padding-top: 40px">
      <p class="fw-semibold" href="#">
        Bạn là thành viên của BIGLIGHT?
        <NuxtLink to="/login" class="text-primary">
          Đăng nhập
          <i class="fa-regular fa-right-long"></i>
        </NuxtLink>
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
// import EmailIcon from '@/components/icons/EmailIcon.vue';
// import KeyIcon from '@/components/icons/KeyIcon.vue';
// import ArrowRightIcon from '@/components/icons/ArrowRightIcon.vue';

// import PhoneIcon from '@/components/icons/PhoneIcon.vue';
// import SocialLogin from '@/components/Pages/User/SocialLogin.vue';
// import { ref } from '@vue/reactivity';
// import { onMounted } from '@vue/runtime-core';
import { EMAIL_REGEX } from "@/utils/pattern";
// import * as bootstrap from 'bootstrap';
const user = ref({
  name: "",
  email: "",
  phone: "",
  facebook_link: "",
  password: "",
  password_confirmation: "",
  locale: "",
});
const validatePass = (pass) => {
  return pass.trim().length >= 8;
};

const validate = () => {
  const check = [];
  // for (const key in user.value) {
  //   if(!user.value[key]) check.push(key)
  // }
  if (!user.value.name.trim()) check.push("name");
  if (!user.value.facebook_link.trim()) check.push("facebook_link");
  if (!user.value.email.trim() || !user.value.email.trim().match(EMAIL_REGEX))
    check.push("email");
  // if (!user.value.phone.trim()) check.push('phone');
  if (!user.value.password) check.push("password");
  else {
    if (!validatePass(user.value.password)) {
      check.push("password");
    } else if (user.value.password !== user.value.password_confirmation) {
      check.push("password_confirmation ");
    }
  }
  return check;
};

const showValidate = (input) => {
  input.parentElement.classList.add("alert-validate");
};

const hideValidate = (input) => {
  input.parentElement.classList.remove("alert-validate");
};

const submit = (e) => {
  e.preventDefault();
  //   const inputs = document.querySelectorAll('.validate-input .input100');
  //   const checkValidate = validate();

  //   for (const element of inputs) {
  //     if (checkValidate.includes(element.dataset.inputName)) {
  //       showValidate(element);
  //     } else {
  //       hideValidate(element);
  //     }
  //   }
  //   if (!checkValidate.length) {
  //     emit('submit', user.value);
  //   }
};

onMounted(() => {
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   // eslint-disable-next-line no-unused-vars
  //   const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
  //   const inputs = document.querySelectorAll('.validate-input .input100');
  //   for (const element of inputs) {
  //     element.addEventListener('focus', function () {
  //       hideValidate(element);
  //     });
  //   }
});
</script>

<style lang="scss" scoped>
.tos-text {
  font-size: 12px !important;
  color: rgba(117, 117, 117, 1);
}
</style>
