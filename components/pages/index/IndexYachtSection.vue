<template>
  <section class="py-24" id="yacht">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12 reveal">
        <h2
          class="font-bold mt-4 text-4xl lg:text-6xl text-brand-primary-text uppercase leading-tight"
        >
          {{ t("index.yacht.title") }}
        </h2>
      </div>

      <div
        class="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl reveal"
      >
        <div
          class="order-last lg:order-none h-auto min-h-[280px] cursor-pointer"
          @click="openImage(mainImageSrc)"
        >
          <img
            :src="mainImageSrc"
            alt="Yacht party"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6 lg:p-12 flex flex-col justify-center gap-6">
          <span
            class="text-[11px] text-[#ff97ac] uppercase tracking-widest mb-2"
          >
            {{ t("index.yacht.featuredLabel") }}
          </span>
          <h3
            class="font-bold text-3xl lg:text-4xl text-brand-primary-text uppercase mb-4"
          >
            {{ t("index.yacht.featuredTitle") }}
          </h3>
          <div
            class="flex flex-wrap gap-4 text-[#ff9fb0] text-[12px] uppercase tracking-widest mb-6"
          >
            <span>{{ t("index.yacht.schedule") }}</span>
            <span>{{ t("index.yacht.location") }}</span>
          </div>
          <p class="mb-5 text-white">{{ t("index.yacht.description") }}</p>
          <div class="flex gap-4">
            <BaseButton
              :title="t('index.yacht.buttons.buyTicket')"
              variant="primary"
              size="md"
            />
            <BaseButton
              :title="t('index.yacht.buttons.viewDetails')"
              variant="secondary"
              size="md"
            />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div
          v-for="(item, index) in mediaItems"
          :key="index"
          @click="openImage(item.src)"
          class="relative group overflow-hidden rounded-[26px] border border-white/10 h-72 reveal cursor-pointer"
        >
          <img
            :src="item.src"
            :alt="item.label"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>

    <div
      v-if="isImageModalOpen"
      @click.self="isImageModalOpen = false"
      class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    >
      <img
        v-if="selectedImage"
        :src="selectedImage"
        alt="Preview"
        class="max-h-[90vh] max-w-full object-contain rounded-3xl"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton.vue";

const { t } = useI18n();

const mediaItems = computed(() => [
  {
    label: t("index.yacht.gallery.photoSlot"),
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: t("index.yacht.gallery.videoSlot"),
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: t("index.yacht.gallery.photoSlot"),
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: t("index.yacht.gallery.videoSlot"),
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
]);

const selectedImage = ref<string | null>(null);
const isImageModalOpen = ref(false);

const openImage = (src: string) => {
  selectedImage.value = src;
  isImageModalOpen.value = true;
};

const mainImageSrc = computed(() => {
  return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80";
});
</script>
