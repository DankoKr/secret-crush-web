<template>
  <div
    class="w-64 px-1 bg-white shadow-md rounded-3xl flex flex-col items-center"
  >
    <NuxtImg
      :src="imageSrc"
      :alt="altText"
      format="webp"
      class="w-[90px] h-[90px] object-contain mt-5"
    />

    <component
      :is="computedHref ? 'a' : 'p'"
      :href="computedHref"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      class="mt-4 mb-3 text-brand-green font-bold text-center max-w-[205px] break-words no-underline hover:no-underline hover:text-brand-green"
    >
      {{ text }}
    </component>

    <p v-if="description" class="mt-2 p-1 mb-8 text-center">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { NuxtImg } from "#components";
import { computed } from "vue";

const props = defineProps({
  imageSrc: String,
  altText: String,
  text: String,
  isAddress: Boolean,
  description: {
    type: String,
    required: false,
  },
});

const computedHref = computed(() => {
  if (!props.text) return null;

  if (props.isAddress) {
    return `https://www.google.com/maps/search/?q=${encodeURIComponent(
      props.text
    )}`;
  }

  if (/^\+?[0-9\s-]+$/.test(props.text)) {
    return `tel:${props.text.replace(/\s+/g, "")}`;
  }

  if (props.text.includes("@")) {
    return `mailto:${props.text}`;
  }

  return null;
});

const isExternal = computed(() => computedHref.value?.startsWith("http"));
</script>
