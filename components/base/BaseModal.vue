<template>
  <teleport to="body">
    <Transition name="fade" appear :persisted="false" mode="out-in">
      <div
        v-if="modelValue"
        :id="id"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-6"
        role="dialog"
      >
        <div
          class="w-full max-w-[var(--bs-modal-width)] rounded-[34px] border border-white/10 bg-black/90 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          :style="{ '--bs-modal-width': width }"
        >
          <div
            class="flex justify-between items-center p-6 border-b border-white/10"
          >
            <h3 class="text-3xl font-black text-brand-primary-text">
              {{ modalTitle }}
            </h3>

            <button
              class="p-3 text-brand-secondary-text rounded-2xl hover:bg-white/10 hover:text-brand-primary-text transition"
              aria-label="Close modal"
              title="Close modal"
              @click="closeModal"
            >
              <svg :d="mdiClose" class="w-5 h-5" viewBox="0 0 24 24">
                <path :d="mdiClose" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div class="p-6">
            <div class="space-y-4">
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
