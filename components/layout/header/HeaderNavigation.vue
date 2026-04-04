<template>
  <nav class="flex flex-col lg:flex-row items-center gap-6 lg:gap-7">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.key"
      :to="localePath(link.to)"
      class="text-xl text-brand-secondary-text hover:text-brand-primary-text transition-colors uppercase tracking-wider"
    >
      {{ t(link.key) }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const navLinks = [
  { key: "nav.home", to: "/" },
  { key: "nav.about", to: "/about" },
  { key: "nav.products", to: "/products" },
  { key: "nav.menu", to: "/menu" },
  { key: "nav.locations", to: "/locations" },
];
</script>
