<template>
  <div class="flex items-center gap-4">
    <a
      v-for="social in socials"
      :key="social.name"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.name"
      :style="{ '--bubble-color': social.color }"
      class="social-bubble flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-colors transform hover:bg-[var(--bubble-color)] hover:scale-110"
      @mouseenter="onEnter(social.name)"
      @mouseleave="onLeave(social.name)"
    >
      <FontAwesomeIcon
        :icon="['fab', social.icon]"
        :class="['h-5 w-5 social-icon', spinState[social.name]]"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ socials: any[] }>();

const spinState = reactive<Record<string, string>>(
  Object.fromEntries(props.socials.map((s) => [s.name, ""])),
);

function onEnter(name: string) {
  spinState[name] = "spin-cw";
}
function onLeave(name: string) {
  spinState[name] = "spin-ccw";
}
</script>

<style scoped>
@keyframes spin-clockwise {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin-counter {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.social-icon.spin-cw {
  animation: spin-clockwise 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.social-icon.spin-ccw {
  animation: spin-counter 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.social-bubble:hover .social-icon {
  color: #fff !important;
}
</style>
