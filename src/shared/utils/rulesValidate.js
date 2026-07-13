export const required = (value, field) => {
  return String(value ?? "").trim() ? "" : `${field} is required.`;
};

export const invalidEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? "" : "Email is invalid.";
};

export const minLength = (value, min, field) => {
  return value.length >= min ? "" : `${field} must be at least ${min} characters.`;
};

export const match = (value, target, field) => {
  return value == target ? "" : `${field} do not match.`;
};

export const accept = (value) => {
  return value ? "" : "You must accept the policy.";
};
