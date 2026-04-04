<template>
  <div :class="containerClass">
    <template v-if="isVertical">
      <BaseButton
        type="button"
        title="+"
        :size="size"
        :class="buttonSizeClass"
        :disabled="disableButtons"
        @click="increment"
      />
      <span class="my-1 text-sm sm:text-base">{{ quantity }}</span>
      <BaseButton
        type="button"
        title="-"
        :size="size"
        :class="buttonSizeClass"
        :disabled="disableButtons || isDecrementDisabled"
        @click="decrement"
      />
    </template>

    <template v-else>
      <BaseButton
        type="button"
        title="-"
        :size="size"
        :class="buttonSizeClass"
        :disabled="disableButtons || isDecrementDisabled"
        @click="decrement"
      />
      <span class="mx-1 sm:mx-2 text-sm sm:text-base">{{ quantity }}</span>
      <BaseButton
        type="button"
        title="+"
        :size="size"
        :class="buttonSizeClass"
        :disabled="disableButtons"
        @click="increment"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseButton from "~/components/base/BaseButton.vue";

const props = defineProps<{
  quantity: number;
  itemId: number;
  size?: "xs" | "sm" | "md" | "lg";
  onIncrement: (itemId: number) => void;
  onDecrement: (itemId: number) => void;
  disableButtons?: boolean;
  isDecrementDisabled?: boolean;
  direction?: "horizontal" | "vertical";
}>();

const isVertical = computed(() => props.direction === "vertical");

const increment = () => {
  props.onIncrement(props.itemId);
};

const decrement = () => {
  props.onDecrement(props.itemId);
};

const buttonSizeClass = computed(() => {
  switch (props.size) {
    case "xs":
      return "w-7 h-7 text-xs justify-center";
    case "lg":
      return "w-14 h-14 text-2xl justify-center";
    case "md":
      return "w-12 h-12 text-xl justify-center";
    case "sm":
      return "w-8 h-8 text-lg justify-center";
    default:
      return "w-8 h-8 text-lg justify-center";
  }
});

const containerClass = computed(() => {
  return [
    "flex",
    props.direction === "vertical"
      ? "flex-col items-center space-y-1"
      : "items-center",
  ];
});
</script>
