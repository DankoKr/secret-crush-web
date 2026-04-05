<template>
  <section class="py-24" id="yacht">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12 reveal">
        <h2
          class="font-bold mt-4 text-4xl lg:text-6xl text-brand-primary-text uppercase leading-tight"
        >
          Яхта Партита
        </h2>
        <p class="mt-4 text-brand-secondary-text">
          Тази секция е по-просторна и по-визуална за вашето VIP преживяване.
        </p>
      </div>

      <div
        class="grid lg:grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl reveal"
      >
        <div class="h-[430px] lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
            alt="Yacht party"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-8 lg:p-12 flex flex-col justify-center">
          <span
            class="text-[11px] text-[#ff97ac] uppercase tracking-widest mb-2"
            >Featured Yacht Experience</span
          >
          <h3
            class="text-3xl lg:text-4xl text-brand-primary-text uppercase mb-4"
          >
            Black Sea Sunset Yacht Party
          </h3>
          <div
            class="flex flex-wrap gap-4 text-[#ff9fb0] text-[12px] uppercase tracking-widest mb-6"
          >
            <span>Всяка събота | Юли–Август</span>
            <span>Варна Марина</span>
          </div>
          <p class="text-brand-secondary-text mb-8">
            Идеална секция за основното яхта парти — с достатъчно пространство
            за VIP access и акценти.
          </p>
          <div class="flex gap-4">
            <button
              class="bg-brand-red hover:bg-brand-red px-6 py-3 rounded-full font-bold transition-all"
            >
              Купи билет
            </button>
            <button
              class="border border-white/10 bg-white/5 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Виж детайли
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div
          v-for="(item, index) in mediaItems"
          :key="index"
          class="relative group overflow-hidden rounded-[26px] border border-white/10 h-72 reveal"
        >
          <img
            :src="item.src"
            :alt="item.label"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute bottom-4 left-4 px-3.5 py-2 rounded-full bg-black/45 border border-white/10 backdrop-blur-md text-[12px] uppercase tracking-widest"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mediaItems = [
  {
    label: "Photo Slot",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Video Slot",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Photo Slot",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Video Slot",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
];
</script>
