<template>
  <div
    class="p-5 rounded-2xl border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md flex flex-col justify-between min-h-[125px]"
  >
    <div>
      <slot name="icon"></slot>

      <span
        class="block text-[10px] font-bold uppercase tracking-widest text-white/40"
      >
        {{ label }}
      </span>
      <strong
        class="block mt-1 text-lg font-black tracking-tight text-brand-primary-text uppercase"
      >
        {{ value || "..." }}
      </strong>
    </div>

    <span
      class="block mt-1 text-[11px] font-bold uppercase tracking-wide text-brand-red"
    >
      {{ subtext }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value?: string;
  subtext: string;
}>();
</script>
