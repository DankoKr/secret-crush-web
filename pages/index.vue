<template>
  <main>
    <IndexHeroSection />
    <IndexEventsSection />
    <IndexYachtSection />
    <IndexAboutSection />
  </main>
</template>

<script setup lang="ts">
import IndexHeroSection from "@/components/pages/index/IndexHeroSection.vue";
import IndexEventsSection from "@/components/pages/index/IndexEventsSection.vue";
import IndexYachtSection from "~/components/pages/index/IndexYachtSection.vue";
import IndexAboutSection from "~/components/pages/index/IndexAboutSection.vue";

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
