<template>
  <BaseModal
    id="index-event-description-modal"
    v-model="isOpen"
    :modalTitle="event?.title ?? t('index.events.modalTitle')"
  >
    <div class="space-y-4">
      <p class="text-brand-secondary-text">{{ event?.description }}</p>

      <div
        class="flex flex-wrap gap-3 text-[#ff9fb0] text-[12px] uppercase tracking-widest"
      >
        <span>{{ event?.date }}</span>
        <span>•</span>
        <span>{{ event?.location }}</span>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "~/components/base/BaseModal.vue";

const props = defineProps<{
  modelValue: boolean;
  event: EventItem | null;
}>();

const emit = defineEmits(["update:modelValue"]);
const { t } = useI18n();

export interface EventItem {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit("update:modelValue", value),
});
</script>
