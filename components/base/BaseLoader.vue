<template>
  <div
    class="flex flex-col items-center justify-center"
    :class="[fullHeight ? 'min-h-[300px]' : 'h-full w-full']"
  >
    <div
      class="border-4 border-brand-red/20 border-t-brand-red rounded-full animate-spin mb-4"
      :class="[sizeClasses[size]]"
    ></div>
    <p v-if="showText" class="text-brand-primary-text">
      {{ t("generic.loading") }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

interface Props {
  size?: "sm" | "md" | "lg";
  fullHeight?: boolean;
  showText?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  fullHeight: true,
  showText: true,
});

const sizeClasses = {
  sm: "w-6 h-6 border-2",
  md: "w-10 h-10 border-4",
  lg: "w-16 h-16 border-4",
};
</script>
