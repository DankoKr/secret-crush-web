<template>
  <section v-if="yachtEvent" class="py-24" id="yacht">
    <div class="container mx-auto px-4">
      <div
        class="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl reveal"
      >
        <div
          class="order-last lg:order-none h-auto min-h-[280px] cursor-pointer"
          @click="openImage(yachtEvent?.images?.[0]?.imageUrl || '')"
        >
          <img
            :src="yachtEvent?.images?.[0]?.imageUrl"
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
            {{ yachtEvent?.name }}
          </h3>
          <div
            class="flex flex-wrap text-[#ff9fb0] text-[12px] uppercase tracking-widest"
          >
            <span>{{ yachtEvent?.location }}</span>
          </div>
          <p class="text-white">
            {{ yachtEvent?.description }}
          </p>
          <div class="flex items-center gap-3">
            <BaseButton
              :title="t('index.yacht.buttons.buyTicket')"
              variant="primary"
              size="md"
              @click="navigateTo(yachtEvent?.ticketUrl, { external: true })"
            />

            <BaseButton
              v-if="yachtEvent?.locationPinpoint"
              link
              :linkTo="yachtEvent.locationPinpoint"
              target="_blank"
              variant="secondary"
              size="md"
              class="!px-4"
              title=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </BaseButton>
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
import { useEventStore } from "~/stores/event.store";
import type { Event } from "~/types/event.types";
import BaseButton from "~/components/base/BaseButton.vue";

const { t } = useI18n();
const eventStore = useEventStore();

const yachtEvent = ref<Event | null>(null);

onMounted(async () => {
  const data = await eventStore.fetchAllYachtEvents();
  yachtEvent.value = data?.data?.items?.[0] || null;
});

const mediaItems = computed(() => {
  if (yachtEvent.value?.images && yachtEvent.value.images.length > 1) {
    return yachtEvent.value.images.slice(1).map((img, idx) => ({
      label: `${t("index.yacht.gallery.photoSlot")} ${idx + 1}`,
      src: img.imageUrl,
    }));
  }
  return [];
});

const selectedImage = ref<string | null>(null);
const isImageModalOpen = ref(false);

const openImage = (src: string) => {
  selectedImage.value = src;
  isImageModalOpen.value = true;
};
</script>
