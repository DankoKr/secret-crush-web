<template>
  <main></main>
</template>

<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: t("index.head.title"),
  meta: [
    { name: "description", content: t("index.head.description") },
    { property: "og:title", content: t("index.head.ogTitle") },
    { property: "og:description", content: t("index.head.ogDescription") },
    { property: "og:image", content: "/img/og-image.png" },
  ],
});
</script>
