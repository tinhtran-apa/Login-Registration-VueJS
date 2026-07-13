<script setup>
import Button from "@/shared/ui/components/button.vue";
import Input from "@/shared/ui/components/input.vue";

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


const emit = defineEmits(["submit","clear-error"]);

const handleInput = (form, event) => {
  emit("clear-error", form.id);
  if (!form.isOtp) return;
  const value = event.target.value;
  if (value) {
    const inputs = event.target.closest("form").querySelectorAll("input");
    let nextInput = null;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === event.target) {
        nextInput = inputs[i + 1];
        break;
      }
    }
    if (nextInput) {
      nextInput.focus();
    }
  }
};

const handleBackSpace = (form, event) => {
  emit("clear-error", form.id);
  if (!form.isOtp) return;
  const value = event.target.value;
  if (!value) {
    const inputs = event.target.closest("form").querySelectorAll("input");
    let prevInput = null;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i] === event.target) {
        prevInput = inputs[i - 1];
        break;
      }
    }
    if (prevInput) {
      prevInput.focus();
    }
  }
};

const focusError = (field) => {
  return field ? "border-red-500 focus:border-red-500 focus:outline-none" : "";
};

</script>
<template>
  <form class="pb-5" @submit.prevent="emit('submit')">
    <div class="grid grid-cols-6 gap-2">
      <template v-for="form in props.forms" :key="form.id">
        <div class="flex flex-col">
          <Input
            v-model="model[form.id]"
            :class="['mb-4 h-[48px] text-center', focusError(props.errors[form.id])]"
            :type="form.type"
            :id="form.id"
            :placeholder="form.placeholder"
            :maxlength="form.maxlength"
            :pattern="form.pattern"
            :inputmode="form.inputmode"
            @input="handleInput(form, $event)"
            @keyup.backspace="handleBackSpace(form, $event)"
          />
        </div>
      </template>
    </div>
    <Button type="submit">{{ props.submit }}</Button>
  </form>
</template>
