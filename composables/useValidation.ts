import type { ValidationValue, ValidationRule } from "~/types/common.types";

export const useValidation = () => {
  const { t } = useI18n();
  const errors = ref<Record<string, string[]>>({});
  const touchedFields = ref<Record<string, boolean>>({});

  /**
   * Validate a single value against a set of rules
   */
  const validate = (
    value: ValidationValue,
    rules: ValidationRule[],
    fieldName: string,
  ): boolean => {
    if (!errors.value[fieldName]) {
      errors.value[fieldName] = [];
    }

    // Clear previous errors for this field
    errors.value[fieldName] = [];

    // Mark field as touched
    touchedFields.value[fieldName] = true;

    // Check each validation rule
    for (const rule of rules) {
      if (!rule.validator(value)) {
        errors.value[fieldName].push(rule.message);
      }
    }

    return errors.value[fieldName].length === 0;
  };

  /**
   * Validate multiple fields at once
   */
  const validateForm = (
    formData: Record<string, ValidationValue>,
    validationRules: Record<string, ValidationRule[]>,
  ): boolean => {
    let isFormValid = true;

    for (const [fieldName, rules] of Object.entries(validationRules)) {
      const fieldIsValid = validate(formData[fieldName], rules, fieldName);
      isFormValid = isFormValid && fieldIsValid;
    }

    return isFormValid;
  };

  /**
   * Mark a field as touched (usually on blur)
   */
  const resetField = (fieldName: string) => {
    errors.value[fieldName] = [];
  };

  /**
   * Reset all errors and touched states
   */
  const resetValidation = () => {
    errors.value = {};
    touchedFields.value = {};
  };

  /**
   * Check if a field has errors and has been touched
   */
  const isValid = (fieldName: string) => {
    return (
      touchedFields.value[fieldName] && errors.value[fieldName]?.length > 0
    );
  };

  /**
   * Get the first error message for a field
   */
  const getErrorMessage = (fieldName: string) => {
    if (isValid(fieldName)) {
      return errors.value[fieldName][0];
    }
    return "";
  };

  /**
   * Common validation rules
   */
  const { $l } = useNuxtApp();
  const rules = {
    required: (message = t("validation.required")): ValidationRule => ({
      validator: (value) =>
        !!value && (typeof value !== "string" || value.trim() !== ""),
      message,
    }),
    email: (message = t("validation.email")): ValidationRule => ({
      validator: (value) => {
        if (!value) return true; // Skip validation if empty
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return typeof value === "string" && emailRegex.test(value);
      },
      message,
    }),
    date: (message = t("validation.date")): ValidationRule => ({
      validator: (value) => {
        if (!value || typeof value === "boolean") return true;
        if (typeof value !== "string" && typeof value !== "number")
          return false;
        const date = new Date(value);
        return !isNaN(date.getTime());
      },
      message,
    }),

    phone: (message = t("validation.phone")): ValidationRule => ({
      validator: (value) => {
        if (!value) return true; // Skip validation if empty
        // This regex allows various phone formats with optional country codes
        const phoneRegex =
          /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/;
        return typeof value === "string" && phoneRegex.test(value);
      },
      message,
    }),
    password: (
      message = t("validation.password"),
      options = {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecial: true,
      },
    ): ValidationRule => ({
      validator: (value) => {
        if (!value) return true; // Skip validation if empty
        if (typeof value !== "string") return false;

        const checks = {
          minLength: options.minLength
            ? value.length >= options.minLength
            : true,
          uppercase: !options.requireUppercase || /[A-Z]/.test(value),
          lowercase: !options.requireLowercase || /[a-z]/.test(value),
          numbers: !options.requireNumbers || /[0-9]/.test(value),
          special: !options.requireSpecial || /[^A-Za-z0-9]/.test(value),
        };

        return (
          checks.minLength &&
          checks.uppercase &&
          checks.lowercase &&
          checks.numbers &&
          checks.special
        );
      },
      message,
    }),
  };

  return {
    validate,
    validateForm,
    resetField,
    resetValidation,
    isValid,
    getErrorMessage,
    rules,
    errors,
    touchedFields,
  };
};
