<template>
  <div class="flex justify-center mt-10 mb-10">
    <div class="relative inline-block">
      <div
        class="absolute border-2 border-black z-0"
        :class="borderClasses"
      ></div>

      <NuxtImg
        :src="src"
        :alt="alt"
        format="webp"
        class="relative z-10 w-[504px] h-[440px] object-cover translate-x-3 translate-y-9"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  src: string;
  alt?: string;
  missingBorderSide?: "top" | "right" | "bottom" | "left";
}>();

const alt = props.alt ?? "Image";
const missingBorderSide = props.missingBorderSide ?? "right";

const borderClasses = computed(() => {
  const baseClasses =
    "absolute top-8 left-0 bottom-0 border-2 border-black -translate-x-4 -translate-y-10 w-[calc(100%+4rem)] h-[calc(100%+1rem)] z-0";

  const borderRemovalMap: Record<string, string> = {
    top: "border-t-0",
    right: "border-r-0",
    bottom: "border-b-0",
    left: "border-l-0",
  };

  return `${baseClasses} ${
    borderRemovalMap[missingBorderSide] || "border-r-0"
  }`;
});
</script>
