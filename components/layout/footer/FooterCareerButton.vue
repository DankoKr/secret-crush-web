<template>
  <NuxtLink
    :to="careerLink"
    class="career-btn flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs sm:px-6 sm:py-3.5 sm:text-sm text-black shadow-sm transition-colors"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
  >
    <span class="truncate">{{ t("layout.footer.careerButton") }}</span>
    <FontAwesomeIcon
      :icon="['fas', 'id-card']"
      :class="['h-4 w-4 sm:h-5 sm:w-5 shrink-0 social-icon', spinState]"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const careerLink = computed(() => localePath("/career"));

const spinState = ref("");

function onEnter() {
  spinState.value = "spin-cw";
}

function onLeave() {
  spinState.value = "spin-ccw";
}
</script>

<style scoped>
.career-btn {
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}
@keyframes spin-clockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin-counter {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.social-icon.spin-cw {
  animation: spin-clockwise 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.social-icon.spin-ccw {
  animation: spin-counter 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
