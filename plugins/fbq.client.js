function waitForFbq(callback, retries = 10, delay = 300) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    callback(window.fbq);
  } else if (retries > 0) {
    setTimeout(() => waitForFbq(callback, retries - 1, delay), delay);
  } else {
    console.warn("fbq not available after waiting");
  }
}

export default defineNuxtPlugin(() => {
  // Check if marketing cookies are accepted
  const hasMarketingConsent = () => {
    if (import.meta.client) {
      const consentCookie = useCookie("ncc_e");
      const val = consentCookie.value;
      if (!val) return false;
      return val.split(/[~,]/).includes("marketing");
    }
    return false;
  };

  // Stub function that respects cookie consent
  let fbqImpl = (...args) => {
    if (!hasMarketingConsent()) {
      console.warn("[fbq] Marketing cookies not accepted");
      return;
    }
    console.warn("[fbq] not ready yet", args);
  };

  // Wrapper that always calls the current implementation
  const fbqStub = (...args) => fbqImpl(...args);

  // Only initialize if marketing cookies are accepted
  const initFacebookPixel = () => {
    if (import.meta.client && hasMarketingConsent()) {
      const runtimeConfig = useRuntimeConfig();
      const pixelId = runtimeConfig.public.metaPixelId;

      if (!window.fbq && pixelId) {
        // Facebook Pixel initialization
        !(function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod
              ? n.callMethod.apply(n, arguments)
              : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(
          window,
          document,
          "script",
          "https://connect.facebook.net/en_US/fbevents.js",
        );

        window.fbq("init", pixelId);
        window.fbq("track", "PageView");

        // Update implementation to use real fbq
        waitForFbq((fbq) => {
          fbqImpl = (...args) => {
            if (hasMarketingConsent()) {
              fbq(...args);
            } else {
              console.warn("[fbq] Marketing cookies not accepted");
            }
          };
        });
      }
    }
  };

  // Initialize on plugin load
  initFacebookPixel();

  // Watch for cookie consent changes
  if (import.meta.client) {
    const cookieWatcher = setInterval(() => {
      if (hasMarketingConsent() && !window.fbq) {
        initFacebookPixel();
        clearInterval(cookieWatcher);
      }
    }, 1000);

    // Clean up after 30 seconds
    setTimeout(() => clearInterval(cookieWatcher), 30000);
  }

  // Helper functions that respect cookie consent
  const initiateCheckout = (products, total, currency) => {
    if (!hasMarketingConsent()) {
      console.warn(
        "[fbq] Marketing cookies not accepted - InitiateCheckout not tracked",
      );
      return;
    }
    fbqStub("track", "InitiateCheckout", {
      content_ids: products.map((p) => p.cartableId),
      content_type: "product",
      value: total,
      currency: currency,
    });
  };

  const purchase = (order, currency) => {
    if (!hasMarketingConsent()) {
      console.warn(
        "[fbq] Marketing cookies not accepted - Purchase not tracked",
      );
      return;
    }
    fbqStub("track", "Purchase", {
      currency: currency,
      value: order.price,
      content_ids: order.items.map((p) => p.itemableId),
      content_type: "product",
      contents: order.items.map((p) => ({
        id: p.itemableId,
        quantity: p.quantity,
      })),
    });
  };

  const addToCart = (product, qty, currency) => {
    if (!product) {
      console.warn("[fbq] addToCart called without product");
      return;
    }

    if (!hasMarketingConsent()) {
      console.warn(
        "[fbq] Marketing cookies not accepted - AddToCart not tracked",
      );
      return;
    }

    const quantity = qty ? parseFloat(qty) : 1;

    const eventData = {
      content_ids: [product.id],
      content_name: product.name,
      content_type: "product",
      value: product.price,
      quantity: quantity,
      currency: currency,
    };

    fbqStub("track", "AddToCart", eventData);
  };

  const viewContent = (product, currency) => {
    if (!product) {
      return;
    }
    if (!hasMarketingConsent()) {
      console.warn(
        "[fbq] Marketing cookies not accepted - ViewContent not tracked",
      );
      return;
    }
    fbqStub("track", "ViewContent", {
      content_ids: [product.id],
      content_name: product.name,
      content_type: "product",
      value: product.price,
      currency: currency,
    });
  };

  return {
    provide: {
      fbq: {
        initiateCheckout,
        purchase,
        addToCart,
        viewContent,
        // Also provide raw fbq access for custom events
        track: (event, parameters) => {
          if (!hasMarketingConsent()) {
            console.warn(
              `[fbq] Marketing cookies not accepted - ${event} not tracked`,
            );
            return;
          }
          fbqStub("track", event, parameters);
        },
      },
    },
  };
});
