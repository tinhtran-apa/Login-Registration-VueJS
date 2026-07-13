export const showPassword = (forms, field) => {
  const form = forms.find((form) => form.id === field);

  if (!form) return;

  form.type = form.type === "password" ? "text" : "password";
};
