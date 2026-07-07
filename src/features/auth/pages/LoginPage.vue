<script setup lang="ts">
import { reactive, ref } from "vue";
import AuthForm from "../components/AuthForm.vue";
import LeftPanel from "../components/LeftPanel.vue";
import RightPanel from "../components/RightPanel.vue";
import AuthHeader from "../components/AuthHeader.vue";
import { RouterLink } from "vue-router";
import CheckBox from "@/components/common/checkbox.vue";

const forms = ref([
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
]);

const socials = ref([
  {
    title: "Continue with Google",
    icon: "/src/assets/icons/google.svg",
  },
  {
    title: "Continue with Github",
    icon: "/src/assets/icons/github.svg",
  },
]);

const formSubmit = reactive({ email: "", password: "" });

const handleSubmit = () => {
  console.log(formSubmit);
};
</script>

<template>
  <LeftPanel />

  <RightPanel>
    <AuthHeader :socials="socials" title="Welcome Back" des="Sign in to continue to your workspace"
      >or sign in with email</AuthHeader
    >

    <AuthForm :forms="forms" :formSubmit="formSubmit" :handleSubmit="handleSubmit">
      <div class="text-secondary text-sm leading-5 font-semibold flex gap-[10px]">
        <CheckBox />

        <span class="text-secondary tracking-normal">Remember me</span>
      </div>
      
      <RouterLink to="/forgot-password" class="text-tertiary text-sm leading-5 font-semibold tracking-normal"
        >Forgot your password ?</RouterLink
      >
    </AuthForm>

    <div class="flex justify-center items-center gap-[1.66px]">
      <span class="text-sm text-secondary leading-5 tracking-normal">Dont't have an account?</span>

      <RouterLink class="text-tertiary text-[16px] leading-6 tracking-normal font-semibold" to="/register">
        Sign up
      </RouterLink>
    </div>
  </RightPanel>
</template>
