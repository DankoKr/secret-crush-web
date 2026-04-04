<template>
  <div class="flex flex-col items-center">
    <div
      class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-2"
    >
      <a href="https://glovoapp.com/..." target="_blank">
        <NuxtImg src="/img/btn_gl_bg.png" alt="Glovo" class="h-10 lg:h-8" />
      </a>
      <a href="https://www.takeaway.com/..." target="_blank">
        <NuxtImg src="/img/btn_ta_bg.png" alt="Takeaway" class="h-10 lg:h-8" />
      </a>
      <a href="https://www.wolt.com/..." target="_blank">
        <NuxtImg src="/img/btn_wolt_bg.png" alt="Wolt" class="h-10 lg:h-8" />
      </a>
    </div>

    <div class="text-center leading-tight">
      <div class="flex flex-col items-center -space-y-1">
        <div
          class="font-extrabold uppercase text-brand-primary-text flex items-center gap-1"
        >
          <span class="text-xs font-bold">{{ t("layout.delivery.or") }}</span>
          <span class="text-sm font-bold">{{
            t("layout.delivery.orderByPhone")
          }}</span>
        </div>
        <a
          href="tel:070042888"
          class="text-lg font-extrabold text-[#CC0000] leading-none"
        >
          {{ t("layout.delivery.phone") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>
