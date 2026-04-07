<template>
  <section class="py-32" id="events">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2
          class="font-bold text-4xl lg:text-5xl text-brand-primary-text uppercase"
        >
          {{ t("index.events.title") }}
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="event in events"
          :key="event.title"
          class="group rounded-[30px] overflow-hidden border border-white/10 bg-white/5 hover:border-brand-red/40 hover:-translate-y-1.5 transition-all"
        >
          <div class="relative">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-full h-72 object-cover"
            />
          </div>
          <div class="p-6">
            <div
              class="flex gap-3 text-[#ff9fb0] text-[12px] uppercase tracking-widest"
            >
              <span>{{ event.date }}</span>
              <span>•</span>
              <span>{{ event.location }}</span>
            </div>
            <h3
              class="mt-4 text-2xl font-bold text-brand-primary-text uppercase leading-tight"
            >
              {{ event.title }}
            </h3>
            <p class="mt-3 text-brand-secondary-text">
              {{ event.description }}
            </p>
            <div class="flex gap-3 mt-6">
              <BaseButton
                :title="t('index.events.buttons.buyTicket')"
                variant="primary"
                size="sm"
              />
              <BaseButton
                :title="t('index.events.buttons.moreInfo')"
                variant="secondary"
                size="sm"
                @click="openEventDescription(event)"
              />
            </div>
          </div>
        </article>
      </div>
    </div>

    <IndexEventDescriptionModal
      v-model="isEventModalOpen"
      :event="selectedEvent"
    />
  </section>
</template>

<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton.vue";
import type { EventItem } from "~/components/pages/index/IndexEventDescriptionModal.vue";
import IndexEventDescriptionModal from "~/components/pages/index/IndexEventDescriptionModal.vue";

const { t } = useI18n();

const events = computed(() => [
  {
    title: t("index.events.items.backToSummer.title"),
    date: t("index.events.items.backToSummer.date"),
    location: t("index.events.items.backToSummer.location"),
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    description: t("index.events.items.backToSummer.description"),
  },
  {
    title: t("index.events.items.midnightHeat.title"),
    date: t("index.events.items.midnightHeat.date"),
    location: t("index.events.items.midnightHeat.location"),
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    description: t("index.events.items.midnightHeat.description"),
  },
  {
    title: t("index.events.items.redKissRooftop.title"),
    date: t("index.events.items.redKissRooftop.date"),
    location: t("index.events.items.redKissRooftop.location"),
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    description: t("index.events.items.redKissRooftop.description"),
  },
]);

const selectedEvent = ref<EventItem | null>(null);
const isEventModalOpen = ref(false);

const openEventDescription = (event: EventItem) => {
  selectedEvent.value = event;
  isEventModalOpen.value = true;
};
</script>
