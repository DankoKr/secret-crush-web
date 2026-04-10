<template>
  <div class="">
    <label v-if="label">
      <slot name="label">{{ label }}</slot>
      <sup v-if="required" class="text-brand-red">*</sup>
    </label>
    <select
      v-model="val"
      class="block w-full py-3 px-3 text-gray-700 bg-white border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:border-brand-red sm:text-sm font-semibold"
      :class="{
        'bg-gray-100 border-gray-100': classic,
        'border-red-500 focus:ring-red-500': inputHasErrors,
        'cursor-not-allowed bg-gray-100 text-gray-500': disabled,
      }"
      :name="name"
      :required="required"
      :multiple="multiple"
      :disabled="disabled"
    >
      <option
        v-if="(placeholder || clearable) && !multiple"
        disabled
        :selected="val === null || val === undefined || val === ''"
        value=""
      >
        {{ placeholder || "Select an option" }}
      </option>

      <option
        v-for="option in options"
        :key="option.id"
        :value="option.value || option.label"
        :disabled="option.isDisabled"
      >
        {{
          typeof option.label === "string"
            ? option.label
            : typeof option.label === "object"
              ? option.label.en || ""
              : (option as any).name?.en || (option as any).name || ""
        }}
      </option>
    </select>
    <span v-if="helpText" class="block text-xs text-gray-500 mt-1">
      {{ helpText }}
    </span>
    <template v-if="inputErrors">
      <span
        v-for="(error, index) in inputErrors"
        :key="index"
        class="block text-xs text-red-500 mt-1"
      >
        {{ error }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

export interface Option {
  id: number | string;
  label?: string | Record<string, string>;
  value?: number | string;
  isDisabled?: boolean;
}

const props = defineProps<{
  modelValue?: object | number | string | null;
  name?: string;
  label?: string | null;
  disabled?: boolean;
  clearable?: boolean;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  options?: Option[];
  classic?: boolean;
  multiple?: boolean;
  hasErrors?: boolean;
  errors?: string[];
  asterisk?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const inputHasErrors = ref(props.hasErrors);
const inputErrors = ref(props.errors);

watch(
  () => props.hasErrors,
  (value) => {
    inputHasErrors.value = value;
  },
);
watch(
  () => props.errors,
  (value) => {
    inputErrors.value = value;
  },
);

const val = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    inputHasErrors.value = false;
    inputErrors.value = [];
    emit("update:modelValue", value);
  },
});
</script>
