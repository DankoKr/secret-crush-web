<template>
  <section class="py-32" id="events">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2
          class="font-bold text-4xl lg:text-5xl text-brand-primary-text uppercase"
        >
          Събития
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="event in events"
          :key="event.title"
          class="group rounded-[30px] overflow-hidden border border-white/10 bg-white/5 hover:border-brand-red/40 hover:-translate-y-1.5 transition-all"
        >
          <div class="relative">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-full h-72 object-cover"
            />
          </div>
          <div class="p-6">
            <div
              class="flex gap-3 text-[#ff9fb0] text-[12px] uppercase tracking-widest"
            >
              <span>{{ event.date }}</span>
              <span>•</span>
              <span>{{ event.location }}</span>
            </div>
            <h3
              class="mt-4 text-2xl text-brand-primary-text uppercase leading-tight"
            >
              {{ event.title }}
            </h3>
            <p class="mt-3 text-brand-secondary-text text-sm">
              {{ event.description }}
            </p>
            <div class="flex gap-3 mt-6">
              <button
                class="bg-brand-red px-4 py-2 rounded-full text-xs font-bold"
              >
                Купи билет
              </button>
              <button
                class="border border-white/10 bg-white/5 px-4 py-2 rounded-full text-xs font-bold"
              >
                Повече инфо
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const events = [
  {
    title: "Back To Summer 2016",
    date: "16 авг 2026",
    location: "София",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    description: "Основен summer event с голяма публика и premium night vibe.",
  },
  {
    title: "Midnight Heat",
    date: "30 авг 2026",
    location: "Пловдив",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    description:
      "Тъмен клубен евент с модерни светлини и elegant party настроение.",
  },
  {
    title: "Red Kiss Rooftop",
    date: "12 сеп 2026",
    location: "Варна",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    description: "Sunset rooftop атмосфера, коктейли и deep house настроение.",
  },
];
</script>
