<template>
  <main class="min-h-screen w-full flex flex-col z-0">
    <NuxtLoadingIndicator color="#009746" />
    <CursorGlow />
    <Header />
    <div class="flex-grow">
      <slot></slot>
    </div>
    <Footer />
    <ClientOnly>
      <CookieControl :locale="lang" />
    </ClientOnly>
  </main>
</template>

<script setup>
import CursorGlow from "~/components/layout/body/CursorGlow.vue";
import Header from "~/components/layout/header/Header.vue";
import Footer from "~/components/layout/footer/Footer.vue";

const { locale } = useI18n();
const lang = computed(() => String(locale.value));

useHead({
  htmlAttrs: {
    lang: lang.value,
  },
});
</script>
