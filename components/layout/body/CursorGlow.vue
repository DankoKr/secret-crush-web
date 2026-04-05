<template>
  <div
    ref="glowRef"
    class="pointer-events-none fixed left-0 top-0 z-0 h-[250px] w-[250px] opacity-100 will-change-transform"
    style="
      background: radial-gradient(
        circle,
        rgba(255, 50, 95, 0.3) 0%,
        transparent 70%
      );
    "
  ></div>
</template>

<script setup lang="ts">
const glowRef = shallowRef<HTMLElement | null>(null);

const moveGlow = (e: MouseEvent) => {
  if (!glowRef.value) return;
  requestAnimationFrame(() => {
    if (glowRef.value) {
      glowRef.value.style.transform = `translate3d(${e.clientX - 125}px, ${e.clientY - 125}px, 0)`;
    }
  });
};

onMounted(() => {
  window.addEventListener("mousemove", moveGlow);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", moveGlow);
});
</script>
