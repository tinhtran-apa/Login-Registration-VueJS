<script setup>
import { ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import AuthHeader from "../components/AuthHeader.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import arrowLeft from "@/assets/icons/arrow-left.svg";

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
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :header="header" icon="/src/assets/icons/mail.svg" />

    <AuthForm :forms="forms" submit="Send reset link"> </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <RouterLink
        class="flex items-center justify-center gap-1.5 text-tertiary text-[16px] leading-6 tracking-normal font-semibold"
        to="/login"
      >
        <img :src="arrowLeft" alt="" />
        <span class="text-sm">Back to sign in</span>
      </RouterLink>
    </div>
  </RightPanel>
</template>
