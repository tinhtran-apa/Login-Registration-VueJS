<script setup>
import Button from "@/components/common/button.vue";
import Input from "@/components/common/input.vue";
import Label from "@/components/common/label.vue";

defineProps({
  forms: {
    type: Array,
    default: [],
  },
  handleSubmit: {
    type: Function,
    default: () => "",
  },
});
const model = defineModel({
  default: () => ({}),
});
</script>
<template>
  <form class="pb-5" @submit.prevent="handleSubmit">
    <template v-for="form in forms" :key="form.key">
      <div class="flex flex-col gap-1.5">
        <div class="flex justify-between items-center">
          <Label :for="form.id">{{ form.title }}</Label>
        </div>

        <Input
          v-model="model[form.id]"
          class="mb-4"
          :type="form.type"
          :id="form.id"
          :placeholder="form.placeholder"
        />
      </div>
    </template>
    <div class="flex justify-between items-center pb-5"><slot /></div>

    <Button type="submit">Sign In</Button>
  </form>
</template>
