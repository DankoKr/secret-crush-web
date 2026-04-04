<template>
  <NuxtLink class="flex" :to="localePath('/')">
    <NuxtImg src="/img/logo.png" alt="SecretCrush Logo" format="webp" />
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
