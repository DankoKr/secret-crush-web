<template>
  <section class="py-24" id="contact">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
        <div class="p-8 rounded-[30px] border border-white/10 bg-white/5">
          <img
            src="/img/logo.png"
            class="w-16 h-16 rounded-full border border-white/10"
          />
          <h3 class="mt-5 text-3xl font-black uppercase">Свържи се с нас</h3>
          <ul class="mt-4 space-y-2 text-brand-secondary-text">
            <li><strong>Телефон:</strong> +359 888 123 456</li>
            <li><strong>Email:</strong> hello@secretcrush.bg</li>
            <li><strong>Instagram:</strong> @secretcrushbg</li>
          </ul>
        </div>

        <form
          class="p-8 rounded-[30px] border border-white/10 bg-white/5 grid gap-4"
        >
          <input
            type="text"
            placeholder="Име"
            class="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-brand-red-light transition-colors"
          />
          <input
            type="text"
            placeholder="Телефон или имейл"
            class="w-full bg-black/30 border border-white/10 p-4 rounded-xl outline-none focus:border-brand-red-light transition-colors"
          />
          <textarea
            placeholder="Съобщение"
            class="w-full bg-black/30 border border-white/10 p-4 rounded-xl min-h-[150px] outline-none focus:border-brand-red-light transition-colors"
          ></textarea>
          <button
            type="submit"
            class="bg-brand-red hover:bg-brand-red-light py-4 rounded-full font-bold text-white transition-all uppercase tracking-widest"
          >
            Изпрати
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
