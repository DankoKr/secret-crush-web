<template>
  <section class="container flex items-center py-24" id="home">
    <div
      class="mx-auto px-4 relative grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center"
    >
      <div class="reveal">
        <h1
          class="mt-5 text-2xl lg:text-6xl font-bold text-brand-primary-text uppercase leading-[0.98]"
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
          <BaseButton
            link
            :linkTo="'#events'"
            title="Разгледай събития"
            variant="primary"
            size="lg"
          />
          <BaseButton
            link
            :linkTo="'#yacht'"
            title="Яхта партита"
            variant="primary"
            size="lg"
          />
        </div>

        <div class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="p-4 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span
              class="block uppercase tracking-widest text-brand-secondary-text"
              >{{ stat.label }}</span
            >
            <strong class="block mt-2 text-brand-primary-text">{{
              stat.value
            }}</strong>
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
            <span class="text-brand-secondary-text uppercase"
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
import BaseButton from "~/components/base/BaseButton.vue";

const stats = [
  { label: "Кога", value: "16.08.2026" },
  { label: "Формат", value: "Events + Yacht" },
  { label: "Къде", value: "София / Черноморие" },
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
