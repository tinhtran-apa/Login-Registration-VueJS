import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LoginPage from "@/modules/auth/views/LoginPage.vue";
import RegisterPage from "@/modules/auth/views/RegisterPage.vue";
import ForgotPasswordPage from "@/modules/auth/views/ForgotPasswordPage.vue";
import ResetPasswordPage from "@/modules/auth/views/ResetPasswordPage.vue";
import VerifyEmailPage from "@/modules/auth/views/VerifyEmailPage.vue";
import SuccessPage from "@/modules/auth/views/SuccessPage.vue";
import { ROUTES } from "@/modules/auth/constants/routes.js";
export default [
  {
    path: "/",
    redirect: ROUTES.LOGIN,
    component: DefaultLayout,
    children: [
      {
        path: ROUTES.LOGIN,
        name: "login",
        component: LoginPage,
      },
      {
        path: ROUTES.REGISTER,
        name: "register",
        component: RegisterPage,
      },
      {
        path: ROUTES.FORGOT_PASSWORD,
        name: "forgot-password",
        component: ForgotPasswordPage,
      },
      {
        path: ROUTES.RESET_PASSWORD,
        name: "reset-password",
        component: ResetPasswordPage,
      },
      {
        path: ROUTES.VERIFY_EMAIL,
        name: "verify-email-password",
        component: VerifyEmailPage,
      },
      {
        path: ROUTES.SUCCESS,
        name: "success",
        component: SuccessPage,
      },
    ],
  },
];
