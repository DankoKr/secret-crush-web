<template>
  <BaseModal
    id="index-event-description-modal"
    v-model="isOpen"
    :modalTitle="event?.name || ''"
  >
    <div v-if="event" class="space-y-4">
      <p class="text-brand-secondary-text">{{ event.description }}</p>

      <div
        class="flex flex-wrap gap-3 text-[#ff9fb0] text-[12px] uppercase tracking-widest"
      >
        <span>{{ event.date }}</span>
        <span>•</span>
        <span>{{ event.location }}</span>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from "~/components/base/BaseModal.vue";
import type { Event } from "~/types/event.types";

const props = defineProps<{
  modelValue: boolean;
  event: Event | null;
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit("update:modelValue", value),
});
</script>
