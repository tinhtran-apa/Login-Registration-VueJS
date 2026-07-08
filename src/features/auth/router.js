import DefaultLayout from "@/layouts/DefaultLayout.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.vue";
export default [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginPage,
      },
      {
        path: "register",
        name: "register",
        component: RegisterPage
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: ForgotPasswordPage
      }
    ],
  },
];
