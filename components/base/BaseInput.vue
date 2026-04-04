<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      :class="{ 'text-brand-red': valid === false }"
    >
      <slot name="label">{{ label }}</slot>
      <sup v-if="required || asterisk" class="me-1 text-brand-red">*</sup>
    </label>

    <div class="w-full">
      <textarea
        v-if="textarea"
        :id="id"
        v-model="val"
        v-focus="autofocus"
        class="w-full px-4 py-2 border rounded-md border-brand-secondary-text focus:outline-none focus:ring-1 focus:ring-brand-yellow"
        :class="{
          'border-brand-red placeholder-brand-red': valid === false,
          'bg-neutral-100  text-brand-secondary-text cursor-not-allowed':
            disabled,
        }"
        :name="name"
        :disabled="disabled"
        :readonly="isReadonly"
        :placeholder="placeholder"
        :required="required"
        @change="$emit('change')"
        @blur="$emit('blur')"
        @keyup="$emit('keyup')"
      />

      <div v-else class="relative">
        <input
          :id="id"
          v-model="val"
          v-focus="autofocus"
          class="w-full px-4 py-2 border rounded-md border-brand-secondary-text focus:outline-none focus:ring-1 focus:ring-brand-yellow"
          :class="{
            'border-brand-red placeholder-brand-red': valid === false,
            'bg-neutral-100  text-brand-secondary-text cursor-not-allowed':
              disabled,
          }"
          :type="computedType"
          :name="name"
          :step="step"
          :max="max"
          :disabled="disabled"
          :readonly="isReadonly"
          :placeholder="placeholder"
          :required="required"
          @change="$emit('change')"
          @blur="$emit('blur')"
          @keyup="$emit('keyup')"
        />

        <FontAwesomeIcon
          v-if="type === 'password'"
          :icon="showPassword ? faEyeSlash : faEye"
          class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
          @click="toggleShowPassword"
        />
      </div>

      <span v-if="error" class="text-brand-red text-xs font-bold mt-1 flex">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const emit = defineEmits(["update:modelValue", "change", "blur", "keyup"]);

const props = withDefaults(
  defineProps<{
    id?: string;
    modelValue: string | number | null | undefined;
    label?: string | null;
    name?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    isReadonly?: boolean;
    valid?: boolean | null;
    autofocus?: boolean;
    required?: boolean;
    step?: number | string;
    error?: string | null;
    textarea?: boolean;
    asterisk?: boolean;
    max?: number;
  }>(),
  {
    type: "text",
    valid: null,
  },
);

// Custom v-focus directive
const vFocus = {
  mounted: (element: HTMLInputElement | HTMLTextAreaElement) => {
    if (props.autofocus) {
      element.focus();
    }
  },
};

const val = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const showPassword = ref(false);

const computedType = computed(() => {
  return props.type === "password" && showPassword.value ? "text" : props.type;
});

function toggleShowPassword() {
  showPassword.value = !showPassword.value;
}
</script>
