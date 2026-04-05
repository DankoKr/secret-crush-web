import { Locale } from "./types/common.types";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-10",
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxt/image",
    "@dargmuesli/nuxt-cookie-control",
  ],
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "fMQad7HMzz3U0qbtumETBAz0tqbsHqJ2Div-x6_zx90",
        },
      ],
    },
  },
  i18n: {
    langDir: "locales",
    lazy: true,
    locales: [
      { code: Locale.EN, name: "English", file: "en.json" },
      { code: Locale.BG, name: "Български", file: "bg.json" },
    ],
    defaultLocale: Locale.BG,
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
    },
  },
  cookieControl: {
    barPosition: "bottom-full",
    closeModalOnClickOutside: true,
    isControlButtonEnabled: true,
    colors: {
      barBackground: "#FF325F",
      barButtonBackground: "#333333",
      barButtonColor: "#ffffff",
      barButtonHoverBackground: "#ffffff",
      barButtonHoverColor: "#CC1C22",
      barTextColor: "#333333",
      modalBackground: "#ffffff",
      modalButtonBackground: "#FF325F",
      modalButtonColor: "#ffffff",
      modalButtonHoverBackground: "#333333",
      modalButtonHoverColor: "#ffffff",
      modalOverlay: "#000000",
      modalOverlayOpacity: 0.8,
      modalTextColor: "#333333",
      modalUnsavedColor: "#FF2121",
      checkboxActiveBackground: "#FF325F",
      checkboxInactiveBackground: "#e5e7eb",
      controlButtonBackground: "#333333",
      controlButtonHoverBackground: "#FF325F",
      controlButtonIconColor: "#ffffff",
    },
    cookies: {
      necessary: [
        {
          id: "necessary",
          name: {
            en: "Default Cookies",
            bg: "Задължителни бисквитки",
          },
          description: {
            en: "These cookies are essential for the website to function properly.",
            bg: "Тези бисквитки са необходими за правилното функциониране на сайта.",
          },
          targetCookieIds: ["i18n_redirected", "ncc_c", "ncc_e"],
        },
      ],
      optional: [
        {
          name: {
            en: "Analytics Cookies",
            bg: "Бисквитки за анализ",
          },
          description: {
            en: "These cookies help us understand how visitors interact with our website.",
            bg: "Тези бисквитки ни помагат да разберем как посетителите взаимодействат с нашия сайт.",
          },
          targetCookieIds: ["_ga", "_ga_*", "_gid", "_gat", "_gtag_*"],
          id: "analytics",
        },
        {
          name: {
            en: "Marketing Cookies",
            bg: "Маркетингови бисквитки",
          },
          description: {
            en: "These cookies are used to track visitors across websites for marketing purposes.",
            bg: "Тези бисквитки се използват за проследяване на посетителите в различни сайтове за маркетингови цели.",
          },
          targetCookieIds: ["_fbp", "_fbc", "fbq", "tr"],
          id: "marketing",
        },
      ],
    },
    locales: [Locale.EN, Locale.BG],
    localeTexts: {
      en: {
        bannerTitle: "Cookie Settings",
        bannerDescription:
          'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
        acceptAll: "Accept All",
        manageCookies: "Manage Cookies",
        save: "Save Settings",
        cookiesFunctional: "Functional",
        cookiesOptional: "Optional",
        cookiesNecessary: "Necessary",
        settingsUnsaved: "You have unsaved settings!",
      },
      bg: {
        bannerTitle: "Настройки за бисквитки",
        bannerDescription:
          'Използваме бисквитки за подобряване на вашето сърфиране и анализ на трафика. Кликвайки "Приеми", вие се съгласявате с използването на бисквитки.',
        acceptAll: "Приеми всички",
        manageCookies: "Управление на бисквитки",
        save: "Запази настройките",
        cookiesFunctional: "Функционални",
        cookiesOptional: "Опционални",
        cookiesNecessary: "Задължителни",
        settingsUnsaved: "Имате незапазени настройки!",
      },
    },
  },
  sitemap: {
    // @ts-expect-error because of the type error in nuxt-sitemap
    siteUrl: process.env.NUXT_SITE_URL,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl:
        process.env.NUXT_PUBLIC_API_BASE_URL || "https://dev.plfamilyapp.com/",
      recaptchaKey: "123",
      gaId: process.env.NUXT_PUBLIC_GA_ID,
      gtmId: process.env.NUXT_PUBLIC_GTM_ID,
      instagramToken: process.env.NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN,
      econtShopUrl: process.env.NUXT_PUBLIC_ECONT_SHOP_URL,
      econtKey: process.env.NUXT_PUBLIC_ECONT_PRIVATE_KEY,
      paypalClientId: process.env.NUXT_PUBLIC_PAYPAL_CLIENT_ID,
      metaPixelId: process.env.NUXT_PUBLIC_META_PIXEL_ID,
      apiHeaderId: process.env.NUXT_PUBLIC_API_HEADER_ID,
    },
  },
  css: ["~/assets/scss/main.scss"],
  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
    configPath: "tailwind.config.js",
    exposeConfig: true,
    viewer: true,
  },
  plugins: [
    "~/plugins/splide.client.ts",
    "~/plugins/fbq.client.js",
    "~/plugins/gtag.client.js",
  ],
});
