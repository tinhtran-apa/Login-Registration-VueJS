import { invalidEmail, minLenght, required } from "./rules"

export const validateLogin = (form) => {
    const errors = {}
    errors.email = required(form.email) || invalidEmail(form.email);
    errors.password = required(form.password) || minLenght(form.password, 8)
    if(!errors.email || !errors.password) {
        return false
    }
}