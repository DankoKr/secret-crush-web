export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:suspense:resolve", () => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const scan = () => {
      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));
    };

    scan();

    const router = useRouter();
    router.afterEach(() => {
      nextTick(() => scan());
    });
  });
});
