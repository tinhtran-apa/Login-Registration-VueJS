<script setup>
import Button from "@/components/common/button.vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  des: {
    type: String,
    default: "",
  },
  socials: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div class="pb-5">
    <h4 class="text-[24px] leading-8 font-bold tracking-normal">{{ title }}</h4>

    <span class="text-sm pt-1 text-secondary tracking-normal leading-5">{{ des }}</span>
  </div>

  <div class="flex gap-3 pb-5">
    <template v-for="social in socials" :key="social.key">
      <Button
        class="!border !border-[#e5e8eb] !px-[4.96px] !py-[10px] !bg-primary gap-2"
      >
        <img :src="social.icon" alt="" />

        <span class="text-[#111827] text-sm font-semibold text-center leading-5 tracking-normal"
          >{{ social.title }}</span
        >
      </Button>
    </template>
  </div>

  <div class="flex justify-center items-center gap-3">
    <hr class="h-[1px] w-full" />

    <span class="text-xs text-secondary tracking-normal leading-5 whitespace-nowrap">
      <slot />
    </span>

    <hr class="h-[1px] w-full" />
  </div>
</template>
