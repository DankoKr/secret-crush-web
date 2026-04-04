<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="relative flex items-center p-4 mb-4 rounded shadow-md"
      :class="typeClasses[type]"
    >
      <div class="flex-1 mr-2">
        <slot>{{ message }}</slot>
      </div>

      <FontAwesomeIcon
        :icon="faXmark"
        size="lg"
        class="cursor-pointer"
        @click="close"
      />

      <div class="absolute bottom-0 left-0 h-1 w-full">
        <div
          class="h-full transition-all duration-100 ease-linear"
          :class="progressBarColorClass"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { MessageType } from "~/types/common.types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  message?: string;
  type?: MessageType;
  timeout?: number;
  autoClose?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  message: "",
  type: MessageType.INFO,
  timeout: 5000,
  autoClose: true,
});

const emit = defineEmits(["close"]);

const visible = ref(true);
const progress = ref(100);
const intervalId = ref<number | null>(null);
const timeoutId = ref<number | null>(null);

const typeClasses = {
  success: "bg-green-100 text-green-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
};

const progressBarColorClass = computed(() => {
  switch (props.type) {
    case "success":
      return "bg-green-500";
    case "error":
      return "bg-red-500";
    case "warning":
      return "bg-yellow-500";
    case "info":
    default:
      return "bg-blue-500";
  }
});

const close = () => {
  visible.value = false;

  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }

  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value);
    timeoutId.value = null;
  }

  emit("close");
};

onMounted(() => {
  if (props.autoClose) {
    // Set up progress bar
    const stepDuration = 50; // Update progress bar every 50ms
    const steps = props.timeout / stepDuration;
    const decrementValue = 100 / steps;

    intervalId.value = window.setInterval(() => {
      progress.value = Math.max(0, progress.value - decrementValue);
    }, stepDuration);

    // Set timeout for auto-closing
    timeoutId.value = window.setTimeout(() => {
      close();
    }, props.timeout);
  }
});

onUnmounted(() => {
  // Clean up timers when component is unmounted
  if (intervalId.value !== null) {
    clearInterval(intervalId.value);
  }

  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
