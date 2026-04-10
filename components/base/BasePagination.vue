<template>
  <div class="flex justify-center items-center gap-2 mt-8">
    <button
      class="px-3 py-1 border rounded hover:bg-gray-100 transition-colors"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
      :disabled="currentPage === 1"
      aria-label="First page"
      title="First page"
      @click="$emit('page-changed', 1)"
    >
      &laquo;
    </button>

    <button
      class="px-3 py-1 border rounded hover:bg-gray-100 transition-colors"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
      :disabled="currentPage === 1"
      aria-label="Previous page"
      title="Previous page"
      @click="$emit('page-changed', currentPage - 1)"
    >
      &lt;
    </button>

    <div class="flex items-center gap-1">
      <template v-for="page in displayedPages" :key="page">
        <button
          v-if="page !== '...'"
          class="w-8 h-8 flex items-center justify-center rounded transition-colors"
          :class="
            page === currentPage
              ? 'bg-brand-red text-brand-primary-text'
              : 'border hover:bg-gray-100'
          "
          aria-label="Page number"
          title="Page number"
          @click="$emit('page-changed', Number(page))"
        >
          {{ page }}
        </button>
        <span v-else class="px-1">{{ page }}</span>
      </template>
    </div>

    <button
      class="px-3 py-1 border rounded hover:bg-gray-100 transition-colors"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      aria-label="Next page"
      title="Next page"
      @click="$emit('page-changed', currentPage + 1)"
    >
      &gt;
    </button>

    <button
      class="px-3 py-1 border rounded hover:bg-gray-100 transition-colors"
      :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }"
      :disabled="currentPage === totalPages"
      aria-label="Last page"
      title="Last page"
      @click="$emit('page-changed', totalPages)"
    >
      &raquo;
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

defineEmits<{
  (e: "page-changed", newPage: number): void;
}>();

const displayedPages = computed(() => {
  const result = [];

  if (props.totalPages <= 10) {
    for (let i = 1; i <= props.totalPages; i++) {
      result.push(i);
    }
  } else {
    // Always show first page
    result.push(1);

    if (props.currentPage <= 3) {
      result.push(2, 3, 4, "...", props.totalPages - 1);
    } else if (props.currentPage >= props.totalPages - 2) {
      result.push(
        "...",
        props.totalPages - 3,
        props.totalPages - 2,
        props.totalPages - 1,
      );
    } else {
      result.push(
        "...",
        props.currentPage - 1,
        props.currentPage,
        props.currentPage + 1,
        "...",
      );
    }

    // Always show last page
    result.push(props.totalPages);
  }

  return result;
});
</script>
