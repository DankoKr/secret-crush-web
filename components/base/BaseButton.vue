<template>
  <component
    :is="componentToShow"
    :type="!props.link ? type : 'link'"
    :class="computedClasses"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :to="linkToComputed"
  >
    <FontAwesomeIcon v-if="prependIcon && !loading" :icon="prependIcon" />
    <FontAwesomeIcon v-if="loading" :icon="faSpinner" class="animate-spin" />
    {{ title }}
    <FontAwesomeIcon v-if="appendIcon && !loading" :icon="appendIcon" />
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";
import type { LocationQuery } from "vue-router";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const props = defineProps<{
  link?: boolean;
  linkTo?: string | LocationQuery | null;
  title?: string | null;
  appendIcon?: IconDefinition;
  prependIcon?: IconDefinition;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  variant?: "primary" | "secondary" | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "button" | "submit" | "reset";
}>();

const componentToShow = computed(() => {
  return props.link ? resolveComponent("NuxtLink") : "button";
});

const type = props.type || "button";

const linkToComputed = computed(() => props.linkTo);

const computedClasses = computed(() => {
  const baseClasses =
    "inline-flex items-center font-bold justify-center gap-1 transition-all rounded-xl disabled:opacity-50 no-underline hover:no-underline border border-transparent uppercase";

  const colorVariants = {
    primary:
      "bg-brand-red text-brand-primary-text hover:bg-brand-red hover:text-brand-primary-text border-transparent",

    secondary:
      "bg-transparent text-brand-secondary-text hover:bg-brand-red hover:text-brand-primary-text border-transparent",

    white: "bg-white text-black border-white hover:bg-white hover:text-black",

    default: "bg-brand-yellow text-brand-primary-text",
  };

  const defaultColorClasses =
    props.variant && props.variant in colorVariants
      ? colorVariants[props.variant as keyof typeof colorVariants]
      : colorVariants.primary;

  const colorClasses = props.color || defaultColorClasses;

  let sizeClasses = "";
  switch (props.size) {
    case "xs":
      sizeClasses = "py-0.5 px-1 text-xs";
      break;
    case "sm":
      sizeClasses = "py-1 px-2 text-sm";
      break;
    case "lg":
      sizeClasses = "py-3 px-6 text-md";
      break;
    case "xl":
      sizeClasses = "py-3 px-8 text-lg";
      break;
    case "md":
    default:
      sizeClasses = "py-2 px-4 text-base";
      break;
  }

  return `${baseClasses} ${colorClasses} ${sizeClasses}`;
});
</script>
