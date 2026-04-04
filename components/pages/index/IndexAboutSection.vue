<template>
  <section class="py-24" id="about">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12 reveal">
        <span
          class="inline-block px-3 py-1 border border-brand-red-light/25 bg-brand-red/10 text-[#ff90a5] rounded-full text-[11px] font-bold tracking-widest uppercase"
          >About</span
        >
        <h2 class="mt-4 text-4xl lg:text-5xl font-black uppercase">За Нас</h2>
      </div>

      <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-8">
        <div
          class="p-8 lg:p-12 rounded-[32px] border border-white/10 bg-gradient-to-b from-brand-red/20 to-white/5 reveal"
        >
          <img
            src="/img/logo.png"
            alt="Secret Crush logo"
            class="w-24 h-24 rounded-full border border-white/10 mb-6"
          />
          <h3 class="text-4xl font-black uppercase mb-6 leading-none">
            Secret Crush
          </h3>
          <p class="text-brand-secondary-text text-lg leading-relaxed max-w-lg">
            Secret Crush организира модерни party events и яхта партита с тъмен,
            луксозен, social-first облик. Брандът комуникира не просто събития,
            а усещане, стил и принадлежност.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="point in points"
            :key="point.title"
            class="p-8 rounded-[28px] border border-white/10 bg-white/5 hover:border-brand-red-light/40 hover:-translate-y-1 transition-all reveal"
          >
            <h4
              class="text-xl font-extrabold uppercase text-brand-primary-text"
            >
              {{ point.title }}
            </h4>
            <p class="mt-3 text-brand-secondary-text">{{ point.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const points = [
  { title: "Визия", desc: "Черно, червено, гланц и модерна poster естетика." },
  {
    title: "Анимации",
    desc: "Леки scroll reveal ефекти и плавни hover движения.",
  },
  { title: "Билети", desc: "Ясни CTA бутони към външна билетна платформа." },
  {
    title: "Мобилно",
    desc: "Оптимизирано за потребители, които купуват през телефон.",
  },
];
</script>
