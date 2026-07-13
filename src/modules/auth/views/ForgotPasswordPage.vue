<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :header="header" :icon="mailIcon" />

    <AuthForm
      :forms="forms"
      submit="Send reset link"
      v-model="formSubmit"
      @submit="handleSubmit"
      @clear-error="handleClearError"
      :errors="errors"
    >
    </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <RouterLink
        class="flex items-center justify-center gap-1.5 text-tertiary text-[16px] leading-6 tracking-normal font-semibold"
        :to="ROUTES.LOGIN"
      >
        <img :src="arrowLeft" alt="" />

        <span class="text-sm">Back to sign in</span>
      </RouterLink>
    </div>
  </RightPanel>
</template>

<script setup>
import { reactive, ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import arrowLeft from "@/shared/assets/icons/arrow-left.svg";
import mailIcon from "@/shared/assets/icons/mail.svg";
import { clearError, validateForgotPassword } from "../validators/authValidates.js";
import { ROUTES } from "../constants/routes.js";

const header = {
  title: "Forgot Password",
  des: "No problem. Enter the email tied to your account and we'll send you a reset link",
};
const forms = ref([
  {
    id: "email",
    title: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
]);

const errors = ref({});

const formSubmit = reactive({ email: "" });

const handleSubmit = () => {
  const result = validateForgotPassword(formSubmit);
  errors.value = result || {};
  if (!result) {
    alert("Sent to your email !");
  }
};

const handleClearError = (field) => {
  clearError(errors.value, field);
};
</script>
