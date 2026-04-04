<template>
  <footer class="bg-brand-yellow w-full py-10 px-6">
    <div class="mx-auto max-w-2xl flex flex-col items-center gap-5">
      <FooterSocials :socials="socials" />
      <FooterCareerButton />
      <p class="text-center text-xl text-brand-primary-text">
        {{ t("layout.footer.contactText") }}
        <a
          href="mailto:help@SecretCrush.bg"
          class="font-bold hover:underline text-black"
          >help@SecretCrush.bg</a
        >
      </p>
      <FooterLegalLinks :links="legalLinks" />
      <p class="text-white font-bold">
        {{ t("layout.footer.poweredBy") }}
        <a
          href="https://outcon.eu/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-brand-primary-text transition-colors"
          >outcon.eu</a
        >
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import FooterSocials from "./FooterSocials.vue";
import FooterCareerButton from "./FooterCareerButton.vue";
import FooterLegalLinks from "./FooterLegalLinks.vue";

const { t, locale } = useI18n();

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
