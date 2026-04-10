export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    const observerOptions = {
      root: null,
      threshold: 0.3,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    const router = useRouter();
    router.afterEach(() => {
      setTimeout(() => {
        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach((el) => observer.observe(el));
      }, 100);
    });
  });
});
