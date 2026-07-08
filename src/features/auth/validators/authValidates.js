import { invalidEmail, match, minLength, accept, required } from "./rules";

export const validateLogin = (form) => {
  const errors = {};
  errors.email = required(form.email, "Email") || invalidEmail(form.email);
  errors.password = required(form.password, "Password") || minLength(form.password, 8, "Password");
  if (!errors.email && !errors.password) {
    return;
  }
  return errors;
};

export const validateRegister = (form) => {
  const errors = {};
  errors.fullName = required(form.fullName, "Full name");
  errors.email = required(form.email, "Email") || invalidEmail(form.email);
  errors.password = required(form.password, "Password") || minLength(form.password, 8, "Password");
  errors.confirmPassword =
    required(form.confirmPassword, "Confirm password") || match(form.password, form.confirmPassword, "Password");
  errors.policy = accept(form.policy);
  if (!errors.email && !errors.password && !errors.fullName && !errors.confirmPassword && !errors.policy) {
    return;
  }
  return errors;
};

export const clearError = (error, field) => {
  error[field] = "";
};
