import type { Locale } from "~/types/common.types";

export default defineNuxtPlugin(async (nuxtApp) => {
  const i18n = nuxtApp.$i18n as {
    locale: { value: string };
    setLocale: (locale: string) => Promise<void>;
  };

  useState<Locale>("global-locale", () => i18n.locale.value as Locale);
});
