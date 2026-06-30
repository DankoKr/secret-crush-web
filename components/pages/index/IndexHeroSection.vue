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
      </div>

      <div class="relative group w-full lg:h-[600px]">
        <div
          class="relative overflow-hidden rounded-[34px] p-2 md:p-3.5 border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl animate-bounce-slow"
        >
          <img
            src="/img/upcoming-events.jpeg"
            alt="Upcoming Events"
            class="w-full h-[350px] md:h-[500px] lg:h-[560px] object-cover rounded-[26px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton.vue";

const { t } = useI18n();
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
