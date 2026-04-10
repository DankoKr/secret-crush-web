<template>
  <nav class="flex flex-col lg:flex-row items-center gap-6 lg:gap-7">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.key"
      :to="localePath({ path: '/', hash: link.to })"
      class="text-xl text-brand-secondary-text hover:text-brand-primary-text transition-colors tracking-wider cursor-pointer"
    >
      {{ t(link.key) }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const navLinks = [
  { key: "nav.events", to: "#events" },
  { key: "nav.yacht", to: "#yacht" },
  { key: "nav.about", to: "#about" },
  { key: "nav.contacts", to: "#contact" },
];
</script>
