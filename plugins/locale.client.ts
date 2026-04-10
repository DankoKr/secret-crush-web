import type { Locale } from "~/types/common.types";

export default defineNuxtPlugin((nuxtApp) => {
  const { locale } = nuxtApp.$i18n as { locale: Ref<string> };
  const globalLocale = useState<Locale>("global-locale");

  watch(locale, (newLocale) => {
    globalLocale.value = newLocale as Locale;
  });
});
