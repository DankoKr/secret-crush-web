<template>
  <div class="mt-2">
    <label class="block mb-[5px]">
      {{ label }}
    </label>

    <div :class="['radio-group', { 'flex gap-4': horizontal }]">
      <div
        v-for="option in options"
        :key="option.value"
        :class="[{ 'mb-1': !horizontal }]"
      >
        <label class="cursor-pointer w-100 text-sm">
          <input
            v-model="val"
            type="radio"
            :name="name"
            :value="option.value"
            :disabled="disabled"
            :required="required"
            @blur="$emit('blur')"
          />
          {{ option.label }}
        </label>
      </div>
    </div>

    <span v-if="helpText">
      {{ helpText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string | number;
  name?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  horizontal?: boolean;
  flag?: string;
  options: { label: string; value: string | number }[];
}>();

const emit = defineEmits(["update:modelValue", "blur"]);

const val = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
