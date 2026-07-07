<script setup lang="ts">
import { ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import AuthHeader from "../components/AuthHeader.vue";
import { RouterLink } from "vue-router";
import CheckBox from "@/components/common/checkbox.vue";

const forms = ref([
  {
    id: "full_name",
    title: "Full Name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    id: "email",
    title: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    id: "confirm_password",
    title: "Confirm Password",
    type: "password",
    placeholder: "Re-enter your password",
  },
]);

const socials = ref([
  {
    title: "Google",
    icon: "/src/assets/icons/google.svg",
  },
  {
    title: "Github",
    icon: "/src/assets/icons/github.svg",
  },
]);
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :socials="socials" title="Create your account" des="Start your 14-day free trial. No card required"
      >or</AuthHeader
    >

    <AuthForm :forms="forms">
      <div class="text-secondary text-sm leading-5 font-semibold flex gap-[10px]">
        <CheckBox />
        <span class="text-secondary tracking-normal"
          >I agree to the
          
          <span class="text-tertiary text-[16px] leading-6 font-semibold tracking-normal">Terms of Service</span>

          and

          <span class="text-tertiary text-[16px] leading-5 font-semibold tracking-normal">Privacy Policy</span>
        </span
        >
      </div>
    </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Dont't have an account?</span>

      <RouterLink class="text-tertiary text-[16px] leading-6 tracking-normal font-semibold" to="/register">
        Sign up
      </RouterLink>
    </div>
  </RightPanel>
</template>
