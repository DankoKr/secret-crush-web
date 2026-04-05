<template>
  <section class="relative min-h-screen flex items-center pt-20" id="home">
    <div
      class="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/45 to-[#070707ef] bg-[radial-gradient(circle_at_top_left,rgba(255,51,95,0.14),transparent_30%)]"
    ></div>

    <div
      class="container mx-auto px-4 relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center"
    >
      <div class="reveal">
        <h1
          class="mt-5 text-4xl lg:text-7xl xl:text-8xl font-bold text-brand-primary-text uppercase leading-[0.98]"
        >
          Най-горещите
          <span class="font-bold text-brand-red">парти събития</span> и
          <span class="font-bold text-brand-red">яхта партита</span> това лято
        </h1>
        <p class="max-w-[680px] mt-5 text-lg text-brand-secondary-text">
          Secret Crush създава модерни евенти с тъмна premium визия, енергична
          атмосфера и ясна информация за всяко събитие. Тук хората могат лесно
          да разгледат програмата и да стигнат до бутона за билети.
        </p>

        <div class="flex flex-wrap gap-3.5 mt-7">
          <NuxtLink
            to="#events"
            class="bg-brand-red hover:bg-brand-red hover:-translate-y-0.5 transition-all px-6 py-3.5 rounded-full font-bold text-brand-primary-text"
          >
            Разгледай събития
          </NuxtLink>
          <NuxtLink
            to="#yacht"
            class="border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-all px-6 py-3.5 rounded-full font-bold text-brand-primary-text"
          >
            Яхта партита
          </NuxtLink>
        </div>

        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3.5">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="p-4 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span
              class="block text-[11px] uppercase tracking-widest text-brand-primary-text/45"
              >{{ stat.label }}</span
            >
            <strong class="block mt-2 text-sm">{{ stat.value }}</strong>
          </div>
        </div>
      </div>

      <div class="relative group hidden lg:block">
        <div
          class="relative overflow-hidden rounded-[34px] p-3.5 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl animate-bounce-slow"
        >
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80"
            alt="Event"
            class="w-full h-[560px] object-cover rounded-[26px]"
          />
          <div
            class="absolute left-6 right-6 bottom-6 p-5 rounded-3xl bg-black/45 border border-white/10 backdrop-blur-xl"
          >
            <span class="text-[11px] text-[#ff97ac] uppercase tracking-widest"
              >Featured Event</span
            >
            <h3 class="text-2xl text-brand-primary-text uppercase mt-2">
              Back To Summer 2016 Bulgaria
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { label: "Следващ евент", value: "16.08.2026" },
  { label: "Основен формат", value: "Events + Yacht" },
  { label: "Локации", value: "София / Черноморие" },
  { label: "Платформа", value: "Mobile First" },
];
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce-slow {
  animation: float 5s ease-in-out infinite;
}
</style>
