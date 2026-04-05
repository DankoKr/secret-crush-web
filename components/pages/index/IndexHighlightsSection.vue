<template>
  <section class="py-24 bg-brand-bg">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="mt-4 text-4xl lg:text-5xl text-brand-primary-text uppercase">
          Главни акценти
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="item in highlights"
          :key="item.title"
          class="p-7 rounded-[28px] border border-white/10 bg-white/5 hover:border-brand-red/40 hover:-translate-y-1 transition-all"
        >
          <h3 class="text-xl font-extrabold uppercase">{{ item.title }}</h3>
          <p class="mt-3 text-brand-secondary-text">{{ item.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const highlights = [
  {
    title: "Следващ Евент",
    desc: "Акцентна секция с дата, снимка и директен билетен бутон.",
  },
  {
    title: "Яхта Партита",
    desc: "Отделна страница с повече място за снимки, видеа и VIP информация.",
  },
  {
    title: "За Secret Crush",
    desc: "Кратка история, идентичност на бранда и атмосферата.",
  },
];
</script>
