<template>
  <section class="container flex items-center py-6 md:py-24" id="home">
    <div
      class="mx-auto relative grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center"
    >
      <div class="reveal">
        <h1
          class="mt-5 text-4xl lg:text-5xl font-bold text-brand-primary-text uppercase"
        >
          {{ t("index.hero.headline.part1") }}
          <span class="font-bold text-brand-red">
            {{ t("index.hero.headline.emphasis1") }}
          </span>
          {{ t("index.hero.headline.middle") }}
          <span class="font-bold text-brand-red">
            {{ t("index.hero.headline.emphasis2") }}
          </span>
          {{ t("index.hero.headline.part2") }}
        </h1>
        <p class="max-w-[680px] mt-5 text-lg text-brand-secondary-text">
          {{ t("index.hero.subtitle") }}
        </p>

        <div class="flex flex-wrap gap-3.5 mt-7">
          <BaseButton
            link
            :linkTo="'#events'"
            :title="t('index.hero.buttons.exploreEvents')"
            variant="primary"
            size="lg"
          />
          <BaseButton
            link
            :linkTo="'#yacht'"
            :title="t('index.hero.buttons.yachtParties')"
            variant="primary"
            size="lg"
          />
        </div>

        <div class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          <template v-if="closestEvent">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="p-4 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span
                class="block uppercase tracking-widest text-brand-secondary-text"
              >
                {{ stat.label }}
              </span>
              <strong class="block mt-2 text-brand-primary-text">{{
                stat.value
              }}</strong>
            </div>
          </template>
          <template v-else>
            <div
              v-for="i in 3"
              :key="i"
              class="p-4 rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-md h-[92px] flex items-center justify-center"
            >
              <BaseLoader size="sm" :full-height="false" :show-text="false" />
            </div>
          </template>
        </div>
      </div>

      <div class="relative group h-[600px]" v-if="closestEvent">
        <div
          class="relative overflow-hidden rounded-[34px] p-3.5 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl animate-bounce-slow"
        >
          <img
            :src="closestEvent.images?.[0]?.imageUrl"
            :alt="closestEvent.name"
            class="w-full h-[560px] object-cover rounded-[26px]"
          />
          <div
            class="absolute left-6 right-6 bottom-6 p-5 rounded-3xl bg-black/45 border border-white/10 backdrop-blur-xl"
          >
            <span class="text-brand-secondary-text uppercase">
              {{ t("index.hero.featured.label") }}
            </span>
            <h3
              class="md:text-2xl text-xl text-brand-primary-text uppercase mt-2"
            >
              {{ closestEvent.name }}
            </h3>
          </div>
        </div>
      </div>

      <div class="relative" v-else>
        <div
          class="w-full h-[600px] rounded-[34px] bg-white/5 border border-white/10 flex items-center justify-center"
        >
          <BaseLoader size="lg" :show-text="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseLoader from "~/components/base/BaseLoader.vue";
import { onMounted, computed } from "vue";
import { useEventStore } from "~/stores/event.store";
import BaseButton from "~/components/base/BaseButton.vue";

const { t } = useI18n();
const eventStore = useEventStore();
const { $dayjs } = useNuxtApp();

const closestEvent = computed(() => eventStore.getClosestEvent);

onMounted(async () => {
  await eventStore.fetchClosestEvent();
});

const stats = computed(() => {
  const event = closestEvent.value;
  return [
    {
      label: t("index.hero.stats.when"),
      value: event?.date,
    },
    {
      label: t("index.hero.stats.format"),
      value: event?.type?.name,
    },
    {
      label: t("index.hero.stats.where"),
      value: event?.location,
    },
  ];
});
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
