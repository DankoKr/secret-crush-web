export default defineNuxtPlugin(() => {
  // Check if analytics cookies are accepted
  const hasAnalyticsConsent = () => {
    if (import.meta.client) {
      const consentCookie = useCookie("ncc_e");
      const val = consentCookie.value;
      if (!val) return false;
      return val.split(/[~,]/).includes("analytics");
    }
    return false;
  };

  // Only initialize if analytics cookies are accepted
  const initGoogleAnalytics = () => {
    if (import.meta.client && hasAnalyticsConsent()) {
      const runtimeConfig = useRuntimeConfig();
      const gaId = runtimeConfig.public.gaId;
      const gtmId = runtimeConfig.public.gtmId;

      if (!window.gtag && (gaId || gtmId)) {
        // Load gtag script
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId || gaId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        gtag("js", new Date());

        // Set consent defaults
        gtag("consent", "default", {
          analytics_storage: "granted",
          ad_storage: "denied",
        });

        if (gaId) {
          gtag("config", gaId);
        }
        if (gtmId) {
          gtag("config", gtmId);
        }
      }
    }
  };

  // Initialize on plugin load
  initGoogleAnalytics();

  // Watch for cookie consent changes
  if (import.meta.client) {
    const cookieWatcher = setInterval(() => {
      if (hasAnalyticsConsent() && !window.gtag) {
        initGoogleAnalytics();
        clearInterval(cookieWatcher);
      }
    }, 1000);

    // Clean up after 30 seconds
    setTimeout(() => clearInterval(cookieWatcher), 30000);
  }

  // Provide gtag function for components
  return {
    provide: {
      gtag: (...args) => {
        if (!hasAnalyticsConsent()) {
          console.warn("[gtag] Analytics cookies not accepted");
          return;
        }

        if (import.meta.client && window.gtag) {
          window.gtag(...args);
        } else {
          console.warn("[gtag] gtag not ready yet");
        }
      },
    },
  };
});
