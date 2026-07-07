export const required = (value, field) => {
    return value.trim() ? false : `${field} is required.`
}

export const invalidEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value) ? false : 'Email is invalid.'
}

export const minLenght = (value, min, field) => {
    return value.lenght >= min ? false : `${field} must be at least 8 ${min} characters.`
}

export const match = (value, target) => {
    return value == target ? false : `${target} do not match.`
}