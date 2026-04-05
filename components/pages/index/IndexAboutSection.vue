<template>
  <section class="container py-24" id="about">
    <div>
      <div class="text-center max-w-3xl mx-auto mb-12 reveal">
        <h2
          class="mt-4 font-bold text-4xl lg:text-5xl text-brand-primary-text uppercase"
        >
          За Нас
        </h2>
      </div>

      <div class="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
        <div
          class="p-8 lg:p-12 rounded-[32px] border border-white/10 bg-white/5 reveal hover:border-brand-red/40 hover:-translate-y-1 transition-all"
        >
          <img
            src="/img/logo.png"
            alt="Secret Crush logo"
            class="w-[160px] h-[90px] mb-6"
          />
          <p class="text-brand-secondary-text text-lg">
            Secret Crush организира модерни party events и яхта партита с тъмен,
            луксозен, social-first облик. Брандът комуникира не просто събития,
            а усещане, стил и принадлежност.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <div
            v-for="contact in contacts"
            :key="contact.title"
            class="p-8 rounded-[28px] border border-white/10 bg-white/5 hover:border-brand-red/40 hover:-translate-y-1 transition-all reveal"
          >
            <h4
              class="text-xl font-extrabold uppercase text-brand-primary-text"
            >
              {{ contact.title }}
            </h4>
            <p class="mt-3 text-brand-secondary-text">{{ contact.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contacts = [
  { title: "Телефон", desc: "+359 888 123 456" },
  { title: "Email", desc: "hello@secretcrush.bg" },
];
</script>
