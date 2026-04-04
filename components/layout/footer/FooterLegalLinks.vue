<template>
  <nav
    class="flex flex-wrap sm:flex-nowrap justify-center items-center gap-x-3 text-sm text-black overflow-x-auto"
  >
    <template v-for="(link, i) in links" :key="link.to">
      <NuxtLink
        :to="localePath(link.to)"
        class="underline transition-colors whitespace-nowrap"
      >
        {{ link.label }}
      </NuxtLink>
      <span
        v-if="i < links.length - 1"
        class="text-brand-secondary-text select-none"
        >|</span
      >
    </template>
  </nav>
</template>
<script setup lang="ts">
defineProps<{ links: { label: string; to: string }[] }>();
const localePath = useLocalePath();
</script>
