<template>
  <div class="flex flex-col items-center justify-center min-h-[300px]">
    <div
      class="w-10 h-10 border-4 border-brand-red border-t-brand-red rounded-full animate-spin mb-4"
    ></div>
    <p class="text-brand-primary-text">{{ t("generic.loading") }}</p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
