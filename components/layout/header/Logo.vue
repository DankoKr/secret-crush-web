<template>
  <NuxtLink class="flex" :to="localePath('/')">
    <NuxtImg
      src="/img/logo.png"
      alt="SecretCrush Logo"
      width="150"
      height="112"
      format="webp"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
