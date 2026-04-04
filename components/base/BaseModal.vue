<template>
  <teleport to="body">
    <Transition name="fade" appear :persisted="false" mode="out-in">
      <div
        v-if="modelValue"
        :id="id"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        role="dialog"
      >
        <div
          class="bg-white rounded-2xl shadow-xl w-full max-w-[var(--bs-modal-width)]"
          :style="{ '--bs-modal-width': width }"
        >
          <div class="flex justify-between items-center p-3 border-b">
            <h3 class="text-2xl">{{ modalTitle }}</h3>

            <button
              class="p-2 text-gray-400 hover:text-brand-secondary-text cursor-pointer rounded-lg hover:bg-gray-100"
              aria-label="Close modal"
              title="Close modal"
              @click="closeModal"
            >
              <svg :d="mdiClose" class="w-5 h-5" viewBox="0 0 24 24">
                <path :d="mdiClose" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div class="p-4">
            <div class="space-y-1">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup lang="ts">
import { mdiClose } from "@mdi/js";

const emit = defineEmits(["update:modelValue"]);

interface Props {
  id: string;
  modelValue: boolean;
  staticBackdrop?: boolean;
  modalTitle?: string;
  width?: string;
}

withDefaults(defineProps<Props>(), {
  width: "500px",
});

const closeModal = () => {
  emit("update:modelValue", false);
};
</script>
