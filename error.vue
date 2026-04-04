<template>
  <div class="min-h-screen flex items-center justify-center bg-brand-beige">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4 text-brand-green--dark">
        Custom errror page
      </h1>
      <span>
        <BaseButton title="Home" @click="handleError" />
      </span>
    </div>
  </div>
</template>

<script setup>
import { useError, clearError, useHead } from "#imports";
import { computed } from "vue";
import BaseButton from "./components/base/BaseButton.vue";

const error = useError();

const title = computed(() => {
  return "SecretCrush | " + error.value?.statusCode;
});

useHead({
  title: title.value,
});

const handleError = () => {
  useHead({ title: "SecretCrush" });
  clearError({ redirect: "/" });
};
</script>
