<template>
  <footer class="bg-black w-full py-10 px-6 border-t border-zinc-800">
    <div class="mx-auto max-w-2xl flex flex-col items-center">
      <FooterSocials :socials="socials" />
    </div>
  </footer>
</template>
<script setup lang="ts">
import FooterSocials from "./FooterSocials.vue";

const { t } = useI18n();

const socials = [
  { name: "Facebook", icon: "facebook-f", href: "...", color: "#3B5998" },
  { name: "Instagram", icon: "instagram", href: "...", color: "#33ccff" },
  { name: "YouTube", icon: "youtube", href: "...", color: "#BD3518" },
];

const legalLinks = computed(() => [
  { label: t("layout.footer.legal.cookies"), to: "/cookies" },
  { label: t("layout.footer.legal.personalData"), to: "/personal-data" },
  { label: t("layout.footer.legal.privacyPolicy"), to: "/privacy-policy" },
  {
    label: t("layout.footer.legal.terms"),
    to: "/terms-and-conditions-plfamily",
  },
]);
</script>
