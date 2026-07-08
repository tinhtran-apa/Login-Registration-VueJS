<script setup>
import Button from "@/components/common/button.vue";
import { computed, useSlots } from "vue";
const slots = useSlots();
const props = defineProps({
  header: {
    type: Object,
    default: () => ({}),
  },
  socials: {
    type: Array,
    default: () => [],
  },
  icon: {
    type: String,
    default: "",
  },
});
const checkSlot = computed(() => {
  return slots.default ? "" : "hidden";
});
const checkSocial = computed(() => {
  return props.socials.length > 0 ? "" : "hidden";
});
</script>

<template>
  <div v-if="props.icon" class="p-[13px] rounded-2xl bg-[#ede9fe] w-fit flex mb-5">
    <img :src="props.icon" alt="" />
  </div>
  <div class="pb-5">
    <h4 class="text-[24px] leading-8 font-bold tracking-normal">{{ props.header.title }}</h4>

    <span class="text-sm pt-1 text-secondary tracking-normal leading-5">{{ props.header.des }}</span>
  </div>

  <div :class="['flex gap-3 pb-5', checkSocial]">
    <template v-for="social in props.socials" :key="social.title">
      <Button class="!border !border-[#e5e8eb] !px-[4.96px] !py-[10px] !bg-primary gap-2">
        <img :src="social.icon" alt="" />

        <span class="text-[#111827] text-sm font-semibold text-center leading-5 tracking-normal">{{
          social.title
        }}</span>
      </Button>
    </template>
  </div>

  <div :class="['flex justify-center items-center gap-3', checkSlot]">
    <hr class="h-[1px] w-full" />

    <span class="text-xs text-secondary tracking-normal leading-5 whitespace-nowrap">
      <slot />
    </span>

    <hr class="h-[1px] w-full" />
  </div>
</template>
