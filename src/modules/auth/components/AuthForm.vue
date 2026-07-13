<script setup>
import Button from "@/shared/ui/components/button.vue";
import Input from "@/shared/ui/components/input.vue";
import Label from "@/shared/ui/components/label.vue";
import eyeIcon from "@/shared/assets/icons/eye.svg";
import { useSlots } from "vue";

const props = defineProps({
  forms: {
    type: Array,
    default: () => [],
  },
  submit: {
    type: String,
    default: "",
  },
  errors: {
    type: Object,
    default: () => ({}),
  },
  showErrorText: {
    type: Boolean,
    default: true,
  },
});

const model = defineModel({
  type: Object,
  default: () => ({}),
});

const slots = useSlots();

const emit = defineEmits(["submit", "clear-error", "show-password"]);

const focusError = (field) => {
  return field ? "border-red-500 focus:border-red-500 focus:outline-none" : "";
};

const showEye = (field) => {
  return field === "password" || field === "confirmPassword" ? true : false;
};
</script>
<template>
  <form class="pb-5" @submit.prevent="emit('submit')">
    <template v-for="form in props.forms" :key="form.id">
      <div class="flex flex-col gap-1.5">
        <div class="flex justify-between items-center">
          <Label :for="form.id">{{ form.title }}</Label>

          <span v-if="props.showErrorText" class="text-red-500 text-xs leading-5 tracking-normal">{{
            props.errors[form.id]
          }}</span>
        </div>

        <div class="relative">
          <Input
            v-model="model[form.id]"
            :class="['mb-4', focusError(props.errors[form.id])]"
            :type="form.type"
            :id="form.id"
            :placeholder="form.placeholder"
            :maxlength="form.maxlength"
            :pattern="form.pattern"
            :inputmode="form.inputmode"
            @input="emit('clear-error', form.id)"
          />
          <button
            v-if="showEye(form.id)"
            @click="emit('show-password', form.id)"
            type="button"
            class="absolute right-3 top-[10.5px] bg-transparent border-0"
          >
            <img :src="eyeIcon" alt="" />
          </button>
        </div>
      </div>
    </template>
    <div v-if="slots.default" class="flex justify-between items-center pb-5"><slot /></div>

    <Button type="submit">{{ props.submit }}</Button>
  </form>
</template>
