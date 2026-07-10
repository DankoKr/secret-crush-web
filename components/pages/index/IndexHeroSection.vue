<template>
  <section
    class="container relative flex flex-col lg:flex-row lg:items-center py-6 md:py-24"
    id="home"
  >
    <div
      class="mx-auto relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full"
    >
      <div class="reveal flex flex-col justify-center">
        <h1
          class="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-brand-primary-text uppercase tracking-tight leading-none flex flex-col gap-1"
        >
          <span>{{ t("index.hero.headline.part1") }}</span>
          <span class="text-brand-red">{{
            t("index.hero.headline.emphasis1")
          }}</span>
          <span>{{ t("index.hero.headline.part2") }}</span>
        </h1>

        <div class="w-16 h-[3px] bg-brand-red mt-5 mb-6"></div>

        <p
          class="text-xs font-bold uppercase tracking-[0.2em] mb-8 leading-relaxed"
        >
          <span class="text-brand-primary-text">{{
            t("index.hero.subheadline.part1")
          }}</span>
          <br class="block sm:hidden" />
          <span class="text-brand-red">{{
            t("index.hero.subheadline.emphasis1")
          }}</span>
          <span class="text-brand-primary-text">{{
            t("index.hero.subheadline.part2")
          }}</span>
        </p>

        <div class="flex flex-col gap-3.5 w-full max-w-md">
          <BaseButton
            link
            :linkTo="'#events'"
            variant="primary"
            size="lg"
            class="w-full justify-between"
          >
            <span>{{ t("index.hero.buttons.exploreEvents") }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </BaseButton>

          <BaseButton
            link
            :linkTo="'#yacht'"
            variant="secondary"
            size="lg"
            class="w-full justify-between"
          >
            <span>{{ t("index.hero.buttons.yachtParties") }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </BaseButton>
        </div>

        <div class="mt-10 grid grid-cols-2 gap-4 w-full max-w-md">
          <template v-if="closestEvent">
            <IndexHeroStatsCard
              :label="t('index.hero.stats.nextEvent')"
              :value="closestEvent?.date"
              :subtext="closestEvent?.location || 'Sunny Beach'"
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-brand-red mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </template>
            </IndexHeroStatsCard>

            <IndexHeroStatsCard
              :label="t('index.hero.stats.format')"
              :value="closestEvent?.type?.name"
              subtext="& Club Events"
            >
              <template #icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-brand-red mb-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.98 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </template>
            </IndexHeroStatsCard>
          </template>
          <template v-else>
            <div
              v-for="i in 2"
              :key="i"
              class="p-5 rounded-2xl border border-white/10 bg-[#0c0c0e]/60 backdrop-blur-md h-[125px] flex items-center justify-center"
            >
              <BaseLoader size="sm" :full-height="false" :show-text="false" />
            </div>
          </template>
        </div>

        <div v-if="closestEvent" class="mt-10 block lg:hidden w-full">
          <div
            class="relative overflow-hidden rounded-[24px] p-1.5 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl"
          >
            <NuxtImg
              src="/img/upcoming-events.jpeg"
              alt="Upcoming Events Mobile View"
              class="w-full h-[280px] sm:h-[350px] object-cover rounded-[18px]"
            />
          </div>
        </div>
      </div>

      <div
        class="relative group w-full lg:h-[600px] hidden lg:block"
        v-if="closestEvent"
      >
        <div
          class="relative overflow-hidden rounded-[34px] p-2 md:p-3.5 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl animate-bounce-slow cursor-pointer"
          @click="navigateTo(closestEvent.ticketUrl, { external: true })"
        >
          <NuxtImg
            src="/img/upcoming-events.jpeg"
            alt="Upcoming Events"
            class="w-full h-[350px] md:h-[500px] lg:h-[560px] object-cover rounded-[26px]"
          />
        </div>
      </div>

      <div class="relative w-full hidden lg:block" v-else>
        <div
          class="w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-[34px] bg-white/5 border border-white/10 flex items-center justify-center"
        >
          <BaseLoader size="lg" :show-text="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseLoader from "~/components/base/BaseLoader.vue";
import BaseButton from "~/components/base/BaseButton.vue";
import IndexHeroStatsCard from "~/components/pages/index/IndexHeroStatsCard.vue";
import { onMounted, computed } from "vue";
import { useEventStore } from "~/stores/event.store";

const { t } = useI18n();
const eventStore = useEventStore();

const closestEvent = computed(() => eventStore.getClosestEvent);

onMounted(async () => {
  await eventStore.fetchClosestEvent();
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
