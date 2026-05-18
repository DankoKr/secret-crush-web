<template>
  <footer class="bg-black w-full py-10 px-6 border-t border-zinc-800">
    <div class="mx-auto max-w-2xl flex flex-col items-center">
      <FooterSocials :socials="socials" />

      <p class="mt-6 text-sm text-white/60">
        © {{ year }} {{ t("layout.footer.copyright") }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterSocials from "./FooterSocials.vue";

const { t } = useI18n();
const year = new Date().getFullYear();

const socials = [
  {
    name: "TikTok",
    icon: "tiktok",
    href: "https://www.tiktok.com/@secret_crush.17?_r=1&_t=ZN-95HjNH6YLDi",
    color: "#FF325F",
  },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/secretcrush.bg/",
    color: "#FF325F",
  },
];
</script>
