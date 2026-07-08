<script setup>
const model = defineModel({
    type: Boolean,
    default: false
})
</script>
<template>
    <input v-model="model" type="checkbox">
</template>