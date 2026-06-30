<template>
  <section class="py-32" id="events">
    <div class="container mx-auto px-4 reveal">
      <div v-if="eventStore.loading" class="text-center text-white">
        {{ t("generic.loading") }}
      </div>

      <div v-else class="grid md:grid-cols-3 gap-6">
        <article
          v-for="event in eventStore.getEvents"
          :key="event.id"
          class="group rounded-[30px] overflow-hidden border border-white/10 bg-white/5 hover:border-brand-red/40 hover:-translate-y-1.5 transition-all"
        >
          <div class="relative">
            <img
              :src="event.images?.[0]?.imageUrl || 'placeholder-image-url'"
              :alt="event.name"
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
              {{ event.name }}
            </h3>
            <div class="flex gap-3 mt-6">
              <BaseButton
                :title="t('index.events.buttons.buyTicket')"
                variant="primary"
                size="sm"
                @click="onTicketClick(event)"
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

    <BaseModal
      id="coming-soon-modal"
      v-model="isComingSoonModalOpen"
      :modalTitle="t('index.events.comingSoon.title')"
    >
      <div class="text-center py-6">
        <p class="text-brand-secondary-text text-lg">
          {{ t("index.events.comingSoon.message") }}
        </p>
      </div>
    </BaseModal>
  </section>
</template>

<script setup lang="ts">
import type { Event } from "~/types/event.types";
import BaseButton from "~/components/base/BaseButton.vue";
import BaseModal from "~/components/base/BaseModal.vue";
import IndexEventDescriptionModal from "./IndexEventDescriptionModal.vue";

const { t } = useI18n();
const eventStore = useEventStore();

const selectedEvent = ref<Event | null>(null);
const isEventModalOpen = ref(false);
const isComingSoonModalOpen = ref(false);

onMounted(() => {
  if (!eventStore.getEvents.length) {
    eventStore.fetchAllEvents({ type: "normal" });
  }
});

const openEventDescription = (event: Event) => {
  selectedEvent.value = event;
  isEventModalOpen.value = true;
};

const onTicketClick = (event: Event) => {
  if (event.ticketUrl) {
    navigateTo(event.ticketUrl, { external: true });
  } else {
    isComingSoonModalOpen.value = true;
  }
};
</script>
