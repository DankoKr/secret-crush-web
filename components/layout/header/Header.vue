<template>
  <header class="bg-white py-4 sticky top-0 z-10">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-16">
        <Logo class="w-24 lg:w-[150px]" />
        <HeaderNavigation class="hidden lg:flex" />
      </div>

      <div class="hidden lg:flex flex-col items-end gap-4 ml-auto">
        <NuxtLink
          v-if="otherLocale"
          :to="switchLocalePath(otherLocale.code)"
          class="text-brand-secondary-text hover:text-black cursor-pointer uppercase"
        >
          {{ otherLocale.code }}
        </NuxtLink>
        <HeaderDeliveryBadges />
      </div>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden p-2 text-brand-primary-text"
        aria-label="Toggle Menu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-6 px-4 z-40"
      >
        <div class="flex flex-col gap-6 items-center">
          <HeaderNavigation />
          <div class="flex flex-col items-center gap-4">
            <HeaderDeliveryBadges />
            <NuxtLink
              v-if="otherLocale"
              :to="switchLocalePath(otherLocale.code)"
              class="font-bold text-brand-secondary-text uppercase"
            >
              {{ otherLocale.code }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import HeaderDeliveryBadges from "./HeaderDeliveryBadges.vue";
import HeaderNavigation from "./HeaderNavigation.vue";
import Logo from "./Logo.vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const otherLocale = computed(() =>
  locales.value.find((l) => l.code !== locale.value),
);

const isMenuOpen = ref(false);

const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
