<template>
  <header
    class="bg-black text-brand-primary-text sticky top-0 z-50 border-b border-zinc-800"
  >
    <div class="container mx-auto flex items-center gap-4 px-4 py-4">
      <div class="flex items-center gap-3">
        <Logo class="h-10 w-auto" />
        <div class="hidden md:flex flex-col leading-tight">
          <span class="text-base font-semibold uppercase">Secret Crush</span>
          <span class="text-sm text-brand-secondary-text">
            Party Events & Yacht Parties
          </span>
        </div>
      </div>

      <div class="hidden lg:flex items-center gap-8 ml-auto">
        <HeaderNavigation />
        <div class="flex items-center">
          <NuxtLink
            v-if="otherLocale"
            :to="switchLocalePath(otherLocale.code)"
            class="text-brand-secondary-text hover:text-brand-primary-text uppercase"
          >
            {{ otherLocale.code }}
          </NuxtLink>
        </div>
      </div>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="lg:hidden p-2 text-brand-primary-text ml-auto"
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
        class="lg:hidden absolute inset-x-0 top-full bg-zinc-950/97 border-b border-zinc-800 shadow-xl z-40"
      >
        <div class="flex flex-col gap-6 px-4 py-6">
          <HeaderNavigation />
          <div class="flex justify-center">
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
import { ref, computed, watch } from "vue";
import HeaderNavigation from "./HeaderNavigation.vue";
import Logo from "./Logo.vue";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

const otherLocale = computed(() =>
  locales.value.find((l) => l.code !== locale.value),
);
const isMenuOpen = ref(false);

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
